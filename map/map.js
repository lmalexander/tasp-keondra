console.log("and it is I, the javascript behind the leaflet map")

// >>>>> MBLDC DATA ARRAY
// !!! add IDs for each listing & return to map point and listing card
// ^ index positions: 0-venue name, 1-address, 2-latitude, 3-longitude, 4-category tag, 5-img tag, 6-audio tag, 7-external weblink
 let mapPoints = [

    ["Harambee House Hotel", "2225 Georgia Ave, NW, Washington DC 20059", 38.9200080201834, -77.0216320019951, "hotel" , "./../media/imgs/harambee-house-flickr.jpg", false, "https://www.flickr.com/photos/streetsofdc/50146812063/in/photostream/"],
    ["Lammas" ,"321 7th St SE, Washington, DC 20003",38.88568993,-76.9963528, "category", "./../media/imgs/ToniAsanteLightfoot.png", "./../media/audio/ToniAsanteLightfootIntro_IYM_MillenniumStage2014_YT.m4a", false],
    ["Howard University","2441 6th St NW, Washington, DC, 20059",38.92362955,-77.01939635, "university" , "./../media/imgs/mbldc-ph_rect.png" , ],
    ["P Street Beach","23rd and P Streets NW, Washington, DC 20037",38.90984334,-77.04931314, "category", "./../media/imgs/mbldc-ph_sq.png"],
    ["La Zambra","1406 14th St NW, Washington, DC 20005",38.90933825,-77.0322407, "category", "./../media/imgs/mbldc-ph_rect.png" ,],
    ["Lambda Rising","2012 S St., NW, Washington, DC, 20009",38.91487814,-77.04561905, "category", "./../media/imgs/mbldc-ph_sq.png"],
    ["Market 5 Gallery","7th and C Street Southeast, North Carolina Avenue, Washington, DC 20002",38.886188,-76.99610583, "artspace", "./../media/imgs/mbldc-ph_rect.png" ,],
    ["Politics and Prose","5015 Connecticut Ave NW, Washington, DC 20008",38.95566953,-77.06925906, "bookstore", "./../media/imgs/mbldc-ph_sq.png"],
    ["Vertigo","1337 Connecticut Ave NW, Washington, DC 20036",38.90843581,-77.04230364, "category", "./../media/imgs/mbldc-ph_rect.png" ,],
    ["Smithsonian, S. Dillion Ripley Center","1100 Jefferson Dr SW, Washington, DC 20560",38.88878175,-77.02692645, "museum", "./../media/imgs/mbldc-ph_sq.png" ,],
    ["Smithsonian, Ring Auditorium Hirshorn Museum and Scuplture Garden","Independence Ave and 7th St Washington, DC 20560",38.8877182,-77.02193819, "museum", "./../media/imgs/mbldc-ph_rect.png" ,],
    ["Gala Hispanic Theatre","1625 Park Rd NW, Washington, DC 20010",38.93250105,-77.03769676, "theater", "./../media/imgs/mbldc-ph_sq.png"],
    ["Republic Gardens","1355 U St NW, Washington, DC 20009",38.91749813,-77.03120432, "category", "./../media/imgs/mbldc-ph_rect.png" ,],
    ["University of District of Columbia" ,"4200 Connecticut Ave NW, Washington, DC 20008",38.94478149,-77.06349722, "university", "./../media/imgs/mbldc-ph_sq.png" ,],
    ["Olsson's Books and Records","1200 F St NW, Washington, DC 20004",38.89722668,-77.02850462, "bookstore", "./../media/imgs/mbldc-ph_rect.png" ,],
    ["Sister's Space and Books","1354 U St NW, Washington, DC 20009",38.91701734,-77.03142594, "bookstore", "./../media/imgs/mbldc-ph_sq.png" ,],
    ["Martin Luther King Memorial Library","901 G St NW, Washington, DC 20001",38.89886597,-77.0247959, "library"],
    ["Kennedy Center","2700 F St NW, Washington, DC 20566",38.89690548,-77.05562512 , "artspace"],
    ["District of Columbia Arts Center","2418 18th St NW, Washington, DC 20009",38.92141237,-77.04242719, "artspace"],
    ["The Barns of Wolf Trap","1635 Trap Rd, Vienna, VA 22182",38.93274067,-77.26552605, "category"],
    ["WPA" ,"400 7th St NW, Washington, DC 20004",38.89514603,-77.02206692, "category"],
    ["Luna Books" ,"1633 P St NW, Washington, DC 20036",38.90988826,-77.03797502, "bookstore"],
    ["It's Your Mug duplicate" ,"2601 P St NW, Washington, DC 20007",38.90969195,-77.05491834, "cafe"],
    ["Howard University Campus, Blackburn Center","2397 6th St NW, Washington, DC 20059",38.92262401,-77.02086927, "university"],
    ["Atticus Books & Music","1508 U St NW, Washington, DC 20009",38.91692234,-77.0349508, "bookstore"],
    ["Reprint Book Shop" ,"455 L'Enfant Plaza SW, Washington, DC 20024",38.8843295,-77.0255192, "bookstore"],
    ["Mango's Cafe","2014 14th St NW, Washington, DC 20009",38.91801374,-77.03244092, "cafe"],
    ["Women in the Life Office Lobby","1436 U St NW, Washington, DC 20009",38.9168744,-77.03362478],
    ["Smithsonian National Museum of American History","1300 Constitution Ave. NW, Washington, DC 20560",38.89148805,-77.03006163, "museum"],
    ["Borders Books, White Flint Mall ","11301 Rockville Pike, Kensington, MD 20895",39.04197127,-77.10726844, "bookstore"],
    ["Morgan's Cyber Cafe","1352 U St NW, Washington, DC 20009",38.91711047,-77.03156335, "cafe"],
    ["Cafe Bloom","3102 Mt Pleasant St NW, Washington, DC 20010",38.92919039,-77.03763913, "cafe"],
    ["Kaffa House duplicate","1212 U St NW, Washington, DC 20009",38.91695098,-77.02863585, "category"],
    ["Central Armature Warehouse","625 D St NW, Washington, DC 20004",38.89556928,-77.0209721, "category"],
    ["State of the Union" ,"1357 U St NW, Washington, DC 20009",38.91740742,-77.03133059, "category"],
    ["Towson State University" ,"8000 York Rd, Towson, MD 21252",39.39271936,-76.61260702, "university"],
    ["Spauldings Library","5811 Old Silver Hill Rd, District Heights, MD 20747",38.85320733,-76.90542116, "library"], 
    ["HR-57 Jazz and Blues Club Center","1426 9th St NW, Washington, DC 20001",38.90964219,-77.0243087, "bar"], 
    ["Bar Nun","1326 U St NW, Washington, DC 20009",38.91689245,-77.0307268, "bar"], 
    ["Dupont Plaza Hotel","1500 New Hampshire Ave NW, Washington, DC 20036",38.91069165,-77.04280764, "category"],   
    ["Summer School" ,"1201 17th St NW, Washington, DC 20036",38.90604646,-77.03829673, "category"],    
    ["Black Cat","1831 14th St NW, Washington, DC 20009",38.91521919,-77.03178987, "category"],    
    ["Anacostia Museum","1901 Fort Pl SE, Washington, DC 20020",38.85670065,-76.97676386, "museum"],    
    ["First Congregational Church","945 G St NW, Washington, DC 20001",38.89867977,-77.02577506, "church"],    
    ["Writer???s Center of Bethesda","4508 Walsh St, Chevy Chase, MD 20815",38.97940268,-77.09078048, "category"],    
    ["15 Minutes?","1030 15th St NW, Washington, DC 20005",38.90362196,-77.0350372, "category"],    
    ["Habana Village","2467 18th St NW, Washington, DC 20009",38.92237951,-77.04222015, "category"],    
    ["The National Museum of Women in the Arts","1250 New York Ave NW, Washington, DC 20005",38.90021212,-77.02909246, "museum"],    
    ["Koffa House" ,"1212 U St NW, Washington, DC 20009",38.91696768,-77.02848564, "category"],    
    ["Hand Chapel Mt. Vernon College","2100 Foxhall Rd NW, Washington, DC 20007",38.91831542,-77.08921876, "church"],    
    [ "Hine Junior High School","310 7th St SE, Washington, DC 20003",38.88614587,-76.99594829, "high school"],   
    ["Transafrica???s Arthur Ashe Library & W.E.B. Dubois Room","1744 R St NW, Washington, DC 20009",38.9125535,-77.04038422, "library"],    
    ["Sylvan Theater on the Mall","Independence Ave SW & 15th Street NW, Washington, DC 20024",38.88859131,-77.03446776, "theater"],    
    ["Central Armature Building","625 D St NW, Washington, DC 20004",38.89558598,-77.02107939, "category"],    
    ["Joe's Movement Emporium/ World Arts Focus, Inc.","3802 34th St, Mt Rainier, MD 20712",38.93695652,-76.96104196, "category"],    
    ["Smithsonian Institution Arts and Industries Building","900 Jefferson Dr SW, Washington, DC 20560",38.88833905,-77.02463239, "museum"],    
    ["Mary McLeod Bethune Council House","1318 Vermont Ave NW, Washington, DC 20005",38.90836021,-77.03102459, "category"],  
    ["Karibu","3500 East-West Hwy, Hyattsville, MD 20782",38.96852135,-76.95545509, "category"],   
    ["Cafe De Pare","2305 18th St NW, Washington, DC 20009",38.91999083,-77.04128284, "category"],   
    ["Trade","1732 P St NW, Washington, DC 20036",38.90964484,-77.03977053, "category"],    
    ["Hyattsville Library","6530 Adelphi Rd, Hyattsville, MD 20782",38.96950689,-76.95085675, "library"],  
    ["Barnes & Nobles","3040 M St NW, Washington, DC 20007",38.90515711,-77.06060792, "bookstore"],   
    ["University of the District of Columbia Performing Arts Center","4200 Connecticut Ave NW, Washington, DC 20008",38.94416316,-77.06436547, "university"],   
    ["Folger Shakespeare Library","201 E Capitol St SE, Washington, DC 20003",38.8896124,-77.00268266, "library"],   
    ["Duke Ellington School of Performing Arts","3500 R St NW, Washington, DC 20007",38.91337069,-77.07035095, "high school"],    
    ["Radisson Barcelo Hotel","2121 P St NW, Washington, DC 20037",38.91008264,-77.04759006, "hotel"],   
    ["Southwest Public Library","900 Wesley Pl SW, Washington, DC 20024",38.87882635,-77.01578217, "library"],   
    ["Union Institute Metropolitan Community Church","474 Ridge St NW, Washington, DC 20001",38.9064811,-77.01866156, "church"],  
    ["The Edge","56 L St NW, Washington, DC 20002",38.90386726,-77.01092357, "category"],   
    ["Arts Club of Washington","2017 I St NW, Washington, DC 20006",38.90165481,-77.04562816, "club"],   
    ["Sankofa Video and Bookstore","2714 Georgia Ave NW, Washington, DC 20001",38.92569128,-77.02303713, "bookstore"],    
    ["Washington Plaza Hotel","10 Thomas Cir NW, Washington, DC 20005",38.9064104,-77.03084661, "hotel"],    
    ["Union Institute???s Center for Women","1710 Rhode Island Ave NE, Washington, DC 20018",38.92764811,-76.98025686, "community center"],  
    ["Jewish Community Center","1529 16th St NW, Washington, DC 20036",38.9110363,-77.03584899, "community center"],   
    ["Women in the Life" , "1611 Connecticut Ave. NW DC 20009" ,38.91182605,-77.04412821, "magazine"],   
    ["Sisterspace and Books","1515 U St NW, Washington, DC 20009",38.91736429,-77.03517314, "bookstore"],   
    ["Library of Congress","101 Independence Ave SE, Washington, DC 20540",38.88880089,-77.00454734, "library"],    
    ["Nob Hill","1101 Kenyon St NW, Washington, DC 20010",38.93000763,-77.02805195, "category"],  
    ["Women in the Life office","1623 Connecticut Ave NW, Washington, DC 20009",38.91207524,-77.04433822, "category"],  
    ["Renaissance Hotel" ,"999 9th St NW, Washington, DC 20001",38.90187627,-77.02381167, "hotel"],  
    ["It's Your Mug","2601 P St NW, Washington, DC 20007",38.9096836,-77.05492907, "cafe"],   
    ["Vertigo Books","1337 Connecticut Ave NW, Washington, DC 20036",38.90849425,-77.04228219, "bookstore"],  
    ["Cafe de Pare","2305 18th Street NW, Washington, DC 20009",38.92004091,-77.0413794, "cafe"],  
    ["D.C. Arts Center (DCAC)","2438 18th St NW, Washington, DC 20009",38.92177327,-77.04268474, "gallery"],  
    ["Fort Totten Metro Station","550 Galloway St NE, Washington, DC 20011",38.95197756,-77.00211924, "metro"],  
    ["House of Ruth","651 10th St NE, Washington, DC 20002",38.89889277,-76.99225664, "category"],  
    ["MoBlack","29 Kings Ct SE, Washington, DC 20003",38.8864131,-76.98473874, "category"],  
    ["She Company Inc","2022 Columbia Rd NW Ste 105, Washington, DC 20009",38.91755112,-77.0455673, "category"],   
    ["Warehouse Theater" , "1017 Seventh St NW 20001" , 38.90378681,-77.02160686, "theater"],  
    ["Lamond-Riggs Library","5401 South Dakota Avenue NE, Washington, DC 20011",38.95536196,-76.99950942, "library"],  
    ["Joy of Motion Friendship Heights","5207 Wisconsin Ave NW, Washington, DC 20015",38.95772432,-77.08379479, "category"],   
    
];

