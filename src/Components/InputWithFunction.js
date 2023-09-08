import { useState, useEffect } from "react";

export default function Input(){

    const [name,setName] = useState("Prashant");
    const [lastName,setLastname] = useState("Ghadiali");

   useEffect(()=> {
        document.title = name + " " + lastName
   }, [lastName])   // when last  name changes then it updates the title else getting Initial value. 

//    If we are not adding in [] it did not updating. without [] it updates when we type.

   useEffect(() => {
     let timer = setInterval(() => {
        console.log("Window Width : ", window.innerWidth);
     }, 2000);
     
        return(clearInterval(timer));
   })

    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input"
                            value={name} 
                            onChange={(e)=> setName(e.target.value)}
                    />
            </Row >
            <Row label="Last Name">
                    <input className="input"
                            value={lastName} 
                            onChange={(e)=> setLastname(e.target.value)}
                    />
            </Row >
        </div>

        <h2>Hello, {name + " " +lastName}</h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
