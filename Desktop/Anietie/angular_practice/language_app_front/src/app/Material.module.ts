import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({

  exports: [
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
})
export class MaterialModule { 

}
