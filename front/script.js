let questCorret = 0;
let questErrada = 0;

//Botão amarelo que inicia o quiz
function comecarQuiz(comecar) {
  document.getElementById(comecar).style.display = "flex";
  document.getElementById("botao1").style.display = "none";
  document.getElementById("p_titulo").style.display = "none";
  document.getElementById("prox_questao").style.display = "flex";
  document.getElementById("question01").style.display = "flex";
  document.getElementById("alternativa01").style.display = "flex";
}

//Pergunta 01
let elem1 = document.getElementById("botao1");

elem1.addEventListener("click", () => {
  console.log("cliquei no botão 1");
  axios.get("http://localhost:3000/questoes/q01").then((response) => {
    // handle success

    console.log(response.data);

    let question01 = document.getElementById("question01");
    let resp_a = document.getElementById("resp_a");
    let resp_b = document.getElementById("resp_b");
    let resp_c = document.getElementById("resp_c");
    let resp_d = document.getElementById("resp_d");
    let contador = document.getElementById("contador");
    questioninnerHTML = "";

    let questao = response.data;

    question01.innerHTML = questao.question;
    resp_a.innerHTML = questao.answers.answer_a;
    resp_b.innerHTML = questao.answers.answer_b;
    resp_c.innerHTML = questao.answers.answer_c;
    resp_d.innerHTML = questao.answers.answer_d;
    contador.innerHTML = "1/5";
  });
});

function respost(a) {
  if (a == "r4") {
    questCorret++;
    console.log("acertou");
  } else {
    questErrada++;
    console.log("errou");
  }
}
//Fim da pegunta 01

//Pergunta 02
function prox_q1() {
  document.getElementById("question01").style.display = "none";
  document.getElementById("alternativa01").style.display = "none";
  document.getElementById("prox_questao").style.display = "none";
  document.getElementById("question02").style.display = "flex";
  document.getElementById("alternativa02").style.display = "flex";
  document.getElementById("btn_prox_questao2").style.display = "flex";
}

let elem2 = document.getElementById("prox_questao");

elem2.addEventListener("click", () => {
  console.log("cliquei no botão 2");
  axios.get("http://localhost:3000/questoes/q02").then((response) => {
    // handle success

    console.log(response.data);

    let question02 = document.getElementById("question02");
    let resp_a02 = document.getElementById("resp_a02");
    let resp_b02 = document.getElementById("resp_b02");
    let resp_c02 = document.getElementById("resp_c02");
    let resp_d02 = document.getElementById("resp_d02");
    let contador = document.getElementById("contador");
    questioninnerHTML = "";

    let questao = response.data;

    question02.innerHTML = questao.question;
    resp_a02.innerHTML = questao.answers.answer_a;
    resp_b02.innerHTML = questao.answers.answer_b;
    resp_c02.innerHTML = questao.answers.answer_c;
    resp_d02.innerHTML = questao.answers.answer_d;
    contador.innerHTML = "2/5";
  });
});

function respost(b) {
  if (b == "r4") {
    questCorret++;
    console.log("acertou");
  } else {
    questErrada++;
    console.log("errou");
  }
}
//Fim da pegunta 02

//Pergunta 03
function prox_q2() {
  document.getElementById("question02").style.display = "none";
  document.getElementById("alternativa02").style.display = "none";
  document.getElementById("btn_prox_questao2").style.display = "none";
  document.getElementById("question03").style.display = "flex";
  document.getElementById("alternativa03").style.display = "flex";
  document.getElementById("btn_prox_questao3").style.display = "flex";
}

let elem3 = document.getElementById("btn_prox_questao2");

elem3.addEventListener("click", () => {
  console.log("cliquei no botão 2");
  axios.get("http://localhost:3000/questoes/q03").then((response) => {
    // handle success

    console.log(response.data);

    let question03 = document.getElementById("question03");
    let resp_a03 = document.getElementById("resp_a03");
    let resp_b03 = document.getElementById("resp_b03");
    let resp_c03 = document.getElementById("resp_c03");
    let resp_d03 = document.getElementById("resp_d03");
    let contador = document.getElementById("contador");
    questioninnerHTML = "";

    let questao = response.data;

    question03.innerHTML = questao.question;
    resp_a03.innerHTML = questao.answers.answer_a;
    resp_b03.innerHTML = questao.answers.answer_b;
    resp_c03.innerHTML = questao.answers.answer_c;
    resp_d03.innerHTML = questao.answers.answer_d;
    contador.innerHTML = "3/5";
  });
});

