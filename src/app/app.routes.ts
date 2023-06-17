import { Routes } from "@angular/router";
import LayoutComponent from "./layout/layout.component";

const APP_ROUTES: Routes = [
    { path: 'login', loadComponent: () => import('./components/auth/auth.component') },

    { path: '', redirectTo: 'panel', pathMatch: "full" },

    {
        path: 'panel', component: LayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: "full" },
            { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component') },
            { path: 'cards', loadComponent: () => import('./components/cards/cards.component') },
            { path: 'table', loadComponent: () => import('./components/table/table.component') },
            { path: 'buttons', loadComponent: () => import('./components/button/button.component') },
            { path: 'form', loadComponent: () => import('./components/form/form.component') },
            { path: 'listbox', loadComponent: () => import('./components/listbox/listbox.component') },
        ]
    }
];

export default APP_ROUTES;