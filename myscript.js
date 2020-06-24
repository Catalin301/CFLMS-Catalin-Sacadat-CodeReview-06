var Loca = /** @class */ (function () {
    function Loca(name, place, addr, img, weblink, createTime, someInfo) {
        this.name = "";
        this.location = "";
        this.addr = "";
        this.img = "";
        this.weblink = "";
        this.createTime = "";
        this.someInfo = "";
        this.name = name;
        this.location = place;
        this.addr = addr;
        this.img = img;
        this.weblink = weblink;
        this.createTime = createTime;
        this.someInfo = someInfo;
    }
    Loca.prototype.display = function () {
        document.getElementById('row').innerHTML +=
            "<div  class=\"col-lg-3 col-md-6 col-sm-12\" >\n\t\t<div class=\"card\" style=\"width: 18rem;\">\n\t      <img src=" + this.img + " class=\"card-img-top d-sm-none d-md-block\" alt=\"...\" style=\"height:250px;\">\n\t    <div class=\"card-body\">\n\t      <h5 class=\"card-title\">" + this.name + "</h5>\n\t      <p class=\"card-text\">" + this.someInfo + "</p>\n\t    </div>\n\t      <ul class=\"list-group list-group-flush\">\n\t        <li class=\"list-group-item\">" + this.location + "</li>\n\t        <li class=\"list-group-item\">" + this.addr + "</li>\n\t      </ul>\n\t    <div class=\"card-body\">\n\t     \n\t      <a href=\"" + this.weblink + "\" class=\"card-link\">Link</a>\n\t      <a class=\"card-link\">" + this.createTime + "</a>\n\t    </div>\n\t  </div>\n\t  </div>";
    };
    Loca.prototype.info = function () {
        return "" + this.location;
    };
    return Loca;
}());
var Rest = /** @class */ (function () {
    function Rest(name, place, addr, img, weblink, createTime, someInfo, phoneN, imgI) {
        this.name = "";
        this.location = "";
        this.addr = "";
        this.img = "";
        this.weblink = "";
        this.createTime = "";
        this.someInfo = "";
        this.phoneN = "";
        this.imgI = "";
        this.name = name;
        this.location = place;
        this.addr = addr;
        this.img = img;
        this.weblink = weblink;
        this.createTime = createTime;
        this.someInfo = someInfo;
        this.phoneN = phoneN;
        this.imgI = imgI;
    }
    Rest.prototype.display = function () {
        document.getElementById('row').innerHTML +=
            "<div  class=\"col-lg-3 col-md-6 col-sm-12\" >\n\t\t\t<div class=\"card\" style=\"width: 18rem;\">\n\t\t\t      <img src=\"" + this.img + "\" class=\"card-img-top d-sm-none d-md-block\" alt=\"...\" style=\"height:250px;\">\n\t\t\t    <div class=\"card-body\">\n\t\t\t      <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t      <p class=\"card-text\">" + this.someInfo + "</p>\n\t\t\t    </div>\n\t\t\t      <ul class=\"list-group list-group-flush\">\n\t\t\t        <li class=\"list-group-item\">" + this.location + "</li>\n\t\t\t        <li class=\"list-group-item\">" + this.addr + "</li>\n\t\t\t        <li class=\"list-group-item\"><img src=\"" + this.imgI + "\">" + this.phoneN + "</li>\n\t\t\t      </ul>\n\t\t\t    <div class=\"card-body\">\n\t\t\t     \n\t\t\t      <a href=\"" + this.weblink + "\" class=\"card-link\">Link</a>\n\t\t\t      <a class=\"card-link\">" + this.createTime + "</a>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t  </div>";
    };
    Rest.prototype.info = function () {
        return "" + this.location;
    };
    return Rest;
}());
var Events = /** @class */ (function () {
    function Events(name, place, addr, img, weblink, createTime, someInfo, addR, price) {
        this.name = "";
        this.show = "";
        this.addr = "";
        this.img = "";
        this.weblink = "";
        this.createTime = "";
        this.someInfo = "";
        this.addR = "";
        this.price = "";
        this.name = name;
        this.show = place;
        this.addr = addr;
        this.img = img;
        this.weblink = weblink;
        this.createTime = createTime;
        this.someInfo = someInfo;
        this.addR = addR;
        this.price = price;
    }
    Events.prototype.display = function () {
        document.getElementById('row').innerHTML +=
            "<div  class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t<div class=\"card\" style=\"width: 18rem;\">\n\t\t\t      <img src=\"" + this.img + "\" class=\"card-img-top d-sm-none d-md-block\" alt=\"...\" style=\"height:250px;\">\n\t\t\t    <div class=\"card-body\">\n\t\t\t      <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t      <p class=\"card-text\">" + this.someInfo + "</p>\n\t\t\t    </div>\n\t\t\t      <ul class=\"list-group list-group-flush\">\n\t\t\t        <li class=\"list-group-item\">" + this.show + "</li>\n\t\t\t        <li class=\"list-group-item\">" + this.addr + "</li>\n\t\t\t        <li class=\"list-group-item\">" + this.addR + "</li>\n\t\t\t        <li class=\"list-group-item\">" + this.price + "</li>\t\t       \n\t\t\t      </ul>\n\t\t\t    <div class=\"card-body\">\n\t\t\t      \n\t\t\t      <a href=\"" + this.weblink + "\" class=\"card-link\">Link</a>\n\t\t\t      <a class=\"card-link\">" + this.createTime + "</a>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t  </div>";
    };
    Events.prototype.info = function () {
        return "" + this.show;
    };
    return Events;
}());
var location1 = new Loca("Stephansdom", "1010 Vienna", "Stephansplatz", "img/stephansdom.jpg", "https://www.stephanskirche.at/", "Created: 05.05.2020 - 12:45", "Der Stephansdom am Wiener Stephansplatz ist seit 1365 Domkirche, seit 1469/1479 Kathedrale ....");
var location2 = new Loca("Belvedere", "1030 Vienna", "Schloss Belvedere", "img/belvedere1.jpg", "https://www.belvedere.at/", "Created: 10.05.2020 - 14:25", "Das Schloss Belvedere in Wien ist eine von Johann Lucas von Hildebrandt für Prinz Eugen von Savoyen erbaute Schlossanlage.");
var location3 = new Loca("Hofburg", "1010 Vienna", "Michaelerkuppel", "img/hofburg.jpg", "https://www.hofburg-wien.at/", "Created: 10.05.2020 - 16:30", "Die Hofburg zu Wien war vom 13. Jahrhundert bis 1918 die Residenz der Habsburger in Wien. Seit Ende 1946 Amtssitz...");
var location4 = new Loca("Prater", "1020 Vienna", "U-Bahn: U1, U2 - Praterstern", "img/prater1.jpg", "https://www.wienerriesenrad.com/de/anreise", "Created: 16.05.2020 - 13:35", "Abenteuer, Tradition & Wiener Charme zugleich - kein anderer Ort versprüht so viel Lebensfreude wie der Wiener Prater.");
var restaurant1 = new Rest("Dstrikt Steakhouse", "1010 Vienna", "Schubertring 7", "img1/dstrikt-steakhouse.jpg", "https://www.dstrikt.com/", "Created: 06.06.2020 - 16:20 ", "Aus Leidenschaft für unvergessliche Momente, vereint das Dstrikt Flair und Perfektion zu einer facettenreichen Steakhouse Erfahrung.", " +43 131 188 616", "img/call.png");
var restaurant2 = new Rest("Das LOFT", "1020 Vienna", "Praterstraße 1", "img1/das-loft.jpg", "https://www.dasloftwien.at/", "Created: 06.06.2020 - 19:00 ", "Wenn die Sonne in Wien untergeht, erwacht Das LOFT erst wirklich zum Leben. Abends empfangen wir Sie gerne bei uns im Barbereich auf einen Cocktail.", "+43 906 168 110", "img/call.png");
var restaurant3 = new Rest("SKY", "1010 Vienna", "Kärntner Str.19", "img1/SKY.jpg", "https://www.steffl-vienna.at/de/skybar/", "Created: 13.06.2020 - 19:30", " Dank der einzigartigen Glaskonstruktion der Sky Bar & des Sky Restaurants haben Sie einen fantastischen Blick über die Dächer Wiens", "+43 151 317 12", "img/call.png");
var restaurant4 = new Rest("The View", "1020 Vienna", "Handelskai 265", "img1/the-view.jpg", "http://www.theview.at/", "Created: 14.06.2020 - 08:30", "Genießen Sie kulinarische Klassiker hausgemacht und täglich neu interpretiert.Es erwartet Sie eine gelungene Pause vom Alltag in herzlich-familiärer Atmosphäre.", "+43 189 083 74", "img/call.png");
var event1 = new Events("Aerosmith", "15. Juli 2021 - 19:30", "1150 Vienna", "img1/Aerosmith.jpg", "https://www.stadthalle.com/de/schauen/events/967/Aerosmith-Neuer-Termin", "Created: 20.06.2020 - 19:45", "Aerosmith sind eine der erfolgreichsten Rock-Bands der Welt!", "Stadthalle Roland-Rainer-Platz 1", "Ticket Preis: 88-347€");
var event2 = new Events("Lights Festival", "1. August 2020 - 17:00", "1210 Vienna", "img1/light-festival.jpg", "https://www.events.at/e/lichterfest-an-der-alten-donau", "Created: Soon", "Auch 2020 gibt es wieder das traditionelle Lichterfest an der Alten Donau.", "Floridsdorf Alte Donau", "Ticket Preis: freier Eintritt");
var event3 = new Events("Donauinselfest", "18.- 20. September 2020 - 20:30", "1210 Vienna", "img1/Donauinselfest.jpg", "https://donauinselfest.at/?nofade", "Created: Soon", "3 Tage im Jahr bieten wir den BesucherInnen aus aller Welt ein Programm, das einzigartig ist.", "Donauinsel", "Ticket Preis: freier Eintritt");
var event4 = new Events("Lost Social Festival", "31. Juli - 2. August 2020 - 18:45", "1020 Vienna ", "img1/lost-social.png", "https://www.volume.at/events/raf-camora-2020-07-31/", "Created: Soon", "The Lost Social Festival aims to take you back to a pre-smartphone era!", "Waldsteingartengasse 135", "Ticket Preis: 59.99€");
var array = [location1, location2, location3, location4, restaurant1, restaurant2, restaurant3, restaurant4, event1, event2, event3, event4];
for (var i = 0; i < array.length; i++) {
    if (i == 0) {
        document.getElementById('row').innerHTML +=
            "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t<br>\n\t\t\t<h1 class=\"Text\" style=\"color:#2F4F4F;\">Place/Location</h1>\n\t\t\t<br>\n\t\t</div>\n\t\t<div class=\"w-100\">\n\t\t</div>";
    }
    else if (i == 4) {
        document.getElementById('row').innerHTML +=
            "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t<br>\n\t\t\t<h1 class=\"Text\" style=\"color:#3A6073;\">Restaurant</h1>\n\t\t\t<br>\n\t\t</div>\n\t\t<div class=\"w-100\">\n\t\t</div>";
    }
    else if (i == 8) {
        document.getElementById('row').innerHTML +=
            "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t<br>\n\t\t\t<h1 class=\"Text\" style=\"color:#2F4F4F;\" >Events</h1>\n\t\t\t<br>\n\t\t</div>\n\t\t<div class=\"w-100\">\n\t\t</div>";
    }
    array[i].display();
}
/*console.log(array);
console.log(array[0].display());
console.log(array[1].display());*/
/*console.log(array[0].info());*/
/*console.log(wholeInfo.infos());*/ 
