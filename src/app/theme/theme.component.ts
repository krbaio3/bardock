import { Component } from '@angular/core';
import { MatDialog, MatSnackBar, MatBottomSheet } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog.component';
import { PizzaPartyComponent } from './pizza-party-component.component';
import { BottomSheetOverviewExampleSheetComponent } from './bottom-sheet-overview-example-sheet.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

interface Food {
  value: string;
  viewValue: string;
}

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'dbz-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  name = 'Jorge';
  animal: string;

  disableSelect = new FormControl(false);

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  animalControl = new FormControl('', [Validators.required]);
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon('suuShinChuu', this.sanitizer.bypassSecurityTrustResourceUrl(// 'assets/images/Suu-Shinchuu.png'
        'assets/images/Suu-Shinchuu.svg'));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500
    });
  }

  openOtherSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}
