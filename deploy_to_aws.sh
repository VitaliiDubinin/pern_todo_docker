#!/bin/bash
echo 'Starting to Deploy...'
ssh ubuntu@18.185.241.143 " cd todo/pern_todo_docker 
        sudo docker-compose down
        git fetch origin
        git reset --hard origin/develop  &&  echo 'You are doing well'
        sudo docker-compose build && sudo docker-compose up -d
        "
echo 'Deployment completed successfully'