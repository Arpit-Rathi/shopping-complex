import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import styles from '../../components/Product.module.css';
import LinesEllipsis from 'react-lines-ellipsis';
import { AddShoppingCart } from '@material-ui/icons';
import Link from 'next/link';
import { useContext } from 'react';
import { FilterContext } from '../../components/context/FilterContext';

const ProductDetail = ({product}) => {

    const [{ cart }, dispatch] = useContext(FilterContext);

    const addToCart = () => {
        const product1 = {
            "id": product.id,
            "title": product.title,
            "price": product.price,
            "image": product.image
        }
        dispatch({
            type: "ADD_TO_CART",
            payload: product1
        })
        alert(`Product - ${product1.title} added to cart`)
    }

    return (
    <Layout>
        <div className={styles.pd__breadCrumb}>
            <Link href="/products">&gt; Products</Link> / <span>{product.title}</span>
        </div>
        <div className={styles.pd}>
            <div className={styles.pd__left}>
                <img src={product.image} />
            </div>
            <div className={styles.pd__right}>
                <div>
                    <LinesEllipsis
                    text={product.title}
                    maxLine='1'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    component='h1'
                    />
                    <p>{product.description}</p>
                </div>
                <div className={styles.product__addCart}>
                    <span className={styles.product__price}>$ {product.price}</span>
                    <span className={styles.product__add} onClick={addToCart}><AddShoppingCart /> </span>
                </div>
            </div>
        </div>
    </Layout>
    )
}

export default ProductDetail;

ProductDetail.getInitialProps = async function ({ query }) {
    console.log(query);
    const res = await fetch(`https://fakestoreapi.com/products/${query.pid}`);
    const product = await res.json();
    return {
        product: product
    }
}
