import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_STORE } from './redux/action';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data, "datasdklfh")
        setTimeout(() => {
          dispatch(UPDATE_STORE(data));
        }, 5000);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Home />
  );
}

export default App;
