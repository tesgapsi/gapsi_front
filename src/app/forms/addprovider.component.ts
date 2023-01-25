import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {ProviderServiceService} from '../service/provider-service.service'
import { Router } from '@angular/router';
import { Provider } from '../models/provider.model';
@Component({
  selector: 'add-provider',
  templateUrl: './addprovider.component.html',
  styleUrls: ['./addprovider.component.css']
})
export class AddProviderComponent implements OnInit {

  public providerForm!:FormGroup;
  

  constructor(
    private _formBuilder: FormBuilder,
    private _providerService: ProviderServiceService,
    private _router: Router
  ) {

    this.providerForm = new FormGroup({
        "name": new FormControl(null, [Validators.required]),
        "direction": new FormControl(null, [Validators.required]),
        "rs": new FormControl(null, Validators.required)
      });
    
  }

  ngOnInit() {
    
  }

  saveProvider(): void {
   
    this._providerService.create(this.providerForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.providerForm.reset();
        },
        error: (e) => console.error(e)
      });
  }

  back(event :Event) {

    event.preventDefault();
    this._router.navigate(["provider-list"]);
    
  }

}

