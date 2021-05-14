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
        this.setState({ method: e.target.value })
        console.log(this.state.method)
    }

    handleJsonChange = (e) => {
        this.setState({ json: e.target.value })
        console.log(this.state.json)
    }

    handleSubmit = (e) => {
        e.preventDefault();
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
