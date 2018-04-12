import React, { Component } from 'react'
import SourceBox from './SourceBox'
import TargetBox from './TargetBox'
import DnDContext from '../../DnDContext'

@DnDContext
export default class Container extends Component {
	render() {
		return (
			<div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
				<div style={{ float: 'left' }}>
					<SourceBox showCopyIcon />
					<SourceBox />
				</div>
				<div style={{ float: 'left' }}>
					<TargetBox />
				</div>
			</div>
		)
	}
}
