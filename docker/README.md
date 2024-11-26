# Docker

## Dev

`docker build -f docker/Dockerfile.dev -t gen-x:dev .`

Creates a docker dev image and names it "gen-x:dev".

`docker run -d --rm -p 80:80 gen-x:dev`

Starts a container from the "gen-x:dev" image.
Open [http://localhost/GenX](http://localhost/GenX) to view it in the browser.

## Prod

`docker build -f docker/Dockerfile.prod -t gen-x:prod .`

Creates a docker prod image and names it "gen-x:prod".

`docker run -d --rm -p 80:80 gen-x:prod`

Starts a container from the "gen-x:prod" image.
Open [http://localhost/GenX](http://localhost/GenX) to view it in the browser.
