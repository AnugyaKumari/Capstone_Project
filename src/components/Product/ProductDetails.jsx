import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../redux/cartSlice';

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({})
  const [isPresentInCart, setIsPresentInCart] = useState(-1)
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart } = useSelector(app => app.cart)

  useEffect(() => {
    axios.get('../../Data/product.json').then(res => {
      const prod = res.data.product.find(prod => prod.articleCode == id)
      setProductDetails(prod);
      setIsPresentInCart(cart.findIndex(e => e.articleCode == prod.articleCode))
    }).catch(e => console.log(e))
  }, [])

  const handleClickCard = (e) => {
    e.preventDefault();
    dispatch(addItemToCart({ item: productDetails }));
  }

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeItemFromCart({item: productDetails }));
    const id = cart.findIndex(e => e.articleCode == productDetails.articleCode)
    if(cart[id].quantity === 1){
      setIsPresentInCart(-1)
    }
    
  }

  useEffect(() => {
    setIsPresentInCart(cart.findIndex(e => e.articleCode == productDetails.articleCode))
  }, [cart])

console.log(isPresentInCart)
  return (
    <div className='container m-5' >
      <div className='row'>
        <div className='col-md-6'>
          <img width={'100%'} src={productDetails?.image?.[0]?.src} />
        </div>
        <div className='col-md-6'>
          Detail {productDetails.articleCode}
          <h3>{productDetails.brandName}</h3>
          <p>{productDetails?.colorName}</p>
          <h2>{productDetails?.title}</h2>
          <br/>
          <h6>{productDetails?.price ?? 0} </h6>
          {isPresentInCart >= 0 ?
            <div className={'d-flex'}>
              <Button onClick={handleRemove}>-</Button>
              <p className='px-4'>{cart[isPresentInCart].quantity}</p>
              <Button onClick={handleClickCard}>+</Button>
            </div> : <Button variant='light' onClick={handleClickCard}>Add to cart</Button>}
          {/* Products add to cart */}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
