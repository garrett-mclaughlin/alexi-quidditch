import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaterComponent } from './beater.component';

describe('BeaterComponent', () => {
  let component: BeaterComponent;
  let fixture: ComponentFixture<BeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
