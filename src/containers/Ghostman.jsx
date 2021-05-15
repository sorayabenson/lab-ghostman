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
        this.setState({ loading: false })
    }

    handleUrlChange = (e) => {
        this.setState({ url: e.target.value }) 
    }

    handleMethodChange = (e) => {
        this.setState({ method: e.target.value })
        // this.setState({ method: e.target.value }, () => console.log(this.state.method))
        //calling console.log after this.setState doesn't work because it is dependent state, so you must call it as a call back within this.setState to see the real update.
    }

    handleJsonChange = (e) => {
        this.setState({ json: e.target.value })
    }

    refreshResults = () => {
        console.log(this.state.method, this.state.results)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const { url, json } = this.state;
        this.setState({ loading: true });
        
        //if statement determines by method which service to send the url and json to
        if (this.state.method === 'get') {
            let results = await getApi(url);
            this.setState({ results: results });
        } else if (this.state.method === 'post') {
            let results = await postApi(url, json);
            this.setState({ results: results });
        } else if (this.state.method === 'put') {
            let results = await putApi(url, json);
            this.setState({ results: results });
        } else {
            let results = await deleteApi(url);
            this.setState({ results: results });
        }

        this.setState({ loading: false });
        
        //updates results
        this.refreshResults();    
        
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
