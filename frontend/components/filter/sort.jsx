import React, { useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateFilter } from '../../actions/filter_actions'

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
                dispatch(updateFilter('sort', sort));
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
                <div>
                    <input type="radio" className="sort-radio" name="sortType" value="relevance" id="relevance" checked={sort === 'relevance'} onChange={() => setSort('relevance')}/>
                    <label htmlFor="relevance"></label>
                    <p>Relevance</p>
                </div>
                <div>
                    <input type="radio" className="sort-radio" name="sortType" value="lowToHigh" id="lowToHigh" checked={sort === 'lowToHigh'} onChange={() => setSort('lowToHigh')}/>
                    <label htmlFor="lowToHigh"></label>
                    <p>Price: low to high</p>
                </div>
                <div>
                    <input type="radio" className="sort-radio" name="sortType" value="highToLow" id="highToLow" checked={sort === 'highToLow'} onChange={() => setSort('highToLow')}/>
                    <label htmlFor="highToLow"></label>
                    <p>Price: high to low</p>
                </div>
                <button type="submit">Apply</button>
            </form>
            <i className="fas fa-times" onClick={() => dispatch(props.closeModal())}></i>
        </>
    )
}

export default Sort;