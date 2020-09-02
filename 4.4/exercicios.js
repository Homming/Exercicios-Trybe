let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do pato donald"
};

console.log(`Bem vinda, ${info.personagem}`);

info.recorrente = "Sim";
console.log(info);

for (let chave in info){
    console.log(chave);
}

console.log("");

for (let index in info){
    console.log(info[index]);
}

let info2 = info;

info2.personagem += "e Tio Patinhas";
info2.origem += "e Christmas on Bear Mountain, Dell's Four Color Comics #178";
info2.nota += "e O último MacPatinhas";
info2.recorrente += "Sim";

if (info2.recorrente === "SimSim"){
    info2.recorrente = "Ambos recorrentes";
}
console.log("");

for (let index in info2){
    console.log(info2[index]);
}


//Funções

function ehPalindromo (pali){
    let verificaPali = "";
    for(let i = pali.length-1; i >= 0; i -= 1){
        verificaPali += pali[i];
    }
    if(verificaPali === pali){
        return true;
    }else{
        return false;
    }

}

console.log(ehPalindromo("aranha"));

function ehMaior(maior){
    let oMaior = 0;
    for(let i = 0; i < maior.length; i++){
        if (maior[oMaior] < maior[i]){
            oMaior = i;
        }
    }
    return oMaior;
}


console.log(ehMaior([200, 201, 7, 5, 12, 14]));

function ehMenor(menor){
    let oMenor = 0;
    for(let i = 0; i < menor.length; i++){
        if (menor[oMenor] > menor[i]){
            oMenor = i;
        }
    }
    return oMenor;
}

console.log(ehMenor([12, 8, 7, 5, 12, 14]));

function maiorNome (nomes){
    let maiorNome = 0;
    for (let i = 0; i < nomes.length; i++){
        let string1 = nomes[maiorNome];
        let string2 = nomes[i];
        if (string1.length < string2.length){
            maiorNome = i;  
        }
    }
    return nomes[maiorNome];
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))