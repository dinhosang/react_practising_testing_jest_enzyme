import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SongsList from '../component/songsList.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<SongsList />', () => {

  let song;
  let song2;
  let songs;
  let songsAllTwo;
  let songLiChildren;

  beforeEach(() => {
    song  = {title: 'a title', artist: 'an artist', position: 1};
    song2 = {title: 'another title', artist: 'another artist', position: 3}
    songs = [song];
    songsAllTwo     = [song2, song];
    songLiChildren  = `${song.position}: ${song.title} - ${song.artist}`;
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

    const actual    = songList.find('ul').html();
    const expected  = `<ul><li>1: a title - an artist</li></ul>`;
    expect(actual.indexOf(expected) > -1).toBe(true);
  })

  it('should render two li elements if an array with two songs objects is given', () => {
    const songList = shallow(<SongsList songs={songsAllTwo} />);
    expect((songList).find('li').length).toEqual(2);
  })

  it('should display the second li in the expected form as well', () => {
    const songList  = shallow(<SongsList songs={songsAllTwo} />);
    const actual    = songList.find('ul').html();
    console.log(typeof actual);
    console.log(actual);
    const expected  = '<li>3: another title - another artist</li>'
    console.log(typeof expected);
    console.log(expected);
    expect(actual.indexOf(expected) > -1).toBe(true);
  })


})
