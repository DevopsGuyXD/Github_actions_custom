const core = require('@actions/core');
const github = require('@actions/github');


try {

  exec(`aws configure set aws_access_key_id ${access_key_id}`, (error, stdout) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
 	});


	exec(`aws configure set aws_secret_access_key ${access_key_secret}`, (error, stdout) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
    });


	exec(`aws configure set region ${region}`, (error, stdout) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
    });


  const time = (new Date()).toTimeString();
  core.setOutput("time", time);


  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);


} catch (error) {

  core.setFailed(error.message);

}