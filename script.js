function changeText1() {
    
    document.getElementById("demo").innerHTML =
        "Mange oplever problemer med at holde en god livsstil, det føles tit<br><br>" +
        "som om en fejl sender dig helt tilbage til start. Alt du skal gøre<br><br>" +
        "Alt du skal gøre, er at tage en lille quiz. Hvorfor skal du tage Quizzen?<br><br>" +
        "Vi har brug for, at du tager Quizzen, til at vide hvad dit problem faktisk er.<br><br>" +
        "Det ville jo ikke hjælpe, at vi satte dig på et vægttabskursus, hvis du var<br><br>" +
        "ekstrem undervægtig. Derfor har vi lavet 8 kurser som du kan<br><br>" +
        "vælge mellem.<br><br>";

    const firstBtn = document.getElementById("morebtn");
    if (firstBtn) firstBtn.remove();

    const resetBtn = document.createElement("button");
    resetBtn.id = "nextBtn";
    resetBtn.innerText = "Gå tilbage";

    resetBtn.onclick = function () {
       
       document.getElementById("demo").innerHTML = "";

        resetBtn.remove();

        const originalBtn = document.createElement("button");
        originalBtn.id = "morebtn";
        originalBtn.innerText = "klik her for mere information";
        originalBtn.onclick = changeText1;

        document.getElementById("demo").after(originalBtn);
    };

    document.getElementById("demo").appendChild(resetBtn);
}



function changeText2() {

    
    document.getElementById("dem2").innerHTML =
        "Fra 1920 begynder man dog at koble dårlig kost og livsstilssygedomme sammen som sukkersyge,<br><br>"+
                " åreforkalkning, leversygdomme, skrumpenyrer og skaldethed. Derfor indfører staten husgerning<br><br>"+
         " for piger som et obligatorisk fag, og flere husholdningsskoler slår dørene op for at lære<br><br>"+
          " kvinder madlavning, ernæring, barnepleje og rengøring. I denne periode begynder der også<br><br>"+
           " at dukke ”slankebøger” op med gode råd til, hvordan man forbliver slank eller taber sig.<br><br>"+
       " Anden Verdenskrig i 1940 sætter dog denne trend på pause, da krigen gør det svært at skaffe<br><br>"+
        " de meste basale produkter i husholdningen. Der kommer rationering på de fleste varer, og<br><br>"+
         " mange varer, man før kunne købe, bliver pludselig umulige at skaffe. Tiden er præget af at<br><br>"+
          " blive mæt til billige penge. Alt der handler om sund kost og livsstil stilles på pause.<br><br>"+
           " For de fattige i storbyerne resulterer det i, at mange bliver underernærede.<br><br>"+
        " 1950’erne er præget af krigen med mangel på alt – især god kost. Da opsvinget i Danmark<br><br>"+
         " kommer i begyndelsen af 1960’erne, begynder mange at få flere penge mellem hænderne.<br><br>"+
          " Det er nemt at få arbejde for både mænd og kvinder, og med to indtægter kan man nu købe alt,<br><br>"+
           " hvad hjertet begærer. Det gør at mange spiser for meget, for tit, for sødt og for fedt.<br><br>"+
            " Man nøjes ikke længere med de tre faste måltider som morgenmad, middagsmad og aftensmad.<br><br>"+
             " Nye trends som hyggespisning, trøstespisning og selskabelighedsspisning dukker op,<br><br>"+
              " og det begynder at smitte af på folkesundheden. Overvægten blandt befolkningen stiger.<br><br"+
               " Dårlig kost og mangel på motion får skylden. Det fysisk hårde arbejde er på retur,<br><br>"+
                " og flere får stillesiddende arbejde uden at rørt sig i løbet af dagen.<br><br>"+
               " Overflod af mad og mangel på motion fylder også meget op gennem 1970’erne.<br><br>"+
                " Eftersom mange kvinder er på arbejdsmarkedet, har de ikke tid til at stå i køkkenet<br><br>"+
                 " og lave god og sund mad fra bunden, men vælger i stedet de nye trends indenfor<br><br>"+
                  " færdiglavede retter, der smager godt, men som er fyldt med sukker og fedt.<br><br>"+
               " Op gennem tiden er overvægt blevet set på som et samfundsproblem, men fra 1980’erne<br><br>"+
            " begynder det at bliver ”ens egen skyld”, hvis man er for tyk. Forbud på forbud dukker op.<br><br>"+
             " Alle ved, hvad man ikke skal spise, men der er ikke fokus på, hvad man så skal spise i stedet for.<br><br>"+
              " Derfor fortsætter overvægten blandt befolkningen at stige.<br><br>"+
          " fra 1990’erne og op til i dag er overvægt stadig stigende, og det at være for tyk anses næsten som<br><br>"+
             " ”taberagtigt”. En slank og veltrænet krop er et symbol på kontrol over sig selv, men også ens liv. <br><br>"+
        " Arbejdsugen i 1920 var på min. 48 timer – mandag til lørdag med mindst 8 timer dagligt.<br><br>"+
         " I dag er en almindelig arbejdsuge på 37 timer. Vores arbejdsdag er blevet lettere fysisk,<br><br>"+
          " men til gengæld har mange tid til overs til fritidsaktiviteter, løbeture, fitness m.m.<br><br>"+
           " Men hvorfor er overvægt så stadig et problem? <br><br>"+
           " Forskningen peger stadig på, at kost og motion er vigtige, hvis man skal undgå overvægt,<br><br>"+
            " men den peger også på områder som vores forbrug af forarbejdede fødevarer, som ofte<br><br>"+
             " indeholder tilsætningsstoffer, hormonforstyrrende stoffer, skjult fedt, sukker og salt.<br><br>"+
              " Nogle forskere er også begyndt at forske i, om overvægt kan nedarves.<br><br>"+
              " Alle mennesker har fedtgener, og disse fedtgener afgør, hvornår man føler sult,<br><br>"+
               " og hvornår man føler mæthed, og det kan være forskelligt fra menneske til menneske,<br><br>"+
                " så svaret på, hvorfor et menneske bliver overvægtig er måske ikke så enkelt.<br><br>";


    const firstBtn = document.getElementById("morebt2");
    if (firstBtn) firstBtn.remove();

    const resetBtn = document.createElement("button");
    resetBtn.id = "nextBt2";
    resetBtn.innerText = "Gå tilbage";

    resetBtn.onclick = function () {
       
       document.getElementById("dem2").innerHTML = "";

        resetBtn.remove();

        const originalBtn = document.createElement("button");
        originalBtn.id = "morebt2";
        originalBtn.innerText = "klik her for mere information";
        originalBtn.onclick = changeText2;

        document.getElementById("dem2").after(originalBtn);
    };

    document.getElementById("dem2").appendChild(resetBtn);
}

