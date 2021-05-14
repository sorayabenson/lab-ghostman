import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css'

const Controls = ({ url, onUrlChange, onSubmit }) => {
    return (
        <section
            className={style.controls}
            aria-label='controls'  
        >
            <form onSubmit={onSubmit}>
                <input
                    type='url'
                    aria-label='api-url'
                    value={url}
                    onChange={onUrlChange}
                    placeholder='http://type-api-url-here.com'
                    className={style.url}
                />

                {/* <div className={style.radios}>
                    
                </div> */}

                {/* <input className={style.json}/> */}

                {/* <button>submit</button> */}
            </form>
        </section>
    )
}

Controls.propTypes = {
    url: PropTypes.string.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Controls
