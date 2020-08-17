#!/bin/bash



if [ -e $1  ]
then
	echo "O caminho $1 está habilitado"
	if [ -w $1 ]
	then
		echo "você tem permissão de editar $1"
	else
		echo "você não foi autorizado a editar $1"
	fi
else
	echo "O caminho não existe"
fi


