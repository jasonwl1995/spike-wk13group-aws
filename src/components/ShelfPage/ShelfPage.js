import React from 'react';
import ShelfForm from '../ShelfForm/ShelfForm';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import {Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


  const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  img: {
    maxWidth: '150px',
    height: 'auto',
    maxHeight: '200px',
    width: 'auto',
  },
  id: {
    width: '320px',
    height: '420px',
  },
  description: {

    maxWidth: '150px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: '00acb0'

  }
}));


function ShelfPage() {

  const classes = useStyles();

  const dispatch = useDispatch();


  useEffect(() => {
    // make call to saga
    dispatch({
      type: 'CALL_SHELF'
    })
  }, [])


  const books = useSelector(store => store.shelfReducer);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_SHELF',
      payload: id
    })
  };
  
  return (
    <div className="container">
      <Typography variant="h2">Shelf</Typography>
      <ShelfForm />
      <p>All of the available items can be seen here.</p>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>

          <Grid container justify="left">

            {books.map(book => {
              return (
              <Grid key={book.id}>
                <Typography variant="h6" className={classes.description}>{book.description}</Typography>
                <img src={book.image_url} className={classes.img} />
                <IconButton

                  variant="contained"
                  onClick={() => handleDelete(book.id)}
                >
                  <DeleteIcon />                  

                </IconButton>
              </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ShelfPage;
