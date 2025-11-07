function fn_valEmail(email){
    return email.search(/^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/i) == 0;
}

function fn_ValFrom(){
    var sMsg = "";

    if(document.getElementById("name").value == ""){
        sMsg +="\n* Anda belum mengisikan nama";
    }
    if(document.getElementById("email").value == ""){
        sMsg +="\n* Anda belum mengisikan email";
    }
    if(!fn_valEmail(document.getElementById("email").value)){
        sMsg +="\n* E-mail anda belum benar";
    }
    if(document.getElementById("message").value == ""){
        sMsg +="\n* Anda belum mengisikan pesan";
    }

    if(sMsg != ""){
        alert("Peringatan: \n" + sMsg);
        return false;
    }else{
        return true;
    }
}