import React from 'react';
import Search from '../search/search';
import Covid from './covid'
import Category from './category';
import Discover from './discover';
import HostLearn from './host_learn'
import Footer from './footer';

const Splash = () => {
    return (
        <div>
            <Search />
            <Covid />
            <Category />
            <Discover />
            <HostLearn />
            <Footer />
        </div>
    )
}

export default Splash;