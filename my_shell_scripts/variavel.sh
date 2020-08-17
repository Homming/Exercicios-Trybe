#!/bin/bash

echo "Qual seu nome ?"
read NOME
echo "Qual sua idade?"
read IDADE
echo "O usuário logado no momento é o `whoami`"
echo "O diretorio em que se encontra é `pwd`"

echo $NOME
echo $IDADE
