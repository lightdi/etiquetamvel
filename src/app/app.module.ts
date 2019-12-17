import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ZXingScannerModule } from '@zxing/ngx-scanner';



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ZXingScannerModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
