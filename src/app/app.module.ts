import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

// Modules App
import { AppRoutingModule } from './app-routing.module';

// Components App
import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { HomeComponent } from './home/home.component';
import { I18nComponent } from './i18n/i18n.component';

// i18n
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';
import localeIt from '@angular/common/locales/it';
import localeItExtra from '@angular/common/locales/extra/it';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import { SettingsService } from './utils/settings.service';

registerLocaleData(localeEs, 'es', localeEsExtra);
registerLocaleData(localeEn, 'en', localeEnExtra);
registerLocaleData(localeIt, 'it', localeItExtra);
registerLocaleData(localeFr, 'fr', localeFrExtra);

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, ThemeComponent, HomeComponent, I18nComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'es-ES' }
    {
      provide: LOCALE_ID,
      deps: [SettingsService], // some service handling global settings
      useFactory: settingsService => settingsService.getLanguage() // returns locale string
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
