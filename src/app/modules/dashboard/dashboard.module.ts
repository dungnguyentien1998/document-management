import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NftAuctionsTableComponent } from './components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftAuctionsTableItemComponent } from './components/nft/nft-auctions-table-item/nft-auctions-table-item.component';
import { NftChartCardComponent } from './components/nft/nft-chart-card/nft-chart-card.component';
import { NftDualCardComponent } from './components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from './components/nft/nft-header/nft-header.component';
import { NftSingleCardComponent } from './components/nft/nft-single-card/nft-single-card.component';
import { NftComponent } from './pages/nft/nft.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReportComponent } from './pages/report/report.component';
import { LogComponent } from './pages/log/log.component';
import { RequestComponent } from './pages/request/request.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    NftAuctionsTableComponent,
    NftAuctionsTableItemComponent,
    NftChartCardComponent,
    NftDualCardComponent,
    NftHeaderComponent,
    NftSingleCardComponent,
    NftComponent,
    ReportComponent,
    LogComponent,
    RequestComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    NgApexchartsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class DashboardModule { }
