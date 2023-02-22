import React from 'react'
import Toolbar from '../components/Toolbar'
import SettingBar from '../components/SettingBar'
import Canvas from '../components/Canvas'

const MainPage = () => {
	return (
		<div>
			<Toolbar/>
			<SettingBar/>
			<Canvas/>
		</div>
	)
}

export default MainPage