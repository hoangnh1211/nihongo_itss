import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UserList from './hook'
function App() {
  const  list_user = ['hoanganh','quynh','ducanh','dat','tra']
  const [plIndex, miIndex, showList, index] = UserList(list_user)
  
  return (
    <div className="App">
      <p>学生一覧：[{showList()}]</p>
      <p>位置　:　{index + 1}</p>
      <p>名前： {list_user[index]}</p>
      <button onClick={plIndex}>次に</button>
      <button onClick={miIndex}>前に</button>
    </div>
  );
}

export default App;
