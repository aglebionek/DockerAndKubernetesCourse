# Docker and Kubernetes: The Complete Guide
A repository for the course [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/) on Udemy.
The course is taught by Stephen Grider.

### Note
This repository was started a long time ago, when I first started this course. At the time, I only finished the Docker part of the course, which was extremely helpful. Now, years later, I'm going to finish the course, as both Kubernetes and AWS I want to laearn for my future career.

The _OLD_ directory contains all the code I made when I first started the course. Eveyrthing else is new and will follow the structure of the course, unlike the old sections.

## Sections

### Section 7 - Continuous Integration and Deployment with AWS (directory: `7-section`)
Below will be the list of changes I made to the code in the course. 

- Decided to use Github Actions instead of Travis CI, as I'm already familiar with GA. I also don't want to setup a Travis CI account.
- Rewrote the Dockerfiles to use alpine images .
- Had to make some changes in the 7_deploy_aws.yml workflow to account for the fact this is a monorepo.