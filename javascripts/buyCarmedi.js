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
// const categories = [...new Set(showInfor.map((item) => item.category))];

// const displayItem = (items) => {
//   document.getElementById("show").innerHTML = items
//     .map((item) => {
//       var {
//         img,
//         tittle,
//         year,
//         km,
//         fuel,
//         gear,
//         icon1,
//         icon2,
//         icon3,
//         icon4,
//         icon5,
//         money,
//         address,
//       } = item;
//       if (!tittle) {
//         return `
//           <div class="card">
//             <img src="${img}" class="card-img-top" style="height:420px;" alt="...">
//           </div>
//         `;
//       } else if (!tittle && !id) {
//         return `
//     <div class="card">
//       <img src="${img}" class="card-img-top" style="height:420px;" alt="...">
//     </div>
//   `;
//       }
//       {
//         return `
//           <div class="card">
//             <img src="${img}" class="card-img-top">
//             <div class="card-body">
//               <h5 class="card-title">${tittle}</h5>
//               <p class="card-text">${icon1} ${year}</p>
//               <p class="card-text">${icon2} ${km} km</p>
//               <p class="card-text">${icon3} ${fuel}</p>
//               <p class="card-text">${icon4} ${gear}</p>
//             </div>
//             <div class="card-footer">
//               <p class="card-text" style="font-size:20px; color:red;">${money}</p>
//               <p class="card-text" style="font-size:12px;">${icon5} ${address}</p>
//             </div>
//           </div>
//         `;
//       }
//     })
//     .join("");
// };

// const filterItems = (id) => {
//   const filteredItems = showInfor.filter((item) => item.id === id);
//   displayItem(filteredItems);
// };

// const filterFirstCategory = showInfor.filter((item) => item.id === 1);
// displayItem(filterFirstCategory);

// const btns = [
//   {
//     id: 1,
//     name: "<<",
//   },
//   {
//     id: 1,
//     name: "1",
//   },
//   {
//     id: 2,
//     name: "2",
//   },
//   {
//     id: 3,
//     name: "3",
//   },
//   {
//     id: 3,
//     name: ">>",
//   },
// ];

// const filters = [...new Set(btns.map((btn) => btn.id))];

