import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'


class Home extends Component {
    constructor(){
        super()
        
        this.state = {
            name:"",
            price: null,
            img:""
        }
        this.postProduct= this.postProduct.bind(this)
        this.changeHandler=this.changeHandler.bind(this)
    }

    // app.post("/api/product", postProduct);


    changeHandler(id, value) {
        this.setState({ [id]: value });
        console.log(this.state.id)
    }
    
    postProduct() {
        axios
          .post("/api/product", {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
          })
          .then(response => {
            this.setState({ posts: response.data });
          });
      }

    render() {
        return (
            <div className="formBox">
                <img alt="wait" src="https://picsum.photos/100"></img>
                <div>
                    <input
                        type="text"
                        placeholder="Product Name"
                        onChange={e => this.changeHandler("name", e.target.value)} />
                    <input
                        type="text"
                        placeholder="Product Price"
                        onChange={e => this.changeHandler("price", e.target.value)} />
                    <input
                        type="text"
                        placeholder="Product URL"
                        onChange={e => this.changeHandler("img", e.target.value)} />
                    <div>
                        <Link to="/"><button className="editButt">Cancel</button></Link>
                        <Link to="/"><button className="editButt" onClick={this.postProduct}>Add to Inventory</button></Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;