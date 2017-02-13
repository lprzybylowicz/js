myApp.service('commentsServ', ['$http', function($http) {
 
    var self = this;

    this.commentText = '';
    this.commentAuth = '';
    this.sendComment = function(key, imgIndex, lang, commentIndex, auth, text, active, data){
    
        if(commentIndex==undefined) {
            commentIndex='0';
        }

        $http.patch('https://mapanadodrza.firebaseio.com/emocje/'+key+'/images/'+imgIndex+'/comments_'+lang+'/'+commentIndex+'.json', { 
            data: data,
            autor: auth,
            tresc: text,
            active: active
        })
        .success(function(result){
            console.log('success');
            self.commentText = '';
            self.commentAuth = '';
        })  
        .error(function (data, status) {
            console.log('error');  
        });       
    }

}]);  
  
 
       
 