import React from 'react';

const VideoListItem = (props) => {
    console.log("VideoListItem Com");
    console.log(props);
    const videoThumb = props.item.snippet.thumbnails.default.url;
    const videoTitle = props.item.snippet.title;

    return (
        <li className="list-group-item" onClick={props.func}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={videoThumb}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoTitle}</div>
                </div>
            </div>
        </li>

    );
};

export default VideoListItem;
