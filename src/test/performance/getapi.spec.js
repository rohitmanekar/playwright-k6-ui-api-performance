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
    const result = http.get(config.urls.geturl('available'), params);
    check(result, {
        'is status 200': (r) => r.status === 200,
        'contain status as available ..': (r) => r.body.includes('available'),
    });
}