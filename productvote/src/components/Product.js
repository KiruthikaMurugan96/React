import React from 'react';
import '../../node_modules/semantic-ui/dist/semantic.css';

class Product extends React.Component {
    constructor(props) {
        super(props)
        
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);

    }
    upVote() {
        console.log("up");
        
        this.props.onCheck(this.props.id,1)
    }
    downVote() {
        console.log("down");
        this.props.onCheck(this.props.id,0)
        
        
    }

    render() {
        return (<div className="item">
            <div className="image">
                <img src={this.props.imageUrl} />
            </div>
            <div classname="middle aligned content">
                <div className="header">
                    {this.props.vote}
                    <a onClick={this.upVote}>
                        <i className="larger caret up icon" />
                    </a>
                    <a onClick={this.downVote}>
                        <i className="large caret down icon" />
                    </a>
                </div>
                <div className="description">
                    <a>{this.props.title}</a>
                    <p>{this.props.description}</p>
                </div>
                <div className="extra">
                    <span>Submitted By:</span>
                    <img className="ui avatar image" src={this.props.avatarUrl} />
                </div>
            </div>
        </div>);
    }
}

export default Product;
