import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response,
    Headers,
    URLSearchParams,
    RequestOptions
} from '@angular/http';
import {
    Observable
} from 'rxjs';

import {
    Unit
} from './unit';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UnitConversionService {
    //URLs for CRUD operations
    temperatureUrl = '/api/unitconversion/temperature';
    weightUrl = '/api/unitconversion/weight';
    distanceUrl = '/api/unitconversion/distance';
    //Create constructor to get Http instance
    constructor(private http: Http) {}


    temperatureConversion(input: string, convertType: string): Observable < Unit > {
        let cpHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        let cpParams = new URLSearchParams();
        cpParams.append('input', input);
        cpParams.append('convertType', convertType);
        let options = new RequestOptions({
            headers: cpHeaders,
            search: cpParams
        });
        return this.http.get(this.temperatureUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    weightConversion(input: string, convertType: string): Observable < Unit > {
        let cpHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        let cpParams = new URLSearchParams();
        cpParams.append('input', input);
        cpParams.append('convertType', convertType);
        let options = new RequestOptions({
            headers: cpHeaders,
            search: cpParams
        });
        return this.http.get(this.weightUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    distanceConversion(input: string, convertType: string): Observable < Unit > {
        let cpHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        let cpParams = new URLSearchParams();
        cpParams.append('input', input);
        cpParams.append('convertType', convertType);
        let options = new RequestOptions({
            headers: cpHeaders,
            search: cpParams
        });
        return this.http.get(this.distanceUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}
