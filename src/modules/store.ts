import { proxy } from 'valtio';

export type Mode = 'table' | 'sphere' | 'helix'

type PlacementStatus = {
	prevMode: Mode
	mode: Mode
	table: () => void
	sphere: () => void
	helix: () => void
}

export const placementStatus: PlacementStatus = {
	prevMode: 'table',
	mode: 'table',
	table: () => {
		placementStatus.mode = 'table'
	},
	sphere: () => {
		placementStatus.mode = 'sphere'
	},
	helix: () => {
		placementStatus.mode = 'helix'
	}
}

export const tableState = proxy<{ mode: Mode }>({ mode: 'table' })
