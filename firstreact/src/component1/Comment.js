import React from 'react';
import NameComponent from "./ChildComponent/NameComponent";
import CommentText from "./ChildComponent/CommentText";
import CommentAction from "./ChildComponent/CommentAction";

class Comment extends React.Component{
    render(){

        
        return(
            <div>
                <NameComponent name={this.props.name}></NameComponent>
                <CommentText>{this.props.children}</CommentText>
                <CommentAction></CommentAction>
                </div>
        );
    }
}
export default Comment;