// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCZbIkLWR-dcPx1ee67bfuq8oGpR2kvfXw',
    authDomain: 'pwasian.firebaseapp.com',
    databaseURL: 'https://pwasian.firebaseio.com',
    projectId: 'pwasian',
    storageBucket: 'pwasian.appspot.com',
    messagingSenderId: '887423044823',
    appId: '1:887423044823:web:039414b230a85d413bf492'
  },
  firebaseAuth: {
    authGuardFallbackURL: '/login',
    authGuardLoggedInURL: '/',
    guardProtectedRoutesUntilEmailIsVerified: true,
    enableEmailVerification: true,
  },
  urlApiFcm: 'https://pwasian.azurewebsites.net'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
