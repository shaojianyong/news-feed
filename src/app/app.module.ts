import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

import { IpcRendererService } from './shared/service/ipc-renderer.service';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login/*', component: LoginComponent },
  // TODO: { path: 'main', loadChildren: './main/main.module#MainModule', data: { preload: true } },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IpcRendererService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
