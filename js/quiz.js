(function() {
  var questions = [{
    question: "What is 5 * 2?",
    choices: [2, 5, 10],
    correctAnswer: 2
  }, {
    question: "What is 6 * 3?",
    choices: [3, 6, 18],
    correctAnswer: 2
  }, {
    question: "What is 10 * 12?",
    choices: [120, 99, 108],
    correctAnswer: 0
  }];
  
  var question_increase = 0; //question number
  var array_of_questionSelection = []; //user choice array
  var quiz = $('#quiz');
  
  // Display first question
  next_question();
  
  // Click event for the next button
  $('#next').on('click', function (e) {
    e.preventDefault();
      debugger;
    choice_of_answer();
    
    if (isNaN(array_of_questionSelection[question_increase])) {
      alert('Please make a selection!');
    } else {
      question_increase++;
      next_question();
    }
  });
  
  
//  create question and answers
  function createQuestionElement(index) {
    var question_element = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    question_element.append(header);
    
    var question = $('<p>').append(questions[index].question);
    question_element.append(question);
    
    var radioButtons = create_radioButton(index);
    question_element.append(radioButtons);
    
    return question_element;
  }
  
  // create radio button
  function create_radioButton(index) {
    var radioButton_List = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioButton_List.append(item);
    }
    return radioButton_List;
  }
  
  // Reads the user selection and pushes the value to an array
  function choice_of_answer() {
    array_of_questionSelection[question_increase] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function next_question() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(question_increase < questions.length){
        var nextQuestion = createQuestionElement(question_increase);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(array_of_questionSelection[question_increase]))) {
          $('input[value='+array_of_questionSelection[question_increase]+']').prop('checked', true);
        }
        $('#next').show();
      }else {
        var score_count = print_score();
        quiz.append(score_count).fadeIn();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function print_score() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < array_of_questionSelection.length; i++) {
        console.log(array_of_questionSelection);
      if (array_of_questionSelection[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
  
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();