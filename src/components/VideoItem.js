import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //Same thing was done here we destructured onVideoSelect and added an onClick event handler and used an arrow function envoking the onVideoSelect and passed video as its argument
  //an arrow function was used so we can pass onVideoSelect with an argument, that argument was video.
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.channelTitle}
      ></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
