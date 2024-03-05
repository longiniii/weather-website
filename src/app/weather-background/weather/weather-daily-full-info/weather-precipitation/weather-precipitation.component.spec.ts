import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPrecipitationComponent } from './weather-precipitation.component';

describe('WeatherPrecipitationComponent', () => {
  let component: WeatherPrecipitationComponent;
  let fixture: ComponentFixture<WeatherPrecipitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherPrecipitationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherPrecipitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
