import React, { Component } from 'react'
import styled from "styled-components"

export default class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    rest() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <Wrapper className='menu'>
                <div className='card'>
                    <h1>{this.state.count}</h1>
                    <p>الحمد لله</p>
                    <div className='btn'>
                        <button className='btn1' onClick={(e) => this.increment(e)}></button>
                        <button className='btn2' onClick={(e) => this.rest(e)}></button>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(90, 93, 95);
    padding: 230px 620px;
    @media (max-width: 1300px) {
          width: 100%;
          height: 100vh;
          background-color: rgb(90, 93, 95);
          padding: 230px 520px;
        
    }
    @media (max-width: 1100px) {
        width: 100%;
        height: 100vh;
        background-color: rgb(90, 93, 95);
        padding: 230px 420px;
      
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 100vh;
    background-color: rgb(90, 93, 95);
    padding: 230px 320px;
  
}
@media (max-width: 650px) {
    width: 100%;
    height: 100vh;
    background-color: rgb(90, 93, 95);
    padding: 230px 220px;
  
}
@media (max-width: 470px) {
    width: 100%;
    height: 100vh;
    background-color: rgb(90, 93, 95);
    padding: 230px 100px;
  
}
@media (max-width: 350px) {
    width: 100%;
    height: 100vh;
    background-color: rgb(90, 93, 95);
    padding: 230px 50px;
  
}

    .card {
        width: 240px;
        height: 270px;
        background-color: aqua; 
        border-radius: 35px;
        padding: 40px  56px;
        h1 {
            text-align: center;
            width: 130px;
            height:60px;
            background-color: red;
            border-radius: 10px;
            font-size: 40px;
        }
        p {
            margin: 10px 0 5px 43px;
        }
    }
    .btn {
        display:flex;
        padding: 16px 0px 0 20px;
        align-items:center;
        gap: 10px;
        .btn1 {
            padding: 35px;
            border-radius: 50px;
            border:none;
            background-color: grey;
        }
        .btn2 {
            margin-top:18px;
            padding: 15px;
            border-radius: 50px;
            background-color: green;
            border:none;
        }
    }
    
    
`
