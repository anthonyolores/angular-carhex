import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefilterComponent } from './pagefilter.component';

describe('PagefilterComponent', () => {
  let component: PagefilterComponent;
  let fixture: ComponentFixture<PagefilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagefilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
