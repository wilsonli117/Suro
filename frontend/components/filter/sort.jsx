import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateFilter } from '../../actions/filter_actions'

const Sort = props => {

    const currentFilter = useSelector((state) => state.ui.filters.sort);
    const [sort, setSort] = useState('relevance');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        debugger;
        e.preventDefault();
        dispatch(updateFilter('sort', sort));
        
    }

    debugger;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="radio" name="sortType" id="sortType" value ="relevance" checked={currentFilter === 'relevance' ? "checked" : null} onChange={ e => setSort(e.target.value)}/>
                <label htmlFor="relevance">Relevance</label>
                <input type="radio" name="sortType" id="sortType" value="lowToHigh" checked={currentFilter === 'lowToHigh' ? "checked" : null} onChange={e => setSort(e.target.value)}/>
                <label htmlFor="lowToHigh">Price: low to high</label>
                <input type="radio" name="sortType" id="sortType" value="highToLow" checked={currentFilter === 'highToLow' ? "checked" : null} onChange={e => setSort(e.target.value)}/>
                <label htmlFor="highToLow">Price: high to low</label>
                <button type="submit">Apply</button>
            </form>
            <i className="fas fa-times" onClick={() => dispatch(props.closeModal())}></i>
        </>
    )
}

export default Sort;