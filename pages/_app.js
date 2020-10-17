import FilterProvider from '../components/context/FilterContext'
import { initialState, reducer } from '../components/context/reducer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <FilterProvider initialState={initialState} reducer={reducer} ><Component {...pageProps} /></FilterProvider> 
}

export default MyApp
