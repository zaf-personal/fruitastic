import './Bars.css';
import React from 'react';

class BarGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            barColour: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass = index => {
        this.props.getBackBarIndex(index); //pass back to parent
    }

    render() {
        const barPadding = 2
        const barColour = this.state.barColour
        const widthScale =  amount => amount * 10
        const width = widthScale(this.props.amount)
        const yMid = this.props.barHeight * 0.5

        return (
            <g 
                className={`bar-group ${this.props.activeIndex === this.props.element ? 'active' : ''}`}
                onClick={() => this.toggleClass(this.props.element)}
            >
                <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{this.props.fruit}</text>
                <rect y={barPadding * 0.5} width={width} height={this.props.barHeight - barPadding} fill={barColour}>
                    <animate attributeName="width" from="0" to={width} dur="1.0s" fill="freeze" />
                </rect>
                <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{this.props.amount}</text>
            </g>
        );
    }
}

export default BarGroup;