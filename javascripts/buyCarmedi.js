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

// document.addEventListener("DOMContentLoaded", function() {
//   // Sử dụng fetch để lấy dữ liệu từ tệp JSON
//   fetch('db.json')
//     .then(response => response.json())
//     .then(data => {
//       // Duyệt qua mảng car và thêm dữ liệu vào HTML
//       const carList = document.getElementById('show');
//       data.car.forEach(car => {
//         const carDiv = document.createElement('div');
//         carDiv.classList.add('car');
//         carDiv.innerHTML = `
//         <div class="card">
//                 <img src="${car.ImageUrl}" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title">${car.Title}</h5>
//                     <p class="card-text"><i class="bi bi-calendar-event-fill"></i> ${car.Year}</p>
//                     <p class="card-text"><i class="bi bi-speedometer"></i> ${car.Kilometer} km</p>
//                     <p class="card-text"><i class="bi bi-fuel-pump"></i> ${car.Fuel}</p>
//                     <p class="card-text"><i class="bi bi-bezier2"></i> ${car.Transmission}</p>
//                 </div>
//                 <div class="card-footer">
//                     <p class="card-text" style="font-size:20px; color:red;">${car.Price}</p>
//                     <p class="card-text" style="font-size:12px;"><i class="bi bi-geo-alt"></i> ${car.Address.Province} - ${car.Address.Districts}</p>
//                 </div>
//             </div>
//         `;
//         carList.appendChild(carDiv);
//       });
//     })
//     .catch(error => console.error('Error fetching data:', error));
// });



const registerBtn = document.getElementById('registerBtn');
const overlay = document.getElementById('overlay');

registerBtn.addEventListener('click', function() {
  document.getElementById('register').style.display = 'block';
  overlay.style.display = 'block'; // Hiển thị lớp mờ
});

document.getElementById('exit').addEventListener('click', function() {
  document.getElementById('register').style.display = 'none';
  overlay.style.display = 'none'; // Ẩn lớp mờ
});


const checkInput = () => {
  const dataInput = document.getElementById("disabledTextInput");
  const btnSubmit = document.getElementById("btnSubmit");

  if (dataInput.value.length == 10) {
      btnSubmit.classList.remove("btn-secondary");
      btnSubmit.classList.add("btn-primary");
  } else {
      btnSubmit.classList.remove("btn-primary");
      btnSubmit.classList.add("btn-secondary");
  }
};


// checkbox Province
const getProvinceApi = async () => {
  try {
    const response = await axios.get("http://localhost:5000/province", {
      headers: {
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    });
    const provinces = response.data.data.data;

    const checkboxContainer = document.getElementById("checkboxProvince");

    const provincesArray = Array.isArray(provinces) ? provinces : [provinces];

    provincesArray.forEach(province => {
      const checkboxDiv = document.createElement("div"); 

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox-brand";
      checkbox.value = province.name;
      checkbox.onclick = fetchData;

      const textNode = document.createTextNode(province.name);

      checkboxDiv.appendChild(checkbox);
      checkboxDiv.appendChild(textNode);

      checkboxDiv.classList.add("checkbox-wrapper");

      checkboxContainer.appendChild(checkboxDiv);
    });

  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
  }
}

getProvinceApi();



// chọn một checkbox ở hãng xe dòng xe sẽ hiển thị dưới thanh tìm kiếm
const searchInput = document.getElementById("search");

const checkboxContainer = document.getElementById("checkboxProvince");

checkboxContainer.addEventListener('change', function(event) {

    if (event.target.matches('.checkbox-brand')) {
        if (event.target.checked) {
          searchInput.value = event.target.value;
        } else {
          searchInput.value = "";
        }
    }
});











