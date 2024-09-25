import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Products from './Products';
import { Users } from './Users';
import Counter from './components/Counter';
import Customers from './components/Customers';
import IPL from './components/IPL';
import Students from './components/Students';
import { useState } from 'react';

function App() {

  const ipldata = [
    {
      "team":"CSK",
      "captain":"Dhoni",
      "home":"Chennai"
    },
    {
      "team":"MI",
      "captain":"Rohit",
      "home":"Mumbai"
    },
    {
      "team":"RCB",
      "captain":"Kohli",
      "home":"Bangalore"
    },
    {
      "team":"KKR",
      "captain":"Morgan",
      "home":"Kolkata"
    }
  ]

  const [students,setStudents]=useState([])

  const addStudent=(student)=>{
    setStudents([...students,student])
    console.log(students)
  }

  return (
    <div>
      {/**
      <h1>Welcome to react</h1>
      <h2>Started journey with html,css,js,ajax</h2>
      <Header/>
      <Header></Header>
      <Content/>
      <Products></Products>
      <Users/>
      <Counter/>
        <Customers/>
          <IPL data={ipldata}/>
       */}
      
        <Students addstudents={addStudent} studentslist ={students}/>
        
       
    </div>
      
  );
}

export default App;
