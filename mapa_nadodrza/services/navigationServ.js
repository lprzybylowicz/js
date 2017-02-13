myApp.service('navigationServ', [function() {
 
    this.positX = -400;
    this.positY = -450;
    this.move = '';
    var self = this;

    this.reset = function() {
        self.positX = -400;
        self.positY = -450;
    }

    this.moving = function(direction) {
        switch(direction) {
            case 'top':
                self.move = setInterval(function() {
                if(self.positY <0) {
                    self.positY += 10;
                    map_container.style.top = self.positY +'px';
                    console.log(self.positY);
                }}, 50);    
            break;

            case 'down':
                self.move = setInterval(function() {
                    if(Math.abs(self.positY) + window.innerHeight < 2141) { //the algorithm allows to see whole map area independently of the screen size. Image will keep on scrolling until the sum of abs value of positionY and browser height will be smaller than the image height (minus 10 px, because the interval is 10px)
                        self.positY -= 10;
                        map_container.style.top = self.positY +'px';
                        console.log(self.positY);
                }}, 50);  
            break;

            case 'left':
                self.move = setInterval(function() {
                    if(self.positX < 0) {
                        self.positX += 10;
                        map_container.style.left = self.positX +'px';
                        console.log(self.positX);
                }}, 50);  
            break;

            case 'right':
                self.move = setInterval(function() {
                    if(Math.abs(self.positX) + window.innerWidth < 2867) {
                        self.positX -= 10;
                        console.log(self.positX);
                        map_container.style.left = self.positX +'px';
                }}, 50);  
            break;
        }
    };

}]);  
 