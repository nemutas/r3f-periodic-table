import { useMemo } from 'react';
import * as THREE from 'three';
import { periodicTableDatas, periodicTableInfo } from '../../modules/datas';
import { Mode } from '../../modules/store';

export const usePlacement = () => {
	const tablePlacement = useMemo(() => {
		const objects: THREE.Object3D[] = []
		const object = new THREE.Object3D()
		const [row, col] = [periodicTableInfo.row, periodicTableInfo.column]

		for (let i = 0; i < periodicTableDatas.length; i++) {
			const [ri, ci] = [periodicTableDatas[i].row - 1, periodicTableDatas[i].column - 1]
			const x = ci - col / 2 + 0.5
			const y = -ri + row / 2 - 0.5
			object.position.set(x, y, 0)
			objects.push(object.clone())
		}
		return objects
	}, [])

	const spherePlacement = useMemo(() => {
		const objects: THREE.Object3D[] = []
		const object = new THREE.Object3D()
		const vector = new THREE.Vector3()
		for (let i = 0; i < periodicTableDatas.length; i++) {
			const phi = Math.acos(-1 + (2 * i) / periodicTableDatas.length)
			const theta = Math.sqrt(periodicTableDatas.length * Math.PI) * phi
			object.position.setFromSphericalCoords(5, phi, theta)
			vector.copy(object.position).multiplyScalar(2)
			object.lookAt(vector)
			objects.push(object.clone())
		}
		return objects
	}, [])

	const helixPlacement = useMemo(() => {
		const objects: THREE.Object3D[] = []
		const object = new THREE.Object3D()
		const vector = new THREE.Vector3()
		for (let i = 0; i < periodicTableDatas.length; i++) {
			const theta = (i / periodicTableDatas.length) * 2 * Math.PI * 5
			const x = 5 * Math.sin(theta)
			const z = 5 * Math.cos(theta)
			const y = i * 0.015 * 5 - 4
			object.position.set(x, y, z)
			vector.set(x * 2, y, z * 2)
			object.lookAt(vector)
			objects.push(object.clone())
		}
		return objects
	}, [])

	const getPlacement = (mode: Mode) => {
		let placement
		switch (mode) {
			case 'sphere':
				placement = spherePlacement
				break
			case 'helix':
				placement = helixPlacement
				break
			default:
				placement = tablePlacement
		}
		return placement
	}

	return { getPlacement }
}
