const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const cloudsReverse = document.querySelector('.clouds-reverse');
const tamanhoCorpo = document.body.offsetWidth;

//Tamanho do navegador
if (tamanhoCorpo > 1440*.8 ) {
    pipe.style.animation = 'pipe-animation 3.5s infinite linear';
} else if (tamanhoCorpo > 1440*.5) {
    pipe.style.animation = 'pipe-animation 2.5s infinite linear';
} else if (tamanhoCorpo > 1440*.3) {
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
} else {
    pipe.style.animation = 'pipe-animation 0.8s infinite linear';
}

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const cloudsReversePosition = cloudsReverse.offsetLeft;   
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioLeftPosition = +window.getComputedStyle(mario).left.replace('px', '');

    if((marioLeftPosition+pipePosition)< 170) {
            mario.classList.add('jump');
            setTimeout(() => {
                mario.classList.remove('jump');
            }, 600)          
        };      
    
    
    if(pipePosition <=125 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left= `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom= `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left= `${cloudsPosition}px`;

        cloudsReverse.style.animation = 'none';
        cloudsReverse .style.left= `${cloudsReversePosition}px`; 

        clearInterval(loop);
        setInterval(() => {
            window.location.reload();
        }, 5000);
    } else if (pipePosition < (-75)){
        pipe.style.bottom = '0px';

        switch(aleatorioInteiro(1,8)){
            case 1: // batman
                pipe.src = './imagens/batman-dc.gif';
                pipe.style.height = '150px';
                pipe.style.width = '120px';
                break;

            case 2: // carol
                pipe.src = './imagens/carol.png';
                pipe.style.height = '110px';
                pipe.style.width = '100px';
                break;

            case 3: //jobas
                pipe.src = './imagens/jobas.png';
                pipe.style.height = '110px';
                pipe.style.width = '120px';
                break;

            case 4: // pipe
                pipe.src = './imagens/pipe.png';
                pipe.style.width = '80px';
                break;

            case 5: //brasil
                pipe.src = './imagens/brasil.gif';
                pipe.style.height = '150px';
                pipe.style.width = '150px';
                break

            case 6: // taz
                pipe.src = './imagens/tazm.gif';
                pipe.style.height = '120px';
                pipe.style.width = '130px';
                break;
            
            case 7: // momo
                pipe.src = './imagens/angel.png';
                pipe.style.height = '120px';
                pipe.style.width = '130px';
                break;

            case 8: // jess
                pipe.src = './imagens/jessV2.gif';
                pipe.style.height = '120px';
                pipe.style.width = '180px';
                pipe.style.bottom = '-30px';
                break;
        }
    }

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);


//Parte inferior

const opcoesTerReposta = ["Selecione","FICOU DE AVALIAR E RETORNAR", "NEGADA POR CRÉDITO", "JA FOI OFERTADO/RECUSADO ANTES", "FIDELIZADO EM OUTRA OPERADORA", "OFERTA POUCO ATRATIVA", "NÃO GOSTA DA OI", "OUTROS"];
const meuselect = document.querySelector('#terResposta');

opcoesTerReposta.forEach((elem, val)=> {
    meuselect.appendChild(new Option(elem, val)).setAttribute('id','radio'+(val+7));
})

const priPergunta = document.querySelector('.radios');
const segPergunta = document.querySelector('.segPergunta');
const terPergunta = document.querySelector('.terPergunta');

