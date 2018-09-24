let celebrities = [
    {
         name: "Quaid-e-Azam",
        title: "Great Leader",
        moreInfoURL: "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
        imgURL: "quaid-e-azam.jpg",
        quote: "I am proud of my work for my country."
        
    }, 
    {
        name: "Allama Iqbal",
        title: "Best poet",
        moreInfoURL: "https://en.wikipedia.org/wiki/Muhammad_Iqbal",
        imgURL: "allama-iqbal.png",
        quote: "Words, without power, is mere philosophy."
        
    },
    {
    
        name: "Major Aziz Bhatti",
        title: "Nishan-E-Haider",
        moreInfoURL: "https://en.wikipedia.org/wiki/Raja_Aziz_Bhatti",
        imgURL: "aziz.jpg",
        quote: " Do not call me back; I will shed the last drop of my blood in the defence of my dear homeland."
    },
    {
    	name: "Liaquat Ali Khan",
        title: "First Prime Minister of Pakistan",
        moreInfoURL: "https://en.wikipedia.org/wiki/Liaquat_Ali_Khan",
        imgURL: "download.jpg",
        quote: "THE PRIME MINISTER OF A POOR COUNTRY CANNOT AFFORD TO HAVE NEW CLOTHES, LAVISH FOOD AND PERSONAL HOME FOR HIS SELF."
    },
    {
        name: "Zulfiqar Ali Bhutto",
        title: " Politician ",
        moreInfoURL: "https://en.wikipedia.org/wiki/Zulfikar_Ali_Bhutto",
        imgURL: "but.jpg",
        quote: " This nation will become a great nation, this nation will become the backbone of the world."
    },
     {
    
        name: "Muhammad Zia, Ul Haq",
        title: "Four-star general",
        moreInfoURL:"https://en.wikipedia.org/wiki/Muhammad_Zia-ul-Haq",
        imgURL: "zia_ulhaq.jpg",
        quote: "'With the help of the Almighty Allah, the armed forces will do everything we can to insure stability."
    },
     {
    
        name: "Abdul Qadeer Khan",
        title: "Nuclear Physicist",
        moreInfoURL: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
        imgURL: "abdul-qadir-khan.jpg",
        quote: "People go out of their way to show the love and respect for me. It is very gratifying."
    }, 
     {
    
        name: "Abdul Sattar Edhi",
        title: "Founder of Edhi Center",
        moreInfoURL: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
        imgURL: "edhi.jpg",
        quote: "People have become educated, but have not yet become human."
    } 
]
function initialize() {
    // let bodyEl = document.querySelector("body");
    let celebritiesGroupEl = document.querySelector("#celebrities-list");
    for(let i = 0 ; i < celebrities.length; i++) {
        // bodyEl.innerHTML +=
        celebritiesGroupEl.innerHTML +=  `
        
        <div class="celebrity-img-div"
        style="background-image: url('images/${celebrities[i].imgURL}')" onclick="changeCeleb(${i})">
            <p class="celeb-img-text">${celebrities[i].name}</p>
        </div>
        `
    }
    changeCeleb(0);
}
function changeCeleb(celebIndex) {
    console.log(celebrities[celebIndex].name);
    document.querySelector("#celeb-name").innerHTML = celebrities[celebIndex].name;
    document.querySelector("#celeb-title").innerHTML = celebrities[celebIndex].title;
    // let rand1 = Math.floor(Math.random() * 255);
    // let rand2 = Math.floor(Math.random() * 255);
    // let rand3 = Math.floor(Math.random() * 255);
    // // document.querySelector("#")
    document.querySelector("#celebrity-img").style["background-image"] = `url(images/${celebrities[celebIndex].imgURL})`;
    document.querySelector("#celeb-quote").innerHTML = celebrities[celebIndex].quote;
    document.querySelector("#celeb-link a").href= celebrities[celebIndex].moreInfoURL;
}