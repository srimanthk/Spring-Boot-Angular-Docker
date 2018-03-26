package com.srimanth.sample.controller;

import com.srimanth.sample.model.Unit;
import com.srimanth.sample.service.UnitConversionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/unitconversion")
@CrossOrigin(origins = {"http://localhost:4200"})
public class UnitConversionController {

    @Autowired
    UnitConversionService unitConversionService;

    @GetMapping("/temperature")
    public ResponseEntity<Unit> temperatureConversion(@RequestParam("input") String input,
                                                      @RequestParam("convertType") String convertType) {
        Unit unit = new Unit();
        if (!StringUtils.isEmpty(input) && !StringUtils.isEmpty(convertType)) {
            try {
                double inputMetric = Double.valueOf(input);
                double result = 0.0d;
                if (convertType.equalsIgnoreCase("ceToF")) {
                    result = unitConversionService.convertCelsiusToFahrenheit(inputMetric);
                    unit.setResult(String.valueOf(result) + " " + "F");
                } else if (convertType.equalsIgnoreCase("fToCe")) {
                    result = unitConversionService.convertFahrenheitToCelsius(inputMetric);
                    unit.setResult(String.valueOf(result) + " " + "C");
                }
            } catch (NumberFormatException e) {
                unit.setInput("Enter a valid input");
            }
        }
        return new ResponseEntity<Unit>(unit, HttpStatus.OK);
    }

    @GetMapping("/weight")
    public ResponseEntity<Unit> weightConversion(@RequestParam("input") String input,
                                                 @RequestParam("convertType") String convertType) {
        Unit unit = new Unit();
        if (!StringUtils.isEmpty(input) && !StringUtils.isEmpty(convertType)) {
            try {
                double inputMetric = Double.valueOf(input);
                double result = 0.0d;
                if (convertType.equalsIgnoreCase("kgToLb")) {
                    result = unitConversionService.convertKgToPound(inputMetric);
                    unit.setResult(String.valueOf(result) + " " + "Lb");
                } else if (convertType.equalsIgnoreCase("lbToKg")) {
                    result = unitConversionService.convertPoundToKg(inputMetric);
                    unit.setResult(String.valueOf(result) + " " + "Kg");
                }
            } catch (NumberFormatException e) {
                unit.setInput("Enter a valid input");
            }
        }
        return new ResponseEntity<Unit>(unit, HttpStatus.OK);
    }

    @GetMapping("/distance")
    public ResponseEntity<Unit> distanceConversion(@RequestParam("input") String input,
                                                   @RequestParam("convertType") String convertType) {
        Unit unit = new Unit();
        if (!StringUtils.isEmpty(input) && !StringUtils.isEmpty(convertType)) {
            try {
                double inputMetric = Double.valueOf(input);
                double result = 0.0d;
                if (convertType.equalsIgnoreCase("kmToMi")) {
                    result = unitConversionService.convertKmToMile(inputMetric);
                    unit.setResult(String.valueOf(result) + " " + "Mi");
                } else if (convertType.equalsIgnoreCase("miToKm")) {
                    result = unitConversionService.convertMileToKm(inputMetric);
                    unit.setResult(String.valueOf(result) + " " + "Km");
                }
            } catch (NumberFormatException e) {
                unit.setInput("Enter a valid input");
            }
        }
        return new ResponseEntity<Unit>(unit, HttpStatus.OK);
    }
}
