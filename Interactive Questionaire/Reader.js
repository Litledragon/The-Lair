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
var _QuestionNumber= 1;

// Also need a variable to show the end
var end = false;

// next Question Temporary, Input first question here
var _nextQuestion = 'Question_1';

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
    _Questions[obj]['choice'+_Questions[obj].number_of_choices]=[_Questions[obj].number_of_choices,text,score,link,_remark];
    _Questions[obj].number_of_choices = _Questions[obj].number_of_choices+1;

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


// Answer Question, here is the meat of the thing
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

var return_Question_NumberofChoices=function(Question){
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

//Create Question, adds a question and its choices into the main html
var _Create_HTML_Question = function () {
    var area = document.createElement("div");
    var node = document.createTextNode("");
    area.appendChild(node);
    area.className="QuestionArea";
    area.id="Question"+_QuestionNumber;
    var element = document.getElementById("main");
    element.appendChild(area);
    var thingy = document.createElement("div");
    var addtothingy = document.createTextNode(_QuestionNumber+". "+return_Question_as_String(_nextQuestion));
    thingy.appendChild(addtothingy);
    thingy.className = "Question";
    thingy.id = return_Question(_nextQuestion);
    area.appendChild(thingy);
    for (var i=1;i<return_Question_NumberofChoices(_nextQuestion);i++) {
        var added = document.createElement("div");
        var add = document.createTextNode(i+". "+return_text_Choice_Number(_nextQuestion, i));
        added.appendChild(add);
        added.className = "Choice";
        added.id = "Choice"+i+"_of_" + _QuestionNumber;
        area.appendChild(added);
    }
};

var _Create_HTML_Remark = function() {
    var area = document.createElement("div");
    var node = document.createTextNode(return_remark_Choice_Number(_nextQuestion,_Choice_selected));
    area.appendChild(node);
    area.className="Choice";
    area.id="Remark"+_QuestionNumber;
    var element = document.getElementById("main");
    element.appendChild(area);
};


var _Create_HTML_End = function() {
    var area = document.createElement("div");
    var node = document.createTextNode(_Total_Score);
    area.appendChild(node);
    area.className="Score";
    area.id="FinalScore"+_QuestionNumber;
    var element = document.getElementById("main");
    element.appendChild(area);
};
/* test */

//deleted for profanity

// Actual test Questions below

//Question 1
add_Question("Question_1","Test Question 1");
add_Choice("Question_1","Link to Question 1",1,"Question_1","Question 1 going to 1");
add_Choice("Question_1","Link to Question 2",2,"Question_2","Question 1 going to 2");
add_Choice("Question_1","Link to Question 3",3,"Question_3","Question 1 going to 3");
add_Choice("Question_1","Link to Question 4",4,"Question_4","Question 1 going to 4");
add_Choice("Question_1","end",-100000000,"Question 2","Goodbye");
//Question 2
add_Question("Question_2","Test Question 2");

add_Choice("Question_2","Link to Question 1",1,"Question_1","Question 2 going to 1");
add_Choice("Question_2","Link to Question 2",2,"Question_2","Question 2 going to 2");
add_Choice("Question_2","Link to Question 3",3,"Question_3","Question 2 going to 3");
add_Choice("Question_2","Link to Question 4",4,"Question_4","Question 2 going to 4");
add_Choice("Question_2","end",-100000000,"Question 2","Goodbye");

//Question 3
add_Question("Question_3","Test Question 3");
add_Choice("Question_3","Link to Question 1",1,"Question_1","Question 3 going to 1");
add_Choice("Question_3","Link to Question 2",2,"Question_2","Question 3 going to 2");
add_Choice("Question_3","Link to Question 3",3,"Question_3","Question 3 going to 3");
add_Choice("Question_3","Link to Question 4",4,"Question_4","Question 3 going to 4");
add_Choice("Question_3","end",-100000000,"Question 2","Goodbye");

//Question 4
add_Question("Question_4","Test Question 4");
add_Choice("Question_4","Link to Question 1",1,"Question_1","Question 4 going to 1");
add_Choice("Question_4","Link to Question 2",2,"Question_2","Question 4 going to 2");
add_Choice("Question_4","Link to Question 3",3,"Question_3","Question 4 going to 3");
add_Choice("Question_4","Link to Question 4",4,"Question_4","Question 4 going to 4");
add_Choice("Question_4","end",-100000000,"Question 2","Goodbye");

// Okay thats all folks!
add_Question("Question 1","Test Question 1");

document.getElementById('Button').onclick = function() {
    _Create_HTML_Question();
};

document.getElementById('update').onclick = function() {
    _nextQuestion = document.getElementById('nextone').value;
};
document.getElementById('choosechoice').onclick = function() {
    _Choice_selected = document.getElementById('choicenumber').value;
    _Create_HTML_Remark();

    _Total_Score+=return_score_Choice_Number(_nextQuestion,_Choice_selected);

    if (return_link_Choice_Number(_nextQuestion,_Choice_selected) === false ){
        alert("end");
        //_Create_HTML_End();
    }
    else {
        _nextQuestion=return_link_Choice_Number(_nextQuestion,_Choice_selected);
        _QuestionNumber++;
        _Create_HTML_Question();
    }
};

//Start:
_Create_HTML_Question();