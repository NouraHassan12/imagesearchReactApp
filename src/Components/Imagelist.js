import React from 'react';
import {Link} from 'react-router-dom'
import '../Stylesheets/imagelistCSS.css'

export default function Imagelist(props) {
  return (
    <div className="container">
    <div className="row">
      { props.Images.map(image => {
        return (
          <div key={image.id} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="imageList__containerr">
            
              <img className="imageList__image" src={image.largeImageURL} alt={image.tags} />
             
            

            <div className="image__details">
              <Link to={{ 
                  pathname: `/image/${image.id}`,
                  state: { image }
                }}><button>View</button></Link>
              </div>
          </div>

         </div>

    ) }

      )
}
    </div>
  </div>
  );
}
