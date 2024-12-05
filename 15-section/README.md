# Using ingress with WSL2
## Setup
- ```minikube start```
- ```minikube addons enable ingress```
- ```kubectl apply -f ingress.yaml```
- ```curl http://$(minikube ip)``` - verify that the ingress is working (should not return a 404 but a noscript)

## Accessing the ingress service
- ```minikube service list```
- Check the namespace and the name for the ingress service. Run the following command to get the url
```minikube service <name> -n <namespace> --url```
- You will see two urls, first one for http and the second one for https. Copy the http url and paste it in the browser. You should see the actual page.

# Resources
- [Ingress nginx repository](https://github.com/kubernetes/ingress-nginx)
- [Ingress deploy docs](https://kubernetes.github.io/ingress-nginx/deploy/)
- [Potential WSL2 ingress issue and fix](https://minikube.sigs.k8s.io/docs/drivers/docker/#known-issues)
