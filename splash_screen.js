$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

var SplashScreen = function(c){

    this.id = c.id;
    this.outTime = c.outTime;
    this.anime = c.anime;
}

SplashScreen.prototype.init = function(){

    setTimeout(remove_splash.bind(undefined,{id:this.id,anime:this.anime}),this.outTime);

    function remove_splash(c){
        $("#"+c.id).animateCss(c.anime,function(){
            $("#"+c.id).remove();
        });
        $("body").css("position","static")
    }

}