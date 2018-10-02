import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatBottomSheetModule,
  MatListModule,
  MatIconModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatIconModule,

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatIconModule,

  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class MyOwnCustomMaterialModule {
  constructor() {}
}
