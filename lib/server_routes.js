
import React from 'react';
import { renderToString as Render } from 'react-dom/server'
import { RouterContext, match as Match } from 'react-router';
import Routes from './app/universal/routes';

const init = server => {

    const web = server.select('web');

    web.route({
        method: 'GET',
        path: '/{p*}',
        handler: (request, reply) => {
            Match({ routes: Routes, location: request.url }, (error, redirectLocation, renderProps) => {
                if (error) {
                    reply(error);
                    return;
                }
                if (redirectLocation) {
                    reply.redirect(redirectLocation);
                    return;
                }

                const body = Render(<RouterContext {...renderProps} />);

                reply.view('index.ejs', {body});
            });
        }
    });

};

export default {init};
