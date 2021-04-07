import React,{useState} from 'react';
import FeatureItem from './FeatureItem/FeatureItem';

const Feature=()=>{
    const [features, setFeatures] = useState(
        [
            {
                title:"Secure Payment",
                text:"Lorem ipsum dolor sit amet consectetur elit",
                iconClass:'fab fa-cc-mastercard'
             },
             {
                title:"Worldwide Delivery",
                text:"Lorem ipsum dolor sit amet consectetur elit",
                iconClass:'fa fa-truck'
             },
             {
                title:"90 Days Return",
                text:"Lorem ipsum dolor sit amet consectetur elit",
                iconClass:'fa fa-sync-alt'
             },
             {
                title:"24/7 Support",
                text:"Lorem ipsum dolor sit amet consectetur elit",
                iconClass:'fa fa-comments'
             },
           
        ]
    )

    
    return (
        <div className="feature">
        <div className="container-fluid">
            <div className="row align-items-center">
                {features.map((item,i)=>(
                     <div key={i} className="col-lg-3 col-md-6 feature-col">
                         <FeatureItem title={item.title} text={item.text} iconClass={item.iconClass}/>   
                     </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Feature;