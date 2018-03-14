import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SongsList from '../component/songsList.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<SongsList />', () => {

  let song;
  let songs;
  let songLiChildren;

  beforeEach(() => {
    song  = {title: 'a title', artist: 'an artist', position: 3};
    songs = [song];
    songLiChildren = `${song.position}: ${song.title} - ${song.artist}`;
  })

  it('should by default render one empty ul', () => {
    const songList = shallow(<SongsList />);
    expect((songList).contains(<ul></ul>)).toBe(true);
    expect((songList).find('ul').length).toEqual(1);
  });

  it('should display one li for a song if a single song object is passed in', () => {
    const songList = shallow(<SongsList songs={songs}/>);

    expect((songList).find('li').length).toEqual(1);
  });

  it('should display an li in the expected form when a song object is passed in', () => {
    const songList  = shallow(<SongsList songs={songs}/>);
    const li = <li key={song.position}>{song.position}: {song.title} - {song.artist}</li>

    expect((songList).contains(li)).toBe(true);
    expect((songList).text()).toEqual(songLiChildren)

    const actual    = songList.find('ul').html()
    const expected  = `<ul><li>3: a title - an artist</li></ul>`;
    expect(actual.indexOf(expected) > -1).toBe(true);
  })


})
