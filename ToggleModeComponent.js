import './App.css'
import React from 'react'

import sad from './johnSad.jpg';
import happy from './john.png';

class ToggleModeComponent extends React.Component {//should encompass
    //constructor, function and render method
    constructor(props){
        super(props);
        this.state={pic:happy};
        this.Toggle_Mode = this.Toggle_Mode.bind(this); //bind method
    }



Toggle_Mode(){
    this.setState((prevState)=>{
        if (prevState.pic===sad)
            {
            this.mode="happy";
            return {pic : happy};//switching picture from sad to happy
        }
        else if(prevState.pic===happy)
            {
            this.mode="sad";
            return {pic:sad}
        }//vice versa
    })
}

render(){
        return(
        <div>
            <h3>This is output of Task 2! Currently John is: {this.mode}</h3>
            <button onClick={this.Toggle_Mode}>

            <img src={this.state.pic}
            alt="ToggleModeComponent"
            style={{width: '360px',height:'360px',}}/>

            </button>
            </div>
            );
        }
    }
export default ToggleModeComponent;