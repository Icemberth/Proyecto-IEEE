var ieee = {};
ieee.core = {};
ieee.facebook = {};
ieee.helpers = {};


ieee = {
    init: function(){// FUNCTION INIT
        //'use strict';
        $.fn.extend({//funcion animaciones principales AnimateCSS.
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
    },//END INIT
    helpers: {
      response : "test"
    }
}
ieee.core = {
  redirect : function(URL){
    document.location = URL;
  },
  post : function(path, params, method) {
      method = method || "post"; // Set method to post by default if not specified.

      // The rest of this code assumes you are not using a library.
      // It can be made less wordy if you use one.
      var form = document.createElement("form");
      form.setAttribute("method", method);
      form.setAttribute("action", path);

      for(var key in params) {
          if(params.hasOwnProperty(key)) {
              var hiddenField = document.createElement("input");
              hiddenField.setAttribute("type", "hidden");
              hiddenField.setAttribute("name", key);
              hiddenField.setAttribute("value", params[key]);

              form.appendChild(hiddenField);
           }
      }
      document.body.appendChild(form);
      form.submit();
  }
}
ieee.facebook = {
    init : function(){
        hello.init({
            facebook : '120738061816015'
        });
    },
    response : function(){
        var online = function(session) {
            var currentTime = (new Date()).getTime() / 1000;
            return session && session.access_token && session.expires > currentTime;
        };
        var fb = hello('facebook').getAuthResponse();
        return online(fb);
    },
    login : function(){
        hello('facebook').login({scope: 'public_profile, email, friends'}).then(function() {
            //return console.log('You are signed in to Facebook');
            //document.location = "/home" ;
        }, function(e) {
            console.log('Signin error: ',e.error.message);
        });

    },
    me : function(callback){
        hello('facebook').api('me').then(function(fbJson) {
          ieee.helpers.response = fbJson;
          callback(fbJson);
        }, function(e) {
          ieee.helpers.response = e.error.message;
          callback(e.error.message);
        });
    }
};
