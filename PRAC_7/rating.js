export function rate()
{
    let txt=confirm('Would you like to rate us?');
    if(txt)
    {
        let rate = prompt('Enter the ratings between 1 to 5:');
        let txt2=confirm(`Rating : ${rate}, Do you Want submit?`);
        if(txt2)
        {
            if(rate<0 || rate>5)
            {
                alert("Enter correct rating");
            }
            else
            {
                alert("Thank you! For rating us.");
            }
        }
        else
        {
            alert('It\'s okay we will remind you later.');
        }
    }
    else
    {
        alert('Thank you for visiting our mart!');
    }
}