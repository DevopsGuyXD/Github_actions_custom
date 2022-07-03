const core = require('@actions/core');
const github = require('@actions/github');


try {

  app.get("/test", (_req, res) =>  {
   res.status(200).send("Hello world")
  });

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);


  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);


} catch (error) {

  core.setFailed(error.message);

}
