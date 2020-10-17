import { useContext, useState } from 'react'
import FilterProvider, { FilterContext } from '../components/context/FilterContext';
import { initialState, reducer } from '../components/context/reducer';
import Filter from '../components/Filter';
import Layout from '../components/Layout'
import Product from '../components/Product'
import styles from '../styles/Products.module.css'

export default function Products({products}) {

  const [{ category, searchGlobal }, dispatch] = useContext(FilterContext);

  // const [search, setSearch] = useState(searchGlobal);

  const setSearch = (e) => {
    dispatch({
      type: 'SET_SEARCH',
      payload: e
    })
  }

  return (
    // <FilterProvider reducer={reducer} initialState={initialState}>
      <Layout>
        <div className={styles.search}>
              <input type="text" className={styles.searchTerm} placeholder="What are you looking for?" value={searchGlobal} onChange={e => setSearch(e.target.value)} />
              <button type="submit" className={styles.searchButton}>
                  <i class="fa fa-search"></i>
              </button>
        </div>
        <Filter />
        <div className={styles.products}>
            {products.map(product => product.title.includes(searchGlobal) ? <Product product={product} /> : null)}
        </div>
      </Layout>
    // </FilterProvider>
  )
}

Products.getInitialProps = async function () {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return {
        products: products
    }
}
