import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarPage } from './webinar-page';

describe('WebinarPage', () => {
  let component: WebinarPage;
  let fixture: ComponentFixture<WebinarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
