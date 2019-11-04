import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BludgerComponent } from './bludger.component';

describe('BludgerComponent', () => {
  let component: BludgerComponent;
  let fixture: ComponentFixture<BludgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BludgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BludgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
