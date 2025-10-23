import { Component } from '@angular/core';
import { DragDropModule, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  imports: [CdkDrag, DragDropModule],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css'
})
export class KanbanBoard {

  movies = [
    'Levantarse'
  ]

}
