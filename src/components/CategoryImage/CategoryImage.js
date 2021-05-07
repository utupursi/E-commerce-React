import React,{useState} from 'react';
import category3 from '../../storage/images/category-3.jpg';
import category4 from '../../storage/images/category-4.jpg';
import category5 from '../../storage/images/category-5.jpg';
import category6 from '../../storage/images/category-6.jpg';
import category7 from '../../storage/images/category-7.jpg';
import category8 from '../../storage/images/category-8.jpg';
import CategoryImageItem from './CategoryImageItem/CategoryImageItem';
const CategoryImage=()=>{
    const [categoryItems, setCategoryItems] = useState([
        {
            text:'Some text goes here that describes the image',
            src:category3,
            className:'category-item ch-400'
        },
        [
        {
            text:'Some text goes here that describes the image',
            src:category4,
            className:'category-item ch-250'
    
         },
         {
            text:'Some text goes here that describes the image',
            src:category5,
            className:'category-item ch-150'

         },
        ],
        [
        {
            text:'Some text goes here that describes the image',
            src:category6,
            className:'category-item ch-150'
        },
        {
            text:'Some text goes here that describes the image',
            src:category7,
            className:'category-item ch-250'
         
        },
        ],
        {
            text:'Some text goes here that describes the image',
            src:category8,
            className:'category-item ch-400'
        },
    
    ]);
    return(
        <div className="category">
        <div className="container-fluid">
            <div className="row">
                  {categoryItems.map((item,i)=>{
                     return(
                     <div key={i} className="col-md-3">
                         {Array.isArray(item)?
                         <React.StrictMode>
                            <CategoryImageItem key={i} src={item[0].src} text={item[0].text} class={item[0].className}/> 
                            <CategoryImageItem key={i+1} src={item[1].src} text={item[1].text} class={item[1].className}/> 
                         </React.StrictMode>
                         :
                         <CategoryImageItem key={i} src={item.src} text={item.text} class={item.className}/> 
                         }   
                
                    </div>
                     )
                  })
                  }
            </div>
        </div>
    </div>
    )

}

export default CategoryImage;