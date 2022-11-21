import {useState} from 'react';
import axios from 'axios';
import AuthContext from './context';
import './App.css';
import Table from './table';

function App() {

  const [userData,setUserData]  = useState([]);
  const [header, setHeader] = useState([]);
  const [key, setKey] = useState([]);

  const onClickHandler  = async () => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/comments");
    setUserData(res.data);
    setHeader(["ID", "NAME", "Email", "BODY"]);
    setKey(["id", "name", "email", "body"]);
  }
  

  return (
    <AuthContext.Provider value={{
      data: userData,
      headers: header,
      coloums: key
    }}>
    <div className="App">
       <h1>Praise the lord</h1>
       <button onClick={onClickHandler}>Get User</button>
       <Table />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
