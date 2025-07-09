import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarTabs } from './webinar-tabs';

describe('WebinarTabs', () => {
  let component: WebinarTabs;
  let fixture: ComponentFixture<WebinarTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
