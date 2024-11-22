# Docker

## Dev

`docker build -f docker/Dockerfile.dev -t gen-mp:dev .`

Creates a docker dev image and names it "gen-mp:dev".

`docker run -d --rm -p 80:80 gen-mp:dev`

Starts a container from the "gen-mp:dev" image.
Open [http://localhost/GenMP](http://localhost/GenMP) to view it in the browser.

## Prod

`docker build -f docker/Dockerfile.prod -t gen-mp:prod .`

Creates a docker prod image and names it "gen-mp:prod".

`docker run -d --rm -p 80:80 gen-mp:prod`

Starts a container from the "gen-mp:prod" image.
Open [http://localhost/GenMP](http://localhost/GenMP) to view it in the browser.
