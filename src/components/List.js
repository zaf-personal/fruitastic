import React from 'react';

class List extends React.Component {
    

    render() {
        //If filter is not null create filtered array to display
       
        let filteredList = [];
        if(this.props.filterTerm !== '') {
            filteredList = this.props.items.filter(item => item.favoriteFruit === this.props.filterTerm);
        } else {
            filteredList = this.props.items;
        }

        const renderedList = filteredList.map((item, index) => {
            return (
                <div key={index} className="item" style={{padding: '10px'}}>
                    <div className="right floated content">
                        {item.favoriteFruit}
                    </div>
                    
                    <div className="content">
                        {item.name}
                    </div>
                </div>
            );
        });

        return (
            <div className="ui middle aligned divided list">
                {renderedList}
            </div>
        );
    }
    
}

export default List;