/**
 * Created by LilDragon on 11/6/14.
 */
var read_Question=function(Question) {

    }
;
//Scoping variable _Questions will stop any clash/overcrowding with window properties

var _Questions = {
    _Questions_created: true,
};

//_Total_Score global variable
var _Total_Score = 0;

//Choice picked global
var _Choice_selected = "";

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
    for (var i=0; i<number_of_answers; i++) {
        this['choice'+i] = [i,"nigger",0,"","You a dumb bitch"];
    }
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

