function calculateBMI(){
  let h = Number(document.querySelector("#height").value);
  let w = Number(document.querySelector("#weight").value);

  if(!h || !w) return;

  h = h / 100; // cm -> m
  let bmi = w / (h * h);  

  document.querySelector("#result").textContent = "BMI: " + bmi.toFixed(2);
  
  let stateText = "";
  if (bmi >= 25) {
     stateText = "비만";
  } else if (bmi >= 23) {
     stateText = "과체중";
  } else if (bmi >= 18.5) {
     stateText = "정상";
  } else { 
     stateText = "저체중";
  }

  const stateEl = document.querySelector("#state");
  stateEl.textContent = stateText;
  
  // CSS가 현재 상태(저체중/정상/과체중/비만)를 정확히 읽어 화살표를 움직이게 하는 핵심 코드입니다!
  stateEl.setAttribute('data-state', stateText);
}