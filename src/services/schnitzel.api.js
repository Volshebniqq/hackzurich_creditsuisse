import Axios from 'axios';

const axios = Axios.create({
    baseUrl: 'http://portfolio.schnitzel.tech:8888/openapi'
});

axios.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9UUXlRVGRCTkRFNU1rWTNNMFZFTnpNeU9EWkJOa1pETkRCR1FrRkZOamxDTTBJeE5EazRNdyJ9.eyJpc3MiOiJodHRwczovL2dicHJvamVjdC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQ4ZjQ5Yjc4MjI1ZjkwZGJlYTIzNDEyIiwiYXVkIjpbImh0dHBzOi8vb3BlbmJhbmtpbmcuY29tL2FwaSIsImh0dHBzOi8vZ2Jwcm9qZWN0LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE1Njk2NzE4MTEsImV4cCI6MTU3MDUzNTgxMSwiYXpwIjoicThJTVlzMVNLekt0WExvdjhWM0pab3oxaE43MHgzQTciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiZ3R5IjoicGFzc3dvcmQifQ.VlVATH3gdyMt6upQILWNNf1m-aFJMdw2x_mxmf60RqT4cxj8CFpMHvegj5-STLEiU-jDRa5I6ZwkBhpUU_YWansXoLhBRmItUolGYEsg-nYcqmSH7e_K-n9KSCgNT1ZAppLacugsmbFIM6trscHY6OcHFOzzmitbWdnB1uFVwe7H9c3a3rjLWLeoHOp1B_UerTZZMIQj56YAI0OVS1mNde1Yi0oT5g17-xTl9AjNTimfo8O-R9VtlfP7-3oaB6Hd2NYUOVabjH5kydwb_yp5cYVzDSM17XjejZZrh3B3XddeXHCgcdtY0K7AyjhVarkuV-ORkulEmZFcykT0EBGrtQ`;

export const fetchClients = async () => {
    const { data } = await axios.post('http://34.65.217.224:8888/openapi/customers/search/unsecured', {
        filter: [],
        sorting: " nickname asc"
    });
    return data;
};

export const fetchPortfolio = async id => {
    const { data } = await axios.get(`http://34.65.217.224:8888/openapi/accounts/${id}/balancesec/unsecured`);
    console.log(data);
    console.log("data");
    return data;
};
