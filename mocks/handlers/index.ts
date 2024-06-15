import { http, HttpResponse } from 'msw';
import fakejson from '../fakejson3000.json';

// TODO: add response types JSON, etc
// https://mswjs.io/docs/best-practices/typescript/
// return 1000 elements

export const handlers = [
	http.get('http://localhost:5173/fakejson', () => {
		return HttpResponse.json(fakejson.slice(0, 3000));
	}),
];
