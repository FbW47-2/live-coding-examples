// Informationen aus dem process object in Variablen speichern
const nodeVersion = process.version;
const computerName = process.env.COMPUTERNAME;
const userName = process.env.USERNAME;
const cpu = process.env.PROCESSOR_IDENTIFIER;

// Wir bilden ein Objekt mit den erstellten Variablen
const mySystem = {
    nodeVersion,
    computerName,
    userName,
    cpu,
};

console.log(mySystem);

// kleiner Tipp: Wenn ihr euch Variablen als Objekt ausgebt, seht ihr auch den Namen in der Ausgabe
console.log({ cpu })

// Damit wir die Ausgabe über Argumente steuern können, lesen wir diese aus process.argv aus...
// const key = process.argv[2];
// const key2 = process.argv[3];

// ...und greifen mit den Keys auf mySystem zu
// console.log(mySystem[key]);
// console.log(mySystem[key2]);

// Diese Methode ist allerdings nicht so schön, da wir alles statisch haben

// BESSER: wir extrahieren alle Argumente (mit Ausnahme der ersten beiden, da die nur den Pfad zur Node-Installation und zum Skript angeben)...
const [node, script, ...args] = process.argv;

console.log({ args });

// ...und mappen über alle Elemente des Arrays
args.map(arg => {
    console.log(mySystem[arg]);
})
