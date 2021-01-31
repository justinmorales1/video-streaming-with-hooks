import React from 'react';
import VideoItems from "./VideoItems";



const VideoList = ({videos, onVideoSelect}) => {
    const renderedVideoList = videos.map((video)=> {
        return <VideoItems onVideoSelect={ onVideoSelect} video={video} key={video.id.videoId}/>
    })

    return (
        <div className="ui relaxes divided list">
            {renderedVideoList}
        </div>
    )

};


export default VideoList;