import axios from 'axios';

export const fetchTrends = async companies => {
    const { data } = await axios.post('http://localhost:3000/trends', { companies })
        .catch(e => {
            throw new Error(e);
        });
    return data;
}