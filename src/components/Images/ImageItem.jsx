import React from 'react'
import "./images.css"

const ImageItem = ({ data }) => {
  return (
    <div className="image__card">
      <img src={data.image} alt="image" width="300px" />
      <p>
        Captured By: <span className="name">{data.owner}</span>{" "}
      </p>
      <small className='text-light'>{data.date} </small>
    </div>
  );
}

export default ImageItem
