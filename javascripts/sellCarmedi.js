//set option for CarCompany
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
    if (value == "Allex" || value == "Allion" || value == "Alphard") {
      printfOptionVersion(toyotaVersion);
    }
    if (value == "Artic" || value == "Capri" || value == "Cargo") {
      printfOptionVersion(fordVersion);
    }
    if (value == "1600" || value == "1800" || value == "2000") {
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

//set option for Designs
{
  let getDesign = document.getElementById("Designs");
  let values = [
    "Couple",
    "Wagon",
    "Minivan",
    "Pick-up",
    "Hatchback",
    "MPV",
    "SUV",
    "Sedan",
  ];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getDesign.add(option);
  });
}

//set option for foamBox
{
  let getFoamBox = document.getElementById("foamBox");
  let values = ["Số tự động", "Số sàn"];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getFoamBox.add(option);
  });
}

//set option for fuel
{
  let getFule = document.getElementById("fuel");
  let values = ["Xăng", "Dầu", "Điện", "Hybrid", "Plug - in Hybrid"];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getFule.add(option);
  });
}

//set option for color
{
  let getColor = document.getElementById("color");
  let values = [
    "Đen",
    "Đỏ",
    "Vàng",
    "Trắng",
    "Nâu",
    "Cam",
    "Bạc",
    "Xám",
    "Vàng đồng",
    "Xanh dương",
    "Xanh lá",
    "Tím",
    "Hồng",
    "Đồng",
    "Vàng cát",
    "Cam đất",
  ];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getColor.add(option);
  });
}

//set option for chair
{
  let getChair = document.getElementById("chair");
  let values = ["4", "5", "6", "7", "8"];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getChair.add(option);
  });
}

//set option for origin
{
  let getOrigin = document.getElementById("origin");
  let values = ["Trong nước", "Ngoài nước"];
  values.forEach(function (value) {
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    getOrigin.add(option);
  });
}

function button() {
  let Vehicles = document.getElementById("vehicles").value;
  let Version = document.getElementById("carVersion").value;
  let Year = document.getElementById("year").value;
  let Kilometer = document.getElementById("kilometer").value;
  let Phone = document.getElementById("phone").value;
  if (
    Vehicles != " " &&
    Version != " " &&
    Year != " " &&
    Kilometer != " " &&
    Phone > 10 ** 8
  ) {
    let btn = document.getElementById("btn");
    btn.disabled = false;
  } else btn.disabled = true;
}
//fetch API province, districts
const callAPIProvince = async () => {
  const response = await fetch("http://localhost:4000/provinces");
  const callProvince = await response.json();
  // console.log(callProvince.data.data);
  const provinceSelect = document.getElementById("province");
  callProvince.data.data.forEach((el) => {
    const option = document.createElement("option");
    option.text = el.name;
    option.value = el.code;
    provinceSelect.appendChild(option);
  });
};
const callAPIDistrict = async () => {
  let codeProvince = document.getElementById("province").value;
  const response = await fetch("http://localhost:4000/districts");
  const callDistrict = await response.json();
  const districtSelect = document.getElementById("district");
  districtSelect.innerHTML = "";
  let firstOption = document.createElement("option");
  firstOption.text = "Chọn quận/huyện";
  districtSelect.add(firstOption);
  callDistrict.data.data.forEach((el) => {
    const option = document.createElement("option");
    option.text = el.name;
    option.value = el.parent_code;
    if (option.value == codeProvince) {
      districtSelect.add(option);
    }
  });
};
callAPIProvince();

function showData() {
  let carCompany = document.getElementById("carCompany").value;
  let Vehicles = document.getElementById("vehicles").value;
  let Version = document.getElementById("carVersion").value;
  let Year = document.getElementById("year").value;
  let Kilometer = document.getElementById("kilometer").value;
  let Phone = document.getElementById("phone").value;
  let Money = document.getElementById("money").value;
  let Designs = document.getElementById("Designs").value;
  let foamBox = document.getElementById("foamBox").value;
  let fuel = document.getElementById("fuel").value;
  let color = document.getElementById("color").value;
  let chair = document.getElementById("chair").value;
  let Name = document.getElementById("name").value;
  let origin = document.getElementById("origin").value;
  let nameCar = document.getElementById("nameCar").value;
  let Province = document.getElementById("province");
  let valueProvince = Province.options[Province.selectedIndex].text;
  let District = document.getElementById("district");
  let valueDistrict = District.options[District.selectedIndex].text;
  let getData = [
    {
      Address: {
        Province: valueProvince,
        Districts: valueDistrict,
      },
      Personal: Name,
      Phone: Phone,
      CarType: carCompany,
      Vehicles: Vehicles,
      Version: Version,
      Year: Year,
      Kilometer: Kilometer,
      Price: Money,
      Style: Designs,
      Transmission: foamBox,
      Fuel: fuel,
      Color: color,
      Seats: chair,
      Origin: origin,
      Title: nameCar,
      ImageUrl: imageUrl,
      icon1: '<i class="bi bi-calendar-event-fill"></i>',
      icon2: '<i class="bi bi-speedometer"></i>',
      icon3: '<i class="bi bi-fuel-pump"></i>',
      icon4: '<i class="bi bi-bezier2"></i>',
      icon5: '<i class="bi bi-geo-alt"></i>',
      Province: valueProvince,
    },
  ];
  showInfor.push(...getData);
  console.log(getData);
}
const showInfor = [];

// const categories = [...new Set(showInfor.map((item) => item.category))];

// const displayItem = (items) => {
//   document.getElementById("show").innerHTML = items
//     .map((item) => {
//       var {
//         Version,
//         Year,
//         Kilometer,
//         Price,
//         Fuel,
//         Color,
//         Title,
//         ImageUrl,
//         icon1,
//         icon2,
//         icon3,
//         icon4,
//         icon5,
//         Province,
//       } = item;
//       return `
//       <div class="card">
//         <img src="${ImageUrl}" class="card-img-top">
//         <div class="card-body">
//           <h5 class="card-title">${Title}</h5>
//           <p class="card-text">${icon1} ${Year}</p>
//           <p class="card-text">${icon2} ${Kilometer} km</p>
//           <p class="card-text">${icon3} ${Fuel}</p>
//           <p class="card-text">${icon4} ${Version}</p>
//         </div>
//         <div class="card-footer">
//           <p class="card-text" style="font-size:20px; color:red;">${Price}</p>
//           <p class="card-text" style="font-size:12px;">${icon5} ${Province}</p>
//         </div>
//       </div>
//     `;
//     })
//     .join("");
// };

