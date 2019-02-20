import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUpdatesComponent } from './last-updates.component';

describe('LastUpdatesComponent', () => {
  let component: LastUpdatesComponent;
  let fixture: ComponentFixture<LastUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
