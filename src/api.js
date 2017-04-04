
const getLedamoter = () =>{
    return fetch('http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&termlista=').then((res) => res.json());

}
module.exports= getLedamoter;
