import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = (props) => {
    console.log(props);
    if (!(props.data.confirmed)) { return "Loading..." }

    return (

        <div className={styles.container}>

            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom  >Infected</Typography>
                        <Typography variant="h5" >

                            <CountUp start={0} end={props.data.confirmed.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Active Cases </Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom  >Recovered</Typography>
                        <Typography variant="h5" >

                            <CountUp start={0} end={props.data.recovered.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Recovered Cases </Typography>

                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom  >Deaths</Typography>
                        <Typography variant="h5" >

                            <CountUp start={0} end={props.data.deaths.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Death Cases </Typography>

                    </CardContent>


                </Grid>



            </Grid>

        </div>
    )
}

export default Cards
