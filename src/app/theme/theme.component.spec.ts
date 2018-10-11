import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { MatBottomSheet } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { ThemeComponent } from './theme.component';
import { TestingModule } from '../utils/testing-utils';
import { of } from 'rxjs';

describe('ThemeComponent', () => {
  let comp: ThemeComponent;
  let fixture: ComponentFixture<ThemeComponent>;

  beforeEach(() => {
    const matDialogStub = {
      open: () => ({
        afterClosed: () => of({})
      })
    };
    const matSnackBarStub = {
      openFromComponent: () => ({}),
      open: () => ({})
    };
    const matBottomSheetStub = {
      open: () => ({})
    };
    const domSanitizerStub = {
      bypassSecurityTrustResourceUrl: () => ({})
    };
    const matIconRegistryStub = {
      addSvgIcon: () => ({})
    };
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ThemeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: MatSnackBar, useValue: matSnackBarStub },
        { provide: MatBottomSheet, useValue: matBottomSheetStub },
        { provide: DomSanitizer, useValue: domSanitizerStub },
        { provide: MatIconRegistry, useValue: matIconRegistryStub }
      ]
    });
    fixture = TestBed.createComponent(ThemeComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('name defaults to: Jorge', () => {
    expect(comp.name).toEqual('Jorge');
  });

  it('foods defaults to: [, , ]', () => {
    expect(comp.foods).toEqual(comp.foods);
  });

  it('animals defaults to: [, , , ]', () => {
    expect(comp.animals).toEqual(comp.animals);
  });

  describe('openDialog', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(matDialogStub, 'open').and.callThrough();
      comp.openDialog();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });

  describe('openSnackBar', () => {
    it('makes expected calls', () => {
      const matSnackBarStub: MatSnackBar = fixture.debugElement.injector.get(
        MatSnackBar
      );
      spyOn(matSnackBarStub, 'openFromComponent');
      comp.openSnackBar();
      expect(matSnackBarStub.openFromComponent).toHaveBeenCalled();
    });
  });

  describe('openBottomSheet', () => {
    it('makes expected calls', () => {
      const matBottomSheetStub: MatBottomSheet = fixture.debugElement.injector.get(
        MatBottomSheet
      );
      spyOn(matBottomSheetStub, 'open');
      comp.openBottomSheet();
      expect(matBottomSheetStub.open).toHaveBeenCalled();
    });
  });
});
