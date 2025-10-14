import "../css/app.css";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import React from "react";
import Layout from "./layout/main";
import axios from 'axios';

window["axios"] = axios;
window["axios"].defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
        let page: any = pages[`./pages/${name}.tsx`];
        page.default.layout =
            page.default.layout || ((page: any) => <Layout children={page} />);

        return page;
    },
    setup({ el, App, props }) {
        // @ts-ignore
        createRoot(el).render(<App {...props} />);
    },
}).then((r) => {});


