import {Country} from "./country";
/**
 * Created by serrut on 07/06/16.
 */

export class CountryImpl implements Country{
    constructor(public alpha2code:string, public name:string){

    }

}