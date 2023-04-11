/*

ES6 Test

*/

console.log('\n== ES6 Test ==\n\n')

import Surfy from '../src/surfy.mjs';

import conf from '../conf.json' assert { type: 'json' };
const surfy = new Surfy(conf);
console.log(surfy)

let options, result;

/*

Check Translate

*/

options = {
	source: {
		'lang': 'en',
		'text': 'Hello Surfy!'
	},
	target: {
		'lang': 'fr'
	}
};

result = await surfy.words.translate(options);
console.log('Translate:', result);

/*

Language Pairs

*/

result = await surfy.words.translate.languages();
console.log('Languages:', result);

/*

Geo IP

*/

result = await surfy.geo.ip('8.8.8.8');
console.log('Geo IP:', result);
