import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Brand.scss'

const Brand = () => {
    return (
        <>
            {/* logo brand */}
            <div className="brand">
                <Link to="/#home">
                    <i class="fas fa-arrow-left"><br/>Accueil</i>
                    {/* <figure>
                        <img
                        className="logo"
                        src={hands}
                        alt="logo représentant deux mains"/>
                        <figcaption>Accueil</figcaption>
                    </figure> */}
                </Link>
            </div>
        </>
    )
}

export default Brand;