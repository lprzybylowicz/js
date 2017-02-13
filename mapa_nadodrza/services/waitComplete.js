myApp.service('waitComplete', function() {

    var self = this;
    
    this.loading = function(on) {
        if(on) {
            console.log('waitComplete');
            self.waitCompleteImg = 'img/wait.gif';
            self.waitCompleteIf = true;
            self.waitCompleteClass = '';
        }
        else if(!on) {
            self.waitCompleteImg = 'img/done.gif';
            self.waitCompleteIf = false;
            self.waitCompleteClass = 'opacityClass';
        }
    };
    this.waitCompleteClass = '';
    this.waitCompleteImg = 'img/wait.gif';
    this.waitCompleteIf = false;
    
});