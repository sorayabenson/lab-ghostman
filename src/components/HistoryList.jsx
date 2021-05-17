import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
    return (
        <ul aria-label='history'>
            {history.map((historyItem) => {
                return (
                    <li
                        aria-label='history-item'
                        key={`${historyItem.url}+${historyItem.method}`}    
                    >
                        <HistoryItem 
                            method={historyItem.method}
                            url={historyItem.url}    
                        />
                    </li>
                )
            })}
        </ul>
    )
}

History.propTypes = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            method: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default History;