function respost(c) {
  if (c == "r4") {
    questCorret++;
    console.log("acertou");
  } else {
    questErrada++;
    console.log("errou");
  }
}
//Fim da pegunta 03

//Pergunta 04
function prox_q3() {
  document.getElementById("question03").style.display = "none";
  document.getElementById("alternativa03").style.display = "none";
  document.getElementById("btn_prox_questao3").style.display = "none";
  document.getElementById("question04").style.display = "flex";
  document.getElementById("alternativa04").style.display = "flex";
  document.getElementById("btn_prox_questao4").style.display = "flex";
}

let elem4 = document.getElementById("btn_prox_questao3");

elem4.addEventListener("click", () => {
  console.log("cliquei no botão 2");
  axios.get("http://localhost:3000/questoes/q04").then((response) => {
    // handle success

    console.log(response.data);

    let question04 = document.getElementById("question04");
    let resp_a04 = document.getElementById("resp_a04");
    let resp_b04 = document.getElementById("resp_b04");
    let resp_c04 = document.getElementById("resp_c04");
    let resp_d04 = document.getElementById("resp_d04");
    let contador = document.getElementById("contador");
    questioninnerHTML = "";

    let questao = response.data;

    question04.innerHTML = questao.question;
    resp_a04.innerHTML = questao.answers.answer_a;
    resp_b04.innerHTML = questao.answers.answer_b;
    resp_c04.innerHTML = questao.answers.answer_c;
    resp_d04.innerHTML = questao.answers.answer_d;
    contador.innerHTML = "4/5";
  });
});

function respost(d) {
  if (d == "r4") {
    questCorret++;
    console.log("acertou");
  } else {
    questErrada++;
    console.log("errou");
  }
}
//Fim da pegunta 04

//Pergunta 05
function prox_q4() {
  document.getElementById("question04").style.display = "none";
  document.getElementById("alternativa04").style.display = "none";
  document.getElementById("btn_prox_questao4").style.display = "none";
  document.getElementById("question05").style.display = "flex";
  document.getElementById("alternativa05").style.display = "flex";
  document.getElementById("btn_prox_questao5").style.display = "flex";
}

let elem5 = document.getElementById("btn_prox_questao4");

elem5.addEventListener("click", () => {
  console.log("cliquei no botão 2");
  axios.get("http://localhost:3000/questoes/q05").then((response) => {
    // handle success

    console.log(response.data);

    let question05 = document.getElementById("question05");
    let resp_a05 = document.getElementById("resp_a05");
    let resp_b05 = document.getElementById("resp_b05");
    let resp_c05 = document.getElementById("resp_c05");
    let resp_d05 = document.getElementById("resp_d05");
    let contador = document.getElementById("contador");
    questioninnerHTML = "";

    let questao = response.data;

    question05.innerHTML = questao.question;
    resp_a05.innerHTML = questao.answers.answer_a;
    resp_b05.innerHTML = questao.answers.answer_b;
    resp_c05.innerHTML = questao.answers.answer_c;
    resp_d05.innerHTML = questao.answers.answer_d;
    contador.innerHTML = "5/5";
  });
});

function respost(e) {
  if (e == "r4") {
    questCorret++;
    console.log("acertou");
  } else {
    questErrada++;
    console.log("errou");
  }
}
//Fim da pegunta 05

//Função que mostra o resultado e botão para razer o quiz
function prox_q5() {
  document.getElementById("question05").style.display = "none";
  document.getElementById("alternativa05").style.display = "none";
  document.getElementById("btn_prox_questao5").style.display = "none";
  document.getElementById("btn_refazerQuiz").style.display = "flex";

  if (questCorret >= 3) {
    resultadoQuizAcertos.innerHTML =
      "😎Muito bem,Você acertou:" + questCorret + "/5";
  } else {
    resultadoQuizAcertos.innerHTML =
      "😮Precisa melhorar, Você acertou apenas:" + questCorret + "/5";
  }

  if (questCorret == 0) {
    resultadoQuizAcertos.innerHTML =
      "😮Vixe, Você errou todas as questões!:" + questCorret + "/5";
  }
}

//Botão refazer quiz
function refazerQuiz() {
  document.getElementById("btn_refazerQuiz").style.display = "flex";
}

const refazer = document.querySelector("#btn_refazerQuiz");
refazer.addEventListener("click", () => {
  location.reload();
});
