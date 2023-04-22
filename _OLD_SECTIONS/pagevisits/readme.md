<h2>Pagevisits</h2>
<p>Pagevisits runs two containers at once with docker compose. The first one is a custom image that runs a node server
with a simple website that displays and updates the number of times the page was visited. The second one is a redis server,
that stores the number of visits the page had.</p>
<p>The number of visits restarts every time the container is run.</p>