import React from "react";
import { useState } from "react";
 function Indexx() {
    // const [name, setName] = useState('Salohiddin')
    // const handeClick = () => {
    //     setName('Akbarshoh')
    // }
    //use state bizga biz bergan malumotni  arrrayni iciga olib beradi

    //2
    // const tittle = 'welcome to my country';
    // const name = 'Uzbekistan';
    // const handleChange = () => {
    //     console.log('you clicked me thanks');
        
    // }

    //3

    const [info, setInfo] = useState([
        {tittle: "Salohiddin", job: "Student"},
        {tittle: "Solih", job: "Nurse"},
        {tittle: "Sanjar", job: "Developer"}
    ]);
    const handleDelete = (tittle) => {
        setInfo(info.filter(item => item.tittle !== tittle))
    }



    return(
        <>
                {/* <h1>My name is : {name}</h1>
                <button onClick={handeClick}>Change</button> */}

                {/* 2*/}

                {/* <h2>{tittle}</h2>
                <p>{name}</p>
                <button onClick={() => {
                    console.log('You enrolled to our country');
                    
                }}>Click me</button>
                <button onClick={() => {
                    console.log('Hello')
                }}>Thankks</button> */}

                {/* 3 */}
                {info.map((even) => {
                    return(
                    <div>
                        
                        <h1>{even.tittle}</h1>
                        <button onClick={() => handleDelete(even.tittle)}>Delete</button>
                        <button >Add mine</button>
                    </div>

                    ) 
                })}
                    

        </>
    )
 }
export default Indexx;