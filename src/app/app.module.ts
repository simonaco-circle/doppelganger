import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { FaceService } from './face/face.service';

@NgModule({
  declarations: [AppComponent, FaceComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpModule, FormsModule],
  providers: [FaceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
