import { TestBed } from "@angular/core/testing";
import { SettingsService } from './settings.service';

describe('SettingsService', () => {
    let service: SettingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SettingsService]
        });
        service = TestBed.get(SettingsService);
    });

    it('can load instance', () => {
        expect(service).toBeTruthy();
    });

});
