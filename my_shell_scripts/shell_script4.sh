#!/bin/bash

read -p "Informe o caminho de um arquivo: " DIR

if [ -e $DIR  ]
then
	if [ -d $DIR ]
	then
		echo "O $DIR tem `ls $DIR | wc -w`"
	elif [ -f $DIR  ]
	then
		echo "O argumento $DIR não é um diretorio"
	else
		echo "O argumento $DIR não é um diretorio"
	fi
else
echo "esse arquivo/diretorio não existe"
fi


