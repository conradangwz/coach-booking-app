import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopCoaches from '../components/TopCoaches'
import Banner from '../components/Banner'


const Home = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <TopCoaches />
            <Banner />
        </div>
    )
}

export default Home