console.log(mapPoints[1][4]);
console.log(mapPoints[1][5]);
console.log(mapPoints[1][6]);

// >>>>> LEAFLET.JS MAP 

// *1 - grab map div from DOM
pageMap = document.getElementById("map");

// *2 - create map & set main view center 
// ^ current center: Logan Circle | latitude = 38.909142, longitude -77.029793
map = L.map(pageMap).setView({lon: -77.029793, lat: 38.909142}, 14.5);

// *3 - add OpenStreetMap tile
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// *4 - show scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);

// *5 - add map points: loop through mapPoints array to add map points to leaflet map
 for (let index = 0; index < mapPoints.length; index++) {
    // a. store mapPoints data in variable
    let lat = mapPoints[index][2];
    let lon = mapPoints[index][3];
    let popup = mapPoints[index][0] + "<br>" + "Address: " + mapPoints[index][1];
    
    // b. create map marker from var data
    let pointLoc = new L.LatLng(lat, lon);
    let pointMarker = new L.Marker(pointLoc);
    
    // c. add marker to DOM map
    map.addLayer(pointMarker);
    pointMarker.bindPopup(popup);
}

// >>>>> MAP LISTING CARDS
// *1 - grab mapCards div from DOM
let mapCards = document.getElementById("map-cards");

