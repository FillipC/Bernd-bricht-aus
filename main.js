
//es werden die Verschiedenen Veriablen für die Raumzustände deklariert.
//ein Smarter Programmierer hätte mit True or False gearbeitet.. ein Smarter Programmierer.
var x = 0;
var Schub = 0;
var sceene = "Zimmer1_RadioEin.png";
var openSchublade = 0;
var use = 0;
var useItem1 = 0;
var schluessel1 = 0;
var openSchublade2 = 0;
var Schub2 = 0;
var lautstaerke = 0.01;
var Fussballlautstaerke = 1;
var take = 0;
var HockerNummer = 0;
var HockerNummer2 = 0;
var HockerNummer3 = 0;
var SchreibHocker = 0;
var Hock=0;
var HockKom=0;
var HockKomSchreib=0;
var Kom=0;
var KomSchreib=0;
var Start=0;
var gardine=0;
var gardineab=0;
var tischSchluessel=0;
var tuerAuf=0;
var ziehen=0;
var take2=0;
var useItem2=0;
var startsound = document.getElementById("BackgroudSound");
var startLautstaerke = 0.05;

//variablen für das WC
/*
klo = 0 der halter ist noch dran
klo = 1 der halter ist abgefallen
Stock = 0 der stock ist noch nicht aufgenommen
Stock = 1 der stock wurde aufgenommen
L_Schrank = 0 der Schrank ist noch zu
L_Schrank = 1 der linke Schrank ist offen
R_Schrank = 0 der Schrank ist noch zu
R_Schrank = 1 der rechte Schrank ist offen
LR_Schrank = 0 es sind noch nicht beide Schränke offen
LR_SChrank = 1 beide Schränke sind offen und die Kreditkarte ist im Imventar
useStock = 0 der Stock wurde nicht ausgewählt
useStock = 1 der Stock wurde ausgewählt
*/

var klo = 0;
var Stock = 0;
var L_Schrank = 0;
var R_Schrank = 0;
var LR_Schrank = 0;
var useStock = 0;
var useCard = 0;
var Card = 0;
var openKueche = 0;
var takeStuhl = 0;
var Pfannehaben = 0;
var usePfanne = 0;
var Kasten = 0;
var kSchluessel = 0;
var Rampe=0;
var usehSchluessel=0;


//Ton für die Sprechblasen
var audioHocker = document.getElementById("SprechblaseHockerSound");
var audioUhr = document.getElementById("SprechblaseUhrSound");
var audioUrkunde = document.getElementById("SprechblaseUrkundeSound");
var audioTruhe = document.getElementById("SprechblaseTruheSound");
var audioPflanze = document.getElementById("SprechblasePflanzeSound");
var audioPapierkorb = document.getElementById("SprechblasePapierkorbSound");
var audioKleiderhaken = document.getElementById("SprechblaseKleiderhakenSound");
var audioShirt1 = document.getElementById("SprechblaseShirtsSound")
var audioShirt2 = document.getElementById("SprechblaseShirtsSound")
//var audioShirt3 = document.getElementById("SprechblaseShirtsSound")
var audioBild = document.getElementById("SprechblaseBettSound");
var audioBernddasbrot1 = document.getElementById("SprechblaseBernddasbrot1Sound");
var audioBernddasbrot2 = document.getElementById("SprechblaseBernddasbrot2Sound");
var audioBett = document.getElementById("SprechblaseBettSound");
var audioSekiro = document.getElementById("SprechblaseSekiroSound");
var audioFussball = document.getElementById("SprechblaseFussballSound");

//Generelle Sprechblasen
var showSprechblaseNope_TischVar;
var spielSprechblaseNope_TischAudioVar;

var showSprechblaseNope_BettVar;
var spielSprechblaseNope_BettAudioVar;

var showSprechblaseNope_TuerVar;
var spielSprechblaseNope_TuerAudioVar;

var showSprechblaseNope_AufTischVar;
var spielSprechblaseNope_AufTischAudioVar;

var showSprechblaseNope_BildVar;
var spielSprechblaseNope_BildAudioVar;

var showSprechblaseNope_PflanzeVar;
var spielSprechblaseNope_PflanzeAudioVar;


var delay1 = 3500;
var delay2 = 8500;
var delay3 = 3000;

var nodelay1 = 0;
var nodelay2 = 5000;

var SprechblasenTime1;
var SprechblasenTime2;
var InteractionDelay;
var ActionTimeout;



 //diese Function prüft die verschiedenen Zustände im ersten Raum und wechselt je nach dem wann sie aufgerufen wird ein anderes Bild im Spiel auf. Das ganze wird einmal mit dem Radio ein und dem Radio aus gemacht.
function tausch(){
    //if ($("#bild1").attr("src") == "Zimmer1_RadioAus.png"){

    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(x==0){
    document.getElementById('bild1').src=sceene
        console.log("If anweisung");
        x++;
        if(Start==0){
            sceene = "Zimmer1_RadioAus.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom>0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_KommodeAuf_R0.png"
        }
        if(Hock==0 && HockKom>0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R0.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib>0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 & KomSchreib>0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_KommodeAuf_SchreibtischAuf_R0.png"
        }
        if(Hock>0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_Kommode0_Schreibtisch0_R0_Hocker1.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine>0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_Gardine1_R0.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab>0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_GardineAb_R0.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel>0 && tuerAuf==0){
            sceene = "Zimmer1_GardineAb_Schluessel1_R0.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf>0){
            sceene = "Zimmer1_Ende_R0.png"
        }

        //Der folgende Kommentar sind die Überreste des ersten Versuchs für den Raumwechsel.
        /*if(Schub==0){
        sceene = "Zimmer1_RadioAus.png"
        }
        if(openSchublade!=0){
            sceene = "Zimmer1_KommodeAuf_R0.png"
        }
        if(openSchublade2!=0){
            sceene = "Zimmer1_KommodeAuf_SchreibtischAuf_R0.png"
        }
        if(HockerNummer2!=0){
            sceene = "Zimmer1_Kommode0_Schreibtisch0_R0_Hocker1.png"
        }
        if(HockerNummer3!=0){
            sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R0.png"
        }
        if(SchreibHocker!=0){
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
        }
        console.log("sceene: " + sceene)
        console.log("schub: " + Schub)
        console.log("X: " + x) 
        console.log("openschub :" + openSchublade)
        console.log("openschub2 :" + openSchublade2)
        console.log("Hocker1 :" + HockerNummer)
        console.log("Hocker2 :" + HockerNummer2)
        console.log("Hocker3 :" + HockerNummer3)
        console.log("Schreibhocker :" + SchreibHocker)
        */
    } 
    else {
        document.getElementById('bild1').src=sceene
        console.log("else anweisung");
        x = x - x;
        if(Start==0){
            sceene = "Zimmer1_RadioEin.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom>0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_KommodeAuf_R1.png"
        }
        if(Hock==0 && HockKom>0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R1.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib>0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 & KomSchreib>0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_KommodeAuf_SchreibtischAuf_R1.png"
        }
        if(Hock>0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_Kommode0_Schreibtisch0_R1_Hocker1.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine>0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_Gardine1_R1.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab>0 && tischSchluessel==0 && tuerAuf==0){
            sceene = "Zimmer1_GardineAb_R1.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel>0 && tuerAuf==0){
            sceene = "Zimmer1_GardineAb_Schluessel1_R1.png"
        }
        if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf>0){
            sceene = "Zimmer1_Ende_R1.png"
        }

        //wieder die überreste des ersten Versuchs
        /*if(Schub==0){
        sceene = "Zimmer1_RadioEin.png"
        }
        if(openSchublade!=0){
            sceene = "Zimmer1_KommodeAuf_R1.png"
        }
        if(openSchublade2!=0){
            sceene = "Zimmer1_KommodeAuf_SchreibtischAuf_R1.png"
        }
        if(HockerNummer2!=0){
            sceene = "Zimmer1_Kommode0_Schreibtisch0_R1_Hocker1.png"
        }
        if(HockerNummer3!=0){
            sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R1.png"
        }
        if(SchreibHocker!=0){
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
        }
        console.log("Sceene: " + sceene)
        console.log("Schub: " + Schub)
        console.log("X: " + x)  */       
    }
}

var showSprechblase1_SchubladeVar;
var spielSchubladeAudioVar;


//diese Funktion ist für die Schublade im ersten Zimmer. Man kann bei den Functionen im ersten Raum noch gut erkennen wie viele Sprechblasen geplant waren und was wir dann doch verworfen haben.
//Es gibt sehr viele Console Logs an stellen an denen Später Sprechblasen im Spiel kommen sollten. 
// auch bei dieser Funktion gab es viele Probleme am Anfang. Der Kommentierte Code sind wieder die ersten Versuche.
function Schublade(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Schublade");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Schublade");
        },2000)
        }
    
    if(position=="Schublade"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
        InteractionDelay=nodelay1;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
        InteractionDelay=delay3;
    }
setTimeout(function(){
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
        
    }

    //Sprechblase beim angucken
    if(useItem1==0){
        sprechblasenStop();
        showSprechblase1_SchubladeVar = setTimeout(showSprechblase1_Schublade, SprechblasenTime1)
        //spielSchubladeAudioVar = setTimeout(spielSchubladeAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Schublade, SprechblasenTime2)
    }

    /*
    else{   MARKER!
        sprechblasenStop();
        showSprechblaseNope_PflanzeVar = setTimeout(showSprechblaseNope_Pflanze, SprechblasenTime1)
        //spielSprechblaseNope_PflanzeAudioVar setTimeout(spielSprechblaseNope_PflanzeAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Pflanze, SprechblasenTime2)
    }
    */
    

    console.log("was für eine coole Schublade")
    console.log("open: " + openSchublade)
    /*if(x==1 && openSchublade==0 && HockerNummer2==0){
        document.getElementById("bild1").src="Zimmer1_KommodeAuf_R1.png"
        console.log("X: " + x)
        console.log("Sceene: " + sceene)
        console.log("Schub: " + Schub)
        Schub++;
        sceene = "Zimmer1_KommodeAuf_R0.png"
        //x = x - x;
        openSchublade++;
    }
    if(x!=1 && openSchublade==0 && HockerNummer2==0){
        document.getElementById("bild1").src="Zimmer1_KommodeAuf_R0.png"
        console.log("X: " + x)
        console.log("Sceene: " + sceene)
        console.log("Schub: " + Schub)
        Schub++;
        sceene = "Zimmer1_KommodeAuf_R1.png"
        openSchublade++;
    } 
    if(x==1 && openSchublade==0 && HockerNummer2>0){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch0_Hocker1_R1.png"
        console.log("X: " + x)
        console.log("Sceene: " + sceene)
        console.log("Schub: " + Schub)
        Schub++;
        sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R0.png"
        //x = x - x;
        openSchublade++;
        HockerNummer3++;
    }
    if(x!=1 && openSchublade==0 && HockerNummer2>0){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch0_Hocker1_R0.png"
        console.log("X: " + x)
        console.log("Sceene: " + sceene)
        console.log("Schub: " + Schub)
        Schub++;
        sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R1.png"
        openSchublade++;
        HockerNummer3++;
    }
        console.log("gardine: " + gardine)
    console.log("gardineab: " + gardineab) 
*/
// function um nur den Schrank zu öffnen
    if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==1  && tuerAuf==0 && gardine==0 && gardineab==0){
        document.getElementById("bild1").src="Zimmer1_KommodeAuf_R1.png"
        Kom++;
        Start++;
        sceene = "Zimmer1_KommodeAuf_R0.png"
        document.getElementById("bildItem1").src="Schluessel1.png"
        schluessel1++;
        console.log("if eins")
    }
    if(Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==0  && tuerAuf==0  && gardine==0 && gardineab==0){
        document.getElementById("bild1").src="Zimmer1_KommodeAuf_R0.png"
        Kom++;
        Start++;
        sceene = "Zimmer1_KommodeAuf_R1.png"
        document.getElementById("bildItem1").src="Schluessel1.png"
        schluessel1++;
        console.log("if zwei")
    }
    //function fuer die Kommode wenn er Hocker schon vorm schreibtisch steht
    if(Hock==1 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==1  && tuerAuf==0  && gardine==0 && gardineab==0){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch0_Hocker1_R1.png"
        HockKom++;
        Start++;
        Hock = Hock - Hock;
        sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R0.png"
        document.getElementById("bildItem1").src="Schluessel1.png"
        schluessel1++;
        console.log("if drei")
    }
    if(Hock==1 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==0  && tuerAuf==0  && gardine==0 && gardineab==0){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch0_Hocker1_R0.png"
        HockKom++;
        Start++;
        Hock = Hock - Hock;
        sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R1.png"
        document.getElementById("bildItem1").src="Schluessel1.png"
        schluessel1++;
        console.log("if vier")
    }
 
    
    console.log("Schluessel1: " + schluessel1)
},InteractionDelay);
}

var showSprechblase1_SekiroVar;
var spielSekiroAudioVar;

//die Funktion wenn auf das Bild von Sekiro geklickt wird. 
function sekiro(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Schublade");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Schublade");
        },2000)
        }

     if(position=="Schublade"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
     }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
     }
    console.log("achja.. das schöne Sekiro.. Die guten alten Zeiten!")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        sprechblasenStop();
        showSprechblase1_SekiroVar = setTimeout(showSprechblase1_Sekiro, SprechblasenTime1)
        //spielSekiroAudioVar = setTimeout(spielSekiroAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Sekiro, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_PflanzeVar = setTimeout(showSprechblaseNope_Pflanze, SprechblasenTime1)
        //spielSprechblaseNope_PflanzeAudioVar setTimeout(spielSprechblaseNope_PflanzeAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Pflanze, SprechblasenTime2)
    }
}

var showSprechblase1_TuerVar;
var spielTuer1AudioVar;
var showSprechblase2_TuerVar;
var spielTuer2AudioVar;

//das gleiche für die Tüer. Allerdings habe ich hier sehr viel mit Logs gearbeiter da ich anfangs große probleme hatte mit der Programmierung der Logik und den Verschiedenen raumzuständen.
function Tuer(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Tuer");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Tuer");
        },2000)
        }

    if(position=="Tuer"){
        SprechblasenTime1=0;
        SprechblasenTime2=nodelay2;
        InteractionDelay=nodelay1;
    }else{
        SprechblasenTime1=0;
        SprechblasenTime2=delay2;
        InteractionDelay=delay3;
    }
    setTimeout(function(){
    console.log("Irgendwo hatte ich doch einen Schlüssel versteckt mensch..")
    console.log("useitem2: " + useItem2)
    console.log("tischschluessel: " + tischSchluessel)
    console.log("Hock: " + Hock)
    console.log("hockkom: " + HockKom)
    console.log("hockkomschreib: " + HockKomSchreib)
    console.log("gardine: " + gardine)
    console.log("gardineab: " + gardineab)
    console.log("kom: " + Kom)
    console.log("komschreib: " + KomSchreib)
    console.log("x: " + x)
    
    if(useItem1==0 && use==0 && take==0){
        sprechblasenStop();
        showSprechblase1_TuerVar = setTimeout(showSprechblase1_Tuer, SprechblasenTime1)
        //spielTuer1AudioVar = setTimeout(spielTuer1Audio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Tuer, SprechblasenTime2)
    }
    /*MARKER!
    if(useItem1!=0 || use!=0 || take!=0 || useItem2==0){
        console.log("nope")
        sprechblasenStop();
        showSprechblaseNope_TuerVar = setTimeout(showSprechblaseNope_Tuer, SprechblasenTime1)
        //spielSprechblaseNope_TuerAudioVar setTimeout(spielSprechblaseNope_TuerAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Tuer, SprechblasenTime2)
    }
    */

    if(useItem1==1){
        document.getElementById("Sprechblase1_Tuer").src="sprechblasen/schluesselnichtpassen.png";
        document.getElementById("Sprechblase1_Tuer").style.left="-257px";
        SprechblaseFunction("Sprechblase1_Tuer");
        console.log("Das scheint nicht der richtige Schluessel zu sein..")
        useItem1 = useItem1 - useItem1;
    }
    if(tuerAuf==1){
        document.getElementById("bild1").src="Flur(test).png"
        transitionKinderzimmerZuFlur();
        position="TuerBernd";
        console.log("der neue raum")
        resetRaum1();
    }
    /*if(use==1){
        console.log("hm das kann ich so nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    */
    //die Tuer Öffnen
    if(useItem2>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==1 && gardine==0 && gardineab==0 && tischSchluessel==1 && tuerAuf==0){
        sprechblasenStop();
        showSprechblase2_TuerVar = setTimeout(showSprechblase2_Tuer, SprechblasenTime1)
        //spielTuer2AudioVar = setTimeout(spielTuer2Audio, SprechblasenTime1)
        setTimeout(hideSprechblase2_Tuer, SprechblasenTime2)
        document.getElementById("bild1").src="Zimmer1_Ende_R1.png"
        tuerAuf++;
        tischSchluessel = tischSchluessel - tischSchluessel;
        Start++;
        sceene = "Zimmer1_Ende_R0.png"
        document.getElementById("bildItem2").src="Slot-Leer.png"
    }
    if(useItem2>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==0 && gardine==0 && gardineab==0 && tischSchluessel==1 && tuerAuf==0){
        sprechblasenStop();
        showSprechblase2_TuerVar = setTimeout(showSprechblase2_Tuer, SprechblasenTime1)
        //spielTuer2AudioVar = setTimeout(spielTuer2Audio, SprechblasenTime1)
        setTimeout(hideSprechblase2_Tuer, SprechblasenTime2)

        document.getElementById("bild1").src="Zimmer1_Ende_R0.png"
        tuerAuf++;
        tischSchluessel = tischSchluessel - tischSchluessel;
        Start++;
        sceene = "Zimmer1_Ende_R1.png"
        document.getElementById("bildItem2").src="Slot-Leer.png"
        useItem2 = useItem2 - useItem2;
    }
    
    //Bildwechsel in den neuen Raum

    },InteractionDelay);
}
// Die ganzen Resetfunktionen sind dafür da, dass das die Buttons von Verschiedenen Räumen zurückgesetzt wird, wenn ein Bildwechsel stattfindet
// Für die Funktion gibt es sicherlich einige deutlich einfachere Wege, aber am Ende weiß man es immer besser. Ich denke damit wären die ResetFunktionen selbsterklärend.
function resetall(){
    use=use-use;
    take=take-take;
    document.getElementById("bildButtons").src="Buttonslot.png"
    //entfernen flur buttons
    document.getElementById('knopfKlavier').style.height="0px";
    document.getElementById('knopfKlavier').style.width="0px";
    document.getElementById('knopfBlumeFlur').style.height="0px";
    document.getElementById('knopfBlumeFlur').style.width="0px";
    document.getElementById('knopfKleiderhakenFlur').style.height="0px";
    document.getElementById('knopfKleiderhakenFlur').style.width="0px";
    document.getElementById('knopfVitrine').style.height="0px";
    document.getElementById('knopfVitrine').style.width="0px";
    document.getElementById('knopfTuerBernd').style.height="0px";
    document.getElementById('knopfTuerBernd').style.width="0px";
    document.getElementById('knopfTuerWC').style.height="0px";
    document.getElementById('knopfTuerWC').style.width="0px";
    document.getElementById('knopfTuerStube').style.height="0px";
    document.getElementById('knopfTuerStube').style.width="0px";
    document.getElementById('knopfHausTuer').style.height="0px";
    document.getElementById('knopfHausTuer').style.width="0px";
    document.getElementById("knopfTuerKueche").style.width="0px";
    document.getElementById("knopfTuerKueche").style.height="0px";
    //alle sprechblasen in den raum löschen
    document.getElementById("Sprechblase_BlumeFlur").style.display="none";
    document.getElementById("Sprechblase_Klavier").style.display="none";
    document.getElementById("Sprechblase_KleiderhakenFlur").style.display="none";
    document.getElementById("Sprechblase_Vitrine").style.display="none";
    document.getElementById("Sprechblase_TuerStube").style.display="none";
    document.getElementById("Sprechblase_TuerKueche").style.display="none";
    document.getElementById("Sprechblase_HausTuer").style.display="none";
}

