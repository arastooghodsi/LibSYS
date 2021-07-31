import { City, Country, Province } from './region';

export let COUNTRY: Country[] = [
    {code: 'IRI', name: 'ایران'},
    {code: 'BRZ', name: 'برزیل'},
    {code: 'GER', name: 'آلمان'},
    {code: 'SPN', name: 'اسپانیا'}
];

export let PROVINCE: Province[] = [
    {code: "TEH", name: "تهران", countryName: "ایران"},
    {code: "HAM", name: "همدان", countryName: "ایران"},
    {code: "GIL", name: "گیلان", countryName: "ایران"},
    {code: "GER", name: "برلین", countryName: "آلمان"},
    {code: "BRZ", name: "برزیلیا", countryName: "برزیل"},
    {code: "SPN", name: "مادرید", countryName: "اسپانیا"}
];

export let CITY: City[] = [
    {code: "TEH", name: "تهران", countryName: "ایران", provinceName: "تهران"},
    {code: "HAM", name: "همدان", countryName: "ایران", provinceName: "همدان"},
    {code: "RSH", name: "رشت", countryName: "ایران", provinceName: "گیلان"},
    {code: "SAR", name: "ساری", countryName: "ایران", provinceName: "مازندران"}
];