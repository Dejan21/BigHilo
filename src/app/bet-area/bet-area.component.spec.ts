import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetAreaComponent } from './bet-area.component';

describe('BetAreaComponent', () => {
  let component: BetAreaComponent;
  let fixture: ComponentFixture<BetAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
