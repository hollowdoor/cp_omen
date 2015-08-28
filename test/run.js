var cp = require('../index.js');

cp('file.js', 'dest/file_copy.js')
.then(function(){
    console.log('done');
}, function(e){
    console.log(e);
});
