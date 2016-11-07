import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTitle: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    //input 태그의 value가 입력시
    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);

        this.props.onInputTitle(e.target.value);
        console.log(e.target.value);
        console.log(nextState);
    }

    render() {
        return(
            <div className="search-bar">
                <input type="text"
                    name="searchTitle"
                    placeholder="Input title"
                    value = {this.state.searchTitle}
                    onChange = {this.handleChange}/>
            </div>
        );
    }
}

export default SearchBar;
