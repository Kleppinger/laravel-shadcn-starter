import {AxiosStatic} from "axios";
import React from "react";

interface DefaultPageModule {
    layout?: React.JSX.Element | ((any) =>  React.JSX.Element)
}

interface ImportedModule {
    default: DefaultPageModule;
}

declare global {
    interface Window {
        axios: AxiosStatic;
    }
}
