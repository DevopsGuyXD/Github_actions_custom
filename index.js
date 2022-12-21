const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("child_process").exec;

try {
  const docker_server_url = core.getInput("docker_server_url");
  const docker_file_path  = core.getInput("docker_file_path")
  const docker_server_username = core.getInput("docker_server_username");
  const docker_server_password = core.getInput("docker_server_password");
  const docker_image_name = core.getInput("docker_image_name");
  const tag = core.getInput("tag");
  const github_username = core.getInput("github_username");
  const github_pat = core.getInput("github_pat");
  const resource_group = core.getInput("resource_group");
  const app_service_withfloats_api = core.getInput("app_service_withfloats_api");
  const app_service_withfloats_api_createfp = core.getInput("app_service_withfloats_api_createfp");
  const app_service_withfloats_api_getfpdetails = core.getInput("app_service_withfloats_api_getfpdetails");
  const app_service_withfloats_api_getkeywords = core.getInput("app_service_withfloats_api_getkeywords");
  const app_service_withfloats_api_search = core.getInput("app_service_withfloats_api_search");

  exec(`ls -a`,(error, stdout) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      } else {
        console.log(`Output: ${stdout}`);
        return;
      }
    }
  );
} catch (error) {
  core.setFailed(error.message);
}
