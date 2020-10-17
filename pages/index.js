import { useContext, useState } from 'react'
import { FilterContext } from '../components/context/FilterContext'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {

  const [srch, setSrch] = useState('')

  const [{}, dispatch] = useContext(FilterContext)

  const router = useRouter()

  const setSearch = (e) => {
    e.preventDefault()
    dispatch({
      type: 'SET_SEARCH',
      payload: srch
    })
    router.push('/products')
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Search for products</h1>
        <form>
          <input value={srch} onChange={e => setSrch(e.target.value)}></input>
          <button onClick={setSearch}></button>
        </form>
        
      </div>
    </Layout>
  )
}
