import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs'
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: "toast-top-right"
    }),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    TimeagoModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [
    ToastrModule,
    TabsModule,
    PaginationModule,
    NgxGalleryModule,
    FileUploadModule,
    BsDropdownModule,
    ButtonsModule,
    TimeagoModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
