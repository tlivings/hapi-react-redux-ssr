
import Steerage from 'steerage';
import Path from 'path';
import Routes from './lib/server/routes';
import Ejs from 'ejs';

const init = async function () {

    const server = await Steerage({ config: Path.resolve('./config.json') });

    server.views({
        engines: { ejs: Ejs },
        relativeTo: __dirname,
        path: './lib/server'
    });

    server.route({
        method: 'GET',
        path: '/bundle.js',
        handler: (request, reply) => {
            reply.file(Path.join(__dirname, 'static/bundle.js'));
        }
    });

    server.route({
        method: 'GET',
        path: '/styles.css',
        handler: (request, reply) => {
            reply.file(Path.join(__dirname, 'static/styles.css'));
        }
    });

    Routes.init(server);

    await server.start();

    console.log('Server running at', server.info.uri);

    return server;
};

init().catch((error) => console.error(error.stack));
