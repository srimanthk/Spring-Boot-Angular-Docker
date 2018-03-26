package com.srimanth.sample.service;

import com.srimanth.sample.model.Unit;

public interface UnitConversionService {

    double convertCelsiusToFahrenheit(double celcius);

    double convertFahrenheitToCelsius(double degrees);

    double convertPoundToKg(double pounds);

    double convertKgToPound(double kg);

    double convertKmToMile(double km);

    double convertMileToKm(double mile);
}
