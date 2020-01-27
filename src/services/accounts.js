import axios from 'axios';

const MIN_FETCH_TIME = 500;
function sleep(t = MIN_FETCH_TIME) {
    t = Math.random() * t + MIN_FETCH_TIME
    return new Promise(resolve => setTimeout(resolve, t))
}

const fetchProperties = async (delay=true) => {
    const url = '/data/properties.json';
    //const url = 'https://dev-api-assetmanagemnt-workerhost.azure.saws.org/account/api/gallons/3463463';
    try {
        const response = await axios({
            method: 'get',
            url: url,
            headers: {
                'Ocp-Apim-Trace': true,
                'Ocp-Apim-Subscription-Key': 'd334acadb84d48b39eca45d2bd4119ef'
            }
        });
        if (delay) {
            await sleep();
        }
        return response.data;
    } catch(e) {
        console.error('Request for fetchProperties failed');
        throw e;
    }
};

export { fetchProperties }