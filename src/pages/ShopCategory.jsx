import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import all_products from '../components/assets/all_products'
import { Item } from '../components/Item/Item'
import Navbar from '../components/Navbar/Navbar'
import './CSS/ShopCategory.css'
const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
  return (
    <>
      <Navbar/>
      <div className="shopcategory">
        <div className="shopcategory-indexSort">
          <p>Showing 1-12 <span>out of 36 products</span></p>
          <div className="shopcategory-sort">
          Sort by <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
        <div className="shopcategory-products">
          {all_products.map((item,i)=>{
            if(props.category === item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}
              rating={item.rating} rating_count={item.rating_count}/>
            }
            else{
              return null;
            }
          })}
        </div>
    </div>
    </>
  )
}
export default ShopCategory;