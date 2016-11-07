import React from 'react';

const MainVideo = (props) => {

    if (props.video === null ) {
        console.log("@@@");
        return(
            <div>MainVideo is Now Loading...</div>
        );
    }
    else{
        //console.log(props);
        const videoId = props.video.id.videoId;
        const videoUrl = `http://www.youtube.com/embed/${videoId}`;

        console.log(videoUrl);
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
