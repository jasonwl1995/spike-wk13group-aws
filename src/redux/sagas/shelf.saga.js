
import {put, takeEvery} from 'redux-saga/effects';

import axios from 'axios';

function* bookShelf (action) {
  yield takeEvery('CALL_SHELF', setTheShelf)
  yield takeEvery('POST_SHELF', postShelf)
  yield takeEvery('DELETE_SHELF', deleteShelf)
}; // end bookShelf

function* setTheShelf () {
  try {
    const response = yield axios.get('/api/shelf');

    yield put({
      type: 'SET_SHELF',
      payload: response.data
    })
    
  }
  catch (err) {
    console.log(err);
  }
}; // end setTheShelf

function* postShelf(action){
  try{
      console.log(action);
      yield axios.post('/api/shelf', action.payload);
      yield put({type: 'CALL_SHELF'});
  } catch(err) {
      console.error(err);
      alert('error posting items');
  }
}


function* deleteShelf(action) {
  try {
    yield axios.delete(`/api/shelf/${action.payload}`);
    yield put({
      type: 'CALL_SHELF'
    });
  }
  catch (err) {
    console.log(err);
    alert('error deleting item');
  }
}

export default bookShelf;

