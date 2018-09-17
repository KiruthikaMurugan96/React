import React from 'react';
import Product from './Product';
import axios from 'axios';
//import feedback from '../Data';


class ProductList extends React.Component {

    constructor(){
        super()
        this.state={
            products:[]
        }
        this.voteClicked=this.voteClicked.bind(this);
    }
    voteClicked(id,check){
       
       const updatedProducts= this.state.products.map((p1)=>{
            if(p1.id === id&&check===1){
                console.log("up clicked for " +id);
                return Object.assign({},p1,{vote:p1.vote+1})
            }
            else if(p1.id===id && check===0){
                console.log("down clicked for " +id);
                return Object.assign({},p1,{vote:p1.vote-1})
            }
            else{
                return p1;
            }
        })
        this.setState({products:updatedProducts})
    }
   
    
    render() {
       // const product = feedback
      //  console.log(product);

        const sortedProductState=this.state.products.sort((a,b)=>{
           return a.vote-b.vote
        })

        const allproducts = sortedProductState.map((p) => {
            return (
                <Product
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    url={p.url}
                    imageUrl={p.imageUrl}
                    avatarUrl={p.avatarUrl}
                    vote={p.vote}
                    onCheck={this.voteClicked}
                />
            )

        })
        return (


            
            <div className="ui unstackable items">
                {allproducts}
            </div>
               

        );
    }
}

export default ProductList;