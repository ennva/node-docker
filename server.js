const ronin = require('ronin-server');
const mocks = require('ronin-mocks');
const database = require('ronin-database');


async function main() {

    try {
        await database.connect(process.env.CONNECTIONSTRING);

        const server = ronin.server({ port: process.env.SERVER_PORT });
        
        
        server.use('/', mocks.server( server.Router() ));
        /*
        server.use('/foo', (req, res) => {
            return res.json({"foo":"bar"});
        });
        */

        const result = await server.start();

        console.log(result);

    } catch (error) {
        console.error(error)
    }

}

main();