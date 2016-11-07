import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) =>{

  if(props.list === null){
    console.log("videoListComponent is null");
    return(
      <div>VideoList is Now Loading...</div>
    );
  }
  else{
    console.log("videoList component");
    console.log(props.list);
    const mapToComponent = (data) =>{
      return data.map((item, i) =>{
        return <VideoListItem item = {item} key = {i}/>
      });
    };

    return(
      <div>
        {mapToComponent(props.list)}
      </div>
    );
  }
};


export default VideoList;
