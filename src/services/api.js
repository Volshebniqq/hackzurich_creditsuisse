import axios from 'axios';

export const fetchTrends = async companies => {
    const { data } = await axios.post('http://localhost:3000/trends', { companies })
        .catch(e => {
            throw new Error(e);
        });
    return data;
};

export const fetchMentionsData = async company => {
    const { data } = await axios.get(`http://6cf804d7.ngrok.io/past-six-months/${company.toLowerCase()}/month`)
        .catch(e => { console.log(e); });
    return data;
};

export const fetchSentimentalData = async company => {
    const { data } = await axios.get(`http://6cf804d7.ngrok.io/recent-query-dj/${company.toLowerCase()}`)
        .catch(e => { console.log(e); });
    return data;
};