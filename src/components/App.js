//컴포넌트들
import React, {Component, PropTypes} from 'react';
import SearchBar from './SearchBar';
import MainVideo from './MainVideo';
import VideoList from './VideoList';
import VideoListItem from './VideoListItem';
//API
import YTSearch from 'youtube-api-search';

//Lodash
import _ from 'lodash';

const API_KEY = 'AIzaSyDnV5dWaL6y8t-Qh8GjSjHkb-DX1Dq702E';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos : [],
            MainVideo : null
        };

        this.handleVideoSearch = this.handleVideoSearch.bind(this);
        this.handleVideoSelect = this.handleVideoSelect.bind(this);
    }

    handleVideoSearch(title){
        YTSearch({key : API_KEY, term : title}, (returnVideos) => {
            console.log(returnVideos);
            this.setState({
                videos : returnVideos,
                MainVideo : returnVideos[0]
            });
        });
    }

    handleVideoSelect(key){
        console.log("key!!!");
        console.log(key);
        alert(key+ " is selected");
    }

    render() {
        const videoSearch = _.debounce((title) => { this.handleVideoSearch(title) }, 300 );

        return (
            <div>
                <SearchBar onInputTitle = {videoSearch}/>
                <hr/>
                <MainVideo video = {this.state.MainVideo}/>
                <VideoList list = {this.state.videos}
                            onListSelect = {this.handleVideoSelect}/>
            </div>
        );
    }
}

export default App;
