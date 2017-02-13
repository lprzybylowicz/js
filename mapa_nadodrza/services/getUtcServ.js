myApp.service('getUtcServ', [function() {

    this.utc = function(){
        return new Date().toJSON().slice(0,16).split('T').join(', ');    
    }
    
}]) ;