import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPeliculas1Component } from './detalles.peliculas1.component';

describe('DetallesPeliculas1Component', () => {
  let component: DetallesPeliculas1Component;
  let fixture: ComponentFixture<DetallesPeliculas1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesPeliculas1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPeliculas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
