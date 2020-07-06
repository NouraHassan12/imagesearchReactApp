import React from 'react';
import '../Stylesheets/imagesearchCSS.css';

export default function Imagesearch(props) {
  return (
    <div className="imageSearch">

  <form onSubmit={props.handelGetImg} className="imageSearch__form">
      <input type="text" autoComplete="off" placeholder="search for images..."  name="searchValue"/>
      <button className="btn">search</button>
  </form>
  </div>
  );
}
