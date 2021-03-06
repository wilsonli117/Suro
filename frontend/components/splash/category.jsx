import React from 'react';

const Category = props => {
    return (
        <>  
            <div className="category-flex">
                <h2 className="category-browse">Browse by category</h2>
            <div className="category">
                <ul className="categories">
                    <div><i className="fas fa-angle-left fa-2x"></i></div>
                    <li onClick={() => props.history.push("/cars")}><img src={window.carURL} /><div>Car</div></li>
                    <li onClick={() => props.history.push("/cars")}><img src={window.classicURL} /><div>Classics</div></li>
                    <li onClick={() => props.history.push("/cars")}><img src={window.convertibleURL} /><div>Convertibles</div></li>
                    <li onClick={() => props.history.push("/cars")}><img src={window.exoticURL} /><div>Exotic & luxury</div></li>
                    <li onClick={() => props.history.push("/cars")}><img src={window.suvURL} /><div>SUVs</div></li>
                    <li onClick={() => props.history.push("/cars")}><img src={window.sportURL} /><div>Sport</div></li>
                    <div><i className="fas fa-angle-right fa-2x"></i></div>
                </ul>
            </div>
            </div>
        </>
    )
}

export default Category;