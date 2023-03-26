import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GategoriaComponent } from './gategoria.component';

describe('GategoriaComponent', () => {
  let component: GategoriaComponent;
  let fixture: ComponentFixture<GategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
