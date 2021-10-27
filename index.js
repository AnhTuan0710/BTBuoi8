function soNT()
{
    let soN = parseInt(document.getElementById('soN').value);
    let text = "";
    let i;
    let j;
    if(soN <= 1)
    {
        text += "Khong co so nguyen to nao tu 1 den n"
    }
    else{
        for(i =2; i <= soN; i++)
        {
            if(i == 2)
                {
                    text += i + " ";
                }
                // i = 3 -->
            else{
                var dem =0;
                for(j = 1; j<=i; j++)
                {
                    if(i%j == 0)
                    {
                        dem++;
                    }
                }
                if(dem==2)
                {
                    text += i + " ";
                }
            }
        }
    }
    document.getElementById('kqua4').value = text;
};

function tong()
{
    let n = parseInt(document.getElementById("soB5").value);
    let sum =0;
    for(let i=0; i<=n ; i++)
    {
        sum +=i;
    }
    document.getElementById('kqua5').value= sum;
}
function tongBP()
{
    let n = parseInt(document.getElementById("soB6").value);
    let sum =0;
    for(let i=0; i<=n ; i++)
    {
        sum +=i*i;
    }
    document.getElementById('kqua6').value= sum;
}
function tongLe()
{
    let n = parseInt(document.getElementById("soB7").value);
    let sum =0;
    for(let i=0; i<=n ; i++)
    {
        if(i%2!=0)
        sum +=i;
    }
    document.getElementById('kqua7').value= sum;
}
function ktra8()
{
    document.getElementById("kqua8").value = "";
    let n = document.getElementById('soB8').value;
    for (i = 0; i < n.length; i++) {
        if (n[i] % 2 == 0) {
            document.getElementById("kqua8").value = "NO";
            return;
        }
    }
    document.getElementById("kqua8").value = "YES";
}
function ktra9()
{
    let x = (document.getElementById('soB9').value);
    let text1 = x.split("");
    let text2 = text1.reverse();
    let text3 = text2.join("");
    // document.getElementById('ketquaB9').value =text3;
    let check = 1;
    if(x == text3)
    {
        check = 1;
    }
    else{
        check = 0;
    }
    if(check == 1){
        document.getElementById('kqua9').value = "YES";
    }
    else{
        document.getElementById('kqua9').value = "NO";
    }
}
function bai10(){
    for(var i =2; i<=9; i++)
    {
       for(var j =1; j<=10; j++)
       {
        document.getElementById("kqua10").value += i + " x " + j + " = " + i * j + '\n';
       }
       document.getElementById("kqua10").value += "*** *** ***" + '\n'
    }
}