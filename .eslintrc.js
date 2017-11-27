module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-underscore-dangle': [ 'error', { allow: ['__express'] } ]
  },
};
