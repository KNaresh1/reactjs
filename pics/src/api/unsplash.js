import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID b99225be1f72131d6eed9cc284d747a5b8a881f65b07faeff245049e62f055d0'
	}
});