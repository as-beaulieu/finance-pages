//these will store the value entered in the field
//place in the field: onkeyup='saveValue(this);'
document.getElementById("firstName").value = getSavedValue("firstName");    // set the value to this input
document.getElementById("lastName").value = getSavedValue("lastName");   // set the value to this input
document.getElementById("address1").value = getSavedValue("address1");
document.getElementById("city").value = getSavedValue("city");
document.getElementById("state").value = getSavedValue("state");
document.getElementById("zip").value = getSavedValue("zip");
/* Here you can add more inputs to set value. if it's saved */

//Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e){
    var id = e.id;  // get the sender's id to save it . 
    var val = e.value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue  (v){
    if (localStorage.getItem(v) === null) {
        return "";// You can change this to your defualt value. 
    }
    return localStorage.getItem(v);
}