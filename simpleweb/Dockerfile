# alpine tag means the image is as small and compact as possible
FROM node:alpine
# set current working directory inside the container
WORKDIR /usr/app
# copy instruction moves files from our filesystem (relative to the build context) to the image
COPY ./ ./
# install npm inside image
RUN npm install
# run npm start on image startup
CMD ["npm", "start"]

# since this is a server, it needs to accept connections. Inside index.js we specified that it should listen on port 8080.
# However, if you connect to localhost:8080, that connection isn't forwarded to the running containers.
# In order for it to work, we need to set up the forwarding while we start up the container
# docker run -p HostPort:ContainerPort ContainerID