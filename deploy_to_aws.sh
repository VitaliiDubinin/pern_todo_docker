#!/bin/bash
echo 'Starting to Deploy...'
ssh ubuntu@18.185.241.143 " 
        # sudo docker image prune -f
        cd todo/pern_todo_docker 
#        sudo docker-compose down
#        git fetch origin
#        git reset --hard origin  &&  echo 'You are doing well'
        # sudo docker-compose build && sudo docker-compose up -d
#        sudo docker-compose up -d
        "
echo 'Deployment completed successfully!!!'