// document.getElementById("btns").innerHTML = filters
//   .map((id) => {
//     return `<button class="fil-p" onclick='filterItems(${id})'>${id}</button>`;
//   })
//   .join("");
document.addEventListener("DOMContentLoaded", function() {
  // Sử dụng fetch để lấy dữ liệu từ tệp JSON
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      // Duyệt qua mảng car và thêm dữ liệu vào HTML
      const carList = document.getElementById('show');
      data.car.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');
        carDiv.innerHTML = `
        <div class="card">
                <img src="${car.ImageUrl}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${car.Title}</h5>
                    <p class="card-text"><i class="bi bi-calendar-event-fill"></i> ${car.Year}</p>
                    <p class="card-text"><i class="bi bi-speedometer"></i> ${car.Kilometer} km</p>
                    <p class="card-text"><i class="bi bi-fuel-pump"></i> ${car.Fuel}</p>
                    <p class="card-text"><i class="bi bi-bezier2"></i> ${car.Transmission}</p>
                </div>
                <div class="card-footer">
                    <p class="card-text" style="font-size:20px; color:red;">${car.Price}</p>
                    <p class="card-text" style="font-size:12px;"><i class="bi bi-geo-alt"></i> ${car.Address.Province} - ${car.Address.Districts}</p>
                </div>
            </div>
        `;
        carList.appendChild(carDiv);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
// const itemsPerPage = 10; // Số lượng mục trên mỗi trang
// let currentPage = 1; // Trang hiện tại

// const displayItem = (items) => {
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const displayItems = items.slice(startIndex, endIndex);

//   document.getElementById("show").innerHTML = displayItems
//     .map((item) => {
//       var {
//         img,
//         tittle,
//         year,
//         km,
//         fuel,
//         gear,
//         icon1,
//         icon2,
//         icon3,
//         icon4,
//         icon5,
//         money,
//         address,
//       } = item;
//       if (!tittle) {
//         return `
//           <div class="card">
//             <img src="${img}" class="card-img-top" style="height:420px;" alt="...">
//           </div>
//         `;
//       } else if (!tittle && !id) {
//         return `
//     <div class="card">
//       <img src="${img}" class="card-img-top" style="height:420px;" alt="...">
//     </div>
//   `;
//       }
//       {
//         return `
//           <div class="card">
//             <img src="${img}" class="card-img-top">
//             <div class="card-body">
//               <h5 class="card-title">${tittle}</h5>
//               <p class="card-text">${icon1} ${year}</p>
//               <p class="card-text">${icon2} ${km} km</p>
//               <p class="card-text">${icon3} ${fuel}</p>
//               <p class="card-text">${icon4} ${gear}</p>
//             </div>
//             <div class="card-footer">
//               <p class="card-text" style="font-size:20px; color:red;">${money}</p>
//               <p class="card-text" style="font-size:12px;">${icon5} ${address}</p>
//             </div>
//           </div>
//         `;
//       }
//       // Các phần hiển thị mục ở đây
//     })
//     .join("");
// };

// const nextPage = () => {
//   currentPage++;
//   displayItem(showInfor);
// };

// const prevPage = () => {
//   currentPage--;
//   displayItem(showInfor);
// };

// // Thêm các nút phân trang vào DOM
// document.getElementById("btns").innerHTML = `
//   <button onclick="prevPage()">Prev</button>
//   <button onclick="nextPage()">Next</button>
// `;

// làm thanh kéo giá

// const rangeInput = document.getElementById("myRange");
// const minLabel = document.querySelector(".min-label");
// const maxLabel = document.querySelector(".max-label");

// rangeInput.addEventListener("input", () => {
//   const minValue = parseInt(rangeInput.min);
//   const maxValue = parseInt(rangeInput.max);
//   const value = parseInt(rangeInput.value);

//   minLabel.textContent = minValue;
//   maxLabel.textContent = maxValue;

//   const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
//   const thumb = rangeInput.nextElementSibling;
//   thumb.style.left = percentage + "%";
// });


// let cars = []; 

// async function getUser() {
//     try {
//         let data = await axios.get('http://localhost:5000/car');
//         cars = data.data;
//         renderCars(cars);
//     } catch (e) {
//         console.log(e);
//     }
// }

// function renderCars(array) {
//     let cardsContainer = document.getElementById('show');
//     cardsContainer.innerHTML = ''; // Clear previous cards
//     array.forEach(car => { 
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//             <img src="${car.ImageUrl}" class="card-img-top">
//             <div class="card-body">
//                 <h5 class="card-title">${car.Title}</h5>
//                 <p class="card-text"><i class="bi bi-calendar-event-fill"></i> ${car.Year}</p>
//                 <p class="card-text"><i class="bi bi-speedometer"></i> ${car.Kilometer} km</p>
//                 <p class="card-text"><i class="bi bi-fuel-pump"></i> ${car.Fuel}</p>
//                 <p class="card-text"><i class="bi bi-bezier2"></i> ${car.Transmission}</p>
//             </div>
//             <div class="card-footer">
//                 <p class="card-text" style="font-size:20px; color:red;">${car.Price}</p>
//                 <p class="card-text" style="font-size:12px;"><i class="bi bi-geo-alt"></i> ${car.Address.Province} - ${car.Address.Districts}</p>
//             </div>`;
//         cardsContainer.appendChild(card);
//     });
// } 

// function searchUser() {
//     let valueSearchInput = document.getElementById('search').value;
//     let filteredCars = cars.filter(car => {
//         return car.Title.toUpperCase().includes(valueSearchInput.toUpperCase());
//     });
//     renderCars(filteredCars); 
// }

// // Load data when the page loads
// getUser();
// document.addEventListener('DOMContentLoaded', getUser);

// let cars = [];

// async function getUser() {
//   try {
//     let data = await axios.get('http://localhost:5000/car');
//     cars = data.data;
//     renderCars(cars);
//   } catch (e) {
//     console.log(e);
//   }
// }

// function renderCars(array) {
//   let cardsContainer = document.getElementById('show');
//   cardsContainer.innerHTML = ''; // Clear previous cards
//   array.forEach(car => { 
//     let card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `
//       <img src="${car.ImageUrl}" class="card-img-top">
//       <div class="card-body">
//         <h5 class="card-title">${car.Title}</h5>
//         <p class="card-text"><i class="bi bi-calendar-event-fill"></i> ${car.Year}</p>
//         <p class="card-text"><i class="bi bi-speedometer"></i> ${car.Kilometer} km</p>
//         <p class="card-text"><i class="bi bi-fuel-pump"></i> ${car.Fuel}</p>
//         <p class="card-text"><i class="bi bi-bezier2"></i> ${car.Transmission}</p>
//       </div>
//       <div class="card-footer">
//         <p class="card-text" style="font-size:20px; color:red;">${car.Price}</p>
//         <p class="card-text" style="font-size:12px;"><i class="bi bi-geo-alt"></i> ${car.Address.Province} - ${car.Address.Districts}</p>
//       </div>`;
//     cardsContainer.appendChild(card);
//   });
// } 

// function searchUser() {
//   let valueSearchInput = document.getElementById('search').value;
//   let filteredCars = cars.filter(car => {
//     return car.Title.toUpperCase().includes(valueSearchInput.toUpperCase());
//   });
//   renderCars(filteredCars); 
// }

// function clearSearch() {
//   document.getElementById('search').value = '';
//   renderCars(cars);
// }


