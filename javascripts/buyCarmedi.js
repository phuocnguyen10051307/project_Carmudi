const range_Input = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= range_Input[1].max) {
      if (e.target.className === "input-min") {
        range_Input[0].value = minPrice;
        range.style.left = (minPrice / range_Input[0].max) * 100 + "%";
      } else {
        range_Input[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / range_Input[1].max) * 100 + "%";
      }
    }
  });
});

range_Input.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(range_Input[0].value),
      maxVal = parseInt(range_Input[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        range_Input[0].value = maxVal - priceGap;
      } else {
        range_Input[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / range_Input[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / range_Input[1].max) * 100 + "%";
    }
  });
});
const showInfor = [
  {
    id: 1,
    category: "car",
    img: "./assets/car7.jpg",
    tittle: "TOYOTA COROLLA ALTIS 1.8V SIÊU LƯỚT 2022",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: "425 Triệu",
    address: "Hồ Chí Minh - Thủ đức",
  },
  {
    id: 1,
    category: "car",
    img: "./assets/car8.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2020",
    km: "29000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: "700 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 1,
    img: "./assets/qc1.jpg",
  },
  {
    id: 1,
    category: "car",
    img: "./assets/car9.jpg",
    tittle: "🎉Mercedes - Benz E200 ❤️",
    year: "2019",
    km: "30000",
    fuel: "No data",
    gear: "No data",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: "425 Triệu",
    address: "Hồ Chí Minh - quận 7",
  },
  {
    id: 1,
    category: "car",
    img: "./assets/car10.jpg",
    tittle: "💥Porscher Macan Model 2016 màu nâu Siêu Đẹp 🔥",
    year: "2016",
    km: "48000",
    fuel: "No data",
    gear: "No data",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: "425 Triệu",
    address: "Hồ Chí Minh - quận 7",
  },
  {
    id: 1,
    category: "car",
    img: "./assets/car1.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: "425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    img: "./assets/qc2.jpg",
  },
  {
    id: 1,
    category: "car",
    img: "./assets/car2.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: "425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 1,
    category: "car",
    img: "./assets/car3.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: "425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 1,
    category: "car",
    img: "./assets/car4.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: "425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 1,
    category: "car",
    img: "./assets/car5.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: "425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 2,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 2,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 2,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 2,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 2,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },

  {
    id: 2,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 2,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 3,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 3,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 3,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
  {
    id: 3,
    category: "car",
    img: "./assets/car6.jpg",
    tittle:
      "2022 MG MG 5 STD (Tiêu chuẩn)- TRUNG TÂM MUA BÁN XE CŨ MG CHÍNH HÃNG",
    year: "2022",
    km: "20000",
    fuel: "Xăng",
    gear: "Tự động",
    icon1: '<i class="bi bi-calendar-event-fill"></i>',
    icon2: '<i class="bi bi-speedometer"></i>',
    icon3: '<i class="bi bi-fuel-pump"></i>',
    icon4: '<i class="bi bi-bezier2"></i>',
    icon5: '<i class="bi bi-geo-alt"></i>',
    money: " 1 Tỷ 425 Triệu",
    address: "Hồ Chí Minh - quận 6",
  },
];

// let divCard = "";
// for (let i = 0; i < showInfor.length; i++) {
//   if (!showInfor[i].tittle) {
//     divCard += `<div class="card" >
//   <img src="${showInfor[i].img}" class="card-img-top" style="height:420px;" alt="...">
// </div>`;
//   } else {
//     divCard += `
//   <div class="card " >
//     <img src="${showInfor[i].img}" class="card-img-top">
//     <div class="card-body">
//       <h5 class="card-title">${showInfor[i].tittle}</h5>
//       <p class="card-text">${showInfor[i].icon1} ${showInfor[i].year}</p>
//       <p class="card-text">${showInfor[i].icon2} ${showInfor[i].km} km</p>
//       <p class="card-text">${showInfor[i].icon3} ${showInfor[i].fuel}</p>
//       <p class="card-text">${showInfor[i].icon4} ${showInfor[i].gear}</p>
//     </div>
//     <div class="card-footer">
//       <p class="card-text" style="font-size:20px; color:red;">${showInfor[i].money}</p>
//       <p class="card-text" style="font-size:12px;">${showInfor[i].icon5} ${showInfor[i].address}</p>
//     </div>
//   </div>`;
//   }
// }
// document.getElementById("show").innerHTML = divCard;
const categories = [...new Set(showInfor.map((item) => item.category))];

const displayItem = (items) => {
  document.getElementById("show").innerHTML = items
    .map((item) => {
      var {
        img,
        tittle,
        year,
        km,
        fuel,
        gear,
        icon1,
        icon2,
        icon3,
        icon4,
        icon5,
        money,
        address,
      } = item;
      if (!tittle) {
        return `
          <div class="card">
            <img src="${img}" class="card-img-top" style="height:420px;" alt="...">
          </div>
        `;
      } else if (!tittle && !id) {
        return `
    <div class="card">
      <img src="${img}" class="card-img-top" style="height:420px;" alt="...">
    </div>
  `;
      }
      {
        return `
          <div class="card">
            <img src="${img}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${tittle}</h5>
              <p class="card-text">${icon1} ${year}</p>
              <p class="card-text">${icon2} ${km} km</p>
              <p class="card-text">${icon3} ${fuel}</p>
              <p class="card-text">${icon4} ${gear}</p>
            </div>
            <div class="card-footer">
              <p class="card-text" style="font-size:20px; color:red;">${money}</p>
              <p class="card-text" style="font-size:12px;">${icon5} ${address}</p>
            </div>
          </div>
        `;
      }
    })
    .join("");
};

const filterItems = (id) => {
  const filteredItems = showInfor.filter((item) => item.id === id);
  displayItem(filteredItems);
};

const filterFirstCategory = showInfor.filter((item) => item.id === 1);
displayItem(filterFirstCategory);

const btns = [
  {
    id: 1,
    name: "<<",
  },
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
  {
    id: 3,
    name: "3",
  },
  {
    id: 3,
    name: ">>",
  },
];

const filters = [...new Set(btns.map((btn) => btn.id))];

document.getElementById("btns").innerHTML = filters
  .map((id) => {
    return `<button class="fil-p" onclick='filterItems(${id})'>${id}</button>`;
  })
  .join("");
//làm thanh kéo giá

const rangeInput = document.getElementById("myRange");
const minLabel = document.querySelector(".min-label");
const maxLabel = document.querySelector(".max-label");

rangeInput.addEventListener("input", () => {
  const minValue = parseInt(rangeInput.min);
  const maxValue = parseInt(rangeInput.max);
  const value = parseInt(rangeInput.value);

  minLabel.textContent = minValue;
  maxLabel.textContent = maxValue;

  const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
  const thumb = rangeInput.nextElementSibling;
  thumb.style.left = percentage + "%";
});
