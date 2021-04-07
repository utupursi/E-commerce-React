import React from 'react';
import category from '../Category';
import {Link} from 'react-router-dom';

const categoryItem=(props)=>{
    return(
        <li class="nav-item">
            <Link to="/" className="nav-link"><i class={props.iconClass}></i>{props.children}</Link>
        </li>
    )
}

export default categoryItem;