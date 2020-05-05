import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


// for charts implemented for deaths, recovered and confirmed cases.
export const fetchdata = async () => {

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        return ({ confirmed, recovered, deaths, lastUpdate })
    } catch (error) {

    }
}


// for the graph implemented below the cards

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);

        const modifiedData = data.map((dailyData) => ({

            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,

        }));

        return (modifiedData)
    } catch (error) {

    }
}

export const countries = async () => {
    try {
        const response = await axios.getUri(`${url}/countries`);
        return countries.map((country) => country.name);

    } catch (error) {

    }
}