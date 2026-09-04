import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';

import { ServiceDetailComponent } from './service-detail.component';

describe('ServiceDetailComponent', () => {
  let component: ServiceDetailComponent;
  let fixture: ComponentFixture<ServiceDetailComponent>;

  // Simula el parámetro web-apps que normalmente entrega el router.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'web-apps' } } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Comprueba que el slug selecciona el servicio correcto del catálogo.
  it('should create a detail for the selected service', () => {
    expect(component).toBeTruthy();
    expect(component.service?.slug).toBe('web-apps');
  });
});
