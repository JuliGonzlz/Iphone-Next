import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesCartComponent } from './phones-cart.component';

describe('PhonesCartComponent', () => {
  let component: PhonesCartComponent;
  let fixture: ComponentFixture<PhonesCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonesCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
