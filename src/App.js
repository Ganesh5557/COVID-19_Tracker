import React, { Component } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';

import { fetchdata } from "./api";





export default class App extends Component {


    state = {
        data: {

        },
    }

    async componentDidMount() {
        const fetdata = await fetchdata();
        console.log(fetdata);
        this.setState({ data: fetdata })

    }
    render() {

        // const { data: { confirmed, recovered, deaths, lastIpdate } } = this.state
        return (
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <Chart />
                <CountryPicker />

            </div>
        )
    }
}
// export default App;