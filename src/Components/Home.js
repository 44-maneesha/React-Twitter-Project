import React, { useState, useEffect } from 'react';
import MainHeader from './MainHeader';
import NavSideBar from './NavSideBar';
import TweetSearch from './TweetSearch';
import MainContent from './MainContent';
import './style.css'

const api_endPoint = 'https://sandbox.nextleap.app/page/fetch'
const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api_endPoint);

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    console.log(data)
    return (
        <React.Fragment>
            {data &&
                <div className='home'>
                    <div className="side-nav-bar">
                        <NavSideBar data={data} />
                    </div>
                    <div className='main-header-content'>
                        <MainHeader data={data} />
                        <hr className='hr-size' />
                        <MainContent data={data} />
                    </div>
                    <div className='search-twitter-content'>
                        <TweetSearch data={data} />
                    </div>
                </div>
            }


        </React.Fragment>
    )
}

export default Home
