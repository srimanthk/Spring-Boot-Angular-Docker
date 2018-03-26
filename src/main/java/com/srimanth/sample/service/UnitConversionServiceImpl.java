package com.srimanth.sample.service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class UnitConversionServiceImpl implements UnitConversionService {

    @Override
    public double convertCelsiusToFahrenheit(double celcsius) {
        return (celcsius * (9.0 / 5.0)) + 32;
    }

    @Override
    public double convertFahrenheitToCelsius(double degrees) {
        return (degrees - 32) * (5.0 / 9.0);
    }

    @Override
    public double convertPoundToKg(double pounds) {
        return (pounds * .453);
    }

    @Override
    public double convertKgToPound(double kg) {
        return (kg * 2.207);
    }

    @Override
    public double convertKmToMile(double km) {
        return km * 0.621;
    }

    @Override
    public double convertMileToKm(double mile) {
        return mile * 1.60934;
    }
}
