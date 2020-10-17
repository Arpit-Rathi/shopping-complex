import Link from 'next/link';
import { useContext } from 'react';
import { FilterContext } from './context/FilterContext';
import styles from './Navbar.module.css';

const Navbar = () => {
    
    const [{ cart }, dispatch] = useContext(FilterContext);

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__left}>
                <img src="https://lh3.googleusercontent.com/proxy/c_TOkfHhV0BVznhakI-eZyPv2xx3nTyCEGTy5FHN06TT8TYsmB-JRiXecKf2Rghpk3vo3tLxxX1jq1t1blM7o6HIhHOKXS7ozMIJdfJ4MUaorF3S3VI4CmYZS7Ch" />
                <Link href="/">
                    <span>Home</span>
                </Link>
                <Link href="/products">
                    <span>Products</span>
                </Link>
                <Link href="/about">
                    <span>About us</span>
                </Link>
            </div>
            <div className="navbar__right">
                <Link href="/cart">
                    <span>Cart<small> - {cart.length}</small></span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;