import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CompCardComponent } from './comp-card/comp-card.component';
import { CompContainerComponent } from './comp-container/comp-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { NoteWindowComponent } from './note-window/note-window.component';
import { NoteComponent } from './note-window/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    SidebarComponent,
    CompCardComponent,
    CompContainerComponent,
    ModalWindowComponent,
    NoteWindowComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
