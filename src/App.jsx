import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './to-do'
import Actor from './Actor'

function App() {


  const actors = ['sakib', 'Raj', 'Jasim', 'Rubel', 'Shalmansha']

  const singer =[
    {name:'Dr.Mahuj', age:68};
    {name:'Eva Rahman', age:38};
    {name:'Shuvro dev', age:58};
    {name:'Pritom', age:28};
  ]
  return (
    <>

      <h1>Vite + React</h1>
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor> )
      }
      {/* <Todo task="Learn react"></Todo>
      <Todo task="explore core concept"></Todo>
      <Todo task=" react"></Todo>
      <Todo task="Learn "></Todo> */}
      {/* <Device name="Mobile" price="33000"></Device>
      <Device name="Laptop" price="15000"></Device>
      <Device name="Mouse" price="500"></Device>
     <Person></Person>
     <Person></Person>
     <Name></Name>
    <Total></Total>
    <Student grade="7" score="99"></Student>
    <Student grade="9" score="100"></Student>
    <Student></Student>
    <People></People>
    <Multiply></Multiply>
    <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props);
  return <h2>This device:{props.name} Price:{props.price}</h2>
 
}


function Person(){
  const age =30;
  return <h3>I am a Person age:{age}</h3>
}

function Name(){
  return <p>my name is mokarama</p>
}

function Total(){
  const age =30;
  const num =40;
  const person={name:'shanta', age:30}
  return <h4>{person.name}  age:{age / num}</h4>
}

const {grade, score} = {grad:'7', score:'99'};
function Student({grade=1, score=0}){
  console.log(grade, score);
  return( <div className='people'>
    <h1 className='student'>Hello World</h1>
    <p>class: {grade}</p>
    <h6>Score: {score}</h6>
  </div>)
}

function People(){
  return(
    <div>
      <h5>Lorem ipsum dolor sit.</h5>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      </div>
  ) 
}
function Multiply(){
  return(
   <div>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <h5>Lorem ipsum dolor sit amet.</h5>
   </div>
  )
}
function Developer(){
  const developerStyle ={
    margin:'20px',
    padding:'20px',
    border:'2px solid red',
    borderRadius:'10px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coading:</p>
    </div>
  )
}

export default App
