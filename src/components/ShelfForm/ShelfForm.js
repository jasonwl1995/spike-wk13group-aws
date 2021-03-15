import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Button, TextField} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ImageUpload from '../ImageUpload/ImageUpload';

function ShelfForm() {
  const dispatch = useDispatch();
  const [newImg, setNewImg] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const addItem = (event) => {
    event.preventDefault();
      dispatch({
        type: 'POST_SHELF',
        payload: {
          newImg, 
          newDescription,
        },
      })
  }

  return(

      <form onSubmit={addItem}>
        <ImageUpload />
        <label htmlFor="imageURL">
          <TextField
            variant="outlined"
            name="imageURL"
            type="text"
            placeholder="URL goes here"
            value={newImg}
            onChange={(event) => setNewImg(event.target.value)}
          />
        </label>
        <label htmlFor="description">
          <TextField
          variant="outlined"
          name="description"
          type="textarea"
          placeholder="Description goes here"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
          />
        </label>
        <Button 
          variant="contained"
          color = 'primary'
          type="submit"
          startIcon={<SaveIcon />}
          onClick={() => addItem}>
        Add Item!</Button>        
      </form>
  )
}

export default ShelfForm;

