import React, { Component } from 'react'
import BoxWithImage from './BoxWithImage'
import BoxWithHandle from './BoxWithHandle'

import DnDContext from '../../DnDContext'

@DnDContext
export default class Container extends Component {
	render() {
		return (
			<div>
				<div style={{ marginTop: '1.5rem' }}>
					<BoxWithHandle />
					<BoxWithImage />
				</div>
			</div>
		)
	}
}
