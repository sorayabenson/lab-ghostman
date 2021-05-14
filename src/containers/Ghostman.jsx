import React, { Component } from 'react';
import '../components/style.css';
import Spinner from '../components/Spinner';
import Controls from '../components/Controls';
import { getApi, postApi, putApi, deleteApi } from '../services/api-utils';


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
        this.setState({ url: e.target.value }, () => console.log(this.state.url)) 
    }

    handleMethodChange = (e) => {
        this.setState({ method: e.target.value }, () => console.log(this.state.method))
        //calling console.log after this.setState doesn't work because it is dependent state, so you must call it as a call back within this.setState to see the real update.
    }

    handleJsonChange = (e) => {
        this.setState({ json: e.target.value }, () => console.log(this.state.json))
    }

    handleSubmit = async (e) => {
        const { url, json, results, method } = this.state;
        e.preventDefault();

        //if statement determines by method which service to use
        if (this.state.method === 'get') {
            let results = await getApi(url);
            console.log(method, results)
            // return results;
        } else if (this.state.method === 'post') {
            let results = await postApi(url, json);
            console.log(method, results)
            // return results;
        } else if (this.state.method === 'put') {
            let results = await putApi(url, json)
            console.log(method, results)
            // return results;
        } else {
            let results = await deleteApi(url)
            console.log(method, results)
            // return results;
        }

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
