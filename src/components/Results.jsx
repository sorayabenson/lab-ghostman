import React from 'react';
import JSONPretty from 'react-json-pretty';
import PropTypes from 'prop-types';
import style from './style.css';

const Results = ({ results }) => {
    return (
        <section 
            role='contentinfo'
            aria-label='results'
            className={style.results}>
                <pre 
                className={style.resultsText}>
                    {JSON.stringify(results, null, 2)}
                </pre>
        </section>
    )
}

Results.propTypes = {
    results: PropTypes.any.isRequired
}

export default Results
