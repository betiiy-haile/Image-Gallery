import React from 'react'

const ImageForm = () => {
  return (
    <div>
      <h3>Add Your Images??</h3>
      <form className='image__form'>
        <input type="text" placeholder='Your Name..' required />
        <input type="file" placeholder='Your picture..' required />
        <input type="text" placeholder='Location..' required/>
        <input type="date"  placeholder='Date..' required/>
        <button type='submit' className='btn'>Post Image</button>
      </form>
    </div>
  );
}

export default ImageForm
