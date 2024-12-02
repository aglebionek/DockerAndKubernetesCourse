### Starting the minikube and managing resources
- ```minikube start``` - starts the minikube cluster
- ```kubectl apply -f .``` - applies all configurations in the current directory
- ```kubectl delete -f .``` - deletes all the configurations in the current directory
- ```kubectl delete <resource> <resource name>``` - deletes a specific resource

### Status commands
- ```minikube status``` - shows the status of the minikube
- ```kubectl get <resource>``` - lists all the resources, e.g. deployments, pods, services
- ```kubectl describe <resource> <resource name>``` - shows more information about the resource
- ```kubectl logs <pod name>``` - shows the logs of the pod

### Accessing the pod in the browser with WSL2
"The network is limited if using the Docker driver on Darwin, Windows, or WSL, and the Node IP is not reachable directly." [source](https://minikube.sigs.k8s.io/docs/handbook/accessing/)
Because of that, minikube can create a tunnel for us to access the pod in the browser. To do that, we need to run the following command:
- ```minikube service client-node-port --url``` - shows the url to access the pod in the browser. Note from the command output: "Because you are using a Docker driver on linux, the terminal needs to be open to run it." The terminal hangs.
- Running ```minikube service client-node-port url``` doesn't hang the terminal, but it automatically tries to open a browser with the tunnel url.
- Running ```minikube service --all``` has the same effect as the previous command.

### Accessing the pod without a tunnel
- ```minikube ip``` - shows the minikube ip
- Access the pod in the browser with the following url: ```http://<minikube ip>:<nodePort>```
- Docker Desktop should work with a localhost url, so ```http://localhost:<nodePort>```

### Updating a resource to use the actual :latest image
- [Kubernetes github issue reference](https://github.com/kubernetes/kubernetes/issues/33664)
You have to modify the resource file for the apply command to run. This might create issues, if for example you're using a :latest tag, and the image is updated. The resource file will not be updated, and the apply command will not run.
Possible solutions include:
- Delete the resource and apply it again (not really recommended)
Use actual version tags instead of :latest, and either
- Update the tag in the yaml file manually
- Use a command to update the image in the resource file, like the following:
```kubectl set image <resource_type>/<resource_name> <container_name>=<new_image>```

Sources for the variable names:
- <resource_type> - kind in the resource file, e.g. deployment
- <resource_name> - metadata.name in the resource file, e.g. client-deployment
- <container_name> - containers.name in the resource file, e.g. client
- <new_image> - the full name of the image, including the tag, e.g. stephengrider/multi-client:v5

Example:
```kubectl set image deployment/client-deployment client=stephengrider/multi-client:v5```

### Accessing containers inside a node
When using minikube, we can access the containers inside the node in a few ways.

- ```eval $(minikube docker-env)``` - sets the docker environment variables to use minikube's docker daemon. Doing that will cause running any docker command,
for example ```docker ps``` to work with the containers inside minikube.

There are other ways to interact with the docker inside a node. For example:
- ```docker exec -it <node_name> sh``` - opens a shell inside the container. We can run docker commands from there. (in my case the node_name is `minikube`)

Using kubectl to interact with the containers is also possible. For example:
- ```kubectl exec -it <container_name> sh``` - opens a shell inside the container, same as docker exec.