import { validInfo } from "./validateInformation.js"
import { payment } from "./processPay.js"
import { rate } from "./rating.js";
function main()
{    
    var name = document.getElementById("name").value;
    var pwd = document.getElementById("pwd").value;
    validInfo(name,pwd);
    if(validInfo(name,pwd)==1)
    {
        var it = prompt('Enter the item from below:');
        var qty = prompt('Enter the qty:');
        payment(it,qty);
        rate();
    }
    else
    {
        alert("Enter correct name and password.");
    }
}
window.main=main;