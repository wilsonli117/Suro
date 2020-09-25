import React from 'react';

const Category = props => {
    return (
        <>
            <h2 className="category-browse">Browse by category</h2>
            <div className="category">
                <ul class="categories">
                    <div><i class="fas fa-angle-left fa-2x"></i></div>
                    <li><img src={window.carURL} /><div>Car</div></li>
                    <li><img src={window.classicURL} /><div>Classics</div></li>
                    <li><img src={window.convertibleURL} /><div>Convertibles</div></li>
                    <li><img src={window.exoticURL} /><div>Exotic & luxury</div></li>
                    <li><img src={window.suvURL} /><div>SUVs</div></li>
                    <li><img src={window.sportURL} /><div>Sport</div></li>
                    <div><i class="fas fa-angle-right fa-2x"></i></div>
                </ul>
            </div>
        </>
    )
}

export default Category;