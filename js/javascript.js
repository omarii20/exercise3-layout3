const OpacityNumber = [0.7, 0.5, 0.3, 0.1]

window.onload = () => {
    
  for (let i = 0 ; i < 6; i++){ 

    //create big div with id bigDiv iside the section.
    const createBigDiv = document.createElement('div');
    createBigDiv.id = "bigDiv";
    document.getElementById("section3").appendChild(createBigDiv);
    
    //create small divs inside a bigDiv.
    let j=0;
    for(let i=0; i < 4; i++){
      const createSmallDiv = document.createElement('div');
      createSmallDiv.classList.add("newDivAdded");
      createBigDiv.appendChild(createSmallDiv);
      createSmallDiv.style.backgroundColor = 'black';
      createSmallDiv.style.opacity = OpacityNumber[j++];
    }
    
    if(j==5){
      j-0;
    }
  }


// changing color div after clicking - toggle . 
const toggleDivColor = document.getElementsByClassName("newDivAdded");

  for(let i=0; i < toggleDivColor.length; i++){
      const orginalOpacity = toggleDivColor[i].style.opacity;

      toggleDivColor[i].addEventListener("click", () => {
      const backgroundColor = toggleDivColor[i].style.backgroundColor;

      if (backgroundColor === 'black') {
        toggleDivColor[i].style.backgroundColor = 'pink';
        toggleDivColor[i].style.opacity = 1;
      } else {
        toggleDivColor[i].style.backgroundColor = 'black';
        toggleDivColor[i].style.opacity = orginalOpacity;
      }
    });

  }


  //changing opacity+width+height of random div after clicking on plus icon .
  const sectionDiv = document.querySelectorAll(".newDivAdded");
  const randomDiv =  Math.floor((Math.random() * sectionDiv.length));
  const originalOpacitDiv = sectionDiv[randomDiv].style.opacity;

  let changing_div = (opc, color, i, num) => {
      sectionDiv[i].style.backgroundColor = color;
      sectionDiv[i].style.opacity = opc;
      sectionDiv[i].textContent  = "reset in " + num;
  }

  stopEvent = () => {
    plusIcon.removeEventListener("click", changeStyleOfRandomDiv);
    document.location.reload();
  }

  randomColor = () => {
    let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let buildColor = [];

    for(let i=0; i < 6; i++){
      buildColor.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    let fullColor = `#${buildColor.join("")}`;
    return fullColor; 
  }

  const plusIcon = document.getElementById("icon");
  let countOdClick = 1;
  let MinusOpacity = 1;

  let  changeStyleOfRandomDiv = plusIcon.addEventListener("click", () => {

    changing_div(MinusOpacity,randomColor(), randomDiv, 5-countOdClick);
    // console.log(MinusOpacity);
    // console.log(countOdClick);

    if(countOdClick == 5 ){
      sectionDiv[randomDiv].style.backgroundColor = 'black';
      sectionDiv[randomDiv].style.opacity = originalOpacitDiv;
      stopEvent();
    }
    MinusOpacity -= 0.2; //send to change also opacity of color , value of opacity going down.
    countOdClick++;
  });


}