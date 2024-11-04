### Starting the minikube and the pods
- ```minikube start``` - starts the minikube cluster
- ```kubectl apply -f .``` - runs all the yaml files in the current directory

### Status commands
- ```minikube status``` - shows the status of the minikube
- ```kubectl get pods``` - lists all the pods
- ```kubectl get services``` - lists all the services

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