function getRaum1(){
    document.getElementById('knopfRadio').style.height="50px";
    document.getElementById('knopfRadio').style.width="65px";
    document.getElementById('knopfSekiro').style.height="45^^px";
    document.getElementById('knopfSekiro').style.width="40px";
    document.getElementById('knopfSchreibtisch').style.height="88px";
    document.getElementById('knopfSchreibtisch').style.width="70px";
    document.getElementById('knopfPflanze').style.height="140px";
    document.getElementById('knopfPflanze').style.width="45px";
    document.getElementById('knopfSchublade').style.height="30px";
    document.getElementById('knopfSchublade').style.width="60px";
    document.getElementById('knopfBett').style.height="200px";
    document.getElementById('knopfBett').style.width="288px";
    document.getElementById('knopfUhr').style.height="80px";
    document.getElementById('knopfUhr').style.width="60px";
    document.getElementById('knopfKleiderhaken').style.height="150px";
    document.getElementById('knopfKleiderhaken').style.width="30px";
    document.getElementById('knopfFussball').style.height="50px";
    document.getElementById('knopfFussball').style.width="75px";
    document.getElementById('knopfTruhe').style.height="50px";
    document.getElementById('knopfTruhe').style.width="75px";
    document.getElementById('knopfUrkunde').style.height="55px";
    document.getElementById('knopfUrkunde').style.width="32px";
    document.getElementById('knopfWandbild').style.height="200px";
    document.getElementById('knopfWandbild').style.width="90px";
    document.getElementById('knopfSteckdose').style.height="55px";
    document.getElementById('knopfSteckdose').style.width="70px";
    document.getElementById('knopfMuelleimer').style.height="80px";
    document.getElementById('knopfMuelleimer').style.width="80px";
    document.getElementById('knopfTuer').style.height="235px";
    document.getElementById('knopfTuer').style.width="80px";
    document.getElementById('knopfShirt1').style.height="80px";
    document.getElementById('knopfShirt1').style.width="80px";
    document.getElementById('knopfShirt2').style.height="65px";
    document.getElementById('knopfShirt2').style.width="65px";
    document.getElementById('knopfShirt3').style.height="45px";
    document.getElementById('knopfShirt3').style.width="95px";
    document.getElementById('knopfBdasBrot1').style.height="75px";
    document.getElementById('knopfBdasBrot1').style.width="60px";
    document.getElementById("knopfBdasBrot2").style.height="40px";
    document.getElementById("knopfBdasBrot2").style.width="40px";
    document.getElementById("knopfFenster").style.height="180px";
    document.getElementById("knopfFenster").style.width="130px";
    document.getElementById('knopfHocker').style.height="70px";
    document.getElementById('knopfHocker').style.width="70px";
    document.getElementById('knopfEinleitung').style.height="0px";
    document.getElementById('knopfEinleitung').style.width="0px";
}

function resetRaum0(){
    document.getElementById('knopfHocker').style.height="0px";
    document.getElementById('knopfHocker').style.width="0px";
    document.getElementById('knopfRadio').style.height="0px";
    document.getElementById('knopfRadio').style.width="0px";
    document.getElementById('knopfSekiro').style.height="0px";
    document.getElementById('knopfSekiro').style.width="0px";
    document.getElementById('knopfSchreibtisch').style.height="0px";
    document.getElementById('knopfSchreibtisch').style.width="0px";
    document.getElementById('knopfPflanze').style.height="0px";
    document.getElementById('knopfPflanze').style.width="0px";
    document.getElementById('knopfSchublade').style.height="0px";
    document.getElementById('knopfSchublade').style.width="0px";
    document.getElementById('knopfBett').style.height="0px";
    document.getElementById('knopfBett').style.width="0px";
    document.getElementById('knopfUhr').style.height="0px";
    document.getElementById('knopfUhr').style.width="0px";
    document.getElementById('knopfKleiderhaken').style.height="0px";
    document.getElementById('knopfKleiderhaken').style.width="0px";
    document.getElementById('knopfFussball').style.height="0px";
    document.getElementById('knopfFussball').style.width="0px";
    document.getElementById('knopfTruhe').style.height="0px";
    document.getElementById('knopfTruhe').style.width="0px";
    document.getElementById('knopfUrkunde').style.height="0px";
    document.getElementById('knopfUrkunde').style.width="0px";
    document.getElementById('knopfWandbild').style.height="0px";
    document.getElementById('knopfWandbild').style.width="0px";
    document.getElementById('knopfSteckdose').style.height="0px";
    document.getElementById('knopfSteckdose').style.width="0px";
    document.getElementById('knopfMuelleimer').style.height="0px";
    document.getElementById('knopfMuelleimer').style.width="0px";
    document.getElementById('knopfTuer').style.height="0px";
    document.getElementById('knopfTuer').style.width="0px";
    document.getElementById('knopfShirt1').style.height="0px";
    document.getElementById('knopfShirt1').style.width="0px";
    document.getElementById('knopfShirt2').style.height="0px";
    document.getElementById('knopfShirt2').style.width="0px";
    document.getElementById('knopfShirt3').style.height="0px";
    document.getElementById('knopfShirt3').style.width="0px";
    document.getElementById('knopfBdasBrot1').style.height="0px";
    document.getElementById('knopfBdasBrot1').style.width="0px";
    document.getElementById("knopfBdasBrot2").style.height="0px";
    document.getElementById("knopfBdasBrot2").style.width="0px";
    document.getElementById("knopfFenster").style.height="0px";
    document.getElementById("knopfFenster").style.width="0px";
    document.getElementById("knopfSchluessel2").style.height="0px";
    document.getElementById("knopfSchluessel2").style.width="0px";
}

function resetRaum1(){ //function vom Kinderzimmer in den Flur
    use=use-use;
    take=take-take;
    //entfernen der alten Buttons
    document.getElementById('knopfHocker').style.height="0px";
    document.getElementById('knopfHocker').style.width="0px";
    document.getElementById('knopfRadio').style.height="0px";
    document.getElementById('knopfRadio').style.width="0px";
    document.getElementById('knopfSekiro').style.height="0px";
    document.getElementById('knopfSekiro').style.width="0px";
    document.getElementById('knopfSchreibtisch').style.height="0px";
    document.getElementById('knopfSchreibtisch').style.width="0px";
    document.getElementById('knopfPflanze').style.height="0px";
    document.getElementById('knopfPflanze').style.width="0px";
    document.getElementById('knopfSchublade').style.height="0px";
    document.getElementById('knopfSchublade').style.width="0px";
    document.getElementById('knopfBett').style.height="0px";
    document.getElementById('knopfBett').style.width="0px";
    document.getElementById('knopfUhr').style.height="0px";
    document.getElementById('knopfUhr').style.width="0px";
    document.getElementById('knopfKleiderhaken').style.height="0px";
    document.getElementById('knopfKleiderhaken').style.width="0px";
    document.getElementById('knopfFussball').style.height="0px";
    document.getElementById('knopfFussball').style.width="0px";
    document.getElementById('knopfTruhe').style.height="0px";
    document.getElementById('knopfTruhe').style.width="0px";
    document.getElementById('knopfUrkunde').style.height="0px";
    document.getElementById('knopfUrkunde').style.width="0px";
    document.getElementById('knopfWandbild').style.height="0px";
    document.getElementById('knopfWandbild').style.width="0px";
    document.getElementById('knopfSteckdose').style.height="0px";
    document.getElementById('knopfSteckdose').style.width="0px";
    document.getElementById('knopfMuelleimer').style.height="0px";
    document.getElementById('knopfMuelleimer').style.width="0px";
    document.getElementById('knopfTuer').style.height="0px";
    document.getElementById('knopfTuer').style.width="0px";
    document.getElementById('knopfShirt1').style.height="0px";
    document.getElementById('knopfShirt1').style.width="0px";
    document.getElementById('knopfShirt2').style.height="0px";
    document.getElementById('knopfShirt2').style.width="0px";
    document.getElementById('knopfShirt3').style.height="0px";
    document.getElementById('knopfShirt3').style.width="0px";
    document.getElementById('knopfBdasBrot1').style.height="0px";
    document.getElementById('knopfBdasBrot1').style.width="0px";
    document.getElementById("knopfBdasBrot2").style.height="0px";
    document.getElementById("knopfBdasBrot2").style.width="0px";
    document.getElementById("knopfFenster").style.height="0px";
    document.getElementById("knopfFenster").style.width="0px";
    document.getElementById("knopfSchluessel2").style.height="0px";
    document.getElementById("knopfSchluessel2").style.width="0px";
    //ende Entfernen der alten Buttons

    //erstellen der neuen Buttons
    document.getElementById('knopfKlavier').style.height="150px";
    document.getElementById('knopfKlavier').style.width="120px";

    document.getElementById('knopfBlumeFlur').style.height="130px";
    document.getElementById('knopfBlumeFlur').style.width="50px";

    document.getElementById('knopfKleiderhakenFlur').style.height="120px";
    document.getElementById('knopfKleiderhakenFlur').style.width="50px";

    document.getElementById('knopfVitrine').style.height="200px";
    document.getElementById('knopfVitrine').style.width="65px";

    document.getElementById('knopfTuerBernd').style.height="370px";
    document.getElementById('knopfTuerBernd').style.width="100px";

    document.getElementById('knopfTuerWC').style.height="370px";
    document.getElementById('knopfTuerWC').style.width="130px";

    document.getElementById('knopfTuerStube').style.height="200px";
    document.getElementById('knopfTuerStube').style.width="55px";

    document.getElementById('knopfTuerKueche').style.height="185px";
    document.getElementById('knopfTuerKueche').style.width="50px";

    document.getElementById('knopfHausTuer').style.height="130px";
    document.getElementById('knopfHausTuer').style.width="175px";

    //alle Sprechblasen in den Raum Löschen
    document.getElementById("SprechblaseNope_Tisch").style.display="none";
    document.getElementById("SprechblaseNope_Bett").style.display="none";
    document.getElementById("SprechblaseNope_Tuer").style.display="none";
    document.getElementById("SprechblaseNope_AufTisch").style.display="none";
    document.getElementById("SprechblaseNope_Bild").style.display="none";
    document.getElementById("SprechblaseNope_Pflanze").style.display="none";
    document.getElementById("Sprechblase_SchreibtischSchluessel1").style.display="none";
    document.getElementById("Sprechblase1_Gardine").style.display="none";
    document.getElementById("Sprechblase2_Gardinenehmen1").style.display="none";
    document.getElementById("Sprechblase2_Gardinenehmen2").style.display="none";
    document.getElementById("Sprechblase2_Schluessel2").style.display="none";
    document.getElementById("Sprechblase1_Tuer").style.display="none";
    document.getElementById("Sprechblase2_Tuer").style.display="none";
    document.getElementById("Sprechblase1_Schreibtisch").style.display="none";
    document.getElementById("Sprechblase1_Schublade").style.display="none";
    document.getElementById("Sprechblase1_Truhe").style.display="none";
    document.getElementById("Sprechblase1_Pflanze").style.display="none";
    document.getElementById("Sprechblase1_Papierkorb").style.display="none";
    document.getElementById("Sprechblase1_Kleiderhaken").style.display="none";
    document.getElementById("Sprechblase1_Shirt1").style.display="none";
    document.getElementById("Sprechblase1_Shirt2").style.display="none";
    document.getElementById("Sprechblase1_Shirt3").style.display="none";
    document.getElementById("Sprechblase1_Hocker").style.display="none";
    document.getElementById("Sprechblase2_Hockerbenutzen").style.display="none";
    document.getElementById("Sprechblase1_Bernddasbrot1").style.display="none";
    document.getElementById("Sprechblase1_Bernddasbrot2").style.display="none";
    document.getElementById("Sprechblase1_Sekiro").style.display="none";
    document.getElementById("Sprechblase1_Bett").style.display="none";
    document.getElementById("SprechblaseFussball").style.display="none";

}

function resetRaum2(){ //function vom Flur ins Badezimmer
    use=use-use;
    useCard=useCard-useCard;
    take=take-take;
    console.log("lr: "+LR_Schrank)
    console.log("l: " +L_Schrank)
    console.log("r: "+R_Schrank)
    if(LR_Schrank==1 && L_Schrank==0 && R_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_5.png";
        console.log("beide")
    }
    if(L_Schrank==1 && LR_Schrank==0 && R_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_4.png";
        console.log("links")
    }
    if(R_Schrank==1 && LR_Schrank==0 && L_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_6.png";
        console.log("rechts")
    }
    if(klo==1 && R_Schrank==0 && LR_Schrank==0 && L_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_2.png";
    }
    if(Stock==1 && R_Schrank==0 && LR_Schrank==0 && L_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_3.png";
    }

    //entfernen der alten Buttons Flur
    document.getElementById('knopfKlavier').style.height="0px";
    document.getElementById('knopfKlavier').style.width="0px";
    document.getElementById('knopfBlumeFlur').style.height="0px";
    document.getElementById('knopfBlumeFlur').style.width="0px";
    document.getElementById('knopfKleiderhakenFlur').style.height="0px";
    document.getElementById('knopfKleiderhakenFlur').style.width="0px";
    document.getElementById('knopfVitrine').style.height="0px";
    document.getElementById('knopfVitrine').style.width="0px";
    document.getElementById('knopfTuerBernd').style.height="0px";
    document.getElementById('knopfTuerBernd').style.width="0px";
    document.getElementById('knopfTuerWC').style.height="0px";
    document.getElementById('knopfTuerWC').style.width="0px";
    document.getElementById('knopfTuerStube').style.height="0px";
    document.getElementById('knopfTuerStube').style.width="0px";
    document.getElementById('knopfHausTuer').style.height="0px";
    document.getElementById('knopfHausTuer').style.width="0px";
    document.getElementById("knopfTuerKueche").style.width="0px";
    document.getElementById("knopfTuerKueche").style.height="0px";
    //ende Entfernen der alten Buttons

    //erstellen der neuen Buttons

    document.getElementById('knopfPflanzeWC').style.height="162px";
    document.getElementById('knopfPflanzeWC').style.width="62px";

    document.getElementById('knopfDusche').style.height="309px";
    document.getElementById('knopfDusche').style.width="110px";

    document.getElementById('knopfToilette').style.height="122px";
    document.getElementById('knopfToilette').style.width="58px";

    document.getElementById('knopfKlopapier').style.height="29px";
    document.getElementById('knopfKlopapier').style.width="29px";

    document.getElementById('knopfBernddasBrot3').style.height="40px";
    document.getElementById('knopfBernddasBrot3').style.width="40px";

    document.getElementById('knopfHandspiegel').style.height="48px";
    document.getElementById('knopfHandspiegel').style.width="42px";

    document.getElementById('knopfSchrankWC1').style.height="54px";
    document.getElementById('knopfSchrankWC1').style.width="89px";

    document.getElementById('knopfSchrankWC2').style.height="54px";
    document.getElementById('knopfSchrankWC2').style.width="93px";

    document.getElementById('knopfSpiegelWC1').style.height="119px";
    document.getElementById('knopfSpiegelWC1').style.width="82px";

    document.getElementById('knopfSpiegelWC2').style.height="119px";
    document.getElementById('knopfSpiegelWC2').style.width="82px";

    document.getElementById('knopfWaeschekorb').style.height="73px";
    document.getElementById('knopfWaeschekorb').style.width="53px";

    document.getElementById('knopfFlurTuer').style.height="258px";
    document.getElementById('knopfFlurTuer').style.width="54px";

    document.getElementById('knopfHandtuch').style.height="304px";
    document.getElementById('knopfHandtuch').style.width="60px";

    //alle sprechblasen in den raum löschen
    document.getElementById("Sprechblase_BlumeFlur").style.display="none";
    document.getElementById("Sprechblase_Klavier").style.display="none";
    document.getElementById("Sprechblase_KleiderhakenFlur").style.display="none";
    document.getElementById("Sprechblase_Vitrine").style.display="none";
    document.getElementById("Sprechblase_TuerStube").style.display="none";
    document.getElementById("Sprechblase_TuerKueche").style.display="none";
    document.getElementById("Sprechblase_HausTuer").style.display="none";
}

function resetRaum3(){ //function vom Badezimmer in den Flur
    take=take-take;
    use=use-use;
    //entfernen der alten Buttons badezimmer
    document.getElementById('knopfPflanzeWC').style.height="0px";
    document.getElementById('knopfPflanzeWC').style.width="0px";
    document.getElementById('knopfDusche').style.height="0px";
    document.getElementById('knopfDusche').style.width="0px";
    document.getElementById('knopfToilette').style.height="0px";
    document.getElementById('knopfToilette').style.width="0px";
    document.getElementById('knopfKlopapier').style.height="0px";
    document.getElementById('knopfKlopapier').style.width="0px";
    document.getElementById('knopfBernddasBrot3').style.height="0px";
    document.getElementById('knopfBernddasBrot3').style.width="0px";
    document.getElementById('knopfHandspiegel').style.height="0px";
    document.getElementById('knopfHandspiegel').style.width="0px";
    document.getElementById('knopfSchrankWC1').style.height="0px";
    document.getElementById('knopfSchrankWC1').style.width="0px";
    document.getElementById('knopfSchrankWC2').style.height="0px";
    document.getElementById('knopfSchrankWC2').style.width="0px";
    document.getElementById("knopfSpiegelWC1").style.width="0px";
    document.getElementById("knopfSpiegelWC1").style.height="0px";
    document.getElementById("knopfSpiegelWC2").style.width="0px";
    document.getElementById("knopfSpiegelWC2").style.height="0px";
    document.getElementById("knopfWaeschekorb").style.width="0px";
    document.getElementById("knopfWaeschekorb").style.height="0px";
    document.getElementById("knopfFlurTuer").style.width="0px";
    document.getElementById("knopfFlurTuer").style.height="0px";
    document.getElementById("knopfHandtuch").style.width="0px";
    document.getElementById("knopfHandtuch").style.height="0px";
    //ende Entfernen der alten Buttons

    //erstellen der neuen Buttons

    document.getElementById('knopfKlavier').style.height="150px";
    document.getElementById('knopfKlavier').style.width="120px";

    document.getElementById('knopfBlumeFlur').style.height="130px";
    document.getElementById('knopfBlumeFlur').style.width="50px";

    document.getElementById('knopfKleiderhakenFlur').style.height="120px";
    document.getElementById('knopfKleiderhakenFlur').style.width="50px";

    document.getElementById('knopfVitrine').style.height="200px";
    document.getElementById('knopfVitrine').style.width="65px";

    document.getElementById('knopfTuerBernd').style.height="370px";
    document.getElementById('knopfTuerBernd').style.width="100px";

    document.getElementById('knopfTuerWC').style.height="370px";
    document.getElementById('knopfTuerWC').style.width="130px";

    document.getElementById('knopfTuerStube').style.height="200px";
    document.getElementById('knopfTuerStube').style.width="55px";

    document.getElementById('knopfTuerKueche').style.height="185px";
    document.getElementById('knopfTuerKueche').style.width="50px";

    document.getElementById('knopfHausTuer').style.height="130px";
    document.getElementById('knopfHausTuer').style.width="175px";

    //alle sprechblasen in den raum löschen
    document.getElementById("Sprechblase_WCPflanze").style.display="none";
    document.getElementById("Sprechblase_Dusche").style.display="none";
    document.getElementById("Sprechblase_Toilette").style.display="none";
    document.getElementById("Sprechblase_Klopapier").style.display="none";
    document.getElementById("Sprechblase_WCBrot").style.display="none";
    document.getElementById("Sprechblase_Handspiegel").style.display="none";
    document.getElementById("Sprechblase_Waeschekorb").style.display="none";
    document.getElementById("Sprechblase_Handtuch").style.display="none";
    document.getElementById("Sprechblase_WCSpiegel1").style.display="none";
    document.getElementById("Sprechblase_WCSpiegel2").style.display="none";
    document.getElementById("Sprechblase_WCSchrank1").style.display="none";
    document.getElementById("Sprechblase_WCSchrank2").style.display="none";
}

