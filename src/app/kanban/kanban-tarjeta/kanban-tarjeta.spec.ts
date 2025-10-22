import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanTarjeta } from './kanban-tarjeta';

describe('KanbanTarjeta', () => {
  let component: KanbanTarjeta;
  let fixture: ComponentFixture<KanbanTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanTarjeta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanTarjeta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
