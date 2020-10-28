
import distanceTo from './modules/distanceTo.js';
import TestLocation from './modules/TestLocation.js';

const userPrefs = {
  city: 'Chicago',
  lat: 41.878113,
  lon: -87.629799,
};


console.log(distanceTo(
  userPrefs.lat,
  userPrefs.lon,
  TestLocation.lat,
  TestLocation.lon,
  'M')
);

// ==========

