import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default function Header (){
        return (
            <div>
                <nav className="header">
                    <Link to="/"><button className="navButt">Dashboard</button></Link>
                    <Link to="/add"><button className="navButt">Add Inventory</button></Link>
                </nav>
            </div>
        )
    
}
