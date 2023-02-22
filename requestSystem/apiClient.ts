import ky, { Options } from 'ky';
import { getCookie, deleteCookie } from 'cookies-next';

const addAuthHeader = (request: Request) => {
  const token = getCookie('token');

  if (token) {
    request.headers.set('Authorization', `Bearer ${token}`);
  }
};

// This code is just a simulation for server side Authentication checking
const checkAuth = (request: Request, options: Options) => {
  // No need to check if user is authenticated on login page
  if (request.url.includes('login')) return

  if (request.headers.get('Authorization') !== `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`) {
    return new Response('', { status: 403, statusText: 'Not Authorized' });
  }
};

// An intercepter to check for not authenticated users
const checkNotAuth = (_request: Request, _options: Options, response: Response) => {
  if (response.status === 403) {
    window.location.href = `${window.location.origin}/login`
    deleteCookie('token')
  }
}

const apiClient = ky.create({ prefixUrl: process.env.NEXT_PUBLIC_API_URL }).extend({
  hooks: {
    beforeRequest: [addAuthHeader, checkAuth],
    afterResponse: [checkNotAuth]
  },
});

export default apiClient;
