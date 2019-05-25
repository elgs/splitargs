splitargs
==========
Splits strings into tokens by given separator except treating quoted part as a single token.

#Installation
`npm install splitargs`

#Usage
```javascript
var splitargs = require('splitargs');

var i1 = "I said 'I am sorry.', and he said \"it doesn't matter.\"";
var o1 = splitargs(i1);
console.log(o1);
/*
[ 'I',
  'said',
  'I am sorry.,',
  'and',
  'he',
  'said',
  'it doesn\'t matter.' ]
*/

var i2 = "I said \"I am sorry.\", and he said \"it doesn't matter.\"";
var o2 = splitargs(i2);
console.log(o2);
/*
[ 'I',
  'said',
  'I am sorry.,',
  'and',
  'he',
  'said',
  'it doesn\'t matter.' ]
*/

var i3 = 'I said "I am sorry.", and he said "it doesn\'t matter."';
var o3 = splitargs(i3);
console.log(o3);
/*
[ 'I',
  'said',
  'I am sorry.,',
  'and',
  'he',
  'said',
  'it doesn\'t matter.' ]
*/

var i4 = 'I said \'I am sorry.\', and he said "it doesn\'t matter."';
var o4 = splitargs(i4);
console.log(o4);
/*
[ 'I',
  'said',
  'I am sorry.,',
  'and',
  'he',
  'said',
  'it doesn\'t matter.' ]
*/

var i5 = 'I\\ said\\ it\\ matters.';
var o5 = splitargs(i5);
console.log(o5);
/*
[ 'I said it matters.' ]
*/

var i6 = 'What\\\'s the matter?';
var o6 = splitargs(i6);
console.log(o6);
/*
[ 'What\'s', 
  'the', 
  'matter?'
]
*/

```
