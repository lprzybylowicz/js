//////////////DATABASE//////////////

myApp.directive("listResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/listresult.html',
       replace: true,
       scope: {
           emocjeFirebase: "=",
           delImg: "&",
           capImg: "&",
           ctrlCaptionPl: "@",
           ctrlCaptionEng: "@",
           ctrlCaptionDe: "@",
           fileNameArr: "=",
           uploadTask: "&",
           coorsPlacehldr: "&",
           coorsBtn: "@",
           pointItChange: "&",
           coorsTmp: "@",
           mapTgl2Func: "&",
           mapTgl2: "@",
           coorsChng: "@",
           tempDtK: "@",
           commentAction: "&",
           ctrlYoutube: "@",
           uploadYT: "&"
       }
   }
});

//////////////POLISH//////////////

myApp.directive("emocjaContent", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/emocjacontent.html',
       replace: true,
       scope: {
           emocjeFirebase: "="
       }
   }
});

myApp.directive("galeriaContent", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/galeriacontent.html',
       replace: true,
       scope: {
           emocjeFirebase: "=",
           clickedLarge: '@',
           activePage: '=',
           commentText: "@",
           commentAuth: "@",
           sendComment: "&",
           utc: "&",
           loading: "&"
       }
   }
});

myApp.directive("komentContent", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/komentcontent.html',
       replace: true,
       scope: {
           emocjeFirebase: "="
       }
   }
});

myApp.directive("menuProjekt", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/menuprojekt.html',
       replace: true,
       scope: {
           
       }
   }
});

myApp.directive("menuMecenat", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/menumecenat.html',
       replace: true,
       scope: {
           
       }
   }
});

myApp.directive("menuKontakt", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/menukontakt.html',
       replace: true,
       scope: {
           
       }
   }
});

//angular pobably doesn`t support on-change bindnig, so there is a custom workaround
myApp.directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
        var onChangeFunc = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeFunc);
    }
  };
});

//////////////ENGLISH//////////////

myApp.directive("emocjaContentEng", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/emocjacontenteng.html',
       replace: true,
       scope: {
           emocjeFirebase: "="
       }
   }
});

myApp.directive("galeriaContentEng", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/galeriacontenteng.html',
       replace: true,
       scope: {
           emocjeFirebase: "=",
           clickedLarge: '@',
           activePage: '=',
           commentText: "@",
           commentAuth: "@",
           sendComment: "&",
           utc: "&",
           loading: "&"
       }
   }
});

myApp.directive("komentContentEng", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/komentcontenteng.html',
       replace: true,
       scope: {
           emocjeFirebase: "="
       }
   }
});

myApp.directive("menuProjektEng", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/menuprojekteng.html',
       replace: true,
       scope: {
           
       }
   }
});

myApp.directive("menuMecenatEng", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/menumecenateng.html',
       replace: true,
       scope: {
           
       }
   }
});

myApp.directive("menuKontaktEng", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/menukontakteng.html',
       replace: true,
       scope: {
           
       }
   }
});

//////////////GERMAN//////////////

myApp.directive("emocjaContentDe", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/emocjacontentde.html',
       replace: true,
       scope: {
           emocjeFirebase: "="
       }
   }
});

myApp.directive("galeriaContentDe", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/galeriacontentde.html',
       replace: true,
       scope: {
           emocjeFirebase: "=",
           clickedLarge: '@',
           activePage: '=',
           commentText: "@",
           commentAuth: "@",
           sendComment: "&",
           utc: "&",
           loading: "&"
       }
   }
});

myApp.directive("komentContentDe", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/komentcontentde.html',
       replace: true,
       scope: {
           emocjeFirebase: "="
       }
   }
});

myApp.directive("menuProjektDe", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/menuprojektde.html',
       replace: true,
       scope: {
           
       }
   }
});

myApp.directive("menuMecenatDe", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/menumecenatde.html',
       replace: true,
       scope: {
           
       }
   }
});

myApp.directive("menuKontaktDe", function() {
   return {
       restrict: 'AE',
       templateUrl: 'directives/menukontaktde.html',
       replace: true,
       scope: {
           
       }
   }
});