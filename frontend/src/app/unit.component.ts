import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import {
    UnitConversionService
} from './unit.service';
import {
    Unit
} from './unit';

@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
    //Component properties
    tInput = null;
    tOutPut = null;
    wInput = null;
    wOutPut = null;
    dInput = null;
    dOutPut = null;

    statusCode: number;

    //Create constructor to get service instance
    constructor(private unitConversionService: UnitConversionService) {}

    ngOnInit() {}

    //Temperature
    temperatureConversion(tInput: string, convertType: string) {
        this.statusCode = null;
        this.unitConversionService.temperatureConversion(tInput, convertType)
            .subscribe(unit => {
                    this.tOutPut = unit.result;
                },
                errorCode => this.statusCode = errorCode);
    }

    //Weight
    weightConversion(wInput: string, convertType: string) {
        this.statusCode = null;
        this.unitConversionService.weightConversion(wInput, convertType)
            .subscribe(unit => {
                    this.wOutPut = unit.result;
                },
                errorCode => this.statusCode = errorCode);
    }

    //Distance
    distanceConversion(dInput: string, convertType: string) {
        this.statusCode = null;
        this.unitConversionService.distanceConversion(dInput, convertType)
            .subscribe(unit => {
                    this.dOutPut = unit.result;
                },
                errorCode => this.statusCode = errorCode);
    }
}
