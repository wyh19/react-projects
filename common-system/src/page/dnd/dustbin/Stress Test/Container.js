import React, { Component } from 'react'
import update from 'immutability-helper'
import { NativeTypes } from 'react-dnd-html5-backend'
import shuffle from 'lodash/shuffle'
import Dustbin from './Dustbin'
import Box from './Box'
import ItemTypes from './ItemTypes'
import DnDContext from '../../DnDContext'

@DnDContext
export default class Container extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dustbins: [
				{ accepts: [ItemTypes.GLASS], lastDroppedItem: null },
				{ accepts: [ItemTypes.FOOD], lastDroppedItem: null },
				{
					accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
					lastDroppedItem: null,
				},
				{ accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
			],
			boxes: [
				{ name: 'Bottle', type: ItemTypes.GLASS },
				{ name: 'Banana', type: ItemTypes.FOOD },
				{ name: 'Magazine', type: ItemTypes.PAPER },
			],
			droppedBoxNames: [],
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tickTock(), 1000)
	}

	tickTock() {
		this.setState({
			boxes: shuffle(this.state.boxes),
			dustbins: shuffle(this.state.dustbins),
		})
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	isDropped(boxName) {
		return this.state.droppedBoxNames.indexOf(boxName) > -1
	}

	render() {
		const { boxes, dustbins } = this.state

		return (
			<div>
				<div style={{ overflow: 'hidden', clear: 'both' }}>
					{dustbins.map(({ accepts, lastDroppedItem }, index) => (
						<Dustbin
							accepts={accepts}
							lastDroppedItem={lastDroppedItem}
							onDrop={item => this.handleDrop(index, item)}
							key={index}
						/>
					))}
				</div>

				<div style={{ overflow: 'hidden', clear: 'both' }}>
					{boxes.map(({ name, type }, index) => (
						<Box
							name={name}
							type={type}
							isDropped={this.isDropped(name)}
							key={index}
						/>
					))}
				</div>
			</div>
		)
	}

	handleDrop(index, item) {
		const { name } = item

		this.setState(
			update(this.state, {
				dustbins: {
					[index]: {
						lastDroppedItem: {
							$set: item,
						},
					},
				},
				droppedBoxNames: name
					? {
							$push: [name],
					  }
					: {},
			}),
		)
	}
}
