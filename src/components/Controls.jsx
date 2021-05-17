import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css'

const Controls = ({ url, json, onUrlChange, onMethodChange, onJsonChange, onSubmit }) => {
    const jsonPlaceholder = '{ \n   "send": "raw", \n   "json": "here" \n}'

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

                <section 
                    role='radiogroup'
                    className={style.radios}>
                    
                    <input 
                        type='radio' 
                        name='method' 
                        value='get' 
                        id='get' 
                        onChange={onMethodChange}
                        defaultChecked/>
                    <label 
                        className={style.radioLabel} 
                        htmlFor='get' 
                        aria-label='get'>get</label>
                        
                    <input 
                        type='radio' 
                        name='method' 
                        value='post' 
                        id='post' 
                        onChange={onMethodChange}/>
                    <label 
                        className={style.radioLabel} 
                        htmlFor='post'
                        aria-label='post'>post</label>

                    <input 
                        type='radio' 
                        name='method' 
                        value='put' 
                        id='put' 
                        onChange={onMethodChange}/>
                    <label 
                        className={style.radioLabel} 
                        htmlFor='put'
                        aria-label='put'>put</label>

                    <input 
                        type='radio' 
                        name='method' 
                        value='delete' 
                        id='delete' 
                        onChange={onMethodChange}/>
                    <label 
                        className={style.radioLabel} 
                        htmlFor='delete'
                        aria-label='delete'>delete</label>
                </section>

                <textarea
                    aria-label='json-input'
                    value={json}
                    onChange={onJsonChange}
                    className={style.jsonText}
                    placeholder={jsonPlaceholder}
                >
                </textarea>

                <button aria-label='submit'>submit</button>
            </form>
        </section>
    )
}

Controls.propTypes = {
    url: PropTypes.string.isRequired,
    json: PropTypes.string.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    onMethodChange: PropTypes.func.isRequired,
    onJsonChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Controls
