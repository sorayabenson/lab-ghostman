import React, { Component } from 'react';
import '../components/style.css';
import Spinner from '../components/Spinner';
import Controls from '../components/Controls';
import HistoryList from '../components/HistoryList';
import Results from '../components/Results';
import { getApi, postApi, putApi, deleteApi } from '../services/api-utils';

export default class Ghostman extends Component {
    state = {
        loading: false,
        url: '',
        method: 'get',
        json: '',
        results: {},
        history: [],
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

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const { url, json, history, method } = this.state;
        this.setState({ loading: true });

        const historyItem = {
            method: method,
            url: url
        }

        history.push(historyItem);
        
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
  
    }

    render() {
        const { loading, url,  json, results, history } = this.state;

        if (loading) return <Spinner />

        return (
            <main>
                <Controls 
                    url={url}
                    json={json}
                    onUrlChange={this.handleUrlChange}
                    onMethodChange={this.handleMethodChange}
                    onJsonChange={this.handleJsonChange}
                    onSubmit={this.handleSubmit}
                />
                <Results results={results}/>
                <HistoryList history={history}/>
            </main>
        )
    }
}
