import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '../utils/settings.service';

@Component({
  selector: 'dbz-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss']
})
export class I18nComponent {
  public fecha = new Date();
  public monedas = 10000;
  public selectedLanguage: string;

  constructor(
    public translate: TranslateService,
    private settingSrv: SettingsService
  ) {
    translate.addLangs(this.settingSrv.getLanguages());
    translate.setDefaultLang(this.settingSrv.getLanguage());

    // We can use the browserLang

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|es|it|fr/) ? browserLang : 'en');

    // or use the language to settingLanguage
    translate.use(this.settingSrv.getLanguage());

    this.selectedLanguage = translate.currentLang;

    console.log(translate.getLangs());
  }

  public onClick(event) {
    console.log('Este es el lenguaje seleccionado: ', event);
  }
}
