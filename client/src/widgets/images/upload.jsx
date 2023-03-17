import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

export const Upload = () => {
  const [image, setImage] = useState(null);
  const handleOnChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };

    // const formData = new FormData();
    // formData.append('image', file);
    // fetch('http://localhost:3001/images/upload', {
    //     method: 'POST',
    //     body: formData,
    // })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    const formData = new FormData();
    formData.append('image', e.target.image.files[0]);
    fetch('http://localhost:4000/api/images', {
        method: 'POST',
        body: formData,
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(err => console.log(err));
    // try {
    // const data=  await fetch('http://localhost:4000/api/images', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify({ image }),
        
    //   });
    //   const res = await data.json();
    //   console.log(res);
    // } catch (error) {
    //   console.error(error.message);
    // }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleOnChange} />
        <Button type='submit' variant="outlined" size="sm">
          submit image
        </Button>
      </form>
      <img src={image} alt="" width={'50%'} height="50%" />
    </div>
  );
};
