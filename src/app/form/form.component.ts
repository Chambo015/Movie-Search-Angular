import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Search} from '../films'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() searchFilm: EventEmitter<Search> = new EventEmitter<Search>()



  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.min(1900), Validators.max(2022)])
  })

  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    if (this.form.valid) {

      const formData = { ...this.form.value };
      const title = formData.title
      const year = formData.year
      
      this.searchFilm.emit({title, year})
    }
  }
}
