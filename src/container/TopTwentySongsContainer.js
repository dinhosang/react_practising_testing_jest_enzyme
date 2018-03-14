import React, {Component} from 'react';
import SongsList from '../component/songsList'

class TopTwentySongsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      topSongsAllData: [],
      topSongsDataToShow: []
    }
  }

  componentDidMount(){
    const request = new XMLHttpRequest();
    const url     = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    request.open('GET', url);
    request.addEventListener('load', () => {
      if(request.status !== 200) return;
      const apiResponse = JSON.parse(request.responseText);
      const songsData = apiResponse.feed.entry;
      this.updateTopSongs(songsData);
    })
    request.send();
  }

  updateTopSongs(songsData){
    this.setState({topSongsAllData: songsData});
    this.selectDataToShow(songsData);
  }

  selectDataToShow(allSongsAllData){
    let position      = 1;
    const dataToShow  = [];

    allSongsAllData.forEach(song => {
      const finalSongObject = {};
      finalSongObject['position'] = position++;
      finalSongObject['title']    = song["im:collection"]["im:name"].label;
      finalSongObject['artist']   = song["im:artist"].label;
      dataToShow.push(finalSongObject);
    });

    this.setState({topSongsDataToShow: dataToShow});
  }

  render(){
    return <SongsList songs={this.state.topSongsDataToShow}/>;
  }

}

export default TopTwentySongsContainer;
