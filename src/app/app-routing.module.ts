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
        component: HomeComponent,
        //we are adding animation to our routes, here we add a data object with an animation object within, we give the animation object a value
        //and name it 'home' it good to name the value something that represents the route
        data: {
            animation: {
                value: 'home',
            }
        }
    },
    {
        path: 'animation-basics',
        component: BasicComponent,
        data: {
            animation: {
                value: 'basic',
            }
        }
    },
    {
        path: 'animation-contained',
        component: ContainedComponent,
        data: {
            animation: {
                value: 'contained',
            }
        }
    },
    {
        path: 'animation-advanced',
        component: AdvancedComponent,
        data: {
            animations: {
                value: 'advanced',
            }
        }
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