// *2 - loop through mapPoints to create and add listing card for each
for (let index = 0; index < mapPoints.length; index++) {
    // a. create card column to go in DOM map-cards row
    let cardCol = document.createElement("div");
    cardCol.className = "col";

    // b. create card element
    let card = document.createElement("div");
    card.className = "card grid-item";

    // c. create card body
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // d. create card title & store mapPoints data
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title"
    cardTitle.innerText = mapPoints[index][0];

    // create card category & store mapPoints data
    let cardCat = document.createElement("h6")
    cardCat.className = "card-subtitle";
    cardCat.innerText = mapPoints[index][4];

    // e. create card text & store mapPoints data
    let cardText = document.createElement("p");
    cardText.className = "card-text"
    cardText.innerText = mapPoints[index][1];

    // create card img & store mapPoints img tag
    let cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.setAttribute("src", mapPoints[index][5]);

    // create card audio & store mapPoints data
    let cardAudio = document.createElement("audio");
    cardAudio.setAttribute("src", mapPoints[index][6]);
    cardAudio.setAttribute("onmouseover", "listAudio()");


    // create card link & store mapPoints external links
    let cardExtUrl = document.createElement("a");
    cardExtUrl.className = "btn btn-primary";
    cardExtUrl.setAttribute("href", mapPoints[index][7]);
    cardExtUrl.setAttribute("target", "blank")
    cardExtUrl.innerText = "Read More"


    // create modal button
    let cardModalBtn = document.createElement("button");
    cardModalBtn.className = "btn btn-primary";
    cardModalBtn.setAttribute("type","button")
    cardModalBtn.setAttribute("data-bs-toggle","modal");
    cardModalBtn.setAttribute("data-bs-target", "#exampleModal");
    cardModalBtn.innerText = "modal btn";

    // f. append card elements to card; append card to card column
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardCat);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardModalBtn);
    cardBody.appendChild(cardExtUrl);
    cardBody.appendChild(cardAudio);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
   // cardCol.appendChild(card);
    
    // g. append card column to DOM card row div
  //  mapCards.appendChild(cardCol);
    mapCards.appendChild(card);
};
    
let listAudio = document.getElementsByTagName("audio");
function playAudio() {
    listAudio.play();
}


