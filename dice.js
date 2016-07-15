var sceneCSS = {
  "transform-style":"preserve-3d",
  "animation-name": "boxRoll",
  "animation-duration": "2s",
  // "animation-iteration-count": "infinite"
};

var reset = {
  "transform-style":"",
  "animation-name": "",
  "animation-duration": ""
}


      $("#StartA").on("click", function()
        { $(".scene .cube").css(sceneCSS); }
      );

      $("#StartB").on("click", function() //Stops StartA from working after pressed ...
        {
          $(".scene .cube").toggleClass("sceneCSS",100);
          $("#StartB").toggleClass();//Change HTML Button Name?
        });


      $("#Reset").on("click", function(){
        $(".scene .cube").css(reset);
        $("input[id=radio-front]").prop("checked",true);
        document.getElementById("currentFace").innerHTML="";
      });


      $("#Random").on("click", function(){
        var randomNum = Math.floor(Math.random() * 6) + 1; //Returns 1-6
        var printRandom = document.getElementById("Entry").innerHTML=randomNum;
          return printRandom;
        });

      $("#randomFace").on("click", function(){
        var randomNum = Math.floor(Math.random() * 6) + 1; //Returns 1-6
        console.log(randomNum);
        if (randomNum === 1)
        {$("input[id=radio-front]").prop("checked",true);
        document.getElementById("currentFace").innerHTML="Front";
        }

        else if (randomNum === 2)
        {$("input[id=radio-back]").prop("checked",true);
        document.getElementById("currentFace").innerHTML="Back";
        }

        else if (randomNum === 3)
        {$("input[id=radio-left]").prop("checked",true);
        document.getElementById("currentFace").innerHTML="Left";
        }

        else if (randomNum === 4)
        {$("input[id=radio-right]").prop("checked",true);
        document.getElementById("currentFace").innerHTML="Right";
        }

        else if (randomNum === 5)
        {$("input[id=radio-top]").prop("checked",true);
        document.getElementById("currentFace").innerHTML="Top";
        }

        else if (randomNum === 6)
        {$("input[id=radio-bottom]").prop("checked",true);
        document.getElementById("currentFace").innerHTML="Bottom";
        }
      });
