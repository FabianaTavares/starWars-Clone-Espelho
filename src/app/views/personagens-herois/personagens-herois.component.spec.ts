import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensHeroisComponent } from './personagens-herois.component';

describe('PersonagensHeroisComponent', () => {
  let component: PersonagensHeroisComponent;
  let fixture: ComponentFixture<PersonagensHeroisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagensHeroisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensHeroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
