// range input
const wrappers = document.querySelectorAll(".wrapper");

wrappers.forEach(wrapper => {
    const rangeInputs = wrapper.querySelectorAll(".range-input input"),
          yearInputs = wrapper.querySelectorAll(".year-input input"),
          progress = wrapper.querySelector(".slider .progress");

    let yearGap = 1; // Minimum gap is 1 year

    function updateProgress() {
        let minVal = parseInt(rangeInputs[0].value),
            maxVal = parseInt(rangeInputs[1].value);
        progress.style.left = ((minVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
        progress.style.right = 100 - ((maxVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
    }

    yearInputs.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(yearInputs[0].value),
                maxVal = parseInt(yearInputs[1].value);

            if ((maxVal - minVal >= yearGap) && maxVal <= parseInt(yearInputs[1].max) && minVal >= parseInt(yearInputs[0].min)) {
                if (e.target.className === "input-min") {
                    rangeInputs[0].value = minVal;
                    progress.style.left = ((minVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                } else {
                    rangeInputs[1].value = maxVal;
                    progress.style.right = 100 - ((maxVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                }
            }
        });
    });

    rangeInputs.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(rangeInputs[0].value),
                maxVal = parseInt(rangeInputs[1].value);

            if (maxVal - minVal < yearGap) {
                if (e.target.className === "range-min") {
                    rangeInputs[0].value = maxVal - yearGap;
                } else {
                    rangeInputs[1].value = minVal + yearGap;
                }
            } else {
                yearInputs[0].value = minVal;
                yearInputs[1].value = maxVal;
                progress.style.left = ((minVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
                progress.style.right = 100 - ((maxVal - parseInt(rangeInputs[0].min)) / (parseInt(rangeInputs[0].max) - parseInt(rangeInputs[0].min))) * 100 + "%";
            }
        });
    });

    updateProgress();
});


// hàm tìm kiếm theo năm sản xuất
// Function to filter products based on price, year, and kilometer range
const searchPriceCar = async () => {
  const minPrice1 = parseInt(wrappers[0].querySelector(".range-input .range-min").value);
  const maxPrice1 = parseInt(wrappers[0].querySelector(".range-input .range-max").value);

  const minYear = parseInt(wrappers[1].querySelector(".range-input .range-min").value);
  const maxYear = parseInt(wrappers[1].querySelector(".range-input .range-max").value);

  const minKilometer = parseInt(wrappers[2].querySelector(".range-input .range-min").value);
  const maxKilometer = parseInt(wrappers[2].querySelector(".range-input .range-max").value);

  try {
    const response = await fetch(`http://localhost:5000/car`);
    const data = await response.json();

    // Filter the product list based on all three ranges
    const filteredProducts = data.filter(product => {
      const price = parseInt(product.Price);
      const year = parseInt(product.Year);
      const kilometer = parseInt(product.Kilometer);

      return price >= minPrice1 && price <= maxPrice1 &&
            year >= minYear && year <= maxYear &&
            kilometer >= minKilometer && kilometer <= maxKilometer;
    });

    // After receiving data from the API and filtering products, update the user interface
    updateProductList(filteredProducts);
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
};

const updateProductList = (products) => {
  const productList = document.getElementById("show");
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

wrappers.forEach((wrapper, index) => {
  const rangeInputs = wrapper.querySelectorAll(".range-input input");
  rangeInputs.forEach(input => {
    input.addEventListener('input', searchPriceCar);
  });
});

searchPriceCar();









// hàm hiển thị danh sách sản phẩm có trong json
document.addEventListener("DOMContentLoaded", function() {
  // Sử dụng fetch để lấy dữ liệu từ tệp JSON
  fetch('http://localhost:5000/car')
    .then(response => response.json())
    .then(data => {

      if (Array.isArray(data)) {
        const carList = document.getElementById('show');
        
        carList.innerHTML = '';

        data.forEach(car => {
          const carDiv = document.createElement('div');
          carDiv.classList.add('card', 'me-3', 'mb-3');
          carDiv.innerHTML = `
            <div class="card">
              <img src="${car.ImageUrl}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title" style="height: 40px;">${car.Title}</h5>
                  <p class="card-text"><i class="bi bi-calendar-event-fill"></i> ${car.Year}</p>
                  <p class="card-text"><i class="bi bi-speedometer"></i> ${car.Kilometer} km</p>
                  <br>
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
      } else {
        console.error("Expected an array but got:", data);
      }
    })
    .catch(error => console.error('Error fetching data:', error));
});




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
      checkbox.onclick = filterByAddress;

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