function resetRaum4(){ //function vom Flur ins Kinderzimmer
    use=use-use;
    useCard=useCard-useCard;
    take=take-take;
    //entfernen der alten Buttons Flur
    document.getElementById('knopfKlavier').style.height="0px";
    document.getElementById('knopfKlavier').style.width="0px";
    document.getElementById('knopfBlumeFlur').style.height="0px";
    document.getElementById('knopfBlumeFlur').style.width="0px";
    document.getElementById('knopfKleiderhakenFlur').style.height="0px";
    document.getElementById('knopfKleiderhakenFlur').style.width="0px";
    document.getElementById('knopfVitrine').style.height="0px";
    document.getElementById('knopfVitrine').style.width="0px";
    document.getElementById('knopfTuerBernd').style.height="0px";
    document.getElementById('knopfTuerBernd').style.width="0px";
    document.getElementById('knopfTuerWC').style.height="0px";
    document.getElementById('knopfTuerWC').style.width="0px";
    document.getElementById('knopfTuerStube').style.height="0px";
    document.getElementById('knopfTuerStube').style.width="0px";
    document.getElementById('knopfHausTuer').style.height="0px";
    document.getElementById('knopfHausTuer').style.width="0px";
    document.getElementById("knopfTuerKueche").style.width="0px";
    document.getElementById("knopfTuerKueche").style.height="0px";
    //ende Entfernen der alten Buttons

    //erstellen der neuen Buttons

    document.getElementById('knopfRadio').style.height="50px";
    document.getElementById('knopfRadio').style.width="65px";
    document.getElementById('knopfSekiro').style.height="45^^px";
    document.getElementById('knopfSekiro').style.width="40px";
    document.getElementById('knopfSchreibtisch').style.height="88px";
    document.getElementById('knopfSchreibtisch').style.width="70px";
    document.getElementById('knopfPflanze').style.height="140px";
    document.getElementById('knopfPflanze').style.width="45px";
    document.getElementById('knopfSchublade').style.height="30px";
    document.getElementById('knopfSchublade').style.width="60px";
    document.getElementById('knopfBett').style.height="200px";
    document.getElementById('knopfBett').style.width="288px";
    document.getElementById('knopfUhr').style.height="80px";
    document.getElementById('knopfUhr').style.width="60px";
    document.getElementById('knopfKleiderhaken').style.height="150px";
    document.getElementById('knopfKleiderhaken').style.width="30px";
    document.getElementById('knopfFussball').style.height="50px";
    document.getElementById('knopfFussball').style.width="75px";
    document.getElementById('knopfTruhe').style.height="50px";
    document.getElementById('knopfTruhe').style.width="75px";
    document.getElementById('knopfUrkunde').style.height="55px";
    document.getElementById('knopfUrkunde').style.width="32px";
    document.getElementById('knopfWandbild').style.height="200px";
    document.getElementById('knopfWandbild').style.width="90px";
    document.getElementById('knopfSteckdose').style.height="55px";
    document.getElementById('knopfSteckdose').style.width="70px";
    document.getElementById('knopfMuelleimer').style.height="80px";
    document.getElementById('knopfMuelleimer').style.width="80px";
    document.getElementById('knopfTuer').style.height="235px";
    document.getElementById('knopfTuer').style.width="80px";
    document.getElementById('knopfShirt1').style.height="80px";
    document.getElementById('knopfShirt1').style.width="80px";
    document.getElementById('knopfShirt2').style.height="65px";
    document.getElementById('knopfShirt2').style.width="65px";
    document.getElementById('knopfShirt3').style.height="45px";
    document.getElementById('knopfShirt3').style.width="95px";
    document.getElementById('knopfBdasBrot1').style.height="75px";
    document.getElementById('knopfBdasBrot1').style.width="60px";
    document.getElementById("knopfBdasBrot2").style.height="40px";
    document.getElementById("knopfBdasBrot2").style.width="40px";
    document.getElementById("knopfFenster").style.height="180px";
    document.getElementById("knopfFenster").style.width="130px";

    //alle sprechblasen in den raum löschen
    document.getElementById("Sprechblase_BlumeFlur").style.display="none";
    document.getElementById("Sprechblase_Klavier").style.display="none";
    document.getElementById("Sprechblase_KleiderhakenFlur").style.display="none";
    document.getElementById("Sprechblase_Vitrine").style.display="none";
    document.getElementById("Sprechblase_TuerStube").style.display="none";
    document.getElementById("Sprechblase_TuerKueche").style.display="none";
    document.getElementById("Sprechblase_HausTuer").style.display="none";
}

function resetRaum5(){ //flur in die Küche
    use=use-use;
    useCard=useCard-useCard;
    take=take-take;
    openKueche=openKueche+1;
    console.log("Rampe: " + Rampe)
    console.log("Pfannehaben: " + Pfannehaben)
    console.log("Kasten: " + Kasten)
    console.log("kSChluessel: " + kSchluessel)
    if(Rampe==0 && Pfannehaben==0 && Kasten==0 && kSchluessel==0){
        document.getElementById("bild1").src="Kueche_1.png";
        document.getElementById('knopfkStuhl').style.height="56px";
        document.getElementById('knopfkStuhl').style.width="112px";
        console.log("die erste if")
    }
    if(Rampe>0 && Pfannehaben==0 && Kasten==0 && kSchluessel==0){
        document.getElementById("bild1").src="Kueche_2.png";
        document.getElementById('knopfkStuhl').style.height="0px";
        document.getElementById('knopfkStuhl').style.width="0px";
        console.log("die zweite if")
    }
    if(Rampe>0 && Pfannehaben>0 && Kasten==0 && kSchluessel==0){
        document.getElementById("bild1").src="Kueche_3.png";
        document.getElementById('knopfkStuhl').style.height="0px";
        document.getElementById('knopfkStuhl').style.width="0px";
        console.log("die dritte if")
    }
    if(Rampe>0 && Pfannehaben>0 && Kasten>0 && kSchluessel==0){
        document.getElementById("bild1").src="Kueche_4.png";
        document.getElementById('knopfkStuhl').style.height="0px";
        document.getElementById('knopfkStuhl').style.width="0px";
        console.log("die vierte if")
    }
    if(Rampe>0 && Pfannehaben>0 && Kasten>0 && kSchluessel>0){
        document.getElementById("bild1").src="Kueche_5.png";
        document.getElementById('knopfkStuhl').style.height="0px";
        document.getElementById('knopfkStuhl').style.width="0px";
        console.log("die fünfte if")
    }

    /*
    console.log("takestuhl: "+takeStuhl)
    console.log("PfannehabeN: " +Pfannehaben)
    console.log("kasten: "+Kasten)
    if(LR_Schrank==1 && L_Schrank==0 && R_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_5.png";
        console.log("beide")
    }
    if(L_Schrank==1 && LR_Schrank==0 && R_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_4.png";
        console.log("links")
    }
    if(R_Schrank==1 && LR_Schrank==0 && L_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_6.png";
        console.log("rechts")
    }
    if(klo==1 && R_Schrank==0 && LR_Schrank==0 && L_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_2.png";
    }
    if(Stock==1 && R_Schrank==0 && LR_Schrank==0 && L_Schrank==0){
        document.getElementById("bild1").src="Badezimmer_3.png";
    }*/
    //entfernen der alten Buttons Flur
    document.getElementById('knopfKlavier').style.height="0px";
    document.getElementById('knopfKlavier').style.width="0px";
    document.getElementById('knopfBlumeFlur').style.height="0px";
    document.getElementById('knopfBlumeFlur').style.width="0px";
    document.getElementById('knopfKleiderhakenFlur').style.height="0px";
    document.getElementById('knopfKleiderhakenFlur').style.width="0px";
    document.getElementById('knopfVitrine').style.height="0px";
    document.getElementById('knopfVitrine').style.width="0px";
    document.getElementById('knopfTuerBernd').style.height="0px";
    document.getElementById('knopfTuerBernd').style.width="0px";
    document.getElementById('knopfTuerWC').style.height="0px";
    document.getElementById('knopfTuerWC').style.width="0px";
    document.getElementById('knopfTuerStube').style.height="0px";
    document.getElementById('knopfTuerStube').style.width="0px";
    document.getElementById('knopfHausTuer').style.height="0px";
    document.getElementById('knopfHausTuer').style.width="0px";
    document.getElementById("knopfTuerKueche").style.width="0px";
    document.getElementById("knopfTuerKueche").style.height="0px";
    //ende Entfernen der alten Buttons
    
    //erstellen der neuen Buttons
  
    document.getElementById('knopfsKasten').style.height="129px";
    document.getElementById('knopfsKasten').style.width="67px";
 
    document.getElementById('knopfkFlurTuer').style.height="242px";
    document.getElementById('knopfkFlurTuer').style.width="90px";
    
    document.getElementById('knopfKuehlschrank').style.height="218px";
    document.getElementById('knopfKuehlschrank').style.width="86px";
    
    document.getElementById('knopfWasch').style.height="103px";
    document.getElementById('knopfWasch').style.width="78px";
    
    document.getElementById('knopfSpuehl').style.height="85px";
    document.getElementById('knopfSpuehl').style.width="80px";
    
    document.getElementById('knopfkSchrank').style.height="103px";
    document.getElementById('knopfkSchrank').style.width="77px";
    
    document.getElementById('knopfPfanne').style.height="28px";
    document.getElementById('knopfPfanne').style.width="80px";
    
    document.getElementById('knopfKaffee').style.height="124px";
    document.getElementById('knopfKaffee').style.width="56px";
    
    document.getElementById('knopfBoard').style.height="152px";
    document.getElementById('knopfBoard').style.width="142px";
    
    document.getElementById('knopfkTisch').style.height="134px";
    document.getElementById('knopfkTisch').style.width="298px";
    

   
}

function resetRaum6(){ //küche in den Flur
    use=use-use;
    take=take-take;
    
    console.log("lol eigentlich müsste die tuer offen sien")
    //entfernen der alten Buttons küche
    document.getElementById('knopfsKasten').style.height="0px";
    document.getElementById('knopfsKasten').style.width="0px";
 
    document.getElementById('knopfkFlurTuer').style.height="0px";
    document.getElementById('knopfkFlurTuer').style.width="0px";
    
    document.getElementById('knopfKuehlschrank').style.height="0px";
    document.getElementById('knopfKuehlschrank').style.width="0px";
    
    document.getElementById('knopfWasch').style.height="0px";
    document.getElementById('knopfWasch').style.width="0px";
    
    document.getElementById('knopfSpuehl').style.height="0px";
    document.getElementById('knopfSpuehl').style.width="0px";
    
    document.getElementById('knopfkSchrank').style.height="0px";
    document.getElementById('knopfkSchrank').style.width="0px";
    
    document.getElementById('knopfPfanne').style.height="0px";
    document.getElementById('knopfPfanne').style.width="0px";
    
    document.getElementById('knopfKaffee').style.height="0px";
    document.getElementById('knopfKaffee').style.width="0px";
    
    document.getElementById('knopfBoard').style.height="0px";
    document.getElementById('knopfBoard').style.width="0px";
    
    document.getElementById('knopfkTisch').style.height="0px";
    document.getElementById('knopfkTisch').style.width="0px";
    
    document.getElementById('knopfkStuhl').style.height="0px";
    document.getElementById('knopfkStuhl').style.width="0px";
    //ende Entfernen der alten Buttons
    
    //erstellen der neuen Buttons
  
    document.getElementById('knopfKlavier').style.height="150px";
    document.getElementById('knopfKlavier').style.width="120px";

    document.getElementById('knopfBlumeFlur').style.height="130px";
    document.getElementById('knopfBlumeFlur').style.width="50px";

    document.getElementById('knopfKleiderhakenFlur').style.height="120px";
    document.getElementById('knopfKleiderhakenFlur').style.width="50px";

    document.getElementById('knopfVitrine').style.height="200px";
    document.getElementById('knopfVitrine').style.width="65px";

    document.getElementById('knopfTuerBernd').style.height="370px";
    document.getElementById('knopfTuerBernd').style.width="100px";

    document.getElementById('knopfTuerWC').style.height="370px";
    document.getElementById('knopfTuerWC').style.width="130px";

    document.getElementById('knopfTuerStube').style.height="200px";
    document.getElementById('knopfTuerStube').style.width="55px";

    document.getElementById('knopfTuerKueche').style.height="185px";
    document.getElementById('knopfTuerKueche').style.width="50px";

    document.getElementById('knopfHausTuer').style.height="130px";
    document.getElementById('knopfHausTuer').style.width="175px";
   
}

//hier geht es weiter mit den Funktionen für Raum eins.

var showSprechblase1_Shirt1Var;
var spielShirt1AudioVar;

function Shirt1(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Bett");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Bett");
        },2000)
        }
        if(position=="Bett"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }


    sprechblasenStop();
    console.log("Caps for the WIN!")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        showSprechblase1_Shirt1Var = setTimeout(showSprechblase1_Shirt1, SprechblasenTime1)
        //spielShirt1AudioVar = setTimeout(spielShirt1Audio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Shirt1, SprechblasenTime2)
    }
    else{
        showSprechblaseNope_BettVar = setTimeout(showSprechblaseNope_Bett, SprechblasenTime1)
        //spielSprechblaseNope_BettAudioVar setTimeout(spielSprechblaseNope_BettAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Bett, SprechblasenTime2)
    }
}

var showSprechblase1_Shirt2Var;
var spielShirt2AudioVar;

function Shirt2(){

    if(position!="aufSchreibtisch"){
    MoveTo("Schreibtisch");
    }else{
    MoveToRunter();
    setTimeout(function(){
        MoveTo("Schreibtisch");
    },2000)
    }

    if(position=="Schreibtisch"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }

    sprechblasenStop();
    console.log("was waere ein Teppisch schon ohne ein paar Shirts")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        showSprechblase1_Shirt2Var = setTimeout(showSprechblase1_Shirt2, SprechblasenTime1)
        //spielShirt2AudioVar = setTimeout(spielShirt2Audio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Shirt2, SprechblasenTime2)
    }
    else{
        showSprechblaseNope_TischVar = setTimeout(showSprechblaseNope_Tisch, SprechblasenTime1)
        //spielSprechblaseNope_TischAudioVar setTimeout(spielSprechblaseNope_TischAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Tisch, SprechblasenTime2)
    }
}

var showSprechblase1_Shirt3Var;
var spielShirt3AudioVar;

function Shirt3(){
    //Speziallcheck falls die Figur auf dem Schreibtisch ist
    if(position!="aufSchreibtisch"){
        MoveTo("Muelleimer");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Muelleimer");
        },2000)
        }
        //checkt ob er schon bei der position ist oder nicht
        //passt den delay passend an
        if(position=="Muelleimer"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }
    console.log("was waere ein Teppisch schon ohne ein paar Shirts")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        sprechblasenStop();
        showSprechblase1_Shirt3Var = setTimeout(showSprechblase1_Shirt3, SprechblasenTime1)
        //spielShirt3AudioVar setTimeout(spielShirt3Audio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Shirt3, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_BildVar = setTimeout(showSprechblaseNope_Bild, SprechblasenTime1)
        //spielSprechblaseNope_BildAudioVar setTimeout(spielSprechblaseNope_BildAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Bild, SprechblasenTime2)
    }
}


var showSprechblase1_Bernddasbrot1Var;
var spielBernddasbrot1AudioVar;

function BdasBrot1(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Schreibtisch");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Schreibtisch");
        },2000)
        }

        
        if(position=="Schreibtisch"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }
        
    sprechblasenStop();
    console.log("oh das liegt ja einer meiner Papis!")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
    showSprechblase1_Bernddasbrot1Var = setTimeout(showSprechblase1_Bernddasbrot1, SprechblasenTime1)
    //spielBernddasbrot1AudioVar setTimeout(spielBernddasbrot1Audio, SprechblasenTime1)
    setTimeout(hideSprechblase1_Bernddasbrot1, SprechblasenTime2)
    }
    else{
        showSprechblaseNope_TischVar = setTimeout(showSprechblaseNope_Tisch, SprechblasenTime1)
        //spielSprechblaseNope_TischAudioVar setTimeout(spielSprechblaseNope_TischAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Tisch, SprechblasenTime2)
    }
    
}

var showSprechblase1_Bernddasbrot2Var;
var spielBernddasbrot2AudioVar;

function BdasBrot2(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Tuer");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Tuer");
        },2000)
        }


        if(position=="Tuer"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }

    sprechblasenStop();
    console.log("Hallo Papi")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
    showSprechblase1_Bernddasbrot2Var = setTimeout(showSprechblase1_Bernddasbrot2, SprechblasenTime1)
    //spielBernddasbrot2AudioVar = setTimeout(spielBernddasbrot2Audio, SprechblasenTime1)
    setTimeout(hideSprechblase1_Bernddasbrot2, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_TuerVar = setTimeout(showSprechblaseNope_Tuer, SprechblasenTime1)
        //spielSprechblaseNope_TuerAudioVar setTimeout(spielSprechblaseNope_TuerAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Tuer, SprechblasenTime2)
    }
}

var showSprechblase1_UhrVar;
var spielUhrAudioVar;

function Uhr(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Schublade");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Schublade");
        },2000)
        }

        if(position=="Schublade"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }
    console.log("Hier müssten mal die Batterien getauscht werden..")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        sprechblasenStop();
        showSprechblase1_UhrVar = setTimeout(showSprechblase1_Uhr, SprechblasenTime1)
        //spielUhrAudioVar = setTimeout(spielUhrAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Uhr, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_PflanzeVar = setTimeout(showSprechblaseNope_Pflanze, SprechblasenTime1)
        //spielSprechblaseNope_PflanzeAudioVar setTimeout(spielSprechblaseNope_PflanzeAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Pflanze, SprechblasenTime2)
    }
}


var showSprechblase1_KleiderhakenVar;
var spielKleiderhakenAudioVar;

function Kleiderhaken(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Bett");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Bett");
        },2000)
        }

        if(position=="Bett"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }

    sprechblasenStop();
    console.log("wofür hab ich einen Kleiderhaken? Der Boden geht doch auch")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
    showSprechblase1_KleiderhakenVar = setTimeout(showSprechblase1_Kleiderhaken, SprechblasenTime1)
    //spielKleiderhakenAudioVar = setTimeout(spielKleiderhakenAudio, SprechblasenTime1)
    setTimeout(hideSprechblase1_Kleiderhaken, SprechblasenTime2)
    }
    else{
        showSprechblaseNope_BettVar = setTimeout(showSprechblaseNope_Bett, SprechblasenTime1)
        //spielSprechblaseNope_BettAudioVar setTimeout(spielSprechblaseNope_BettAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Bett, SprechblasenTime2)
    }
}

var showSprechblase1_PapierkorbVar;
var spielPapierkorbAudioVar;

function Muelleimer(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Muelleimer");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Muelleimer");
        },2000)
        }

        if(position=="Muelleiemr"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }
    console.log("manche nennen es Muelleimer.. ich nenne es Baskettballkorb")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        sprechblasenStop();
        showSprechblase1_PapierkorbVar = setTimeout(showSprechblase1_Papierkorb, SprechblasenTime1)
        //spielPapierkorbAudioVar = setTimeout(spielPapierkorbAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Papierkorb, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_BildVar = setTimeout(showSprechblaseNope_Bild, SprechblasenTime1)
        //spielSprechblaseNope_BildAudioVar setTimeout(spielSprechblaseNope_BildAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Bild, SprechblasenTime2)
    }
}

var showSprechblase1_Schluessel2Var;
var spielSchluessel2AudioVar;


//die Funktion um den zweiten Schlüssel zu Benutzen. Es wird geprüft was für ein Zustand der Raumhat und ob der Schlüssel shcon aufgenommen wurde. Wenn das der Fall ist ändert sich das bild und der Button verschwindet.
function Schluessel2(){

    

    if(position=="aufSchreibtisch"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }
    
    console.log("ein neuer Schluessel!")
    console.log(gardineab)
    if((useItem1==0 && use==0 && take==0)||take==1){
        sprechblasenStop();
        showSprechblase1_Schluessel2Var = setTimeout(showSprechblase1_Schluessel2, SprechblasenTime1)
        //spielSchluessel2AudioVar = setTimeout(spielSchluessel2Audio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Schluessel2, SprechblasenTime2)
    }
    if(take2>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==1 && gardine==0 && gardineab==1 && tischSchluessel==0 && tuerAuf==0){
        document.getElementById("bild1").src="Zimmer1_GardineAb_Schluessel1_R1.png"
        tischSchluessel++;
        gardineab = gardineab - gardineab;
        Start++;
        sceene = "Zimmer1_GardineAb_Schluessel1_R0.png"
        document.getElementById("bildItem2").src="Schluessel2.png"
        take2 = take2 - take2;
        take=take-take;
        document.getElementById("bildButtons").src="Buttonslot.png"
        document.getElementById('knopfSchluessel2').style.height="0px"
        document.getElementById('knopfSchluessel2').style.width="0px"
    }
    if(take2>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==0 && gardine==0 && gardineab==1 && tischSchluessel==0 && tuerAuf==0){
        document.getElementById("bild1").src="Zimmer1_GardineAb_Schluessel1_R0.png"
        tischSchluessel++;
        gardineab = gardineab - gardineab;
        Start++;
        take2 = take2 - take2;
        take=take-take;
        document.getElementById("bildButtons").src="Buttonslot.png"
        sceene = "Zimmer1_GardineAb_Schluessel1_R1.png"
        document.getElementById("bildItem2").src="Schluessel2.png"
        document.getElementById('knopfSchluessel2').style.height="0px"
        document.getElementById('knopfSchluessel2').style.width="0px"
    }

}

var showSprechblase1_BettVar;
var spielBettAudioVar;

function Bett(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Bett");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Bett");
        },2000)
        }

        if(position=="Bett"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }

    sprechblasenStop();
    console.log("Hier mache ich immer Heia")
    if(useItem1==1){
        console.log("Wo soll hier ein Schluessel reinpassen??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
    showSprechblase1_BettVar = setTimeout(showSprechblase1_Bett, SprechblasenTime1)
    //spielBettAudioVar = setTimeout(spielBettAudio, SprechblasenTime1)
    setTimeout(hideSprechblase1_Bett, SprechblasenTime2)
    }
    else{
        showSprechblaseNope_BettVar = setTimeout(showSprechblaseNope_Bett, SprechblasenTime1)
        //spielSprechblaseNope_BettAudioVar setTimeout(spielSprechblaseNope_BettAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Bett, SprechblasenTime2)
    }

}

