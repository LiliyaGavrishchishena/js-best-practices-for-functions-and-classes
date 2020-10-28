'use strict';

const city = 'Chicago';
console.log(city);
// ==========

const today = new Date();

const weekAgoDate = function() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date;
};

const weekAgo = weekAgoDate();

console.log(today);
console.log(weekAgo);

// ==========

const abRatio = 0.95;
const input = 52;

const abFactor = (value) => {
  return (value * abRatio);
};

console.log(`abFactor: ${abFactor(input)}`);


// ==========

const bonusResult = (input) => {
  let result;
  if (input <= 100) {
    result = 100
  } else if (input > 100 && input < 500) {
    result = input * 1.5;
  } else if (input >= 500) {
    result = input * 2;
  }
  const difference = (result - input);
  return [result, difference];
}

console.log(bonusResult(50));
console.log(bonusResult(150));
console.log(bonusResult(600));

// ==========

const projections = [15.2, 33.8, 17.3, 22.4];

const bestCase = projections.map((proj) => {
  return ((proj * 1.5).toFixed(1));
});

console.log (bestCase);

// ==========

const projections2 = [15.2, 33.8, 17.3, 22.4];

const bestCase2 = projections2.map((proj) => ((proj * 1.5).toFixed(1)));

console.log(bestCase2);


// ==========

const values = [16, 7, 55];
const  projection = (array) => {
  let outcome;

  const max = array.reduce((a, b) => Math.max(a, b));
  if (max < 10) {
    outcome = 'Poor';
  } else if (max < 100) {
    outcome = 'Fair';
  } else {
    outcome = 'Good';
  }
  return outcome;
}

console.log(projection(values));

// ==========

const loggedInUser = 'liliiahavryshchyshena';
const taxRate = 0.075;

class Cart {
  constructor(options) {
    this.user = options.user;
  }
  calcTax(rate) {
    this.tax = this.total * rate;
    return this;
  }
  calcShipping() {
    if (this.total > 50) {
      this.shipping = 5;
    } else {
      this.shipping = 10;
    }
    return this;
  }
  calcGrandTotal() {
    if (this.tax && this.shipping) {
      this.grandTotal = this.total + this.tax + this.shipping;
    }
    return this;
  }
  logCart() {
    console.log(this);
  }
}

const currentCart = new Cart({
  user: loggedInUser,
});

currentCart.total = 100;
currentCart
  .calcTax(taxRate)
  .calcShipping()
  .calcGrandTotal();

window.addEventListener('load', currentCart.logCart.call(currentCart));

// ==========

const newMember = [
  84236,
  'Luis',
  'Rubio',
  '25624 Main St.',
  'Pawtucket',
  'Rhode Island',
  '02906',
];

class Label {
  constructor(options) {
    this.number = options.number;
  }
  addFullName() {
    this.fullName = newMember[1] + ' ' + newMember[2];
    return this;
  }
  addStreet() {
    this.street = newMember[3];
    return this;
  }
  addCSZ() {
    this.csz = newMember[4] + ' ' + newMember[5] + ', ' + newMember[6];
    return this;
  }
  logLabel() {
    console.log('\n',this.fullName,'\n',this.street,'\n',this.csz);
  }
}

const currentLabel = new Label({
  number: newMember[0],
});

currentLabel
  .addFullName()
  .addStreet()
  .addCSZ();

window.addEventListener('load', currentLabel.logLabel.call(currentLabel));

// ==========

