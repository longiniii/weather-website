import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForTodayComponent } from './weather-dailies.component';

describe('WeatherForTodayComponent', () => {
  let component: WeatherForTodayComponent;
  let fixture: ComponentFixture<WeatherForTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherForTodayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherForTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
