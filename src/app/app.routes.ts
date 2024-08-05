import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProgressComponent } from './pages/progress/progress.component';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./pages/pages.component").then(component => component.PagesComponent),
        children: [
            {
                path: "graficas1",
                component: Graficas1Component
            },
            {
                path: "dashboard",
                component: DashboardComponent

            },
            {
                path: "progress",
                component: ProgressComponent
            },
            {
                path: "", redirectTo: "dashboard", pathMatch: "full"
            },
        ]
    },

    {
        path: "login",
        loadComponent: () => import("./login/login.component").then(component => component.LoginComponent),
    },
    {
        path: "register",
        loadComponent: () => import("./login/register.component").then(component => component.RegisterComponent),

    },
    {
        path: "**",
        component: NotFoundComponent
    }

];
