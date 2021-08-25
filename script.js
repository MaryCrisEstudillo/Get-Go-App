


//////FORM DOM/////////
let inputAddItems = document.getElementById('addItemInventory');
let inventoryAddItems = document.getElementById('addItemFormInventory');
let emergencyKitAddItems = document.getElementById('addItemFormEmergensyKit');
let documentsAddItems = document.getElementById('addItemFormDocuments');
let medicinesAddItems = document.getElementById('addItemFormMedicines');
let foodsAddItems = document.getElementById('addItemFormFoods');
let clothesAddItems = document.getElementById('addItemFormClothes');
//////INVENTORY VALUE DOM/////
    let inventoryInsideForm = document.getElementById('formInsideInventory');
    let expirationValue = document.getElementById('dateExpirationInventory');
    let remindMeValue = document.getElementById('dateRemindMeInventory');
    let notesInsideValue = document.getElementById('inputNotesInventory');
    let CategoryValue = document.getElementById('selectByCategory');
    // let deleteFormValues = document.getElementById('formDeleteInventory');
//////EMERGENCY KIT VALUE DOM/////
    let inputAddEmergencyKitItems = document.getElementById('addItemEmergensyKit').value;
    let EmergencyKitInsideForm = document.getElementById('formInsideEmergensyKit');
    let emergencyKitValue = document.getElementById('dateExpirationEmergensyKit').value;
    let emergencyKitremindMeValue = document.getElementById('dateRemindMeEmergensyKit').value;
    let emergencyKitnotesValue = document.getElementById('inputNotesEmergensyKit').value
    // let deleteFormemergencyKitValue = document.getElementById('formDeleteEmergensyKit');
//////ALL INSIDE FORM VALUE DOM/////
let inputAddDocumentItems = document.getElementById('addItemDocuments').value;
let documentInsideForm = document.getElementById('formInsideDocuments');
let medicinesInsideForm = document.getElementById('formInsideMedicines');
let foodsInsideForm = document.getElementById('formInsideFoods');
let ClothesInsideForm = document.getElementById('formInsideClothes');
// let deleteFormDocumentValue = document.getElementById('formDeleteEmergensyKit');

//////MENU NAV DOM/////
let menuContainer = document.getElementById('menuContainer');
let blackBckgrnd = document.getElementById('blackBG');
let menuBtnsContainerOne = document.getElementById('menuButtonsContainer1');
let menuBtnsContainerTwo = document.getElementById('menuButtonsContainer2');

//////LIST CONTAINERS DOM/////
let emergencyKitContainer = document.getElementById('listContainerEmergencyKit');
let documentsContainer = document.getElementById('listContainerDocuments');
let medicinesContainer = document.getElementById('listContainerMedicines');
let foodContainer = document.getElementById('listContainerFoods');
let clothesContainer = document.getElementById('listContainerClothes');
let inventoryContainer = document.getElementById('listContainerInventory');
//////RESULT CONTAINERS/////
let resultsEmergencyKit = document.getElementById('resultsEmergencyKit');
let resultsDocuments = document.getElementById('resultsDocuments');
let resultsMedicines = document.getElementById('resultsMedicines');
let resultsFoods = document.getElementById('resultsFoods');
let resultsClothes = document.getElementById('resultsClothes');
let resultsInventory = document.getElementById('resultsInventory');
///////ALL ADDITEMSUBMIT BUTTON////////////
let submitEmergencyKit = document.getElementById('submitItemEmergensyKit');
let submitDocuments = document.getElementById('submitItemDocuments');
let submitMedicines = document.getElementById('submitItemMedicines');
let submitFoods = document.getElementById('submitItemFoods');
let submitClothes = document.getElementById('submitItemClothes');
let submitInventory = document.getElementById('submitItemInventory');

let addContactForm = document.getElementById('addContactContainer');
let modalAlert = document.getElementById('modalAlert');
let closeAlert = document.getElementById('modalAlertBtn');


function openNav(){
inventoryAddItems.style.visibility = 'hidden'
blackBckgrnd.style.visibility = 'visible'
menuContainer.style.visibility = 'visible'
menuBtnsContainerOne.style.visibility = 'visible'
menuBtnsContainerTwo.style.visibility = 'visible'
document.getElementById('modalContainerAndTitle').style.visibility = 'hidden'
document.getElementById('blackBgTwo').style.visibility = 'hidden'
}

