import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerProduitComponent } from './supprimer-produit.component';

describe('SupprimerProduitComponent', () => {
  let component: SupprimerProduitComponent;
  let fixture: ComponentFixture<SupprimerProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
