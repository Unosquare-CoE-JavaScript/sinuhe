export default {
  environment: 'dev',
  environments: {
    dev: {
      baseUrl: 'http://localhost:3000/api/v1'
    },
    prod: {
      baseUrl: '/api/v1'
    }
  }
}