const buttonEncriptar = document.getElementById('Button-Encriptar');
const buttonDesencriptar = document.getElementById('Button -Desencriptar')

buttonEncriptar.addEventListener('click',encriptarTexto);
buttonDesencriptar.addEventListener('click',desencriptarTexto);

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
    document.getElementById('texto-encriptado').innerText = textoEncriptado;
    document.getElementById('opcion-desencriptado').innerText = '';
}

function desencriptarTexto() {
    const inputTextoEncriptado = document.getElementById('input-texto').value;
    let textoDesencriptado = '';
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

    document.getElementById('texto-encriptado').innerText = textoDesencriptado
    document.getElementById('opcion-desencriptado').innerText = 'des';
}