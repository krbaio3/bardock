import { NgModule } from '@angular/core';
import {
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [MatSelectModule, MatFormFieldModule, MatButtonModule],
  exports: [MatSelectModule, MatFormFieldModule, MatButtonModule]
})
export class MaterialModule {}
