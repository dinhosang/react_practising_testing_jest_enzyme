import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SongsList from '../component/songsList.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<SongsList />', () => {

  it('by default renders an empty SongsList', () => {
    const songList = shallow(<SongsList />);
    expect((songList).contains(<ul></ul>)).toBe(true);
    expect((songList).find('ul').length).toEqual(1);
  });

  it('should display one li for a song if a single song object is passed in', () => {
    const song      = {title: 'a title', artist: 'an artist', position: 3};
    const songs     = [song];
    const songList  = shallow(<SongsList songs={songs}/>);
    const songLiChildren = `${song.position}: ${song.title} - ${song.artist}`
    const li = <li key={song.position}>{song.position}: {song.title} - {song.artist}</li>

    expect((songList).contains(li)).toBe(true);
    expect((songList).find('li').length).toEqual(1);
    expect(render(songList).text()).toEqual(songLiChildren)

    const actual    = songList.find('ul').html()
    console.log(actual);
    const expected  = `<li>3: a title - an artist</li>`;
    expect(actual.indexOf(expected) > -1).toBe(true);
  });


})
