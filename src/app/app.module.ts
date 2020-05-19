import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PredictorComponent } from './predictor/predictor.component';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import { ApiService } from "./api.service";
import { DropzoneDirective } from './dropzone.directive';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PredictorComponent,
    DropzoneDirective,
    UploadTaskComponent,
    FileSizePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "CIFAR")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
