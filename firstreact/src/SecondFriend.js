import React from 'react'
class SecondFriend extends React.Component{
    render(){
        return(
            
            <div>
                Welcome {this.props.children} who are {this.props.profession}
                </div>
                
        )
    }
}
export default SecondFriend;