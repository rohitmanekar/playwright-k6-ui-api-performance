import { env } from 'k6';

export const config = {
  urls: {
    geturl: (status) => `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`,
    posturl: 'https://petstore.swagger.io/v2/pet',
    puturl: 'https://petstore.swagger.io/v2/pet',
    deleteurl: (id) => `https://petstore.swagger.io/v2/pet/${id}/`
  },
  performanceParams: {
    vus: parseInt(__ENV.VUS) || 1,
    duration: __ENV.DURATION || '1s',
  },
};
