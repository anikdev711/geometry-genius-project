
function calculateTriangleArea(){

    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);

    //get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // console.log(height);

    //validation check
    if(isNaN(base) || isNaN(height)){
        alert('please insert a number');
        return;
    }

    const triangleArea = 0.5 * base * height;

    //show the area:
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText  = triangleArea;

    addToCalculationEntry('Triangle', triangleArea);

}

function calculateRectangleArea(){

    //get the rectangle width:
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    //get the rectangle length:
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // console.log(length);

    //validation check
    if(isNaN(width) || isNaN(length)){
        alert('please give number');
        return;
    }

    const rectangleArea = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // console.log(base, height);

    //validation check
    if(isNaN(base) || isNaN(height)){
        alert('please give number');
        return;
    }

    const parallelogramArea = base * height;

    // const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    // parallelogramAreaSpan.innerText = parallelogramArea;

    setElementInnerText('parallelogram-area', parallelogramArea);
}

function calculateEllipseArea(){
    const majorAxis = getInputValue('ellipse-major-axis');
    const minorAxis = getInputValue('ellipse-minor-axis');
    // console.log(majorAxis, minorAxis);

    //validation check
    if(isNaN(majorAxis) || isNaN(minorAxis)){
        alert('please give a number');
        return;
    }

    const ellipseArea = 3.14 * majorAxis * minorAxis;
    const ellipseAreaTwoDecimal = ellipseArea.toFixed(2);
    setElementInnerText('ellipse-area', ellipseAreaTwoDecimal);

}



//common functions
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const input = parseFloat(inputValueText);
    return input;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

//add to the calculation

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    
    const p = document.createElement('p');
    p.classList.add('my-4');

    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-primary" >Convert to m<sup>2</sup></button>`;
    calculationEntry.appendChild(p);
}