var showSprechblase1_SchreibtischVar;
var spielSchreibtischAudioVar;
var showSprechblase_SchreibtischSchluessel1Var;
var spielSchreibtischSchluessel1AudioVar;

//Hier kommt die Funktion für den Schreibtisch. Es wird auf alle Möglichen Raumzustände geprüft und jegliche Kombinationen in denen Man das SPiel durchspielen kann. Außerdem das Ganze nocheinmal für die Option ob das Radio an oder aus ist.
//in case you wonder, immernoch Relikte von ersten versuchen der Programmierung
function Schreibtisch(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Schreibtisch");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Schreibtisch");
        },2000)
        }
        

        if(position=="Schreibtisch"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }

    /*if(useItem1==1){
        console.log("jetzt sollte der hier was aufgehen")
        console.log("sceene: " + sceene)
        console.log(x)
        console.log(openSchublade2)
        if(x==1 && openSchublade2==0 && HockerNummer2>0){
            document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
            console.log("X: " + x)
            console.log("Sceene: " + sceene)
            console.log("Schub: " + Schub)
            Schub2++;
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
            //x = x - x;
            openSchublade2++;
            SchreibHocker++;
            console.log("sceene: " + sceene)
            document.getElementById("bildItem1").src="Slot-Leer.png" 
            console.log("das hier? " + HockerNummer3)
    
        }
        if(x==0 && openSchublade2==0 && HockerNummer2>0){
            document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
            console.log("X: " + x)
            console.log("Sceene: " + sceene)
            console.log("Schub: " + Schub)
            Schub2++;
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
            //x = x - x;
            openSchublade2++;
            SchreibHocker++;
            console.log("sceene: " + sceene)
            document.getElementById("bildItem1").src="Slot-Leer.png" 
            console.log("das hier? " + HockerNummer3)
        }

        if(x==1 && openSchublade2==0){
            document.getElementById("bild1").src="Zimmer1_KommodeAuf_SchreibtischAuf_R1.png"
            console.log("X: " + x)
            console.log("Sceene: " + sceene)
            console.log("Schub: " + Schub)
            Schub2++;
            sceene = "Zimmer1_KommodeAuf_SchreibtischAuf_R0.png"
            //x = x - x;
            openSchublade2++;
            console.log("sceene: " + sceene)
            document.getElementById("bildItem1").src="Slot-Leer.png" 
            console.log("das hier? " + HockerNummer3)

        }
        if(x==0 && openSchublade2==0){
            document.getElementById("bild1").src="Zimmer1_KommodeAuf_SchreibtischAuf_R0.png"
            console.log("geht der hier rein?")
            console.log("X: " + x)
            console.log("Sceene: " + sceene)
            console.log("Schub: " + Schub)
            Schub2++;
            sceene = "Zimmer1_KommodeAuf_SchreibtischAuf_R1.png"
            openSchublade2++;
            console.log("sceene: " + sceene)
            document.getElementById("bildItem1").src="Slot-Leer.png" 
            console.log("das hier? " + HockerNummer3)
        } 
        /* WIESO FUNZT DAS NICHT?????!?!?!?!?
        if(x==1 && openSchublade2==1 && HockerNummer!=0){
            document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
            console.log("geht der hier rein?")
            console.log("X: " + x)
            console.log("Sceene: " + sceene)
            console.log("Schub: " + Schub)
            Schub2++;
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
            openSchublade2++;
            SchreibHocker++;
            console.log("sceene: " + sceene)
            document.getElementById("bildItem1").src="Slot-Leer.png" 
            console.log("das hier? " + HockerNummer3)
        } 
        if(x==0 && openSchublade2==1 && HockerNummer!=0){
            document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
            console.log("geht der hier rein?")
            console.log("X: " + x)
            console.log("Sceene: " + sceene)
            console.log("Schub: " + Schub)
            Schub2++;
            sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
            openSchublade2++;
            SchreibHocker++;
            console.log("sceene: " + sceene)
            document.getElementById("bildItem1").src="Slot-Leer.png" 
            console.log("das hier? " + HockerNummer3)
        }
        
        if(take==1){
            console.log("hm, dass kann ich nicht nehmen")
        }
    
    }
    */

    if(useItem1==0 && use==0 && take==0 && HockKomSchreib==0 && KomSchreib==0){
        sprechblasenStop();
        showSprechblase1_SchreibtischVar = setTimeout(showSprechblase1_Schreibtisch, SprechblasenTime1)
        //spielSchreibtischAudioVar = setTimeout(spielSchreibtischAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Schreibtisch, SprechblasenTime2)    
    }
    
    

    if(useItem1==1 || HockKomSchreib!=0 || KomSchreib!=0){
        sprechblasenStop();
        showSprechblase_SchreibtischSchluessel1Var = setTimeout(showSprechblase_SchreibtischSchluessel1, SprechblasenTime1)
        //spielSchreibtischSchluessel1AudioVar = setTimeout(spielSchreibtischSchluessel1Audio, SprechblasenTime1)
        setTimeout(hideSprechblase_SchreibtischSchluessel1, SprechblasenTime2)
    }
    if(use!=0 || take!=0){
        sprechblasenStop();
        showSprechblaseNope_TischVar = setTimeout(showSprechblaseNope_Tisch, SprechblasenTime1)
        //spielSprechblaseNope_TischAudioVar setTimeout(spielSprechblaseNope_TischAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Tisch, SprechblasenTime2)
    }

    if(useItem1>0 && Hock==0 && HockKom==1 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==1){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
        HockKomSchreib++;
        useItem1 = useItem1 -useItem1;
        HockKom = HockKom - HockKom;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
        document.getElementById("bildItem1").src="Slot-Leer.png" 
    }
    if(useItem1>0 && Hock==0 && HockKom==1 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==0){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
        HockKomSchreib++;
        useItem1 = useItem1 -useItem1;
        HockKom = HockKom - HockKom;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
        document.getElementById("bildItem1").src="Slot-Leer.png" 
    }
    
    if(useItem1==1 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==1 & KomSchreib==0 && x==1){
        document.getElementById("bild1").src="Zimmer1_KommodeAuf_SchreibtischAuf_R1.png"
        KomSchreib++;
        useItem1 = useItem1 -useItem1;
        Kom = Kom - Kom;
        Start++;
        sceene = "Zimmer1_KommodeAuf_SchreibtischAuf_R0.png"
        document.getElementById("bildItem1").src="Slot-Leer.png" 
    }
    if(useItem1==1 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==1 & KomSchreib==0 && x==0){
        document.getElementById("bild1").src="Zimmer1_KommodeAuf_SchreibtischAuf_R0.png"
        KomSchreib++;
        useItem1 = useItem1 -useItem1;
        Kom = Kom - Kom;
        Start++;
        sceene = "Zimmer1_KommodeAuf_SchreibtischAuf_R1.png"
        document.getElementById("bildItem1").src="Slot-Leer.png" 
    }
    
    if(useItem1>0 && Hock==1 && HockKom==0 && HockKomSchreib==0 && Kom==1 & KomSchreib==0 && x==1){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
        HockKomSchreib++;
        useItem1 = useItem1 -useItem1;
        Hock = Hock - Hock;
        Kom = Kom - Kom;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
        document.getElementById("bildItem1").src="Slot-Leer.png" 
    }
    if(useItem1>0 && Hock==1 && HockKom==0 && HockKomSchreib==0 && Kom==1 & KomSchreib==0 && x==0){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
        HockKomSchreib++;
        useItem1 = useItem1 -useItem1;
        Hock = Hock - Hock;
        Kom = Kom - Kom;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
        document.getElementById("bildItem1").src="Slot-Leer.png" 
    }

    if(HockerNummer>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==1){
        document.getElementById("bild1").src="Zimmer1_Kommode0_Schreibtisch0_R1_Hocker1.png"
        Hock++;
        HockerNummer = HockerNummer - HockerNummer;
        Start++;
        sceene = "Zimmer1_Kommode0_Schreibtisch0_R0_Hocker1.png"
        document.getElementById('knopfHocker').style.height="0px"
        document.getElementById('knopfHocker').style.width="0px" 
    }
    if(HockerNummer>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==0){
        document.getElementById("bild1").src="Zimmer1_Kommode0_Schreibtisch0_R0_Hocker1.png"
        Hock++;
        HockerNummer = HockerNummer - HockerNummer;
        Start++;
        sceene = "Zimmer1_Kommode0_Schreibtisch0_R1_Hocker1.png"
        document.getElementById('knopfHocker').style.height="0px"
        document.getElementById('knopfHocker').style.width="0px"
    }

    if(HockerNummer>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==1 && KomSchreib==0 && x==1){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch0_Hocker1_R1.png"
        HockKom++;
        HockerNummer = HockerNummer - HockerNummer;
        Kom = Kom - Kom;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R0.png"
        document.getElementById('knopfHocker').style.height="0px"
        document.getElementById('knopfHocker').style.width="0px" 
    }
    if(HockerNummer>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==1 && KomSchreib==0 && x==0){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch0_Hocker1_R0.png"
        HockKom++;
        HockerNummer = HockerNummer - HockerNummer;
        Kom = Kom - Kom;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch0_Hocker1_R1.png"
        document.getElementById('knopfHocker').style.height="0px"
        document.getElementById('knopfHocker').style.width="0px"
    }

    if(HockerNummer>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==1 && x==1){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png"
        HockKomSchreib++;
        HockerNummer = HockerNummer - HockerNummer;
        KomSchreib = KomSchreib - KomSchreib;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
        document.getElementById('knopfHocker').style.height="0px"
        document.getElementById('knopfHocker').style.width="0px" 
    }
    if(HockerNummer>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==1 && x==0){
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_R0.png"
        HockKomSchreib++;
        HockerNummer = HockerNummer - HockerNummer;
        KomSchreib = KomSchreib - KomSchreib;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_R1.png" 
        document.getElementById('knopfHocker').style.height="0px"
        document.getElementById('knopfHocker').style.width="0px"
    }


/*
    else{
        console.log("irgendwo hatte ich dochmal einen Schlüssel fuer die Scheibtisch Schublade.. wo war der denn noch gleich?")
        console.log("sceene: " + sceene)
    }

    if(HockerNummer>0){
        console.log("jetzt sollte der hocker hier hin geschoben werden")
        //HockerNummer = HockerNummer - HockerNummer;
        console.log("X: " + x)
        console.log("Hockernummer: " + HockerNummer)
        console.log("openschublade: " + openSchublade2)
    }

    if(x==1 && HockerNummer>0 && openSchublade2==0){
        document.getElementById("bild1").src="Zimmer1_Kommode0_Schreibtisch0_R1_Hocker1.png"
        console.log("X: " + x)
        console.log("Sceene: " + sceene)
        console.log("Hoker: " + HockerNummer)
        HockerNummer2++;
        sceene = "Zimmer1_Kommode0_Schreibtisch0_R0_Hocker1.png"
        //x = x - x;
        //openSchublade2++;
        console.log("sceene: " + sceene)
        //document.getElementById("bildItem1").src="Slot-Leer.png" 
        console.log("das hier? " + HockerNummer3)
    }

    if(x==0 && HockerNummer>0 && openSchublade2==0){
        document.getElementById("bild1").src="Zimmer1_Kommode0_Schreibtisch0_R0_Hocker1.png"
        console.log("geht der hier rein?")
        console.log("X: " + x)
        console.log("Sceene: " + sceene)
        console.log("Hocker: " + HockerNummer)
        HockerNummer2++;
        sceene = "Zimmer1_Kommode0_Schreibtisch0_R1_Hocker1.png"
        //openSchublade2++;
        console.log("sceene: " + sceene)
        //document.getElementById("bildItem1").src="Slot-Leer.png" 
        console.log("das hier? " + HockerNummer3)
    } 
*/
}

var showSprechblase1_GardineVar;
var spielGardineAudioVar;
var showSprechblase2_Gardinenehmen1Var;
var spielGardinenehmen1AudioVar;
var showSprechblase2_Gardinenehmen2Var;
var spielGardinenehmen2AudioVar;

//die Funktion um die Gardine vom Fenster zu ziehen. Wie immer wird der Raum auf seine Zustände geprüft und dannach wird entschieden was passiert.
function Fenster(){
   

    if(position=="Schreibtisch"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }


    console.log("Ein Fenster - die Freiheit!")
   /* if(useItem1==1){
        console.log("Wo soll ich hier einen Schlüssel reinstecken??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    } */

    if(useItem1==0 && use==0 && take==0 && gardine==0 && gardineab==0){
        neueGardineSprechblase();
        SprechblaseFunction("Sprechblase1_Gardine");
    }

    //function um die Gardine anzubrechen
    if(ziehen>0 && Hock==0 && HockKom==0 && HockKomSchreib==1 && Kom==0 && KomSchreib==0 && x==1 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
        

        if(position!="aufSchreibtisch"){
            MoveToFenster();
        }
        
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_Gardine1_R1.png"
        gardine++;
        ziehen = ziehen - ziehen;
        document.getElementById("bildButtons").src="Buttonslot.png"
        HockKomSchreib = HockKomSchreib - HockKomSchreib;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_Gardine1_R0.png"
    }
    if(ziehen>0 && Hock==0 && HockKom==0 && HockKomSchreib==1 && Kom==0 && KomSchreib==0 && x==0 && gardine==0 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
        
        sprechblasenStop();
        showSprechblase2_Gardinenehmen1Var = setTimeout(showSprechblase2_Gardinenehmen1, SprechblasenTime1)
        //spielGardinenehmen1AudioVar = setTimeout(spielGardinenhmen1Audio, SprechblasenTime1)
        setTimeout(hideSprechblase2_Gardinenehmen1, SprechblasenTime2)
        
        if(position!="aufSchreibtisch"){
            MoveToFenster();
        }
        
        document.getElementById("bild1").src="Zimmer1_Kommode1_Schreibtisch1_Hocker1_Gardine1_R0.png"
        gardine++;
        ziehen = ziehen - ziehen;
        document.getElementById("bildButtons").src="Buttonslot.png"
        HockKomSchreib = HockKomSchreib - HockKomSchreib;
        Start++;
        sceene = "Zimmer1_Kommode1_Schreibtisch1_Hocker1_Gardine1_R1.png"
    }
    //function um die Gardine abzubrechen
    if(ziehen>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==1 && gardine==1 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
        

        if(position!="aufSchreibtisch"){
            MoveToFenster();
        }

        
        
        document.getElementById("bild1").src="Zimmer1_GardineAb_R1.png"
        gardineab++;
        ziehen = ziehen - ziehen;
        document.getElementById("bildButtons").src="Buttonslot.png"
        gardine = gardine -gardine;
        Start++;
        sceene = "Zimmer1_GardineAb_R0.png"
        document.getElementById('knopfSchluessel2').style.height="35px"
        document.getElementById('knopfSchluessel2').style.width="35px"
    }
    if(ziehen>0 && Hock==0 && HockKom==0 && HockKomSchreib==0 && Kom==0 && KomSchreib==0 && x==0 && gardine==1 && gardineab==0 && tischSchluessel==0 && tuerAuf==0){
       
        if(position!="aufSchreibtisch"){
            MoveToFenster();
        }

        sprechblasenStop();
        showSprechblase2_Gardinenehmen2Var = setTimeout(showSprechblase2_Gardinenehmen2, SprechblasenTime1)
        //spielGardinenehmen2AudioVar = setTimeout(spielGardinenhmen2Audio, SprechblasenTime1)
        setTimeout(hideSprechblase2_Gardinenehmen2, SprechblasenTime2)
       
        document.getElementById("bild1").src="Zimmer1_GardineAb_R0.png"
        gardineab++;
        ziehen = ziehen - ziehen;
        document.getElementById("bildButtons").src="Buttonslot.png"
        gardine = gardine - gardine;
        Start++;
        sceene = "Zimmer1_GardineAb_R1.png"
        document.getElementById('knopfSchluessel2').style.height="35px"
        document.getElementById('knopfSchluessel2').style.width="35px"
    }

    


}

var showSprechblase1_HockerVar;
var spielHockerAudioVar;
var showSprechblase2_HockerbenutzenVar;
var spielHockerbenutzenAudioVar;

//die Funktion den Hocker auszuwählen um in dann zu verschieben. Der Bildwechsel findet in der Funktion vom SChreibtisch statt.
function Hocker(){

    if(position!="aufSchreibtisch"){
        MoveTo("Schreibtisch");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Hocker");
        },2000)
    }


    if(position=="Schreibtisch"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }

    console.log("hm der Hocker könnte vielleicht noch nützlich werden..")
    if(useItem1==1){
        console.log("Wo soll ich hier einen Schlüssel reinstecken??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==0 && useItem1==0 && use==0){
        sprechblasenStop();
        showSprechblase1_HockerVar = setTimeout(showSprechblase1_Hocker, SprechblasenTime1)
        //spielHockerAudioVar = setTimeout(spielHockerAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Hocker, SprechblasenTime2)
    }
    if(take==1){
        sprechblasenStop();
        showSprechblase2_HockerbenutzenVar = setTimeout(showSprechblase2_Hockerbenutzen, SprechblasenTime1)
        //spielHockerbenutzenAudioVar = setTimeout(spielHockerAudio, SprechblasenTime1)
        setTimeout(hideSprechblase2_Hockerbenutzen, SprechblasenTime2)
        console.log("Den Hocker kann ich bestimmt irgendwo anders hinstellen")
        HockerNummer++;
        take = take - take;
        document.getElementById("bildButtons").src="Buttonslot.png"
    }
    if(useItem1!=0 || use!=0){
        sprechblasenStop();
        showSprechblaseNope_TischVar = setTimeout(showSprechblaseNope_Tisch, SprechblasenTime1)
        //spielSprechblaseNope_TischAudioVar setTimeout(spielSprechblaseNope_TischAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Tisch, SprechblasenTime2)
    }
    

    
    
}

var showSprechblase1_SteckdoseVar;
var spielSteckdoseAudioVar;

function Steckdose(){

    if(position!="aufSchreibtisch"){
    MoveTo("Schreibtisch");
    }else{
    MoveToRunter();
    setTimeout(function(){
        MoveTo("Schreibtisch");
    },2000)
    }

    if(position=="Schreibtisch"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }

    sprechblasenStop();
    console.log("Steckdosen.. wie coooool")
    if(useItem1==1){
        console.log("Wo soll ich hier einen Schlüssel reinstecken??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    //if(useItem1==0 && use==0 && take==0){
    //showSprechblase1_SteckdoseVar = setTimeout(showSprechblase1_Steckdose, 3500)
    //spielSteckdoseAudioVar = setTimeout(spielSteckdoseAudio, SprechblasenTime1)
    //setTimeout(hideSprechblase1_Steckdose, 8500)
    //}
}

var showSprechblase1_PflanzeVar;
var spielPflanzeAudioVar;

function Pflanze(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Schublade");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Schublade");
        },2000)
        }

        if(position=="Schublade"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }

    console.log("wie gut das Mama immer die Blumen giesst")
    if(useItem1==1){
        console.log("Wo soll ich hier einen Schlüssel reinstecken??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        sprechblasenStop();
        showSprechblase1_PflanzeVar = setTimeout(showSprechblase1_Pflanze, SprechblasenTime1)
        //spielPflanzeAudioVar = setTimeout(spielPflanzeAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Pflanze, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_PflanzeVar = setTimeout(showSprechblaseNope_Pflanze, SprechblasenTime1)
        //spielSprechblaseNope_PflanzeAudioVar setTimeout(spielSprechblaseNope_PflanzeAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Pflanze, SprechblasenTime2)
    }
}

var showSprechblase1_BildVar;
var spielBildAudioVar;

function Wandbild(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Muelleimer");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Muelleimer");
        },2000)
        }

        if(position=="Muelleimer"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }
    console.log("dieses Tolle Bild hat einer meiner Papis gemalt")
    if(useItem1==1){
        console.log("Wo soll ich hier einen Schlüssel reinstecken??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        sprechblasenStop();
        showSprechblase1_BildVar = setTimeout(showSprechblase1_Bild, SprechblasenTime1)
        //spielBildAudioVar = setTimeout(spielBildAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Bild, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_BildVar = setTimeout(showSprechblaseNope_Bild, SprechblasenTime1)
        //spielSprechblaseNope_BildAudioVar setTimeout(spielSprechblaseNope_BildAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Bild, SprechblasenTime2)
    }
}

var showSprechblase1_UrkundeVar
var spielUrkundeAudioVar;

function Urkunde(){
    
    
    if(position!="aufSchreibtisch"){
        MoveTo("Tuer");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Tuer");
        },2000)
        }
    
        if(position=="Tuer"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }

    console.log("Platz 100 von 100.. Ich bin so gut!")
    if(useItem1==1){
        console.log("Wo soll ich hier einen Schlüssel reinstecken??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        sprechblasenStop();
        showSprechblase1_UrkundeVar = setTimeout(showSprechblase1_Urkunde, SprechblasenTime1)
        //spielUrkundeAudioVar = setTimeout(spielUrkundeAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Urkunde, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_TuerVar = setTimeout(showSprechblaseNope_Tuer, SprechblasenTime1)
        //spielSprechblaseNope_TuerAudioVar setTimeout(spielSprechblaseNope_TuerAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Tuer, SprechblasenTime2)
    }
}

