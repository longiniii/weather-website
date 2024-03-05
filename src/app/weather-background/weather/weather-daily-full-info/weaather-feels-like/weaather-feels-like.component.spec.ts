import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaatherFeelsLikeComponent } from './weaather-feels-like.component';

describe('WeaatherFeelsLikeComponent', () => {
  let component: WeaatherFeelsLikeComponent;
  let fixture: ComponentFixture<WeaatherFeelsLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeaatherFeelsLikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaatherFeelsLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
