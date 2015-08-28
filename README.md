cp-omen
=======

Install
-------

`npm install cp-omen`

Usage
-----

`cp(source, destination)`

```javascript
var cp = require('cp-omen');

cp('file.js', 'file_copy.js')
.then(function(destination){
    console.log('done');
}, function(e){
    console.log(e);
});
```

About
-----

cp-omen only copies one file. **It is not recursive, does not copy directories, or create directories.**
