# Use an existing docker image as base
# This is basically getting a filesystem to work with. If we have alpine downloaded, it will use it, if not, it will download it
FROM alpine

# Download and install a dependency
# This command has nothing to do with docker, it's the command inside alpine filesystem that installs redis
# To run this command inside alpine, an intermediate alpine container is run, and the command is set as it's startup command
# It's the same if we were to run: docker run alpine apk add --update redis
# After the command finishes the container is removed, and the resulting filesystem is saved as a new image
# If we run it prevously and nothing changed, it's going to use the cached image instead of creating it again
RUN apk add --update redis


# we didn't run this before, so it needs to create a new container and run the command
RUN apk add --update gcc

# Tell the image what to do when it starts as a container. To achieve that, another temporary container is run.
# Final image is created with the startup command
# This is the startup command for the image, as an image consists of a filesystem and a command that's run when
#   the image is run as a container
CMD ["redis-server"]