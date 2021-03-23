
export class Stolovi{

    constructor(s,pusac,imeRezervacije,maxKapacitet)
    {
        this.s=s;
        this.pusac=pusac;
        this.imeRezervacije="Slobodno";
        this.kapacitet=0;
        this.maxKapacitet=maxKapacitet;
        this.miniKontejner=null;

    }
    vratiBoju()
    {
        if(!this.pusac)
        return "goldenrod";
        else
        return this.pusac;

    }

    crtajSto(host)
    {
        this.miniKontejner=document.createElement("div");
        this.miniKontejner.className="sto";
        this.miniKontejner.innerHTML="Slobodan sto ";
        this.miniKontejner.style.backgroundColor=this.vratiBoju();
        host.appendChild(this.miniKontejner);
    }

    azurirajStolove(imeRezervacije,brojOsoba,pusac,s)
    {
        console.log(this.maxKapacitet.value);
        if(brojOsoba+this.kapacitet>this.maxKapacitet)
            {
                alert("Nema mesta !");   
            }
             
       
        if(brojOsoba>=1 && brojOsoba<=this.maxKapacitet)
         {
            if(this.imeRezervacije==="Slobodno" && imeRezervacije!="")
            {
            this.imeRezervacije=imeRezervacije;
            this.pusac=pusac;
            this.kapacitet+=brojOsoba;
            this.miniKontejner.innerHTML=this.imeRezervacije+", "+this.kapacitet+", REZERVISANO!";
            this.miniKontejner.style.backgroundColor=this.vratiBoju();
              }
            if(imeRezervacije==="")
         alert("Unesite ime rezervacije");
             }
        else
        {
            alert("Unesite ispravan broj osoba");
        }
    }
}