import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmbdApi';
import apiConfig from '../../api/apiConfig';

const VideoList = (props) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category, props.id);
      console.log(res);
      setVideos(res.results.slice(0, 5));
    };

    getVideos();
  }, [category, props.id]);
  return (
    <>
      {videos.map((item, i) => (
        <Video key={i} item={item}></Video>
      ))}
    </>
  );
};

const Video = (props) => {
  const iframRef = useRef(null);

  useEffect(() => {
    const height = (iframRef.current.offsetWidth * 9) / 16 + 'px';
    iframRef.current.setAttribute('height', height);
  });
  return (
    <div className='video'>
      <div className='video__title'>
        <h2>{props.item.title}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${props.item.key}`}
        frameborder='0'
        ref={iframRef}
        width='100%'
        title='video'
      ></iframe>
    </div>
  );
};

export default VideoList;
