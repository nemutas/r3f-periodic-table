import gsap from 'gsap';
import React, { useRef, VFC } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { periodicTableDatas } from '../../modules/datas';
import { GUIController } from '../../modules/gui';
import { placementStatus, tableState } from '../../modules/store';
import { Card } from './Card';
import { usePlacement } from './usePlacement';

export const PeriodicTable: VFC = () => {
	const groupRef = useRef<THREE.Group>(null)

	const { getPlacement } = usePlacement()
	const defaultPlacement = getPlacement(placementStatus.mode)

	const { scene, camera } = useThree()

	const gui = GUIController.instance
	gui.addButton(placementStatus, 'table')
	gui.addButton(placementStatus, 'sphere')
	gui.addButton(placementStatus, 'helix')

	const animation = () => {
		// get placement
		const toPlacement = getPlacement(placementStatus.mode)

		for (let i = 0; i < groupRef.current!.children.length; i++) {
			const htmlObject = groupRef.current!.children[i] as THREE.Group

			gsap.to(htmlObject.position, {
				x: toPlacement[i].position.x,
				y: toPlacement[i].position.y,
				z: toPlacement[i].position.z,
				duration: 1.5 + Math.random(),
				ease: 'power2.inOut'
			})
			gsap.to(htmlObject.rotation, {
				x: toPlacement[i].rotation.x,
				y: toPlacement[i].rotation.y,
				z: toPlacement[i].rotation.z,
				duration: 1.5 + Math.random(),
				ease: 'power2.inOut'
			})
		}

		// reset camera
		const orbitControls = (scene as any).orbitControls

		gsap.to(camera.position, {
			x: orbitControls.position0.x,
			y: orbitControls.position0.y,
			z: orbitControls.position0.z,
			duration: 1.5,
			ease: 'power2.inOut'
		})

		gsap.to(orbitControls.target, {
			x: orbitControls.target0.x,
			y: orbitControls.target0.y,
			z: orbitControls.target0.z,
			duration: 1.5,
			ease: 'power2.inOut'
		})
	}

	useFrame(() => {
		if (placementStatus.prevMode !== placementStatus.mode) {
			animation()
			tableState.mode = placementStatus.mode
			placementStatus.prevMode = placementStatus.mode
		}
	})

	return (
		<group ref={groupRef}>
			{periodicTableDatas.map((data, i) => {
				const obj = defaultPlacement[i]
				return (
					<group key={i} position={obj.position} rotation={obj.rotation} scale={0.7}>
						<Card data={data} />
					</group>
				)
			})}
		</group>
	)
}
