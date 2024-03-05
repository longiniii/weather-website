import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherVisibilityComponent } from './weather-visibility.component';

describe('WeatherVisibilityComponent', () => {
  let component: WeatherVisibilityComponent;
  let fixture: ComponentFixture<WeatherVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherVisibilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
