# Summary

This workshop introduces "docker" as a tool to manage the lifecycle of _Images_ and _Containers_.

A teasing commandline opening by executing the commands (bash, echo, sleep) in a debian-container, will lead to a discussion of what just happened. The discussion will be used to introduce important concepts (Dockerhub, registry, image, container).

After which heading to two practical examples:

1. Customize the used "debian" baseimage.

2. Deliver an HTML-file with an "Apache2" webserver.

During the first example the commandline tool `docker` will be introduced, and there the commands to manage _Images_ (build, list, remove) and _Containers_ (create, start, list, remove, inspect).

The second example is used to show how to copy files into an image. Additionally some more commands and parameters of the `docker` commandline-tool (stop container, follow logs, shorter forms of executed commands, forwarding ports) are introduced.

# Prerequisites
- a linux host is assumed, this may also work on other operating systems - your mileage may vary
- to execute the provided scripts: "docker" needs to be installed
- in order to view the mindmap "docker.mm" the program "freeplane" is necessary.
