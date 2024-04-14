import Configstore from 'configstore';

class Crypto_Cli{

    constructor(){
        this.config=new Configstore ('crypto_cli');
       
    }
    setconfig(key){

        if(!key){
            console.log("Get a key please");
        }
        else{
        this.config.set('API Key',key);
        
        }
        
   
    } 

    getconfig(){
      const key=this.config.get('API Key')
       if(!key){
        return "Get a Key First";
       } 
       else{
         return this.config.get('API Key')
       }    
      
    } 

    deleteconfig(){
        const key=this.config.get('API Key')
        if(!key){
            console.log("Get a key first");
        }
        else{ 
             this.config.delete('API Key');
           return "Key removed";
           
        }

    }





}

export default Crypto_Cli;

