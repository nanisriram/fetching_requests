import {useState} from 'react';
import axios from 'axios';
import AuthContext from './context';
import './App.css';
import Table from './table';

function App() {

  const [userData,setUserData]  = useState([]);
  const [header, setHeader] = useState([]);
  const [key, setKey] = useState([]);
  const [show, setShow] = useState(true);

  const onClickHandlerOne  = async () => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/comments");
    setUserData(res.data)
    setHeader(["ID", "NAME", "Email", "BODY"]);
    setKey(["id", "name", "email", "body"]);
    setShow(!show)
  }

  const onClickHandlerTwo = async () => {
    try{
    const res = await fetch("http://jsonplaceholder.typicode.com/posts", {
      method: 'get'
    })
    const datas = await res.json();
    setUserData(datas);
    setHeader(["ID","TITLE","BODY"]);
    setKey(["id", "title", "body"])
  }catch(e){
    console.log(e);
  }
  }

  const onClickHandlerThree = () => {
    var obj = new XMLHttpRequest();

    obj.open("get", 'https://jsonplaceholder.typicode.com/users');

    obj.send();

    obj.onload = function(){
      let res = obj.responseText;
      res = JSON.parse(res)
      setUserData(res)
      setHeader(['ID','NAME',"USER NAME","EMAIL","STREET", 'LATITUDE'])
      setKey(['id','name','username','email',['address','street'],['address','geo','lat']])
    }
}

  
  return (
    <AuthContext.Provider value={{
      data: userData,
      headers: header,
      coloums: key
    }}>
    <div className="App">
       <h1>Praise the lord</h1>
       <button onClick={onClickHandlerOne}>Get User</button>
       <button onClick={onClickHandlerTwo}>Get User</button>
       <button onClick={onClickHandlerThree}>Get User</button>
       <Table />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
