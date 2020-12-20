byrger.onclick = function () {
  menu1.classList.toggle("show");
  menu2.classList.toggle("show");
  block1.classList.toggle("sdvig");
};

function addHeight1() {
  document.getElementById("service_btn1").classList.toggle("service_btn_minus");
  if (service1.style.height == "16px") {
    service1.style.height = "120px";
  } else {
    service1.style.height = "16px";
  }
  return false;
}
function addHeight2() {
  document.getElementById("service_btn2").classList.toggle("service_btn_minus");
  if (service2.style.height == "16px") {
    service2.style.height = "120px";
  } else {
    service2.style.height = "16px";
  }
  return false;
}
function addHeight3() {
  document.getElementById("service_btn3").classList.toggle("service_btn_minus");
  if (service3.style.height == "16px") {
    service3.style.height = "120px";
  } else {
    service3.style.height = "16px";
  }
  return false;
}
function addHeight4() {
  document.getElementById("service_btn4").classList.toggle("service_btn_minus");
  if (service4.style.height == "16px") {
    service4.style.height = "120px";
  } else {
    service4.style.height = "16px";
  }
  return false;
}
name1.onclick = function () {
  svgg1.classList.add("in");
};

email.onclick = function () {
  svgg2.classList.add("in");
};

text.onclick = function () {
  svgg3.classList.add("in");
};
