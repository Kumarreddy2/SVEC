import React, { Component } from 'react'
import './src/States.css'

export default class StateinClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"kalyan",
             count:0
        }
    }
    
    render() {
        setTimeout(()=>{
               this.setState({
                   name:"alukav s"
               })
        },2000)

        return (
            <div>
                <h1> Bye  { this.state.name}</h1>
                <h1>count{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment count</button>
                <br></br>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }

                }>Decrement count</button>
                <br></br>
                <button onClick={()=>{
                    this.setState({
                        count:0
                    })
                }

                }>reset</button>
            </div>
        )
    }
}
