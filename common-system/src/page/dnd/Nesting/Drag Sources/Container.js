import React, { Component } from 'react'
import SourceBox from './SourceBox'
import TargetBox from './TargetBox'
import Colors from './Colors'
import DnDContext from '../../DnDContext'

@DnDContext
export default class Container extends Component {
	render() {
		return (
			<div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
				<div style={{ float: 'left' }}>
					<SourceBox color={Colors.BLUE}>
						<SourceBox color={Colors.YELLOW}>
							<SourceBox color={Colors.YELLOW} />
							<SourceBox color={Colors.BLUE} />
						</SourceBox>
						<SourceBox color={Colors.BLUE}>
							<SourceBox color={Colors.YELLOW} />
						</SourceBox>
					</SourceBox>
				</div>

				<div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
					<TargetBox />
				</div>
			</div>
		)
	}
}
