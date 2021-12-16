import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LocalidadesService } from 'src/app/shared/services/localidades.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  doctorForm!: FormGroup;
  estados: any
  estadosNome: any
  ufInvalido = false
  crmInvalido = false
  crm = new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5)]))
  uf = new FormControl(null, [Validators.required])
  constructor(private formBuilder: FormBuilder, private localidadesService: LocalidadesService) {

  }

  ngOnInit(): void {
    this.obterEstados()
    this.doctorForm = this.formBuilder.group({
      crm: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      uf: ['', [Validators.required]]
    });
  }

  enviarFormulario() {
    if (this.doctorForm.valid) {
      alert("Sucesso!")
    }
  }

  confereErroCRM() {
    if (this.crm.hasError('required')) {
      return 'Você deve digitar um valor';
    }

    return this.crm.hasError('crm') ? 'Valor iinválido' : '';
  }
  confereErroUF() {
    if (this.uf.hasError('required')) {
      return 'Você deve selecionar um estado';
    }

    return this.uf.hasError('crm') ? 'Você deve selecionar um estadoo' : '';
  }

  obterEstados() {
    this.localidadesService.obterEstados().subscribe((response: any) => {
      this.estados = response;
      this.estadosNome = this.estados.map((x: any) => x.nome)
      console.log(this.estadosNome);
    })
  }

}
