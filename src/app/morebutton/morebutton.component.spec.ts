import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorebuttonComponent } from './morebutton.component';

describe('MorebuttonComponent', () => {
  let component: MorebuttonComponent;
  let fixture: ComponentFixture<MorebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
