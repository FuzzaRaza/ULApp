//my api key= AIzaSyAEEYdBGgC8zh_-LsP73pFbIPu7U_XH5WQ
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      isLoaded: true
      }
    }

    componentDidMount(){

      //fetch('https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}')
      fetch('https://www.youtube.com/channel/UCiNWv52iO_OAdZ12kslG4Cg')  
      .then(res => res.json())
        .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })
        });
    }
    render(){
        return(

        );
    }
}