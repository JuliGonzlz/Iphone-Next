import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesIphoneComponent } from './phones-iphone.component';

describe('PhonesIphoneComponent', () => {
  let component: PhonesIphoneComponent;
  let fixture: ComponentFixture<PhonesIphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonesIphoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
