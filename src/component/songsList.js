import React from 'react';

const SongsList = (props) => {
  if(!props.songs) return <ul></ul>;

  const songComponents = props.songs.map(song => {
    return <li key={song.position}>{song.position}: {song.title} - {song.artist}</li>
  })

  return (
    <ul>
      {songComponents}
    </ul>
  );
}

export default SongsList;
