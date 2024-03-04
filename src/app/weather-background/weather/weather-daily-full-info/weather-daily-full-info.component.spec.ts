import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDailyFullInfoComponent } from './weather-daily-full-info.component';

describe('WeatherDailyFullInfoComponent', () => {
  let component: WeatherDailyFullInfoComponent;
  let fixture: ComponentFixture<WeatherDailyFullInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDailyFullInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherDailyFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
