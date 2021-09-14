import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { TimeSelectorComponent } from './components/time-selector.component';
import { CompoundInterestPageComponent } from './pages/compound-interest-page.component';
import { CompoundInterestGraphComponent } from './components/compound-interest-graph.component';

@NgModule({
  declarations: [
    TimeSelectorComponent,
    CompoundInterestPageComponent,
    CompoundInterestGraphComponent,  
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [CompoundInterestPageComponent],
})
export class CompoundInterestModule {}
