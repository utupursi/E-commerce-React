import React from 'react';
import nav from '../Nav/Nav';
import { NavLink } from 'react-router-dom';

const navItem=(props)=>{
    let name="nav-item nav-link";
    if(props.active){
        name="nav-item nav-link active";
    }
    return(
        <NavLink to="/" exact={props.exact} activeClassName={name} >{props.children}</NavLink>
    )
}

export default navItem;