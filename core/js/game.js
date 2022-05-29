function start () { 
  let passed;
  for (let i = 0; i < phases.length; i++) {
    passed = phaseCheck(i);
    if (!passed) return lose();
  }
  return win();
} 

function phaseCheck(phaseNumber) {
  const question = phases[phaseNumber].question;
  const answer = prompt(`${question.text}${question.options}`);
  return (answer.toUpperCase() === question.answer.toUpperCase());
}



