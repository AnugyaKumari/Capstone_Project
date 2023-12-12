import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItemToCart, removeItemFromCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CustomCard =({item}) => {
  const dispatch = useDispatch();
  const {cart} = useSelector(app=> app.cart)
  const handleClickCard = (e) => {
    e.preventDefault();
    dispatch(addItemToCart({item}));
  }

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeItemFromCart({item}));
  }
  const isPresentInCart = cart.findIndex(e=> e.articleCode == item.articleCode)
  return (
    <Card style={{ width: '18rem' }} className='m-2'>
    <Card.Img variant="top" src={item?.image?.[0]?.src} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.price}
      </Card.Text>
      {isPresentInCart >= 0 ?
      <div className={'d-flex'}>
        <Button onClick={handleRemove}>-</Button>
        <p className='px-4'>{cart[isPresentInCart].quantity}</p>
        <Button onClick={handleClickCard}>+</Button>
      </div> : <Button variant='light' onClick={handleClickCard}>Add to cart</Button>}
    </Card.Body>
  </Card>
  )
}

export default CustomCard
