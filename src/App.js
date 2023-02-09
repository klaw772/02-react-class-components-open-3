import React, { Component } from 'react';
import { Photo } from './Photo';

const IMAGE_URL = "https://picsum.photos/350";
const API_URL = "https://catfact.ninja/fact";

class App extends Component {
    constructor() {
        super();
        this.state = {catfact: 'testfact'}
        // functional component way of setting state: const [catfact, setCatFact] = useState('');
    }

    componentDidMount() {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => this.setState({catfact: data.fact}))
    }


    render() {
        return (
            <>
                <h1>{this.state.catfact}</h1>
                <Photo imageUrl={IMAGE_URL} />
            </>
       )
    }


}

export { App };
