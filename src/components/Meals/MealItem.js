import React from 'react'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import MealForm from './MealForm'
import classes from  './MealItem.module.css'

function MealItem(props) {
  // const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <li className={classes.meal}>
        <div>
        <div><h3>{props.name}</h3></div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
        </div>
        <div>
          <MealForm onAddToCart={addToCartHandler}/>  
        </div>
    </li>
  )
}

export default MealItem