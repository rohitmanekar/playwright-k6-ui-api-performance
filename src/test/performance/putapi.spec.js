//@ts-ignore
import http from 'k6/http';
import { check } from 'k6';
import { config } from '../../main/config/performance-config.js';

export const options = {
    vus: config.performanceParams.vus,
    duration: config.performanceParams.duration,
};

export default function () {
    const endpoint = config.urls.posturl;
    const params = {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
        },
    };
    const payload = JSON.stringify({
      
        "id": 0,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      
          
    });
    try {
        const result = http.put(endpoint, payload, params);
        console.log(result);
        check(result, {
            'is status 200': (r) => r.status === 200,
            'contain status as available': (r) => r.body.includes('available'),
        });
    } catch (error) {
        console.error('Error making the API request:  ', error);
        throw error;
    }
}