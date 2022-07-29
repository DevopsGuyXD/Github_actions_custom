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
  const env                  = core.getInput('env');
  const tag                  = core.getInput('tag');
  const cluster_name         = core.getInput('cluster_name');
  const service_name         = core.getInput('service_name');

  exec(`aws configure set aws_access_key_id ${access_key_id};
        aws configure set aws_secret_access_key ${access_key_secret};
        aws configure set region ${region};
        ${ecr_login};
        docker build -t ${docker_image_name}:latest . --build-arg env=${env};
        docker build -t ${docker_image_name}:v.${tag.substring(0,8)} . --build-arg env=${env};
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
  
} catch (error) {

  core.setFailed(error.message);

}
