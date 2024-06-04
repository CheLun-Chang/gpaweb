let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();

//parameter1是控制對象
//parameter2是duration
//parameter3是控制對象原始狀態
//parameter4是控制對象動畫結束時狀態
//parameter5提早多少開始跑
time_line
  .fromTo(
    hero,
    0.75,
    { height: "0%" },
    { height: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    hero,
    0.9,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    0.75,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=0.9"
  )
  .fromTo(
    animation,
    0.75,
    { opacity: 1 },
    { opacity: 0, ease: Power2.easeInOut }
  );
setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2400);

//讓整個網站Enter key失效
addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});
//防止FORM內部的BTN交出表單
let allBtns = document.querySelectorAll("button");
allBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//選擇select內options後改變對應顏色
let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target); //e.target=<select>標籤
  });
});

//改變學分後GPA也要更新
let credits = document.querySelectorAll(".class-credits"); //學分
credits.forEach((credits) => {
  credits.addEventListener("change", (e) => {
    setGPA();
  });
});

function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B+" ||
    target.value == "B-"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C+" ||
    target.value == "C-"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D+" ||
    target.value == "D-"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  }
}

function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

function setGPA() {
  let formLength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credits"); //學分
  let selects = document.querySelectorAll("select"); //成績
  let sum = 0; //分子
  let creditSum = 0; //分母

  for (let i = 0; i < credits.length; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      //排除沒有選分數的form
      creditSum += credits[i].valueAsNumber; //學分加總
    }
  }
  for (let i = 0; i < formLength; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      //排除沒有選分數的form
      sum += credits[i].valueAsNumber * convertor(selects[i].value); //每一科學分x成績的加總
    }
  }
  //   console.log("sum is " + sum);
  //   console.log("creditSum is " + creditSum);
  let result;
  if (creditSum == 0) {
    result = (0.0).toFixed(2);
  } else {
    result = (sum / creditSum).toFixed(2);
  }
  document.getElementById("result-gpa").innerText = result;
}
let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("grader");
  //製作五個小元素
  let newInput = document.createElement("input");
  newInput.classList.add("class-type");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("placeholder", "class category");
  newInput.setAttribute("list", "opt");

  let newInput2 = document.createElement("input");
  newInput2.classList.add("class-number");
  newInput2.setAttribute("placeholder", "class number");
  newInput2.setAttribute("type", "text");

  let newInput3 = document.createElement("input");
  newInput3.classList.add("class-credits");
  newInput3.setAttribute("type", "number");
  newInput3.setAttribute("placeholder", "credits");
  newInput3.setAttribute("min", "0");
  newInput3.setAttribute("max", "6");
  newInput3.addEventListener("change", () => {
    setGPA();
  });

  let newSelect = document.createElement("select");
  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });
  newSelect.classList.add("select");
  newSelect.setAttribute("name", "select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  let newBtn = document.createElement("button");
  newBtn.classList.add("trash_button");
  newBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards"; //form移除的動畫
    e.target.parentElement.parentElement.addEventListener(
      "animationend", //偵測到動畫結束時
      (e) => {
        e.target.remove(); //從DOM移除form
        setGPA();
      }
    );
  });
  let newItag = document.createElement("i");
  newItag.classList.add("fa-trash");
  newItag.classList.add("fas");
  newBtn.appendChild(newItag);

  newDiv.appendChild(newInput);
  newDiv.appendChild(newInput2);
  newDiv.appendChild(newInput3);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newBtn);
  newForm.appendChild(newDiv);
  document.querySelector(".allInputs").appendChild(newForm);
  newForm.style.animation = "scaleUp 0.5s ease forwards";
});

let allTrash = document.querySelectorAll(".trash_button");
allTrash.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove"); //增加移除的動畫
  });
});

