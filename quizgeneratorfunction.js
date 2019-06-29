var myQuestions = [
    {
        question: '<div><b><span class="vs_normaltext">01.	Rs.792 is to be divided among A,B,C in the ratio of 2:4:5. How much will C get more than B:-</span></b>',
        answers: {
            a: '<div id="LANS.1.0"><label><input name="ANS.1" type="radio" value="A" class="chkbox">(A) 0</label></div>',
            b: '<div id="LANS.1.1"><label><input name="ANS.1" type="radio" value="B" class="chkbox">(B) 0</label></div>',
            c: '<div id="LANS.1.2"><label><input name="ANS.1" type="radio" value="C" class="chkbox">(C) 0</label></div>',
            d: '<div id="LANS.1.3"><label><input name="ANS.1" type="radio" value="D" class="chkbox">(D) 1</label></div>',
            e: '<input name="Q" type="hidden" value="1"><input name="CANS.1" type="hidden" value="D"></div>'
        }   
    },
    {
        question: '<div><b><span class="vs_normaltext">02.  If income of A,B and C is in the ratio of 2:9:11 and income of B is Rs. 280 more than that of A, find the income of C.</span></b>',
        answers: {
            a: '<div id="LANS.2.0"><label><input name="ANS.2" type="radio" value="A" class="chkbox">(A) 0</label></div>',
            b: '<div id="LANS.2.1"><label><input name="ANS.2" type="radio" value="B" class="chkbox">(B) 0</label></div>',
            c: '<div id="LANS.2.2"><label><input name="ANS.2" type="radio" value="C" class="chkbox">(C) 0</label></div>',
            d: '<div id="LANS.2.3"><label><input name="ANS.2" type="radio" value="D" class="chkbox">(D) 1</label></div>',
            e: '<input name="Q" type="hidden" value="2"><input name="CANS.2" type="hidden" value="D"></div>'
        }   
    }

];

var quizContainer = document.getElementById('quiz');


showQuestions(myQuestions, quizContainer);



    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
        var len=questions.length;
        var already_gen_random = []; //resetting the already generated random number list
        var number_exist = false; //To be set true if the random generated number exist in the already_gen_random list

        // for each question...
        for(var i=0; i<len; i++){
            var condition = true;
            while(condition){
            temp=Math.floor(Math.random() * len);
            number_exist = false;
            for(var j=0; j<already_gen_random.length; j++){
                if (already_gen_random[j] == temp) {
                    number_exist = true;
                    break;
                };
            }
            if (!number_exist) {
            already_gen_random.push(temp);
            condition = false;
            }
            

        }
            // first reset the list of answers
            answers = [];

            // for each available answer...
            //index=0;
            var already_gen_random1 = []; //resetting the already generated random number list
            var number_exist1 = false; //To be set true if the random generated number exist in the already_gen_random list
            for(letter in questions[temp].answers){

            var condition1 = true;
            while(condition1){
            index=Math.floor(Math.random() * 5);
            number_exist1 = false;
            for(var j1=0; j1<already_gen_random1.length; j1++){
                if (already_gen_random1[j1] == index) {
                    number_exist1 = true;
                    break;
                };
            }
            if (!number_exist1) {
            already_gen_random1.push(index);
            condition1 = false;
            }
            

            }

                // ...add an html radio button
                answers[index] = questions[temp].answers[letter];
                //index++;
            }

            // add this question and its answers to the output
            output.push(questions[temp].question + answers.join('') + '</div>');
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


