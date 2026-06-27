import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMoneda } from './card-moneda';

describe('CardMoneda', () => {
  let component: CardMoneda;
  let fixture: ComponentFixture<CardMoneda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMoneda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMoneda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