function AddItemFormsHide(){
inventoryAddItems.style.visibility = 'hidden';
emergencyKitAddItems.style.visibility = 'hidden';
documentsAddItems.style.visibility = 'hidden';
medicinesAddItems.style.visibility = 'hidden';
foodsAddItems.style.visibility = 'hidden';
clothesAddItems.style.visibility = 'hidden';
}
function closeAllcontainer(){
AddItemFormsHide()
blackBckgrnd.style.visibility = 'hidden';
menuContainer.style.visibility = 'hidden';
menuBtnsContainerOne.style.visibility = 'hidden';
menuBtnsContainerTwo.style.visibility = 'hidden';
emergencyKitContainer.style.visibility = 'hidden';
documentsContainer.style.visibility = 'hidden';
medicinesContainer.style.visibility = 'hidden';
foodContainer.style.visibility = 'hidden';
clothesContainer.style.visibility = 'hidden';
document.getElementById('contactsContainer').style.visibility = "hidden";

}
function closeAllAddSubmitBtn(){
 submitEmergencyKit.style.visibility = 'hidden';
 submitDocuments.style.visibility = 'hidden';
 submitMedicines.style.visibility = 'hidden';
 submitFoods.style.visibility = 'hidden';
 submitClothes.style.visibility = 'hidden'; 
 submitInventory.style.visibility = 'hidden'; 
}

function emergncyKitListCon(){
    closeAllcontainer()
    closeAllAddSubmitBtn()
    emergencyKitAddItems.style.visibility = 'visible';
    emergencyKitContainer.style.visibility = 'visible';
    submitEmergencyKit.style.visibility = 'visible';

}
function documentsListCon(){
    closeAllcontainer()
    closeAllAddSubmitBtn()
    documentsAddItems.style.visibility = 'visible';
    documentsContainer.style.visibility = 'visible';
    submitDocuments.style.visibility = 'visible';

}
function medicinesListCon(){
    closeAllcontainer()
    closeAllAddSubmitBtn()
    medicinesAddItems.style.visibility = 'visible';
    medicinesContainer.style.visibility = 'visible';
    submitMedicines.style.visibility = 'visible';

}
function foodsListCon(){
    closeAllcontainer()
    closeAllAddSubmitBtn()
    foodsAddItems.style.visibility = 'visible';
    foodContainer.style.visibility = 'visible';
    submitFoods.style.visibility = 'visible';
}
function clothesListCon(){
    closeAllcontainer()
    closeAllAddSubmitBtn()
    clothesAddItems.style.visibility = 'visible';
    clothesContainer.style.visibility = 'visible';
    submitClothes.style.visibility = 'visible';

}
function inventoryListCon(){
    closeAllcontainer()
    closeAllAddSubmitBtn()
    inventoryContainer.style.visibility = 'visible';
    inventoryAddItems.style.visibility = 'visible';
    submitInventory.style.visibility = 'visible';
}

function updateItemsListCon(){
    closeAllcontainer();
    blackBckgrnd.style.visibility = 'visible';
    inventoryAddItems.style.visibility = 'visible';
    failedUpdates.style.visibility = 'hidden';
    document.getElementById('updateItemsContainer').style.visibility = 'visible';
 
}
function lateUpdateListCon(){
    closeAllcontainer();
    blackBckgrnd.style.visibility = 'visible';
    inventoryAddItems.style.visibility = 'visible';
    failedUpdates.style.visibility = 'visible';
}

function addContact(){
    addContactForm.style.visibility = 'visible';
}

function googleMapsApi(){
    map.style.visibility = 'visible'
}
function emergencyContacts(){
    document.getElementById('contactsContainer').style.visibility = "visible";
    document.getElementById('closeContactContainer').style.visibility = "visible";
}
class Items {
 constructor (title, date, expiration, remindMe, details, category){
     this.title            = title;
     this.date             = date;
     this.expiration       = expiration;
     this.remindMe         = remindMe;
     this.details          = details;
     this.category         = category;
 }
}

