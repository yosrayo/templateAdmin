import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProfilLivComponent } from './modifier-profil-liv.component';

describe('ModifierProfilLivComponent', () => {
  let component: ModifierProfilLivComponent;
  let fixture: ComponentFixture<ModifierProfilLivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierProfilLivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProfilLivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
