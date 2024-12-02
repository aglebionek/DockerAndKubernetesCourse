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

You can combine multiple resources in a single file, by separating them with `---`.

We use clusterIP for services that need to accept incoming requests. That's why in this app, the worker doesn't use it.

Volumes are different between docker and k8s. In docker, on in containerization in general, a volume refers to the ability access a part of the host's filesystem from within the container. In k8s, a volume is tied to a pod. It's a directory that's accessible to all containers in the pod. It's a way to share data between containers in the same pod. 
 Persistent volumes are not tied to a pod. They also won't be deleted when the pod is deleted, unlike a regular volume.
 We define a persistent volume using a persistent volume claim.
