let hangXe = document.getElementById("hangxe");
let values = ["VinFast", "Toyota", "Ford", "BMW"];
values.forEach(function (value) {
  let option = document.createElement("option");
  option.text = value;
  option.value = value;
  hangXe.add(option);
});
function hXe() {
  let x = document.getElementById("hangxe").value;
  let dongXe = document.getElementById("dongxe");
  let dXe = [];
  if (x != "Chọn hãng xe") {
    dongXe.disabled = false;
    if (x == "VinFast") {
      dongXe.innerHTML = " ";
      dXe = ["Fadil", "VF3", "VF4"];
      dXe.forEach(function (value) {
        let option = document.createElement("option");
        option.text = value;
        option.value = value;
        dongXe.add(option);
      });
    }
    if (x == "Toyota") {
      dongXe.innerHTML = " ";
      dXe = ["Allex", "Allion", "Alphard"];
      dXe.forEach(function (value) {
        let option = document.createElement("option");
        option.text = value;
        option.value = value;
        dongXe.add(option);
      });
    }
    if (x == "Ford") {
      dongXe.innerHTML = " ";
      dXe = ["Artic", "Capri", "Cargo"];
      dXe.forEach(function (value) {
        let option = document.createElement("option");
        option.text = value;
        option.value = value;
        dongXe.add(option);
      });
    }
    if (x == "BMW") {
      dongXe.innerHTML = " ";
      dXe = ["1600", "1800", "2000"];
      dXe.forEach(function (value) {
        let option = document.createElement("option");
        option.text = value;
        option.value = value;
        dongXe.add(option);
      });
    }
  } else dongXe.disabled = true;
}
function dXe() {
  let x = document.getElementById("dongxe").value;
  let phienBan = document.getElementById("phienban");
  let pBan = [];
  if (x != "Chọn dòng xe") {
    phienBan.disabled = false;
    if (x == "Fadil" || x == "VF3" || x == "VF4") {
      phienBan.innerHTML = [];
      pBan = ["Cao cấp", "Nâng cao", "Tiêu chuẩn", "Plus"];
      pBan.forEach(function (value) {
        let option = document.createElement("option");
        option.text = value;
        option.value = value;
        phienBan.add(option);
      });
    }
    if (x == "Allex" || x == "Allion" || x == "Alphard") {
      phienBan.innerHTML = [];
      pBan = ["Khác", "VT3", "3.0 Sedan (FWD)"];
      pBan.forEach(function (value) {
        let option = document.createElement("option");
        option.text = value;
        option.value = value;
        phienBan.add(option);
      });
    }
    if (x == "Artic" || x == "Capri" || x == "Cargo") {
      phienBan.innerHTML = [];
      pBan = ["Khác", "1.0 Coupe", "1.4 Van (FWD)"];
      pBan.forEach(function (value) {
        let option = document.createElement("option");
        option.text = value;
        option.value = value;
        phienBan.add(option);
      });
    }
    if (x == "1600" || x == "1800" || x == "2000") {
      phienBan.innerHTML = [];
      pBan = ["Khác", "VT 300"];
      pBan.forEach(function (value) {
        let option = document.createElement("option");
        option.text = value;
        option.value = value;
        phienBan.add(option);
      });
    }
  }
}

let nsx = document.getElementById("nsx");
let value = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
value.forEach(function (value) {
  let option = document.createElement("option");
  option.text = value;
  option.value = value;
  nsx.add(option);
});

function button() {
  let x = document.getElementById("hangxe").value;
  let y = document.getElementById("dongxe").value;
  let z = document.getElementById("phienban").value;
  let t = document.getElementById("kilometer").value;
  let u = document.getElementById("phone").value;
  let btn = document.getElementById("btn");
  if (x != " " && y != " " && z != " " && t != " " && u > 10**9 ) {
    btn.disabled = false;
  } else return true;
}
