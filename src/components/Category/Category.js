import React,{useState} from 'react';
import categoryItem from './CategoryItem/CategoryItem';
import CategoryItem from './CategoryItem/CategoryItem';
const Category=()=>{
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
    
    ]);
    return(
        <ul class="navbar-nav">
            {categoryItems.map(item=>(
                 <CategoryItem iconClass={item.iconClass}>{item.title}</CategoryItem>
            ))}

    </ul>
    )
}

export default Category;