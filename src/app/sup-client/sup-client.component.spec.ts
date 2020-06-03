import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupClientComponent } from './sup-client.component';

describe('SupClientComponent', () => {
  let component: SupClientComponent;
  let fixture: ComponentFixture<SupClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
