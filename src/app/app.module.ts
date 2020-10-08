import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [AppComponent, DetailsComponent, ListComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
