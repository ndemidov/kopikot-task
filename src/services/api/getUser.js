import { GET } from '../request';

export default (endpoint = '/api/user', config) => GET(endpoint, config);
