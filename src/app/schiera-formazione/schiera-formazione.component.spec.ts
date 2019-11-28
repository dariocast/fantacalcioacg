import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchieraFormazioneComponent } from './schiera-formazione.component';

describe('SchieraFormazioneComponent', () => {
  let component: SchieraFormazioneComponent;
  let fixture: ComponentFixture<SchieraFormazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchieraFormazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchieraFormazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
