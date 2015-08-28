var fs = require('fs'),
    Promise = require('es6-promise').Promise;

module.exports = function(src, dest){


    return new Promise(function(resolve, reject){

        fs.exists(src, function(exists){

            if(!exists)
                reject(new Error('cp-omen error: '+src+' does not exist.'));
            
            fs.lstat(src, function(err, stats){
                if(err)
                    return reject(new Error('cp-omen error: '+err.message));

                if(!stats.isFile())
                    return reject(new TypeError('cp-omen error: First argument is not a file.'));

                var w = fs.createReadStream(src),
                    r = fs.createWriteStream(dest);

                w.on('error', function(err){
                    reject(new Error('cp-omen error: '+err.message));
                })
                .pipe(r).on('error', function(err){
                    reject(new Error('cp-omen error: '+err.message));
                })
                .on('finish', function(){
                    resolve(dest);
                });
            });
        });
    });
};
