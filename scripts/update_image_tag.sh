#!/bin/bash

COMMIT_HASH=$1
DEPLOYMENT_SERVER_FILE="k8s-configuration/deployment-server.yml"
DEPLOYMENT_CLIENT_FILE="k8s-configuration/deployment-client.yml"

# Atualiza a imagem do servidor
sed -i "s|cesar02dd/server:latest|cesar02dd/server:$COMMIT_HASH|g" $DEPLOYMENT_SERVER_FILE

# Atualiza a imagem do cliente
sed -i "s|cesar02dd/client:latest|cesar02dd/client:$COMMIT_HASH|g" $DEPLOYMENT_CLIENT_FILE
