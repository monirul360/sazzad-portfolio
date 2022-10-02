import React, { useEffect, useState } from 'react';
import Showork from './Showork';
import { Link } from 'react-router-dom';
import Nav from '../Share/Nav/Nav';
const Works = () => {
    const [work, setwork] = useState([]);
    useEffect(() => {
        const url = "https://desolate-crag-18556.herokuapp.com/items";
        fetch(url)
            .then(res => res.json())
            .then(data => setwork(data))
    }, [])
    return (
        <div>
            <Nav></Nav>
            <section className='work-section'>
                <div className="work-title">
                    <h2>PORTFOLIO</h2>
                </div>

                {/* work-article */}
                <article>
                    <div className="container">
                        <div className="monirul">
                            {
                                work.slice(0).reverse().map(work => <Showork
                                    key={work.id}
                                    work={work}
                                ></Showork>)
                            }
                        </div>
                    </div>
                </article>
            </section>
            <div className="container">
                <div className="work-hire-me max-auto 
fixed-bottom mb-4">
                    <Link to='/contact'>Hire me </Link>
                </div>
            </div>
        </div>
    );
};

export default Works;