import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material/material.module';

// Components
import { ThemeComponent } from './theme/theme.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogOverviewExampleDialogComponent } from './theme/dialog-overview-example-dialog.component';
import { PizzaPartyComponent } from './theme/pizza-party-component.component';
import { BottomSheetOverviewExampleSheetComponent } from './theme/bottom-sheet-overview-example-sheet.component';

registerLocaleData(localeEs, 'es-ES', localeEsExtra);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThemeComponent,
    DialogOverviewExampleDialogComponent,
    PizzaPartyComponent,
    BottomSheetOverviewExampleSheetComponent
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheetComponent,
    PizzaPartyComponent,
    DialogOverviewExampleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyOwnCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
