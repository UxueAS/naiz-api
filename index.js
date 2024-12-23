const mockoon = require('@mockoon/serverless');

// Load the Mockoon Environment object
const mockEnv = require('./naiz.json');

const app = new mockoon.MockoonServerless(mockEnv);

module.exports = app;