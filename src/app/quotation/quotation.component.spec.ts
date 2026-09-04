import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { QuotationComponent } from './quotation.component';

describe('QuotationComponent', () => {
  let component: QuotationComponent;
  let fixture: ComponentFixture<QuotationComponent>;

  // Configura el formulario standalone y el router usado por sus enlaces.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotationComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verifica que la página de cotización se puede crear.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
