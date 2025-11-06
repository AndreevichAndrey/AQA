//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }

// Описати повернутий JSON інтерфейсом або класом.

export interface ApiObjectsDto {
    id: number;
    name: string;
    username: string;
    email: string;
    address: ApiObjectsAddressDto;
    phone: string;
    website: string;
    company: ApiObjectsCompanyDto;
}
export interface ApiObjectsAddressDto {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: ApiObjectsGeoDto;
}

export interface ApiObjectsCompanyDto {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface ApiObjectsGeoDto {
    lat: string;
    lng: string;
}
