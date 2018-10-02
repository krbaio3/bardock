import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'dbz-bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.component.html'
})
export class BottomSheetOverviewExampleSheetComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<
      BottomSheetOverviewExampleSheetComponent
    >
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
