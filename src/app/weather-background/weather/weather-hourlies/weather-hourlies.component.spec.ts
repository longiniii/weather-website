import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHourliesComponent } from './weather-hourlies.component';

describe('weatherHourliesComponent', () => {
  let component: WeatherHourliesComponent;
  let fixture: ComponentFixture<WeatherHourliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherHourliesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherHourliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
