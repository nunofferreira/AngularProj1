import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent {

  @Input() esconde!: boolean;
  @Input() post!: Post;
  @Output() close = new EventEmitter<boolean>();

  onClose() {
    this.close.emit(true);
    this.esconde = true;
  }
}
