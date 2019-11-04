import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaserComponent } from './chaser.component';

describe('ChaserComponent', () => {
  let component: ChaserComponent;
  let fixture: ComponentFixture<ChaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
