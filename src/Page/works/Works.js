import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Showork from './Showork';
const Works = () => {
    const [work, setwork] = useState([]);
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/monirul360/test/main/work.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setwork(data))
    }, [])
    return (
        <div>
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