import { useContext } from 'react';
import { FilterContext } from './context/FilterContext';
import styles from './Filter.module.css';

const Filter = () => {

    const [{ category }, dispatch] = useContext(FilterContext);

    // const [{ filter }, dispatch] = FilterData();

    const handleChange = (e) => {
        dispatch({
            type: 'SET_FILTER',
            payload: e.target.value
        })
    }

    return (
        <div>
            <select name="slct" id="slct" className={styles.select} onChange={handleChange} value={category}>
                <option selected disabled>Choose a category</option>
                <option value="All">All</option>
                <option value="Men clothing">Men clothing</option>
                <option value="Women clothing">Women clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Jewelery">Jewelery</option>
            </select>
        </div>
    )
}

export default Filter;