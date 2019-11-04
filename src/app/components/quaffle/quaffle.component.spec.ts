import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaffleComponent } from './quaffle.component';

describe('QuaffleComponent', () => {
  let component: QuaffleComponent;
  let fixture: ComponentFixture<QuaffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
