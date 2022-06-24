# genericBack
This is a quickstart code to build backend services from scratch to any project, it contends a RESTful API template, a database service with MariaDB and a Internet home deploy preSetup all with Docker.

## Requirements
This code is built using NodeJS with ExpressJS and other packages (please see the `package.json` for more info).

To run this project make sure to install [Docker](https://docs.docker.com/).

Now let's follow the next steps.

### 1.Create environment variables
Create a `.env` file with the environment variables below, this variables will be used by the containers.
```
#org-project-api
API_PORT=
API_TOKEN=
API_CLIENT=
API_LOG= #1 or 0

#org-project-duckdns just in case to Internet deploy
PUID=1000 #optional
PGID=1000 #optional
TZ=America/Bogota
SUBDOMAINS=
DUCKDNS_TOKEN=
LOG_FILE=true #optional

#org-project-db and org-project-api
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=
MYSQL_HOST=
```

### 2.Change `org` and `project` names
Is recommend to change all the names in files and lines (e.g. in `docker-compose.yml` services and `.Dockerfile` prefix) named with `org` and `project` with your own organization name and project name.

### 3.Setting up a reverse proxy (Optional)
The `docker-compose.yml` file will deploy two services and a docker network to work with a home serving environment and a reverse proxy setup. If you don`t have a static public IP we highly recommend to use this API service behind a reverse proxy e.g. [nginx-proxy-manager](https://nginxproxymanager.com/) with [DuckDNS](https://www.duckdns.org) and to configure your port Forwarding ISP modem.

Make sure to include the reverse proxy container into the project network using the following setup in the reverse proxy `docker-compose.yml` file
```
version: "3.8"
    services:
    .
    .
    .

networks:
  org-proxy:
    name: org-proxy
  org-project:
    external: true
```

### Deploy
At the end just type
```
docker compose -p org-project -up -d --build
```
This commands wake up the server access it thought port specified in `API_PORT` environment variable.

## Folder contents

```
See the repo content.
```





