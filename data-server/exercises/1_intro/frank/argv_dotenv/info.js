const os = require('os');
const fs = require("fs");
require("dotenv").config();

const info = 
{
    os:     `Betriebssystem:     ${os.platform()} - ${os.release()}\n`,
    arch:   `Architektur:        ${os.arch()}\n`,
    user:   `Benutzername:       ${os.userInfo().username}\n`,
    home:   `Home-Verzeichnis:   ${os.userInfo().homedir}\n`,
    cpu:    `CPU:                ${os.cpus()[0].model}\n`,
    cores:  `Virtuell.CPU-Kerne: ${os.cpus().length}\n`,
    mem:    `Arbeitsspeicher:    ${(os.totalmem()/1024).toLocaleString()} K\n`,
    node:   `Node version:       ${process.version}\n`,
    port:   `PORT-Var (.env):    ${process.env.PORT}\n`,
    dbpath: `DB_PATH-Var (.env): ${process.env.DB_PATH}\n`,
    msg:    `GREETINGS-Var(.env):${process.env.GREETINGS}\n`
}
// fs.promises.readFile(process.env.FILEPATH, "utf8")
// .then(content => console.log(content))

// -- Hilfetext einlesen
try{
    info.help = fs.readFileSync('./help.txt','utf8');
}catch(error){
    console.error(error.message);
    process.exit(1);
}
// -- Meta
info.os = info.os + info.arch + info.node;
info.sys = info.cpu + info.cores + info.mem  
info.dotenv = info.port + info.dbpath + info.msg;
info.user = info.user + info.home;
info.all = info.os + info.sys + info.user + info.dotenv

//const [node, path, ...args] = process.argv;
const args = process.argv;

console.log('');
if(args.length < 3)
{
  console.log(info.help)
  process.exit(0);  
}
for(let i = 2; i < args.length; i++)
{
    if(info.hasOwnProperty(args[i]))
       console.log(info[args[i]]);  
    else
       console.log(`Unbekannter Parameter: "${args[i]}"!`)   
}
process.exit(0);  


