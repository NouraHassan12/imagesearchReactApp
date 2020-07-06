import React, { Component } from 'react';
import '../src/App.css';
import Imagesearch from './Components/Imagesearch';
import Imagelist from './Components/Imagelist';




const Api_key = "17299124-1ad73a45a9fe95766d7589051";


export default class App extends Component {

  state={
    Images:[],
    error: null
  }
 
  
handelGetImg= async (e)=>{
  e.preventDefault();
  const searchTerm = e.target.elements.searchValue.value;
  const Url = `https://pixabay.com/api/?key=${Api_key}&q=${searchTerm}&image_type=photo`;
  const Request =await fetch(Url)
  const Response =await Request.json();
  if (!searchTerm) {
    this.setState({ error: "Please provide a value." })
  } else {
    this.setState({ Images: Response.hits, error: null })
  }
  console.log(Response.hits);
}


// componentDidMount(){
//   this.handelGetImg();
// }
  render() {
    return (
      <div style={{ color:"#fff", textAlign:"center" }}>
     <Imagesearch handelGetImg={this.handelGetImg} />
     { 
          this.state.error !== null ? 
          <div style={{ color:"#fff", textAlign:"center" }}>{ this.state.error }</div> : 
          <Imagelist Images={this.state.Images} />
        }
      </div>
    );
  }
}

