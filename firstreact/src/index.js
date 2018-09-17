import React from 'react'
import ReactDOM from 'react-dom'
import FirstComponent from './FirstComponent'
import FirstFriend from './FirstComponent';
import SecondFriend from './SecondFriend';
import Name from './components/Name';
import Comment from "./component1/Comment";
import LifeCycleComponent from "./lifecycleComponent/LifeCycleComponent";
import FormComponent from "./formcomponent/FormComponent";
import ControlledForm from './formcomponent/ControlledForm';
import RemoteData from './APIComponent/RemoteData';
var position=document.getElementById("rootcomponent");
var position1=document.getElementById("container2");
var position3=document.getElementById("lifecycle");

ReactDOM.render(
    <div>
        <FirstFriend location="Chennai">Kiruthika</FirstFriend>
        <Name fcolor="pink" bcolor="green">Kiru</Name>
        
        <Name fcolor="purple" bcolor="yellow">Kiruthika</Name>
        
        <Name fcolor="blue" bcolor="pink">Kiruthika Murugan</Name>
        <br>
        </br>
       
    
    </div>
        ,position);
        
        ReactDOM.render(<SecondFriend profession="developer">Every1</SecondFriend>
                ,position1);
                ReactDOM.render(
                    <div>
                        <br></br>
                        <br></br>
                        <Comment name="kiruthika">too gud</Comment>
                        <Comment name="santhosh">nice</Comment>
                        <Comment name="valli">okay</Comment>
    
                        </div>
               ,position1 );

           ReactDOM.render(
           <div>
               <LifeCycleComponent></LifeCycleComponent>
               <p></p>
               <FormComponent></FormComponent>
               <p></p>
               <ControlledForm></ControlledForm>
               <p></p>
               <RemoteData></RemoteData>
               </div>,position3);
