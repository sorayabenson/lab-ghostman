import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css'

const HistoryItem = ({ method, url }) => {
    return (
        <>
           <h4 className={style.historyH4}>{method}:</h4>
           <p className={style.historyP}>{url}</p> 
        </>
    )
}

HistoryItem.propTypes = {
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default HistoryItem
