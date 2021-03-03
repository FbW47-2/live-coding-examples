const Table = require('./table');

const columns = 
[
    {
        key: 'id',
        title: 'ID',
        width: 10
    },
    {
        key: 'name',
        title: 'Name',
        width: 25
    },
    {
        key: 'role',
        title: 'Role',
        width: 50
    }
];

const rows =
[
    {
        id: 1,
        name: 'Herbert',
        role: 'Admin'
    },
    {
        id: 2,
        name: 'Stefan',
        role: 'Moderator'
    },
    {
        id: 3,
        name: 'John',
        role: 'Moderator'
    }
]

const table = new Table();
table.setTitle("Unsere Tabelle");
table.setWidth(150);
table.setColumns(columns);
table.setRows(rows);

console.log(table);

// console.log(table.createColumn("testwort", 50));

console.log("=".repeat(50));

table.showTable();
