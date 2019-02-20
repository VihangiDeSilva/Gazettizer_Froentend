import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovGazetteComponent } from './gov-gazette.component';

describe('GovGazetteComponent', () => {
  let component: GovGazetteComponent;
  let fixture: ComponentFixture<GovGazetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovGazetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovGazetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
