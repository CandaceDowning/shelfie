import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


class Product extends Component {
    constructor(props){
        super(props)

       
    }

    onDelete(id){
        // console.log(id)
        axios.delete(`/api/delete/`+id).then(res=>{
          this.setState({favArray: res.data})
          // console.log(this.state.favArray)
        })
      }

    render() {
        
        const products = this.props.inventory.map((product,i)=>(
            <div className='productBox' key={i} id={product.id}>
                <img alt="wait" src={product.img}></img>              
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    <button className="productButt" onClick={this.onDelete({})}>Delete</button>
                    <Link to="/edit/:id"><button className="productButt">Edit</button></Link>
                </div>
            </div>            
                    
        ));
        return (
                <div>
                    {products}
                </div>                          
        )       
    }
}

export default Product;


