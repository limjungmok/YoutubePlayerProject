import React from 'react';

const MainVideo = (props) => {

    if (props.video === null ) {
        return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"></iframe>
                </div>
                <div className="details">
                    <div>Main Video is Now Loading...</div>
                </div>
            </div>
        );
    }
    else{
        //console.log(props);
        const videoId = props.video.id.videoId;
        const videoUrl = `http://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src = {videoUrl}></iframe>
                </div>
                <div className="details">
                    <div>{props.video.snippet.title}</div>
                </div>
            </div>
        );
    }
};

export default MainVideo;
