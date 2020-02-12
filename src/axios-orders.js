import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://reactbuildabetterburger.firebaseio.com/'
});

export default instance;