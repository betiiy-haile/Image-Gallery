import React from 'react'
import "./images.css"
import ImageItem from './ImageItem'
import { ImageList } from './ImagesList'
import ImageForm from './ImageForm'

const Images = () => {
  return (
    <div className="images container">
      <h2>List of Images By You</h2>
      <div className="image__conatiner">
        {ImageList &&
          ImageList.map((image) => (
            <ImageItem className="image__item" key={image.id} data={image} />
          ))}
      </div>
      <ImageForm />
    </div>
  );
}

export default Images
