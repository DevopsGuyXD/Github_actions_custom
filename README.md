# Deploy to AWS ECS

<br>
<h2>Secrets:</h2>
<h4>1. Create these secrets in your github projects repository</h4>

    ACTION:
  	- Add this value "git clone -b ecs https://github.com/DevopsGuyXD/Github_actions_custom.git"

    ACCESS_KEY_ID:         
	- AWS access key

    ACCESS_KEY_SECRET:     
	- AWS access key secret

    REGION:                
	- AWS region

    ECR_LOGIN:             
	- AWS ECR login command

    DOCKER_IMAGE_NAME:     
	- Name for the docker image

    DOCKER_FILE_LOCATION:  
	- Location of your dockerfile

    ENV:
	- Env for the docker image Example-Prod, Dev etc

    CLUSTER_NAME:          
	- Name the AWS Cluster

    SERVICE_NAME:          
	- Name of the service running in the custer


<br>
<h2>Pipeline:</h2>
<h4>2. Create a folder named ".github" at the root level of your project, Create a file with the name "deploy_to_ecs.yml" and add the below contents to it while setting the branch value as well</h4>

    on:
      push:
        branches: [ Enter the branch from which your code needs to get deployed ]

    name: Deploy to Amazon ECS

    jobs:
      deploy:
        name: Deploy
        runs-on: ubuntu-18.04

        steps:
        - name: Checkout
          uses: actions/checkout@v2

        - name: Download action
          run: |
            ${{ secrets.ACTION }}

        - name: Deploy to ECS
          id: Deploy_to_ECS
          uses: ./Github_actions_custom
          with:
            access_key_id: ${{ secrets.ACCESS_KEY_ID }}
            access_key_secret: ${{ secrets.ACCESS_KEY_SECRET }}
            region: ${{ secrets.REGION }}
            ecr_login: ${{ secrets.ECR_LOGIN }}
            docker_image_name: ${{ secrets.DOCKER_IMAGE_NAME }}
            docker_file_location: ${{ secrets.DOCKER_FILE_LOCATION }}
            env: ${{ secrets.ENV_INT }}
            tag: ${{ github.sha }}
            cluster_name: ${{ secrets.CLUSTER_NAME }}
            service_name: ${{ secrets.SERVICE_NAME }}
