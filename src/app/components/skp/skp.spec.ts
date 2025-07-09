import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skp } from './skp';

describe('Skp', () => {
  let component: Skp;
  let fixture: ComponentFixture<Skp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
