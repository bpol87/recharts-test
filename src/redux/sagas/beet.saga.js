import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchBeets(action) {
    try {
        const beetData = yield axios.get('/api/beets')
        console.log('beetdata is:', beetData.data)
        yield put({type: 'SET_BEETS', payload: beetData.data})
    } catch (error) {
        console.log('Error Fetching Beets', error)
    }
}


function* beetSaga() {
    yield takeLatest('FETCH_BEETS', fetchBeets);
  }
  
  export default beetSaga;