var showSprechblaseFussballVar;
var spielFussballAudioVar;

function Fussball(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Tuer");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Tuer");
        },2000)
        }
    
        if(position=="Tuer"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }

    sprechblasenStop();
    console.log("ich bin einfach der beste! Erster Platz beim Fussball")
    if(useItem1==1){
        console.log("Wo soll ich hier einen Schlüssel reinstecken??")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
    showSprechblaseFussballVar = setTimeout(showSprechblaseFussball, SprechblasenTime1)
    //spielFussballAudioVar = setTimeout(spielFussballAudio,SprechblasenTime1)
    hideSprechblaseFussballVar = setTimeout(hideSprechblaseFussball, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_TuerVar = setTimeout(showSprechblaseNope_Tuer, SprechblasenTime1)
        //spielSprechblaseNope_TuerAudioVar setTimeout(spielSprechblaseNope_TuerAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Tuer, SprechblasenTime2)
    }
}

var showSprechblase1_TruheVar;
var spielTruheAudioVar;

function Truhe(){
    
    if(position!="aufSchreibtisch"){
        MoveTo("Tuer");
        }else{
        MoveToRunter();
        setTimeout(function(){
            MoveTo("Tuer");
        },2000)
        }
    
        if(position=="Tuer"){
            SprechblasenTime1=nodelay1;
            SprechblasenTime2=nodelay2;
        }else{
            SprechblasenTime1=delay1;
            SprechblasenTime2=delay2;
        }

    console.log(take)
    console.log("hm die Truhe scheint verschlossen zu sein..")
    if(useItem1==1){
        console.log("hier scheint der Schlüssel nicht zu passen")
        useItem1 = useItem1 - useItem1;
    }
    if(use==1){
        console.log("hm das kann ich nicht benutzen")
    }
    if(take==1){
        console.log("hm, dass kann ich nicht nehmen")
    }
    if(useItem1==0 && use==0 && take==0){
        sprechblasenStop();
        showSprechblase1_TruheVar = setTimeout(showSprechblase1_Truhe, SprechblasenTime1)
        //spielTruheAudioVar = setTimeout(spielTruheAudio, SprechblasenTime1)
        setTimeout(hideSprechblase1_Truhe, SprechblasenTime2)
    }
    else{
        sprechblasenStop();
        showSprechblaseNope_TuerVar = setTimeout(showSprechblaseNope_Tuer, SprechblasenTime1)
        //spielSprechblaseNope_TuerAudioVar setTimeout(spielSprechblaseNope_TuerAudio, SprechblasenTime1)
        setTimeout(hideSprechblaseNope_Tuer, SprechblasenTime2)
    }
}


//wuhu raum 1 geschafft *-*
// Beginn der functionen im Flur
//MARKER!

var showSprechblase_KlavierVar;
var spielKlavierAudioVar;
//Die kleine SPielerrei mit dem Klavier. Beim Aufruf der Animation wird auch die Musik gestartet.
function Klavier(){

    MoveToKlavier();

    console.log("das hier ist ein Klavier")

    if(position=="TuerBernd"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }
    
    sprechblasenStop();
    showSprechblase_KlavierVar = setTimeout(showSprechblase_Klavier, SprechblasenTime1)
    //spielKlavierAudioVar = setTimeout(spielKlavierAudio, SprechblasenTime1)
    setTimeout(hideSprechblase_Klavier, SprechblasenTime2)
}

var showSprechblase_BlumeFlurVar;
var spielBlumeFlurAudioVar;

function BlumeFlur(){

    MoveToInFlur("TuerWohnzimmer")

    console.log("das hier ist eine Blume im Flur")
    
    if(position=="TuerWohnzimmer"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }
    
    sprechblasenStop();
    showSprechblase_BlumeFlurVar = setTimeout(showSprechblase_BlumeFlur, SprechblasenTime1)
    //spielBlumeFlurAudioVar = setTimeout(spielBlumeFlurAudio, SprechblasenTime1)
    setTimeout(hideSprechblase_BlumeFlur, SprechblasenTime2)

}

var showSprechblase_KleiderhakenFlurVar;
var spielKleiderhakenFlurAudioVar;

function KleiderhakenFlur(){

    MoveToInFlur("TuerKueche");

    console.log("das hier ist ein Kleiderhaken im Flur")

    if(position=="TuerKueche"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }
    
    sprechblasenStop();
    showSprechblase_KleiderhakenFlurVar = setTimeout(showSprechblase_KleiderhakenFlur, SprechblasenTime1)
    //spielKleiderhakenFlurAudioVar = setTimeout(spielKleiderhakenFlurAudio, SprechblasenTime1)
    setTimeout(hideSprechblase_KleiderhakenFlur, SprechblasenTime2)
}

var showSprechblase_VitrineVar;
var spielVitrineAudioVar;

function Vitrine(){
    MoveToInFlur("TuerWC");
    console.log("das hier ist eine Vitrine im Flur")

    if(position=="TuerWC"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }
    
    sprechblasenStop();
    showSprechblase_VitrineVar = setTimeout(showSprechblase_Vitrine, SprechblasenTime1)
    //spielVitrineAudioVar = setTimeout(spielVitrineAudio, SprechblasenTime1)
    setTimeout(hideSprechblase_Vitrine, SprechblasenTime2)
}
//die Funktion für die Tür von Bernds Zimmer. Mit dem Bildwechsel. Es wird nur geprüft ob das Radio an oder aus ist, da der Raum ja seinen Endzustand erreicht hat.
function TuerBernd(){
    MoveToInFlur("TuerBernd");
    if(position=="TuerBernd"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    console.log("das hier ist die Zimmertuer von Bernd")
    //document.getElementById("bild1").src="Badezimmer_1.png";
    setTimeout(function(){
    if(x==0){
        transitionnFlurZuKinderzimmer();
        document.getElementById("bild1").src="Zimmer1_Ende_R0.png";  
    } else {
        transitionnFlurZuKinderzimmer();
        document.getElementById("bild1").src="Zimmer1_Ende_R1.png";
    }
    
    resetRaum4();
    },InteractionDelay);
}

//die Funktion um ins badezimmer zu kommen. Es wird die Resetfunktion aufgerufen und das Bild gewechselt.
function TuerWC(){ 
    MoveToInFlur("TuerWC");
    if(position=="TuerWC"||position=="TuerImBad"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
        InteractionDelay=nodelay1;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
        InteractionDelay=delay3;
    }
    MoveToInFlur("TuerWC");
    setTimeout(function(){
    console.log("das hier ist die WC Tuer");
    document.getElementById("bild1").src="Badezimmer_1.png";
    resetRaum2();
    transitionFlurZuBadezimmer();
    position="TuerImBad";
    },InteractionDelay);
}

var showSprechblase_TuerStubeVar;
var spielTuerStubeAudioVar;

function TuerStube(){
    MoveToInFlur("TuerWohnzimmer");
    console.log("das hier ist die Stubentuer")

    if(position=="TuerWohnzimmer"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
    }
    
    sprechblasenStop();
    showSprechblase_TuerStubeVar = setTimeout(showSprechblase_TuerStube, SprechblasenTime1)
    //spielTuerStubeAudioVar = setTimeout(spielTuerStubeAudio, SprechblasenTime1)
    setTimeout(hideSprechblase_TuerStube, SprechblasenTime2)
}

var showSprechblase_TuerKuecheVar;
var spielTuerKuecheAudioVar;
//Diese Funktion ist da um in die Küche zu kommen. Es wird gepüft ob die Kreditkarte richtig eingesetzt wurde. In Resetraum5 wird dann noch der Zustand der Küche abgefragt falls der Ruam wieder verlassen wird.
function TuerKueche(){
    MoveToInFlur("TuerKueche");
    console.log("das hier ist die Kuechentuer")

    if(position=="TuerKueche"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
        InteractionDelay=nodelay1;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
        InteractionDelay=delay3;
    }
    
    sprechblasenStop();
    showSprechblase_TuerKuecheVar = setTimeout(showSprechblase_TuerKueche, SprechblasenTime1)
    //spielTuerKuecheAudioVar = setTimeout(spielTuerKuecheAudio, SprechblasenTime1)
    setTimeout(hideSprechblase_TuerKueche, SprechblasenTime2)
    console.log(openKueche + "openKü")
   setTimeout(function(){
    if(openKueche>0){
        //document.getElementById("bild1").src="Kueche_1.png";
        document.getElementById("Sprechblase_TuerKueche").style.display="none";
        transitionFlurZuKueche()
        resetRaum5();
        use=use-use;
        console.log(openKueche + "openKü")
    }



    if(useCard == 1 && openKueche==0){
        //document.getElementById("bild1").src="Kueche_1.png";
        document.getElementById("Sprechblase_TuerKueche").style.display="none";
        transitionFlurZuKueche()
        resetRaum5();
        use=use-use;
        useCard=useCard-useCard;
    }
    },InteractionDelay);
}

var showSprechblase_HausTuerVar;
var spielHausTuerAudioVar;

//die FUnktion der Haustür fragt ob der Hausschlüssel richtig benutzt wurde.
function HausTuer(){

    MoveToInFlur("TuerHaus");

    console.log("das hier ist die Haustuer")

    if(position=="TuerHaus"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    
    setTimeout(function(){
        SprechblaseFunction("Sprechblase_HausTuer");
    if(usehSchluessel==1){
        document.getElementById("Sprechblase_HausTuer").style.display="none";
        document.getElementById("kidposition").style.transitionDuration="0s";
        document.getElementById("kidposition").style.left="549px";
        document.getElementById("kidposition").style.top ="467px";
        document.getElementById("bild1").src="Ende.png";
        document.getElementById("Sprechblase_Ende").style.display="block";
        resetall();
    }
    },InteractionDelay);
}
//ende der Functionen im Flur

//das Gleiche Prinzip wurde genauso für alle Raume umgesetzt. ES werden verschiedene zustände in Variablen gespeichert und nach diesen wird denn gefragt.
//beginn der funtionen WC

function PflanzeWC(){
    clearAction();
    MoveToImBad("Dusche");
    
    if(position=="Dusche"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_WCPflanze");
    },InteractionDelay);
    
    console.log("das hier ist die Pflanze im Badezimmer")
}

function Dusche(){
    clearAction();
    MoveToImBad("Dusche");

    if(position=="Dusche"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout= setTimeout(function(){
    SprechblaseFunction("Sprechblase_Dusche");
    },InteractionDelay);
    console.log("das hier ist die Dusche im Badezimmer")
}

function Toilette(){
    clearAction();
    MoveToImBad("Toilette");
    if(position=="Toilette"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Toilette");
    },InteractionDelay);
    console.log("das hier ist die Toilette im Badezimmer")
}

function Klopapier(){
    clearAction();
    MoveToImBad("Toilette");
    if(position=="Toilette"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
        InteractionDelay=nodelay1;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Klopapier");
    console.log("das hier ist die Klopapier im Badezimmer")
    console.log(take)
    if(take>0){
        
        document.getElementById("bild1").src="Badezimmer_2.png";
        console.log("lol")
        klo++;
        document.getElementById('knopfStock').style.height="29px";
        document.getElementById('knopfStock').style.width="37px"; 
        take=take-take;
        document.getElementById("bildButtons").src="Buttonslot.png";
    }
    },InteractionDelay);
}

function StockNehmen(){
    if(klo==1 && take>0){
        
        take=take-take;
        klo=klo-klo;
        Stock++;
        document.getElementById('knopfStock').style.height="0px";
        document.getElementById('knopfStock').style.width="0px"; 
        document.getElementById("bildButtons").src="Buttonslot.png";
        document.getElementById("bild1").src="Badezimmer_3.png";
        document.getElementById("bildItem1").src="StockItem.png"
    }
    console.log("usestock:" + useStock);
    console.log("L_SCHRANK:" + L_Schrank);
    console.log("LR_SCHRANK:" + LR_Schrank);
    console.log("take"+take);
    console.log("klo:"+klo);
    console.log("stock: "+ Stock);
}

function BernddasBrot3(){
    clearAction();
    MoveToImBad("Toilette");
    if(position=="Toilette"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_WCBrot");
    },InteractionDelay);
    console.log("das hier ist die BernddasBrot3 im Badezimmer")
}

function Handspiegel(){
    clearAction();
    MoveToImBad("Toilette");
    if(position=="Toilette"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Handspiegel");
    },InteractionDelay);
    console.log("das hier ist die HandSpiegel im Badezimmer")
}

function SchrankWC1(){
    clearAction();
    MoveToImBad("SchrankWC");
    if(position=="SchrankWC"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
        InteractionDelay=nodelay1;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
        InteractionDelay=delay3;
    }
    console.log("das hier ist die SchrankWC1 im Badezimmer")
    console.log("das hier ist die SchrankWC2 im Badezimmer")
    console.log("usestock:" + useStock);
    console.log("L_SCHRANK:" + L_Schrank);
    console.log("LR_SCHRANK:" + LR_Schrank);
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_WCSchrank1");
    if(useStock>0 && R_Schrank==0 && LR_Schrank==0){
        document.getElementById("Sprechblase_WCSchrank1").style.left="105px"
        document.getElementById("Sprechblase_WCSchrank1").src="Sprechblasen(Badezimmer)/Waschbeckenschrank(links)-offen.png";
        SprechblaseFunction("Sprechblase_WCSchrank1");    
        document.getElementById("bild1").src="Badezimmer_4.png";
        document.getElementById("bildButtons").src="Buttonslot.png";
        useStock=useStock-useStock;
        use=use-use;
        L_Schrank++;
    }

    if(useStock>0 && R_Schrank==1 && LR_Schrank==0){
        document.getElementById("Sprechblase_WCSchrank1").src="Sprechblasen(Badezimmer)/Waschbeckenschrank(links)-offen.png";
        SprechblaseFunction("Sprechblase_WCSchrank1");
        useStock=useStock-useStock;
        use=use-use;
        L_Schrank=L_Schrank-L_Schrank;
        LR_Schrank++;
        document.getElementById("bild1").src="Badezimmer_5.png";
        document.getElementById("bildButtons").src="Buttonslot.png";
    }
    },InteractionDelay);
}

function SchrankWC2(){
    clearAction();
    MoveToImBad("SchrankWC");
    if(position=="SchrankWC"){
        SprechblasenTime1=nodelay1;
        SprechblasenTime2=nodelay2;
        InteractionDelay=nodelay1;
    }else{
        SprechblasenTime1=delay1;
        SprechblasenTime2=delay2;
        InteractionDelay=delay3;
    }
    console.log("das hier ist die SchrankWC2 im Badezimmer")
    console.log("usestock:" + useStock);
    console.log("L_SCHRANK:" + L_Schrank);
    console.log("LR_SCHRANK:" + LR_Schrank);

    ActionTimeout=setTimeout(function(){
        SprechblaseFunction("Sprechblase_WCSchrank2");
    if(useStock>0 && L_Schrank==0 && LR_Schrank==0){
        document.getElementById("Sprechblase_WCSchrank2").src="Sprechblasen(Badezimmer)/Waschbeckenschrank(rechts)-offen.png";
        document.getElementById("Sprechblase_WCSchrank2").style.left="-5px";
        SprechblaseFunction("Sprechblase_WCSchrank2");
        document.getElementById("bild1").src="Badezimmer_6.png";
        document.getElementById("bildButtons").src="Buttonslot.png";
        useStock=useStock-useStock;
        use=use-use;
        R_Schrank++;
        document.getElementById("bildItem2").src="Bankkarte.png";
        Card++;
    }
    if(useStock>0 && L_Schrank==1 && LR_Schrank==0){
        document.getElementById("Sprechblase_WCSchrank2").src="Sprechblasen(Badezimmer)/Waschbeckenschrank(rechts)-offen.png";
        document.getElementById("Sprechblase_WCSchrank2").style.left="-5px";
        SprechblaseFunction("Sprechblase_WCSchrank2");
        useStock=useStock-useStock;
        use=use-use;
        LR_Schrank++;
        R_Schrank=R_Schrank-R_Schrank;
        document.getElementById("bild1").src="Badezimmer_5.png";
        document.getElementById("bildItem2").src="Bankkarte.png";
        document.getElementById("bildButtons").src="Buttonslot.png";
        console.log("lol?")
        Card++;
    }
    },InteractionDelay);
}

function SpiegelWC1(){
    clearAction();
    MoveToImBad("SchrankWC");

    if(position=="SchrankWC"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_WCSpiegel1");
    },InteractionDelay);
    console.log("das hier ist die SpiegelWC1 im Badezimmer")
}

function SpiegelWC2(){
    clearAction();
    MoveToImBad("SchrankWC");
    if(position=="SchrankWC"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_WCSpiegel2");
    },InteractionDelay);
    console.log("das hier ist die SpiegelWC2 im Badezimmer")
}

function Waeschekorb(){
    clearAction();
    MoveToImBad("TuerImBad");
    if(position=="TuerImBad"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Waeschekorb");
    document.getElementById("bildItem5").src="Muenze.png";  
    },InteractionDelay);
    console.log("das hier ist die Waeschekorb im Badezimmer")    
    
}

function FlurTuer(){
    clearAction();
    MoveToImBad("TuerImBad");
    if(position=="TuerImBad"){

        InteractionDelay=nodelay1;
    }else{

        InteractionDelay=delay3;
    }
    setTimeout(function(){
    console.log("das hier ist die Flurtuer im Badezimmer")
    document.getElementById("bild1").src="Flur(test).png";
    resetRaum3();
    position="TuerWC";
    },InteractionDelay);
}

function Handtuch(){
    clearAction();
    MoveToImBad("TuerImBad");
    if(position=="TuerImBad"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Handtuch");
    },InteractionDelay);
    console.log("das hier ist die Handtuch im Badezimmer")
}


//ende der funktionen im WC
//beginn der funktionen in der Küche

function sKasten(){
    clearAction();
    MoveToInKueche("TuerInKueche");
    if(position=="TuerInKueche"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_sKasten");
    console.log("sKasten")
    if(usePfanne>0){
        document.getElementById("Sprechblase_sKasten").style.display="none";
        document.getElementById("bild1").src="Kueche_4.png";
        document.getElementById("bildButtons").src="Buttonslot.png";
        usePfanne=usePfanne-usePfanne;
        use=use-use;
        Kasten++;
        console.log(Kasten + " kasten")
    }

    if(take>0 && Kasten==1){
        document.getElementById("Sprechblase_sKasten").style.display="none";
        document.getElementById("bildItem4").src="Schluessel1.png";
        document.getElementById("bild1").src="Kueche_5.png";
        document.getElementById("bildButtons").src="Buttonslot.png";
        take=take-take;
        //Kasten=Kasten-Kasten;
        kSchluessel++;
        console.log(kSchluessel + " kschluessel")
    }

    },InteractionDelay);
    
}
function kFlurTuer(){
    clearAction();
    MoveToInKueche("TuerInKueche");
    if(position=="TuerInKueche"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    transitionKuecheZuFlur();
    position="TuerKueche"
    console.log("kFlurTuer")
    resetRaum6();
    document.getElementById('bild1').src="Flur_K1.png";
    },InteractionDelay)
}

function Kuehlschrank(){
    clearAction();
    MoveToInKueche("Kuehlschrank");
    if(position=="Kuehlschrank"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Kuehlschrank");
    },InteractionDelay);
    console.log("Kuehlschrank")
}

function Wasch(){
    clearAction();
    MoveToInKueche("Kuehlschrank");
    if(position=="Kuehlschrank"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Waschmachine");
    },InteractionDelay);
    
    console.log("Wasch")
}
function Spuehl(){
    clearAction();
    MoveToInKueche("Spuelmaschine");
    if(position=="Spuelmaschine"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Spuelmaschine");
    if(takeStuhl>0 && Pfannehaben==0){
        document.getElementById("bild1").src="Kueche_2.png";
        document.getElementById("bildButtons").src="Buttonslot.png";
        document.getElementById('knopfkStuhl').style.height="0px";
        document.getElementById('knopfkStuhl').style.width="0px";
        Rampe++;
    }
    },InteractionDelay);
    console.log("Spuehl")
    
}
function kSchrank(){
    clearAction();
    MoveToInKueche("Spuelmaschine");
    if(position=="Spuelmaschine"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_KuechenSchrank");
    },InteractionDelay);
    console.log("kSchrank")
}

