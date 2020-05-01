import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPricePageComponent } from './all-price-page.component';

describe('AllPricePageComponent', () => {
  let component: AllPricePageComponent;
  let fixture: ComponentFixture<AllPricePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPricePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPricePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
