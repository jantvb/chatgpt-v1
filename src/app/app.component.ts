import { Component } from '@angular/core';
import { MethodIaService } from './method-ia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatgpt-v1';

  requestText: string = '';
  answer: string = '';

  constructor(private methodIaService: MethodIaService) {}

  test() {
    this.methodIaService.callAPI(this.requestText)
      .subscribe(response => {
        console.log(response)

        this.answer = response.choices[0].message.content;
      })
  }
}