function Pfanne(){
    clearAction();
    MoveToInKueche("Spuelmaschine");
    if(position=="Spuelmaschine"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    console.log("Pfanne")
    setTimeout(function(){
    SprechblaseFunction("Sprechblase_Pfanne");
    if(take==1 && Rampe ==1){
    document.getElementById("Sprechblase_Pfanne").style.display="none"; 
    PfanneNehmenAnimation1();
    setTimeout(function(){
        document.getElementById("bild1").src="Kueche_3.png";
        take=take-take;
        document.getElementById("bildItem3").src="Pfanne.png";
        document.getElementById("bildButtons").src="Buttonslot.png";
        Pfannehaben++;
        console.log(Pfannehaben+"pfannehaben");
    },2500);
    PfanneNehmenAnimation2();
    }
    },InteractionDelay);
}

function Kaffee(){
    clearAction();
    MoveToInKueche("Spuelmaschine");
    if(position=="Spuelmaschine"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Kaffee");
    },InteractionDelay);
    console.log("kaffee")
}
function Board(){
    clearAction();
    MoveToInKueche("TischInKueche");
    if(position=="TischInKueche"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_Board");
    },InteractionDelay);
    console.log("Board")
}
function kTisch(){
    clearAction();
    MoveToInKueche("TischInKueche");
    if(position=="TischInKueche"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_kTisch");
    },InteractionDelay);
    console.log("kTisch")

}
function kStuhl(){
    clearAction();
    MoveToInKueche("TischInKueche");
    if(position=="TischInKueche"){
        InteractionDelay=nodelay1;
    }else{
        InteractionDelay=delay3;
    }
    ActionTimeout=setTimeout(function(){
    SprechblaseFunction("Sprechblase_kStuhl");
    },InteractionDelay);
    console.log("kStuhl")
    if(take==1){
        takeStuhl++;
        take=take-take;
    }
}
//ende der functionen in der Küche


//das INventar funktioniert auch fast genauso wie die Raumwechsel. Es wird geprüft ob der Benutzen Modus aktiv ist und dannach wird gehandelt.
//beginn functionen fuer das Inventar/Buttons ETC
function inventar(){
    console.log("es funzt!");

}

function Benutzen(){
    //button so lange aktiv bis wieder abgewählt wird?
    console.log("jetzt können wir etwas benutzen")
    if(use==0){
        use++;
        document.getElementById("bildButtons").src="ButtonSlot_Use.png"
    }
    else{
        use = use - use;
        document.getElementById("bildButtons").src="Buttonslot.png"
    }
}

function Take(){
    //button so lange aktiv bis wieder abgewählt wird?
    console.log("jetzt können wir etwas nehmen")
    if(take==0){
        take++;
        document.getElementById("bildButtons").src="ButtonSlot_Take.png"
    }
    else{
        take = take - take;
        document.getElementById("bildButtons").src="Buttonslot.png"
    }

    if(HockKomSchreib==1 || gardine==1){
        ziehen++;
        document.getElementById("bildButtons").src="ButtonSlot_Take.png"
    }

    if(gardineab==1){
        take2++;
        document.getElementById("bildButtons").src="ButtonSlot_Take.png"
    }

}


function inventar1(){
    console.log("inventar1");
    if(use==1 && schluessel1>=1 && Stock==0){
        console.log("jetzt könnte der Schlüssel benutzt werden")
        use = use - use;
        document.getElementById("bildButtons").src="Buttonslot.png"
        useItem1++;
    }
    if(use==0 && schluessel1==1 && Stock==0){
        console.log("Vielleicht kann ich hiermit ja was öffnen")
    }
    /*else{
        console.log("hier könnte ein Item rein")
        use = use - use;
        document.getElementById("bildButtons").src="Buttonslot.png"
    }*/
    if(use==1 && Stock==1){
        console.log("jetzt kann man was aufbrechen");
        useStock++;
        use=use-use;
    }
}

function inventar2(){
    console.log("inventar2");
    console.log(tischSchluessel)
    if(use==1 && tischSchluessel==1){
        console.log("jetzt koennen wir diesen Schluessel benutzen")
        use = use - use;
        document.getElementById("bildButtons").src="Buttonslot.png"
        useItem2++;
    }
    if(use==0 && tischSchluessel==1){
        console.log("Vielleicht kann ich hiermit ja was öffnen")
    }
    /*else{
        console.log("hier könnte ein Item rein")
        use = use - use;
        document.getElementById("bildButtons").src="Buttonslot.png"
    } */
    if(use==1 && Card==1){
        console.log("mit dieser karte kann ich eine Tür aufbrechen");
        useCard++;
        use=use-use;
        document.getElementById("bildButtons").src="Buttonslot.png"
    }
}

function inventar3(){
    console.log("inventar3");
    console.log(use+" use")
    console.log("pfanne: "+Pfannehaben)
    if(use>0 && Pfannehaben>0){
        usePfanne++;
        use=use-use;
        //Pfannehaben=Pfannehaben-Pfannehaben;
        document.getElementById("bildButtons").src="Buttonslot.png"
    }
}

function inventar4(){
    console.log("inventar4");
    console.log(use+" use")

    if(use>0 && kSchluessel>0){
        usehSchluessel++;
        use=use-use;
        //Pfannehaben=Pfannehaben-Pfannehaben;
        document.getElementById("bildButtons").src="Buttonslot.png"
    }
}



//ende der Functionen für das Inventar ETC

//die Plopfunktionen sind dafür da, die Hover Effekte auf den Gegenständen im Spiel zu erzeugen und das rechts oben der Text angezeigt wird.
function Leiser(){
    lautstaerke = lautstaerke - 0.05;
    audio.volume = lautstaerke;
    console.log(lautstaerke)
}

function Lauter(){
    lautstaerke = lautstaerke + 0.05;
    audio.volume = lautstaerke;
    console.log(lautstaerke)
}

//mouseover funktionen
function plopradio1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Radio";
    document.getElementById('bildIconRadio').style.display="block"
}

function plopradio0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconRadio').style.display="none"
}

function plopsekiro1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Sekiro";
    document.getElementById('bildIconSekiro').style.display="block"
}

function plopsekiro0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconSekiro').style.display="none"
}

function plopSchublade1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Schublade";
    document.getElementById('bildIconSchublade').style.display="block"
}

function plopSchublade0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconSchublade').style.display="none"
}

function plopUrkunde1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Urkunde";
    document.getElementById('bildIconUrkunde').style.display="block"
}

function plopUrkunde0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconUrkunde').style.display="none"
}

function plopFussball1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fussball";
    document.getElementById('bildIconFussball').style.display="block"
}

function plopFussball0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconFussball').style.display="none"
}

function plopTruhe1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Truhe";
    document.getElementById('bildIconTruhe').style.display="block"
}

function plopTruhe0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconTruhe').style.display="none"
}

function plopSchluessel21(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Schluessel";
    document.getElementById('bildIconSchluessel').style.display="block"
}

function plopSchluessel20(){
    //console.log("loeppt das?")
    document.getElementById('bildIconSchluessel').style.display="none"
}

function plopSchreibtisch1(){
    //console.log("loeppt das?")
    document.getElementById('bildIconSchreibtisch').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Schreibtisch";
}

function plopSchreibtisch0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconSchreibtisch').style.display="none"
}

function plopWandbild1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Bild";
    document.getElementById('bildIconBild').style.display="block"
}

function plopWandbild0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconBild').style.display="none"
}

function plopPflanze1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Planze";
    document.getElementById('bildIconPflanze').style.display="block"
}

function plopPflanze0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconPflanze').style.display="none"
}

function plopHocker1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Hocker";
    document.getElementById('bildIconHocker').style.display="block"
}

function plopHocker0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconHocker').style.display="none"
}

function plopSteckdose1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Steckdosen";
    //document.getElementById('bildIconSteckdose').style.display="block"
}

function plopSteckdose0(){
    //console.log("loeppt das?")
    //document.getElementById('bildIconSteckdose').style.display="none"
}

function plopBdasBrot11(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Papa";
    document.getElementById('bildIconPapa').style.display="block"
}

function plopBdasBrot10(){
    //console.log("loeppt das?")
    document.getElementById('bildIconPapa').style.display="none"
}

function plopKleiderhaken1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Kleiderhaken";
    document.getElementById('bildIconKleiderhaken').style.display="block"
}

function plopKleiderhaken0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconKleiderhaken').style.display="none"
}

function plopMuelleimer1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Muelleimer";
    document.getElementById('bildIconPapierkorb').style.display="block"
}

function plopMuelleimer0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconPapierkorb').style.display="none"
}

function plopBett1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Bett";
    document.getElementById('bildIconBett').style.display="block"
}

function plopBett0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconBett').style.display="none"
}

function plopTuer1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Tuer";
    document.getElementById('bildIconTuer').style.display="block"
}

function plopTuer0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconTuer').style.display="none"
}

function plopShirt11(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Shirt";
    document.getElementById('bildIconPullover').style.display="block"
}

function plopShirt10(){
    //console.log("loeppt das?")
    document.getElementById('bildIconPullover').style.display="none"
}

function plopShirt21(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Shirt";
    document.getElementById('bildIconShirt').style.display="block"
}

function plopShirt20(){
    //console.log("loeppt das?")
    document.getElementById('bildIconShirt').style.display="none"
}

function plopShirt31(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Shirt";
    document.getElementById('bildIconShirt').style.display="block"
}

function plopShirt30(){
    //console.log("loeppt das?")
    document.getElementById('bildIconShirt').style.display="none"
}

function plopBdasBrot21(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Papa";
    document.getElementById('bildIconPapa').style.display="block"
}

function plopBdasBrot20(){
    //console.log("loeppt das?")
    document.getElementById('bildIconPapa').style.display="none"
}

function plopUhr1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Uhr";
    document.getElementById('bildIconUhr').style.display="block"
}

function plopUhr0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconUhr').style.display="none"
}

function plopFenster1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconGardine').style.display="block"
}

function plopFenster0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconGardine').style.display="none"
}

//plopfunktionen für den Flur

function plopKlavier1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconKlavier').style.display="block"
}

function plopKlavier0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconKlavier').style.display="none"
}

function plopBlumeFlur1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconBlumeFlur').style.display="block"
}

function plopBlumeFlur0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconBlumeFlur').style.display="none"
}

function plopKleiderhakenFlur1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconKleiderhakenFlur').style.display="block"
}

function plopKleiderhakenFlur0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconKleiderhakenFlur').style.display="none"
}

function plopVitrine1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconVitrine').style.display="block"
}

function plopVitrine0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconVitrine').style.display="none"
}

function plopTuerBernd1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconTuerBernd').style.display="block"
}

function plopTuerBernd0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconTuerBernd').style.display="none"
}

function plopTuerWC1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconTuerWC').style.display="block"
}

function plopTuerWC0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconTuerWC').style.display="none"
}

function plopTuerStube1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconTuerStube').style.display="block"
}

function plopTuerStube0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconTuerStube').style.display="none"
}

function plopTuerKueche1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconTuerKueche').style.display="block"
}

function plopTuerKueche0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconTuerKueche').style.display="none"
}

function plopHausTuer1(){
    //console.log("loeppt das?")
    //document.getElementById('beschreibung').style.display="block"
    //document.getElementById("beschreibung").innerHTML = "Fenster";
    document.getElementById('bildIconHausTuer').style.display="block"
}

function plopHausTuer0(){
    //console.log("loeppt das?")
    document.getElementById('bildIconHausTuer').style.display="none"
}

//beginn der functionen WC

function plopPflanzeWC1(){
    document.getElementById('bildIconPflanzeWC').style.display="block"
    console.log("es muesste aufploppen")
}

function plopPflanzeWC0(){
    document.getElementById('bildIconPflanzeWC').style.display="none"
    console.log("es muesste wieder verschwinden")
}

function plopDusche1(){
    document.getElementById('bildIconDusche').style.display="block"
}

function plopDusche0(){
    document.getElementById('bildIconDusche').style.display="none"
}

function plopToilette1(){
    document.getElementById('bildIconToilette').style.display="block"
}

function plopToilette0(){
        document.getElementById('bildIconToilette').style.display="none"
}

function plopKlopapier1(){
    document.getElementById('bildIconKlopapier').style.display="block"
}

function plopKlopapier0(){
        document.getElementById('bildIconKlopapier').style.display="none"
}

function plopBernddasBrot31(){
    document.getElementById('bildIconBernddasBrot3').style.display="block"
}

function plopBernddasBrot30(){
        document.getElementById('bildIconBernddasBrot3').style.display="none"
}

function plopHandspiegel1(){
    document.getElementById('bildIconHandspiegel').style.display="block"
}

function plopHandspiegel0(){
        document.getElementById('bildIconHandspiegel').style.display="none"
}

function plopSchrankWC11(){
    document.getElementById('bildIconSchrankWC1').style.display="block"
}

function plopSchrankWC10(){
        document.getElementById('bildIconSchrankWC1').style.display="none"
}

function plopSpiegelWC11(){
    document.getElementById('bildIconSpiegelWC1').style.display="block"
}

function plopSpiegelWC10(){
        document.getElementById('bildIconSpiegelWC1').style.display="none"
}

function plopWaeschekorb1(){
    document.getElementById('bildIconWaeschekorb').style.display="block"
}

function plopWaeschekorb0(){
        document.getElementById('bildIconWaeschekorb').style.display="none"
}

function plopFlurTuer1(){
    document.getElementById('bildIconFlurTuer').style.display="block"
}

function plopFlurTuer0(){
        document.getElementById('bildIconFlurTuer').style.display="none"
}

function plopHandtuch1(){
    document.getElementById('bildIconHandtuch').style.display="block"
}

function plopHandtuch0(){
        document.getElementById('bildIconHandtuch').style.display="none"
}

//Plopfunctionen  Küche

function plopsKasten1(){
    document.getElementById('bildIconsKasten').style.display="block"
}

function plopsKasten0(){
    document.getElementById('bildIconsKasten').style.display="none"
}

function plopkFlurTuer1(){
    document.getElementById('bildIconkFlurTuer').style.display="block"
}

function plopkFlurTuer0(){
    document.getElementById('bildIconkFlurTuer').style.display="none"
}

function plopKuehlschrank1(){
    document.getElementById('bildIconKuehlschrank').style.display="block"
}

function plopKuehlschrank0(){
    document.getElementById('bildIconKuehlschrank').style.display="none"
}

function plopWasch1(){
    document.getElementById('bildIconWasch').style.display="block"
}

function plopWasch0(){
    document.getElementById('bildIconWasch').style.display="none"
}

function plopSpuehl1(){
    document.getElementById('bildIconSpuehl').style.display="block"
}

function plopSpuehl0(){
    document.getElementById('bildIconSpuehl').style.display="none"
}

function plopkSchrank1(){
    document.getElementById('bildIconkSchrank').style.display="block"
}

function plopkSchrank0(){
    document.getElementById('bildIconkSchrank').style.display="none"
}

function plopPfanne1(){
    document.getElementById('bildIconPfanne').style.display="block"
}

function plopPfanne0(){
    document.getElementById('bildIconPfanne').style.display="none"
}

function plopKaffee1(){
    document.getElementById('bildIconKaffee').style.display="block"
}

function plopKaffee0(){
    document.getElementById('bildIconKaffee').style.display="none"
}

function plopBoard1(){
    document.getElementById('bildIconBoard').style.display="block"
}

function plopBoard0(){
    document.getElementById('bildIconBoard').style.display="none"
}

function plopkTisch1(){
    document.getElementById('bildIconkTisch').style.display="block"
}

function plopkTisch0(){
    document.getElementById('bildIconkTisch').style.display="none"
}

function plopkStuhl1(){
    document.getElementById('bildIconkStuhl').style.display="block"
}

function plopkStuhl0(){
    document.getElementById('bildIconkStuhl').style.display="none"
}



//ende der Plopfunctionen Küche
//Sprechblasen Schlafzimmer

function showSprechblaseNope_Tisch(){
    document.getElementById('SprechblaseNope_Tisch').style.display="block"
}

function hideSprechblaseNope_Tisch(){
    document.getElementById('SprechblaseNope_Tisch').style.display="none"
}

function spielSprechblaseNope_TischAudio(){
    audioNopeTisch.volume = 0.01;
    audioNopeTisch.play();
}

function showSprechblaseNope_Bett(){
    document.getElementById('SprechblaseNope_Bett').style.display="block"
}

function hideSprechblaseNope_Bett(){
    document.getElementById('SprechblaseNope_Bett').style.display="none"
}

function spielSprechblaseNope_BettAudio(){
    audioNopeBett.volume = 0.01;
    audioNopeBett.play();
}

function showSprechblaseNope_Tuer(){
    document.getElementById('SprechblaseNope_Tuer').style.display="block"
}

function hideSprechblaseNope_Tuer(){
    document.getElementById('SprechblaseNope_Tuer').style.display="none"
}

function spielSprechblaseNope_TuerAudio(){
    audioNopeTuer.volume = 0.01;
    audioNopeTuer.play();
}

function showSprechblaseNope_AufTisch(){
    document.getElementById('SprechblaseNope_AufTisch').style.display="block"
}

function hideSprechblaseNope_AufTisch(){
    document.getElementById('SprechblaseNope_AufTisch').style.display="none"
}

function spielSprechblaseNope_AufTischAudio(){
    audioNopeAufTisch.volume = 0.01;
    audioNopeAufTisch.play();
}


function showSprechblaseNope_Bild(){
    document.getElementById('SprechblaseNope_Bild').style.display="block"
}

function hideSprechblaseNope_Bild(){
    document.getElementById('SprechblaseNope_Bild').style.display="none"
}

function spielSprechblaseNope_BildAudio(){
    audioNopeAufTisch.volume = 0.01;
    audioNopeAufTisch.play();
}

function showSprechblaseNope_Pflanze(){
    document.getElementById('SprechblaseNope_Pflanze').style.display="block"
}

function hideSprechblaseNope_Pflanze(){
    document.getElementById('SprechblaseNope_Pflanze').style.display="none"
}

function spielSprechblaseNope_PflanzeAudio(){
    audioNopePflanze.volume = 0.01;
    audioNopePflanze.play();
}

function showSprechblase_SchreibtischSchluessel1(){
    document.getElementById('Sprechblase_SchreibtischSchluessel1').style.display="block"
}

function hideSprechblase_SchreibtischSchluessel1(){
    document.getElementById('Sprechblase_SchreibtischSchluessel1').style.display="none"
}

function spielSchreibtischSchluessel1Audio(){
    audioSchreibtischSchluessel1.volume = 0.01;
    audioSchreibtischSchluessel1.play();
}

function showSprechblaseBenutzen(){
    document.getElementById('Sprechblase_Benutzen').style.display="block"
}

function hideSprechblaseBenutzen(){
    document.getElementById('Sprechblase_Benutzen').style.display="none"
}

function spielBenutzenAudio(){
    audioBenutzen.volume = 0.01;
    audioBenutzen.play();
}

function showSprechblase1_Gardine(){
    document.getElementById('Sprechblase1_Gardine').style.display="block"
}

function hideSprechblase1_Gardine(){
    document.getElementById('Sprechblase1_Gardine').style.display="none"
}

function spielGardineAudio(){
    audioGardine.volume = 0.01;
    audioGardine.play();
}

function showSprechblase2_Gardinenehmen1(){
    document.getElementById('Sprechblase2_Gardinenehmen1').style.display="block"
}

function hideSprechblase2_Gardinenehmen1(){
    document.getElementById('Sprechblase2_Gardinenehmen1').style.display="none"
}

function spielGardinenehmen1Audio(){
    audioGardinenehmen1.volume = 0.01;
    audioGardinenehmen1.play();
}

function showSprechblase2_Gardinenehmen2(){
    document.getElementById('Sprechblase2_Gardinenehmen2').style.display="block"
}

function hideSprechblase2_Gardinenehmen2(){
    document.getElementById('Sprechblase2_Gardinenehmen2').style.display="none"
}

function spielGardinenehmen2Audio(){
    audioGardinenehmen2.volume = 0.01;
    audioGardinenehmen2.play();
}

function showSprechblase1_Schluessel2(){
    document.getElementById('Sprechblase2_Schluessel2').style.display="block"
}

function hideSprechblase1_Schluessel2(){
    document.getElementById('Sprechblase2_Schluessel2').style.display="none"
}

function spielSchluessel2Audio(){
    audioSchluessel2.volume = 0.01;
    audioSchluessel2.play();
}

function showSprechblase1_Tuer(){
    document.getElementById('Sprechblase1_Tuer').style.display="block"
}

function hideSprechblase1_Tuer(){
    document.getElementById('Sprechblase1_Tuer').style.display="none"
}

function spielTuer1Audio(){
    audioTuer1.volume = 0.01;
    audioTuer1.play();
}

function showSprechblase2_Tuer(){
    document.getElementById('Sprechblase2_Tuer').style.display="block"
}

function hideSprechblase2_Tuer(){
    document.getElementById('Sprechblase2_Tuer').style.display="none"
}

function spielTuer2Audio(){
    audioTuer2.volume = 0.01;
    audioTuer2.play();
}

function showSprechblase1_Schublade(){
    document.getElementById('Sprechblase1_Schublade').style.display="block"
}

