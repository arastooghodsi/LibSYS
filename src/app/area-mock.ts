import { Country } from './area';
import { Convince } from './area';
import { City } from './area';

export let COUNTRY: Country[] = [
    { countryCode: 'IRI', countryName: 'ایران' },
    { countryCode: 'USA', countryName: 'آمریکا' },
    { countryCode: 'GRE', countryName: 'آلمان' },
    { countryCode: 'SPN', countryName: 'اسپانیا' }
];

export let CONVINCE: Convince[] = [
    { convinceCode: 'TEH', convinceName: 'تهران', convinceCountry: 'ایران' },
    { convinceCode: 'CLF', convinceName: 'کالیفرنیا ', convinceCountry: 'آمریکا' },
    { convinceCode: 'BRL', convinceName: 'برلین', convinceCountry: 'آلمان' },
    { convinceCode: 'MDR', convinceName: 'مادرید', convinceCountry: 'اسپانیا' }
];

export let CITY: City[] = [
    { cityCode: 'TEH', cityName: 'تهران', cityConvince: 'تهران', cityCountry: 'ایران'},
    { cityCode: 'LA', cityName: 'لس انجلس', cityConvince: 'کالیفرنیا', cityCountry: 'آمریکا'},
    { cityCode: 'RSH', cityName: 'رشت', cityConvince: 'گیلان', cityCountry: 'ایران'},
    { cityCode: 'SHR', cityName: 'شیراز', cityConvince: 'فارس', cityCountry: 'ایران'},
];