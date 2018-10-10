import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private readonly language: string;
  constructor() {
    this.language = environment.language ? environment.language : 'en';
  }

  public getLanguage(): string {
    return this.language ? this.language : 'en';
    // return this.language;
  }

  public getLanguages(): string[] {
    return ['es', 'en', 'it', 'fr'];
  }
}
