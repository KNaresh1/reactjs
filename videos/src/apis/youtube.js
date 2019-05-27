import axios from 'axios';

const KEY = 'AIzaSyAdP2YK4w6M9rsGFqe_RMbdZdrJfy5OTE8';

export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});

