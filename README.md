# Deploy to AWS ECS

<h2>Secrets:</h2>
<h4>Create these secrets in your github projects repository</h4>

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

    CLUSTER_NAME:          
	- Name the AWS Cluster

    SERVICE_NAME:          
	- Name of the service running in the custer



<h2>Pipeline</h2>
<h4>Add this to your actions file that is present in the .github folder</h4>