const sessions = [
  {
    session_title: 'ES2030: A Preview',
    session_presenter: 'Titus Wong',
    session_day: 'Thursday',
    session_start: '12:30',
    session_end: '2:00',
    session_summary: 'It\'s always something, but for 2030, it\'s a lot more!',
  },
  {
    session_title: 'Structure Without Structure',
    session_presenter: 'Shelby Ingersoll',
    session_day: 'Wednesday',
    session_start: '9:30',
    session_end: '11:00',
    session_summary: 'Destructuring is like that grade school bully who became your high school bestie',
  },
  {
    session_title: 'Keep it classy?',
    session_presenter: 'Vineet Taylor & Lela Martinez',
    session_day: 'Thursday',
    session_start: '4:00',
    session_end: '5:30',
    session_summary: 'Debate: Are classes the best thing ever, or just plain unnecessary? Note: We will provide tomatoes to throw!',
  }
];

const template = ({ session_title: title, session_presenter: presenter, session_day: day, session_start: start, session_end: end, session_summary: summary }) => (
   `<div class='session'>
      <p class='title'>${title}</p>
      <p><span class='label'>Time: </span>${day} ${start} - ${end}</p>
      <p><span class='label'>Presenter: </span>${presenter}</p>
      <p>${summary}</p>
    </div>`
);

window.addEventListener('DOMContentLoaded', () => {
  let content = '';
  sessions.forEach((session) => {
    content += (template(session));
  });
  document.querySelector('.sessions').innerHTML = content;
});

// ==========

const conditions = {
  'coord': {
    'lon': -122.08,
    'lat': 37.39
  },
  'weather': [
    {
      'id': 800,
      'main': 'Clear',
      'description': 'clear sky',
      'icon': '01d'
    }
  ],
  'base': 'stations',
  'main': {
    'temp_f': 62.5,
    'feels_like': 62.1,
    'temp_min': 61.3,
    'temp_max': 68.2,
    'pressure': 1023,
    'humidity': 100,
    'temp_c': 16.9
  },
  'visibility': 16093,
  'wind': {
    'speed': 1.5,
    'deg': 350
  },
  'clouds': {
    'all': 1
  },
  'dt': 1560350645,
  'sys': {
    'type': 1,
    'id': 5122,
    'message': 0.0139,
    'country': 'US',
    'sunrise': 1560343627,
    'sunset': 1560396563
  },
  'timezone': -25200,
  'id': 420006353,
  'name': 'Mountain View',
  'cod': 200,
};

// const tempF = conditions.main.temp_f;
// const humidity = conditions.main.humidity;
// const place = conditions.name;

const {
  'main': {
    'temp_f': tempF,
    'humidity': humidity,
    'temp_c': tempC,
  },
  'name': place,
} = conditions;

const abbr = ['\u00B0 C', '\u00B0 F'];
// const celsiusAbbr = abbr[0];
// const fahrenheitAbbr = abbr[1];

const [celsiusAbbr, fahrenheitAbbr] = abbr;

console.log(place);
console.log(tempC + celsiusAbbr);
console.log(tempF + fahrenheitAbbr);
console.log(humidity + "% humidity");

// ==========

const selection = 'bright';

const palettes = {
  bright: ['yellowgreen', 'fuchsia'],
  neutral: ['burlywood', 'slategray'],
  chill: ['slateblue', 'palevioletred'],
};

// const selectedColors = eval('palettes.' + selection);
// console.log('Color 1:', selectedColors[0]);
// console.log('Color 2:', selectedColors[1]);
console.log('Color 1:', palettes[selection][0]);
console.log('Color 2:', palettes[selection][1]);
// setTimeout(
//   "document.querySelector('body').classList.add(selection);",
//   2000
// );
setTimeout(() => {
  document.querySelector('body').classList.add(selection);
}, 2000);

// ==========

const responses = {
  selection: false,
  code: "90046",
};

console.log(responses.selection === 0);
console.log(responses.code === 90046);

// ==========

// let a;
const r = 10;

// with (Math) {
//   a = PI * pow(r, 2);
// }

const a = Math.PI * Math.pow(r, 2);

console.log(a);

// ==========

let guess = 28;

// console.log(guess++);
// console.log(++guess);
// console.log(guess);

console.log(guess);
guess += 1;
guess += 1;
console.log(guess);
console.log(guess);
