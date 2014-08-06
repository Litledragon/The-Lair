/**
 * Created by LilDragon on 11/6/14.
 */

//Scoping variable _Questions will stop any clash/overcrowding with window properties

var _Questions = {
    _Questions_created: true,
};

//_Total_Score global variable
var _Total_Score = 0;

//Choice picked global
var _Choice_selected = "";

// Need a variable to keep track of the number of questions created. This can track each one answered and therefore keep it on screen...
var QuestionNumber= 0;

// Also need a variable to show the end
var end = false;

// next Question Temporary, Input first question here
var _nextQuestion = 'fuck';

//check

console.log(_Questions);

// Each question_text object is structured like below.
// They will all have a "question_text"
// a record in the number of choices
// and choices
// which are arrays containing [choice number, choice text, score, link to another question,remark]
// the _Question 's name is recorded as .identifier
function _Question (question_text,number_of_answers,_Identifier) {
    this.identifier=_Identifier;
    this.question_text= question_text;
    this.number_of_choices=number_of_answers;
}

//quickread is a debugging function that will list everything in a question_text
var quickread=function (obj) {
    console.log (obj);
};

// add_Choice will increase the number_of_choices by 1 and also assign that choice with the parameters
var add_Choice = function (obj,text,score,link,_remark) {
    obj['choice'+obj.number_of_choices]=[obj.number_of_choices,text,score,link,_remark];
    obj.number_of_choices = obj.number_of_choices+1;

};

// add_Question is a constructor for a normal question, also automatically puts it into _Questions so it doesnt turn into a global

var add_Question;
add_Question = function (question_Signature, added_Question_Text) {
    _Questions[question_Signature] = new _Question(added_Question_Text, 1,question_Signature);
    quickread(_Questions[question_Signature]);
};

var return_Question = function (_signature) {
    return _Questions[_signature];
};


// Answer Question, here is teh meat of the thing
// _Choose_Choice will record the choice given, the score given and the next question if applicable.
// The link will either be "false" or a text that will search for the question with their identifier
// This should also add the score in with the total... which I havnt made oops. Better make it inside this object?
// The array within the Choice is basically recorded into a temporary global that will be used for later

var _Choose_Choice = function (identifier,choice) {
    return _Questions[identifier]['choice'+choice];

};

// The following functions return stuff as strings that are useful
var return_Question_as_String = function(_signature) {
    return _Questions[_signature]['question_text'];
};

var return_Question_NumberofChoices=function(Question,choice){
    return _Questions[Question].number_of_choices;
};

var return_text_Choice_Number=function(Question,choice) {
        return _Questions[Question]['choice'+choice][1];
    };

var return_remark_Choice_Number=function(Question,choice){
    return _Questions[Question]['choice'+choice][4];
};

var return_link_Choice_Number=function(Question,choice){
    return _Questions[Question]['choice'+choice][3];
};

var return_score_Choice_Number=function(Question,choice){
    return _Questions[Question]['choice'+choice][2];
};




// HTML

//Create Question
var _Create_HTML_Question = function () {
    var area = document.createElement("div");
    var node = document.createTextNode("");
    area.appendChild(node);
    area.className="QuestionArea";
    area.id="Question"+QuestionNumber;
    var element = document.getElementById("main");
    element.appendChild(area);
    var thingy = document.createElement("div");
    var addtothingy = document.createTextNode(return_Question_as_String(_nextQuestion));
    thingy.appendChild(addtothingy);
    thingy.className = "Question";
    thingy.id = return_Question(_nextQuestion);
    area.appendChild(thingy);
    for (var i=1;i<20;i++) {
        var added = document.createElement("div");
        var add = document.createTextNode(return_text_Choice_Number(_nextQuestion, i));
        added.appendChild(add);
        added.className = "Choice";
        added.id = "Choice"+i+"_of_" + QuestionNumber;
        area.appendChild(added);
    }
};


/* test */

add_Question('niggers','yeahhhhhh bruhhhhh');

add_Question('fuck','get money');

add_Choice(_Questions.fuck,'eat shit lol',0,false,"You are a piece of shit");

quickread(_Questions.niggers);

add_Choice(_Questions["fuck"],'Noyoucant',0,false,"Crassshh");

add_Choice(_Questions.niggers,'Chiikkeennn',2,false,"go fuck urself");

quickread(_Questions.niggers);
quickread(_Questions.fuck);

console.log(return_Question('fuck'));

console.log(_Choose_Choice('niggers',1));

document.getElementById('Button').onclick = function() {
    _Create_HTML_Question();
};

document.getElementById('update').onclick = function() {
    _nextQuestion = document.getElementById('nextone').value;
};