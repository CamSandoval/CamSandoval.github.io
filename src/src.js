const buttonEncriptar = document.getElementById('Button-Encriptar');
const buttonDesencriptar = document.getElementById('Button -Desencriptar');
const textsOputput= document.getElementById('texts');
const output = document.getElementById('text-output');
const copyButton = document.getElementById('copy-button');

buttonEncriptar.addEventListener('click',encriptarTexto);
buttonDesencriptar.addEventListener('click',desencriptarTexto);
copyButton.addEventListener('click',copyClipBoard)

function encriptarTexto() {
    const vocales= {
        a :['a','A','á','Á'],
        e :['e','E','é','E'],
        i :['i','I','í','Í'],
        o :['o','O','ó','Ó'],
        u :['u','U','ú','Ú']
    }
    const inputTexto = document.getElementById('input-texto').value;
    let textoEncriptado = '';
    const textsIsClosed = textsOputput.classList.contains('inactive');
    for (let i = 0; i < inputTexto.length; i++) {
        if (vocales.a.some( item => item == inputTexto[i])/*'a' || inputTexto[i] === 'A'|| inputTexto[i] === 'á'|| inputTexto[i] === 'Á'*/) {
            textoEncriptado += 'ai';
        } else if (vocales.e.some( item => item == inputTexto[i])) {
            textoEncriptado += 'enter';
        }else if (vocales.i.some( item => item == inputTexto[i])) {
            textoEncriptado += 'imes';
        } else if (vocales.o.some( item => item == inputTexto[i])) {
            textoEncriptado += 'ober';
        }else if (vocales.u.some( item => item == inputTexto[i])) {
            textoEncriptado += 'ufat';
        }else {
            textoEncriptado += inputTexto[i];
        }
    }
    if(!inputTexto == ''){
        if(!textsIsClosed){
            textsOputput.classList.add('inactive');
            output.classList.add('add-heigth');
            copyButton.classList.remove('inactive');
            output.classList.remove('inactive');
        }

        //document.getElementById('texto-encriptado').innerText = textoEncriptado;
        output.innerText=textoEncriptado;
        copyButton.textContent='Copiar';
    }
}

function desencriptarTexto() {
    const inputTextoEncriptado = document.getElementById('input-texto').value;
    let textoDesencriptado = '';
    const textsIsClosed = textsOputput.classList.contains('inactive');
    for (let i = 0; i < inputTextoEncriptado.length; i++) {
        /*if (inputTextoEncriptado[i] === 'a' && inputTextoEncriptado[i+1] === 'i' ) {
            textoDesencriptado += 'a';
            i += 1;
        } */
        if(inputTextoEncriptado.slice(i, i + 2) === 'ai'){
            textoDesencriptado += 'a';
            i += 1;
        } else if (inputTextoEncriptado.slice(i, i + 5) === 'enter') {
            textoDesencriptado += 'e';
            i += 4;
        } else if (inputTextoEncriptado.slice(i, i + 4) === 'imes') {
            textoDesencriptado += 'i';
            i += 3;
        } else if (inputTextoEncriptado.slice(i, i + 4) === 'ober') {
            textoDesencriptado += 'o';
            i += 3;
        } else if (inputTextoEncriptado.slice(i, i + 4) === 'ufat') {
            textoDesencriptado += 'u';
            i += 3;
        } else {
            textoDesencriptado += inputTextoEncriptado[i];
        }
    }
    if(!inputTextoEncriptado == ''){
        if(!textsIsClosed){
            textsOputput.classList.add('inactive');
            output.classList.add('add-heigth');
            copyButton.classList.remove('inactive');
            output.classList.remove('inactive');
        }
        output.innerText = textoDesencriptado;
        copyButton.textContent='Copiar';
    }
}

function copyClipBoard(){
    const copied = output.textContent;
    navigator.clipboard.writeText(copied);
    copyButton.textContent='Copiado';
}