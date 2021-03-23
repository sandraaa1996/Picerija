import {Picerija} from "./picerija.js";

fetch("https://localhost:5001/Picerija/PreuzmiPicerije").then(p=>
{
    p.json().then(data=>
        {
            data.forEach(picerija =>{

                
                const picerija1=new Picerija(picerija.naziv,picerija.n,picerija.m,picerija.kapacitet); 
                picerija1.crtajPiceriju(document.body);

                picerija.stolovi.forEach(sto=>
                    {
                        var st=picerija1.stolovi[sto.s];
                       // console.log(picerija1.stolovi);
                       // console.log(st.kapacitet);
                        
                        if(sto.maxKapacitet>=sto.kapacitet+st.kapacitet)
                        {
                            st.azurirajStolove(sto.imeRezervacije,sto.brojOsoba,sto.pusac,sto.s);
                        }

                        });
                  });
        });
 });


/*const picerija1=new Picerija("Caribic",4,3,4); //4 stola u 3 reda i max 4 osoba
picerija1.crtajPiceriju(document.body);

const picerija2=new Picerija("Kaktus",5,6,4); //5 stola u 6 reda i max 4 osoba
picerija2.crtajPiceriju(document.body);*/

