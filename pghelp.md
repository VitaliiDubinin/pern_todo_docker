1. docker container ls
2. sudo docker exec -it a17f452f1df0 bash
3. inside of root@a17f452f1df0:/#  do that: psql -U postgres

https://www.geeksforgeeks.org/postgresql-psql-commands/

docker ps
docker network ls


\l
\dt
 \c postgres
 \d public
 \d values
 select*from values;


4. CREATE DATABASE authtodolist;
5. \c authtodolist
6.  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  \df
7.  CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);
 select*from users;

docker image ls 
docker run -e POSTGRES_PASSWORD=password -it -p 4005:5432 5eea76716a19

add for test