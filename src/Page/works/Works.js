import React, { useEffect, useState } from 'react';
import Showork from './Showork';
import { Link } from 'react-router-dom';
import Nav from '../Share/Nav/Nav';
const Works = () => {
    const [work, setwork] = useState([]);
    const workreverse = work?.reverse();
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
                                work.map(work => <Showork
                                    key={work.id}
                                    work={work}
                                ></Showork>)
                            }
                        </div>
                    </div>
                </article>
            </section>
            <div className="work-hire-me">
                <Link to='/contact'>Hire me </Link>
            </div>
        </div>
    );
};

export default Works;