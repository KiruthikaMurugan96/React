import React from 'react';
class CommentAction extends React.Component{

    constructor(){
        super()
        this.state={
            like:0,
            unlike:0
        }
        this.likeMe=this.likeMe.bind(this)
        this.unLikeMe=this.unLikeMe.bind(this)
    }
    likeMe=function(){
        console.log("Liked")
        this.setState({
            like:this.state.like+1
        })
    }

    unLikeMe=function(){
        console.log("Un Liked")
        this.setState({
            unlike:this.state.unlike+1
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.likeMe}>Likes{this.state.like}</button>
                <button onClick={this.unLikeMe}>Dislikes{this.state.unlike}</button>
                </div>
        );
    }
}
export default CommentAction;