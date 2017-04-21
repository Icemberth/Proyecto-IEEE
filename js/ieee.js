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
            facebook : '808885595815802'
        });
    },
    response : function(){
        return hello("facebook").getAuthResponse();
    },
    login : function(){
        hello('facebook').login().then(function() {
            return console.log('You are signed in to Facebook');
        }, function(e) {
            console.log('Signin error: ',e.error.message);
        });

    }
};
