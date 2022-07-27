const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('child_process').exec;

try {

  const access_key_id        = core.getInput('access_key_id');
  const access_key_secret    = core.getInput('access_key_secret');
  const region               = core.getInput('region');
  const ecr_login            = core.getInput('ecr_login');
  const docker_image_name    = core.getInput('docker_image_name');
  const docker_file_location = core.getInput('docker_file_location');
  const tag                  = core.getInput('tag');
  const cluster_name         = core.getInput('cluster_name');
  const service_name         = core.getInput('service_name');

  exec(`aws configure set aws_access_key_id ${access_key_id};
        aws configure set aws_secret_access_key ${access_key_secret};
        aws configure set region ${region};
        ${ecr_login};
        docker build -t ${docker_image_name}:latest .;
        docker build -t ${docker_image_name}:v.${tag.substring(0,8)} .;
        docker push ${docker_image_name}:latest;
        docker push ${docker_image_name}:v.${tag.substring(0,8)};
        aws ecs update-service --cluster ${cluster_name} --service ${service_name} --force-new-deployment`, (error, stdout) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }else{
          console.log(`Output: ${stdout}`);
          return;
      }
  });

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

  // exec(`${ecr_login}`, (error, stdout) => {
  //     if (error) {
  //         console.log(`error: ${error.message}`);
  //         return;
  //     }else{
  //         console.log(`ECR-login: ${stdout}`);
  //         return;
  //     }
  // });

  // exec(`docker build -t testimage:latest .`, (error, stdout) => {
  //     if (error) {
  //         console.log(`error: ${error.message}`);
  //         return;
  //     }else{
  //         console.log(`Docker-build: ${stdout}`);
  //         return;
  //     }
  // });

  // exec(`docker inspect testimage:latest`, (error, stdout) => {
  //     if (error) {
  //         console.log(`error: ${error.message}`);
  //         return;
  //     }else{
  //         console.log(`Docker-build: ${stdout}`);
  //         return;
  //     }
  // });

  // exec(`docker tag testimage:latest 593693325525.dkr.ecr.ap-south-1.amazonaws.com/pipeline-test:latest`, (error, stdout) => {
  //     if (error) {
  //         console.log(`error: ${error.message}`);
  //         return;
  //     }else{
  //         console.log(`Docker-image-list: ${stdout}`);
  //         return;
  //     }
  // });

  // exec(`docker push 593693325525.dkr.ecr.ap-south-1.amazonaws.com/pipeline-test:latest`, (error, stdout) => {
  //     if (error) {
  //         console.log(`error: ${error.message}`);
  //         return;
  //     }else{
  //         console.log(`Docker-push: ${stdout}`);
  //         return;
  //     }
  // });


  // const nameToGreet = core.getInput('nameToGreet');
  // console.log(`Hello ${nameToGreet}!`);

  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);


} catch (error) {

  core.setFailed(error.message);

}
