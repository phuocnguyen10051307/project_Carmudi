var hangXe = document.getElementById("hangxe");
var values = ["VinFast", "Toyota", "Ford", "BMW"];
values.forEach(function (value) {
  var option = document.createElement("option");
  option.text = value;
  option.value = value;
  hangXe.add(option);
});
function hXe() {
  var x = document.getElementById("hangxe").value;
  var dongXe = document.getElementById("dongxe");
  let dXe = [];
  if (x != "Chọn hãng xe") {
    dongXe.disabled = false;
    if (x == "VinFast") {
      dongXe.innerHTML = " ";
      dXe = ["Fadil", "VF3", "VF4"];
      dXe.forEach(function (value) {
        var option = document.createElement("option");
        option.text = value;
        option.value = value;
        dongXe.add(option);
      });
    }
    if (x == "Toyota") {
      dongXe.innerHTML = " ";
      dXe = ["Allex", "Allion", "Alphard"];
      dXe.forEach(function (value) {
        var option = document.createElement("option");
        option.text = value;
        option.value = value;
        dongXe.add(option);
      });
    }
    if (x == "Ford") {
      dongXe.innerHTML = " ";
      dXe = ["Artic", "Capri", "Cargo"];
      dXe.forEach(function (value) {
        var option = document.createElement("option");
        option.text = value;
        option.value = value;
        dongXe.add(option);
      });
    }
    if (x == "BMW") {
      dongXe.innerHTML = " ";
      dXe = ["1600", "1800", "2000"];
      dXe.forEach(function (value) {
        var option = document.createElement("option");
        option.text = value;
        option.value = value;
        dongXe.add(option);
      });
    }
  } else dongXe.disabled = true;
}
function dXe() {
  var x = document.getElementById("dongxe").value;
  var phienBan = document.getElementById("phienban");
  let pBan = [];
  if (x != "Chọn dòng xe") {
    phienBan.disabled = false;
    if (x == "Fadil") {
      pBan = ["Cao cấp", "Nâng cao", "Tiêu chuẩn"];
      pBan.forEach(function (value) {
        var option = document.createElement("option");
        option.text = value;
        option.value = value;
        phienBan.add(option);
      });
    }
  }
}
