import React, { useEffect, useRef, useState, VFC } from 'react';
import { useSnapshot } from 'valtio';
import { css } from '@emotion/css';
import { Html } from '@react-three/drei';
import { HtmlProps } from '@react-three/drei/web/Html';
import { ElementSymbol } from '../../modules/datas';
import { placementStatus, tableState } from '../../modules/store';

type CardType = {
	data: ElementSymbol
}

export const Card: VFC<CardType> = ({ data }) => {
	const htmlRef = useRef<HTMLDivElement>(null)
	const symbolRef = useRef<HTMLDivElement>(null)
	const dividerRef = useRef<HTMLDivElement>(null)
	const detailRef = useRef<HTMLDivElement>(null)

	const tableSnap = useSnapshot(tableState)

	const [htmlProps, setHTMLProps] = useState<HtmlProps>({
		center: true,
		transform: true,
		zIndexRange: [0, 0]
	})

	useEffect(() => {
		if (placementStatus.mode === 'table') {
			setHTMLProps({ ...htmlProps, zIndexRange: [0, 0] })
		} else {
			setHTMLProps({ ...htmlProps, zIndexRange: undefined })
		}
	}, [tableSnap.mode])

	const handlePointerEnter = () => {
		if (0 < data.z) {
			symbolRef.current!.classList.toggle('active')
			dividerRef.current!.classList.toggle('active')
			detailRef.current!.classList.toggle('active')
		}
		if (placementStatus.mode === 'table') {
			setHTMLProps({ ...htmlProps, zIndexRange: [1, 0] })
		}
	}

	const handlePointerLeave = () => {
		if (0 < data.z) {
			symbolRef.current!.classList.toggle('active')
			dividerRef.current!.classList.toggle('active')
			detailRef.current!.classList.toggle('active')
		}
		if (placementStatus.mode === 'table') {
			setHTMLProps({ ...htmlProps, zIndexRange: [0, 0] })
		}
	}

	return (
		<Html ref={htmlRef} {...htmlProps}>
			<div
				className={styles.container(data.color)}
				onPointerEnter={handlePointerEnter}
				onPointerLeave={handlePointerLeave}>
				<div ref={symbolRef} className={styles.symbol(data.color)}>
					{data.symbol}
				</div>
				<div ref={detailRef} className={styles.detail}>
					<div ref={dividerRef} className={styles.divider(data.color)} />
					<table>
						<tbody>
							<tr>
								<th scope="row" align="right">
									la
								</th>
								<td>{data.la}</td>
							</tr>
							<tr>
								<th scope="row" align="right">
									en
								</th>
								<td>{data.en}</td>
							</tr>
							<tr>
								<th scope="row" align="right">
									ja
								</th>
								<td>{data.jp}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</Html>
	)
}

const styles = {
	container: (color: string) => css`
		position: relative;
		width: 50px;
		height: 50px;
		border: 2px solid ${color};
		background-color: rgba(0, 0, 0, 0.8);
		border-radius: 2px;
		font-family: 'Roboto', sans-serif;
		user-select: none;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: width 0.3s, height 0.3s;

		&:hover {
			width: 120px;
			height: 120px;
		}
	`,
	symbol: (color: string) => css`
		position: absolute;
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 2px;
		color: ${color};
		transform: translate(0, 0px);
		transition: transform 0.3s;

		&.active {
			transform: translate(0, -40px);
		}
	`,
	divider: (color: string) => css`
		width: 0%;
		height: 1px;
		background-color: ${color};

		&.active {
			width: 90%;
			transition: width 0.3s 0.6s;
		}
	`,
	detail: css`
		width: 100%;
		color: #fff;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		grid-gap: 5px;
		transform: translate(0, -50px);
		opacity: 0;
		transition: transform 0.3s, opacity 0.3s;

		&.active {
			transform: translate(0, 0px);
			opacity: 1;
			transition: transform 0.3s 0.3s, opacity 0.3s 0.3s;
		}
	`
}
