import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import Layout from './layout/main';
import axios from 'axios';
import { ImportedModule } from '@/types/global';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import.meta.glob(['../images/**']);

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
        const page: ImportedModule = pages[
            `./pages/${name}.tsx`
        ] as ImportedModule;
        page.default.layout =
            page.default.layout ||
            ((page: React.ReactNode) => <Layout>{page}</Layout>);

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
}).then(() => {});
