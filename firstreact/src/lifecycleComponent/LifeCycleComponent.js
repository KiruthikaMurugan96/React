import React from 'react';
import ReactDOM from 'react-dom';
class LifeCycleComponent extends React.Component{
    constructor(){
        super()
        this.state={
            status:0
        }
        this.updateState=this.updateState.bind(this)
    }
    componentWillMount(){
        console.log("Component will be displayed in view")
        alert("Component is not yet displayed in view.It will be displayed now!!!")
    }
    componentDidMount(){
        console.log("Component is displayed in the view")
    }
    componentWillUpdate(){
        console.log("Component will update its state now!!")
    }
    componentDidUpdate(){
        console.log("Component state is updated!!!")
    }
    componentWillUnmount(){
        console.log("Removing the lifecyclecomponent from the view!!")
    }
    updateState(){
        this.setState({status:this.state.status+1})
        if(this.state.status>=10){
            ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle"))
        }
    }
    unMountMe(){
        ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle"))
    }
    render(){
        return(
            <div>
                it will do nothing.take a look at console to understand component lifecycle
                <button onClick={this.updateState}>Change State{this.state.status}</button>
                <button onClick={this.unMountMe}>UnMount</button>
                </div>

        );
    }
}
export default LifeCycleComponent;