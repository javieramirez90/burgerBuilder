import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey, index) => {
      return (
        <li key={index}>
          <span style={{textTransform: "capitalize"}}>{ igKey }</span>: {props.ingredients[igKey]}
        </li>);
    });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burguer with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  ); 
}

export default orderSummary