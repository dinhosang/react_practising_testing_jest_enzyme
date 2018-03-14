import React from 'react';

const SongsList = (props) => {
  if(!props.songs) return null;

  const songComponents = props.songs.map(song => {
    return <p>{song.position}: {song.title} - {song.artist}</p>
  })
  
  return songComponents;
}

export default SongsList;
