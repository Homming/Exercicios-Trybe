let valorN = 7;
trianguloRetangulo(valorN);
trianguloRetanguloInverso(valorN);
piramide(valorN);


function imprimirAsteriscos(valor){
    for(let x = 1; x <= valorN; x++){
        let array = "";
        for (let y = 1; y <= valorN; y++){
            array += "*";
        }
        console.log(array);
    }
}

function trianguloRetangulo (valor){
    let triangRetang = "*" 
    for (let x = 1; x <= valor; x++ ){
        console.log(triangRetang);
        triangRetang += "*";
    }
}

function trianguloRetanguloInverso(valor) {
    for (let x = 1; x <= valor; x++){
        let triangRetang ="";
        for(let y = valor; y > x; y--){
            triangRetang += " ";
        }
        for(let z = 0; z < x; z++){
            triangRetang += "*"
        }
        console.log(triangRetang);
    }

}

function piramide(valor) {
    for (let x = 1; x <= valor; x++){
        let triang ="";

        if(x % 2 != 0){
            let divisao = Math.ceil(x/2);
            for(let y = valor; y > divisao; y--){
                triang += " ";
            }
            for(let z = 0; z < x; z++){
                triang += "*"
            }
            console.log(triang);
        }
    }

}