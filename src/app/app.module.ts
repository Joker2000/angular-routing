import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './default/default.component';
import { ProfileComponent } from './profile/profile.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OverviewComponent } from './my-account/overview/overview.component';
import { MyStuffComponent } from './my-account/my-stuff/my-stuff.component';
import { NonDefaultComponent } from './non-default/non-default.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        DefaultComponent,
        ProfileComponent,
        MyAccountComponent,
        OverviewComponent,
        MyStuffComponent,
        NonDefaultComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
