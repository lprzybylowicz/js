
myApp.controller('mapController', ['$scope', '$http', '$timeout', '$log', 'commentsServ', 'cfpLoadingBar', 'navigationServ', 'getUtcServ', function ($scope, $http, $timeout, $log, commentsServ, cfpLoadingBar, navigationServ, getUtcServ) {
    
    $scope.start = function() {
      cfpLoadingBar.start();
    };

    $scope.complete = function () {
      cfpLoadingBar.complete();
    }
    
    $scope.getUtcServ = getUtcServ;
    $scope.commentsServ = commentsServ;

    //thanks to function below, the getData fires afters the page loads
    angular.element(window.document.body).ready(function () {
        $scope.getData();
//        $scope.musicCtrl.soundBG.load();
//        $scope.musicCtrl.soundBG.play();
    });

    $scope.getData = function() {

        $http.get('https://mapanadodrza.firebaseio.com/emocje.json')
            .success(function(result) {

                $scope.firebase = result;   
                console.log(result);                    
                console.log("getData SUCCESS");
            })
            .error(function (data) {
                console.log(data); 
            })
    };

    $scope.musicCtrl = {
//        soundBG: new Audio("soundBG.ogg"),
        speaker: 'img/speaker_on.png',
        musicOff: false,
        musicToggle: function() {
            if(this.musicOff == false) {
                soundBG.pause();   
                this.musicOff = true;
                this.speaker = 'img/speaker_off.png'
            }
            else if(this.musicOff == true) {
                soundBG.play();   
                this.musicOff = false;
                this.speaker = 'img/speaker_on.png'
            }
        }    
    }
    
   
    
    $scope.getIframeSrc = function(src) {
        if(src) {
        return 'https://www.youtube.com/embed/' + src;
        }
    }
    
    
    $scope.menuObj = {
        menuClicked: '',
        menuClickedProjekt: '',
        menuClickedMecenat: '',
        menuClickedKontakt: '',
        tkcLink: 'http://kulturaczynna.pl'
    }
    
    $scope.clicked = '';
    $scope.clickedLarge = 'false';
    $scope.activePage = {
        page: 0
    };
    
    ///NAVIGATION//
    
    $scope.navigationServ = navigationServ;
    
    document.getElementsByClassName('menuFlag').onclick = navigationServ.reset();

    arrow_up.onmouseover =  function() {navigationServ.moving('top'); this.style.opacity = 0.9};
    arrow_up.onmouseout =  function() {clearInterval(navigationServ.move); this.style.opacity = 0.5};

    arrow_down.onmouseover =  function() {navigationServ.moving('down'); this.style.opacity = 0.9};
    arrow_down.onmouseout =  function() {clearInterval(navigationServ.move); this.style.opacity = 0.5};

    arrow_left.onmouseover =  function() {navigationServ.moving('left'); this.style.opacity = 0.9};
    arrow_left.onmouseout =  function() {clearInterval(navigationServ.move); this.style.opacity = 0.5};

    arrow_right.onmouseover =  function() {navigationServ.moving('right'); this.style.opacity = 0.9};
    arrow_right.onmouseout =  function() {clearInterval(navigationServ.move); this.style.opacity = 0.5};

    
}]);
