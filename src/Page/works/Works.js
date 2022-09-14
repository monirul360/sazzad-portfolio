import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Nav from '../Share/Nav/Nav';
import Showork from './Showork';
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
                    <h3>Big ideas beautifully crafted by creativity,</h3>
                    <h3>Designer & copywriter, Sazzad Hosen</h3>
                    <Link to='/contact'>Start a project</Link>
                </div>

                {/* work-article */}
                <article>
                    <div className="container">
                        <div className="row">
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
            <Footer></Footer>
        </div>
    );
};

export default Works;