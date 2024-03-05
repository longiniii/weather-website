import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHimidityComponent } from './weather-himidity.component';

describe('WeatherHimidityComponent', () => {
  let component: WeatherHimidityComponent;
  let fixture: ComponentFixture<WeatherHimidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherHimidityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherHimidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
