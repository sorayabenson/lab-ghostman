import React, { Component } from 'react';
import '../components/style.css';
import Spinner from '../components/Spinner';
import Controls from '../components/Controls';


export default class Ghostman extends Component {
    state = {
        loading: true,
        url: '',
        method: '',
        json: '',
        results: '',
        history: [],
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    handleUrlChange = (e) => {
        this.setState({ url: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }


    
    render() {
        const { loading, url, method, json, results, history } = this.state;

        if (loading) return <Spinner />

        return (
            <>
                <Controls 
                    url={url}
                    onUrlChange={this.handleUrlChange}
                    onSubmit={this.handleSubmit}
                />
            </>
        )
    }
}
