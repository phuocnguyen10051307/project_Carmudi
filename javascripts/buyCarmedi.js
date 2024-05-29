// range input
const rangeInput = document.querySelectorAll(".range-input input"),
    yearInput = document.querySelectorAll(".year-input input"),
    progress = document.querySelector(".slider .progress");

let yearGap = 1; 

function updateProgress() {
    let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
    progress.style.left = ((minVal - 2000) / (rangeInput[0].max - 2000)) * 100 + "%";
    progress.style.right = 100 - ((maxVal - 2000) / (rangeInput[1].max - 2000)) * 100 + "%";
}

yearInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(yearInput[0].value),
            maxVal = parseInt(yearInput[1].value);
        
        if ((maxVal - minVal >= yearGap) && maxVal <= 2024 && minVal >= 2000) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minVal;
                progress.style.left = ((minVal - 2000) / (rangeInput[0].max - 2000)) * 100 + "%";
            } else {
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - ((maxVal - 2000) / (rangeInput[1].max - 2000)) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        
        if (maxVal - minVal < yearGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - yearGap;
            } else {
                rangeInput[1].value = minVal + yearGap;
            }
        } else {
            yearInput[0].value = minVal;
            yearInput[1].value = maxVal;
            progress.style.left = ((minVal - 2000) / (rangeInput[0].max - 2000)) * 100 + "%";
            progress.style.right = 100 - ((maxVal - 2000) / (rangeInput[1].max - 2000)) * 100 + "%";
        }
    });
});

updateProgress();

// hàm tìm kiếm theo năm sản xuất
const searchYearCar = async () => {
  const minYear = parseInt(rangeInput[0].value);
  const maxYear = parseInt(rangeInput[1].value);

  try {
      const response = await fetch(`http://localhost:5000/car`);
      const data = await response.json();

      // Lọc danh sách sản phẩm dựa trên khoảng thời gian
      const filteredProducts = data.filter(product => {
          const year = parseInt(product.Year);
          return year >= minYear && year <= maxYear;
      });

      // Sau khi nhận được dữ liệu từ API và lọc sản phẩm, cập nhật giao diện người dùng
      updateProductList(filteredProducts);
  } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ API:', error);
  }
};

const updateProductList = (products) => {
  const productList = document.getElementById('show');
  productList.innerHTML = '';

  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
          <div class="card">
              <img src="${product.ImageUrl}" class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title">${product.Title}</h5>
                  <p class="card-text"><i class="bi bi-calendar-event-fill"></i> ${product.Year}</p>
                  <p class="card-text"><i class="bi bi-speedometer"></i> ${product.Kilometer} km</p>
                  <p class="card-text"><i class="bi bi-fuel-pump"></i> ${product.Fuel}</p>
                  <p class="card-text"><i class="bi bi-bezier2"></i> ${product.Transmission}</p>
              </div>
              <div class="card-footer">
                  <p class="card-text" style="font-size:20px; color:red;">${product.Price}</p>
                  <p class="card-text" style="font-size:12px;"><i class="bi bi-geo-alt"></i> ${product.Address.Province} - ${product.Address.Districts}</p>
              </div>
          </div>
      `;
      productList.appendChild(productDiv);
  });
};

// let perPage = 6;
// let currentPage =1;
// let start = 0;
// let end =perPage;
// let divCard=''
// function renderProduct() {
//   const content = showInfor.map((item,index)=>{
//     if(index>= start && index<end) {
//       divCard += `
//         <div class="card" >
//           <img src="${showInfor[i].img}" class="card-img-top">
//           <div class="card-body">
//             <h5 class="card-title">${showInfor[i].tittle}</h5>
//             <p class="card-text">${showInfor[i].icon1} ${showInfor[i].year}</p>
//             <p class="card-text">${showInfor[i].icon2} ${showInfor[i].km} km</p>
//             <p class="card-text">${showInfor[i].icon3} ${showInfor[i].fuel}</p>
//             <p class="card-text">${showInfor[i].icon4} ${showInfor[i].gear}</p>
//           </div>
//           <div class="card-footer">
//             <p class="card-text" style="font-size:20px; color:red;">${showInfor[i].money}</p>
//             <p class="card-text" style="font-size:12px;">${showInfor[i].icon5} ${showInfor[i].address}</p>
//           </div>
//         </div>`;
//     }
//     document.getElementById("show").innerHTML = divCard;
//   })

rangeInput.forEach(input => {
  input.addEventListener('input', searchYearCar);
});


searchYearCar();

// range km 





// hàm hiển thị danh sách sản phẩm có trong json
document.addEventListener("DOMContentLoaded", function() {
  // Sử dụng fetch để lấy dữ liệu từ tệp JSON
  fetch('http://localhost:5000/car')
    .then(response => response.json())
    .then(data => {

let divCard = "";
for (let i = 0; i < showInfor.length; i++) {
  divCard += `
  <div class="card" >
    <img src="${showInfor[i].img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${showInfor[i].tittle}</h5>
      <p class="card-text">${showInfor[i].icon1} ${showInfor[i].year}</p>
      <p class="card-text">${showInfor[i].icon2} ${showInfor[i].km} km</p>
      <p class="card-text">${showInfor[i].icon3} ${showInfor[i].fuel}</p>
      <p class="card-text">${showInfor[i].icon4} ${showInfor[i].gear}</p>
    </div>
    <div class="card-footer">
      <p class="card-text" style="font-size:20px; color:red;">${showInfor[i].money}</p>
      <p class="card-text" style="font-size:12px;">${showInfor[i].icon5} ${showInfor[i].address}</p>
    </div>
  </div>`;
}
document.getElementById("show").innerHTML = divCard;

var button = document.getElementById("bt3");
var content = document.getElementById("click3");

button.addEventListener("click", function () {
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});
