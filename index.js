  function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
//1
let count = 0;
        (function () {
          if (count === 0) {
            let count = 1;
            console.log(count); 
          }
          console.log(count); 
        })();
//2
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); 
    }, 1000);
  }
  //3
  function calculateArea(length) {
    function calculateBreadthArea(breadth) {
      return length * breadth;
    }
  
    return calculateBreadthArea;
  }
  
  var rectangleArea = calculateArea(5); 
  var area = rectangleArea(8); 
  
  console.log(area); 
//4
function counter() {
    var count = 0; 
  
    function increaseCounter() {
      count++;
      console.log("Counter increased! Current count: " + count);
    }
  
    function resetCounter() {
      count = 0; 
      console.log("Counter reset!");
    }
  
    return {
      increment: increaseCounter,
      reset: resetCounter
    };
  }
  
  var myCounter = counter(); 
  
  myCounter.increment(); 
  myCounter.increment(); 
  myCounter.reset(); 
  myCounter.increment(); 
  //5
  var a = 12;
        (function () {
          alert(a);
        })();
        //6
        var a = 10;
        var x = (function () {
          var a = 12;
          return function () {
            alert(a);
          };
        })();
        x();
        //7
        var globalVar = "xyz";

        (function outerFunc(outerArg) {
            var outerVar = 'a';
            
            (function innerFunc(innerArg) {
            var innerVar = 'b';
            
            console.log(
                "outerArg = " + outerArg + "\n" +
                "innerArg = " + innerArg + "\n" +
                "outerVar = " + outerVar + "\n" +
                "innerVar = " + innerVar + "\n" +
                "globalVar = " + globalVar);
            
            })(456);
        })(123);
        //8