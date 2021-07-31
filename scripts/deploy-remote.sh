#!/bin/bash

[ -z $PRIVATE_KEY_PATH ] && PRIVATE_KEY_PATH="/home/yoonsung0711/.ssh/id_rsa"
#source ./scripts/remote/_0a_validate-port.sh && PORT=$PORT_LIST
#source ./scripts/remote/_0b_validate-server.sh $1 && IP=$SERVER_LIST

PROJECT="bootReact"
PROJECT_HOME=$(pwd)

USER_ID=yoonsung0711
FILE_NAME=grocery

DEPLOY_PATH=/home/yoonsung0711/$PROJECT
FILE_PATH=$PROJECT_HOME/backend/demo-0.0.1-SNAPSHOT.jar
DATE_TIME=`date +%Y-%m-%d-%H-%M-%S`

PROJECT_FILE

echo $DEPLOY_PATH

echo -e '\n◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎   build  maven project   ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎\n'
(cd backend && mvn clean && mvn -f ./pom-prod.xml package)

echo -e '\n◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎     reset deploy path    ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎\n'
echo -e "▶︎ create deploy path\n"
echo -e "  path: $DEPLOY_PATH\n"

ssh -i ~/.ssh/id_rsa yoonsung0711@server "rm -rf /home/yoonsung0711/bootReact/"
ssh -i ~/.ssh/id_rsa yoonsung0711@server "mkdir -p /home/yoonsung0711/bootReact/"
#ssh -i $PRIVATE_KEY_PATH $USER_ID@$IP "rm -rf $DEPLOY_PATH"
#ssh -i $PRIVATE_KEY_PATH $USER_ID@$IP "mkdir -p $DEPLOY_PATH"

echo -e '\n◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎   copy compressed file   ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎\n'
echo -e "▶︎ copy compressed file\n"
echo -e "  file: ${PROJECT}_${DATE_TIME}.tar.gz\n"

scp -i ~/.ssh/id_rsa ./backend/target/demo-0.0.1-SNAPSHOT.jar yoonsung0711@server:/home/yoonsung0711/bootReact/

echo -e '\n◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎       start server       ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎\n'
ssh -i ~/.ssh/id_rsa yoonsung0711@server "cd /home/yoonsung0711/bootReact && java -jar -Dserver.port=8082 demo-0.0.1-SNAPSHOT.jar"
#ssh -i $PRIVATE_KEY_PATH $USER_ID@$IP ". ~/.nvm/nvm.sh && (cd $DEPLOY_PATH && nohup yarn start > /dev/null 2>&1 &)"

#[ "$PROD" == true ] && bash ./scripts/remote/_0d_health-check-remote.sh 192.168.200.120 $NEXT_PORT || bash ./scripts/remote/_0d_health-check-remote.sh $IP $NEXT_PORT 
# source ./scripts/remote/_0d_health-check-remote.sh $IP $NEXT_PORT
