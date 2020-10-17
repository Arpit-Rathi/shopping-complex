import { Delete, DeleteOutline } from '@material-ui/icons'
import { useContext } from 'react'
import { FilterContext } from '../components/context/FilterContext'
import Layout from '../components/Layout'
import styles from '../styles/Cart.module.css'

export default function Cart() {

  const [{ cart }, dispatch] = useContext(FilterContext)

  const removeFromCart = (e) => {
    const idx = e.target.attributes.idx.value;
    const newCart = [...cart];
    newCart.splice(idx,1)
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: newCart
    })
  }

  const getTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total = total + item.price;  
    })
    let discountedTotal = 0.8 * total;
    total = total.toFixed(2);
    discountedTotal = discountedTotal.toFixed(2);
    return [total, discountedTotal];
  }

  return (
    <Layout>
      <div className={styles.cart}>
        <h1>Your cart</h1>
        <div className={styles.cart__heading}>
            <span>ID</span>
            <span>Product</span>
            <span>Title</span>
            <span>Price</span>
            <span>&nbsp;</span>
        </div>
        {cart.length == 0 ? <center><h2>No products in your cart</h2></center> : null}
        <div className={styles.product__list}>
          {cart.map((item, index) => (
            <div>
              <span>{item.id}</span>
              <span><img src={item.image} /></span>
              <span>{item.title}</span>
              <span>{item.price}</span>
              <span onClick={e => removeFromCart(e)} idx={index} className={styles.remove}>
                <DeleteOutline idx={index} onClick={e => removeFromCart(e)} />
              </span>
            </div>
          ))}
        </div>
        <h2>Subtotal : ${getTotal()[0]}</h2>
        <h2>Discount : ${(0.2 * getTotal()[0]).toFixed(2)}</h2>
        <h1>Total : ${getTotal()[1]}</h1>
      </div>
    </Layout>
  )
}
