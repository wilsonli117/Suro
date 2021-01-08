import React, { useState} from 'react';
import { useDispatch } from 'react-redux'

const Sort = props => {

    const [sort, setSort] = useState('relevance');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        setSort(e.currentTarget.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="radio" name="sortType" id="sortType" value ="relevance" onChange={ e => setSort(e.target.value)}/>
                <label htmlFor="relevance">Relevance</label>
                <input type="radio" name="sortType" id="sortType" value="lowToHigh" onChange={e => setSort(e.target.value)}/>
                <label htmlFor="lowToHigh">Price: low to high</label>
                <input type="radio" name="sortType" id="sortType" value="highToLow" onChange={e => setSort(e.target.value)}/>
                <label htmlFor="highToLow">Price: high to low</label>
                <button type="submit">Apply</button>
            </form>
            <i class="fas fa-times" onClick={() => dispatch(props.closeModal())}></i>
        </>
    )
}

export default Sort;