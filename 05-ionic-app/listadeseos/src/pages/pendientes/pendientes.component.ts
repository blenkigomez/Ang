import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { AgregarPage } from "../agregar/agregar.component";

@Component({
  selector: "page-pendientes",
  templateUrl: "pendientes.component.html"
})
export class PendientesPage {
  constructor(
    public deseosService: DeseosService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}
  listaSeleccionada(lista: Lista) {
    console.log(lista);
  }

  agregarLista() {
    //  this.navCtrl.push(AgregarPage);

    const alerta = this.alertCtrl.create({
      title: "Nueva lista",
      message: "Nombre de la nueva lista que desea",
      inputs: [
        {
          name: "titulo",
          placeholder:'Nombre de la lista'
        }],
        buttons: [{
          text: 'Cancelar'
        },{
      text: 'Agregar',
      handler: data => {
       console.log(data);
      }
    }]
    });
    alerta.present();
  }
}