import { http, HttpResponse } from 'msw';

export const dashboardHandler = [
  http.get('/api/metrics', () => {
    return HttpResponse.json({
      cpu: Math.floor(Math.random() * 100),
      memory: Math.floor(Math.random() * 100),
      network: Math.floor(Math.random() * 1000)
    }, {status: 200})
  })
]