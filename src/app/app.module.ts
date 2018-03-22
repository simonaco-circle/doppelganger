import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { FaceService } from './face.service';

@NgModule({
  declarations: [AppComponent, FaceComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [FaceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
