import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotazioniComponent } from './quotazioni.component';

describe('QuotazioniComponent', () => {
  let component: QuotazioniComponent;
  let fixture: ComponentFixture<QuotazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
