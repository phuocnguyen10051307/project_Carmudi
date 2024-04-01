let getCarCompany = document.getElementById("carCompany");
let values = ["VinFast", "Toyota", "Ford", "BMW"];
values.forEach(function (value) {
  let option = document.createElement("option");
  option.text = value;
  option.value = value;
  getCarCompany.add(option);
});

//set option for Vehicles select
let getVehicles = document.getElementById("vehicles");
const vinfast = ["Fadil", "VF3", "VF4"];
const toyota = ["Allex", "Allion", "Alphard"];
const ford = ["Artic", "Capri", "Cargo"];
const bmw = ["1600", "1800", "2000"];
const printfOptionVehicles = (arr) => {
  // làm rỗng option
  getVehicles.innerHTML = " ";
  // create 1 option
  let firstOption = document.createElement("option");
  firstOption.text = "Chọn dòng xe";
  getVehicles.add(firstOption);
  // push option được chọn
  arr.forEach(function (value) {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    getVehicles.add(option);
  });
};
function carCompany(value) {
  if (value != "Chọn hãng xe") {
    //turn on option
    getVehicles.disabled = false;
    switch (value) {
      case "VinFast":
        printfOptionVehicles(vinfast);
        break;
      case "Toyota":
        printfOptionVehicles(toyota);
        break;
      case "Ford":
        printfOptionVehicles(ford);
        break;
      case "BMW":
        printfOptionVehicles(bmw);
        break;
      default:
        break;
    }
  } else {
    getVehicles.innerHTML = " ";
    let firstOption = document.createElement("option");
    firstOption.text = "Chọn dòng xe";
    getVehicles.add(firstOption);
    //turn off option
    getVehicles.disabled = true;
  }
}

//Set option for Version Select
let getCarVersion = document.getElementById("carVersion");
const vinfastVersion = ["Cao cấp", "Nâng cao", "Tiêu chuẩn", "Plus"];
const toyotaVersion = ["Khác", "VT3", "3.0 Sedan (FWD)"];
const fordVersion = ["Khác", "1.0 Coupe", "1.4 Van (FWD)"];
const bmwVersion = ["Khác", "VT 300"];
const printfOptionVersion = (arr) => {
  // làm rỗng option
  getCarVersion.innerHTML = " ";
  // create 1 option
  let firstOption = document.createElement("option");
  firstOption.text = "Chọn phiên bản xe";
  getCarVersion.add(firstOption);
  // push option được chọn
  arr.forEach(function (value) {
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    getCarVersion.add(option);
  });
};
function vehicles(value) {
  if (value != "Chọn dòng xe") {
    getCarVersion.disabled = false;
    if (value == "Fadil" || value == "VF3" || value == "VF4") {
      printfOptionVersion(vinfastVersion);
    }
    if (x == "Allex" || x == "Allion" || x == "Alphard") {
      printfOptionVersion(toyotaVersion);
    }
    if (x == "Artic" || x == "Capri" || x == "Cargo") {
      printfOptionVersion(fordVersion);
    }
    if (x == "1600" || x == "1800" || x == "2000") {
      printfOptionVersion(bmwVersion);
    }
  } else {
    getCarVersion.innerHTML = " ";
    let firstOption = document.createElement("option");
    firstOption.text = "Chọn phiên bản xe";
    getCarVersion.add(firstOption);
    getCarVersion.disabled = true;
  }
}

//set option for Year Select
let yearProduce = document.getElementById("year");
let value = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
value.forEach(function (value) {
  let option = document.createElement("option");
  option.text = value;
  option.value = value;
  yearProduce.add(option);
});

function button() {
  let Vehicles = document.getElementById("vehicles").value;
  let Version = document.getElementById("carVersion").value;
  let Year = document.getElementById("year").value;
  let Kilometer = document.getElementById("kilometer").value;
  let Phone = document.getElementById("phone").value;
  let btn = document.getElementById("btn");
  if (
    Vehicles != " " &&
    Version != " " &&
    Year != " " &&
    Kilometer != " " &&
    Phone > 10 ** 8
  ) {
    btn.disabled = false;
  } else btn.disabled = true;;
}
