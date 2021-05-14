import React, { Component } from 'react';
import '../components/style.css';
import Spinner from '../components/Spinner';
import Controls from '../components/Controls';


export default class Ghostman extends Component {
    state = {
        loading: true,
        url: '',
        method: 'get',
        json: '',
        results: '',
        history: [],
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
        console.log(this.state)
    }

    handleUrlChange = (e) => {
        this.setState({ url: e.target.value }) 
    }

    handleMethodChange = (e) => {
        this.setState({ method: e.target.value }, () => console.log(this.state.method))
        //calling console.log after this.setState doesn't work because it is dependent state, so you must call it as a call back within this.setState to see the real update.
    }

    handleJsonChange = (e) => {
        this.setState({ json: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //if statement determines by method which service to use

        //sends url and json to service

        //returns results
        
        //updates results    
        
        //makes an object of method, url, json and pushes it to history array

        //updates history
    }

    render() {
        const { loading, url,  json, results, history } = this.state;

        if (loading) return <Spinner />

        return (
            <>
                <Controls 
                    url={url}
                    json={json}
                    onUrlChange={this.handleUrlChange}
                    onMethodChange={this.handleMethodChange}
                    onJsonChange={this.handleJsonChange}
                    onSubmit={this.handleSubmit}
                />
            </>
        )
    }
}
