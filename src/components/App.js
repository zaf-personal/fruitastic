import React from 'react';
import List from './List';
import Bars from './Bars';

class App extends React.Component {

    state = { 
        items: [],
        filterByFruit: ''
    }
    
    componentDidMount() {
        //Get data from FruitasticApi
        const list = new Promise((resolve, reject) => {
            window.FruitasticApi.get((response) => {
                resolve({response});
            });
        });

        //Assign data to state list
        list.then((list) => {
            this.setState({items: list.response});
        });
    }

    getBackFiterTerm = fruitName => {
        if (fruitName === this.state.filterByFruit) {
            this.setState({ filterByFruit: '' });
        } else {
            this.setState({ filterByFruit: fruitName });
        }
    }

    render() {
        return (
            <div className="ui container" style={{width: '450px', marginTop: '10px'}}>
                <h1 className="ui center aligned header">Favorite Fruits</h1>
                <div className="ui top attached segment">
                    <h4 className="ui horizontal divider header">
                        <i class="big bar chart icon"></i>
                        Fruit Totals
                    </h4>
                    <Bars getBackFiterTerm={this.getBackFiterTerm} fruits={this.state.items} />
                    <h4 className="ui horizontal divider header">
                        <i class="big user icon"></i>
                        Who Likes What
                    </h4>
                    <List items={this.state.items} filterTerm={this.state.filterByFruit} />
                </div>
            </div>
        );
    }
}

export default App;