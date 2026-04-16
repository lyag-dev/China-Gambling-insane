import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedirectCommand } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonButton],
})
export class HomePage {
  constructor() {}
  nm_escolhido?: number

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  comparar(){
    let numberSorteado = this.getRandomInt(1,10)

    if (numberSorteado== this.nm_escolhido){
      return window.alert("vc ganhou, o número sorteado era: "+ numberSorteado)
    }
    else{
      return window.alert("perdeu troxa, o numero era: "+ numberSorteado)
    }

  }
}
 



