import { Stolovi } from "./stolovi.js";

export class Picerija{

    constructor(naziv, n,m,kapacitetStolova){ 
        this.naziv=naziv;
        this.n=n;
        this.m=m;
        this.kapacitet=kapacitetStolova;
        this.kontejner =null;
        this.stolovi=[];  
    
    }

    dodajSto(ss)
    {
        this.stolovi.push(ss);
    }

    crtajPiceriju(host)
    {
        if(!host)
            throw new Exception("Ne postoji roditelj");

    
        this.kontejner=document.createElement("div");
        this.kontejner.className="kontejner";
        host.appendChild(this.kontejner);

        this.crtajFormu(this.kontejner);
        this.crtajStolove(this.kontejner);
    }

    crtajFormu(host)
    {
        const kontForma=document.createElement("div");
        kontForma.className="kontForma";
        host.appendChild(kontForma);

        var elLabela=document.createElement("h3");
        elLabela.innerHTML="Rezervacije";
        elLabela.className="h3";
        kontForma.appendChild(elLabela);

        elLabela=document.createElement("label");
        elLabela.innerHTML="Ime rezervacije";
        kontForma.appendChild(elLabela);

        let tb=document.createElement("input");
        tb.className="imeRezervacije";
        kontForma.appendChild(tb);

        elLabela=document.createElement("label");
        elLabela.innerHTML="Broj osoba";
        kontForma.appendChild(elLabela);

        tb=document.createElement("input");
        tb.className="brojOsoba";
        tb.type="number";
        kontForma.appendChild(tb);

        elLabela=document.createElement("label");
        elLabela.innerHTML="Pusaci: ";
        kontForma.appendChild(elLabela);

        let pusaci=["da","ne"];
        let boja=["red","green"];

        let opcija=null;
        let labela=null;
        let divRb=null;
        pusaci.forEach((p,index)=>
        {
            divRb=document.createElement("div");
            opcija=document.createElement("input");
            opcija.type="radio";
            opcija.name=this.naziv;
            opcija.value=boja[index];

            labela=document.createElement("label");
            labela.innerHTML=p;
            

            divRb.appendChild(opcija);
            divRb.appendChild(labela);
            kontForma.appendChild(divRb);
        })

     

        divRb=document.createElement("div");
        let s=document.createElement("select");
        labela=document.createElement("label");
        labela.innerHTML="Redni broj stola: ";
        divRb.appendChild(labela);
        divRb.appendChild(s);

        for(let i=1;i<=(this.n*this.m);i++)
        {
            opcija=document.createElement("option");
            opcija.innerHTML=i;
            opcija.value=i;
            s.appendChild(opcija);
        }
        kontForma.appendChild(divRb);

        const dugme=document.createElement("button");
        dugme.innerHTML="Dodaj rezervaciju";
        dugme.className="dugme";
        kontForma.appendChild(dugme);
        dugme.onclick=(ev)=>{
            //alert("Dodato");
            const imeRezervacije=this.kontejner.querySelector(".imeRezervacije").value;
            const brojOsoba=parseInt(this.kontejner.querySelector(".brojOsoba").value);

            const pusac= this.kontejner.querySelector(`input[name='${this.naziv}']:checked`);


            if(pusac==null)
            {
                alert("Da li ste pusac?")
            }
           /* let x1=parseInt(s%this.m);  
            let x=parseInt(x1-1);
            let y=parseInt((s-x1)/this.m);
                */
            let x=parseInt(s.value-1);
            this.stolovi[x].azurirajStolove(imeRezervacije,brojOsoba,pusac.value,s);







        }



    }

    crtajStolove(host)
    {
        const kontStolovi=document.createElement("div");
        kontStolovi.className="kontStolovi";
        host.appendChild(kontStolovi);

        let red;
        let sto;
        for(let i=0;i<this.n;i++)
        {
            red=document.createElement("div");
            red.className="red";
            kontStolovi.appendChild(red);
            for(let i=0;i<this.m;i++)
            {
                //napraviti objekat klase stolovi
                sto=new Stolovi(i," "," ",this.kapacitet);
                this.dodajSto(sto);
                sto.crtajSto(red);
            }
        }


    }



}