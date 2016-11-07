import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {

    console.log("videoList component");

    const mapToComponent = (data) => {
        return data.map((item, i) => {
            return (<VideoListItem item={item}
                                    key={i}
                                    func={props.onListSelect(i)} />);
        });
    };

    return (
        <ul className="col-md-4 list-group">
            { mapToComponent(props.list) }
        </ul>
    );

};

export default VideoList;
