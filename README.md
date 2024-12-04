# Docker and Kubernetes: The Complete Guide
A repository for the [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/) course on Udemy, taught by Stephen Grider.

### Note
This repository was started a long time ago, when I first started this course. At the time, I only finished the Docker part of the course, which was extremely helpful. Now, years later, I'm going to finish the course, as both Kubernetes and AWS I want to laearn for my future career.

The _OLD_ directory contains all the code I made when I first started the course. Eveyrthing else is new and will follow the structure of the course, unlike the old sections.

## Custom changes in the course code/repo changes
### General 
- Decided to use Github Actions instead of Travis CI, as I'm already familiar with GA. I also don't want to setup a Travis CI account.
- Rewrote the Dockerfiles to use alpine images, npm ci instead of npm i.

### Section 7 - Continuous Integration and Deployment with AWS (directory: `7-section`)
- Had to make some changes in the 7_deploy_aws.yml workflow to account for the fact this is a monorepo.

### Section 11 - Multi-Container Deployments to Kubernetes (directory: `11-section`)
- Had to include certificates for postgres. The course doesn't mention this, but it's necessary for the server to work, and to connect to the database.
[Source](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html)

### Section 12 - Onwards to Kubernetes! (directory: `12-section`)
- Uploaded the yml files for the Pod and Service. 
- Uploaded a README.md file with some commands and explanation about WSL2 setup.

### Section 13 - Maintaining Sets of Containers with Deployments (directory: `13-section`)
- Replaced the Pod yml file from the previous section with a Deployment file.
- Uploaded the Service yml file from previous section. 
- Uploaded an expanded README.md file from the previous section, with more commands, better terminology and a note about updating image versions.
- Updated README.md with a note about accessing containers inside a node.

### Section 14 - A Multi-Container App with Kubernetes (directory: `14-section`)
- Using the app files directly from the course repo, as they are already setup for local k8s.
- Using a k8s ConfigMap and Secret objects for the environment variables, instead of writing them directly in the yml files.
The template for the objects is stored in .envs.template. Locally, the file was named .envs.yml. I've changed it here to:
    1. Hide secrets from the repo.
    2. Avoid the .yml file to be picked up by kubectl commands.
