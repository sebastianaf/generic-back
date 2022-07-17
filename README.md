# generic-api
This is a quickstart code to build backend services from scratch to any project, it contends a RESTful API template, a database service with Sequelize and PostgreSQL and a Internet home deploy preSetup all with Docker.

## Requirements
This code is built using NodeJS with ExpressJS and other packages (please see the `package.json` for more info).

To run this project make sure to install [Docker](https://docs.docker.com/).

Now let's follow the next steps.

### 1.Create environment variables
Create a `.env` from `.env.example` file with the environment variables, this variables will be used by the containers.

### 2.Change `org` and `project` names
It's recommend to change all the names in files and lines (in `docker-compose.yml` and `Dockerfile`'s files) named with `org` and `project` with your own organization name and project name.

### 3. Deploy
At the end just type
```
docker build -t org-project-api
```
This commands will build a Docker image ready to run. The server access it thought port specified in `API_PORT` environment variable.

## Folder contents

```
See the repo content.
```