const { createContext, useReducer, useContext } = require("react");

export const FilterContext = createContext();

const FilterProvider = ({ initialState, reducer, children }) => {
    return (
        <FilterContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </FilterContext.Provider>
    )
}

// export const FilterData = useContext(FilterContext);

export default FilterProvider;