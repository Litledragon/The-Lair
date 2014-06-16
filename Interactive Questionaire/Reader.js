/**
 * Created by LilDragon on 11/6/14.
 */
var read_Question=function(Question) {

    }
;
//Scoping variable _Questions will stop any clash/overcrowding with window properties

var _Questions = {
    flag: "I work alright!",
};

//check

console.log(_Questions);

// Each question_text object is structured like below.
// They will all have a "question_text"
// a record in the number of choices
// and choices
// which are arrays containing [choice number, choice text, score, link to another question]
// the _Question 's name is recorded as .signature
function _Question (question_text,number_of_answers,_signature) {
    this.signature=_signature;
    this.question_text= question_text;
    this.number_of_choices=number_of_answers;
    for (var i=0; i<number_of_answers; i++) {
        this['choice'+i] = [i,"nigger",0,""];
    }
}

//quickread is a debugging function that will list everything in a question_text
var quickread=function (obj) {
    console.log (obj);
};

// add_Choice will increase the number_of_choices by 1 and also assign that choice with the parameters
var add_Choice = function (obj,text,score,link) {
    obj['choice'+obj.number_of_choices]=[obj.number_of_choices,text,score,link];
    obj.number_of_choices = obj.number_of_choices+1;

};

var add_Question;
add_Question = function (question_Signature, added_Question_Text) {
    _Questions[question_Signature] = new _Question(added_Question_Text, 1,question_Signature);
    quickread(_Questions[question_Signature]);
};

/* test */

add_Question('niggers','yeahhhhhh bruhhhhh');

add_Question('fuck','get money');

add_Choice(_Questions.fuck,'eat shit lol',0,false);

quickread(_Questions.niggers);