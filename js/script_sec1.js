
/* navigation and section 1 */

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/* jquery-drawsvg pluggin for section one*/

var $svg = $('svg').drawsvg();
$svg.drawsvg('animate');

/* letter shuffling for the brown sugar bee heading at Section 1 */

(function($){

  $.fn.shuffleLetters = function(prop){

      var options = $.extend({
          "step"  : 8,    // How many times should the letters be changed
          "fps"   : 10,   // Frames Per Second
          "text"  : ""    // Use this text instead of the contents
      },prop)

      return this.each(function(){

          var el = $(this),
              str = "";

          if(options.text) {
              str = options.text.split('');
          }
          else {
              str = el.text().split('');
          }

          // The types array holds the type for each character;
          // Letters holds the positions of non-space characters;

          var types = [],
              letters = [];

          // Looping through all the chars of the string

          for(var i=0;i<str.length;i++){

              var ch = str[i];

              if(ch == " "){
                  types[i] = "space";
                  continue;
              }
              else if(/[a-z]/.test(ch)){
                  types[i] = "lowerLetter";
              }
              else if(/[A-Z]/.test(ch)){
                  types[i] = "upperLetter";
              }
              else {
                  types[i] = "symbol";
              }

              letters.push(i);
          }

          el.html("");


          (function shuffle(start){

              // This code is run options.fps times per second
              // and updates the contents of the page element

              var i,
                  len = letters.length,
                  strCopy = str.slice(0); // Fresh copy of the string

              if(start>len){
                  return;
              }

              // All the work gets done here
              for(i=Math.max(start,0); i < len; i++){

                  // The start argument and options.step limit
                  // the characters we will be working on at once

                  if( i < start+options.step){
                      // Generate a random character at this position
                      strCopy[letters[i]] = randomChar(types[letters[i]]);
                  }
                  else {
                      strCopy[letters[i]] = "";
                  }
              }

              el.text(strCopy.join(""));

              setTimeout(function(){

                  shuffle(start+1);

              },1000/options.fps);

          })(-options.step);

      });
  };

    // A helper function
function randomChar(type){
      var pool = "";

     if (type == "lowerLetter"){
       pool = "abcdefghijklmnopqrstuvwxyz0123456789";
     }
     else if (type == "upperLetter"){
       pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     }
     else if (type == "symbol"){
      pool = ",.?/\\(^)![]{}*&^%$#'\"";
    }

     var arr = pool.split('');
     return arr[Math.floor(Math.random()*arr.length)];
    }

})(jQuery);

$(function(){

    var container = $(".topic-sec1")
        userText = $('#userText');

    // Shuffle the contents of container
    container.shuffleLetters();

    // Bind events
    userText.click(function () {

      userText.val("");

    }).bind('keypress',function(e){

        if(e.keyCode == 13){

            // The return key was pressed

            container.shuffleLetters({
                "text": userText.val()
            });

            userText.val("");
        }

    }).hide();

});
