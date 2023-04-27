import { ApplicationConfig } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";

import APP_ROUTES from "./app.routes";

;

const APP_CONFIG: ApplicationConfig = {
    providers: [
        provideRouter(APP_ROUTES),
        provideAnimations()
    ]
};

export default APP_CONFIG;