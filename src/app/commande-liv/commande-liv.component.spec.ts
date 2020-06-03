import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeLivComponent } from './commande-liv.component';

describe('CommandeLivComponent', () => {
  let component: CommandeLivComponent;
  let fixture: ComponentFixture<CommandeLivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeLivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeLivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
