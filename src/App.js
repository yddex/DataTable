import { useState } from 'react';
import { getPosts } from './components/API/api';
import './App.css';

function App() {
  const [db, setDb] = useState([]);


  async function getData(){
    let data = await getPosts();
    console.log(data);
    setDb(data);
  }

  
  

return (
  <>
    <div onClick={getData}>Click to get base!</div>    
  </>
  );
}

export default App;