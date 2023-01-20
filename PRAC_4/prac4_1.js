function algo()
{
    let num = document.getElementById("num").value;
    let a = 13;
    let ans = num-a;
    document.getElementById("absolute").innerHTML = Math.abs(ans);
    document.getElementById("doubleabs").innerHTML = (Math.abs(ans)*2);
}