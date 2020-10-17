import styles from './Product.module.css';
import LinesEllipsis from 'react-lines-ellipsis';
import { AddShoppingCart } from '@material-ui/icons';
import Link from 'next/link';
import { useContext } from 'react';
import { FilterContext } from './context/FilterContext';

const Product = (props) => {

    const [{ category, cart }, dispatch] = useContext(FilterContext);

    const addToCart = () => {
        const product = {
            "id": props.product.id,
            "title": props.product.title,
            "price": props.product.price,
            "image": props.product.image
        }
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        })
        alert(`Product - ${product.title} added to cart`)
    }

    if(category.toLowerCase() == props.product.category.toLowerCase() || category.toLowerCase() == 'all')
    return ( 
        <div className={styles.product}>
            <Link href={`/productDetail/${props.product.id}`}>
                <img src={props.product.image} />
            </Link>
            <LinesEllipsis
            text={props.product.title}
            maxLine='1'
            ellipsis='...'
            trimRight
            basedOn='letters'
            component='h2'
            />
            <LinesEllipsis
            text={props.product.description}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
            />
            <div className={styles.product__addCart}>
                <span className={styles.product__price}>$ {props.product.price}</span>
                <span className={styles.product__add} onClick={addToCart}><AddShoppingCart /> </span>
            </div>
        </div>
    )

    else
    return null;
}

export default Product;