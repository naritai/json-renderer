import { http, HttpResponse } from 'msw';
import fakejson from '../fakejson3000.json';
import { JSONArray } from '@/entities/json-member';

export const successWithData = (data?: JSONArray) => {
  return http.get<never, never, never>('http://localhost:5173/fakejson', () => {
    return HttpResponse.json(data ?? fakejson.slice(0, 3000));
  });
};

export const successWithNoData = http.get<never, never, never>(
  'http://localhost:5173/fakejson',
  () => {
    return HttpResponse.json([]);
  }
);

export const handlers = [successWithData()];
