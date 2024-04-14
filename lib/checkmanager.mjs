var rank=[];
var name=[];
var finaltable=[];
var price=[];
var percent_change_24h=[];
var percent_change_1h=[];
var id=[];
var symbol=[];

async function fetchdata(){
   let rawdata=await fetch('https://api.coinlore.net/api/tickers/',{method: "GET",});
   let jsondata= await rawdata.json();
  
   for (var i=0;i<100;i++){
        
   var arrayofrank=jsondata.data[i].rank;
   rank=[...rank,arrayofrank]
   var arrayofname=jsondata.data[i].name;
   name=[...name,arrayofname]
   var arrayofprice=jsondata.data[i].price_usd;
   price=[...price,arrayofprice]
   var arrayofchange24h=jsondata.data[i].percent_change_24h;
   percent_change_24h=[...percent_change_24h,arrayofchange24h]
   var arrayofchange1h=jsondata.data[i].percent_change_1h;
   percent_change_1h=[...percent_change_1h,arrayofchange1h]
   var arrayofid=jsondata.data[i].id;
   id=[...id,arrayofid]
   var arrayofsymbol=jsondata.data[i].symbol;
   symbol=[...symbol,arrayofsymbol]
      
   }
   

}

 async function priceofcoin(){
   await fetchdata();
 for (var i=0;i<100;i++){
   let finalobj={
      "Coin Name":name[i],
      "Pice In USD":`$ ${price[i]}`
   }
  finaltable.push(finalobj)
 }
 console.table(finaltable);
 }


 async function percent_change(){
   await fetchdata();
 for (var i=0;i<100;i++){
   let finalobj={
      "Coin Name":name[i],
      "change in 24 Hours":percent_change_24h[i]+"%",
      "change in 1 Hour":percent_change_1h[i]+"%"
   }
  finaltable.push(finalobj)
 }
 console.table(finaltable);
 }


 async function ranks(){
   await fetchdata();
 for (var i=0;i<100;i++){
   let finalobj={
      "Coin Name":name[i],
      "Rank": rank[i]
     
   }
  finaltable.push(finalobj)
 }
 console.table(finaltable);
 }
 async function checkidandsymbol(){
   await fetchdata();
 for (var i=0;i<100;i++){
   let finalobj={
      "Coin Name":name[i],
      "Id": rank[i],
      "Symbol":symbol[i]
     
   }
  finaltable.push(finalobj)
 }
 console.table(finaltable);
 }


export default { priceofcoin,percent_change,ranks,checkidandsymbol }