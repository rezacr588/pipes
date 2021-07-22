import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string | undefined;
  date: string | undefined;
  amount: number | undefined;
  height: number | undefined;
  miles: number | undefined;
  onMilesChange(event: Event) {
    let milesValue: string = (<HTMLInputElement>event.target).value;
    this.miles = parseFloat(milesValue)
  }
  onNameChange(event: Event) {
    let nameValue: string = (<HTMLInputElement>event.target).value;
    this.name = nameValue
  }
  onDateChange(event: Event) {
    let dateValue: string = (<HTMLInputElement>event.target).value;
    this.date = dateValue
  }
  onAmountChange(event: Event) {
    let amountValue: string = (<HTMLInputElement>event.target).value;
    this.amount = parseFloat(amountValue)
  }
  onHeightChange(event: Event) {
    let heightValue: string = (<HTMLInputElement>event.target).value;
    this.height = parseFloat(heightValue)
  }
}
