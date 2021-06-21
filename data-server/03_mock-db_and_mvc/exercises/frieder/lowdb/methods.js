import { JSONFile, Low } from 'lowdb';

let db;

const init = async (endpoint) => {
    const PATH = 
    {
        users: './data/users.json',
        messages: './data/messages.json'
    }

    const adapter = new JSONFile(PATH[endpoint]);
    db = new Low(adapter);

    await db.read();
    db.data ||= { [endpoint]: [] };
}

const verifyNumber = (value) => value.toString().match(/^[0-9]*$/);

const findIndex = (id, collection) => db.data[collection].findIndex(item => item.id == id);
const find = (id, collection) => db.data[collection].find(item => item.id == id);

const methods = {
    deleteById: async(id, collection) => {
        if(verifyNumber(id))
        {
            await init(collection);
            
            const index = findIndex(id, collection);
            if(index !== -1)
            {
                db.data[collection].splice(index, 1);
                await db.write();
            }
            else throw { status: 404, message: 'Index not found' };
        }
        else throw { status: 400, message: 'Bad request' };
    }
}

export default methods;
