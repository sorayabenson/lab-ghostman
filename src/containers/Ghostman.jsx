import React, { Component } from 'react';
import '../components/style.css';
import Header from '../components/Header';
import Spinner from '../components/Spinner';


export default class Ghostman extends Component {
    state = {
        loading: true,
    }
    
    render() {
        const { loading } = this.state;

        if (loading) return <Spinner />

        return (
            <>
              
            </>
        )
    }
}
