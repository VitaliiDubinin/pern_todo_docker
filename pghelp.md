docker container ls
sudo docker exec -it a17f452f1df0 bash
root@a17f452f1df0:/# psql -U postgres

https://www.geeksforgeeks.org/postgresql-psql-commands/

docker ps
docker network ls


\l
\dt
 \c postgres
 \d public
 \d values
 select*from values;


CREATE DATABASE authtodolist;
\c authtodolist
 CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  \df
  CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);
 select*from users;

docker image ls 
docker run -e POSTGRES_PASSWORD=password -it -p 4005:5432 5eea76716a19