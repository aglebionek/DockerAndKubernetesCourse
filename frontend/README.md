<h2>frontend</h2>
<p></p>
<p>While running the container we make a reference between our current local working directory (.../frontend)
and the container's current working directory (/app). This way, whenever we make a change on our local machine, it also appears in the
container. This way we don't have to rebuild the image each time we make a change. To achieve that, we run docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app. The /app/node_modules is there to inform the command not to reference the node_modules folder, because it doesn't exist on my local machine. If it would, the -v node_modules should be skipped.  The colon is there to show that one thing is on the local machine and the other is in the container.</p>