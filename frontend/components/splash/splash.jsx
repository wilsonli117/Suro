import React from 'react';
import Search from '../search/search_container';
import Covid from './covid'
import Category from './category';
import Discover from './discover';
import HostLearn from './host_learn'
import Footer from './footer';

const Splash = (props) => {
    return (
        <div>
            <Search />
            <Covid />
            <Category history={props.history}/>
            <Discover history={props.history}/>
            <HostLearn />
            <Footer />
        </div>
    )
}

export default Splash;