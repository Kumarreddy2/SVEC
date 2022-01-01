import React, { Component } from 'react'

export default class FormRendering extends Component {
   
   constructor(props){
       super(props)

       this.state={
           uname:"",
           pword:""
       }
   }
    
   changeUserName=(event)=>{
       this.setState({
           uname:event.target.value
       })
   }
   changePassword=(event)=>{
    this.setState({
        pword:event.target.value
    })
}
submitUserData=(event)=>{
    event.preventDefault()
    console.log(`${this.state.uname}  ${this.state.pword}`)
}
    render() {
        return (
            <div>
                  <form onSubmit={submitUserData} method='get'>
                    <input type="text" value={state.uname}
                    onChange={changeUserName}/>
                    <br></br>
                <input type="password" value={state.pword}
                onChange={changePassword}/>
                <br></br>
                <button type='submit'>Login</button>
           </form>
            </div>
        )
    }
}
