import './App.css';
//importing app css for styles
import React from 'react';
//importing react
//never forget to import images lest you wish to get an undefined error
import nishkii from './nishkii.jpg';
import pika from './pika.png';
import john from './john.png';
//the extensions need to be specified

class EmojiCounter extends React.Component
//we defined a class derived from react component by extending class to it
//class component consists of constructor, increment and render(very important)
{
    constructor(props)
    {
        super(props);//super props allows using props from other components
        //this points at specifically this component so as to not cause conflicts
        
        this.state=
        {
            number:0,
            name:"",
            gender:""
        }//initializing state of the class, here it's called number but we can call it anything

        //function increment defines the logic of the component
        this.increment = this.increment.bind(this);
        //binding increment function to this. keyword
        if(this.props.type==="nishkii")
            {this.pic = nishkii}
            else if(this.props.type==="pika"){
                this.pic = pika}
            else if(this.props.type==="john"){
                this.pic = john} 
            
            //when a button is pressed, it checks which prop is interacted with
            //in this case it's images
    }

    increment()
    {
        this.setState((prevState) => {
            return {number: prevState.number+1};
        }) //we set state to prevState in an increment
        //basically it shows previous value and returns that +1 each time
        //a button is pressed
    }


    //a class method can only return something when a render method exists
    //it is the most important one
    render()
    {
        return( //make sure the left parenthesis is in line with return
            <div>
                <h5>It is {this.state.number} {this.props.type}</h5>
                <button onClick={this.increment}>
                    <img src={this.pic} alt=""></img>
                    <b>{this.state.number}</b>
                </button>
            </div>
        )
    }
}
export default EmojiCounter;