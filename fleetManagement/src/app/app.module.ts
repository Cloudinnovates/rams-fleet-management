import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router'
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';

import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { VehicleDetailsComponent } from './admin-panel/vehicle-details/vehicle-details.component';
import {MatTableModule} from '@angular/material'
import {CdkTableModule} from '@angular/cdk/table'
import {MatSortModule, MatDialogModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TermsComponent } from './terms/terms.component';
import { ChartComponent } from './admin-panel/chart/chart.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './service/http-client.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HighchartsChartModule } from 'highcharts-angular';


const appRoutes: Routes = [
  {path: '', component: HomeComponent,
  children:[
    { path: '', redirectTo : 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent},
    { path: 'about', component: AboutusComponent },
   {path: 'terms', component: TermsComponent}
  ]
},
   {path: 'admin', component: AdminPanelComponent,
  children:[   
    {path: 'vehicledetails', component: VehicleDetailsComponent},
     {path: 'chart', component: ChartComponent}
  ]
  

  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AdminPanelComponent,
    VehicleDetailsComponent,
    TermsComponent,
    ChartComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatSortModule,
    NgwWowModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    NgVerticalTimelineModule,
    CdkTableModule,
    MatSortModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    HttpClientModule,
    HighchartsChartModule,
    
    RouterModule.forRoot(appRoutes)

  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
