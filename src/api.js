import Axios from 'axios';

const axios = Axios.create({
    baseUrl: 'https://ourapi.com/api/v1'
});

export const getClients = async () => {
    const { data } = await axios.get('/clients')
        .catch(e => {
            throw new Error(e);
        });
    return data;
};
export const getClientInfo = () => { };