function hideSprechblase1_Schublade(){
    document.getElementById('Sprechblase1_Schublade').style.display="none"
}

function spielSchubladeAudio(){
    audioSchublade.volume = 0.01;
    audioSchublade.play();
}

function showSprechblase1_Schreibtisch(){
    document.getElementById('Sprechblase1_Schreibtisch').style.display="block"
}

function hideSprechblase1_Schreibtisch(){
    document.getElementById('Sprechblase1_Schreibtisch').style.display="none"
}

function spielSchreibtischAudio(){
    audioSchreibtisch.volume = 0.01;
    audioSchreibtisch.play();
}

function showSprechblase2_Hockerbenutzen(){
    document.getElementById('Sprechblase2_Hockerbenutzen').style.display="block"
}

function hideSprechblase2_Hockerbenutzen(){
    document.getElementById('Sprechblase2_Hockerbenutzen').style.display="none"
}

function spielHockerbenutzenAudio(){
    audioHockerbenutzen.volume = 0.01;
    audioHockerbenutzen.play();
}

function showSprechblase1_Uhr(){
    document.getElementById('Sprechblase1_Uhr').style.display="block"
}

function hideSprechblase1_Uhr(){
    document.getElementById('Sprechblase1_Uhr').style.display="none"
}

function spielUhrAudio(){
    audioUhr.volume = 0.01;
    audioUhr.play();
}

function showSprechblase1_Urkunde(){
    document.getElementById('Sprechblase1_Urkunde').style.display="block"
}

function hideSprechblase1_Urkunde(){
    document.getElementById('Sprechblase1_Urkunde').style.display="none"
}

function spielUrkundeAudio(){
    audioUrkunde.volume = 0.01;
    audioUrkunde.play();
}

function showSprechblase1_Truhe(){
    document.getElementById('Sprechblase1_Truhe').style.display="block"
}

function hideSprechblase1_Truhe(){
    document.getElementById('Sprechblase1_Truhe').style.display="none"
}

function spielTruheAudio(){
    audioTruhe.volume = 0.01;
    audioTruhe.play();
}

function showSprechblase1_Pflanze(){
    document.getElementById('Sprechblase1_Pflanze').style.display="block"
}

function hideSprechblase1_Pflanze(){
    document.getElementById('Sprechblase1_Pflanze').style.display="none"
}

function spielPflanzeAudio(){
    audioPflanze.volume = 0.01;
    audioPflanze.play();
}

function showSprechblase1_Papierkorb(){
    document.getElementById('Sprechblase1_Papierkorb').style.display="block"
}

function hideSprechblase1_Papierkorb(){
    document.getElementById('Sprechblase1_Papierkorb').style.display="none"
}

function spielPapierkorbAudio(){
    audioPapierkorb.volume = 0.01;
    audioPapierkorb.play();
}

function showSprechblase1_Kleiderhaken(){
    document.getElementById('Sprechblase1_Kleiderhaken').style.display="block"
}

function hideSprechblase1_Kleiderhaken(){
    document.getElementById('Sprechblase1_Kleiderhaken').style.display="none"
}

function spielKleiderhakenAudio(){
    audioKleiderhaken.volume = 0.01;
    audioKleiderhaken.play();
}

function showSprechblase1_Shirt1(){
    document.getElementById('Sprechblase1_Shirt1').style.display="block"
}

function hideSprechblase1_Shirt1(){
    document.getElementById('Sprechblase1_Shirt1').style.display="none"
}

function spielShirt1Audio(){
    audioShirt1.volume = 0.01;
    audioShirt1.play();
}

function showSprechblase1_Shirt2(){
    document.getElementById('Sprechblase1_Shirt2').style.display="block"
}

function hideSprechblase1_Shirt2(){
    document.getElementById('Sprechblase1_Shirt2').style.display="none"
}

function spielShirt2Audio(){
    audioShirt2.volume = 0.01;
    audioShirt2.play();
}

function showSprechblase1_Shirt3(){
    document.getElementById('Sprechblase1_Shirt3').style.display="block"
}

function hideSprechblase1_Shirt3(){
    document.getElementById('Sprechblase1_Shirt3').style.display="none"
}

function spielShirt3Audio(){
    audioShirt3.volume = 0.01;
    audioShirt3.play();
}

function showSprechblase1_Bild(){
    document.getElementById('Sprechblase1_Bild').style.display="block"
}

function hideSprechblase1_Bild(){
    document.getElementById('Sprechblase1_Bild').style.display="none"
}

function spielBildAudio(){
    audioBild.volume = 0.01;
    audioBild.play();
}

function showSprechblase1_Bernddasbrot1(){
    document.getElementById('Sprechblase1_Bernddasbrot1').style.display="block"
}

function hideSprechblase1_Bernddasbrot1(){
    document.getElementById('Sprechblase1_Bernddasbrot1').style.display="none"
}

function spielBernddasbrot1Audio(){
    audioBernddasbrot1.volume = 0.01;
    audioBernddasbrot1.play();
}

function showSprechblase1_Bernddasbrot2(){
    document.getElementById('Sprechblase1_Bernddasbrot2').style.display="block"
}

function hideSprechblase1_Bernddasbrot2(){
    document.getElementById('Sprechblase1_Bernddasbrot2').style.display="none"
}

function spielBernddasbrot2Audio(){
    audioBernddasbrot2.volume = 0.01;
    audioBernddasbrot2.play();
}

function showSprechblase1_Bett(){
    document.getElementById('Sprechblase1_Bett').style.display="block"
}

function hideSprechblase1_Bett(){
    document.getElementById('Sprechblase1_Bett').style.display="none"
}

function spielBettAudio(){
    audioBett.volume = 0.01;
    audioBett.play();
}

function showSprechblase1_Sekiro(){
    document.getElementById('Sprechblase1_Sekiro').style.display="block"
}

function hideSprechblase1_Sekiro(){
    document.getElementById('Sprechblase1_Sekiro').style.display="none"
}

function spielSekiroAudio(){
    audioSekiro.volume = 0.01;
    audioSekiro.play();
}

function showSprechblase1_Hocker(){
    document.getElementById('Sprechblase1_Hocker').style.display="block"
}

function hideSprechblase1_Hocker(){
    document.getElementById('Sprechblase1_Hocker').style.display="none"
}

function spielHockerAudio(){
    audioHocker.volume = 0.01;
    audioHocker.play();
}

function showSprechblaseFussball(){
    //console.log("wird das hier aufgerufen?")
    document.getElementById('SprechblaseFussball').style.display="block"
}

function hideSprechblaseFussball(){
    document.getElementById('SprechblaseFussball').style.display="none"
}

function spielFussballAudio(){
    audioFussball.volume = Fussballlautstaerke;
    audioFussball.play();
}

//Ende Sprechblasen Schlafzimmer
//Sprechblasen Flur

function showSprechblase_BlumeFlur(){
    document.getElementById('Sprechblase_BlumeFlur').style.display="block"
}

function hideSprechblase_BlumeFlur(){
    document.getElementById('Sprechblase_BlumeFlur').style.display="none"
}

function spielBlumeFlurAudio(){
    audioBlumeFlur.volume = 0.01;
    audioBlumeFlur.play();
}

function showSprechblase_Klavier(){
    document.getElementById('Sprechblase_Klavier').style.display="block"
}

function hideSprechblase_Klavier(){
    document.getElementById('Sprechblase_Klavier').style.display="none"
}

function spielKlavierAudio(){
    audioKlavier.volume = 0.01;
    audioKlavier.play();
}

function showSprechblase_KleiderhakenFlur(){
    document.getElementById('Sprechblase_KleiderhakenFlur').style.display="block"
}

function hideSprechblase_KleiderhakenFlur(){
    document.getElementById('Sprechblase_KleiderhakenFlur').style.display="none"
}

function spielKleiderhakenFlurAudio(){
    audioKleiderhakenFlur.volume = 0.01;
    audioKleiderhakenFlur.play();
}

function showSprechblase_Vitrine(){
    document.getElementById('Sprechblase_Vitrine').style.display="block"
}

function hideSprechblase_Vitrine(){
    document.getElementById('Sprechblase_Vitrine').style.display="none"
}

function spielVitrineAudio(){
    audioVitrine.volume = 0.01;
    audioVitrine.play();
}

function showSprechblase_TuerStube(){
    document.getElementById('Sprechblase_TuerStube').style.display="block"
}

function hideSprechblase_TuerStube(){
    document.getElementById('Sprechblase_TuerStube').style.display="none"
}

function spielTuerStubeAudio(){
    audioTuerStube.volume = 0.01;
    audioTuerStube.play();
}

function showSprechblase_TuerKueche(){
    document.getElementById('Sprechblase_TuerKueche').style.display="block"
}

function hideSprechblase_TuerKueche(){
    document.getElementById('Sprechblase_TuerKueche').style.display="none"
}

function spielTuerKuecheAudio(){
    audioTuerKueche.volume = 0.01;
    audioTuerKueche.play();
}

function showSprechblase_HausTuer(){
    document.getElementById('Sprechblase_HausTuer').style.display="block"
}

function hideSprechblase_HausTuer(){
    document.getElementById('Sprechblase_HausTuer').style.display="none"
}

function spielHausTuerAudio(){
    audioHausTuer.volume = 0.01;
    audioHausTuer.play();
}

//Ende Sprechblasen Flur

function startGame1(){
    document.getElementById('startBild').style.display="none";
    document.getElementById('kidposition').style.display="none";
    document.getElementById('bild1').src="EinleitungBild.png";
    startsound.volume = startLautstaerke;
    startsound.play();
    console.log("bleibt der Button?")
    resetRaum0();

}

function startGame2(){
    document.getElementById('bild1').src="Zimmer1_RadioAus.png";
    document.getElementById('kidposition').style.display="block";
    getRaum1();
}

//var FussballVar = "Fussball";

// function neuesStoppen(neuerName){
//     clearTimeout("showSprechblase" + neuerName + "Var");
//  
//     clearTimeout("showSprechblase" + neuerName + "Var");
//
//     clearTimeout("spiel" + neuerName + "AudioVar");

//     ("audio" + neuerName).pause();
//     ("audio" + neuerName).currentTime = 0;
//     ("hideSprechblase" + neuerName)();
// }


//Alle Timer um Sprechblasen anzuzeigen werden gestopppt und alle Sprechblasen werden ausgeblendet.
//Alle Sounds werden gestoppt und an den Anfang zurückgesetzt.
function sprechblasenStop(){
    console.log("Stop funktion");

    // Sprechblasen aus dem Schlafzimmer

    clearTimeout(showSprechblaseNope_TuerVar);
    //clearTimeout(spielSprechblaseNope_TuerAudioVar);
    //audioNopeTuer.pause();
    //audioNopeTuer.currentTime = 0;
    hideSprechblaseNope_Tuer();

    clearTimeout(showSprechblaseNope_BildVar);
    //clearTimeout(spielSprechblaseNope_BildAudioVar);
    //audioNopeBild.pause();
    //audioNopeBild.currentTime = 0;
    hideSprechblaseNope_Bild();

    clearTimeout(showSprechblaseNope_TischVar);
    //clearTimeout(spielSprechblaseNope_TischAudioVar);
    //audioNopeTisch.pause();
    //audioNopeTisch.currentTime = 0;
    hideSprechblaseNope_Tisch();

    clearTimeout(showSprechblaseNope_AufTischVar);
    //clearTimeout(spielSprechblaseNope_AufTischAudioVar);
    //audioNopeAufTisch.pause();
    //audioNopeAufTisch.currentTime = 0;
    hideSprechblaseNope_AufTisch();

    clearTimeout(showSprechblaseNope_PflanzeVar);
    //clearTimeout(spielSprechblaseNope_PflanzeAudioVar);
    //audioNopePflanze.pause();
    //audioNopePflanze.currentTime = 0;
    hideSprechblaseNope_Pflanze();

    clearTimeout(showSprechblaseNope_BettVar);
    //clearTimeout(spielSprechblaseNope_BettAudioVar);
    //audioNopeBett.pause();
    //audioNopeBett.currentTime = 0;
    hideSprechblaseNope_Bett();

    clearTimeout(showSprechblase1_TuerVar);
    //clearTimeout(spielTuer1AudioVar);
    //audioTuer1.pause();
    //audioTuer1.currentTime = 0;
    hideSprechblase1_Tuer();

    clearTimeout(showSprechblase1_GardineVar);
    //clearTimeout(spielGardineAudioVar);
    //audioGardine.pause();
    //audioGardine.currentTime = 0;
    hideSprechblase1_Gardine();

    clearTimeout(showSprechblase2_Gardinenehmen1Var);
    //clearTimeout(spielGardinenehmen1AudioVar);
    //audioGardineNehmen1.pause();
    //audioGardineNehmen1.currentTime = 0;
    hideSprechblase2_Gardinenehmen1();

    clearTimeout(showSprechblase2_Gardinenehmen2Var);
    //clearTimeout(spielGardinenehmen2AudioVar);
    //audioGardineNehmen2.pause();
    //audioGardineNehmen2.currentTime = 0;
    hideSprechblase2_Gardinenehmen2();

    clearTimeout(showSprechblase_SchreibtischSchluessel1Var);
    //clearTimeout(spielSchreibtischSchluessel1AudioVar);
    //audioSchreibtischSchluessel1.pause();
    //audioSchreibtischSchluessel1.currentTime = 0;
    hideSprechblase_SchreibtischSchluessel1();

    clearTimeout(showSprechblase1_SchreibtischVar);
    //clearTimeout(spielSchreibtischAudioVar);
    //audioSchreibtisch.pause();
    //audioSchreibtisch.currentTime = 0;
    hideSprechblase1_Schreibtisch();
    clearTimeout(showSprechblase1_SchubladeVar);
    //clearTimeout(spielSchubladeAudioVar);
    //audioSchublade.pause();
    //audioSchublade.currentTime = 0;
    hideSprechblase1_Schublade();
    clearTimeout(showSprechblaseFussballVar);
    //clearTimeout(spielFussballAudioVar);
    //audioFussball.pause();
    //audioFussball.currentTime = 0;
    hideSprechblaseFussball();
    clearTimeout(showSprechblase1_SekiroVar);
    //clearTimeout(spielSekiroAudioVar);
    //audioSekiro.pause();
    //audioSekiro.currentTime = 0;
    hideSprechblase1_Sekiro();
    clearTimeout(showSprechblase1_BettVar);
    //clearTimeout(spielBettAudioVar);
    //audioBett.pause();
    //audioBett.currentTime = 0;
    hideSprechblase1_Bett();
    clearTimeout(showSprechblase1_KleiderhakenVar);
    //clearTimeout(spielKleiderhakenVar);
    //audioKleiderhaken.pause();
    //audioKleiderhaken.currentTime = 0;
    hideSprechblase1_Kleiderhaken();
    clearTimeout(showSprechblase1_Shirt1Var);
    //clearTimeout(spielShirt1AudioVar);
    //audioShirt1.pause();
    //audioShirt1.currentTime = 0;
    hideSprechblase1_Shirt1();
    clearTimeout(showSprechblase1_Shirt2Var);
    //clearTimeout(spielShirt2AudioVar);
    //audioShirt2.pause();
    //audioShirt2.currentTime = 0;
    hideSprechblase1_Shirt2();

    clearTimeout(showSprechblase1_Shirt3Var);
    //clearTimeout(spielShirt3AudioVar);
    //audioShirt3.pause();
    //audioShirt3.currentTime = 0;
    hideSprechblase1_Shirt3();

    clearTimeout(showSprechblase1_HockerVar);
    //clearTimeout(spielHockerAudioVar);
    //audioHocker.pause();
    //audioHocker.currentTime = 0;
    hideSprechblase1_Hocker();

    clearTimeout(showSprechblase2_HockerbenutzenVar);
    //clearTimeout(spielHockerbenutzenAudioVar);
    //audioHockerbenutzen.pause();
    //audioHockerbenutzen.currentTime = 0;
    hideSprechblase2_Hockerbenutzen();

    clearTimeout(showSprechblase1_BildVar);
    //clearTimeout(spielBildAudioVar);
    //audioBild.pause();
    //audioBild.currentTime = 0;
    hideSprechblase1_Bild();
    clearTimeout(showSprechblase1_Bernddasbrot1Var);
    //clearTimeout(spielBernddasbrot1Var);
    //audioBernddasbrot1.pause();
    //audioBernddasbrot1.currentTime = 0;
    hideSprechblase1_Bernddasbrot1();
    clearTimeout(showSprechblase1_Bernddasbrot2Var);
    //clearTimeout(spielBernddasbrot2Var);
    //audioBernddasbrot2.pause();
    //audioBernddasbrot2.currentTime = 0;
    hideSprechblase1_Bernddasbrot2();
    clearTimeout(showSprechblase1_PapierkorbVar);
    //clearTimeout(spielPapierkorbVar);
    //audioPapierkorb.pause();
    //audioPapierkorb.currentTime = 0;
    hideSprechblase1_Papierkorb();
    clearTimeout(showSprechblase1_PflanzeVar);
    //clearTimeout(spielPflanzeVar);
    //audioPflanze.pause();
    //audioPflanze.currentTime = 0;
    hideSprechblase1_Pflanze();
    clearTimeout(showSprechblase1_TruheVar);
    //clearTimeout(spielTruheVar);
    //audioTruhe.pause();
    //audioTruhe.currentTime = 0;
    hideSprechblase1_Truhe();
    clearTimeout(showSprechblase1_UrkundeVar);
    //clearTimeout(spielUrkundeVar);
    //audioUrkunde.pause();
    //audioUrkunde.currentTime = 0;
    hideSprechblase1_Urkunde();
    clearTimeout(showSprechblase1_UhrVar);
    //clearTimeout(spielUhrVar);
    //audioUhr.pause();
    //audioUhr.currentTime = 0;
    hideSprechblase1_Uhr();
    
    //Sprechblasen aus dem Flur

    clearTimeout(showSprechblase_BlumeFlurVar);
    //clearTimeout(spielBlumeFlurVar);
    //audioBlumeFlur.pause();
    //audioBlumeFlur.currentTime = 0;
    hideSprechblase_BlumeFlur();

    clearTimeout(showSprechblase_KlavierVar);
    //clearTimeout(spielKlavierVar);
    //audioKlavier.pause();
    //audioKlavier.currentTime = 0;
    hideSprechblase_Klavier();

    clearTimeout(showSprechblase_KleiderhakenFlurVar);
    //clearTimeout(spielKleiderhakenFlurVar);
    //audioKleiderhakenFlur.pause();
    //audioKleiderhakenFlur.currentTime = 0;
    hideSprechblase_KleiderhakenFlur();

    clearTimeout(showSprechblase_VitrineVar);
    //clearTimeout(spielVitrineVar);
    //audioVitrine.pause();
    //audioVitrine.currentTime = 0;
    hideSprechblase_Vitrine();

    clearTimeout(showSprechblase_TuerStubeVar);
    //clearTimeout(spielTuerStubeVar);
    //audioTuerStube.pause();
    //audioTuerStube.currentTime = 0;
    hideSprechblase_TuerStube();

    clearTimeout(showSprechblase_TuerKuecheVar);
    //clearTimeout(spielTuerKuecheVar);
    //audioTuerKueche.pause();
    //audioTuerKueche.currentTime = 0;
    hideSprechblase_TuerKueche();

    clearTimeout(showSprechblase_HausTuerVar);
    //clearTimeout(spielHausTuerVar);
    //audioHausTuer.pause();
    //audioHausTuer.currentTime = 0;
    hideSprechblase_HausTuer();
}
var klavierlaut = 0.50;
var KlavierSound = document.getElementById("KlavierSong");
function startKlavier(){
    PlayKlavier();
    startsound.muted= true;
    audio.muted=true;
    KlavierSound.volume=klavierlaut;
}

function PlayKlavier(){
    KlavierSound.play();
    setTimeout(function(){
        if(x>0){
        audio.muted= false;
        } else {
            startsound.muted= false;
        }
        
        if(position=="Klavier"){
            MoveToInFlur("TuerBernd");}
        }, 23000)
}


//Radio Funktion
var audio = document.getElementById("radio");

audio.volume = lautstaerke;

function play(){
    console.log(lautstaerke)
    audio.play();
    startsound.muted= true;
}

function mute(){
    audio.muted = true;
    startsound.muted = false;
}

function unmute(){
    audio.muted = false
    startsound.muted = true;
}

function wechsel(){
    if (audio.muted == true) {
        unmute();
    } else {
        mute();
    }
}

var zaehler = 0

function nice(){
    if (zaehler == 0){
        play();
        mute();
    }
    zaehler++;


    wechsel();
}



//////ANFANG DER KINDERZIMMER ANIMATIONEN//////
/////X und Y variablen für die Punkte
///// in jedem raum gibt es ein paar Punkte
///// Diese Punkte dienen für die Positionen für die Figur
var positionAX = "360px";
var positionAY = "520px";

