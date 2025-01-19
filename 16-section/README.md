Authenticate to the cluster
```bash
gcloud container clusters get-credentials multi-cluster --zone europe-central2-b --project k8s-course-446916
```

Install helm inside the cluster
https://helm.sh/docs/intro/install/#from-script

Install ingress inside the cluster
https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
```bash
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace
  ```