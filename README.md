# covariance
In probability theory and statistics, covariance is a measure of how much two random variables change together.  
http://en.wikipedia.org/wiki/Covariance

# example

```
var covariance = require('covariance');
var a = [1, 3, 2, 5, 8, 7, 12, 2, 4];
var b = [8, 6, 9, 4, 3, 3,  2, 7, 7];

var result = covariance(a, b);

console.log('The covariance is:', result);
```

# license

MIT