var positionBX = "740px";
var positionBY = "500px";

var positionCX = "730px";
var positionCY = "420px";

var positionDX = "580px";
var positionDY = "420px";

var positionEX = "450px";
var positionEY = "420px";

/////Die Aktuelle Position 
var position = "Schreibtisch";

function MoveTo(Ziel){
    cancelstehenbleiben();
    if(Ziel=="Schreibtisch"){ //Es wird  geschaut, wo das ziel ist;
        MoveToSchreibtisch(); //Die Funktion welche dem Kind neue Positionen gibt
        //ab hier wird geschaut was die jetztige Positionen 
        if(position=="Bett"){
            //Das Bild welches für den gang benutzt wird
            //Reine Gestaltwahl
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";            
        }      
        if(position=="Tuer"){
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        }  
        if(position=="Muelleimer")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";   
        }
        if(position=="Schublade")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";   
        } 
        //Die Position wird auf die Neue Position geändert
        setTimeout(function(){
        position="Schreibtisch";
        },3000);
    }
    //Wiederholt für jedes Ziel neu
    if(Ziel=="Bett"){
        MoveToBett();
        if(position=="Schreibtisch")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        }
        if(position=="Tuer")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";   
        } 
        if(position=="Muelleimer")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        if(position=="Schublade")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        }
        setTimeout(function(){
        position="Bett";
        },2000);
    }

    if(Ziel=="Tuer"){
        MoveToTuer();
        if(position=="Schreibtisch")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        }
        if(position=="Bett")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";   
        } 
        if(position=="Muelleimer")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        if(position=="Schublade")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        setTimeout(function(){
        position="Tuer";
        },2000);
    }

   
    if(Ziel=="Muelleimer"){
        MoveToMuelleimer();
        if(position=="Schreibtisch")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";   
        }
        if(position=="Bett")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";   
        } 
        if(position=="Tuer")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        if(position=="Schublade")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 

        setTimeout(function(){
        position="Muelleimer";
        },2000);
    }

    if(Ziel=="Schublade"){
        MoveToSchublade();
        if(position=="Schreibtisch")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";   
        }
        if(position=="Bett")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        if(position=="Tuer")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        if(position=="Muelleimer")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        
        setTimeout(function(){
        position="Schublade";
        },2000);
    }
    
    StehenBleiben();
}

//Functionen welche die Figur neue Koordinaten gibt

function MoveToSchreibtisch(){
    
    document.getElementById("kidposition").style.left=positionAX;
    document.getElementById("kidposition").style.top =positionAY;
 
    
}

function MoveToBett(){
    document.getElementById("kidposition").style.left=positionBX;
    document.getElementById("kidposition").style.top =positionBY;
 
    
}

function MoveToTuer(){
    document.getElementById("kidposition").style.left=positionCX;
    document.getElementById("kidposition").style.top =positionCY;

}

function MoveToMuelleimer(){
    document.getElementById("kidposition").style.left=positionDX;
    document.getElementById("kidposition").style.top =positionDY;


}

function MoveToSchublade(){
    document.getElementById("kidposition").style.left=positionEX;
    document.getElementById("kidposition").style.top =positionEY;

}
var stehenbleibencancel;
//Funktion welche dem Kind nach dem Laufen wieder in das Ausgangsbild bringt
function StehenBleiben(){
    stehenbleibencancel= setTimeout(function() {
                            document.getElementById("kidposition").src="kiddo_bilder/kid_front.png";
                            }, 3000);
}
//Function welche die StehenBleiben function Canceld
//Die Figur kann mittem im laufen auch auf ein anderes Ziel gehen
function cancelstehenbleiben(){
    clearTimeout(stehenbleibencancel);
}
//Spezielle Function
//Ähnlich wie die MoveTo Funktion
//Doch nur ein Speziell fall falls das Fenster begehbar ist
function MoveToFenster(){
    
    if(position!="Schreibtisch"&&position!="aufSchreibtisch"){
        MoveTo("Schreibtisch");
        setTimeout(function(){
            document.getElementById("kidposition").style.transitionDuration="1s";
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";
            

            document.getElementById("kidposition").style.left="400px";
            document.getElementById("kidposition").style.top ="410px";
        },3000);
        
        setTimeout(function(){
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";
            document.getElementById("kidposition").style.left="345px";
            document.getElementById("kidposition").style.top ="360px";
        },4000);

      

        setTimeout(function() {
            document.getElementById("kidposition").src="kiddo_bilder/kid_front.png";
            document.getElementById("kidposition").style.transitionDuration="3s";
            }, 5000);
        
}else{
    if(position!="aufSchreibtisch"){
        document.getElementById("kidposition").style.transitionDuration="1s";
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";
        

        document.getElementById("kidposition").style.left="400px";
        document.getElementById("kidposition").style.top ="410px";
        
        setTimeout(function(){
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";
            document.getElementById("kidposition").style.left="345px";
            document.getElementById("kidposition").style.top ="360px";
            
        }, 1000);

        setTimeout(function(){
            document.getElementById("kidposition").src="kiddo_bilder/kid_front.png";
            document.getElementById("kidposition").style.transitionDuration="3s";
    
            
        }, 2000);
    }
    }
    
        position="aufSchreibtisch";
}
//Speziall MoveTo
//Geht vom Schreibtisch runter
function MoveToRunter(){
    document.getElementById("kidposition").style.transitionDuration="1s";
    
    document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";
    document.getElementById("kidposition").style.left="400px";
    document.getElementById("kidposition").style.top ="410px";

    setTimeout(function(){
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";
        document.getElementById("kidposition").style.left=positionAX;
        document.getElementById("kidposition").style.top =positionAY;

        
    },1000)
    setTimeout(function(){
        position="Schreibtisch";
        document.getElementById("kidposition").style.transitionDuration="3s";
    },2000);
}
//bewegt die Figur zu einer passenden Position im nächsten Raum

function transitionKinderzimmerZuFlur(){
    document.getElementById("kidposition").style.transitionDuration="0s";
    document.getElementById("kidposition").style.left="290px";
    document.getElementById("kidposition").style.top ="530px";
    position="TuerBernd";
    setTimeout(function(){
        document.getElementById("kidposition").style.transitionDuration="3s";
        
    },100);
}


/////ENDE DER KINDERZIMMER ANIMATIONEN/////
/////ANFANG DER FLUR ANIMATIONEN      /////
//Positionsvariablen
var  TuerBerndX="290px";
var  TuerBerndY="530px";

var TuerWCX="870px";
var TuerWCY="510px";
 
var TuerKuecheX="750px";
var TuerKuecheY="390px";

var TuerWohnzimmerX="470px";
var TuerWohnzimmerY="390px";

var TuerHausX="600px";
var TuerHausY="370px";
//Wie das MoveTo im Kinderzimmer
function MoveToInFlur(Ziel){
        cancelstehenbleiben();

        if(Ziel=="TuerBernd"){
            MoveToTuerBernd();
            if(position=="TuerWC"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";            
            }      
            if(position=="TuerKueche"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
            }  
            if(position=="TuerWohnzimmer")
            {
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";   
            }
            if(position=="TuerHaus"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";            
            }   
            if(position=="Klavier"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";            
            } 
            setTimeout(function(){
            position="TuerBernd";
            },2000);
            
        }

        if(Ziel=="TuerWC"){
            MoveToTuerWC();
            if(position=="TuerBernd"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";            
            }      
            if(position=="TuerKueche"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";   
            }  
            if(position=="TuerWohnzimmer")
            {
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
            }
            if(position=="TuerHaus"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";            
            }  
            if(position=="Klavier"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";            
            } 
            setTimeout(function(){
            position="TuerWC";
            },2000);
        }

        if(Ziel=="TuerKueche"){
            MoveToTuerKueche();
            if(position=="TuerBernd"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";            
            }      
            if(position=="TuerWC"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";   
            }  
            if(position=="TuerWohnzimmer")
            {
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
            }
            if(position=="TuerHaus"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";            
            }
            if(position=="Klavier"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";            
            }   
            setTimeout(function(){
            position="TuerKueche";
            },2000);
        }

        if(Ziel=="TuerWohnzimmer"){
            MoveToTuerWohnzimmer();
            if(position=="TuerBernd"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";            
            }      
            if(position=="TuerKueche"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
            }  
            if(position=="TuerWC")
            {
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
            }
            if(position=="TuerHaus"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";            
            }  
            if(position=="Klavier"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";            
            } 
            setTimeout(function(){
            position="TuerWohnzimmer";
            },2000);
        }
        if(Ziel=="TuerHaus"){
            MoveToTuerHaus();
            if(position=="TuerBernd"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";            
            }      
            if(position=="TuerKueche"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
            }  
            if(position=="TuerWC")
            {
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";   
            }
            if(position=="TuerWohnzimmer"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";            
            }
            if(position=="Klavier"){
                document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";            
            } 
            setTimeout(function(){
            position="TuerHaus";
            },2000);
        }
        StehenBleiben();
}
//Koordinaten Funktion
function MoveToTuerBernd(){
    document.getElementById("kidposition").style.left=TuerBerndX;
    document.getElementById("kidposition").style.top =TuerBerndY;
}

function MoveToTuerWC(){
    document.getElementById("kidposition").style.left=TuerWCX;
    document.getElementById("kidposition").style.top =TuerWCY;
}

function MoveToTuerKueche(){
    document.getElementById("kidposition").style.left=TuerKuecheX;
    document.getElementById("kidposition").style.top=TuerKuecheY;   
}

function MoveToTuerWohnzimmer(){
    document.getElementById("kidposition").style.left=TuerWohnzimmerX;
    document.getElementById("kidposition").style.top=TuerWohnzimmerY;   
}

function MoveToTuerHaus(){
    document.getElementById("kidposition").style.left=TuerHausX;
    document.getElementById("kidposition").style.top=TuerHausY;   
}

function MoveToKlavier(){
    var KlavierX="390px";
    var KlavierY="390px";
    document.getElementById("kidposition").style.transitionDuration="2s";

    document.getElementById("kidposition").style.left=KlavierX;
    document.getElementById("kidposition").style.top =KlavierY;


    if(position=="TuerBernd"){
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";            
    }      
    if(position=="TuerKueche"){
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
    }  
    if(position=="TuerWC")
    {
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
    }
    if(position=="TuerWohnzimmer"){
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";            
    }  
    if(position=="TuerHaus"){
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";            
    }  
    
    setTimeout(function(){
        position="Klavier";
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_piano.gif";
        startKlavier();  
        document.getElementById("kidposition").style.transitionDuration="3s";
        },2000);
}
//Die transition Functionen packen die Figur in eine Position in einen anderen Raum
function transitionFlurZuBadezimmer(){
    document.getElementById("kidposition").style.transitionDuration="0s";
    setTimeout(function(){
        document.getElementById("kidposition").style.transitionDuration="3s";
        
    },100);
}
function transitionFlurZuKueche(){
    document.getElementById("kidposition").style.transitionDuration="0s";
    document.getElementById("kidposition").style.left="330px";
    document.getElementById("kidposition").style.top ="530px";
    position="TuerInKueche";
    setTimeout(function(){
        document.getElementById("kidposition").style.transitionDuration="3s";
        
    },100);
}
function transitionnFlurZuKinderzimmer(){
    document.getElementById("kidposition").style.transitionDuration="0s";
    document.getElementById("kidposition").style.left="730px";
    document.getElementById("kidposition").style.top ="420px";
    position="Tuer";
    setTimeout(function(){
        document.getElementById("kidposition").style.transitionDuration="3s";
        
    },100);
}
//////////ENDE DER FLUR ANIMATIONEN////////////////////
/////////ANFANG DER BADEZIMMER ANIMATIONEN/////////////
//Positions variablen
var tuerImBadX="870px";
var tuerImBadY="510px";

var schrankWCX="650px";
var schrankWCY="490px";

var toiletteX="420px";
var toiletteY="490px";

var duscheX="390px";
var duscheY="530px";

//Koordinaten Funktionen
function MoveToTuerImBad(){
    document.getElementById("kidposition").style.left=tuerImBadX;
    document.getElementById("kidposition").style.top =tuerImBadY;
}

function MoveToSchrankWC(){
    document.getElementById("kidposition").style.left=schrankWCX;
    document.getElementById("kidposition").style.top =schrankWCY;
}

function MoveToToilette(){
    document.getElementById("kidposition").style.left=toiletteX;
    document.getElementById("kidposition").style.top =toiletteY;
}
function MoveToDusche(){
    document.getElementById("kidposition").style.left=duscheX;
    document.getElementById("kidposition").style.top =duscheY;
}
//Wie die MoveTo davor
function MoveToImBad(Ziel){
    cancelstehenbleiben();
    if(Ziel=="TuerImBad"){
        MoveToTuerImBad();
        if(position=="Dusche")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        }
        if(position=="SchrankWC")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        if(position=="Toilette")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        setTimeout(function(){
        position="TuerImBad";
        },2000);
    }
    if(Ziel=="Dusche"){
        MoveToDusche();
        if(position=="TuerImBad")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        }
        if(position=="SchrankWC")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        if(position=="Toilette")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        setTimeout(function(){
        position="Dusche";
        },2000);
    }
    if(Ziel=="SchrankWC"){
        MoveToSchrankWC();
        if(position=="TuerImBad")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        }
        if(position=="Dusche")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        if(position=="Toilette")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        setTimeout(function(){
        position="SchrankWC";
        },2000);
    }
    if(Ziel=="Toilette"){
        MoveToToilette();
        if(position=="TuerImBad")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        }
        if(position=="Dusche")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        if(position=="SchrankWC")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        setTimeout(function(){
        position="Toilette";
        },2000);
    }
    
    
    StehenBleiben();
}
/////////ENDE DER BADEZIMMER ANIMATIONEN///////////////
/////////ANFANG DER KÜCHEN ANIMATIONEN/////////////////
function trasitionFlurZuKueche(){
    document.getElementById("kidposition").style.transitionDuration="0s";
    document.getElementById("kidposition").style.left="350px";
    document.getElementById("kidposition").style.top ="550px";
    setTimeout(function(){
        document.getElementById("kidposition").style.transitionDuration="3s";
        
    },100);
}

var tuerinKuecheX="330px";
var tuerinKuecheY="530px";

var kuehlschrankX="490px";
var kuehlschrankY="470px";

var spuelmaschineX="620px";
var spuelmaschineY="470px";

var tischinKuecheX="650px";
var tischinKuecheY="550px";

function MoveToTuerInKueche(){
    document.getElementById("kidposition").style.left=tuerinKuecheX;
    document.getElementById("kidposition").style.top =tuerinKuecheY;
}

function MoveToKuehlschrank(){
    document.getElementById("kidposition").style.left=kuehlschrankX;
    document.getElementById("kidposition").style.top =kuehlschrankY;
}

function MoveToSpuelmaschine(){
    document.getElementById("kidposition").style.left=spuelmaschineX;
    document.getElementById("kidposition").style.top =spuelmaschineY;
}
function MoveToTischinKueche(){
    document.getElementById("kidposition").style.left=tischinKuecheX;
    document.getElementById("kidposition").style.top =tischinKuecheY;
}

function MoveToInKueche(Ziel){
    cancelstehenbleiben();
    if(Ziel=="TuerInKueche"){
        MoveToTuerInKueche();
        if(position=="Kuehlschrank")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        }
        if(position=="Spuelmaschine")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        if(position=="TischInKueche")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        setTimeout(function(){
        position="TuerInKueche";
        },2000);
    }
    if(Ziel=="Kuehlschrank"){
        MoveToKuehlschrank();
        if(position=="TuerInKueche")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        }
        if(position=="Spuelmaschine")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        if(position=="TischInKueche")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";   
        } 
        setTimeout(function(){
        position="Kuehlschrank";
        },2000);
    }
    if(Ziel=="Spuelmaschine"){
        MoveToSpuelmaschine();
        if(position=="TuerInKueche")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        }
        if(position=="Kuehlschrank")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        if(position=="TischInKueche")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";   
        } 
        setTimeout(function(){
        position="Spuelmaschine";
        },2000);
    }
    if(Ziel=="TischInKueche"){
        MoveToTischinKueche();
        if(position=="TuerInKueche")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        }
        if(position=="Kuehlschrank")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";   
        } 
        if(position=="Spuelmaschine")
        {
            document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_front_walking.gif";   
        } 
        setTimeout(function(){
        position="TischInKueche";
        },2000);
    }
    
    
    StehenBleiben();
}

function transitionKuecheZuFlur(){
    document.getElementById("kidposition").style.transitionDuration="0s";
    document.getElementById("kidposition").style.left="750px";
    document.getElementById("kidposition").style.top ="390px";
    position="TuerBernd";
    setTimeout(function(){
        document.getElementById("kidposition").style.transitionDuration="3s";
        
    },100);
}
// Speziall animation fürs Nehmen der Pfanne 
//musste in 2 teile aufgeteilt werden.
function PfanneNehmenAnimation1(){
    document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_left_walking.gif";
    document.getElementById("kidposition").style.transitionDuration="0.5s";
    document.getElementById("kidposition").style.left="592px";
    setTimeout(function(){
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";
        document.getElementById("kidposition").style.transitionDuration="1.5s";
        document.getElementById("kidposition").style.top="410px";
    },500);
    setTimeout(function(){
        document.getElementById("kidposition").src="kiddo_bilder/kid_back.png";
    },2000);
}

function PfanneNehmenAnimation2(){
    setTimeout(function(){
        
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_back_walking.gif";
        document.getElementById("kidposition").style.top="470px";
    },2500);
    setTimeout(function(){
        document.getElementById("kidposition").style.transitionDuration="0.5s";
        document.getElementById("kidposition").src="kiddo_bilder/gifs/kid_right_walking.gif";
        document.getElementById("kidposition").style.left="620px";
    },4000);
    setTimeout(function(){
        document.getElementById("kidposition").style.transitionDuration="3s";
        document.getElementById("kidposition").src="kiddo_bilder/kid_front.png";
    },4500);
}
////////////Ende Animationen Küche//////////////
///////////Anfang der Sprechblasen ab WC////////
//function welche die Action löscht die beim "ankommen" ausgeführt werden sollte
function clearAction(){
    clearTimeout(ActionTimeout);
}


/////////Function für die Sprechblasen für WC und Küche
///////// Neue funkction von Fillip
///////// SprechblasenDiv = Div der Sprechblase welches
///////// ein und ausgeblendet wird
function SprechblaseFunction(SprechblasenDiv){
    //Div wird eingeblendet
    document.getElementById(SprechblasenDiv).style.display="block";
    setTimeout(function()
    {
    //Div wird ausgeblendet
    document.getElementById(SprechblasenDiv).style.display="none"; 
    },3300);
}

function neueGardineSprechblase(){
    var Atop="210px";
    var Aleft="170px";

    var Btop="210px";
    var Bleft="562px";

    var Ctop="122px";
    var Cleft="551px";

    var Dtop="122px";
    var Dleft="404px";

    var Etop="122px";
    var Eleft="276px";

    if(position=="Schreibtisch"){
    document.getElementById("Sprechblase1_Gardine").style.left=Aleft;
    document.getElementById("Sprechblase1_Gardine").style.top =Atop;
    }
    if(position=="Bett"){
        document.getElementById("Sprechblase1_Gardine").style.left=Bleft;
        document.getElementById("Sprechblase1_Gardine").style.top =Btop;
     }
    if(position=="Tuer"){
    document.getElementById("Sprechblase1_Gardine").style.left=Cleft;
    document.getElementById("Sprechblase1_Gardine").style.top =Ctop;
    }
    if(position=="Muelleimer"){
        document.getElementById("Sprechblase1_Gardine").style.left=Dleft;
        document.getElementById("Sprechblase1_Gardine").style.top =Dtop;
        }
    if(position=="Schublade"){
        document.getElementById("Sprechblase1_Gardine").style.left=Eleft;
        document.getElementById("Sprechblase1_Gardine").style.top =Etop;
            }

}
    ////ERSTE VERSUCHE FÜR DIE GAME LOGIK
    //document.getElementById('Box2').style.display='block';
    //document.getElementById("div1").style.display="block";
    //document.getElementById("knopf2").style.display="none";
   /* document.getElementById('bild1').src='bild3.jpg'

    
        var x = document.getElementById("bild1");
        if (x.document.images === "") {
          x.innerHTML = "Swapped text!";
        } else {
          x.innerHTML = "Hello";
        }

        var x = document.getElementById("bild1");
        Zweitbild = new Image(950, 650);
        Zweitbild.src = "Bild3.jpg";
         document.images[0].src = Zweitbild.src;
        
         if (x.Zweitbild == "Bild3.jpg"){
            console.log("bild1");
            x.zweitbild = "bild1.jpg";
        } else {
            x.zweitbild = "bild3.jpg";
            console.log("bild3");
        }
        
        $('#my_image').attr('src','second.jpg');
        Hut ab wenn du es bis hier geschafft hast :D
        */
    