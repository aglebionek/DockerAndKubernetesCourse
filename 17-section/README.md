Install cert manager with help
Docs: https://cert-manager.io/docs/installation/helm/#steps

```bash
helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.8.0 \
  --set installCRDs=true
```

Verify that everything went correctly
```bash
kubectl get certificates # verify the object deployment
kubectl describe certificates # check the logs for the issuing process
kubectl get secrets # check if the http-challenge secret was created
```