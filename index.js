const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('exec');

try {

  const access_key_id     = core.getInput('access_key_id');
  const access_key_secret = core.getInput('access_key_secret');
  const region            = core.getInput('region');
  const docker_image_name = core.getInput('docker_image_name');

  // exec(`aws configure set aws_access_key_id ${access_key_id}`, (error, stdout) => {
  //     if (error) {
  //         console.log(`error: ${error.message}`);
  //         return;
  //     }
  // });

  // exec(`aws configure set aws_secret_access_key ${access_key_secret}`, (error, stdout) => {
  //     if (error) {
  //         console.log(`error: ${error.message}`);
  //         return;
  //     }
  // });

  // exec(`aws configure set region ${region}`, (error, stdout) => {
  //     if (error) {
  //         console.log(`error: ${error.message}`);
  //         return;
  //     }
  // });

  exec(`docker build -t ${docker_image_name} .`, (error, stdout) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
  });

  exec(`docker image ls`, (error, stdout) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
  });

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);


} catch (error) {

  core.setFailed(error.message);

}
