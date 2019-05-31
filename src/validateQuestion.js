const validateQuestion = (userAnswer, fullQuestion) => {

  //should always return the path to the next question
  if (Array.isArray(fullQuestion.validation)) {
    return optionsValidation(userAnswer, fullQuestion)
  }
  else if (typeof fullQuestion.validation === "string") {
    return regexValidation(userAnswer, fullQuestion);
  }
  else {
    if (fullQuestion.validation) {
      return fullQuestion.paths
    }
    else {
      return;
    }
  }

}


const optionsValidation = (userAnswer, fullQuestion) => {
  let validation = fullQuestion.validation;
  let paths = fullQuestion.paths;
  let id = fullQuestion.id
  let matchedAnswer = validation.find((answer) => answer === userAnswer)
  if (matchedAnswer) {
    return paths[matchedAnswer];
  }
  else {
    return false;
  }
}

const regexValidation = (userAnswer, fullQuestion) => {
  let regexVal = fullQuestion.validation
  let regex = RegExp(regexVal);
  let paths = fullQuestion.paths;
  if (regex.test(userAnswer)) {
    return paths;
  }
  else {
    return false;
  }
}

export default validateQuestion