allTrash.forEach((trash) => {
  let form = trash.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    //transition動畫結束後觸發事件
    e.target.remove();
    setGPA();
  });
});
//排序演算法
let btn1 = document.querySelector(".sort-descending");
let btn2 = document.querySelector(".sort-ascending");
btn1.addEventListener("click", () => {
  handleSorting("descending"); //降序
});
btn2.addEventListener("click", () => {
  handleSorting("ascending"); //升序
});
function handleSorting(direction) {
  let graders = document.querySelectorAll("div.grader");
  let objectArray = [];

  for (let i = 0; i < graders.length; i++) {
    //都是string
    let class_name = graders[i].children[0].value;
    let class_number = graders[i].children[1].value;
    let class_credit = graders[i].children[2].value;
    let class_grade = graders[i].children[3].value;
    if (
      //有任一個不是空的
      !(
        class_name == "" &&
        class_number == "" &&
        class_credit == "" &&
        class_grade == ""
      )
    ) {
      //就製作這個obj
      let class_object = {
        class_name,
        class_number,
        class_credit,
        class_grade,
      };
      objectArray.push(class_object);
    }
  }

  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].class_grade_number = convertor(objectArray[i].class_grade); //成績換成數字
  }

  if (objectArray.length == 0) {
    return;
  }

  objectArray = mergeSort(objectArray);
  if (direction == "descending") {
    objectArray = objectArray.reverse();
  }
  //根據objectArray的內容更新網頁
  let allInputs = document.querySelector(".allInputs");
  allInputs.innerHTML = ""; //先清空

  for (let i = 0; i < objectArray.length; i++) {
    allInputs.innerHTML += `<form>
    <div class="grader">
      <input
        class="class-type"
        type="text"
        placeholder="class category"
        list="opt"
        value=${objectArray[i].class_name}
      /><!--  
       --><input
        class="class-number"
        type="text"
        placeholder="class number"
        value=${objectArray[i].class_number}
      /><!--                 
      --><input
        class="class-credits"
        type="number"
        min="0"
        max="6"
        placeholder="credits"
        value=${objectArray[i].class_credit}
      /><!--  
      --><select class="select" name="select">
        <option value=""></option>
        <option value="A">A</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="B-">B-</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="C-">C-</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="D-">D-</option>
        <option value="F">F</option></select
      ><!--
        --><button class="trash_button">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    </form>`; //注意!form裡面的內容都沒有掛到監聽器
  }

  //SELECT可直接用JS更改
  graders = document.querySelectorAll("div.grader");
  for (let i = 0; i < graders.length; i++) {
    graders[i].children[3].value = objectArray[i].class_grade;
  }

  //select事件監聽
  allSelects = document.querySelectorAll("select");
  allSelects.forEach((select) => {
    changeColor(select);
    select.addEventListener("change", (e) => {
      setGPA();
      changeColor(e.target);
    });
  });

  //credit事件監聽
  let allCredits = document.querySelectorAll(".class-credits");
  allCredits.forEach((credits) => {
    credits.addEventListener("change", () => {
      setGPA();
    });
  });

  //垃圾桶
  let allTrash = document.querySelectorAll(".trash_button");
  allTrash.forEach((trash) => {
    trash.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.style.animation =
        "scaleDown 0.5s ease forwards"; //form移除的動畫
      e.target.parentElement.parentElement.addEventListener(
        "animationend", //偵測到動畫結束時
        (e) => {
          e.target.remove(); //從DOM移除form
          setGPA();
        }
      );
    });
  });
}

function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i].class_grade_number > a2[j].class_grade_number) {
      result.push(a2[j]); //較小的先放進陣列
      j++; //然後再比一次
    } else {
      result.push(a1[i]);
      i++;
    }
  }
  //i或j超過自己長度的時候
  while (i < a1.length) {
    //j超過的情況，剩下的a1[i]全部丟進result
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    //i超過的情況，剩下的a2[j]全部丟進result
    result.push(a2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length == 0) {
    return;
  }
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length); //陣列拆成左右兩邊比較
    return merge(mergeSort(left), mergeSort(right)); //遞迴
  }
}
