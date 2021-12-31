import React ,{useState} from 'react'

export default function StateinFunctionalComponent() {
    let  [name,updateName]=useState("chai");
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("chai alukav")}}
              onMouseLeave={()=>{updateName("chai")}}> 
                {name}
            </h1>
        </div>
    )
}
