const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('exec');

try {

  const access_key_id     = core.getInput('access_key_id');
  const access_key_secret = core.getInput('access_key_secret');
  const region            = core.getInput('region');


  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);


} catch (error) {

  core.setFailed(error.message);

}
