import axios from 'axios';

const baseURL = process.env.VUE_APP_SLS_URL;

export default axios.create({
	baseURL,
});
