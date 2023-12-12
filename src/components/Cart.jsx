import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cart } = useSelector(app => app.cart);
  console.log({ cart })
  let total = cart.reduce((c, i) => {
    console.log(i,c)
    return c + Number(i.price.split("Rs.")[1].split(".")[0].split(',').join('')) * i.quantity
  },0 )
  return (
    <div className={'d-flex flex-column p-8'}>
      <h3 style={{textAlign:'center'}}>Total: {total}</h3>
      {cart.map(i => {
        return (
          <div className={'container m-4'}>
            <div className={'row m-auto'}>
              <div className={'col-md-2'}>
                <img width={80} src={i?.image?.[0]?.src} />

              </div>
              <div className={'col-md-6'}>

                <p>{i.title}</p>
                <h6>Quantity: {i.quantity}</h6>
                <h6>price: Rs. {Number(i.price.split("Rs.")[1].split(".")[0].split(',').join('')) * i.quantity}</h6>
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cart
