import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHourlyWindComponent } from './weather-hourly-wind.component';

describe('WeatherHourlyWindComponent', () => {
  let component: WeatherHourlyWindComponent;
  let fixture: ComponentFixture<WeatherHourlyWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherHourlyWindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherHourlyWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
