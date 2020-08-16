var request = new XMLHttpRequest()
function addCards(){
    names=["google","facebook","instagram","github"]
    const cardDiv=document.getElementById("site");
  const newArray=  names.map(name =>  `<div class="card"> ${name}</div>`);
  const stringArray=newArray.toString()  
  stringArray=stringArray.replaceAll(", $", "");
  cardDiv.innerHTML=stringArray;

}



function newfunc(){
    console.log("newfunc")
    const sites=[{sitename:"facebook",imgLink:"https://r.search.yahoo.com/_ylt=AwrwXxS.Nzlfs1IASSvnHgx.;_ylu=X3oDMTEyaTcya2luBGNvbG8Dc2czBHBvcwMxBHZ0aWQDQjg4NjdfMQRzZWMDc2M-/RV=2/RE=1597614143/RO=10/RU=https%3a%2f%2ffacebook.com/RK=2/RS=KwBobAFq5R_s7nYPQDxbDpqDAkU-"},{sitename:"instagram",imgLink:"https://in.images.search.yahoo.com/yhs/search;_ylt=Awrxgq8NODlfKQgAQETnHgx.;_ylu=X3oDMTEyaTcya2luBGNvbG8Dc2czBHBvcwMxBHZ0aWQDQjg4NjdfMQRzZWMDc2M-?p=instagram+image&fr=yhs-avast-securebrowser&th=300&tw=300&imgurl=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpecial%3AFilePath%2FInstagram_logo_2016.svg&rurl=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpecial%3AFilePath%2FInstagram_logo_2016.svg&name=Instagram&h=1024&w=1024&turl=https%3A%2F%2Fs.yimg.com%2Ffz%2Fapi%2Fres%2F1.2%2F0qNmSuD1K4HOED.ihWTbgw--%7EC%2FYXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTE4MDtxPTgwO3c9MTgw%2Fhttps%3A%2F%2Fs.yimg.com%2Fzb%2Fimgv1%2F4081efbd-f030-359c-8ad5-7e8aa5d1125c%2Ft_500x300&tt=Instagram&sigr=wzyYjenR5ErP&sigit=CVs9ttJP9EIp&sigi=dEOK4pFQb9GR&sign=DQ0bY6IthU30&sigt=DQ0bY6IthU30&hspart=avast&hsimp=yhs-securebrowser"}]
    console.log(sites)
    const data= document.getElementById("card");
    const datas=sites.forEach(site=> {
        
        console.log("came inside  of loop")
        data.innerText(site.sitename)}
    )
}