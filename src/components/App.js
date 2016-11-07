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

const propTypes = {};

const defaultProps = {};

const API_KEY = 'AIzaSyDnV5dWaL6y8t-Qh8GjSjHkb-DX1Dq702E';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos : [],
            selectedVideo : null
        };

        this.videoSearch = this.videoSearch.bind(this);
    }

    videoSearch(title){
        YTSearch({key : API_KEY, term : title}, (returnVideos) => {
            console.log(returnVideos);
            this.setState({
                videos : returnVideos,
                selectedVideo : returnVideos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((title) => { this.videoSearch(title) }, 300 );

        return (
            <div>
                <SearchBar onInputTitle = {videoSearch}/>
                <hr/>
                <MainVideo video = {this.state.selectedVideo}/>
                <VideoList list = {this.state.videos}/>
            </div>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
