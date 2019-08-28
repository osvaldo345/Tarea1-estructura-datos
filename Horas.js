var btn = document.querySelector("#btn");
btn.addEventListener("click", calcular);

function calcular(){
    let inicio = document.getElementById('inicio').value;
    let final = document.getElementById('final').value;
    inicio.toString();
    var resultado = difHoras(inicio, final);
    document.getElementById('resultado').innerHTML += resultado;
}

function difHoras(inicio, final){
    inicio = inicio.split(":");
    final = final.split(":");
    ini = new Date(),
    fin = new Date();

    ini.setHours(inicio[0], inicio[1]);
    fin.setHours(final[0], final[1]);

    fin.setHours(fin.getHours() - ini.getHours(), fin.getMinutes() - ini.getMinutes(), fin.getSeconds() - ini.getSeconds());

    let res= "La diferencia es de: " + (fin.getHours() ? fin.getHours() + (fin.getHours() > 1 ? " horas" : " hora") : "") + (fin.getMinutes() ? ", " + fin.getMinutes() + (fin.getMinutes() > 1 ? " minutos" : " minuto") : "");;
    return res;
}