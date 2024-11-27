function checkAge()
{
    var age = document.getElementById("age").value;
    if( age <18)
    {
        console.log("Vi thanh nien");
        document.getElementById("bai1").innerHTML="Vi thanh nien";
    }
    else 
    {
    console.log("Nguoi lon");
    document.getElementById("bai1").innerHTML="Nguoi lon";
    }
}

function checkEvenOdd(a)
{
    if(a%2==0)
    {
        return "So chan";
    }
    else return "So le";
}
console.log(checkEvenOdd(4));

function compareNumbers(a,b)
{
    if(a>b)
    {
        return "So thu nhat lon hon";
    }
    else if(a<b)
    {
        return "So thu hai lon hon";
    }
    else return "Hai so bang nhau";
}
console.log(compareNumbers(4,5));

function checkInterger(a)
{
    var check= a - parseInt(a);
    if(check==0)
    {
        return "Day la so nguyen";
    }
    else return "Day khong phai la so nguyen";
}
console.log(checkInterger(4));

