import axios from 'axios';

const KEY = 'Get the api key from www.googleapis.com/youtube/v3';

export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});

