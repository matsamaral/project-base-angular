import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HeaderModule {}
