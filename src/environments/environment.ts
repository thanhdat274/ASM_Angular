// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiUrl = 'http://localhost:3001/api'

export const environment = {
  production: false,
  products: `${apiUrl}/products`,
  category: `${apiUrl}/category`,
  signin: `${apiUrl}/signin`,
  signup: `${apiUrl}/signup`,
  user: `${apiUrl}/user`,
  firebaseConfig : {
    apiKey: "AIzaSyBJwmBQUCQ53gMXh2MTIK4M2H3I68bc7bk",
    databaseUrl:'https://asm-angular-32b58-default-rtdb.firebaseio.com/',
    authDomain: "asm-angular-32b58.firebaseapp.com",
    projectId: "asm-angular-32b58",
    storageBucket: "asm-angular-32b58.appspot.com",
    messagingSenderId: "770847226045",
    appId: "1:770847226045:web:e522d9710c95e49f999fd4",
    measurementId: "G-5H7YQCY42H"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
