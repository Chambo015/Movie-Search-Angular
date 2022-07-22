import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getShortInfo } from '../films';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() idFilm: string = '';
  @Input() filmsInfo!: Map<string, getShortInfo>;

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  get film() {
    const film = this.filmsInfo.get(this.idFilm);
    return film;
  }

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeModal.emit(true);
  }
}
