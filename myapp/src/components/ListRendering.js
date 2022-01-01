import React from 'react'

export default function ListRendering() {


// let emplist=["Ankitha","kavya","Aparna","chaithu"]

let emplist=[{
    name:"chaithu",
    salary:30000,
    email:"chaithu@gmail"
},
{
    name:"chote",
    salary:10000,
    email:"chote@gmail"
},
{
    name:"pillu",
    salary:20000,
    email:"pillu@gmail"
}
]






    return (
        <div>
            <h1>List ListRendering</h1>{
                         
            emplist.map(
                empdata=>
                  <>
                    <p>{empdata.name}</p>
                    <p>{empdata.salary}</p>
                   <p>{empdata.email}</p>
                   </> 
                   
            )
} 
                      
                          </div>
    )
}
