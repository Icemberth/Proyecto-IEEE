var ieee = {};
ieee.core = {};
ieee.core.index = {};
ieee.facebook = {};

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
    }//END INIT
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
            document.location = "/home" ;
        }, function(e) {
            console.log('Signin error: ',e.error.message);
        });

    }
};
