import React from 'react'
import Nav from '../components/Nav'
import HomePageSlider from '../components/HomePageSlider'

function Home() {
    return (
        <div id="home">
            <Nav activePage="home" />
            <main >

                <div className="col-12">
                    <div className="search-box">
                        <input type="text" className='input-search' placeholder='search book name' />
                        <button className='search-btn'><i className="bi bi-search"></i></button>
                    </div>
                </div>

                <div className="mt-5">
                    <HomePageSlider />
                </div>
            </main>


        </div>
    )
}

export default Home