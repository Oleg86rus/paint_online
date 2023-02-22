import React from 'react'
import toolState from '../store/toolState'

const SettingBar = () => {
	return (
		<div className='setting-bar'>
			<label htmlFor="line-width">Толщина линии</label>
			<input
				type="number"
				id='line-width'
				style={{margin: '0 10px'}}
				min={1} max={50}
				defaultValue={1}
				onChange={(e) => toolState.setLineWidth(e.target.value)}
			/>
			<label htmlFor="stroke-color">Цвет Обводки</label>
			<input type="color" id='stroke-color' onChange={e => toolState.setStrokeColor(e.target.value)}/>
		</div>
	)
}

export default SettingBar
