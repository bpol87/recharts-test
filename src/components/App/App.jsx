import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BeetCharts from '../BeetCharts/BeetCharts';

function App() {
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_BEETS'})
  }, [])

  return (
    <div>
      <h2>Beet Charts</h2>
      <BeetCharts />
    </div>
  )
}

export default App;
