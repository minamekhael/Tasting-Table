import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="container py-5">
            <h1 className="display-4">Recipes for every occasion</h1>
            <p className="lead text-muted">
                A list of your own recipes to share or keep.
            </p>
        </div>
    )
}

export default Header
