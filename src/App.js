import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import List from './Components/list'
// import photo from './lilwayne.jpg';

// import ListController from './Components/listController'


// import data from '../server/controller';

//axios


class App extends Component{
 constructor(){
  super()
    this.state={
      id: 0,
      data: [{}],
      images: []
    };
  }

  
  componentDidMount(){
    axios.get('/api/data').then(res => {
      this.setState({
        data: res.data

      })
    })
  }
  nextCurrentID(val){
  if(this.state.id >= 4){
    this.setState({
      id: 0
    })
  }else{
    this.setState({
      id: val += 1
    })
  }
  }
  previousCurrentID(val){
    if(this.state.id <= 1){
      this.setState({
        id: 4
      })
    }else{
      this.setState({
        id: val -= 1
      })
    }
    
  }
  addPost=(id) => {
    axios.post(`/api/data/${id}`).then(res => {
      this.setState({
        data: res.data 
      })
    })
  }
  
  


  render() {
    console.log(this.state)
    return (
      <body>
        <header>
          <button className='blah-button' onClick={() => this.previousCurrentID(this.state.id)} >previous artist</button>
          <button id='logo' onClick={()=>{ alert('i tried my best okay'); }}>MUSBIO</button>
          <button className='blah-button' onClick={() => this.nextCurrentID(this.state.id)}>next artist</button>
        </header>

        <div className='main-card'>
            <div id='profile-card'>
              <img id='artist-photo' src={this.state.data[this.state.id].artist_photo}/>
              {/* {console.log(this.state.id.artist_photo)} */}
              <div id='artist_name'>{this.state.data[this.state.id].artist_name}</div>
              <div id='artist-info'>
                Real Name: {this.state.data[this.state.id].real_name}
                <br/>
                HomeTown: {this.state.data[this.state.id].hometown}
                <br/>
                Age: {this.state.data[this.state.id].age}
                <br/>
                Music Type: {this.state.data[this.state.id].music_type}
                <br/>
                Quote: "{this.state.data[this.state.id].quote}"
              </div>
          </div>
        <div className='album-card-box'>
            <div className='album-card'>
              <img id='album-photo1' src = {this.state.data[this.state.id].album_photo1}/>
              <div className='album-info'>
                Title: {this.state.data[this.state.id].title}
                <br/>
                Release Date: {this.state.data[this.state.id].release}
                <br/>
                
              </div>

            </div>

            <div className='album-card'>
              <img id='album-photo2'src = {this.state.data[this.state.id].album_photo2}/>
              <div className='album-info'>
              Title: {this.state.data[this.state.id].title2}
              <br/>
              Release Date: {this.state.data[this.state.id].release2}
              <br/>

              </div>

            </div>

            <div className='album-card'>
              <img id='album-photo3' src={this.state.data[this.state.id].album_photo3}/>
              <div className='album-info'>
              Title: {this.state.data[this.state.id].title3}
              <br/>
              Release Date: {this.state.data[this.state.id].release3}
              <br/>

              </div>

            </div>
          </div>
        </div>

        <div className='bio-box'>
        <p className='bio'>{this.state.data[this.state.id].bio}</p>
        </div>
        <List/>
        <br/>
        
      
      </body>
    );
  }
}
export default App;

