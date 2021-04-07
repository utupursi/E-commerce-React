import React from 'react';

const FeatureItem=(props)=>{
return(
    <div className="feature-content">
    <i className={props.iconClass}></i>
    <h2>{props.title}</h2>
    <p>
        {props.text}
    </p>
</div>
)
}

export default FeatureItem;