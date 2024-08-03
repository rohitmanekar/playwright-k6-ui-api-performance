// @ts-ignore
import http from 'k6/http';
import { check } from 'k6';
import { config } from '../../main/config/performance-config.js';

export const options = {
    vus: config.performanceParams.vus,
    duration: config.performanceParams.duration,
};

export default function () {
    const params = {
        headers: {
            'accept': 'application/json',
        },
    };

    // Step 1: Fetch the ID using a GET request
    const getResponse = http.get(config.urls.geturl('available'), params);
    check(getResponse, {
        'GET request status is 200': (r) => r.status === 200,
    });

    // Step 2: Extract the ID from the GET request response
    const ids = JSON.parse(getResponse.body).map(item => item.id);
    const idToDelete = ids[Math.floor(Math.random() * ids.length)];

    // Log the ID to be deleted for debugging
    console.log(`ID to delete: ${idToDelete}`);

    
    const deleteUrl = config.urls.deleteurl(idToDelete);
    console.log(`deleteUrl: ${deleteUrl}`);
    const result = http.del(deleteUrl, null, params);


  //  const result = http.delete(config.urls.deleteurl('9223372036854775000'), params);
    check(result, {
        'is status 200': (r) => r.status === 200,
       // 'contain status as available ..': (r) => r.body.includes('200'),
    }); 
}