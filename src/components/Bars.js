import './Bars.css';
import React from 'react';
import BarGroup from './BarGroup';

class Bars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1
        };
    }
    
    handleClick = (key, value) => {
        console.log(`Fruit Selected: ${key}, ${value}`);
        this.props.getBackFiterTerm(key); //pass back to parent
    }

    getBackBarIndex = activeIndex => {
        this.setState({ 
            activeIndex: activeIndex === this.state.activeIndex ? -1 : activeIndex
        })
    }

    render() {
        //Get Array of Fruits
        const result = this.props.fruits.map(fruit => fruit.favoriteFruit);

        //Remove duplicates and get occurrences
        const occurrences = {};
        result.forEach(function(x) { occurrences[x] = (occurrences[x] || 0)+1; });

        //sort array and create Bars in SVG
        const createBars = Object.entries(occurrences).sort((a, b) => b[1] - a[1]).map(([key,value], index) => {
            return (
                <g 
                    key={index}
                    onClick={() => this.handleClick(key, value)}
                    transform={`translate(0, ${index * 30})`}
                >
                    <BarGroup 
                        fruit={key} 
                        amount={value} 
                        barHeight={30} 
                        element={index}
                        activeIndex={this.state.activeIndex}
                        getBackBarIndex={this.getBackBarIndex} 
                    />
                </g>
            );
        })

        return (
            <svg width="435" height="300" >
                <g className="bar-container">
                    <g className="chart" transform="translate(100,60)">
                        {createBars}
                    </g>
                </g>
            </svg>
        );
    }
}

export default Bars;