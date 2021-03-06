import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StudentComponent} from "../student/student.component";
import {FormsModule} from "@angular/forms";
import {SortDirective} from "./directive/sort.directive";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";

@NgModule({
  declarations: [StudentComponent, SortDirective],
  imports: [BrowserModule,
            FormsModule,
            ConfirmationPopoverModule.forRoot({
              confirmButtonType: 'danger'
            })],
  providers: [],
  bootstrap: [StudentComponent]
})
export class StudentModule { }
