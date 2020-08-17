#!/bin/bash

read -p "Informe o caminho de um arquivo: " DIR

if [ -e $DIR  ]
then
	if [ -d $DIR ]
	then
		echo "É um diretorio"
	elif [ -f $DIR  ]
	then
		echo "É um arquivo"
	else
		echo "É outro tipo de arquivo"
	fi
echo "`ls -la $DIR`"
else
echo "esse arquivo/diretorio não existe"
fi


