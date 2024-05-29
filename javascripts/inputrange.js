const rangeInput1 = document.querySelectorAll("#wrapper1 .range-input input"),
    yearInput1 = document.querySelectorAll("#wrapper1 .year-input input"),
    progress1 = document.querySelector("#wrapper1 .slider .progress");

let yearGap1 = 1; // Minimum gap is 1 year

function updateProgress1() {
    let minVal = parseInt(rangeInput1[0].value),
        maxVal = parseInt(rangeInput1[1].value);
    progress1.style.left = ((minVal - 2000) / (rangeInput1[0].max - 2000)) * 100 + "%";
    progress1.style.right = 100 - ((maxVal - 2000) / (rangeInput1[1].max - 2000)) * 100 + "%";
}

yearInput1.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(yearInput1[0].value),
            maxVal = parseInt(yearInput1[1].value);
        
        if ((maxVal - minVal >= yearGap1) && maxVal <= 2024 && minVal >= 2000) {
            if (e.target.className === "input-min") {
                rangeInput1[0].value = minVal;
                progress1.style.left = ((minVal - 2000) / (rangeInput1[0].max - 2000)) * 100 + "%";
            } else {
                rangeInput1[1].value = maxVal;
                progress1.style.right = 100 - ((maxVal - 2000) / (rangeInput1[1].max - 2000)) * 100 + "%";
            }
        }
    });
});

rangeInput1.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput1[0].value),
            maxVal = parseInt(rangeInput1[1].value);
        
        if (maxVal - minVal < yearGap1) {
            if (e.target.className === "range-min") {
                rangeInput1[0].value = maxVal - yearGap1;
            } else {
                rangeInput1[1].value = minVal + yearGap1;
            }
        } else {
            yearInput1[0].value = minVal;
            yearInput1[1].value = maxVal;
            progress1.style.left = ((minVal - 2000) / (rangeInput1[0].max - 2000)) * 100 + "%";
            progress1.style.right = 100 - ((maxVal - 2000) / (rangeInput1[1].max - 2000)) * 100 + "%";
        }
    });
});

updateProgress1();

const rangeInput2 = document.querySelectorAll("#wrapper2 .range-input input"),
    yearInput2 = document.querySelectorAll("#wrapper2 .year-input input"),
    progress2 = document.querySelector("#wrapper2 .slider .progress");

let kmGap2 = 1; 

function updateKmProgress2() {
    let minVal = parseInt(rangeInput2[0].value),
        maxVal = parseInt(rangeInput2[1].value);
    progress2.style.left = ((minVal - 0) / (500000 - 0)) * 100 + "%";
    progress2.style.right = 100 - ((maxVal - 0) / (500000 - 0)) * 100 + "%";
}

yearInput2.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(yearInput2[0].value),
            maxVal = parseInt(yearInput2[1].value);
        
        if ((maxVal - minVal >= kmGap2) && maxVal <= 500000 && minVal >= 0) {
            if (e.target.className === "input-min") {
                rangeInput2[0].value = minVal;
                progress2.style.left = ((minVal - 0) / (500000 - 0)) * 100 + "%";
            } else {
                rangeInput2[1].value = maxVal;
                progress2.style.right = 100 - ((maxVal - 0) / (500000 - 0)) * 100 + "%";
            }
        }
    });
});

rangeInput2.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput2[0].value),
            maxVal = parseInt(rangeInput2[1].value);
        
        if (maxVal - minVal < kmGap2) {
            if (e.target.className === "range-min") {
                rangeInput2[0].value = maxVal - kmGap2;
            } else {
                rangeInput2[1].value = minVal + kmGap2;
            }
        } else {
            yearInput2[0].value = minVal;
            yearInput2[1].value = maxVal;
            progress2.style.left = ((minVal - 0) / (500000 - 0)) * 100 + "%";
            progress2.style.right = 100 - ((maxVal - 0) / (500000 - 0)) * 100 + "%";
        }
    });
});

updateKmProgress2();


