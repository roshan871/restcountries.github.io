fetch(`https://restcountries.eu/rest/v2/all`)
.then((x)=>x.json)
.then((data)=>{
    var rs = "";
    for ( i in data){
        rs += "<tr>";
        rs += "<td>" + data[i].name + "</td>";
        rs += "</tr>";
    }
});