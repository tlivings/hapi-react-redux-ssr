
import React from 'react';
import { renderToString as Render } from 'react-dom/server';
import { RouterContext, match as Match, memoryHistory as MemoryHistory } from 'react-router';
import { Provider } from 'react-redux';
import Routes from '../app/universal/routes';
import ConfigureStore from '../app/redux/store';

const init = (server) => {

    const web = server.select('web');
    const store = ConfigureStore();

    web.route({
        method: 'GET',
        path: '/{p*}',
        handler: (request, reply) => {
            const initialState = store.getState();

            Match({ routes: Routes, location: request.url }, (error, redirectLocation, renderProps) => {
                if (error) {
                    reply(error);
                    return;
                }
                if (redirectLocation) {
                    reply.redirect(redirectLocation);
                    return;
                }

                const body = Render(
                    <Provider store={store}>
                        <RouterContext {...renderProps}/>
                    </Provider>
                );

                reply.view('index.ejs', { body, initialState });
            });
        }
    });

};

export default { init };
