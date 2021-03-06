import React, { VFC } from 'react';
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PeriodicTable } from './PeriodicTable';

export const TCanvas: VFC = () => {
	return (
		<Canvas
			camera={{
				position: [0, 0, 13],
				fov: 50,
				aspect: window.innerWidth / window.innerHeight,
				near: 0.1,
				far: 2000
			}}
			dpr={window.devicePixelRatio}>
			{/* scene */}
			<color attach="background" args={['#000']} />
			{/* camera controller */}
			<OrbitControls attach="orbitControls" />
			{/* objects */}
			<PeriodicTable />
			{/* helper */}
			<Stats />
			{/* <axesHelper /> */}
		</Canvas>
	)
}
