#!/usr/bin/env node
import   {program} from 'commander' ;
import checks from './../commands/check.mjs';
const check=program.command('check').description('Check For Information About Coins');
check
.command('idandsymbol')
.description('See the ID and Symbol of coin')
.action(()=>{
checks.checkidandsymbol();
})


check
.command('prices')
.description('See the prices of Coin')
.action(()=>{
checks.priceandcurrency();
})
check
.command('changes')
.description('See price flucatations')
.action(() => {
checks.percent_change();      
  })  
check
.command('rank')
.description('See the rank')
.action(() => {
       checks.rank();

  
});





program.parse(process.argv);