function elemento() {            
    // const solo = document.querySelector('#solo');

    // switch (aleatorioInteiro(1,2)) {
    //     case 1:
    //         solo.innerHTML = 'NAO!';
    //         break;
    //     case 2:
    //         switch(aleatorioInteiro(1,3)){
    //             case 1:
    //                 solo.innerHTML = 'SIM (DECISOR)<BR><BR>A VENDA FOI CONVERTIDA?<BR><BR>NAO! NEGADA POR CREDITO';
    //             break;
    //             case 2:
    //                 solo.innerHTML = 'SIM (NAO DECISOR)';
    //             break;
    //             case 3:
    //                 switch(aleatorioInteiro(1,3)){
    //                     case 1:
    //                         solo.innerHTML = 'SIM (DECISOR)<BR><BR>A VENDA FOI CONVERTIDA?<BR><BR>NAO! FIDELIZADO EM OUTRA OPERADORA';
    //                     break;
    //                     case 2:
    //                         switch(aleatorioInteiro(1,7)){
    //                             case 1:
    //                                 solo.innerHTML = 'SIM (DECISOR)<BR><BR>A VENDA FOI CONVERTIDA?<BR><BR>NAO! FICOU DE AVALIAR E RETORNAR';
    //                             break;
    //                             case 2:
    //                                 solo.innerHTML = 'ENDERECO NAO ENCONTRADO';
    //                             break;
    //                             case 3:
    //                                 solo.innerHTML = 'SIM (DECISOR)<BR><BR>A VENDA FOI CONVERTIDA?<BR><BR>NAO! JA FOI OFERTADO/RECUSADO ANTES';
    //                             break;
    //                             case 4:
    //                                 solo.innerHTML = 'SIM (DECISOR)<BR><BR>A VENDA FOI CONVERTIDA?<BR><BR>VENDA CONVERTIDA';
    //                             break;
    //                             case 5:
    //                                 solo.innerHTML = 'SIM (DECISOR)<BR><BR>A VENDA FOI CONVERTIDA?<BR><BR>NAO! OFERTA POUCO ATRATIVA';
    //                             break;
    //                             case 6:
    //                                 solo.innerHTML = 'SIM (DECISOR)<BR><BR>A VENDA FOI CONVERTIDA?<BR><BR>NAO! NAO GOSTA DA OI';
    //                             break;
    //                             case 7:
    //                                 solo.innerHTML = 'SIM (DECISOR)<BR><BR>A VENDA FOI CONVERTIDA?<BR><BR>NAO! OUTROS';
    //                             break;
    //                         }                            
    //                     break;
    //                     case 3:
    //                         solo.innerHTML = 'SIM (DECISOR)<BR><BR>A VENDA FOI CONVERTIDA?<BR><BR>NEGOCIACAO';
    //                     break;
    //                 }
    //             break;
    //         }
    //     break;           
    // }

    //setTimeout(function() {
    //location.reload();
    //}, 5000);

    priPergunta.setAttribute('hidden','');
    segPergunta.setAttribute('hidden','');
    terPergunta.setAttribute('hidden','');

    priPergunta.removeAttribute('hidden');

    switch(aleatorioInteiro(1,2)) {
        case 1:
            document.querySelector('#radio3').checked = true;
        break;
        case 2:
            switch(aleatorioInteiro(1,3)) {
                case 1:
                    terResp('#radio9');
                break;
                case 2:
                    document.querySelector('#radio2').checked = true;
                break;
                case 3:
                    switch (aleatorioInteiro(1,3)) {
                        case 1:
                            terResp('#radio11');
                        break;
                        case 2:
                            segResp('#radio6');
                        break;
                        case 3:
                            switch(aleatorioInteiro(1,7)) {
                                case 1:
                                    terResp('#radio8');
                                break;
                                case 2:
                                    document.querySelector('#radio4').checked = true;
                                break;
                                case 3:
                                    terResp('#radio10');
                                break;
                                case 4:
                                    segResp('#radio5');
                                break;
                                case 5:
                                    terResp('#radio12');
                                break;
                                case 6:
                                    terResp('#radio13');
                                break;
                                case 7:
                                    terResp('#radio14');
                                break;
                            }
                        break;
                    }
                break;
            }
        break;            
    }

}

function aleatorioInteiro(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// var recarregaPagina = window.setInterval(function(){
//     elemento();
// }, 5000);

function terResp (resRadio1) {
    document.querySelector('#radio1').checked = true;
    segPergunta.removeAttribute('hidden');
    document.querySelector('#radio7').checked = true;
    terPergunta.removeAttribute('hidden');
    document.querySelector(resRadio1).selected = true;
}

function segResp (resRadio2) {
    document.querySelector('#radio1').checked = true;
    segPergunta.removeAttribute('hidden');
    document.querySelector(resRadio2).checked = true;
}