const fs = require('fs');
const path = require('path');

const imagesRoot = `C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\HouseplantDatabase\\images`;
const outputFolder = `C:\\Users\\matsp\\Desktop\\Libruary\\Studio Monstera website\\website code\\HouseplantDatabase\\plant-info`;

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

const plantFolders = fs.readdirSync(imagesRoot, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

plantFolders.forEach(folderName => {
    try {
        const folderPath = path.join(imagesRoot, folderName);

        const images = fs.readdirSync(folderPath)
            .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
            .sort((a, b) => {
                const numA = parseInt(a.match(/\d+/)?.[0] || 0);
                const numB = parseInt(b.match(/\d+/)?.[0] || 0);
                return numA - numB;
            });

        if (images.length === 0) {
            console.warn(`No images found for ${folderName}`);
            return;
        }

        const latinName = folderName;

        const mainImage = `images/${folderName}/${images[0]}`;

        const subImages = images.map(img => `images/${folderName}/${img}`);

        const fileName = latinName
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9\-']/g, '') + '.json';

        const filePath = path.join(outputFolder, fileName);

        const content = `Please fill this in and select all that apply. The // is info that needs to be followed, before returning me the filled in version, remove all // info. 
Take your time filling this in to ensure the correct info is provided. Do not add anything that is not specified already. When a category should be empty, like autumn colours with a Picea abies, leave this category empty. []
Any thoughts, suggestions, etc, can be told to me at the end, without changing anything in the filled in format. Always return me a copy and paste file like a code snippet. 
Explain why you made every decision. 

{
    "LATIN NAME": "${latinName}",
    "MAIN IMAGE": "${mainImage}",
    "FAMILY": "Text",
    "TYPE OF PLANT": ["Air plants","Aquatic plants","Aroids","Cacti","Carnivorous plants","Dry climate ornamentals","Ferns","Palms","(Sub)tropical ornamentals","Succulents"],
    "LEAF COLOR": ["Black","Blue","Brown","Green","Grey","Orange","Pink","Purple","Red","White","Yellow"],
    "VARIEGATION COLOR": ["Cream variegation","Green variegation","Orange variegation","Pink variegation","Purple variegation","Red variegation","Silver variegation","White variegation","Yellow variegation"],
    //The most common variegation is Marbled and Splash variegation, with marbled being small splotches and Splash being larger splashes. Both tags are almost always applied together, and these plants often also show patches that are larger and become sectoral variegaton. If need be add all three of these tags (For example Monstera albo). Mint variegation is when the splotches are ALL so small that it almost looks like a lighter colour. Mottled is when the plants variegation looks a bit sick, mosaic is when ALL the blobs are sectoral but small in comparison to the overal leaf size. For exapmle Musa florida. So sectoral variegation is only when its a substantial size (for example +1/4) of the overal leaf size. The other variegations speak for themselves and any other missing variegation types are to much of an edge case to add and usually fall under splash, marble or striped.  
    "VARIEGATION TYPE": ["Central variegation","Marbled variegation","Marginata variegation","Mosaic variegation","Mint variegation","Mottled variegation","Sectoral variegation","Splash variegation","Spotted variegation","Striped variegation"],
    "FLOWER COLOR": ["Black flowers","Blue flowers","Brown flowers","Green flowers","Orange flowers","Pink flowers","Purple flowers","Red flowers","White flowers","Yellow flowers"],
    "GROWTH TYPE": ["Bushy","Climbing plant","Crawling plant","Epiphyte","Hanging plant","Indoor tree"],
    "HEIGHT (excl. climbing)": [">10cm high","10-20cm high","20-50cm high","50-100cm high","1-2m high","2-5m high","+5m high"],
    "WIDTH (excl. climbing)": [">10cm wide","10-20cm wide","20-50cm wide","50-100cm wide","1-2m wide","2-5m wide"],
    "LEAF SIZE (Maximum)": ["1cm","1-10cm","10-25cm","25-50cm","50-100cm","1-2m","+2m"],
    "LEAF TEXTURE": ["Smooth","Glossy","Velvet","Corrugated","Thick","Delicate"],
    "SPECIAL FEATURES": ["Air purifying","Edible fruit","Fenestrations","Ornamental flowers","Pest sensitive","Pet friendly","Spikes","Variegated"],
    "LIGHT": ["Direct light","Bright indirect light","Indirect light"],
    "WATERING": ["Keep submerged or floating","Keep soil saturated","Keep soil moist but don't saturate","Water when top layer of soil is dry","Let soil dry out between watering","Infrequent thorough watering"],
    "SUBSTRATE": ["arid and water retentive (moss)","arid (bark)","arid soil (soil and perlite)","regular soil"],
    "NUTRIENTS": ["Nutrient-rich","Moderate nutrients","Nutrient-poor"],
    "RELATIVE HUMIDITY": ["20-40% RH","40-60% RH","60-80% RH",">80% RH"],
    "TEMPERATURE": ["0-5°C","5-12°C","12-18°C","18-25°C","25-30°C","+30°C"],
    "ORIGIN": ["Africa","Asia","Australia","Europe","North America","South America","Pacific Islands"],
    "HABITAT": ["Tropical rainforest","Tropical highland rainforest","Subtropical forest","Swamp and marshland","River and Lake","Desert","Savannah"],
    "ORIGIN STATUS": ["Cultivar","Hybrid","Wild plant"],
    "GROWTH RATE": ["Slow growth","Fast growth","Regular growth","Increased leaf size when climbing"],
    "RARITY": ["rarity 1-2/10","rarity 3-5/10","rarity 6-7/10","rarity 8-9/10","rarity 10/10"],
    "DIFFICULTY": ["Beginner friendly","Moderate","Challenging"],
    "NOTE": "Text",
    "SUB IMAGES":${JSON.stringify(subImages, null, 4)}
}`;

        fs.writeFileSync(filePath, content, 'utf-8');

    } catch (err) {
        console.error('Error processing:', folderName, err);
    }
});

console.log('All JSON prompt files created!');