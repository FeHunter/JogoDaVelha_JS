let fim = 0;
let vez = 1;

function AlterarCasa (casaID){
    const vezDeJogar = document.getElementById("VezDoJogador");
    const vencedor = document.getElementById("Vencedor");
    const casa = document.getElementById(`bloco${casaID}`);
    let verificarIcon = casa.style.backgroundImage;

    // Verificar se a casa e vazia, se sim colocar icone
    if (verificarIcon === "" && fim === 0){
        // Colocar imagem
        casa.style.backgroundImage = `url('icon${vez}.png')`;

        if (VerificarLinhas()){
            fim = 1;
            vezDeJogar.innerHTML = "...";
            vencedor.innerHTML = `O Jogador ${vez} Venceu!`;
            alert(`O Jogador ${vez} Venceu!!`);
        }else {
            // Trocar vez
            vez = vez === 1 ? 2 : 1;
            vezDeJogar.innerHTML = `Vez do jogador <span style="color: red">${vez}</span>`;
        }
    }
    
    // Empate
    if (verificarIcon != "" && !VerificarLinhas() && CasasVazias()){
        vencedor.innerHTML = "Velha!!!";
        vezDeJogar.innerHTML = "Empate";
        alert("O jogo empatou");
    }
}

function CasasVazias (){
    let vazias = 0;

    for (let i=1; i <= 9; i++){
        const casa = document.getElementById(`bloco${i}`);
        if (casa.style.backgroundImage != ""){
            vazias ++;
            // console.log(`Contador: ${i}, vazias: ${vazias}`);
        }
    }

    if (vazias >= 8){
        return true;
    }else {
        return false;
    }
} 

function VerificarCasa (a, b, c){
    const casaA = document.getElementById(`bloco${a}`);
    const casaB = document.getElementById(`bloco${b}`);
    const casaC = document.getElementById(`bloco${c}`);

    const iconA = casaA.style.backgroundImage;
    const iconB = casaB.style.backgroundImage;
    const iconC = casaC.style.backgroundImage;

    if (iconA === iconB && iconB === iconC && iconA === iconC && iconA != ""){
        return true;
    }else{
        return false;
    }
}

function VerificarLinhas (){
    if (VerificarCasa(1, 2, 3)
    || VerificarCasa (4, 5, 6)
    || VerificarCasa (7, 8, 9)
    || VerificarCasa (1, 4, 7)
    || VerificarCasa (2, 5, 8)
    || VerificarCasa (3, 6, 9)
    || VerificarCasa (1, 5, 9)
    || VerificarCasa (3, 5, 7)
    ){
        return true;
    }else {
        return false;
    }
}

function Reiniciar (){
    let c = 1;
    while (c <= 9){
        let casa = document.getElementById(`bloco${c}`);
        casa.style.backgroundImage = "";
        c ++;
    }
    vez = 1;
    fim = 0;
    const vencedor = document.getElementById("Vencedor");
    vencedor.innerHTML = "...";
}
