/**
 * Created by 30113 on 2018/4/10.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BoardSquare from './BoardSquare';
import Knight from './Knight';

@DragDropContext(HTML5Backend)
export default class Board extends Component {
    static propTypes = {
        knightPosition: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    };
    constructor(props){
        super(props)
        this.state={
            knightPosition:props.knightPosition
        }
    }
    handleSquareClick(x,y){
        this.setState({
            knightPosition:[x,y]
        })
    }
    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (
            <div key={i}
                 style={{ width: '12.5%', height: '12.5%' }}>
                <BoardSquare x={x}
                             y={y}>
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        );
    }

    renderPiece(x, y) {
        const [knightX, knightY] = this.props.knightPosition;
        if (x === knightX && y === knightY) {
            return <Knight />;
        }
    }

    render() {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }

        return (
            <div style={{
                width: 300,
                height: 300,
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {squares}
            </div>
        );
    }
}