import { http, HttpResponse } from 'msw'
import fakejson from '../fakejson.json'

// TODO: add response types JSON, etc
// https://mswjs.io/docs/best-practices/typescript/

export const handlers = [
  http.get('http://localhost:5173/fakejson', () => {
    return HttpResponse.json(fakejson)
  }),
]
