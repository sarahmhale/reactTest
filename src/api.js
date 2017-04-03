import Module

var api={
  getLedamoter(){
    var url=`http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&termlista=k%C3%B6n`;
    return fetch(url).then((res) => res.json());
  }
};

Module.exports = api;
