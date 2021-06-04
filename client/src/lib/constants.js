const GithubAuth = {
  baseUrl: 'https://github.com/login/oauth/authorize',
  callbackUrl: 'http://localhost:3000/callback',
  clientId: '17efb9d8c5a49375644e',
};

export const GITHUB_AUTH_URL = `${GithubAuth.baseUrl}?client_id=${GithubAuth.clientId}&redirect_uri=${GithubAuth.callbackUrl}`;
