import {MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({

  imports: [

    MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatToolbarModule
  ],

  exports: [

    MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatToolbarModule
  ]
})

export class MaterialModule {}
