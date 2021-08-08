import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { TimeSelectorComponent } from './components/time-selector.component';
import { CompoundInterestPageComponent } from './compound-interest-page.component';

@NgModule({
  declarations: [TimeSelectorComponent, CompoundInterestPageComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [CompoundInterestPageComponent],
})
export class CompoundInterestModule {}
