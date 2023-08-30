import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMedicamentoComponent } from './add-edit-medicamento.component';

describe('AddEditMedicamentoComponent', () => {
  let component: AddEditMedicamentoComponent;
  let fixture: ComponentFixture<AddEditMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
