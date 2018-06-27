$(document).ready(function(){
  $('.tabs .tab-link').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tabs .tab-link').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

 $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });




$(document).ready(function() {
  
  var mainMath = "0";
  var history = "0";
  var finalset = "";
  var prevKey = "";
  var historyarray = [];
  var equalPressed = false;
  update();
  
  $("button").click(function(){
    calculate($(this).attr("value"));
  });
  
  function calculate(keyitem) {
    console.log("buttonpress: " + keyitem);
    historyarray.push(keyitem);
    console.log("buttonpressHistoryArray: " + historyarray);
    switch(keyitem) {
      case "clear":
        clearScreen();
        break;
      case "%":
        percentageScreen();
        break;
      case "/":
      case "*":
      case "+":
      case "-":
        addOperator(keyitem);
        break;
      case "plusminus":
        plusminusScreen();
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        addNumber(keyitem);
        break;
      case ".":
        addDecimal(keyitem);
        break;
      case "=":
        solveEqual(keyitem);
        break;
    }
    update();
    };
 
  function clearScreen() {
    mainMath = "0";
    history = "0";
    historyarray = [];
    equalPressed = false;
    if(mainMath.length > 0){
      $(".entry").css("font-size", "4em");
    }
    console.log("clearMain: " + mainMath);
    console.log("clearSub: " + history);
  };
  
  function plusminusScreen() {
     mainMath = -1 * mainMath;
    finalset = mainMath;
    console.log("plusminusMain: " + mainMath);
    console.log("plusminusFinal: " + finalset);
  };
  
  function addNumber(keyitem) {
      if (mainMath == "0" /*&& ["/", "*", "+", "-"].indexOf(keyitem) == -1*/){
        mainMath = keyitem;
        finalset = mainMath;
        return;
        console.log("addedMainZero: " + mainMath);
        console.log("addedFinalZero: " + finalset);
      } else //sif (keyitem == "0") 
      
      {
       // mainMath+=keyitem;
      }
    mainMath+=keyitem;
    finalset = mainMath;
    
    console.log("addedMain: " + mainMath);
    console.log("addedFinalset: " + finalset);
    
    if(mainMath.length > 8){
      $(".entry").css("font-size", "1.5em");
    }
  };
  
  function isOperator(char) {
    return ["/", "*", "+", "-"].indexOf(char) > -1;
  }
  
  function addOperator(keyitem){
    console.log("addOpHistoryArray: " + historyarray);
    // if we already have an operation as the last keyitem typed
    if (isOperator(historyarray[historyarray.length-2]) ) {
      historyarray[historyarray.length-2] = keyitem;
       //history = history.substring(0, history.length-2)+keyitem;
       console.log("last key was an operator");
    // return;
    }
    
    //if the first character typed in an operation
    if    (["/", "*", "+", "-"].indexOf(historyarray[0]) > -1)   {
      historyarray = [];
      return; 
    }
         
    if (equalPressed == true){
      history = "";
      historyarray = [];
      equalPressed = false;
    }
    console.log("mainMainHistory0check: " + mainMath);
    //addNumber(keyitem);
    mainMath+=keyitem;
    console.log("mainMainHistory0: " + mainMath);
    
    if (isOperator(mainMath)) {
      console.log("mainMainHistoryIfOperatorBefore: " + history);
      history = history.substring(0, history.length-1) + keyitem;
      mainMath = "0";
      console.log("mainMainHistoryIfOperator: " + history);
      console.log("returned");
      return;
    } 
    
    if(history == "0"){
      // history = "";
      history = mainMath;
    } else {
      history += mainMath; 
    }
    
    
    mainMath = "0";
    equalPressed = false;
    console.log("addOpSub: " + history);
    console.log("addOpMain: " + mainMath);
    console.log("equaltrueTest: " + equalPressed);
  };
  
  function addDecimal(keyitem){
    if (mainMath.indexOf(keyitem) === -1){
      if(mainMath == "0") {
        mainMath = "0" + keyitem;
        return;
      }
    } else {
        return;
      }
    mainMath+=keyitem;
    //addNumber(keyitem);
  };
  
  function percentageScreen() {
    mainMath = mainMath / 100;
    return;
  };
  
  function solveEqual(keyitem) {
    history += finalset;
    mainMath = eval(history);
    console.log("solveEqualresult: " + mainMath);
    console.log("solveEqualhistory: " + history);
    var finalresult = mainMath.toString();
    if(finalresult.length > 8){
      $(".entry").css("font-size", "1.5em");
    }
    equalPressed = true;
  };
  
  function update(){
  $("#answer").html(mainMath);
  $("#history").html(history);
};
  
  $("option").click(function bkgdColors(color) {
    $(".wrapper").css("background-color", value);
  });
  
});

/*Problems
1. Need to add several color backgrounds. Default is Orange?
*/

/* Events 
1. add a number
2. add a dot
3. add minus sign to number
4. clear screen
5. perform operators (-,+, /, *)
6. calculate (=)
7. if an equal sign is pressed more than 2 times, add result to last number in operators. Ex. 1.2+2 = 4 then if equal sign is pressed again, add +2(last number in operator) to 4 = 6
8. If someone press an operator after first equation, make the result of the first equation the 1st part in next equation. Ex. if one press 1 +2 = 3 and then press a operator (+), make 
*/

/* Problems
1. Fix the problem when an operator is pressed more then one time. Ex. enter "5" and "+" and then add another "-", it shows "5+0-" when it should be "5+" at first then "5-" afterward.
*/


    
})




