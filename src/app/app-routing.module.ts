import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { ProfileComponent } from './profile/profile.component';
import { OverviewComponent } from './my-account/overview/overview.component';
import { MyStuffComponent } from './my-account/my-stuff/my-stuff.component';
import { NonDefaultComponent } from './non-default/non-default.component';

export const routes: Routes = [
    { path: '', redirectTo: 'my-account', pathMatch: 'full' }, // should redirect to localhost:4200/my-account
    { path: '', component: DefaultComponent, children: [
        { path: 'my-account', children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' }, // should redirect to localhost:4200/my-account/overview
            { path: 'overview', component: OverviewComponent }, // should resolve: localhost:4200/my-account/overview
            { path: 'my-stuff', component: MyStuffComponent } // should resolve: localhost:4200/my-account/my-stuff
        ]},
        { path: 'profile', component: ProfileComponent } // should resolve: localhost:4200/profile
    ]},
    { path: 'non-default', component: NonDefaultComponent } // should resolve: localhost:4200/non-default
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
