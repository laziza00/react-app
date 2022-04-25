

let inputName = document.querySelector('.nameinput')
let inputEamil = document.querySelector('.email')
let inputNumber = document.querySelector('.number')
let formAdd = document.querySelector('.box__submit')
let box__list= document.querySelector('.box__list')
let form= document.querySelector('#form')
let select = document.querySelector('#selectOne')

let arr =[]
let newListArr =[]



// inputName.addEventListener('keyup', (e) => {
//     let userNameValue = inputName.value.trim().toLowerCase()
//     let boxText1 = document.querySelector('.nametext')

//     try{
//         if(userNameValue.match(/[a-z]/) !=null && userNameValue.match(/[!@#$%^&*]/)==null && userNameValue!= "" && userNameValue.match(/[0-9]/) ==null) {


      
//             userName.classList.add('green__border')
//             userName.classList.remove('red__border')
//             boxText1.style.color ="green"
//             throw "Succes"
//         }
//         else {
//             userName.classList.add('red__border')
//             userName.classList.remove('green__border')
//             boxText1.style.color ="red"
//             throw "Error: Usernme cannot be blank"
//         }
//     }catch(e) {
//         boxText1.innerHTML =e
//     }
// })

// inputEamil.addEventListener('keyup', (e) => {
//     let boxText2 = document.querySelector('.box__text2')
//     let emailValue = inputEamil.value.trim()
// try {
//         if(emailValue.includes("@")  && emailValue !="" || emailValue.match(/[0-9]/) !=null ) {

         
//             email.classList.add('green__border')
//             email.classList.remove('red__border')
//             boxText2.style.color ="green"
//             throw "Success";
//     }
//     else {
   
//         email.classList.add('red__border')
//         email.classList.remove('green__border')
//         boxText2.style.color ="red"
//         throw "Email be cannot be blank";
//     }
//     }catch(e) {
//     boxText2.innerHTML = e
// }
// })

// inputNumber.addEventListener('keyup', (e) => {
//     let boxText3 = document.querySelector('.box__text3')
//     let numberValue = inputNumber.value.trim()
//     try {
//         if(numberValue.includes("+") &&  numberValue != "" ||numberValue.match(/[0-9]/) !=null && numberValue.length<=12 ) {

//             number.classList.add('green__border')
//             number.classList.remove('red__border')
//             boxText3.style.color ="green"
//             throw "Success";
//     }
//     else {
//         number.classList.add('red__border')
//         number.classList.remove('green__border')
//         boxText3.style.color ="red"
//         throw "number be cannot be blank";
//     }
//     }catch(e) {
//          boxText3.innerHTML = e
// }
// })



form.addEventListener('submit', (e) =>{
 
    e.preventDefault();

    arr.push({
        firstname: inputName.value,
        email: inputEamil.value,
        telnum: inputNumber.value,
        fcategory: select.value,
    }
    );

    newListArr= arr.map((item) => {
        return `
        <li class="box__item" >
        <p class="box__item-name">${item.firstname}</p>
        <p class="box__item-email">${item.email}</p>
        <p class="box__item-num">${item.telnum}</p>
        <p class="box__item-email">${item.fcategory}</p>
        <button class="box__remove-btn">
        <i class='bx bx-trash' ></i>
        </button>
        <button class="box__edit-btn" >
        <i class='bx bx-edit-alt'></i>
        </button>
      </li>`
    })
    box__list.innerHTML= newListArr.join(" ")


    inputName.value = "",
    inputEamil.value = "",
    inputNumber.value ="";

    let removeBtn = document.querySelectorAll('.box__remove-btn');
    removeBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(item);

            confirm("Are you sure you want to delete it?"); 
            e.currentTarget.parentNode.remove()
        })
    })
})



let header__input = document.querySelector('.header__input')
header__input.addEventListener('keyup', ()=>{

})
console.log(box__list);

























// function Showitems(cartItemsArray, inputName, inputEamil, inputNumber) {
//     newItems =[]

//     // cartItemsArray.forEach((item)=> {
//         // console.log(item);
//         let li = document.createElement('li')
//         li.className ="modal__item";
//         li = `
//         <h3>${cartItemsArray[0].name =inputName}</h3>
//         <p>${cartItemsArray[0].email=inputEamil}</p>
//         <p>${cartItemsArray[0].number=inputNumber}</p>
//         `
//         newItems.push(li);
//         console.log(newItems);
//     // })
//     modal__list.innerHTML = newItems.join("")
// }
// console.log(newItems);
// console.log(modal__list);
// Showitems(cartItemsArray, inputName, inputEamil, inputNumber)

// formAdd.addEventListener("submit", (e) => {

//     let count = cartItemsArray[cartItemsArray.length-1].id;
//     e.preventDefault();
//     newItems.push({
//         id: ++count,
//         name: inputName.value,
//         email: inputEamil.value,
//         inputNumber: inputNumber.value,
//     })
//     modal__list.innerHTML = newItems.join("")
//     // Showitems(cartItemsArray,inputName,inputEamil,inputNumber);
//     inputName.value =""
//     inputEamil.value =""
//     inputNumber.value =""

// })

  




//   function editCard(elId) {
//     cartItemsArray.forEach((item) => {
//       if (elId === item.id) {
//         inputNameEdit.value = item.name;
//         editTextarea.value = item.desc;
//         editItem(elId);
//       }
//     });
//   }
  
//   function editItem(elId) {
//     let count = 1;
//     formEdit.addEventListener("submit", (e) => {
//       e.preventDefault();
//       console.log(cartItemsArray[elId - 1].name);
//       if (count == 1) {
//         cartItemsArray[elId - 1].name = inputNameEdit.value;
//         cartItemsArray[elId - 1].desc = editTextarea.value;
//         showItems(cartItemsArray);
//         count++;
//       }
//     });
//   }