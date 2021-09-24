import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { TimeSelectorComponent } from './components/time-selector.component';
import { CompoundInterestPageComponent } from './pages/compound-interest-page.component';
import { CompoundInterestGraphComponent } from './components/compound-interest-graph.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LinearSliderValueComponent } from './components/linear-slider-value.component';

@NgModule({
  declarations: [
    TimeSelectorComponent,
    CompoundInterestPageComponent,
    CompoundInterestGraphComponent,
    LinearSliderValueComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [CompoundInterestPageComponent],
})
export class CompoundInterestModule {}
