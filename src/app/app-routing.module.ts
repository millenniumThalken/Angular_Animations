import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { ContainedComponent } from './contained/contained.component';

const animationRoutes: Routes = [
    {

        path: 'animation-home',

        component: HomeComponent

    },

    {

        path: 'animation-basics',

        component: BasicComponent

    },

    {

        path: 'animation-contained',

        component: ContainedComponent

    },

    {

        path: 'animation-advanced',

        component: AdvancedComponent

    },

    {

        path: '',

        redirectTo: '/animation-home',

        pathMatch: 'full'

    }

];


@NgModule({
    imports: [RouterModule.forRoot(animationRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
