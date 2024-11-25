Some info (to edit later)

spec:
  replicas: 3
  selector:
    matchLabels:
      component: web
  template:
    metadata:
      labels:
        component: web

this tells the deployment to create 3 replicas of pods that match the label component: web, and then specifies the template for the pods, which has to, in its definition, have the label component: web.

NodePort service exposes pods to the outside world.
ClusterIP service exposes pods to other pods in the cluster.