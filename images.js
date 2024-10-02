const images = [
    {
        name: "Abelia x grandiflora",
        src: "images/Abelia x grandiflora.jpg",
        tags: ["pink", "white", "summer", "autumn", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Abelia"
    },
    {
        name: "Acaena microphylla",
        src: "images/Acaena microphylla.jpg",
        tags: ["red", "summer", "<20cm", "full sunlight", "half shade", "well-drained soil", "ground cover", "fruit"],
        dutch_name: "Stekelnootje"
    },
    {
        name: "Acanthus mollis",
        src: "images/Acanthus mollis.jpg",
        tags: ["white", "purple", "summer", "50-100cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Zachte acant(hus)"
    },
    {
        name: "Acer campestre",
        src: "images/Acer campestre.jpg",
        tags: ["yellow", "green", "spring", ">10m", "full sunlight", "half shade", "well-drained soil", "tree", "native"],
        dutch_name: "Spaanse aak"
    },
    {
        name: "Acer platanoides",
        src: "images/Acer platanoides.jpg",
        tags: ["yellow", "red", "spring", ">10m", "full sunlight", "half shade", "well-drained soil", "tree", "native"],
        dutch_name: "Noorse esdoorn"
    },
    {
        name: "Acer pseudoplatanus",
        src: "images/Acer pseudoplatanus.jpg",
        tags: ["yellow", "spring", ">10m", "full sunlight", "half shade", "well-drained soil", "tree", "native"],
        dutch_name: "Gewone esdoorn"
    },
    {
        name: "Achillea 'Coronation Gold'",
        src: "images/Achillea 'Coronation Gold'.jpg",
        tags: ["yellow", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Duizendblad"
    },
    {
        name: "Aconitum napellus",
        src: "images/Aconitum napellus.jpg",
        tags: ["blue", "purple", "white", "summer", "150-200cm", "shade", "moist soil", "perennial", "toxic"],
        dutch_name: "Blauwe monnikskap"
    },
    {
        name: "Actaea simplex 'White Pearl'",
        src: "images/Actaea simplex 'White Pearl'.jpg",
        tags: ["white", "autumn", "150-200cm", "shade", "moist soil", "perennial", "berries"],
        dutch_name: "Zilverkaars"
    },
    {
        name: "Actinidia kolomikta",
        src: "images/Actinidia kolomikta.jpeg",
        tags: ["white", "summer", "5-10m", "full sunlight", "well-drained soil", "climbing plant", "fruit", "edible (partly)"],
        dutch_name: "Kolomikta kiwi"
    },
    {
        name: "Agastache 'Blue Fortune'",
        src: "images/Agastache 'Blue Fortune'.jpg",
        tags: ["blue", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)", "aromatic"],
        dutch_name: "Dropplant / Anijsnetel"
    },
    {
        name: "Ajuga reptans 'Atropurpurea'",
        src: "images/Ajuga reptans 'Atropurpurea'.jpg",
        tags: ["purple", "spring", "<20cm", "shade", "moist soil", "ground cover", "evergreen"],
        dutch_name: "Kruipend zenegroen"
    },
    {
        name: "Akebia quinata",
        src: "images/Akebia quinata.jpg",
        tags: ["purple", "spring", "5-10m", "full-sunlight", "half shade", "well-drained soil", "climbing plant", "aromatic", "fruit", "edible (partly)"],
        dutch_name: "Klimaugurk / Chocoladewingerd"
    },
    {
        name: "Alcea rosea",
        src: "images/Alcea rosea.jpg",
        tags: ["pink", "red", "white", "yellow", "summer", "150-200cm", "full sunlight", "well-drained soil", "biennial", "edible (partly)"],
        dutch_name: "Echte stokroos"
    },
    {
        name: "Alchemilla mollis",
        src: "images/Alchemilla mollis.jpeg",
        tags: ["green", "yellow", "summer", "<20cm", "shade", "moist soil", "ground cover"],
        dutch_name: "Zachte vrouwenmantel"
    },
    {
        name: "Alnus glutinosa",
        src: "images/Alnus glutinosa.jpg",
        tags: ["catkins", "spring", ">10m", "full sunlight", "half shade", "moist soil", "tree", "native"],
        dutch_name: "Zwarte els"
    },
    {
        name: "Alnus incana",
        src: "images/Alnus incana.jpg",
        tags: ["catkins", "spring", ">10m", "full sunlight", "half shade", "moist soil", "tree", "native"],
        dutch_name: "Witte els"
    },
    {
        name: "Amelanchier ovalis",
        src: "images/Amelanchier ovalis.jpg",
        tags: ["white", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "tree", "berries", "edible (partly)", "aromatic"],
        dutch_name: "Europees krentenboompje"
    },
    {
        name: "Ampelopsis glandulosa 'Elegans'",
        src: "images/Ampelopsis glandulosa 'Elegans'.jpg",
        tags: ["green", "summer", "2-3m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "berries"],
        dutch_name: "Bonte wingerd"
    },
    {
        name: "Anaphalis triplinervis",
        src: "images/Anaphalis triplinervis.jpg",
        tags: ["white", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Siberische edelweiss"
    },
    {
        name: "Anemone x hybrida 'Honorine Jobert'",
        src: "images/Anemone x hybrida 'Honorine Jobert'.jpg",
        tags: ["white", "autumn", "50-100cm", "shade", "moist soil", "perennial"],
        dutch_name: "Herfstanemoon / Japanse anemoon"
    },
    {
        name: "Aquilegia vulgaris",
        src: "images/Aquilegia vulgaris.jpg",
        tags: ["blue", "purple", "red", "pink", "spring", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Gewone akelei"
    },
    {
        name: "Aristolochia macrophylla",
        src: "images/Aristolochia macrophylla.jpg",
        tags: ["yellow", "spring", "5-10m", "half shade", "well-drained soil", "climbing plant"],
        dutch_name: "Duitse pijp(bloem)"
    },
    {
        name: "Aronia melanocarpa",
        src: "images/Aronia melanocarpa.jpg",
        tags: ["white", "autumn", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible (partly)", "aromatic"],
        dutch_name: "Appelbes"
    },
    {
        name: "Artemisia lactiflora 'Elfenbein'",
        src: "images/Artemisia lactiflora 'Elfenbein'.jpg",
        tags: ["white", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Alsem / Edelruit"
    },
    {
        name: "Aruncus dioicus",
        src: "images/Aruncus dioicus.jpg",
        tags: ["white", "summer", "150-200cm", "shade", "moist soil", "perennial"],
        dutch_name: "Gewone geitenbaard"
    },
    {
        name: "Asarum europaeum",
        src: "images/Asarum europaeum.jpg",
        tags: ["brown", "spring", "<20cm", "shade", "moist soil", "ground cover", "evergreen"],
        dutch_name: "Mansoor"
    },
    {
        name: "Aster amellus 'Veilchenkönigin'",
        src: "images/Aster amellus 'Veilchenkönigin'.jpg",
        tags: ["purple", "autumn", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Aster"
    },
    {
        name: "Aster divaricatus",
        src: "images/Aster divaricatus.jpg",
        tags: ["white", "autumn", "50-100cm", "shade", "moist soil", "perennial"],
        dutch_name: "(Bos)aster"
    },
    {
        name: "Aster lateriflorus 'Horizontalis'",
        src: "images/Aster lateriflorus 'Horizontalis'.jpg",
        tags: ["white", "pink", "autumn", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Aster"
    },
    {
        name: "Aster novae-angliae 'Andenken an Alma Pötschke'",
        src: "images/Aster novae-angliae 'Andenken an Alma Pötschke'.jpg",
        tags: ["pink", "autumn", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Aster"
    },
    {
        name: "Aster 'Prof. Anton Kippenberg'",
        src: "images/Aster 'Prof. Anton Kippenberg'.jpeg",
        tags: ["purple", "autumn", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Aster"
    },
    {
        name: "Aster x frikartii 'Mönch'",
        src: "images/Aster x frikartii 'Mönch'.jpg",
        tags: ["yellow", "purple", "autumn", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Aster"
    },   
    {
        name: "Astilbe chinensis 'Pumila'",
        src: "images/Astilbe chinensis 'Pumila'.jpg",
        tags: ["pink", "summer", "20-50cm", "shade", "moist soil", "perennial"],
        dutch_name: "Pluimspirea"
    },
    {
        name: "Astilboides tabularis",
        src: "images/Astilboides tabularis.jpg",
        tags: ["white", "summer", "50-100cm", "shade", "moist soil", "perennial", "large leaves"],
        dutch_name: "Tafelblad"
    },    
    {
        name: "Astrantia major",
        src: "images/Astrantia major.jpg",
        tags: ["white", "pink", "red", "summer", "50-100cm", "shade", "moist soil", "perennial"],
        dutch_name: "Zeeuws knoopje"
    },
    {
        name: "Bergenia 'Bressingham Ruby'",
        src: "images/Bergenia 'Bressingham Ruby'.jpg",
        tags: ["red", "spring", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Schoenlappersplant"
    },
    {
        name: "Betula pendula",
        src: "images/Betula pendula.jpg",
        tags: ["catkins", "spring", ">10m", "full sunlight", "half shade", "well-drained soil", "tree", "native"],
        dutch_name: "Ruwe berk"
    },
    {
        name: "Betula pubescens",
        src: "images/Betula pubescens.jpg",
        tags: ["catkins", "spring", ">10m", "full sunlight", "half shade", "moist soil", "tree", "native"],
        dutch_name: "Zachte berk"
    },
    {
        name: "Brunnera macrophylla 'Jack Frost'",
        src: "images/Brunnera macrophylla 'Jack Frost'.jpg",
        tags: ["blue", "white", "20-50cm", "shade", "well-drained soil", "perennial"],
        dutch_name: "Kaukasische vergeet-mij-niet"
    },
    {
        name: "Buddleja davidii",
        src: "images/Buddleja davidii.jpg",
        tags: ["purple", "white", "summer", "2-3m", "full sunlight", "well-drained soil", "bush"],
        dutch_name: "Vlinderstruik / Herfstsering"
    },
    {
        name: "Buxus sempervirens",
        src: "images/Buxus sempervirens.jpg",
        tags: ["green", "spring", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush", "hedge", "evergreen"],
        dutch_name: "Buxus / Palmboompje"
    },
    {
        name: "Calamintha nepeta subsp. nepeta",
        src: "images/Calamintha nepeta subsp. nepeta.jpg",
        tags: ["white", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)", "aromatic"],
        dutch_name: "Kleinbloemige steentijm"
    },
    {
        name: "Campanula lactiflora 'Loddon Anna'",
        src: "images/Campanula lactiflora 'Loddon Anna'.jpg",
        tags: ["white", "summer", "100-150cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Klokje"
    },
    {
        name: "Campsis radicans",
        src: "images/Campsis radicans.jpg",
        tags: ["yellow", "orange", "autumn", "summer", "5-10m", "full sunlight", "well-drained soil", "climbing plant", "voedsel"],
        dutch_name: "Amerikaanse trompetklimmer"
    },
    {
        name: "Carpinus betulus",
        src: "images/Carpinus betulus.jpg",
        tags: ["catkins", "spring", ">10m", "full sunlight", "half shade", "well-drained soil", "tree", "hedge", "native"],
        dutch_name: "Haagbeuk"
    },
    {
        name: "Centranthus ruber 'Coccineus'",
        src: "images/Centranthus ruber 'Coccineus'.jpg",
        tags: ["red", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Rode Valeriaan / Rode spoorbloem"
    },
    {
        name: "Ceratostigma plumbaginoides",
        src: "images/Ceratostigma plumbaginoides.jpg",
        tags: ["blue", "summer", "20-50cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Loodkruid"
    },
    {
        name: "Chaenomeles x superba",
        src: "images/Chaenomeles x superba.jpg",
        tags: ["red", "orange", "spring", "50-100cm", "full sunlight", "well-drained soil", "bush", "edible (partly)", "fruit", "aromatic"],
        dutch_name: "Dwergkwee / Sierkwee / Japanse kweepeer"
    },
    {
        name: "Chelone obliqua",
        src: "images/Chelone obliqua.jpg",
        tags: ["pink", "summer", "100-150cm", "full sunlight", "moist soil", "perennial"],
        dutch_name: "Schildpadbloem"
    },
    {
        name: "Chimonanthus praecox",
        src: "images/Chimonanthus praecox.jpg",
        tags: ["yellow", "winter", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Winterzoet / Meloenboompje"
    },
    {
        name: "Choisya ternata",
        src: "images/Choisya ternata.jpg",
        tags: ["white", "spring", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush", "aromatic"],
        dutch_name: "Mexicaanse oranjebloesem"
    },
    {
        name: "Clethra alnifolia",
        src: "images/Clethra alnifolia.jpg",
        tags: ["white", "summer", "150-200cm", "full sunlight", "half shade", "moist soil", "bush"],
        dutch_name: "Schijnels"
    },
    {
        name: "Clematis alpina",
        src: "images/Clematis alpina.jpg",
        tags: ["purple", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "climbing plant"],
        dutch_name: "Alpenbosrank"
    },
    {
        name: "Clematis montana",
        src: "images/Clematis montana.jpg",
        tags: ["white", "pink", "spring", "5-10m", "full sunlight", "half shade", "well-drained soil", "climbing plant"],
        dutch_name: "Bergbosrank"
    },
    {
        name: "Clematis tibetana subsp. tangutica",
        src: "images/Clematis tibetana subsp. tangutica.jpg",
        tags: ["yellow", "summer", "3-5m", "full sunlight", "half shade", "well-drained soil", "climbing plant"],
        dutch_name: "Goudbosrank"
    },
    {
        name: "Clematis vitalba",
        src: "images/Clematis vitalba.jpg",
        tags: ["white", "summer", "3-5m", "5-10m", ">10m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "native"],
        dutch_name: "(Wilde) Bosrank"
    },
    {
        name: "Cornus mas",
        src: "images/Cornus mas.jpg",
        tags: ["yellow", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "tree", "fruit", "edible (partly)", "aromatic"],
        dutch_name: "Gele kornoelje"
    },    
    {
        name: "Cornus sanguinea",
        src: "images/Cornus sanguinea.jpg",
        tags: ["white", "spring", "1-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native"],
        dutch_name: "Rode kornoelje"
    },    
    {
        name: "Corydalis flexuosa",
        src: "images/Corydalis flexuosa.jpg",
        tags: ["blue", "spring", "20-50cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Helmbloem"
    },
    {
        name: "Corylopsis spicata",
        src: "images/Corylopsis spicata.jpg",
        tags: ["yellow", "spring", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush", "edible (partly)", "fruit", "aromatic"],
        dutch_name: "Schijnhazelaar"
    },
    {
        name: "Corylus avellana",
        src: "images/Corylus avellana.jpg",
        tags: ["catkins", "winter", "5-10m", "full sunlight", "half shade", "well-drained soil", "tree", "edible (partly)", "nuts", "native"],
        dutch_name: "Hazelaar"
    },
    {
        name: "Cotinus coggygria",
        src: "images/Cotinus coggygria.jpg",
        tags: ["pink", "purple", "summer", "3-5m", "full sunlight", "half shade", "well-drained soil", "bush", "fruit"],
        dutch_name: "Pruikenboom"
    },
    {
        name: "Crambe cordifolia",
        src: "images/Crambe cordifolia.jpg",
        tags: ["white", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial", "large leaves"],
        dutch_name: "Zeekool"
    },
    {
        name: "Crataegus laevigata",
        src: "images/Crataegus laevigata.jpg",
        tags: ["white", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "tree", "berries", "native", "edible (partly)", "aromatic"],
        dutch_name: "Tweestijlige meidoorn"
    },
    {
        name: "Crataegus monogyna",
        src: "images/Crataegus monogyna.jpg",
        tags: ["white", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "tree", "berries", "native", "edible (partly)", "aromatic"],
        dutch_name: "Eenstijlige Meidoorn"
    },
    {
        name: "Crocosmia 'Lucifer'",
        src: "images/Crocosmia 'Lucifer'.jpg",
        tags: ["red", "summer", "100-150cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Montbretia"
    },
    {
        name: "Daphne mezereum",
        src: "images/Daphne mezereum.jpg",
        tags: ["pink", "purple", "early spring", "100-150cm", "full sunlight", "half shade", "well-drained soil", "bush", "edible (partly)", "berries"],
        dutch_name: "Rood peperboompje"
    },
    {
        name: "Daphne x burkwoodii",
        src: "images/Daphne x burkwoodii.jpg",
        tags: ["pink", "spring", "100-150cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Peperboompje"
    },
    {
        name: "Darmera peltata",
        src: "images/Darmera peltata.jpg",
        tags: ["pink", "spring", "100-150cm", "full sunlight", "moist soil", "perennial", "large leaves"],
        dutch_name: "Schildblad"
    },
    {
        name: "Delphinium 'Völkerfrieden'",
        src: "images/Delphinium 'Völkerfrieden'.jpg",
        tags: ["blue", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Ridderspoor"
    },
    {
        name: "Deutzia gracilis",
        src: "images/Deutzia gracilis.jpg",
        tags: ["white", "pink", "summer", "100-150cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Bruidsbloem"
    },
    {
        name: "Dicentra formosa",
        src: "images/Dicentra formosa.jpg",
        tags: ["pink", "spring", "20-50cm", "half shade", "moist soil", "perennial"],
        dutch_name: "Gebroken hartje"
    },
    {
        name: "Dicentra spectabilis",
        src: "images/Dicentra spectabilis.jpg",
        tags: ["pink", "spring", "100-150cm", "half shade", "moist soil", "perennial"],
        dutch_name: "Gebroken hartje"
    },
    {
        name: "Dictamnus albus",
        src: "images/Dictamnus albus.jpg",
        tags: ["white", "summer", "100-150cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Vuurwerkplant"
    },
    {
        name: "Digitalis purpurea",
        src: "images/Digitalis purpurea.jpg",
        tags: ["purple", "white", "pink", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial", "toxic"],
        dutch_name: "Gewoon vingerhoedskruid"
    },
    {
        name: "Doronicum orientale",
        src: "images/Doronicum orientale.jpg",
        tags: ["yellow", "spring", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Voorjaarszonnebloem"
    },
    {
        name: "Echinacea purpurea",
        src: "images/Echinacea purpurea.png",
        tags: ["purple", "summer", "100-150cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)"],
        dutch_name: "Rode zonnehoed"
    },
    {
        name: "Echinops ritro 'Veitch's Blue'",
        src: "images/Echinops ritro 'Veitch's Blue'.jpg",
        tags: ["blue", "summer", "100-150cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Kogeldistel"
    },
    {
        name: "Epimedium x perralchicum 'Frohnleiten'",
        src: "images/Epimedium x perralchicum 'Frohnleiten'.jpeg",
        tags: ["yellow", "spring", "50-100cm", "shade", "well-drained soil", "perennial"],
        dutch_name: "Elfenbloem"
    },
    {
        name: "Eryngium x zabelii 'Big Blue'",
        src: "images/Eryngium x zabelii 'Big Blue'.jpeg",
        tags: ["blue", "summer", "50-100cm", "100-150cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Kruisdistel"
    },
    {
        name: "Euonymus europaeus",
        src: "images/Euonymus europaeus.jpg",
        tags: ["green", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native"],
        dutch_name: "Wilde kardinaalsmuts"
    },
    {
        name: "Euonymus fortunei",
        src: "images/Euonymus fortunei.jpg",
        tags: ["green", "pink", "red", "summer", "50-100cm", "100-150cm", "150-200cm", "full sunlight", "half shade", "well-drained soil", "climbing plant", "hedge", "ground cover", "evergreen"],
        dutch_name: "(Japanse) kardinaalsmuts"
    },
    {
        name: "Eupatorium maculatum 'Atropurpureum'",
        src: "images/Eupatorium maculatum 'Atropurpureum'.jpg",
        tags: ["purple", "summer", "150-200cm", "full sunlight", "moist soil", "perennial"],
        dutch_name: "Koninginnenkruid"
    },
    {
        name: "Euphorbia amygdaloides var. robbiae",
        src: "images/Euphorbia amygdaloides var. robbiae.jpg",
        tags: ["green", "spring", "50-100cm", "shade", "well-drained soil", "evergreen"],
        dutch_name: "Amandelwolfsmelk"
    },
    {
        name: "Euphorbia characias subsp. wulfenii",
        src: "images/Euphorbia characias subsp. wulfenii.jpg",
        tags: ["yellow-green", "spring", "50-100cm", "100-150cm", "full sunlight", "well-drained soil", "evergreen"],
        dutch_name: "Wolfsmelk"
    },
    {
        name: "Euphorbia griffithii 'Dixter'",
        src: "images/Euphorbia griffithii 'Dixter'.jpg",
        tags: ["orange-red", "summer", "50-100cm", "100-150cm", "full sunlight", "well-drained soil", "evergreen"],
        dutch_name: "Wolfsmelk"
    },
    {
        name: "Exochorda 'The Bride'",
        src: "images/Exochorda 'The Bride'.jpg",
        tags: ["white", "spring", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Parelstruik"
    },
    {
        name: "Fagus sylvatica",
        src: "images/Fagus sylvatica.jpg",
        tags: ["green", "spring", ">10m", "full sunlight", "half shade", "well-drained soil", "tree", "native"],
        dutch_name: "Beuk"
    },
    {
        name: "Fallopia baldschuanica",
        src: "images/Fallopia baldschuanica.jpg",
        tags: ["white", "summer", "autumn", ">10m", "full sunlight", "half shade", "well-drained soil", "moist soil", "climbing plant", "nuts"],
        dutch_name: "Bruidssluier"
    },
    {
        name: "Ferula communis",
        src: "images/Ferula communis.jpg",
        tags: ["yellow", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Giant Fennel"
    },
    {
        name: "Forsythia x intermedia",
        src: "images/Forsythia x intermedia.jpg",
        tags: ["yellow", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Chinees klokje"
    },
    {
        name: "Fragaria vesca",
        src: "images/Fragaria vesca.jpg",
        tags: ["white", "spring", "20-50cm", "full sunlight", "well-drained soil", "edible (partly)", "fruit", "native"],
        dutch_name: "Bosaardbei"
    },
    {
        name: "Frangula alnus",
        src: "images/Frangula alnus.jpg",
        tags: ["green", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native"],
        dutch_name: "Sporkehout"
    },
    {
        name: "Fraxinus excelsior",
        src: "images/Fraxinus excelsior.jpg",
        tags: ["green", "spring", ">10m", "full sunlight", "half shade", "well-drained soil", "tree", "native"],
        dutch_name: "Gewone Es"
    },
    {
        name: "Galium odoratum",
        src: "images/Galium odoratum.jpg",
        tags: ["white", "spring", "20-50cm", "50-100cm", "shade", "well-drained soil", "perennial", "fragrant", "native", "edible (partly)"],
        dutch_name: "Lievevrouwbedstro"
    },
    {
        name: "Gaura lindheimeri 'Whirling Butterflies'",
        src: "images/Gaura lindheimeri 'Whirling Butterflies'.jpg",
        tags: ["white", "pink", "summer", "100-150cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Prachtkaars"
    },
    {
        name: "Geranium 'Ann Folkard'",
        src: "images/Geranium 'Ann Folkard'.jpg",
        tags: ["purple", "yellow", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Ooievaarsbek"
    },
    {
        name: "Geranium 'Gerwat' ROZANNE",
        src: "images/Geranium 'Gerwat' ROZANNE.jpg",
        tags: ["blue", "purple", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Ooievaarsbek"
    },
    {
        name: "Geranium macrorrhizum",
        src: "images/Geranium macrorrhizum.jpg",
        tags: ["pink", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Ooievaarsbek"
    },
    {
        name: "Geranium phaeum",
        src: "images/Geranium phaeum.jpg",
        tags: ["purple", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Donkere ooievaarsbek / Weduwe-in-de-rouw"
    },
    {
        name: "Geranium renardii",
        src: "images/Geranium renardii.jpeg",
        tags: ["pink", "summer", "20-50cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Ooievaarsbek"
    },
    {
        name: "Geranium sanguineum",
        src: "images/Geranium sanguineum.jpg",
        tags: ["red", "pink", "summer", "20-50cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Bloedrode ooievaarsbek / Bloedooievaarsbek"
    },
    {
        name: "Geranium wlassovianum",
        src: "images/Geranium wlassovianum.jpg",
        tags: ["blue", "spring", "20-50cm", "shade", "moist soil", "perennial"],
        dutch_name: "Ooievaarsbek"
    },    
    {
        name: "Geranium x cantabrigiense 'Biokovo'",
        src: "images/Geranium x cantabrigiense 'Biokovo'.jpg",
        tags: ["white", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Ooievaarsbek"
    },
    {
        name: "Geum rivale",
        src: "images/Geum rivale.jpg",
        tags: ["pink", "spring", "summer", "50-100cm", "half shade", "moist soil", "perennial", "native"],
        dutch_name: "Knikkend nagelkruid"
    },
    {
        name: "Gunnera manicata",
        src: "images/Gunnera manicata.jpg",
        tags: ["green", "summer", "3-5m", "full sunlight", "moist soil", "perennial", "large leaves"],
        dutch_name: "Gunnera / Mammoetblad"
    },  
    {
        name: "Hamamelis x intermedia",
        src: "images/Hamamelis x intermedia.jpg",
        tags: ["yellow", "orange", "red", "winter", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Toverhazelaar"
    },  
    {
        name: "Hedera helix",
        src: "images/Hedera helix.jpeg",
        tags: ["green", "autumn", "winter", ">10m", "full sunlight", "half shade", "shade", "well-drained soil", "moist soil", "climbing plant", "ground cover", "berries", "evergreen", "native"],
        dutch_name: "Klimop"
    },
    {
        name: "Hedera hibernica",
        src: "images/hedera hibernica.jpeg",
        tags: ["green", "autumn", "winter", ">10m", "full sunlight", "half shade", "shade", "well-drained soil", "moist soil", "climbing plant", "ground cover", "berries", "evergreen", "native"],
        dutch_name: "Ierse Klimop"
    },    
    {
        name: "Helenium 'Moerheim Beauty'",
        src: "images/Helenium 'Moerheim Beauty'.jpg",
        tags: ["red", "orange", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Zonnekruid"
    },
    {
        name: "Helianthus 'Lemon Queen'",
        src: "images/Helianthus 'Lemon Queen'.jpg",
        tags: ["yellow", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)"],
        dutch_name: "Zonnebloem"
    },
    {
        name: "Helleborus argutifolius",
        src: "images/Helleborus argutifolius.jpg",
        tags: ["green", "winter", "spring", "50-100cm", "half shade", "well-drained soil", "perennial", "evergreen"],
        dutch_name: "Corsicaanse kerstroos"
    },
    {
        name: "Helleborus foetidus",
        src: "images/Helleborus foetidus.jpg",
        tags: ["green", "winter", "spring", "50-100cm", "half shade", "well-drained soil", "perennial", "evergreen"],
        dutch_name: "Stinkend nieskruid"
    },
    {
        name: "Helleborus orientalis",
        src: "images/Helleborus orientalis.jpg",
        tags: ["varied", "winter", "spring", "50-100cm", "half shade", "well-drained soil", "perennial", "evergreen"],
        dutch_name: "Kerstroos"
    },
    {
        name: "Heuchera micrantha 'Palace Purple'",
        src: "images/Heuchera micrantha 'Palace Purple'.jpg",
        tags: ["purple", "spring", "50-100cm", "half shade", "well-drained soil", "perennial", "evergreen"],
        dutch_name: "Purperklokje"
    },
    {
        name: "Heptacodium miconioides",
        src: "images/Heptacodium miconioides.jpg",
        tags: ["white", "fall", "3-5m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Heptacodium"
    },
    {
        name: "Hibiscus syriacus",
        src: "images/Hibiscus syriacus.jpg",
        tags: ["white", "pink", "purple", "summer", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Althaeastruik / Hibiscus"
    },
    {
        name: "Hippophae rhamnoides",
        src: "images/Hippophae rhamnoides.jpeg",
        tags: ["yellow", "spring", "3-5m", "full sunlight", "well-drained soil", "bush", "berries", "edible (partly)", "aromatic"],
        dutch_name: "Duindoorn"
    },
    {
        name: "Hosta 'Elegans'",
        src: "images/Hosta 'Elegans'.jpg",
        tags: ["blue", "summer", "shade", "30-50cm", "moist soil", "perennial", "edible (partly)"],
        dutch_name: "Hartlelie"
    },    
    {
        name: "Humulus lupulus",
        src: "images/Humulus lupulus.jpg",
        tags: ["green", "summer", "hooghte", "full sunlight", "half shade", "shade", "well-drained soil", "moist soil", "climbing plant", "edible (partly)", "native"],
        dutch_name: "Wilde hop"
    },
    {
        name: "Hydrangea anomala subsp. petiolaris",
        src: "images/Hydrangea anomala subsp. petiolaris.jpg",
        tags: ["white", "spring", "summer", ">10m", "full sunlight", "half shade", "shade", "well-drained soil", "climbing plant", "ground cover"],
        dutch_name: "Klimhortensia"
    },
    {
        name: "Hydrangea aspera",
        src: "images/Hydrangea aspera.jpg",
        tags: ["blue", "purple", "summer", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Fluweelhortensia"
    },
    {
        name: "Hydrangea macrophylla",
        src: "images/Hydrangea macrophylla.jpg",
        tags: ["blue", "pink", "purple", "summer", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Tuinhortensia"
    },
    {
        name: "Hydrangea paniculata",
        src: "images/Hydrangea paniculata.jpg",
        tags: ["white", "pink", "summer", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Pluimhortensia"
    },
    {
        name: "Hydrangea quercifolia",
        src: "images/Hydrangea quercifolia.jpg",
        tags: ["white", "pink", "summer", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Eikenbladhortensia"
    },
    {
        name: "Hydrangea serrata",
        src: "images/Hydrangea serrata.jpg",
        tags: ["blue", "pink", "summer", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Berghortensia"
    },
    {
        name: "Iberis sempervirens",
        src: "images/Iberis sempervirens.jpg",
        tags: ["white", "spring", "50-100cm", "full sunlight", "well-drained soil", "perennial", "evergreen"],
        dutch_name: "Scheefbloem"
    },
    {
        name: "Ilex aquifolium",
        src: "images/Ilex aquifolium.jpg",
        tags: ["white", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "bush", "tree", "berries", "evergreen", "native", "hedge"],
        dutch_name: "Hulst"
    },
    {
        name: "Ilex crenata 'Convexa'",
        src: "images/Ilex crenata 'Convexa'.jpg",
        tags: ["green", "winter", "100-150cm", "full sunlight", "half shade", "well-drained soil", "bush", "evergreen", "hedge", "berries"],
        dutch_name: "Japanse hulst"
    },
    {
        name: "Iris sibirica 'Blue King'",
        src: "images/Iris sibirica 'Blue King'.jpg",
        tags: ["blue", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Siberische iris"
    },
    {
        name: "Jasminum nudiflorum",
        src: "images/Jasminum nudiflorum.jpeg",
        tags: ["yellow", "winter", "2-3m", "3-5m", "full sunlight", "half shade", "shade", "moist soil", "well-drained soil", "climbing plant"],
        dutch_name: "Winterjasmijn"
    },
    {
        name: "Kalimeris incisa 'Madiva'",
        src: "images/Kalimeris incisa 'Madiva'.jpg",
        tags: ["white", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Zomeraster"
    },
    {
        name: "Kerria japonica",
        src: "images/Kerria japonica.jpg",
        tags: ["yellow", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "edible (partly)", "fruit"],
        dutch_name: "Ranonkelstruik"
    },
    {
        name: "Kirengeshoma palmata",
        src: "images/Kirengeshoma palmata.jpg",
        tags: ["yellow", "summer", "50-100cm", "half shade", "moist soil", "perennial"],
        dutch_name: "Japanse wasbloem"
    },
    {
        name: "Knautia macedonica",
        src: "images/Knautia macedonica.jpg",
        tags: ["red", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)"],
        dutch_name: "Macedonische beemdkroon"
    },
    {
        name: "Kolkwitzia amabilis",
        src: "images/Kolkwitzia amabilis.jpg",
        tags: ["pink", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Kolkwitzia / Koninginnenstruik"
    },    
    {
        name: "Lamiastrum galeobdolon",
        src: "images/Lamiastrum galeobdolon.jpg",
        tags: ["yellow", "spring", "50-100cm", "shade", "moist soil", "perennial", "evergreen"],
        dutch_name: "Gele dovenetel"
    },
    {
        name: "Lamium maculatum 'White Nancy'",
        src: "images/Lamium maculatum 'White Nancy'.jpg",
        tags: ["white", "spring", "50-100cm", "shade", "moist soil", "perennial", "evergreen", "edible (partly)"],
        dutch_name: "Gevlekte dovenetel"
    },
    {
        name: "Lamium orvala",
        src: "images/Lamium orvala.jpg",
        tags: ["pink", "spring", "50-100cm", "shade", "moist soil", "perennial", "evergreen"],
        dutch_name: "Grootbloemige dovenetel"
    },
    {
        name: "Lavandula angustifolia",
        src: "images/Lavandula angustifolia.jpg",
        tags: ["purple", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)", "aromatic"],
        dutch_name: "Echte lavendel"
    },
    {
        name: "Liatris spicata",
        src: "images/Liatris spicata.jpg",
        tags: ["purple", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Lampenpoetser"
    },
    {
        name: "Ligularia dentata 'Othello'",
        src: "images/Ligularia dentata 'Othello'.jpg",
        tags: ["yellow", "summer", "50-100cm", "half shade", "moist soil", "perennial"],
        dutch_name: "Tongkruiskruid"
    },
    {
        name: "Ligularia przewalskii",
        src: "images/Ligularia przewalskii.jpg",
        tags: ["yellow", "summer", "150-200cm", "half shade", "moist soil", "perennial"],
        dutch_name: "Tongkruiskruid"
    },
    {
        name: "Ligustrum ovalifolium",
        src: "images/Ligustrum ovalifolium.jpg",
        tags: ["white", "summer", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "hedge"],
        dutch_name: "Haagliguster"
    },
    {
        name: "Ligustrum vulgare",
        src: "images/Ligustrum vulgare.jpg",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native", "hedge"],
        dutch_name: "Wilde liguster"
    },
    {
        name: "Liriope muscari",
        src: "images/Liriope muscari.jpg",
        tags: ["purple", "summer", "50-100cm", "shade", "well-drained soil", "perennial", "evergreen"],
        dutch_name: "Leliegras"
    },
    {
        name: "Lonicera fragra jantissima",
        src: "images/Lonicera fragrantissima.jpg",
        tags: ["white", "winter", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "edible (partly)", "berries", "aromatic"],
        dutch_name: "Winterkamperfoelie"
    },
    {
        name: "Lonicera caprifolium",
        src: "images/Lonicera caprifolium.jpg",
        tags: ["white", "spring", "summer", "3-5m", "full sunlight", "half shade", "well-drained soil", "moist soil", "climbing plant", "aromatic", "berries"],
        dutch_name: "Wilde Kamperfoelie"
    },
    {
        name: "Lonicera japonica",
        src: "images/Lonicera japonica.jpg",
        tags: ["white", "yellow", "summer", "5-10m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "berries", "evergreen", "aromatic"],
        dutch_name: "Japanse kamperfoelie"
    },
    {
        name: "Lonicera periclymenum",
        src: "images/Lonicera periclymenum.png",
        tags: ["red", "pink", "summer", "3-5m", "full sunlight", "half shade", "well-drained soil", "moist soil", "climbing plant", "berries", "native"],
        dutch_name: "Wilde kamperfoelie"
    },
    {
        name: "Lonicera xylosteum",
        src: "images/Lonicera xylosteum.jpg",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"],
        dutch_name: "Rode kamperfoelie"
    },
    {
        name: "Lupinus 'The Chatelaine'",
        src: "images/Lupinus 'The Chatelaine'.jpg",
        tags: ["pink", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "fruit"],
        dutch_name: "Lupine"
    },
    {
        name: "Lysimachia clethroides",
        src: "images/Lysimachia clethroides.jpg",
        tags: ["white", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Wederik"
    },
    {
        name: "Lysimachia nummularia",
        src: "images/Lysimachia nummularia.jpg",
        tags: ["yellow", "summer", "20-50cm", "full sunlight", "moist soil", "perennial", "ground cover"],
        dutch_name: "Penningkruid"
    },
    {
        name: "Lysimachia punctata",
        src: "images/Lysimachia punctata.jpg",
        tags: ["yellow", "summer", "50-100cm", "full sunlight", "moist soil", "perennial"],
        dutch_name: "Puntwederik"
    }, 
    {
        name: "Macleaya microcarpa 'Kelway's Coral Plume'",
        src: "images/Macleaya microcarpa 'Kelway's Coral Plume'.jpg",
        tags: ["coral", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Pluimpapaver"
    },
    {
        name: "Magnolia stellata",
        src: "images/Magnolia stellata.webp",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "tree"],
        dutch_name: "Stermagnolia / Beverboom"
    },
    {
        name: "Malus sylvestris",
        src: "images/Malus sylvestris.jpg",
        tags: ["white", "pink", "spring", "3-5m", "full sunlight", "well-drained soil", "tree", "fruit", "edible (partly)", "native", "aromatic"],
        dutch_name: "Wilde appel"
    },
    {
        name: "Malva moschata",
        src: "images/Malva moschata.jpg",
        tags: ["pink", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)"],
        dutch_name: "Kaasjeskruid"
    },
    {
        name: "Monarda 'Squaw'",
        src: "images/Monarda 'Squaw'.jpg",
        tags: ["red", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)", "aromatic"],
        dutch_name: "Bergamotplant"
    },
    {
        name: "Nepeta 'Walker's Low'",
        src: "images/Nepeta 'Walker's Low'.jpg",
        tags: ["blue", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)"],
        dutch_name: "Kattenkruid"
    },
    {
        name: "Osmanthus x burkwoodii",
        src: "images/Osmanthus x burkwoodii.jpg",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "aromatic"],
        dutch_name: "Schijnhulst"
    },    
    {
        name: "Parthenocissus quinquefolia",
        src: "images/Parthenocissus quinquefolia.jpg",
        tags: ["green", "summer", ">10m", "full sunlight", "half shade", "shade", "well-drained soil", "moist soil", "climbing plant", "berries"],
        dutch_name: "Vijfbladige wingerd"
    },
    {
        name: "Parthenocissus tricuspidata",
        src: "images/Parthenocissus tricuspidata.jpg",
        tags: ["green", "summer", ">10m", "full sunlight", "half shade", "shade", "well-drained soil", "moist soil", "climbing plant", "berries"],
        dutch_name: "Driebladige wingerd"
    },
    {
        name: "Passiflora caerulea",
        src: "images/Passiflora caerulea.jpg",
        tags: ["white", "purple", "blue", "summer", "autumn", "5-10m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "fruit", "evergreen", "edible (partly)"],
        dutch_name: "Blauwe passiebloem"
    },
    {
        name: "Perovskia atriplicifolia 'Little Spire'",
        src: "images/Perovskia atriplicifolia 'Little Spire'.jpg",
        tags: ["blue", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Blauwspirea / Russische salie / Reuzenlavendel"
    },
    {
        name: "Persicaria amplexicaulis",
        src: "images/Persicaria amplexicaulis.jpg",
        tags: ["red", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)"],
        dutch_name: "Knoopkruid / Duizendknoop"
    },
    {
        name: "Persicaria bistorta 'Superba'",
        src: "images/Persicaria bistorta 'Superba'.jpg",
        tags: ["pink", "summer", "50-100cm", "full sunlight", "moist soil", "perennial", "edible (partly)"],
        dutch_name: "Adderwortel"
    },
    {
        name: "Philadelphus coronarius",
        src: "images/Philadelphus coronarius.jpg",
        tags: ["white", "summer", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "aromatic"],
        dutch_name: "Boerenjasmijn"
    },
    {
        name: "Phlomis russeliana",
        src: "images/Phlomis russeliana.jpeg",
        tags: ["yellow", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Brandkruid"
    },
    {
        name: "Phlox paniculata",
        src: "images/Phlox paniculata.jpg",
        tags: ["pink", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Vlambloem"
    },
    {
        name: "Physocarpus opulifolius",
        src: "images/Physocarpus opulifolius.jpg",
        tags: ["white", "pink", "summer", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible (partly)"],
        dutch_name: "Blaasspirea"
    },
    {
        name: "Polygonatum multiflorum",
        src: "images/Polygonatum multiflorum.jpg",
        tags: ["white", "spring", "50-100cm", "shade", "moist soil", "perennial", "evergreen", "native", "edible (partly)"],
        dutch_name: "Gewone salomonszegel"
    },
    {
        name: "Populus nigra",
        src: "images/Populus nigra.jpg",
        tags: ["yellow", "spring", ">10m", "full sunlight", "well-drained soil", "tree", "native"],
        dutch_name: "Zwarte populier"
    },
    {
        name: "Populus tremula",
        src: "images/Populus tremula.jpg",
        tags: ["yellow", "spring", ">10m", "full sunlight", "well-drained soil", "tree", "native"],
        dutch_name: "Rimpelpopulier"
    },
    {
        name: "Populus x canescens",
        src: "images/Populus x canescens.jpg",
        tags: ["yellow", "spring", ">10m", "full sunlight", "well-drained soil", "tree", "native"],
        dutch_name: "Grauwe abeel"
    },
    {
        name: "Potentilla fruticosa",
        src: "images/Potentilla fruticosa.jpg",
        tags: ["yellow", "orange", "summer", "50-100cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Ganzerik / Struikganzerik"
    },    
    {
        name: "Prunus avium",
        src: "images/Prunus avium.jpg",
        tags: ["white", "spring", ">10m", "full sunlight", "well-drained soil", "tree", "fruit", "edible (partly)", "native", "aromatic"],
        dutch_name: "Zoete kers"
    },
    {
        name: "Prunus lusitanica",
        src: "images/Prunus lusitanica.jpg",
        tags: ["white", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "bush", "hedge", "edible (partly)", "fruit"],
        dutch_name: "Portugese laurierkers"
    },
    {
        name: "Prunus padus",
        src: "images/Prunus padus.jpg",
        tags: ["white", "spring", "5-10m", "full sunlight", "half shade", "well-drained soil", "tree", "berries", "native", "edible (partly)"],
        dutch_name: "Vogelkers"
    },
    {
        name: "Prunus spinosa",
        src: "images/Prunus spinosa.jpg",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible (partly)", "native"],
        dutch_name: "Sleedoorn"
    },
    {
        name: "Pulmonaria officinalis 'Sissinghurst White'",
        src: "images/Pulmonaria officinalis 'Sissinghurst White'.jpg",
        tags: ["white", "spring", "20-50cm", "shade", "moist soil", "perennial", "evergreen", "native"],
        dutch_name: "Gevlekt longkruid"
    },    
    {
        name: "Pyracantha coccinea",
        src: "images/Pyracantha coccinea.jpg",
        tags: ["white", "orange", "red", "spring", "autumn", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "hedge", "berries"],
        dutch_name: "Vuurdoorn"
    },  
    {
        name: "Pyrus pyraster",
        src: "images/Pyrus pyraster.jpg",
        tags: ["white", "spring", ">10m", "full sunlight", "well-drained soil", "tree", "fruit", "edible (partly)", "native"],
        dutch_name: "Wilde peer"
    },  
    {
        name: "Quercus petraea",
        src: "images/Quercus petraea.jpg",
        tags: ["yellow", "spring", ">10m", "full sunlight", "well-drained soil", "tree", "native", "nuts"],
        dutch_name: "Wintereik"
    },
    {
        name: "Quercus robur",
        src: "images/Quercus robur.jpg",
        tags: ["yellow", "spring", ">10m", "full sunlight", "well-drained soil", "tree", "native", "nuts"],
        dutch_name: "Zomereik"
    },
    {
        name: "Rhamnus cathartica",
        src: "images/Rhamnus cathartica.jpg",
        tags: ["green", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native"],
        dutch_name: "Wegedoorn"
    },
    {
        name: "Rheum palmatum var. tanguticum",
        src: "images/Rheum palmatum var. tanguticum.jpg",
        tags: ["red", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial", "large leaves", "edible (partly)"],
        dutch_name: "Sierrabarber"
    },
    {
        name: "Rodgersia aesculifolia",
        src: "images/Rodgersia aesculifolia.jpg",
        tags: ["white", "summer", "150-200cm", "shade", "moist soil", "perennial", "large leaves"],
        dutch_name: "Kijkblad / Schout-bij-nacht"
    },
    {
        name: "Rosa 'Albertine'",
        src: "images/Rosa 'Albertine'.jpg",
        tags: ["pink", "summer", "3-5m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "aromatic"],
        dutch_name: "Klimroos"
    },    
    {
        name: "Rosa canina",
        src: "images/Rosa canina.jpg",
        tags: ["pink", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "fruit", "edible (partly)", "native", "aromatic"],
        dutch_name: "Hondsroos"
    },
    {
        name: "Rosa filipes 'Kiftsgate'",
        src: "images/Rosa filipes 'Kiftsgate'.jpg",
        tags: ["white", "summer", ">10m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "aromatic", "berries", "edible (partly)"],
        dutch_name: "Ramblerroos"
    }, 
    {
        name: "Rosa 'Gloire de Dijon'",
        src: "images/Rosa 'Gloire de Dijon'.jpg",
        tags: ["yellow", "pink", "spring", "summer", "3-5m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "aromatic", "edible (partly)"],
        dutch_name: "Klimroos"
    },
    {
        name: "Rosa pimpinellifolia",
        src: "images/Rosa pimpinellifolia.jpg",
        tags: ["yellow", "spring", "1.5-2m", "full sunlight", "half shade", "well-drained soil", "bush", "fruit", "edible (partly)", "native"],
        dutch_name: "Duinroos"
    },
    {
        name: "Rosa rubiginosa",
        src: "images/Rosa rubiginosa.jpeg",
        tags: ["pink", "spring", "1-2m", "full sunlight", "half shade", "well-drained soil", "bush", "fruit", "edible (partly)", "native", "aromatic"],
        dutch_name: "Egelantier"
    },    
    {
        name: "Ribes sanguineum",
        src: "images/Ribes sanguineum.jpg",
        tags: ["red", "pink", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "edible (partly)", "berries"],
        dutch_name: "Sierbes"
    },
    {
        name: "Rudbeckia fulgida 'Goldsturm'",
        src: "images/Rudbeckia fulgida 'Goldsturm'.jpg",
        tags: ["yellow", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Zonnehoed"
    },    
    {
        name: "Salix alba",
        src: "images/Salix alba.jpg",
        tags: ["catkins", "spring", ">10m", "full sunlight", "moist soil", "tree", "native"],
        dutch_name: "Schietwilg"
    },
    {
        name: "Salix caprea",
        src: "images/Salix caprea.jpg",
        tags: ["catkins", "spring", ">10m", "full sunlight", "moist soil", "tree", "native"],
        dutch_name: "Boswilg"
    },
    {
        name: "Salix cinerea",
        src: "images/Salix cinerea.jpg",
        tags: ["catkins", "spring", "5-10m", "full sunlight", "moist soil", "tree", "native"],
        dutch_name: "Grauwe wilg"
    },
    {
        name: "Salix repens",
        src: "images/Salix repens.jpg",
        tags: ["catkins", "spring", "20-50cm", "full sunlight", "moist soil", "shrub", "native"],
        dutch_name: "Kruipwilg"
    },
    {
        name: "Salvia nemorosa 'Ostfriesland'",
        src: "images/Salvia nemorosa 'Ostfriesland'.jpg",
        tags: ["purple", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)"],
        dutch_name: "Bossalie"
    },
    {
        name: "Sambucus nigra",
        src: "images/Sambucus nigra.jpg",
        tags: ["white", "spring", "5-10m", "full sunlight", "half shade", "moist soil", "bush", "berries", "edible (partly)", "native"],
        dutch_name: "Gewone vlier"
    },
    {
        name: "Sambucus racemosa",
        src: "images/Sambucus racemosa.jpg",
        tags: ["white", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible (partly)"],
        dutch_name: "Trosvlier"
    },
    {
        name: "Sanguisorba officinalis",
        src: "images/Sanguisorba officinalis.jpg",
        tags: ["red", "summer", "100-150cm", "full sunlight", "well-drained soil", "perennial", "native", "edible (partly)"],
        dutch_name: "Bloedwortel"
    },   
    {
        name: "Santolina chamaecyparissus",
        src: "images/Santolina chamaecyparissus.jpg",
        tags: ["yellow", "white", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "evergreen"],
        dutch_name: "Heiligenbloem"
    },
    {
        name: "Sarcococca hookeriana var. humilis",
        src: "images/Sarcococca hookeriana var. humilis.jpeg",
        tags: ["white", "winter", "50-100cm", "shade", "half shade", "well-drained soil", "bush"],
        dutch_name: "Vleesbes"
    },
    {
        name: "Sedum 'Matrona'",
        src: "images/Sedum 'Matrona'.jpg",
        tags: ["pink", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Hemelsleutel"
    },
    {
        name: "Schizophragma hydrangeoides",
        src: "images/Schizophragma hydrangeoides.jpg",
        tags: ["white", "summer", ">10m", "half shade", "moist soil", "climbing plant", "ground cover"],
        dutch_name: "Pluimklimhortensia"
    },
    {
        name: "Sisyrinchium striatum",
        src: "images/Sisyrinchium striatum.jpg",
        tags: ["yellow", "spring", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Bieslelie"
    },
    {
        name: "Skimmia japonica",
        src: "images/Skimmia japonica.jpg",
        tags: ["white", "spring", "1-2m", "shade", "half shade", "well-drained soil", "bush", "berries"],
        dutch_name: "Skimmia"
    },
    {
        name: "Solidago rugosa 'Fireworks'",
        src: "images/Solidago rugosa 'Fireworks'.jpg",
        tags: ["yellow", "summer", "100-150cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Goudenroede"
    },
    {
        name: "Sorbus aucuparia",
        src: "images/Sorbus aucuparia.jpg",
        tags: ["white", "spring", "5-10m", "full sunlight", "half shade", "well-drained soil", "tree", "berries", "edible (partly)", "native"],
        dutch_name: "Wilde lijsterbes"
    },
    {
        name: "Spiraea japonica",
        src: "images/Spiraea japonica.jpg",
        tags: ["pink", "spring", "1-2m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Spirea / Spierstruik"
    },
    {
        name: "Spiraea x vanhouttei",
        src: "images/Spiraea x vanhouttei.jpeg",
        tags: ["white", "spring", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Spirea / Spierstruik"
    },
    {
        name: "Stachys byzantina",
        src: "images/Stachys byzantina.jpg",
        tags: ["purple", "white", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)"],
        dutch_name: "Ezelsoor"
    },
    {
        name: "Stachys monieri 'Hummelo'",
        src: "images/Stachys monieri 'Hummelo'.jpg",
        tags: ["purple", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "edible (partly)"],
        dutch_name: "Andoorn"
    },
    {
        name: "Stachyurus praecox",
        src: "images/Stachyurus praecox.jpg",
        tags: ["yellow", "winter", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Staartaar"
    },
    {
        name: "Staphylea colchica",
        src: "images/Staphylea colchica.jpg",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "nuts"],
        dutch_name: "Kaukasische pimpernoot"
    },    
    {
        name: "Stephanandra incisa",
        src: "images/Stephanandra incisa.jpg",
        tags: ["white", "spring", "150-200cm", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Kransspirea"
    },
    {
        name: "Symphytum azureum",
        src: "images/Symphytum azureum.jpg",
        tags: ["blue", "spring", "50-100cm", "shade", "moist soil", "perennial", "native"],
        dutch_name: "Smeerwortel"
    },
    {
        name: "Symphytum grandiflorum",
        src: "images/Symphytum grandiflorum.jpg",
        tags: ["pink", "purple", "spring", "50-100cm", "shade", "moist soil", "perennial", "native"],
        dutch_name: "Smeerwortel"
    },    
    {
        name: "Syringa vulgaris",
        src: "images/Syringa vulgaris.jpg",
        tags: ["purple", "white", "pink", "spring", "3-5m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Gewone sering"
    }, 
    {
        name: "Telekia speciosa",
        src: "images/Telekia speciosa.jpg",
        tags: ["yellow", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial", "large leaves"],
        dutch_name: "Koeienoog"
    },
    {
        name: "Tellima grandiflora",
        src: "images/Tellima grandiflora.jpg",
        tags: ["white", "spring", "50-100cm", "shade", "moist soil", "perennial"],
        dutch_name: "Mijterloof"
    },
    {
        name: "Teucrium x lucidrys",
        src: "images/Teucrium x lucidrys.jpg",
        tags: ["purple", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial", "native", "edible (partly)"],
        dutch_name: "Gamander"
    },
    {
        name: "Thalictrum delavayi",
        src: "images/Thalictrum delavayi.jpg",
        tags: ["purple", "summer", "100-150cm", "half shade", "well-drained soil", "perennial"],
        dutch_name: "Ruit"
    },
    {
        name: "Tiarella cordifolia",
        src: "images/Tiarella cordifolia.jpg",
        tags: ["white", "spring", "20-50cm", "shade", "moist soil", "perennial", "native"],
        dutch_name: "Schuimbloem"
    },
    {
        name: "Tilia cordata",
        src: "images/Tilia cordata.jpg",
        tags: ["yellow", "spring", ">10m", "full sunlight", "well-drained soil", "tree", "native"],
        dutch_name: "Winterlinde"
    },
    {
        name: "Tilia platyphyllos",
        src: "images/Tilia platyphyllos.jpg",
        tags: ["yellow", "spring", ">10m", "full sunlight", "well-drained soil", "tree", "native"],
        dutch_name: "Zomerlinde"
    },    
    {
        name: "Tradescantia 'Osprey'",
        src: "images/Tradescantia 'Osprey'.jpg",
        tags: ["blue", "summer", "50-100cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Eendagsbloem"
    },
    {
        name: "Tricyrtis formosana",
        src: "images/Tricyrtis formosana.jpeg",
        tags: ["white", "purple", "summer", "50-100cm", "shade", "moist soil", "perennial"],
        dutch_name: "Paddenlelie / Armeluisorchidee"
    },
    {
        name: "Ulex europaeus",
        src: "images/Ulex europaeus.jpg",
        tags: ["yellow", "spring", "1-2m", "full sunlight", "well-drained soil", "bush", "native"],
        dutch_name: "Gaspeldoorn"
    },    
    {
        name: "Ulmus laevis",
        src: "images/Ulmus laevis.jpg",
        tags: ["yellow", "spring", ">10m", "full sunlight", "half shade", "moist soil", "tree", "native"],
        dutch_name: "Fladderiep"
    },
    {
        name: "Verbascum densiflorum",
        src: "images/Verbascum densiflorum.jpg",
        tags: ["yellow", "summer", "200-300cm", "full sunlight", "well-drained soil", "biennial"],
        dutch_name: "Kijzerskaars"
    },
    {
        name: "Verbascum nigrum",
        src: "images/Verbascum nigrum.jpg",
        tags: ["yellow", "summer", "100-150cm", "full sunlight", "well-drained soil", "biennial"],
        dutch_name: "Zwarte toorts"
    },
    {
        name: "Verbascum nigrum var. album",
        src: "images/Verbascum nigrum var. album.jpg",
        tags: ["white", "summer", "100-150cm", "full sunlight", "well-drained soil", "biennial"],
        dutch_name: "Zwarte toorts"
    },
    {
        name: "Verbascum thapsus",
        src: "images/Verbascum thapsus.jpg",
        tags: ["yellow", "summer", "150-200cm", "full sunlight", "well-drained soil", "biennial"],
        dutch_name: "Koningskaars"
    },
    {
        name: "Verbena bonariensis",
        src: "images/Verbena bonariensis.jpg",
        tags: ["purple", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Patagonische ijzerhard"
    },
    {
        name: "Veronicastrum virginicum",
        src: "images/Veronicastrum virginicum.jpg",
        tags: ["white", "purple", "summer", "150-200cm", "full sunlight", "well-drained soil", "perennial"],
        dutch_name: "Virginische ereprijs"
    },    
    {
        name: "Viburnum davidii",
        src: "images/Viburnum davidii.jpg",
        tags: ["white", "spring", "1-1.5m", "shade", "half shade", "well-drained soil", "bush", "berries", "evergreen"],
        dutch_name: "Sneeuwbal"
    },
    {
        name: "Viburnum macrocephalum",
        src: "images/Viburnum macrocephalum.jpeg",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"],
        dutch_name: "Sneeuwbal"
    },
    {
        name: "Viburnum opulus",
        src: "images/Viburnum opulus.jpg",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "moist soil", "bush", "berries", "native", "edible (partly)"],
        dutch_name: "Gelderse roos"
    },
    {
        name: "Viburnum plicatum 'Mariesii'",
        src: "images/Viburnum plicatum 'Mariesii'.jpg",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"],
        dutch_name: "Japanse sneeuwbal'"
    },
    {
        name: "Viburnum rhytidophyllum",
        src: "images/Viburnum rhytidophyllum.jpg",
        tags: ["white", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"],
        dutch_name: "Sneeuwbal"
    },
    {
        name: "Viburnum tinus",
        src: "images/Viburnum tinus.jpg",
        tags: ["white", "pink", "winter", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "evergreen", "edible (partly)"],
        dutch_name: "Sneeuwbal"
    },
    {
        name: "Viburnum x bodnantense",
        src: "images/Viburnum x bodnantense.jpg",
        tags: ["pink", "winter", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"],
        dutch_name: "Sneeuwbal"
    },
    {
        name: "Vinca major",
        src: "images/Vinca major.jpg",
        tags: ["blue", "spring", "50-100cm", "shade", "moist soil", "perennial", "evergreen"],
        dutch_name: "Grote maagdenpalm"
    },
    {
        name: "Vinca minor",
        src: "images/Vinca minor.jpg",
        tags: ["blue", "spring", "20-50cm", "shade", "moist soil", "perennial", "evergreen"],
        dutch_name: "Kleine maagdenpalm"
    },
    {
        name: "Vitis coignetiae",
        src: "images/Vitis coignetiae.jpg",
        tags: ["yellow", "summer", ">10m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "berries", "edible (partly)"],
        dutch_name: "Rode wijnstok"
    },
    {
        name: "Waldsteinia ternata",
        src: "images/Waldsteinia ternata.jpg",
        tags: ["yellow", "spring", "20-50cm", "shade", "moist soil", "perennial", "native", "edible (partly)"],
        dutch_name: "Goudaardbei"
    },
    {
        name: "Weigela florida",
        src: "images/Weigela florida.jpg",
        tags: ["pink", "red", "spring", "2-3m", "full sunlight", "half shade", "well-drained soil", "bush"],
        dutch_name: "Weigelia"
    },    
    {
        name: "Wisteria floribunda",
        src: "images/Wisteria floribunda.jpg",
        tags: ["blue", "purple", "spring", ">10m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "fruit", "aromatic"],
        dutch_name: "Japanse blauweregen"
    },  
    {
        name: "Wisteria sinensis",
        src: "images/Wisteria sinensis.jpg",
        tags: ["blue", "purple", "spring", ">10m", "full sunlight", "half shade", "well-drained soil", "climbing plant", "fruit", "aromatic"],
        dutch_name: "Chinese blauweregen"
    }

    // Add more images here following the same format
];