class NewContact { 
    constructor (name, email, contactNum, details){
        this.name        = name;
        this.email       = email;
        this.contactNum  = contactNum;
        this.details     = details;
    }
}
    class Functions {
        static storeItems(){
        let storeitem;
        if (localStorage.getItem('List')===null){
            storeitem = [];
        }else {
            storeitem = JSON.parse(localStorage.getItem('List'));
               }
        return storeitem;
                           }
        static storeContacts(){
        let storeContact;
        if (localStorage.getItem('Contacts')===null){
            storeContact = [];
        }else {
            storeContact = JSON.parse(localStorage.getItem('Contacts'));
               }
        return storeContact;
                           }
static ItemstoAdd(newItem){
    const storeitem = Functions.storeItems();
    storeitem.push(newItem);
    localStorage.setItem('List', JSON.stringify(storeitem));
 }

 static ContactstoAdd(newContact){
    const storeContact = Functions.storeContacts();
    storeContact.push(newContact);
    localStorage.setItem('Contacts', JSON.stringify(storeContact));
 }

 static getDate(){
    let dateNew = new Date();
    let daysBe = dateNew.getDate()<10?`0${dateNew.getDate()}`:dateNew.getDate();
    let monthsBe = dateNew.getMonth()<10?`0${dateNew.getMonth()+1}`:dateNew.getMonth()+1;
    let yearsBe = dateNew.getFullYear();
    let dateFinal = `${yearsBe}-${monthsBe}-${daysBe}`; 
    return dateFinal;
}

static listSorted(resultKit, strCategory, titleForm, insideForm){
    const storeitem = Functions.storeItems();
    resultKit.innerHTML = ''
    for(let j=0; j<storeitem.length; j++){
    if(storeitem[j].category == strCategory){
        let modalPrint = document.getElementById('modalContainerAndTitle')
        let createFormbtn = document.createElement('div');
        let createDiv = document.createElement('div');
        let createViewdetails = document.createElement('img');
        createDiv.className = 'listEach';
        createFormbtn.src = 'images/burger.png';
        createViewdetails.src = 'images/chevron.png';
        createFormbtn.id = j;
    
        createFormbtn.className = 'createdbtnDiv';
        createDiv.textContent = storeitem[j].title.toUpperCase();
        createDiv.appendChild(createFormbtn);
        createDiv.appendChild(createViewdetails);
        resultKit.appendChild(createDiv);
        createFormbtn.onclick = function (){
        let titleFormRed = document.getElementById(titleForm);
        insideForm.style.visibility = 'visible';
        titleFormRed.innerHTML = storeitem[this.id].title;
                                           }
        createViewdetails.addEventListener('click', ()=>{
        modalPrint.style.visibility = "visible";
        modalPrint.innerHTML = '';
        let createListTitle = document.createElement('div');
        let createListExp = document.createElement('li');
        let createListRM = document.createElement('li');
        let createListDetails = document.createElement('li');
        let createListCategory = document.createElement('li');
        let createBtnClose = document.createElement('img');
        let createBtnDelete = document.createElement('div');
        createBtnDelete.className = "submitBttn";
        createBtnDelete.textContent = "DELETE";
        createBtnDelete.id = j;
        createListTitle.className = 'modalTitle';
        createListExp.className = 'modalList';
        createListRM.className = 'modalList';
        createListDetails.className = 'modalList';
        createListCategory.className = 'modalList';
        createBtnClose.className = "modalListBtnClose";
        createBtnClose.src ='images/chevronDown.png';
        createListTitle.textContent = storeitem[j].title.toUpperCase();
        createListExp.textContent = `Expiration date: ${storeitem[j].expiration}`;
        createListRM.textContent = `Remind Me: ${storeitem[j].remindMe}`;
        createListDetails.textContent = `Details: ${storeitem[j].details}`;
        createListCategory.textContent = `category: ${strCategory}`;
        modalPrint.appendChild(createListTitle);
        modalPrint.appendChild(createListExp);
        modalPrint.appendChild(createListRM);
        modalPrint.appendChild(createListDetails);
        modalPrint.appendChild(createListCategory);
        modalPrint.appendChild(createBtnClose); 
        modalPrint.appendChild(createBtnDelete);
        createBtnClose.addEventListener('click',()=>{
            modalPrint.style.visibility = "hidden";
        })
        createBtnDelete.addEventListener('click',()=>{
            const storeitem = Functions.storeItems();
            storeitem.splice(this.id, 1);
            localStorage.setItem('List', JSON.stringify(storeitem));
            Functions.listSorted(resultsClothes, "Clothes", 'titleFormClothes', ClothesInsideForm);
            Functions.listSorted(resultsFoods, "Foods", 'titleFormFoods', foodsInsideForm);
            Functions.listSorted(resultsMedicines , "Medicines", 'titleFormMedicines', medicinesInsideForm);
            Functions.listSorted(resultsEmergencyKit, "Emergency Kit", 'titleFormEmergensyKit', EmergencyKitInsideForm);
            Functions.listSorted(resultsDocuments, "Documents", 'titleFormDocuments', documentInsideForm);
            Functions.listItems()
            insideForm.style.visibility = 'hidden';
            modalPrint.style.visibility = "hidden";
        })

    })
    }
    }
}

static listItems(){
    const storeitem = Functions.storeItems();
    resultsInventory.innerHTML = '';
    for(let i=0; i<storeitem.length; i++){
    let modalPrint = document.getElementById('modalContainerAndTitle')
    let createFormbtn = document.createElement('div');
    let createDiv = document.createElement('div');
    let createViewdetails = document.createElement('img');
    createDiv.className = 'listEach';
    createFormbtn.src = 'images/burger.png';
    createViewdetails.src = 'images/chevron.png';
    createFormbtn.id = i;
    createFormbtn.className = 'createdbtnDiv';
    createDiv.textContent = storeitem[i].title.toUpperCase();
    createDiv.appendChild(createFormbtn);
    createDiv.appendChild(createViewdetails);
    resultsInventory.appendChild(createDiv);

    createFormbtn.onclick = function (){
    let titleFormRed = document.getElementById('titleFormInventory');
    inventoryInsideForm.style.visibility = 'visible';
    titleFormRed.innerHTML = storeitem[this.id].title;
    
                                       }
    createViewdetails.addEventListener('click', ()=>{
        modalPrint.style.visibility = "visible";
        modalPrint.innerHTML = '';
        let createListTitle = document.createElement('div');
        let createListExp = document.createElement('li');
        let createListRM = document.createElement('li');
        let createListDetails = document.createElement('li');
        let createListCategory = document.createElement('li');
        let createBtnClose = document.createElement('img');
        let createBtnDelete = document.createElement('div');
        createBtnDelete.className = "submitBttn";
        createBtnDelete.textContent = "DELETE";
        createBtnDelete.id = i;
        createListTitle.className = 'modalTitle';
        createListExp.className = 'modalList';
        createListRM.className = 'modalList';
        createListDetails.className = 'modalList';
        createListCategory.className = 'modalList';
        createBtnClose.className = "modalListBtnClose";
        createBtnClose.src ='images/chevronDown.png';
        createListTitle.textContent = storeitem[i].title.toUpperCase()
        createListExp.textContent = `Expiration date: ${storeitem[i].expiration}`;
        createListRM.textContent = `Remind Me: ${storeitem[i].remindMe}`;
        createListDetails.textContent = `Details: ${storeitem[i].details}`;
        createListCategory.textContent = `category: ${storeitem[i].category}`;
        modalPrint.appendChild(createListTitle);
        modalPrint.appendChild(createListExp);
        modalPrint.appendChild(createListRM);
        modalPrint.appendChild(createListDetails);
        modalPrint.appendChild(createListCategory);
        modalPrint.appendChild(createBtnClose); 
        modalPrint.appendChild(createBtnDelete); 
        createBtnClose.addEventListener('click',()=>{
            modalPrint.style.visibility = "hidden";
        })
        createBtnDelete.addEventListener('click',()=>{
            const storeitem = Functions.storeItems();
            // console.log(storeitem[i])
            storeitem.splice(this.id, 1);
            localStorage.setItem('List', JSON.stringify(storeitem));
            Functions.listItems()
            Functions.listSorted(resultsClothes, "Clothes", 'titleFormClothes', ClothesInsideForm);
            Functions.listSorted(resultsFoods, "Foods", 'titleFormFoods', foodsInsideForm);
            Functions.listSorted(resultsMedicines , "Medicines", 'titleFormMedicines', medicinesInsideForm);
            Functions.listSorted(resultsEmergencyKit, "Emergency Kit", 'titleFormEmergensyKit', EmergencyKitInsideForm);
            Functions.listSorted(resultsDocuments, "Documents", 'titleFormDocuments', documentInsideForm);
            inventoryInsideForm.style.visibility = 'hidden';
            modalPrint.style.visibility = "hidden";
        })

    })
}   
}
        
    static listEmergencyContacts(){
        const storeContact = Functions.storeContacts();
        let contactsContainer = document.getElementById('contactsContainer');
        let detailsContainer = document.getElementById('modalInside');
        let createCloseBtn = document.getElementById('closeContactContainer')
        contactsContainer.innerHTML = '';
        for(let i=0; i<storeContact.length; i++){
            let createName = document.createElement('div');
            let sideBtn = document.createElement('div');
            sideBtn.className = 'createdbtnDiv'
            createName.id = 'createName'
            createName.textContent = storeContact[i].name.toUpperCase();
            createName.appendChild(sideBtn);
            contactsContainer.appendChild(createName);

            createCloseBtn.addEventListener('click', ()=>{
                contactsContainer.style.visibility = 'hidden'
                createCloseBtn.style.visibility = "hidden";
            })
            // btnCloseContacts.addEventListener('click', ()=>{
            //     contactsContainer.style.visibility = 'hidden';
            // })
            sideBtn.addEventListener('click',()=>{
                detailsContainer.style.visibility = "visible";
                detailsContainer.innerHTML = '';
                let createNameInside = document.createElement('div');
                let createEmail = document.createElement('li');
                let createNumber = document.createElement('li');
                let createDetails = document.createElement('li');
                let btnCloseContacts = document.createElement('img');
                btnCloseContacts.className = "modalListBtnClose"
                btnCloseContacts.src = 'images/chevronDownWhite.png';
                btnCloseContacts.id = 'btnCloseContacts'
                createNameInside.className = 'modalTitle'
                createNameInside.id = 'createNameInside'
                createEmail.className = 'modalList'
                createNumber.className = 'modalList'
                createDetails.className = 'modalList'
                createNameInside.textContent = storeContact[i].name.toUpperCase();
                createEmail.textContent = `Email: ${storeContact[i].email}`
                createNumber.textContent = `Contact No. ${storeContact[i].contactNum}`;
                createDetails.textContent = `Details: ${storeContact[i].details}`;
                detailsContainer.appendChild(createNameInside);
                detailsContainer.appendChild(createDetails);
                detailsContainer.appendChild(createNumber);
                detailsContainer.appendChild(createEmail);
                detailsContainer.appendChild(btnCloseContacts);

                btnCloseContacts.addEventListener('click', ()=>{
                    detailsContainer.style.visibility = "hidden"

                })

                })


        }
    }
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Functions.listItems();
Functions.listSorted(resultsEmergencyKit, "Emergency Kit", 'titleFormEmergensyKit', EmergencyKitInsideForm);
Functions.listSorted(resultsDocuments, "Documents", 'titleFormDocuments', documentInsideForm);
Functions.listSorted(resultsMedicines , "Medicines", 'titleFormMedicines', medicinesInsideForm);
Functions.listSorted(resultsClothes, "Clothes", 'titleFormClothes', ClothesInsideForm);
Functions.listSorted(resultsFoods, "Foods", 'titleFormFoods', foodsInsideForm);
Functions.listEmergencyContacts();

function createItem(newTitle, newDate, newExpiration, newRemindMe, newDetails, newCategory){
const storeitem = Functions.storeItems();
let modalAlert = document.getElementById('modalAlert');
let checkItemTitle = storeitem.findIndex((index)=> index.title == newTitle);
if(storeitem[checkItemTitle]){
    blackBckgrnd.style.visibility = 'visible';
    modalAlert.style.visibility = 'visible';
    modalAlert.textContent = 'Item Already Exist';
    closeAlert.style.visibility = 'visible';
}else if (newTitle == null || newTitle ==""){
    blackBckgrnd.style.visibility = 'visible';
    modalAlert.style.visibility = 'visible';
    modalAlert.textContent = 'You Entered Invalid Item';
    closeAlert.style.visibility = 'visible';
}else{
    const newItem = new Items(newTitle, newDate, newExpiration, newRemindMe, newDetails, newCategory);
    Functions.ItemstoAdd(newItem);
    blackBckgrnd.style.visibility = 'visible';
    modalAlert.style.visibility = 'visible';
    modalAlert.textContent = 'Item Added Successfully!';
    closeAlert.style.visibility = 'visible';
    Functions.listItems();
}
}
closeAlert.addEventListener('click', ()=>{
    blackBckgrnd.style.visibility = 'hidden';
    modalAlert.style.visibility = 'hidden';
    closeAlert.style.visibility = 'hidden';
})
function create(newTitle, newDate, newExpiration, newRemindMe, newDetails, newCategory){
const storeitem = Functions.storeItems();
    let checkItemTitle = storeitem.findIndex((index)=> index.title == newTitle);
    storeitem[checkItemTitle].date = newDate;
    storeitem[checkItemTitle].expiration = newExpiration;
    storeitem[checkItemTitle].remindMe = newRemindMe;
    storeitem[checkItemTitle].details = newDetails;
    storeitem[checkItemTitle].category = newCategory;
localStorage.setItem('List', JSON.stringify(storeitem));
blackBckgrnd.style.visibility = 'visible';
modalAlert.style.visibility = 'visible';
modalAlert.textContent = `${storeitem[checkItemTitle].title.toUpperCase()} Updated Succesfully!`;
closeAlert.style.visibility = 'visible';

let reminder = new Promise((resolve, reject) =>{
    if(storeitem[checkItemTitle].date == newRemindMe){
        blackBckgrnd.style.visibility = 'visible';
        modalAlert.style.visibility = 'visible';
        closeAlert.style.visibility = 'visible';
        resolve(modalAlert.textContent =`REMINDER! ${storeitem[checkItemTitle].title} needs update`)

    }else{
        blackBckgrnd.style.visibility = 'visible';
        modalAlert.style.visibility = 'visible';
        closeAlert.style.visibility = 'visible';
        reject(modalAlert.textContent =`PRIORITY! you forgot to update ${storeitem[checkItemTitle].title}`)
    }
})

reminder.then((message) =>{
    return message;
}).catch((message)=>{
    return message;
}) 
}

function create_user(newName, newEmail, newContactNum, newDetails){
    const storeitem = Functions.storeItems();
    let checkName = storeitem.findIndex((index)=> index.name == newName);
    let checkContact = storeitem.findIndex((index)=> index.contactNum == newContactNum);
    if(storeitem[checkName] && storeitem[checkContact]){
        alert('Contact Number already Exist');
    }else{
    const newContact = new NewContact(newName, newEmail, newContactNum, newDetails);
    Functions.ContactstoAdd(newContact);    
        alert('New Contact Number Added Successfully');
}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////OUTSIDE TITLE INPUT/////////////////////////////////////////////////////
//////////////////////////ADD ITEMS INPUT///////////////////////////////////////////////////////
inventoryAddItems.addEventListener('submit', (event)=>{
    event.preventDefault();
    createItem(inputAddItems.value, Functions.getDate(), expirationValue.value, remindMeValue.value, notesInsideValue.value, CategoryValue.value);
    Functions.listItems();
    Functions.listSorted(resultsEmergencyKit, "Emergency Kit", 'titleFormEmergensyKit', EmergencyKitInsideForm)
    Functions.listSorted(resultsDocuments, "Documents", 'titleFormDocuments', documentInsideForm);
    Functions.listSorted(resultsMedicines , "Medicines", 'titleFormMedicines', medicinesInsideForm);
    Functions.listSorted(resultsFoods, "Foods", 'titleFormFoods', foodsInsideForm);
    Functions.listSorted(resultsClothes, "Clothes", 'titleFormClothes', ClothesInsideForm);
    inventoryAddItems.reset();
    // Functions.remindMeNotice(inputAddItems.value, remindMeValue.value);
    // Functions.remindMeNotice(Functions.getDate(), remindMeValue.value);
    
})
/////////////////////////////EMERGENCY ITEMS INPUT/////////////////////////////////////////////////////////////////
emergencyKitAddItems.addEventListener('submit', (event)=>{
    event.preventDefault();
    let inputemergencyKit = document.getElementById('addItemEmergensyKit');
    let inputemergencyKitExp = document.getElementById('dateExpirationEmergensyKit');
    let inputemergencyKitRM = document.getElementById('dateRemindMeEmergensyKit');
    let inputemergencyKitNotes = document.getElementById('inputNotesEmergensyKit');
    createItem(inputemergencyKit.value, Functions.getDate(), inputemergencyKitExp.value, inputemergencyKitRM.value, inputemergencyKitNotes.value, "Emergency Kit");
    Functions.listItems();
    Functions.listSorted(resultsEmergencyKit, "Emergency Kit", 'titleFormEmergensyKit', EmergencyKitInsideForm)
    emergencyKitAddItems.reset();
})

/////////////////////////////DOCUMENTS ITEMS INPUT/////////////////////////////////////////////////////////////////
documentsAddItems.addEventListener('submit', (event)=>{
    event.preventDefault();
    let inputDocuments = document.getElementById('addItemDocuments');
    let documentsExp = document.getElementById('dateExpirationDocuments');
    let documentsRM = document.getElementById('dateRemindMeDocuments');
    let documentsNotes = document.getElementById('inputNotesDocuments');
    createItem(inputDocuments.value, Functions.getDate(), documentsExp .value, documentsRM.value, documentsNotes.value, "Documents");
    Functions.listItems();
    Functions.listSorted(resultsDocuments, "Documents", 'titleFormDocuments', documentInsideForm);
    documentsAddItems.reset();
})
/////////////////////////////MEDICINES ITEMS INPUT/////////////////////////////////////////////////////////////////
medicinesAddItems.addEventListener('submit', (event)=>{
    event.preventDefault();
    let inputMedicines = document.getElementById('addItemMedicines');
    let medicinesExp = document.getElementById('dateExpirationMedicines');
    let medicinesRM = document.getElementById('dateRemindMeMedicines');
    let medicinesNotes = document.getElementById('inputNotesMedicines');
    createItem(inputMedicines.value, Functions.getDate(), medicinesExp.value, medicinesRM.value, medicinesNotes.value, "Medicines");
    Functions.listItems();
    Functions.listSorted(resultsMedicines, "Medicines", 'titleFormMedicines', medicinesInsideForm);
    medicinesAddItems.reset();
})
/////////////////////////////FOODS ITEMS INPUT/////////////////////////////////////////////////////////////////
foodsAddItems.addEventListener('submit', (event)=>{
    event.preventDefault();
    let inputFoods = document.getElementById('addItemFoods');
    let foodsExp = document.getElementById('dateExpirationFoods');
    let foodsRM = document.getElementById('dateRemindMeFoods');
    let foodsNotes = document.getElementById('inputNotesFoods');
    createItem(inputFoods.value, Functions.getDate(), foodsExp.value, foodsRM.value, foodsNotes.value, "Foods");
    Functions.listItems();
    Functions.listSorted(resultsFoods, "Foods", 'titleFormFoods', foodsInsideForm);
    foodsAddItems.reset();
})
/////////////////////////////FOODS ITEMS INPUT/////////////////////////////////////////////////////////////////
clothesAddItems.addEventListener('submit', (event)=>{
    event.preventDefault();
    let inputClothes = document.getElementById('addItemClothes');
    let clothesExp = document.getElementById('dateExpirationClothes');
    let clothesRM = document.getElementById('dateRemindMeClothes');
    let clothesNotes = document.getElementById('inputNotesClothes');
    createItem(inputClothes.value, Functions.getDate(), clothesExp.value, clothesRM.value, clothesNotes.value, "Clothes");
    Functions.listItems();
    Functions.listSorted(resultsClothes, "Clothes", 'titleFormClothes', ClothesInsideForm);
    clothesAddItems.reset();
})
addContactForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let inputName = document.getElementById('addName');
    let inputEmail = document.getElementById('addEmail');
    let inputContact = document.getElementById('addNumber');
    let inputdetails = document.getElementById('addDetails');
    create_user(inputName.value, inputEmail.value, inputContact.value, inputdetails.value);
    Functions.listEmergencyContacts();
    addContactForm.style.visibility = 'hidden';
    addContactForm.reset();
})
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////FORM INSIDE THE INPUT CREATED/////////////////////////////////////////////////////////////////
/////////////////////////////INVENTORY FORM INSIDE/////////////////////////////////////////////////////////////////
    document.getElementById('formInsideInventory').addEventListener('submit',(event)=>{
    event.preventDefault();
    let titleFormRed = document.getElementById('titleFormInventory');
    let inventoryInsideForm = document.getElementById('formInsideInventory');
    create(titleFormRed.textContent, Functions.getDate(), expirationValue.value, remindMeValue.value, notesInsideValue.value, CategoryValue.value);
    Functions.listItems()
    Functions.listSorted(resultsEmergencyKit, "Emergency Kit", 'titleFormEmergensyKit', EmergencyKitInsideForm)
    Functions.listSorted(resultsDocuments, "Documents", 'titleFormDocuments', documentInsideForm);
    Functions.listSorted(resultsMedicines , "Medicines", 'titleFormMedicines', medicinesInsideForm);
    Functions.listSorted(resultsFoods, "Foods", 'titleFormFoods', foodsInsideForm);
    Functions.listSorted(resultsClothes, "Clothes", 'titleFormClothes', ClothesInsideForm);
    // Functions.remindMeNotice(inputAddItems.value, remindMeValue.value);
    inventoryInsideForm.reset();
    inventoryInsideForm.style.visibility = 'hidden';
})
/////////////////////////////EMERGENCY KIT FORM INSIDE/////////////////////////////////////////////////////////////////
    document.getElementById('formInsideEmergensyKit').addEventListener('submit',(event)=>{
    event.preventDefault();
    let titleFormRed = document.getElementById('titleFormEmergensyKit');
    let emergensyKitInsideForm = document.getElementById('formInsideEmergensyKit');
    let inputemergencyKitExp = document.getElementById('dateExpirationEmergensyKit');
    let inputemergencyKitRM = document.getElementById('dateRemindMeEmergensyKit');
    let inputemergencyKitNotes = document.getElementById('inputNotesEmergensyKit');
    create(titleFormRed.textContent, Functions.getDate(), inputemergencyKitExp.value, inputemergencyKitRM.value, inputemergencyKitNotes.value, "Emergency Kit");
    Functions.listItems()
    Functions.listSorted(resultsEmergencyKit, "Emergency Kit", 'titleFormEmergensyKit', EmergencyKitInsideForm)

    emergensyKitInsideForm.reset();
    emergensyKitInsideForm.style.visibility = 'hidden';
})
/////////////////////////////DOCUMENTS FORM INSIDE/////////////////////////////////////////////////////////////////
    document.getElementById('formInsideDocuments').addEventListener('submit',(event)=>{
    event.preventDefault();
    let titleFormRed = document.getElementById('titleFormDocuments');
    let documentsInsideForm = document.getElementById('formInsideDocuments');
    let documentsExp = document.getElementById('dateExpirationDocuments');
    let documentsRM = document.getElementById('dateRemindMeDocuments');
    let documentsNotes = document.getElementById('inputNotesDocuments');
    create(titleFormRed.textContent, Functions.getDate(), documentsExp.value, documentsRM.value, documentsNotes.value, "Documents");
    Functions.listItems()
    Functions.listSorted(resultsDocuments, "Documents", 'titleFormDocuments', documentInsideForm);
    documentsInsideForm.reset();
    documentsInsideForm.style.visibility = 'hidden';
})
/////////////////////////////MEDICINES FORM INSIDE/////////////////////////////////////////////////////////////////
    document.getElementById('formInsideMedicines').addEventListener('submit',(event)=>{
    event.preventDefault();
    let titleFormRed = document.getElementById('titleFormMedicines');
    let medicinesInsideForm = document.getElementById('formInsideMedicines');
    let medicinesExp = document.getElementById('dateExpirationMedicines');
    let medicinesRM = document.getElementById('dateRemindMeMedicines');
    let medicinesNotes = document.getElementById('inputNotesMedicines');
    create(titleFormRed.textContent, Functions.getDate(), medicinesExp.value, medicinesRM.value, medicinesNotes.value, "Medicines");
    Functions.listItems()
    Functions.listSorted(resultsMedicines , "Medicines", 'titleFormMedicines', medicinesInsideForm);
    medicinesInsideForm.reset();
    medicinesInsideForm.style.visibility = 'hidden';
})
////////////////////////////FOODS FORM INSIDE/////////////////////////////////////////////////////////////////
    document.getElementById('formInsideFoods').addEventListener('submit',(event)=>{
    event.preventDefault();
    let titleFormRed = document.getElementById('titleFormFoods');
    let foodsForm = document.getElementById('formInsideFoods');
    let foodsExp = document.getElementById('dateExpirationFoods');
    let foodsRM = document.getElementById('dateRemindMeFoods');
    let foodsNotes = document.getElementById('inputNotesFoods');
    create(titleFormRed.textContent, Functions.getDate(), foodsExp.value, foodsRM.value, foodsNotes.value, "Foods");
    Functions.listItems()
    Functions.listSorted(resultsFoods, "Foods", 'titleFormFoods', foodsInsideForm);
    foodsForm.reset();
    foodsForm.style.visibility = 'hidden';
    })
////////////////////////////ClOTHES FORM INSIDE/////////////////////////////////////////////////////////////////
    document.getElementById('formInsideClothes').addEventListener('submit',(event)=>{
    event.preventDefault();
    let titleFormRed = document.getElementById('titleFormClothes');
    let clothesForm = document.getElementById('formInsideClothes');
    let clothesExp = document.getElementById('dateExpirationClothes');
    let clothesRM = document.getElementById('dateRemindMeClothes');
    let clothesNotes = document.getElementById('inputNotesClothes');
    create(titleFormRed.textContent, Functions.getDate(), clothesExp.value, clothesRM.value, clothesNotes.value, "Clothes");
    Functions.listItems()
    Functions.listSorted(resultsClothes, "Clothes", 'titleFormClothes', ClothesInsideForm);
    clothesForm.reset();
    clothesForm.style.visibility = 'hidden';
    })



