import keyManager from "./../lib/keymanager.mjs"
const keymanager=new keyManager();
const set=(value )=>{
keymanager.setconfig(value);
}


const show=()=>{
   var a=keymanager.getconfig();
   return a;
}

const remove=()=>{

    var a=keymanager.deleteconfig();
    return a;
}

export  default {set,show,remove};

