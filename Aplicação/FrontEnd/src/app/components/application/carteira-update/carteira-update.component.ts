import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/settings/Services/app.service';
import { ProfileService } from 'src/app/settings/Services/profile.service';

@Component({
  selector: 'app-carteira-update',
  templateUrl: './carteira-update.component.html',
  styleUrls: ['./carteira-update.component.css']
})
export class CarteiraUpdateComponent implements OnInit{

constructor( private service: AppService, private profileService: ProfileService){}

  allVacinas: any;
  dose01: boolean = false;
  dose02: boolean = false;
  dose03: boolean = false;
  idVacina: any;

  vacinaNome: any;

  onSelectionChange(event: any) {}

  ngOnInit(): void {
    const idVacina = this.service.getVacinaCarteira()
    this.idVacina = idVacina
    this.service.GetByVacinas(idVacina).subscribe((res)=>{
      this.vacinaNome = res.result.postos[0].Nome
    })

  }

  updateVacina(){
    const idCarteira = this.service.getCarteira()
    const idade = this.profileService.getIdadeUser()
    console.log(idade);
    
    const carteira = {
      carteiraUsuario:
      {
        Usuario_ID: idCarteira,
        Vacina_ID: this.idVacina,
        Dose_01: this.dose01,
        Dose_02: this.dose02,
        Dose_03: this.dose03,
        Idade: idade
      }
    }
  }
}
