import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesAboutComponent } from './phones-about.component';

describe('PhonesAboutComponent', () => {
  let component: PhonesAboutComponent;
  let fixture: ComponentFixture<PhonesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonesAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
