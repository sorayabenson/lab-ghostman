import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Results = ({ results }) => {
    return (
        <section 
            role='contentinfo'
            aria-label='results'
            className={style.results}>
            <p>
                
                {JSON.stringify(results)}
                {/* {
                `"id": 1,
                "name": "Skater Ghost",
                "img": "https://static1.squarespace.com/static/546be815e4b05d93ff91f0ed/602eefdc0afad00aceb2a0ce/602eeff8513f620bd182f959/1613688877207/skater-ghost.png?format=500w",
                "description": "Do you want to go fast? This rad boy can take you for a ride.",
                "category_id": "skill",
                "price": 4,
                "price_currency": "skateboard wheels",
                "trustworthy": true,
                "owner_id": 1`
                } */}
            </p>
        </section>
    )
}

Results.propTypes = {
    // results: PropTypes.any.isRequired
}

export default Results
