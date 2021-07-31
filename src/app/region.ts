export interface Country {
    code: string;
    name: string;
}
export interface Province {
    code: string;
    name: string;
    countryName: string;
}
export interface City {
    code: string;
    name: string;
    countryName: string;
    provinceName: string;
}