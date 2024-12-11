import React, { useState, useEffect } from 'react';
import '../src/indexx';
import Indexx from '../src/indexx';
// function App() {
//   const [data, setData] = useState({}); // Boshlang‘ich qiymat obyekt
// const [count, setCount] = useState(0)
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         setData(json); 
//       })

//   }, []); 
//   const change = () => {
//     setData({
//       title: 'hello world',
//     })
//   }



//   return (
//     <>
//     <div>
//       <input
//         type="text"
//         value={text} // Holatni inputning qiymatiga bog‘lash
//         onChange={handleChange} // Har bir o‘zgarish uchun funksiya chaqirish
//       />
//       <p>Matn: {text}</p>
//     </div>
//       {/* <div>
//         <h1>Todo ID: {data.id}</h1>
//         <p onClick={change}>Title: {data.title}</p>
//         <p>about: {data.completed}</p>
//       </div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button> */}
//     </>
//   );
// }
// export default App;


// function InputControl() {
//   const [text, setText] = useState(""); // Boshlang‘ich qiymat bo‘sh string

//   const handleChange = (event) => {
//     setText(event.target.value); // Input qiymatini yangilash
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Matn kiriting"
//       />
//       <p>Matn: {text}</p>
//     </div>
//   );
// }

// export default InputControl;


// function Informations(){
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);

//   return(
//     <>
//       <div>
//         <input
//         type='text'
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         />
//         <input
//         type='number'
//         value={age}
//         onChange={(event) => setAge(event.target.value)}
//         />
//         <h1>Name: {name}</h1>
//         <h1>Age: {age}</h1>
//       </div>
//     </>
//   )
// }
// export default Informations


function TryTouseEffect() {
  const[count, setCount] = useState(0)
  useEffect(() => {
    console.log(`count: ${count}`);
    
  })

  return(
    <>
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
    </>
  )
}
export default TryTouseEffect;

