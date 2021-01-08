import React, { useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updatefilter } from '../../actions/filter_actions'

const Sort = props => {
 
    const currentFilter = useSelector(state => state.ui.filters.sort);
    const [sort, setSort] = useState(currentFilter || 'relevance');
    const dispatch = useDispatch();

   const isMountRef = useRef(true);

    useEffect(
        () => {
            if (isMountRef.current) {
                isMountRef.current = false;
            } else {
                dispatch(updatefilter('sort', sort));
            }
        },
        [sort]
    )

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateFilter('sort', sort));
    }
    
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="radio" name="sortType" id="sortType" value ="relevance" checked={sort === 'relevance'} onChange={() => setSort('relevance')}/>
                <label htmlFor="relevance">Relevance</label>
                <input type="radio" name="sortType" id="sortType" value="lowToHigh" checked={sort === 'lowToHigh'} onChange={() => setSort('lowToHigh')}/>
                <label htmlFor="lowToHigh">Price: low to high</label>
                <input type="radio" name="sortType" id="sortType" value="highToLow" checked={sort === 'highToLow'} onChange={() => setSort('highToLow')}/>
                <label htmlFor="highToLow">Price: high to low</label>
                <button type="submit">Apply</button>
            </form>
            <i className="fas fa-times" onClick={() => dispatch(props.closeModal())}></i>
        </>
    )
}

export default Sort;