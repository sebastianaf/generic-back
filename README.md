# genericBack
This is a quickstart code to build backend services from scratch to any project, it contends a RESTful API template, a database service with MariaDB and a Internet home deploy preSetup all with Docker.

## Requirements
This code is built using NodeJS with ExpressJS and other packages (please see the `package.json` for more info).

To run this project is required [Docker](https://docs.docker.com/).

Make sure to follow the next steps.

### Create environment variables
Create a `.env` file with the environment variables below, this variables will be use by the containers.
```
#org-project-api
API_PORT=
API_TOKEN=

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

### Change `org` and `project` names
We recommend to change all the names in files and lines (e.g. in `docker-compose.yml` services and `.Dockerfile` prefix) named with `org` and `project` with your own organization name and project name.

### Setting up a reverse proxy (Optional)
The `docker-compose.yml` file will deploy two services to work with a home serving environment. If you don`t have a static public IP we highly recommend to use this API service behind a reverse proxy e.g. [ngix-proxy-manager](https://nginxproxymanager.com/) with [DuckDNS](www.duckdns.org) and to configure your port Forwarding ISP modem.

### Deploy
At the end just type
```
docker compose -p <org>-<project> -up -d --build
```
This comands wake up the server access it thought port especified on `API_PORT` environment variable.

## Folder contents

```
Peding

```





