import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product'
// import Form from '../Form/Form'



export default class Dash extends Component {
    constructor(){
        super()

        this.state = {
            inventory:[]

        }
    }

    componentDidMount(){
        axios.get('/api/inventory').then(res=> {
            this.setState({inventory:res.data})
            console.log(res.data)
        })
    }
    render() {
        console.log(this.state.inventory)
        return (
                <div>
                    <Product
                    inventory={this.state.inventory}
                    />
                </div>
        )
    }
};
