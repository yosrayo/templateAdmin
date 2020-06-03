import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupLivreurComponent } from './sup-livreur.component';

describe('SupLivreurComponent', () => {
  let component: SupLivreurComponent;
  let fixture: ComponentFixture<SupLivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupLivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
