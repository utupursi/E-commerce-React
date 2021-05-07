import React,{useState} from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
const Category=(props)=>{
    const [categoryItems, setCategoryItems] = useState([
        {
            iconClass:'fa fa-home',
            title:'Home'
        },
        {
            iconClass:'fa fa-shopping-bag',
            title:'Best Selling'
    
         },
         {
            iconClass: 'fa fa-plus-square',
            title:'New Arrivals'
         },
        {
            iconClass:'fa fa-female',
            title:'Fashion Beauty',
        },
        {
            iconClass:'fa fa-child',
            title:'Kids Babies Clothes'
         
        },
        {
            iconClass:'fa fa-tshirt',
            title:'Men Women Clothes'
        },
        {
            iconClass:'fa fa-mobile-alt',
            title:'Gadgets Accessories'
        
        },
        {
            iconClass:'fa fa-microchip',
            title:'Electronics Accessories'
        },
        {
            iconClass:'fa fa-microchip',
            title:'Electronics Accessories'
        },
    
    ]);

    return(
        <ul className="navbar-nav">
            {props.categories.map((item,i)=>(
                 <CategoryItem key={i} iconClass={categoryItems[i].iconClass} >{item.available_language[0]?item.available_language[0].title:""}</CategoryItem>
            ))}

    </ul>
    )
}

export default Category;