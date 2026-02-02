// In mobile view, clicking outside the side menu to close it will open an image if clicked on it. This will remove the menu button... Make it so that an image can't be opened when closing the side menu.



const plants = [
    {
        'Latin name': "Abelia x grandiflora",
        'Dutch name': "Abelia",
        'Image path': "images/Abelia x grandiflora/Abelia x grandiflora.jpg",
        'SCHOOL SUBJECT':"Plantenkennis 1",
    },
    {
        'Latin name': "Abies concolor",
        'Dutch name': "Colorado zilverspar",
        'Image path': "images/Abies concolor/Abies concolor.jpg",
        'SCHOOL SUBJECT':"Plantenkennis 2",
    },
    {
        'Latin name': "Abies koreana",
        'Dutch name': "Koreaanse zilverspar",
        'Image path': "images/Abies koreana/Abies koreana.jpg",
        'SCHOOL SUBJECT':"Plantecologie",
    },
    {
        'Latin name': "Abies nordmanniana",
        'Dutch name': "Nordmann-spar",
        'Image path': "images/Abies nordmanniana/Abies nordmanniana 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Acaena microphylla",
        'Dutch name': "Stekelnootje",
        'Image path': "images/Acaena microphylla/Acaena microphylla 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Acanthus mollis",
        'Dutch name': "Zachte acanthus",
        'Image path': "images/Acanthus mollis/Acanthus mollis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Acer campestre",
        'Dutch name': "Veldesdoorn",
        'Image path': "images/Acer campestre/Acer campestre 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Acer negundo",
        'Dutch name': "Vederesdoorn",
        'Image path': "images/Acer negundo/Acer negundo 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Acer palmatum 'Atropurpureum'",
        'Dutch name': "Japanse esdoorn",
        'Image path': "images/Acer palmatum 'Atropurpureum'/Acer palmatum 'Atropurpureum' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Acer palmatum 'Dissectum'",
        'Dutch name': "Japanse esdoorn",
        'Image path': "images/Acer palmatum 'Dissectum'/Acer palmatum 'Dissectum' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Acer platanoides",
        'Dutch name': "Noorse esdoorn",
        'Image path': "images/Acer platanoides/Acer platanoides 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Acer pseudoplatanus",
        'Dutch name': "Gewone esdoorn",
        'Image path': "images/Acer pseudoplatanus/Acer pseudoplatanus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Acer saccharinum",
        'Dutch name': "Zilveresdoorn",
        'Image path': "images/Acer saccharinum/Acer saccharinum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Achillea 'Coronation Gold'",
        'Dutch name': "Duizenblad",
        'Image path': "images/Achillea 'Coronation Gold'/Achillea 'Coronation Gold' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Achillea millefolium",
        'Dutch name': "Duizendblad",
        'Image path': "images/Achillea millefolium/Achillea millefolium 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aconitum napellus",
        'Dutch name': "Blauwe monnikskap",
        'Image path': "images/Aconitum napellus/Aconitum napellus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Actaea simplex 'White Pearl'",
        'Dutch name': "Zilverkaars",
        'Image path': "images/Actaea simplex 'White Pearl'/Actaea simplex 'White Pearl' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Actinidia deliciosa",
        'Dutch name': "Kiwi",
        'Image path': "images/Actinidia deliciosa/Actinidia deliciosa 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Actinidia kolomikta",
        'Dutch name': "Sierkiwi",
        'Image path': "images/Actinidia kolomikta/Actinidia kolomikta 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aegopodium podagraria",
        'Dutch name': "Zevenblad",
        'Image path': "images/Aegopodium podagraria/Aegopodium podagraria 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aesculus hippocastanum",
        'Dutch name': "Witte paardenkastanje",
        'Image path': "images/Aesculus hippocastanum/Aesculus hippocastanum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aesculus x carnea",
        'Dutch name': "Rode paardenkastanje",
        'Image path': "images/Aesculus x carnea/Aesculus x carnea 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Agastache 'Blue Fortune'",
        'Dutch name': "Dropplant",
        'Image path': "images/Agastache 'Blue Fortune'/Agastache 'Blue Fortune' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Agrimonia eupatoria",
        'Dutch name': "Gewone agrimonie",
        'Image path': "images/Agrimonia eupatoria/Agrimonia eupatoria 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ajuga reptans ' Atropurpurea'",
        'Dutch name': "Kruipend zenegroen",
        'Image path': "images/Ajuga reptans ' Atropurpurea'/Ajuga reptans ' Atropurpurea' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Akebia quinata",
        'Dutch name': "Schijnaugurk",
        'Image path': "images/Akebia quinata/Akebia quinata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Alcea rosea",
        'Dutch name': "Stokroos",
        'Image path': "images/Alcea rosea/Alcea rosea 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Alchemilla mollis",
        'Dutch name': "Fraaie vrouwenmantel",
        'Image path': "images/Alchemilla mollis/Alchemilla mollis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Alisma plantago-aquatica",
        'Dutch name': "Grote waterweegbree",
        'Image path': "images/Alisma plantago-aquatica/Alisma plantago-aquatica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Alliaria petiolata",
        'Dutch name': "Look-zonder-look",
        'Image path': "images/Alliaria petiolata/Alliaria petiolata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Allium christophii",
        'Dutch name': "Sterrenlook",
        'Image path': "images/Allium christophii/Allium christophii 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Allium schoenoprasum",
        'Dutch name': "Bieslook",
        'Image path': "images/Allium schoenoprasum/Allium schoenoprasum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Allium ursinum",
        'Dutch name': "Daslook",
        'Image path': "images/Allium ursinum/Allium ursinum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Alnus cordata",
        'Dutch name': "Hartbladige els",
        'Image path': "images/Alnus cordata/Alnus cordata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Alnus glutinosa",
        'Dutch name': "Zwarte els",
        'Image path': "images/Alnus glutinosa/Alnus glutinosa 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Alnus incana",
        'Dutch name': "Witte els",
        'Image path': "images/Alnus incana/Alnus incana 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Amelanchier ovalis",
        'Dutch name': "Europees krentenboompje",
        'Image path': "images/Amelanchier ovalis/Amelanchier ovalis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ammophila arenaria",
        'Dutch name': "Helmgras",
        'Image path': "images/Ammophila arenaria/Ammophila arenaria 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ampelopsis glandulosa 'Elegans'",
        'Dutch name': "Bonte wingerd",
        'Image path': "images/Ampelopsis glandulosa 'Elegans'/Ampelopsis glandulosa 'Elegans' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Anaphalis triplinervis",
        'Dutch name': "Siberische edelweiss",
        'Image path': "images/Anaphalis triplinervis/Anaphalis triplinervis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Anemone x hybrida 'Honorine Jobert'",
        'Dutch name': "Herfstanemoon",
        'Image path': "images/Anemone x hybrida 'Honorine Jobert'/Anemone x hybrida 'Honorine Jobert' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Anemone blanda",
        'Dutch name': "Oosterse anemoon",
        'Image path': "images/Anemone blanda/Anemone blanda 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Anemone nemorosa",
        'Dutch name': "Bosanemoon",
        'Image path': "images/Anemone nemorosa/Anemone nemorosa 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Anthriscus sylvestris",
        'Dutch name': "Fluitenkruid",
        'Image path': "images/Anthriscus sylvestris/Anthriscus sylvestris 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aquilegia vulgaris",
        'Dutch name': "Wilde akelei",
        'Image path': "images/Aquilegia vulgaris/Aquilegia vulgaris 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Araucaria araucana",
        'Dutch name': "Slangenden",
        'Image path': "images/Araucaria araucana/Araucaria araucana 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Arisaema consanguineum",
        'Dutch name': "Drakenvuurkorf",
        'Image path': "images/Arisaema consanguineum/Arisaema consanguineum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aristolochia macrophylla",
        'Dutch name': "Duitse pijp",
        'Image path': "images/Aristolochia macrophylla/Aristolochia macrophylla 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Armoracia rusticana",
        'Dutch name': "Mierikswortel",
        'Image path': "images/Armoracia rusticana/Armoracia rusticana 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aronia melanocarpa",
        'Dutch name': "Zwarte appelbes",
        'Image path': "images/Aronia melanocarpa/Aronia melanocarpa 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Artemisia abrotanum",
        'Dutch name': "Citroenkruid",
        'Image path': "images/Artemisia abrotanum/Artemisia abrotanum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Artemisia dracunculus",
        'Dutch name': "Dragon",
        'Image path': "images/Artemisia dracunculus/Artemisia dracunculus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Placeholder",
        'Dutch name': "Placeholder",
        'Image path': "images/Placeholder/Placeholder 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Artemisia lactiflora 'Elfenbein'",
        'Dutch name': "Alsem",
        'Image path': "images/Artemisia lactiflora 'Elfenbein'/Artemisia lactiflora 'Elfenbein' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Arum italicum",
        'Dutch name': "Italiaanse aronskelk",
        'Image path': "images/Arum italicum/Arum italicum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Arum maculatum",
        'Dutch name': "Gevlekte aronskelk",
        'Image path': "images/Arum maculatum/Arum maculatum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aruncus dioicus",
        'Dutch name': "Geitenbaard",
        'Image path': "images/Aruncus dioicus/Aruncus dioicus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Asarum europaeum",
        'Dutch name': "Mansoor",
        'Image path': "images/Asarum europaeum/Asarum europaeum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Asplenium scolopendrium",
        'Dutch name': "Tongvaren",
        'Image path': "images/Asplenium scolopendrium/Asplenium scolopendrium 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aster 'Prof. Anton Kippenberg'",
        'Dutch name': "Kussenaster",
        'Image path': "images/Aster 'Prof. Anton Kippenberg'/Aster 'Prof. Anton Kippenberg' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Aster x frikartii 'Mönch'",
        'Dutch name': "Herfstaster",
        'Image path': "images/Aster x frikartii 'Mönch'/Aster x frikartii 'Mönch' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aster amellus ' Veilchenkönigin'",
        'Dutch name': "Bergaster",
        'Image path': "images/Aster amellus ' Veilchenkönigin'/Aster amellus ' Veilchenkönigin' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aster divaricatus",
        'Dutch name': "Bosaster",
        'Image path': "images/Aster divaricatus/Aster divaricatus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aster lateriflorus 'Horizontalis'",
        'Dutch name': "Kleinbloemige aster",
        'Image path': "images/Aster lateriflorus 'Horizontalis'/Aster lateriflorus 'Horizontalis' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Aster novae-angliae 'Andenken an Alma Pötschke'",
        'Dutch name': "Nieuw-Engelse aster",
        'Image path': "images/Aster novae-angliae 'Andenken an Alma Pötschke'/Aster novae-angliae 'Andenken an Alma Pötschke' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Astilbe chinensis 'Pumila'",
        'Dutch name': "Pluimspirea",
        'Image path': "images/Astilbe chinensis 'Pumila'/Astilbe chinensis 'Pumila' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Astilboides tabularis",
        'Dutch name': "Tafelblad",
        'Image path': "images/Astilboides tabularis/Astilboides tabularis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Astrantia major",
        'Dutch name': "Zeeuws knoopje",
        'Image path': "images/Astrantia major/Astrantia major 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Athyrium filix-femina",
        'Dutch name': "Wijfjesvaren",
        'Image path': "images/Athyrium filix-femina/Athyrium filix-femina 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Athyrium niponicum var. pictum",
        'Dutch name': "Japanse regenboogvaren",
        'Image path': "images/Athyrium niponicum var. pictum/Athyrium niponicum var. pictum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Bergenia 'Bressingham Ruby'",
        'Dutch name': "Schoenlappersplant",
        'Image path': "images/Bergenia 'Bressingham Ruby'/Bergenia 'Bressingham Ruby' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Betula papyrifera",
        'Dutch name': "Papierberk",
        'Image path': "images/Betula papyrifera/Betula papyrifera 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Betula pendula",
        'Dutch name': "Ruwe berk",
        'Image path': "images/Betula pendula/Betula pendula 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Betula pubescens",
        'Dutch name': "Zachte berk",
        'Image path': "images/Betula pubescens/Betula pubescens 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Blechnum spicant",
        'Dutch name': "Dubbelloof",
        'Image path': "images/Blechnum spicant/Blechnum spicant 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Brunnera macrophylla 'Jack Frost'",
        'Dutch name': "Kaukasisch vergeet-mij-nietje",
        'Image path': "images/Brunnera macrophylla 'Jack Frost'/Brunnera macrophylla 'Jack Frost' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Buddleja davidii",
        'Dutch name': "Vlinderstruik",
        'Image path': "images/Buddleja davidii/Buddleja davidii 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Butomus umbellatus",
        'Dutch name': "Zwanenbloem",
        'Image path': "images/Butomus umbellatus/Butomus umbellatus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Buxus sempervirens",
        'Dutch name': "Palmboompje",
        'Image path': "images/Buxus sempervirens/Buxus sempervirens 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Calamagrostis x acutiflora 'Karl Foerster'",
        'Dutch name': "Pluimstruisriet",
        'Image path': "images/Calamagrostis x acutiflora 'Karl Foerster'/Calamagrostis x acutiflora 'Karl Foerster' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Calamintha nepeta subsp. nepeta",
        'Dutch name': "Bergsteentijm",
        'Image path': "images/Calamintha nepeta subsp. nepeta/Calamintha nepeta subsp. nepeta 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Calla palustris",
        'Dutch name': "Slangenwortel",
        'Image path': "images/Calla palustris/Calla palustris 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Calluna vulgaris",
        'Dutch name': "Struikhei",
        'Image path': "images/Calluna vulgaris/Calluna vulgaris 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Caltha palustris",
        'Dutch name': "Dotterbloem",
        'Image path': "images/Caltha palustris/Caltha palustris 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Camassia leichtlinii 'Caerulea'",
        'Dutch name': "Prairielelie",
        'Image path': "images/Camassia leichtlinii 'Caerulea'/Camassia leichtlinii 'Caerulea' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Campanula lactiflora ' Loddon Anna'",
        'Dutch name': "Klokjesbloem",
        'Image path': "images/Campanula lactiflora ' Loddon Anna'/Campanula lactiflora ' Loddon Anna' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Campanula rotundifolia",
        'Dutch name': "Grasklokje",
        'Image path': "images/Campanula rotundifolia/Campanula rotundifolia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Campsis radicans",
        'Dutch name': "Trompetklimmer",
        'Image path': "images/Campsis radicans/Campsis radicans 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cardamine pratensis",
        'Dutch name': "Pinksterbloem",
        'Image path': "images/Cardamine pratensis/Cardamine pratensis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Carex comans 'Bronze Form'",
        'Dutch name': "Zegge",
        'Image path': "images/Carex comans 'Bronze Form'/Carex comans 'Bronze Form' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Carex morrowii 'Variegata'",
        'Dutch name': "Japanse zegge",
        'Image path': "images/Carex morrowii 'Variegata'/Carex morrowii 'Variegata' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Carex pendula",
        'Dutch name': "Hangende zegge",
        'Image path': "images/Carex pendula/Carex pendula 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Carex plantaginea",
        'Dutch name': "Breedbladige zegge",
        'Image path': "images/Carex plantaginea/Carex plantaginea 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Carex sylvatica",
        'Dutch name': "Boszegge",
        'Image path': "images/Carex sylvatica/Carex sylvatica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Carpinus betulus",
        'Dutch name': "Haagbeuk",
        'Image path': "images/Carpinus betulus/Carpinus betulus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Castanea sativa",
        'Dutch name': "Tamme kastanje",
        'Image path': "images/Castanea sativa/Castanea sativa 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Catalpa bignonioides",
        'Dutch name': "Trompetboom",
        'Image path': "images/Catalpa bignonioides/Catalpa bignonioides 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cedrus deodara",
        'Dutch name': "Himalayaceder",
        'Image path': "images/Cedrus deodara/Cedrus deodara 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cedrus libani",
        'Dutch name': "Libanonceder",
        'Image path': "images/Cedrus libani/Cedrus libani 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cedrus libani subsp. atlantica",
        'Dutch name': "Atlasceder",
        'Image path': "images/Cedrus libani subsp. atlantica/Cedrus libani subsp. atlantica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Centranthus ruber 'Coccineus'",
        'Dutch name': "Rode valeriaan",
        'Image path': "images/Centranthus ruber 'Coccineus'/Centranthus ruber 'Coccineus' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ceratophyllum demersum",
        'Dutch name': "Grof hoornblad",
        'Image path': "images/Ceratophyllum demersum/Ceratophyllum demersum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ceratostigma plumbaginoides",
        'Dutch name': "Loodkruid",
        'Image path': "images/Ceratostigma plumbaginoides/Ceratostigma plumbaginoides 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cercidiphyllum japonicum",
        'Dutch name': "Katsuraboom",
        'Image path': "images/Cercidiphyllum japonicum/Cercidiphyllum japonicum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Chaenomeles x superba",
        'Dutch name': "Dwergkwee",
        'Image path': "images/Chaenomeles x superba/Chaenomeles x superba 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Chamaecyparis lawsoniana",
        'Dutch name': "Californische cipres",
        'Image path': "images/Chamaecyparis lawsoniana/Chamaecyparis lawsoniana 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Chamaecyparis nootkatensis",
        'Dutch name': "Nootkacipres",
        'Image path': "images/Chamaecyparis nootkatensis/Chamaecyparis nootkatensis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Chamaecyparis nootkatensis 'Pendula'",
        'Dutch name': "Treurcipres",
        'Image path': "images/Chamaecyparis nootkatensis 'Pendula'/Chamaecyparis nootkatensis 'Pendula' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Chelone obliqua",
        'Dutch name': "Schildpadbloem",
        'Image path': "images/Chelone obliqua/Chelone obliqua 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Chimonanthus praecox",
        'Dutch name': "Winterzoet",
        'Image path': "images/Chimonanthus praecox/Chimonanthus praecox 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Chionodoxa sardensis",
        'Dutch name': "Kleine sneeuwroem",
        'Image path': "images/Chionodoxa sardensis/Chionodoxa sardensis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Choisya ternata",
        'Dutch name': "Mexicaanse oranjebloesem",
        'Image path': "images/Choisya ternata/Choisya ternata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cirsium arvense",
        'Dutch name': "Akkerdistel",
        'Image path': "images/Cirsium arvense/Cirsium arvense 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Clematis alpina",
        'Dutch name': "Alpenbosrank",
        'Image path': "images/Clematis alpina/Clematis alpina 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Clematis montana",
        'Dutch name': "Bergbosrank",
        'Image path': "images/Clematis montana/Clematis montana 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Clematis tibetana subsp. tangutica",
        'Dutch name': "Gouden bosrank",
        'Image path': "images/Clematis tibetana subsp. tangutica/Clematis tibetana subsp. tangutica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Clematis vitalba",
        'Dutch name': "Wilde bosrank",
        'Image path': "images/Clematis vitalba/Clematis vitalba 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Clethra alnifolia",
        'Dutch name': "Schijnels",
        'Image path': "images/Clethra alnifolia/Clethra alnifolia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Colchicum autumnale",
        'Dutch name': "Herfsttijloos",
        'Image path': "images/Colchicum autumnale/Colchicum autumnale 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Comarum palustre",
        'Dutch name': "Wateraardbei",
        'Image path': "images/Comarum palustre/Comarum palustre 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Convallaria majalis",
        'Dutch name': "Lelietje-van-dalen",
        'Image path': "images/Convallaria majalis/Convallaria majalis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Cornus mas",
        'Dutch name': "Gele kornoelje",
        'Image path': "images/Cornus mas/Cornus mas 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cornus sanguinea",
        'Dutch name': "Rode kornoelje",
        'Image path': "images/Cornus sanguinea/Cornus sanguinea 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cortaderia selloana",
        'Dutch name': "Pampasgras",
        'Image path': "images/Cortaderia selloana/Cortaderia selloana 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Corydalis flexuosa",
        'Dutch name': "Helmbloem",
        'Image path': "images/Corydalis flexuosa/Corydalis flexuosa 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Corylopsis spicata",
        'Dutch name': "Schijnhazelaar",
        'Image path': "images/Corylopsis spicata/Corylopsis spicata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Corylus avellana",
        'Dutch name': "Hazelaar",
        'Image path': "images/Corylus avellana/Corylus avellana 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Corylus colurna",
        'Dutch name': "Boomhazelaar",
        'Image path': "images/Corylus colurna/Corylus colurna 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Corylus 'Fertile de Nottingham'",
        'Dutch name': "Hazelaar",
        'Image path': "images/Corylus 'Fertile de Nottingham'/Corylus 'Fertile de Nottingham' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Corylus 'Webb's Prize Cobb'",
        'Dutch name': "Hazelaar",
        'Image path': "images/Corylus 'Webb's Prize Cobb'/Corylus 'Webb's Prize Cobb' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cotinus coggygria",
        'Dutch name': "Pruikenboom",
        'Image path': "images/Cotinus coggygria/Cotinus coggygria 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Cotinus coggygria 'Royal Purple'",
        'Dutch name': "Pruikenboom",
        'Image path': "images/Cotinus coggygria 'Royal Purple'/Cotinus coggygria 'Royal Purple' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cotinus coggygria 'Young Lady'",
        'Dutch name': "Pruikenboom",
        'Image path': "images/Cotinus coggygria 'Young Lady'/Cotinus coggygria 'Young Lady' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Crambe cordifolia",
        'Dutch name': "Zeekool",
        'Image path': "images/Crambe cordifolia/Crambe cordifolia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Crataegus laevigata",
        'Dutch name': "Tweestijlige meidoorn",
        'Image path': "images/Crataegus laevigata/Crataegus laevigata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Crataegus monogyna",
        'Dutch name': "Éénstijlige meidoorn",
        'Image path': "images/Crataegus monogyna/Crataegus monogyna 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Crocosmia 'Lucifer'",
        'Dutch name': "Montbretia",
        'Image path': "images/Crocosmia 'Lucifer'/Crocosmia 'Lucifer' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Crocus flavus",
        'Dutch name': "Gele crocus",
        'Image path': "images/Crocus flavus/Crocus flavus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Crocus pulchellus 'Zephyr'",
        'Dutch name': "Herfst prachtkrokus",
        'Image path': "images/Crocus pulchellus 'Zephyr'/Crocus pulchellus 'Zephyr' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Crocus tommasinianus",
        'Dutch name': "Boerenkrokus",
        'Image path': "images/Crocus tommasinianus/Crocus tommasinianus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cryptomeria japonica",
        'Dutch name': "Japanse ceder",
        'Image path': "images/Cryptomeria japonica/Cryptomeria japonica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Cupressus sempervirens",
        'Dutch name': "Italiaanse cipres",
        'Image path': "images/Cupressus sempervirens/Cupressus sempervirens 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cyclamen coum",
        'Dutch name': "Rondbladige cyclaam",
        'Image path': "images/Cyclamen coum/Cyclamen coum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cyclamen hederifolium",
        'Dutch name': "Napolitaanse cyclaam",
        'Image path': "images/Cyclamen hederifolium/Cyclamen hederifolium 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cydonia oblonga",
        'Dutch name': "Kweeper",
        'Image path': "images/Cydonia oblonga/Cydonia oblonga 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Cytisus scoparius",
        'Dutch name': "Brem",
        'Image path': "images/PlacehoCytisus scopariuslder/Cytisus scoparius 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Daphne x burkwoodii",
        'Dutch name': "Peperboompje",
        'Image path': "images/Daphne x burkwoodii/Daphne x burkwoodii 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Daphne mezereum",
        'Dutch name': "Rood peperboompje",
        'Image path': "images/Daphne mezereum/Daphne mezereum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Darmera peltata",
        'Dutch name': "Schildblad",
        'Image path': "images/Darmera peltata/Darmera peltata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Daucus carota",
        'Dutch name': "Wilde peen",
        'Image path': "images/Daucus carota/Daucus carota 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Delphinium belladonna 'Völkerfrieden'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium belladonna 'Völkerfrieden'/Delphinium belladonna 'Völkerfrieden' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Delphinium 'Black knight'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium 'Black knight'/Delphinium 'Black knight' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Delphinium 'Pacific Galahad'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium 'Pacific Galahad'/Delphinium 'Pacific Galahad' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Delphinium 'Pink Blush'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium 'Pink Blush'/Delphinium 'Pink Blush' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Delphinium 'Summer Skies'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium 'Summer Skies'/Delphinium 'Summer Skies' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Deschampsia cespitosa",
        'Dutch name': "Ruwe smele",
        'Image path': "images/Deschampsia cespitosa/Deschampsia cespitosa 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Deutzia gracilis",
        'Dutch name': "Bruidsbloem",
        'Image path': "images/Deutzia gracilis/Deutzia gracilis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Dicentra formosa",
        'Dutch name': "Gebroken hartje",
        'Image path': "images/Dicentra formosa/Dicentra formosa 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Dicentra spectabilis",
        'Dutch name': "Gebroken hartje",
        'Image path': "images/Dicentra spectabilis/Dicentra spectabilis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Dictamnus albus",
        'Dutch name': "Vuurwerkplant",
        'Image path': "images/Dictamnus albus/Dictamnus albus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Dierama pulcherrimum",
        'Dutch name': "Engelenhengel",
        'Image path': "images/Dierama pulcherrimum/Dierama pulcherrimum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Digitalis lutea",
        'Dutch name': "Geel vingerhoedskruid",
        'Image path': "images/Digitalis lutea/Digitalis lutea 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Digitalis purpurea",
        'Dutch name': "Vingerhoedskruid",
        'Image path': "images/Digitalis purpurea/Digitalis purpurea 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Dipsacus fullonum",
        'Dutch name': "Grote kaardenbol",
        'Image path': "images/Dipsacus fullonum/Dipsacus fullonum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Doronicum orientale",
        'Dutch name': "Voorjaarszonnebloem",
        'Image path': "images/Doronicum orientale/Doronicum orientale 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Dryopteris erythrosora",
        'Dutch name': "Herfstvaren",
        'Image path': "images/Dryopteris erythrosora/Dryopteris erythrosora 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Dryopteris filix-mas",
        'Dutch name': "Mannetjesvaren",
        'Image path': "images/Dryopteris filix-mas/Dryopteris filix-mas 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Echinops ritro ' Veitch's Blue'",
        'Dutch name': "Kogeldistel",
        'Image path': "images/Echinops ritro ' Veitch's Blue'/Echinops ritro ' Veitch's Blue' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Echium vulgare",
        'Dutch name': "Slangenkruid",
        'Image path': "images/Echium vulgare/Echium vulgare 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Epilobium hirsutum",
        'Dutch name': "Harig wilgenroosje",
        'Image path': "images/Epilobium hirsutum/Epilobium hirsutum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Epimedium x perralchicum 'Frohnleiten'",
        'Dutch name': "Elfenbloem",
        'Image path': "images/Epimedium x perralchicum 'Frohnleiten'/Epimedium x perralchicum 'Frohnleiten' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Equisetum hyemale var. robustum",
        'Dutch name': "Schaafstro",
        'Image path': "images/Equisetum hyemale var. robustum/Equisetum hyemale var. robustum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Eranthis hyemalis",
        'Dutch name': "Winterakoniet",
        'Image path': "images/Eranthis hyemalis/Eranthis hyemalis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Eremurus stenophyllus",
        'Dutch name': "Naald van Cleopatra",
        'Image path': "images/Eremurus stenophyllus/Eremurus stenophyllus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Eryngium x zabelii 'Big Blue'",
        'Dutch name': "Kruisdistel",
        'Image path': "images/Eryngium x zabelii 'Big Blue'/Eryngium x zabelii 'Big Blue' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Erythronium dens-canis",
        'Dutch name': "Hondstand",
        'Image path': "images/Erythronium dens-canis/Erythronium dens-canis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Euonymus europaeus",
        'Dutch name': "Wilde kardinaalsmuts",
        'Image path': "images/Euonymus europaeus/Euonymus europaeus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Euonymus fortunei",
        'Dutch name': "Japanse kardinaalsmuts",
        'Image path': "images/Euonymus fortunei/Euonymus fortunei 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Eupatorium cannabinum",
        'Dutch name': "Koninginnekruid",
        'Image path': "images/Eupatorium cannabinum/Eupatorium cannabinum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Eupatorium maculatum ' Atropurpureum'",
        'Dutch name': "Leverkruid",
        'Image path': "images/Eupatorium maculatum ' Atropurpureum'/Eupatorium maculatum ' Atropurpureum' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Euphorbia amygdaloides var. robbiae",
        'Dutch name': "Amandelswolfsmelk",
        'Image path': "images/Euphorbia amygdaloides var. robbiae/Euphorbia amygdaloides var. robbiae 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Euphorbia characias subsp. wulfenii",
        'Dutch name': "Wolfsmelk",
        'Image path': "images/Euphorbia characias subsp. wulfenii/Euphorbia characias subsp. wulfenii 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Euphorbia griffithii 'Dixter'",
        'Dutch name': "Wolfsmelk",
        'Image path': "images/Euphorbia griffithii 'Dixter'/Euphorbia griffithii 'Dixter' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Exochorda 'The Bride'",
        'Dutch name': "Parelstruik",
        'Image path': "images/Exochorda 'The Bride'/Exochorda 'The Bride' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Fagus sylvatica",
        'Dutch name': "Beuk",
        'Image path': "images/Fagus sylvatica/Fagus sylvatica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Fallopia baldschuanica",
        'Dutch name': "Chinese bruidssluier",
        'Image path': "images/Fallopia baldschuanica/Fallopia baldschuanica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Festuca glauca",
        'Dutch name': "Vijgenboom",
        'Image path': "images/Festuca glauca/Festuca glauca 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ficus carica",
        'Dutch name': "Vijgenboom",
        'Image path': "images/Ficus carica/Ficus carica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Filipendula ulmaria",
        'Dutch name': "Moerasspirea",
        'Image path': "images/Filipendula ulmaria/Filipendula ulmaria 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Foeniculum vulgare",
        'Dutch name': "Venkel",
        'Image path': "images/Foeniculum vulgare/Foeniculum vulgare 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Forsythia x intermedia",
        'Dutch name': "Chinees klokje",
        'Image path': "images/Forsythia x intermedia/Forsythia x intermedia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Fragaria vesca",
        'Dutch name': "Bosaardbei",
        'Image path': "images/Fragaria vesca/Fragaria vesca 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Fragaria x ananassa",
        'Dutch name': "Aardbei",
        'Image path': "images/Fragaria x ananassa/Fragaria x ananassa 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Frangula alnus",
        'Dutch name': "Sporkehout",
        'Image path': "images/Frangula alnus/Frangula alnus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Fraxinus angustifolia",
        'Dutch name': "Smalbladige es",
        'Image path': "images/Fraxinus angustifolia/Fraxinus angustifolia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Fraxinus excelsior",
        'Dutch name': "Gewone es",
        'Image path': "images/Fraxinus excelsior/Fraxinus excelsior 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Fraxinus ornus",
        'Dutch name': "Pluim-es",
        'Image path': "images/Fraxinus ornus/Fraxinus ornus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Fritillaria meleagris",
        'Dutch name': "Wilde kievitsbloem",
        'Image path': "images/Fritillaria meleagris/Fritillaria meleagris 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Galanthus nivalis",
        'Dutch name': "Sneeuwklokje",
        'Image path': "images/Galanthus nivalis/Galanthus nivalis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Galeopsis tetrahit",
        'Dutch name': "Gewone hennepnetel",
        'Image path': "images/Galeopsis tetrahit/Galeopsis tetrahit 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Galium odoratum",
        'Dutch name': "Lievevrouwebedstro",
        'Image path': "images/Galium odoratum/Galium odoratum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Gaura lindheimeri ' Whirling Butterflies'",
        'Dutch name': "Prachtkaars",
        'Image path': "images/Gaura lindheimeri ' Whirling Butterflies'/Gaura lindheimeri ' Whirling Butterflies' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Geranium ' Ann Folkard'",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium ' Ann Folkard'/Geranium ' Ann Folkard' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Geranium ' Gerwat' ROZANNE",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium ' Gerwat' ROZANNE/Geranium ' Gerwat' ROZANNE 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Geranium x cantabrigiense ' Biokovo'",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium x cantabrigiense ' Biokovo'/Geranium x cantabrigiense ' Biokovo' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Geranium macrorrhizum",
        'Dutch name': "Rotsooievaarsbek",
        'Image path': "images/Geranium macrorrhizum/Geranium macrorrhizum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Geranium phaeum",
        'Dutch name': "Donkere ooievaarsbek",
        'Image path': "images/Geranium phaeum/Geranium phaeum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Geranium renardii",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium renardii/Geranium renardii 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Geranium sanguineum",
        'Dutch name': "Bloedooievaarsbek",
        'Image path': "images/Geranium sanguineum/Geranium sanguineum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Geranium wlassovianum",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium wlassovianum/Geranium wlassovianum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Geum rivale",
        'Dutch name': "Knikkend nagelkruid",
        'Image path': "images/Geum rivale/Geum rivale 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Ginkgo biloba",
        'Dutch name': "Japanse notenboom",
        'Image path': "images/Ginkgo biloba/Ginkgo biloba 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Gladiolus papilio",
        'Dutch name': "Vlindergladiool",
        'Image path': "images/Gladiolus papilio/Gladiolus papilio 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Glechoma hederacea",
        'Dutch name': "Hondsdraf",
        'Image path': "images/Glechoma hederacea/Glechoma hederacea 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Glyceria maxima",
        'Dutch name': "Liesgras",
        'Image path': "images/Glyceria maxima/Glyceria maxima 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Gunnera manicata",
        'Dutch name': "Mammoetblad",
        'Image path': "images/Gunnera manicata/Gunnera manicata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hakonechloa macra",
        'Dutch name': "Japans bosgras",
        'Image path': "images/Hakonechloa macra/Hakonechloa macra 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hamamelis x intermedia",
        'Dutch name': "Toverhazelaar",
        'Image path': "images/Hamamelis x intermedia/Hamamelis x intermedia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hedera helix",
        'Dutch name': "Klimop",
        'Image path': "images/Hedera helix/Hedera helix 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hedera hibernica",
        'Dutch name': "Ierse klimop",
        'Image path': "images/Hedera hibernica/Hedera hibernica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Helenium 'Moerheim Beauty'",
        'Dutch name': "Zonnekruid",
        'Image path': "images/Helenium 'Moerheim Beauty'/Helenium 'Moerheim Beauty' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Helianthus 'Lemon Queen'",
        'Dutch name': "Zonnebloem",
        'Image path': "images/Helianthus 'Lemon Queen'/Helianthus 'Lemon Queen' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Helichrysum italicum",
        'Dutch name': "Kerrieplant",
        'Image path': "images/Helichrysum italicum/Helichrysum italicum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Helictotrichon sempervirens",
        'Dutch name': "Sierhaver",
        'Image path': "images/Helictotrichon sempervirens/Helictotrichon sempervirens 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Helleborus argutifolius",
        'Dutch name': "Corsicaans nieskruid",
        'Image path': "images/Helleborus argutifolius/Helleborus argutifolius 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Helleborus foetidus",
        'Dutch name': "Stinkend nieskruid",
        'Image path': "images/Helleborus foetidus/Helleborus foetidus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Helleborus orientalis",
        'Dutch name': "Oosters nieskruid",
        'Image path': "images/Helleborus orientalis/Helleborus orientalis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Heptacodium miconioides",
        'Dutch name': "Zevenzonenboom",
        'Image path': "images/Heptacodium miconioides/Heptacodium miconioides 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Heracleum sphondylium",
        'Dutch name': "Gewone berenklauw",
        'Image path': "images/Heracleum sphondylium/Heracleum sphondylium 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Heuchera micrantha ' Palace Purple'",
        'Dutch name': "Purpurklokje",
        'Image path': "images/Heuchera micrantha ' Palace Purple'/Heuchera micrantha ' Palace Purple' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hibiscus syriacus",
        'Dutch name': "Altheastruik",
        'Image path': "images/Hibiscus syriacus/Hibiscus syriacus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Hippophae rhamnoides",
        'Dutch name': "Duindoorn",
        'Image path': "images/Hippophae rhamnoides/Hippophae rhamnoides 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hippuris vulgaris",
        'Dutch name': "Lidsteng",
        'Image path': "images/Hippuris vulgaris/Hippuris vulgaris 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hosta 'Elegans'",
        'Dutch name': "Hartlelie",
        'Image path': "images/Hosta 'Elegans'/Hosta 'Elegans' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hottonia palustris",
        'Dutch name': "Waterviolier",
        'Image path': "images/Hottonia palustris/Hottonia palustris 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Humulus lupulus",
        'Dutch name': "Hop",
        'Image path': "images/Humulus lupulus/Humulus lupulus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hyacinthoides non-scripta",
        'Dutch name': "Boshyacint",
        'Image path': "images/Hyacinthoides non-scripta/Hyacinthoides non-scripta 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hydrangea anomala subsp. petiolaris",
        'Dutch name': "Klimhortensia",
        'Image path': "images/Hydrangea anomala subsp. petiolaris/Hydrangea anomala subsp. petiolaris 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hydrangea aspera",
        'Dutch name': "Fluweelhortensia",
        'Image path': "images/Hydrangea aspera/Hydrangea aspera 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hydrangea macrophylla",
        'Dutch name': "Boerenhortensia",
        'Image path': "images/Hydrangea macrophylla/Hydrangea macrophylla 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hydrangea paniculata",
        'Dutch name': "Pluimhortensia",
        'Image path': "images/Hydrangea paniculata/Hydrangea paniculata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Hydrangea quercifolia",
        'Dutch name': "Eikenbladhortensia",
        'Image path': "images/Hydrangea quercifolia/Hydrangea quercifolia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hydrangea serrata",
        'Dutch name': "Berghortensia",
        'Image path': "images/Hydrangea serrata/Hydrangea serrata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hydrocharis morsus-ranae",
        'Dutch name': "Kikkerbeet",
        'Image path': "images/Hydrocharis morsus-ranae/Hydrocharis morsus-ranae 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hypericum perforatum",
        'Dutch name': "Sint-Janskruid",
        'Image path': "images/Hypericum perforatum/Hypericum perforatum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hypochaeris radicata",
        'Dutch name': "Gewoon biggenkruid",
        'Image path': "images/Hypochaeris radicata/Hypochaeris radicata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Hyssopus officinalis",
        'Dutch name': "Hysop",
        'Image path': "images/Hyssopus officinalis/Hyssopus officinalis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Iberis sempervirens",
        'Dutch name': "Scheefkelk",
        'Image path': "images/Iberis sempervirens/Iberis sempervirens 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ilex aquifolium",
        'Dutch name': "Gewone hulst",
        'Image path': "images/Ilex aquifolium/Ilex aquifolium 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ilex crenata 'Convexa'",
        'Dutch name': "Japanse hulst",
        'Image path': "images/Ilex crenata 'Convexa'/Ilex crenata 'Convexa' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Impatiens glandulifera",
        'Dutch name': "Reuzenbalsemien",
        'Image path': "images/Impatiens glandulifera/Impatiens glandulifera 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Imperata cylindrica 'Red Baron'",
        'Dutch name': "Japans bloedgras",
        'Image path': "images/Imperata cylindrica 'Red Baron'/Imperata cylindrica 'Red Baron' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Iris pseudacorus",
        'Dutch name': "Gele lis",
        'Image path': "images/Iris pseudacorus/Iris pseudacorus 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Iris reticulata",
        'Dutch name': "Dwergiris",
        'Image path': "images/Iris reticulata/Iris reticulata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Iris sibirica 'Blue King'",
        'Dutch name': "Siberische lis",
        'Image path': "images/Iris sibirica 'Blue King'/PlaIris sibirica 'Blue King'ceholder 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Jasminum nudiflorum",
        'Dutch name': "Winterjasmijn",
        'Image path': "images/Jasminum nudiflorum/Jasminum nudiflorum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Juglans regia",
        'Dutch name': "Walnootboom",
        'Image path': "images/Juglans regia/Juglans regia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Juniperus communis",
        'Dutch name': "Jeneverbes",
        'Image path': "images/Juniperus communis/Juniperus communis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Juniperus horizontalis",
        'Dutch name': "Kruipende jeneverbes",
        'Image path': "images/Juniperus horizontalis/Juniperus horizontalis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Kalimeris incisa 'Madiva'",
        'Dutch name': "Zomeraster",
        'Image path': "images/Kalimeris incisa 'Madiva'/Kalimeris incisa 'Madiva' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Kerria japonica",
        'Dutch name': "Ranonkelstruik",
        'Image path': "images/Kerria japonica/Kerria japonica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Kirengeshoma palmata",
        'Dutch name': "Japanse wasbloem",
        'Image path': "images/Kirengeshoma palmata/Kirengeshoma palmata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Knautia macedonica",
        'Dutch name': "Beemdkroon",
        'Image path': "images/Knautia macedonica/Knautia macedonica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Kolkwitzia amabilis",
        'Dutch name': "Koninginnenstruik",
        'Image path': "images/Kolkwitzia amabilis/Kolkwitzia amabilis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lamiastrum galeobdolon",
        'Dutch name': "Gele dovenetel",
        'Image path': "images/Lamiastrum galeobdolon/Lamiastrum galeobdolon 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lamium maculatum 'White Nancy'",
        'Dutch name': "Gevlekte dovenetel",
        'Image path': "images/Lamium maculatum 'White Nancy'/Lamium maculatum 'White Nancy' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lamium orvala",
        'Dutch name': "Struikdovenetel",
        'Image path': "images/Lamium orvala/Lamium orvala 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lamium purpureum",
        'Dutch name': "Paarse dovenetel",
        'Image path': "images/Lamium purpureum/Lamium purpureum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Larix decidua",
        'Dutch name': "Europese lariks",
        'Image path': "images/Larix decidua/Larix decidua 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Laurus nobilis",
        'Dutch name': "Echte laurier",
        'Image path': "images/Laurus nobilis/Laurus nobilis 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lavandula angustifolia",
        'Dutch name': "Echte Lavendel",
        'Image path': "images/Lavandula angustifolia/Lavandula angustifolia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Leucanthemum vulgare",
        'Dutch name': "Gewone margriet",
        'Image path': "images/Leucanthemum vulgare/Leucanthemum vulgare 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Leucojum aestivum",
        'Dutch name': "Zomerklokje",
        'Image path': "images/Leucojum aestivum/Leucojum aestivum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Levisticum officinale",
        'Dutch name': "Lavas",
        'Image path': "images/Levisticum officinale/Levisticum officinale 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Leymus arenarius",
        'Dutch name': "Zandhaver",
        'Image path': "images/Leymus arenarius/Leymus arenarius 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Liatris spicata",
        'Dutch name': "Lampenpoetser",
        'Image path': "images/Liatris spicata/Liatris spicata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ligularia dentata 'Othello'",
        'Dutch name': "Tongkruiskruid",
        'Image path': "images/Ligularia dentata 'Othello'/Ligularia dentata 'Othello' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ligularia przewalskii",
        'Dutch name': "Kruiskruid",
        'Image path': "images/Ligularia przewalskii/Ligularia przewalskii 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ligustrum ovalifolium",
        'Dutch name': "Haagliguster",
        'Image path': "images/Ligustrum ovalifolium/Ligustrum ovalifolium 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Ligustrum vulgare",
        'Dutch name': "Wilde liguster",
        'Image path': "images/Ligustrum vulgare/Ligustrum vulgare 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lilium martagon",
        'Dutch name': "Turkse lelie",
        'Image path': "images/Lilium martagon/Lilium martagon 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Liquidambar styraciflua",
        'Dutch name': "Amerikaanse amberboom",
        'Image path': "images/Liquidambar styraciflua/Liquidambar styraciflua 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Liriodendron tulipifera",
        'Dutch name': "Tulpenboom",
        'Image path': "images/Liriodendron tulipifera/Liriodendron tulipifera 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Liriope muscari",
        'Dutch name': "Leliegras",
        'Image path': "images/Liriope muscari/Liriope muscari 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lonicera caprifolium",
        'Dutch name': "Tuinkamperfoelie",
        'Image path': "images/Lonicera caprifolium/Lonicera caprifolium 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lonicera fragrantissima",
        'Dutch name': "Winterkamperfoelie",
        'Image path': "images/Lonicera fragrantissima/Lonicera fragrantissima 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lonicera japonica",
        'Dutch name': "Japanse kamperfoelie",
        'Image path': "images/Lonicera japonica/Lonicera japonica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lonicera periclymenum",
        'Dutch name': "Wilde kamperfoelie",
        'Image path': "images/Lonicera periclymenum/Lonicera periclymenum 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lonicera xylosteum",
        'Dutch name': "Rode kamperfoelie",
        'Image path': "images/Lonicera xylosteum/PlacLonicera xylosteumeholder 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lupinus 'The Chatelaine'",
        'Dutch name': "Lupine",
        'Image path': "images/Lupinus 'The Chatelaine'/Lupinus 'The Chatelaine' 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Luzula nivea",
        'Dutch name': "Sneeuwwitte veldbies",
        'Image path': "images/Luzula nivea/Luzula nivea 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        {
        'Latin name': "Luzula sylvatica",
        'Dutch name': "Grote veldbies",
        'Image path': "images/Luzula sylvatica/Luzula sylvatica 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lychnis flos-cuculi",
        'Dutch name': "Echte koekoeksbloem",
        'Image path': "images/Lychnis flos-cuculi/Lychnis flos-cuculi 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lysimachia clethroides",
        'Dutch name': "Wederik",
        'Image path': "images/Lysimachia clethroides/Lysimachia clethroides 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lysimachia nummularia",
        'Dutch name': "Penningkruid",
        'Image path': "images/Lysimachia nummularia/Lysimachia nummularia 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lysimachia punctata",
        'Dutch name': "Puntwederik",
        'Image path': "images/Lysimachia punctata/Lysimachia punctata 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Lythrum salicaria",
        'Dutch name': "Grote kattenstaart",
        'Image path': "images/Lythrum salicaria/Lythrum salicaria 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
        // Tot hier
    {
        'Latin name': "Macleaya microcarpa ' Kelway's Coral Plume'",
        'Dutch name': "Pluimpapaver",
        'Image path': "images/Macleaya microcarpa ' Kelway's Coral Plume'/Macleaya microcarpa ' Kelway's Coral Plume' 1.jpg",
        'Sub images': [
            "images/Macleaya microcarpa ' Kelway's Coral Plume'/Macleaya microcarpa ' Kelway's Coral Plume' 2.jpg",
        ]},
    {
        'Latin name': "Magnolia stellata",
        'Dutch name': "Stermagnolia",
        'Image path': "images/Magnolia stellata/Magnolia stellata 1.jpg",
        'Sub images': [
            "images/Magnolia stellata/Magnolia stellata 2.jpg",
            "images/Magnolia stellata/Magnolia stellata 3.jpg",
            "images/Magnolia stellata/Magnolia stellata 4.jpg",
            "images/Magnolia stellata/Magnolia stellata 5.jpg",
            "images/Magnolia stellata/Magnolia stellata 6.jpg",
        ]},
    {
        'Latin name': "Magnolia x soulangeana",
        'Dutch name': "Beverboom",
        'Image path': "images/Magnolia x soulangeana/Magnolia x soulangeana 1.jpg",
        'Sub images': [
            "images/Magnolia x soulangeana/Magnolia x soulangeana 2.jpg",
            "images/Magnolia x soulangeana/Magnolia x soulangeana 3.jpg",
            "images/Magnolia x soulangeana/Magnolia x soulangeana 4.jpg",
        ]},
    {
        'Latin name': "Malus domestica",
        'Dutch name': "Appelboom",
        'Image path': "images/Malus domestica/Malus domestica 1.jpg",
        'Sub images': [
            "images/Malus domestica/Malus domestica 2.jpg",
            "images/Malus domestica/Malus domestica 3.jpg",
        ]},
        {
        'Latin name': "Malus sylvestris",
        'Dutch name': "Wilde appelboom",
        'Image path': "images/Malus sylvestris/Malus sylvestris 1.jpg",
        'Sub images': [
            "images/Malus sylvestris/Malus sylvestris 2.jpg",
            "images/Malus sylvestris/Malus sylvestris 3.jpg",
            "images/Malus sylvestris/Malus sylvestris 4.jpg",
        ]},
    {
        'Latin name': "Malva moschata",
        'Dutch name': "Muskuskaasjeskruid",
        'Image path': "images/Malva moschata/Malva moschata 1.jpg",
        'Sub images': [
            "images/Malva moschata/Malva moschata 2.jpg",
            "images/Malva moschata/Malva moschata 3.jpg",
        ]},
    {
        'Latin name': "Matricaria recutita",
        'Dutch name': "Echte kamille",
        'Image path': "images/Matricaria recutita/Matricaria recutita 1.jpg",
        'Sub images': [
            "images/Matricaria recutita/Matricaria recutita 2.jpg",
            "images/Matricaria recutita/Matricaria recutita 3.jpg",
        ]},
    {
        'Latin name': "Matteuccia struthiopteris",
        'Dutch name': "Struisvaren",
        'Image path': "images/Matteuccia struthiopteris/Matteuccia struthiopteris 1.jpg",
        'Sub images': [
            "images/Matteuccia struthiopteris/Matteuccia struthiopteris 2.jpg",
            "images/Matteuccia struthiopteris/Matteuccia struthiopteris 3.jpg",
        ]},
    {
        'Latin name': "Melilotus albus",
        'Dutch name': "Witte honingklaver",
        'Image path': "images/Melilotus albus/Melilotus albus 1.jpg",
        'Sub images': [
            "images/Melilotus albus/Melilotus albus 2.jpg",
        ]},
    {
        'Latin name': "Mentha aquatica",
        'Dutch name': "Watermunt",
        'Image path': "images/Mentha aquatica/Mentha aquatica 1.jpg",
        'Sub images': [
            "images/Mentha aquatica/Mentha aquatica 2.jpg",
            "images/Mentha aquatica/Mentha aquatica 3.jpg",
        ]},
    {
        'Latin name': "Mentha spicata 'Moroccan'",
        'Dutch name': "Marokkaanse kruizemunt",
        'Image path': "images/Mentha spicata 'Moroccan'/Mentha spicata 'Moroccan' 1.jpg",
        'Sub images': [
            "images/Mentha spicata 'Moroccan'/Mentha spicata 'Moroccan' 2.jpg",
        ]},
    {
        'Latin name': "Mentha x piperita",
        'Dutch name': "Pepermunt",
        'Image path': "images/Mentha x piperita/Mentha x piperita 1.jpg",
        'Sub images': [
            "images/Mentha x piperita/Mentha x piperita 2.jpg",
        ]},
    {
        'Latin name': "Menyanthes trifoliata",
        'Dutch name': "Waterdrieblad",
        'Image path': "images/Menyanthes trifoliata/Menyanthes trifoliata 1.jpg",
        'Sub images': [
            "images/Menyanthes trifoliata/Menyanthes trifoliata 2.jpg",
            "images/Menyanthes trifoliata/Menyanthes trifoliata 3.jpg",
        ]},
    {
        'Latin name': "Mespilus germanica",
        'Dutch name': "Mispelboom",
        'Image path': "images/Mespilus germanica/Mespilus germanica 1.jpg",
        'Sub images': [
            "images/Mespilus germanica/Mespilus germanica 2.jpg",
            "images/Mespilus germanica/Mespilus germanica 3.jpg",
            "images/Mespilus germanica/Mespilus germanica 4.jpg",
        ]},
    {
        'Latin name': "Metasequoia glyptostroboides",
        'Dutch name': "Watercipres",
        'Image path': "images/Metasequoia glyptostroboides/Metasequoia glyptostroboides 1.jpg",
        'Sub images': [
            "images/Metasequoia glyptostroboides/Metasequoia glyptostroboides 2.jpg",
            "images/Metasequoia glyptostroboides/Metasequoia glyptostroboides 3.jpg",
            "images/Metasequoia glyptostroboides/Metasequoia glyptostroboides 4.jpg",
            "images/Metasequoia glyptostroboides/Metasequoia glyptostroboides 5.jpg",
        ]},
    {
        'Latin name': "Miscanthus sinensis",
        'Dutch name': "Prachtriet",
        'Image path': "images/Miscanthus sinensis/Miscanthus sinensis 1.jpg",
        'Sub images': [
            "images/Miscanthus sinensis/Miscanthus sinensis 2.jpg",
            "images/Miscanthus sinensis/Miscanthus sinensis 3.jpg",
        ]},
    {
        'Latin name': "Molinia caerulea",
        'Dutch name': "Pijpenstrootje",
        'Image path': "images/Molinia caerulea/Molinia caerulea 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Monarda 'Squaw'",
        'Dutch name': "Bergamotplant",
        'Image path': "images/Monarda 'Squaw'/Monarda 'Squaw' 1.jpg",
        'Sub images': [
            "images/Monarda 'Squaw'/Monarda 'Squaw' 2.jpg",
        ]},
    {
        'Latin name': "Morus nigra",
        'Dutch name': "Zwarte moerbei",
        'Image path': "images/Morus nigra/Morus nigra 1.jpg",
        'Sub images': [
            "images/Morus nigra/Morus nigra 2.jpg",
            "images/Morus nigra/Morus nigra 3.jpg",
            "images/Morus nigra/Morus nigra 4.jpg",
        ]},
    {
        'Latin name': "Muhlenbergia capillaris",
        'Dutch name': "Roze muhlygras",
        'Image path': "images/Muhlenbergia capillaris/Muhlenbergia capillaris 1.jpg",
        'Sub images': [
            "images/Muhlenbergia capillaris/Muhlenbergia capillaris 2.jpg",
            "images/Muhlenbergia capillaris/Muhlenbergia capillaris 3.jpg",
        ]},
    {
        'Latin name': "Muscari botryoides",
        'Dutch name': "Blauwe druifjes",
        'Image path': "images/Muscari botryoides/Muscari botryoides 1.jpg",
        'Sub images': [
            "images/Muscari botryoides/Muscari botryoides 2.jpg",
        ]},
    {
        'Latin name': "Myriophyllum spicatum",
        'Dutch name': "Aarvederkruid",
        'Image path': "images/Myriophyllum spicatum/Myriophyllum spicatum 1.jpg",
        'Sub images': [
            "images/Myriophyllum spicatum/Myriophyllum spicatum 2.jpg",
            "images/Myriophyllum spicatum/Myriophyllum spicatum 3.jpg",
        ]},
    {
        'Latin name': "Myrrhis odorata",
        'Dutch name': "Roomse kervel",
        'Image path': "images/Myrrhis odorata/Myrrhis odorata 1.jpg",
        'Sub images': [
            "images/Myrrhis odorata/Myrrhis odorata 2.jpg",
            "images/Myrrhis odorata/Myrrhis odorata 3.jpg",
            "images/Myrrhis odorata/Myrrhis odorata 4.jpg",
            "images/Myrrhis odorata/Myrrhis odorata 5.jpg",
        ]},
    {
        'Latin name': "Narcissus bulbocodium",
        'Dutch name': "Hoepelroknarcis",
        'Image path': "images/Narcissus bulbocodium/Narcissus bulbocodium 1.jpg",
        'Sub images': [
            "images/Narcissus bulbocodium/Narcissus bulbocodium 2.jpg",
        ]},
    {
        'Latin name': "Narcissus poeticus",
        'Dutch name': "Dichtersnarcis",
        'Image path': "images/Narcissus poeticus/Narcissus poeticus 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Narcissus pseudonarcissus",
        'Dutch name': "Wilde narcis",
        'Image path': "images/Narcissus pseudonarcissus/Narcissus pseudonarcissus 1.jpg",
        'Sub images': [
            "images/Narcissus pseudonarcissus/Narcissus pseudonarcissus 2.jpg",
            "images/Narcissus pseudonarcissus/Narcissus pseudonarcissus 3.jpg",
        ]},
    {
        'Latin name': "Nepeta 'Walker's Low'",
        'Dutch name': "Kattenkruid",
        'Image path': "images/Nepeta 'Walker's Low'/Nepeta 'Walker's Low' 1.jpg",
        'Sub images': [
            "images/Nepeta 'Walker's Low'/Nepeta 'Walker's Low' 2.jpg",
        ]},
    {
        'Latin name': "Nimphaea alba",
        'Dutch name': "Witte waterlelie",
        'Image path': "images/Nimphaea alba/Nimphaea alba 1.jpg",
        'Sub images': [
            "images/Nimphaea alba/Nimphaea alba 2.jpg",
        ]},
    {
        'Latin name': "Nuphar lutea",
        'Dutch name': "Gele plomp",
        'Image path': "images/Nuphar lutea/Nuphar lutea 1.jpg",
        'Sub images': [
            "images/Nuphar lutea/Nuphar lutea 2.jpg",
            "images/Nuphar lutea/Nuphar lutea 3.jpg",
        ]},
    {
        'Latin name': "Nymphoides peltata",
        'Dutch name': "Watergentiaan",
        'Image path': "images/Nymphoides peltata/Nymphoides peltata 1.jpg",
        'Sub images': [
            "images/Nymphoides peltata/Nymphoides peltata 2.jpg",
            "images/Nymphoides peltata/Nymphoides peltata 3.jpg",
            "images/Nymphoides peltata/Nymphoides peltata 4.jpg",
        ]},
    {
        'Latin name': "Oenothera glazioviana",
        'Dutch name': "Grote teunisbloem",
        'Image path': "images/Oenothera glazioviana/Oenothera glazioviana 1.jpg",
        'Sub images': [
            "images/Oenothera glazioviana/Oenothera glazioviana 2.jpg",
        ]},
    {
        'Latin name': "Origanum vulgare subsp. hirtum",
        'Dutch name': "Griekse oregano",
        'Image path': "images/Origanum vulgare subsp. hirtum/Origanum vulgare subsp. hirtum 1.jpg",
        'Sub images': [
            "images/Origanum vulgare subsp. hirtum/Origanum vulgare subsp. hirtum 2.jpg",
            "images/Origanum vulgare subsp. hirtum/Origanum vulgare subsp. hirtum 3.jpg",
        ]},
    {
        'Latin name': "Ornithogalum umbellatum",
        'Dutch name': "Gewone vogelmelk",
        'Image path': "images/Ornithogalum umbellatum/Ornithogalum umbellatum 1.jpg",
        'Sub images': [
            "images/Ornithogalum umbellatum/Ornithogalum umbellatum 2.jpg",
        ]},
    {
        'Latin name': "Osmanthus x burkwoodii",
        'Dutch name': "Schijnhulst",
        'Image path': "images/Osmanthus x burkwoodii/Osmanthus x burkwoodii 1.jpg",
        'Sub images': [
            "images/Osmanthus x burkwoodii/Osmanthus x burkwoodii 2.jpg",
            "images/Osmanthus x burkwoodii/Osmanthus x burkwoodii 3.jpg",
            "images/Osmanthus x burkwoodii/Osmanthus x burkwoodii 4.jpg",
        ]},
    {
        'Latin name': "Osmunda regalis",
        'Dutch name': "Koningsvaren",
        'Image path': "images/Osmunda regalis/Osmunda regalis 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Panicum virgatum",
        'Dutch name': "Vingergras",
        'Image path': "images/Panicum virgatum/Panicum virgatum 1.jpg",
        'Sub images': [
            "images/Panicum virgatum/Panicum virgatum 2.jpg",
        ]},
    {
        'Latin name': "Parthenocissus quinquefolia",
        'Dutch name': "Vijfbladige wingerd",
        'Image path': "images/Parthenocissus quinquefolia/Parthenocissus quinquefolia 1.jpg",
        'Sub images': [
            "images/Parthenocissus quinquefolia/Parthenocissus quinquefolia 2.jpg",
            "images/Parthenocissus quinquefolia/Parthenocissus quinquefolia 3.jpg",
            "images/Parthenocissus quinquefolia/Parthenocissus quinquefolia 4.jpg",
        ]},
    {
        'Latin name': "Parthenocissus tricuspidata",
        'Dutch name': "Driebladige wingerd",
        'Image path': "images/Parthenocissus tricuspidata/Parthenocissus tricuspidata 1.jpg",
        'Sub images': [
            "images/Parthenocissus tricuspidata/Parthenocissus tricuspidata 2.jpg",
            "images/Parthenocissus tricuspidata/Parthenocissus tricuspidata 3.jpg",
            "images/Parthenocissus tricuspidata/Parthenocissus tricuspidata 4.jpg",
        ]},
    {
        'Latin name': "Passiflora caerulea",
        'Dutch name': "Blauwe passiebloem",
        'Image path': "images/Passiflora caerulea/Passiflora caerulea 1.jpg",
        'Sub images': [
            "images/Passiflora caerulea/Passiflora caerulea 2.jpg",
            "images/Passiflora caerulea/Passiflora caerulea 3.jpg",
        ]},
    {
        'Latin name': "Paulownia tomentosa",
        'Dutch name': "Anna Paulownaboom",
        'Image path': "images/Paulownia tomentosa/Paulownia tomentosa 1.jpg",
        'Sub images': [
            "images/Paulownia tomentosa/Paulownia tomentosa 2.jpg",
            "images/Paulownia tomentosa/Paulownia tomentosa 3.jpg",
            "images/Paulownia tomentosa/Paulownia tomentosa 4.jpg",
        ]},
    {
        'Latin name': "Pennisetum alopecuroides",
        'Dutch name': "Lampenpetsersgras",
        'Image path': "images/Pennisetum alopecuroides/Pennisetum alopecuroides 1.jpg",
        'Sub images': [
            "images/Pennisetum alopecuroides/Pennisetum alopecuroides 2.jpg",
        ]},
    {
        'Latin name': "Perovskia atriplicifolia 'Little Spire'",
        'Dutch name': "Reuzenlavendel",
        'Image path': "images/Perovskia atriplicifolia 'Little Spire'/Perovskia atriplicifolia 'Little Spire' 1.jpg",
        'Sub images': [
            "images/Perovskia atriplicifolia 'Little Spire'/Perovskia atriplicifolia 'Little Spire' 2.jpg",
            "images/Perovskia atriplicifolia 'Little Spire'/Perovskia atriplicifolia 'Little Spire' 3.jpg",
        ]},
    {
        'Latin name': "Persicaria amplexicaulis",
        'Dutch name': "Duizendknoop",
        'Image path': "images/Persicaria amplexicaulis/Persicaria amplexicaulis 1.jpg",
        'Sub images': [
            "images/Persicaria amplexicaulis/Persicaria amplexicaulis 2.jpg",
        ]},
    {
        'Latin name': "Persicaria bistorta 'Superba'",
        'Dutch name': "Adderwortel",
        'Image path': "images/Persicaria bistorta 'Superba'/Persicaria bistorta 'Superba' 1.jpg",
        'Sub images': [
            "images/Persicaria bistorta 'Superba'/Persicaria bistorta 'Superba' 2.jpg",
        ]},
    {
        'Latin name': "Petasites hybridus",
        'Dutch name': "Groot hoefblad",
        'Image path': "images/Petasites hybridus/Petasites hybridus 1.jpg",
        'Sub images': [
            "images/Petasites hybridus/Petasites hybridus 2.jpg",
        ]},
    {
        'Latin name': "Philadelphus coronarius",
        'Dutch name': "Boerenjasmijn",
        'Image path': "images/Philadelphus coronarius/Philadelphus coronarius 1.jpg",
        'Sub images': [
            "images/Philadelphus coronarius/Philadelphus coronarius 2.jpg",
        ]},
    {
        'Latin name': "Phlomis russeliana",
        'Dutch name': "Brandkruid",
        'Image path': "images/Phlomis russeliana/Phlomis russeliana 1.jpg",
        'Sub images': [
            "images/Phlomis russeliana/Phlomis russeliana 2.jpg",
        ]},
    {
        'Latin name': "Phlox paniculata",
        'Dutch name': "Vlambloem",
        'Image path': "images/Phlox paniculata/Phlox paniculata 1.jpg",
        'Sub images': [
            "images/Phlox paniculata/Phlox paniculata 2.jpg",
        ]},
    {
        'Latin name': "Phragmites australis",
        'Dutch name': "Riet",
        'Image path': "images/Phragmites australis/Phragmites australis 1.jpg",
        'Sub images': [
            "images/Phragmites australis/Phragmites australis 2.jpg",
            "images/Phragmites australis/Phragmites australis 3.jpg",
        ]},
    {
        'Latin name': "Physocarpus opulifolius",
        'Dutch name': "Blaasspirea",
        'Image path': "images/Physocarpus opulifolius/Physocarpus opulifolius 1.jpg",
        'Sub images': [
            "images/Physocarpus opulifolius/Physocarpus opulifolius 2.jpg",
            "images/Physocarpus opulifolius/Physocarpus opulifolius 3.jpg",
        ]},
    {
        'Latin name': "Picea abies",
        'Dutch name': "Fijnspar",
        'Image path': "images/Picea abies/Picea abies 1.jpg",
        'Sub images': [
            "images/Picea abies/Picea abies 2.jpg",
            "images/Picea abies/Picea abies 3.jpg",
        ]},
    {
        'Latin name': "Pinus mugo",
        'Dutch name': "Bergden",
        'Image path': "images/Pinus mugo/Pinus mugo 1.jpg",
        'Sub images': [
            "images/Pinus mugo/Pinus mugo 2.jpg",
            "images/Pinus mugo/Pinus mugo 3.jpg",
        ]},
    {
        'Latin name': "Pinus nigra subsp. nigra",
        'Dutch name': "Oostenrijkse den",
        'Image path': "images/Pinus nigra subsp. nigra/Pinus nigra subsp. nigra 1.jpg",
        'Sub images': [
            "images/Pinus nigra subsp. nigra/Pinus nigra subsp. nigra 2.jpg",
            "images/Pinus nigra subsp. nigra/Pinus nigra subsp. nigra 3.jpg",
        ]},
    {
        'Latin name': "Pinus strobus",
        'Dutch name': "Weymouthden",
        'Image path': "images/Pinus strobus/Pinus strobus 1.jpg",
        'Sub images': [
            "images/Pinus strobus/Pinus strobus 2.jpg",
            "images/Pinus strobus/Pinus strobus 3.jpg",
        ]},
    {
        'Latin name': "Pinus sylvestris",
        'Dutch name': "Grove den",
        'Image path': "images/Pinus sylvestris/Pinus sylvestris 1.jpg",
        'Sub images': [
            "images/Pinus sylvestris/Pinus sylvestris 2.jpg",
            "images/Pinus sylvestris/Pinus sylvestris 3.jpg",
            "images/Pinus sylvestris/Pinus sylvestris 4.jpg",
        ]},
    {
        'Latin name': "Plantago lanceolata",
        'Dutch name': "Smalle weegbree",
        'Image path': "images/Plantago lanceolata/Plantago lanceolata 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Plantago major",
        'Dutch name': "Gewone weegbree",
        'Image path': "images/Plantago major/Plantago major 1.jpg",
        'Sub images': [
            "images/Plantago major/Plantago major 2.jpg",
        ]},
    {
        'Latin name': "Platanus occidentalis",
        'Dutch name': "Westerse plataan",
        'Image path': "images/Platanus occidentalis/Platanus occidentalis 1.jpg",
        'Sub images': [
            "images/Platanus occidentalis/Platanus occidentalis 2.jpg",
            "images/Platanus occidentalis/Platanus occidentalis 3.jpg",
            "images/Platanus occidentalis/Platanus occidentalis 4.jpg",
        ]},
    {
        'Latin name': "Platanus orientalis",
        'Dutch name': "Oosterse plataan",
        'Image path': "images/Platanus orientalis/Platanus orientalis 1.jpg",
        'Sub images': [
            "images/Platanus orientalis/Platanus orientalis 2.jpg",
            "images/Platanus orientalis/Platanus orientalis 3.jpg",
        ]},
    {
        'Latin name': "Platanus x hispanica",
        'Dutch name': "Gewone plataan",
        'Image path': "images/Platanus x hispanica/Platanus x hispanica 1.jpg",
        'Sub images': [
            "images/Platanus x hispanica/Platanus x hispanica 2.jpg",
            "images/Platanus x hispanica/Platanus x hispanica 3.jpg",
        ]},
    {
        'Latin name': "Polygonatum multiflorum",
        'Dutch name': "Gewone salomonszegel",
        'Image path': "images/Polygonatum multiflorum/Polygonatum multiflorum 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Polygonum aviculare",
        'Dutch name': "Varkensgras",
        'Image path': "images/Polygonum aviculare/Polygonum aviculare 1.jpg",
        'Sub images': [
            "images/Polygonum aviculare/Polygonum aviculare 2.jpg",
        ]},
    {
        'Latin name': "Polygonum persicaria",
        'Dutch name': "Perzikkruid",
        'Image path': "images/Polygonum persicaria/Polygonum persicaria 1.jpg",
        'Sub images': [
            "images/Polygonum persicaria/Polygonum persicaria 2.jpg",
        ]},
    {
        'Latin name': "Polypodium vulgare",
        'Dutch name': "Gewone eikvaren",
        'Image path': "images/Polypodium vulgare/Polypodium vulgare 1.jpg",
        'Sub images': [
            "images/Polypodium vulgare/Polypodium vulgare 2.jpg",
        ]},
    {
        'Latin name': "Polystichum setiferum",
        'Dutch name': "Zachte naaldvaren",
        'Image path': "images/Polystichum setiferum/Polystichum setiferum 1.jpg",
        'Sub images': [
            "images/Polystichum setiferum/Polystichum setiferum 2.jpg",
        ]},
    {
        'Latin name': "Populus nigra",
        'Dutch name': "Zwarte populier",
        'Image path': "images/Populus nigra/Populus nigra 1.jpg",
        'Sub images': [
            "images/Populus nigra/Populus nigra 2.jpg",
            "images/Populus nigra/Populus nigra 3.jpg",
            "images/Populus nigra/Populus nigra 4.jpg",
        ]},
    {
        'Latin name': "Populus tremula",
        'Dutch name': "Ratelpopulier",
        'Image path': "images/Populus tremula/Populus tremula 1.jpg",
        'Sub images': [
            "images/Populus tremula/Populus tremula 2.jpg",
            "images/Populus tremula/Populus tremula 3.jpg",
            "images/Populus tremula/Populus tremula 4.jpg",
            "images/Populus tremula/Populus tremula 5.jpg",
            "images/Populus tremula/Populus tremula 6.jpg",
        ]},
    {
        'Latin name': "Populus x canescens",
        'Dutch name': "Grauwe abeel",
        'Image path': "images/Populus x canescens/Populus x canescens 1.jpg",
        'Sub images': [
            "images/Populus x canescens/Populus x canescens 2.jpg",
            "images/Populus x canescens/Populus x canescens 3.jpg",
            "images/Populus x canescens/Populus x canescens 4.jpg",
        ]},
    {
        'Latin name': "Potamogeton natans",
        'Dutch name': "Drijvend fonteinkruid",
        'Image path': "images/Potamogeton natans/Potamogeton natans 1.jpg",
        'Sub images': [
            "images/Potamogeton natans/Potamogeton natans 2.jpg",
            "images/Potamogeton natans/Potamogeton natans 3.jpg",
            "images/Potamogeton natans/Potamogeton natans 4.jpg",
        ]},
    {
        'Latin name': "Potentilla anserina",
        'Dutch name': "Zilverschoon",
        'Image path': "images/Potentilla anserina/Potentilla anserina 1.jpg",
        'Sub images': [
            "images/Potentilla anserina/Potentilla anserina 2.jpg",
        ]},
    {
        'Latin name': "Potentilla fruticosa",
        'Dutch name': "Struikganzerik",
        'Image path': "images/Potentilla fruticosa/Potentilla fruticosa 1.jpg",
        'Sub images': [
            "images/Potentilla fruticosa/Potentilla fruticosa 2.jpg",
        ]},
    {
        'Latin name': "Prunella vulgaris",
        'Dutch name': "Gewone brunel",
        'Image path': "images/Prunella vulgaris/Prunella vulgaris 1.jpg",
        'Sub images': [
            "images/Prunella vulgaris/Prunella vulgaris 2.jpg",
        ]},
    {
        'Latin name': "Prunus armeniaca",
        'Dutch name': "Abrikozenboom",
        'Image path': "images/Prunus armeniaca/Prunus armeniaca 1.jpg",
        'Sub images': [
            "images/Prunus armeniaca/Prunus armeniaca 2.jpg",
            "images/Prunus armeniaca/Prunus armeniaca 3.jpg",
            "images/Prunus armeniaca/Prunus armeniaca 4.jpg",
        ]},
    {
        'Latin name': "Prunus avium",
        'Dutch name': "Zoete kers",
        'Image path': "images/Prunus avium/Prunus avium 1.jpg",
        'Sub images': [
            "images/Prunus avium/Prunus avium 2.jpg",
            "images/Prunus avium/Prunus avium 3.jpg",
            "images/Prunus avium/Prunus avium 4.jpg",
            "images/Prunus avium/Prunus avium 5.jpg",
        ]},
    {
        'Latin name': "Prunus cerasus",
        'Dutch name': "Zure kers",
        'Image path': "images/Prunus cerasus/Prunus cerasus 1.jpg",
        'Sub images': [
            "images/Prunus cerasus/Prunus cerasus 2.jpg",
            "images/Prunus cerasus/Prunus cerasus 3.jpg",
        ]},
    {
        'Latin name': "Prunus dulcis",
        'Dutch name': "Amandelboom",
        'Image path': "images/Prunus dulcis/Prunus dulcis 1.jpg",
        'Sub images': [
            "images/Prunus dulcis/Prunus dulcis 2.jpg",
            "images/Prunus dulcis/Prunus dulcis 3.jpg",
            "images/Prunus dulcis/Prunus dulcis 4.jpg",
        ]},
    {
        'Latin name': "Prunus lusitanica",
        'Dutch name': "Portugese laurier",
        'Image path': "images/Prunus lusitanica/Prunus lusitanica 1.jpg",
        'Sub images': [
            "images/Prunus lusitanica/Prunus lusitanica 2.jpg",
            "images/Prunus lusitanica/Prunus lusitanica 3.jpg",
            "images/Prunus lusitanica/Prunus lusitanica 4.jpg",
        ]},
    {
        'Latin name': "Prunus padus",
        'Dutch name': "Gewone vogelkers",
        'Image path': "images/Prunus padus/Prunus padus 1.jpg",
        'Sub images': [
            "images/Prunus padus/Prunus padus 2.jpg",
            "images/Prunus padus/Prunus padus 3.jpg",
            "images/Prunus padus/Prunus padus 4.jpg",
            "images/Prunus padus/Prunus padus 5.jpg",
            "images/Prunus padus/Prunus padus 6.jpg",
            "images/Prunus padus/Prunus padus 7.jpg",
        ]},
    {
        'Latin name': "Prunus persica",
        'Dutch name': "Perzikboom",
        'Image path': "images/Prunus persica/Prunus persica 1.jpg",
        'Sub images': [
            "images/Prunus persica/Prunus persica 2.jpg",
            "images/Prunus persica/Prunus persica 3.jpg",
            "images/Prunus persica/Prunus persica 4.jpg",
        ]},
    {
        'Latin name': "Prunus spinosa",
        'Dutch name': "Sleedoorn",
        'Image path': "images/Prunus spinosa/Prunus spinosa 1.jpg",
        'Sub images': [
            "images/Prunus spinosa/Prunus spinosa 2.jpg",
            "images/Prunus spinosa/Prunus spinosa 3.jpg",
            "images/Prunus spinosa/Prunus spinosa 4.jpg",
        ]},
    {
        'Latin name': "Pseudotsuga menziesii",
        'Dutch name': "Douglasspar",
        'Image path': "images/Pseudotsuga menziesii/Pseudotsuga menziesii 1.jpg",
        'Sub images': [
            "images/Pseudotsuga menziesii/Pseudotsuga menziesii 2.jpg",
            "images/Pseudotsuga menziesii/Pseudotsuga menziesii 3.jpg",
            "images/Pseudotsuga menziesii/Pseudotsuga menziesii 4.jpg",
        ]},
    {
        'Latin name': "Pteridium aquilinum",
        'Dutch name': "Adelaarsvaren",
        'Image path': "images/Pteridium aquilinum/Pteridium aquilinum 1.jpg",
        'Sub images': [
            "images/Pteridium aquilinum/Pteridium aquilinum 2.jpg",
            "images/Pteridium aquilinum/Pteridium aquilinum 3.jpg",
        ]},
    {
        'Latin name': "Pterocarya fraxinifolia",
        'Dutch name': "Kaukasische vleugelnoot",
        'Image path': "images/Pterocarya fraxinifolia/Pterocarya fraxinifolia 1.jpg",
        'Sub images': [
            "images/Pterocarya fraxinifolia/Pterocarya fraxinifolia 2.jpg",
            "images/Pterocarya fraxinifolia/Pterocarya fraxinifolia 3.jpg",
            "images/Pterocarya fraxinifolia/Pterocarya fraxinifolia 4.jpg",
        ]},
    {
        'Latin name': "Pulicaria dysenterica",
        'Dutch name': "Heelblaadjes",
        'Image path': "images/Pulicaria dysenterica/Pulicaria dysenterica 1.jpg",
        'Sub images': [
            "images/Pulicaria dysenterica/Pulicaria dysenterica 2.jpg",
            "images/Pulicaria dysenterica/Pulicaria dysenterica 3.jpg",
            "images/Pulicaria dysenterica/Pulicaria dysenterica 4.jpg",
        ]},
    {
        'Latin name': "Pulmonaria officinalis 'Sissinghurst White'",
        'Dutch name': "gevlekt longkruid",
        'Image path': "images/Pulmonaria officinalis 'Sissinghurst White'/Pulmonaria officinalis 'Sissinghurst White' 1.jpg",
        'Sub images': [
            "images/Pulmonaria officinalis 'Sissinghurst White'/Pulmonaria officinalis 'Sissinghurst White' 2.jpg",
            "images/Pulmonaria officinalis 'Sissinghurst White'/Pulmonaria officinalis 'Sissinghurst White' 3.jpg",
        ]},
    {
        'Latin name': "Puschkinia scilloides",
        'Dutch name': "Buishyacint",
        'Image path': "images/Puschkinia scilloides/Puschkinia scilloides 1.jpg",
        'Sub images': [
            "images/Puschkinia scilloides/Puschkinia scilloides 2.jpg",
            "images/Puschkinia scilloides/Puschkinia scilloides 3.jpg",
        ]},
    {
        'Latin name': "Pyracantha coccinea",
        'Dutch name': "Vuurdoorn",
        'Image path': "images/Pyracantha coccinea/Pyracantha coccinea 1.jpg",
        'Sub images': [
            "images/Pyracantha coccinea/Pyracantha coccinea 2.jpg",
            "images/Pyracantha coccinea/Pyracantha coccinea 3.jpg",
            "images/Pyracantha coccinea/Pyracantha coccinea 4.jpg",
            "images/Pyracantha coccinea/Pyracantha coccinea 5.jpg",
        ]},
    {
        'Latin name': "Pyrus calleryana",
        'Dutch name': "Chinese sierpeer",
        'Image path': "images/Pyrus calleryana/Pyrus calleryana 1.jpg",
        'Sub images': [
            "images/Pyrus calleryana/Pyrus calleryana 2.jpg",
            "images/Pyrus calleryana/Pyrus calleryana 3.jpg",
            "images/Pyrus calleryana/Pyrus calleryana 4.jpg",
            "images/Pyrus calleryana/Pyrus calleryana 5.jpg",
        ]},
    {
        'Latin name': "Pyrus communis",
        'Dutch name': "Perenboom",
        'Image path': "images/Pyrus communis/Pyrus communis 1.jpg",
        'Sub images': [
            "images/Pyrus communis/Pyrus communis 2.jpg",
            "images/Pyrus communis/Pyrus communis 3.jpg",
            "images/Pyrus communis/Pyrus communis 4.jpg",
        ]},
    {
        'Latin name': "Pyrus pyraster",
        'Dutch name': "Wilde peer",
        'Image path': "images/Pyrus pyraster/Pyrus pyraster 1.jpg",
        'Sub images': [
            "images/Pyrus pyraster/Pyrus pyraster 2.jpg",
            "images/Pyrus pyraster/Pyrus pyraster 3.jpg",
            "images/Pyrus pyraster/Pyrus pyraster 4.jpg",
        ]},
    {
        'Latin name': "Quercus palustris",
        'Dutch name': "Moeraseik",
        'Image path': "images/Quercus palustris/Quercus palustris 1.jpg",
        'Sub images': [
            "images/Quercus palustris/Quercus palustris 2.jpg",
            "images/Quercus palustris/Quercus palustris 3.jpg",
            "images/Quercus palustris/Quercus palustris 4.jpg",
        ]},
    {
        'Latin name': "Quercus petraea",
        'Dutch name': "Wintereik",
        'Image path': "images/Quercus petraea/Quercus petraea 1.jpg",
        'Sub images': [
            "images/Quercus petraea/Quercus petraea 2.jpg",
            "images/Quercus petraea/Quercus petraea 3.jpg",
            "images/Quercus petraea/Quercus petraea 4.jpg",
        ]},
    {
        'Latin name': "Quercus robur",
        'Dutch name': "Zomereik",
        'Image path': "images/Quercus robur/Quercus robur 1.jpg",
        'Sub images': [
            "images/Quercus robur/Quercus robur 2.jpg",
            "images/Quercus robur/Quercus robur 3.jpg",
        ]},
    {
        'Latin name': "Quercus rubra",
        'Dutch name': "Amerikaanse eik",
        'Image path': "images/Quercus rubra/Quercus rubra 1.jpg",
        'Sub images': [
            "images/Quercus rubra/Quercus rubra 2.jpg",
            "images/Quercus rubra/Quercus rubra 3.jpg",
            "images/Quercus rubra/Quercus rubra 4.jpg",
        ]},
    {
        'Latin name': "Ranunculus ficaria",
        'Dutch name': "Speenkruid",
        'Image path': "images/Ranunculus ficaria/Ranunculus ficaria 1.jpg",
        'Sub images': [
            "images/Ranunculus ficaria/Ranunculus ficaria 2.jpg",
        ]},
    {
        'Latin name': "Ranunculus repens",
        'Dutch name': "Kruipende boterbloem",
        'Image path': "images/Ranunculus repens/Ranunculus repens 1.jpg",
        'Sub images': [
            "images/Ranunculus repens/Ranunculus repens 2.jpg",
            "images/Ranunculus repens/Ranunculus repens 3.jpg",
        ]},
    {
        'Latin name': "Rhamnus cathartica",
        'Dutch name': "Wegedoorn",
        'Image path': "images/Rhamnus cathartica/Rhamnus cathartica 1.jpg",
        'Sub images': [
            "images/Rhamnus cathartica/Rhamnus cathartica 2.jpg",
            "images/Rhamnus cathartica/Rhamnus cathartica 3.jpg",
        ]},
    {
        'Latin name': "Rheum palmatum var. tanguticum",
        'Dutch name': "Sierrabarber",
        'Image path': "images/Rheum palmatum var. tanguticum/Rheum palmatum var. tanguticum 1.jpg",
        'Sub images': [
            "images/Rheum palmatum var. tanguticum/Rheum palmatum var. tanguticum 2.jpg",
            "images/Rheum palmatum var. tanguticum/Rheum palmatum var. tanguticum 3.jpg",
        ]},
    {
        'Latin name': "Rheum rhabarbarum",
        'Dutch name': "Rabarber",
        'Image path': "images/Rheum rhabarbarum/Rheum rhabarbarum 1.jpg",
        'Sub images': [
            "images/Rheum rhabarbarum/Rheum rhabarbarum 2.jpg",
        ]},
    {
        'Latin name': "Ribes 'Josta' JOSTABERRY",
        'Dutch name': "Jostabes",
        'Image path': "images/Ribes 'Josta' JOSTABERRY/Ribes 'Josta' JOSTABERRY 1.jpg",
        'Sub images': [
            "images/Ribes 'Josta' JOSTABERRY/Ribes 'Josta' JOSTABERRY 2.jpg",
        ]},
    {
        'Latin name': "Ribes nigrum",
        'Dutch name': "Zwarte bes",
        'Image path': "images/Ribes nigrum/Ribes nigrum 1.jpg",
        'Sub images': [
            "images/Ribes nigrum/Ribes nigrum 2.jpg",
            "images/Ribes nigrum/Ribes nigrum 3.jpg",
            "images/Ribes nigrum/Ribes nigrum 4.jpg",
        ]},
    {
        'Latin name': "Ribes rubrum",
        'Dutch name': "Aalbes",
        'Image path': "images/Ribes rubrum/Ribes rubrum 1.jpg",
        'Sub images': [
            "images/Ribes rubrum/Ribes rubrum 2.jpg",
            "images/Ribes rubrum/Ribes rubrum 3.jpg",
            "images/Ribes rubrum/Ribes rubrum 4.jpg",
            "images/Ribes rubrum/Ribes rubrum 5.jpg",
        ]},
    {
        'Latin name': "Ribes sanguineum",
        'Dutch name': "Rode ribes",
        'Image path': "images/Ribes sanguineum/Ribes sanguineum 1.jpg",
        'Sub images': [
            "images/Ribes sanguineum/Ribes sanguineum 2.jpg",
            "images/Ribes sanguineum/Ribes sanguineum 3.jpg",
        ]},
    {
        'Latin name': "Ribes uva-crispa",
        'Dutch name': "Kruisbes",
        'Image path': "images/Ribes uva-crispa/Ribes uva-crispa 1.jpg",
        'Sub images': [
            "images/Ribes uva-crispa/Ribes uva-crispa 2.jpg",
        ]},
    {
        'Latin name': "Robinia pseudoacacia",
        'Dutch name': "Valse acacia",
        'Image path': "images/Robinia pseudoacacia/Robinia pseudoacacia 1.jpg",
        'Sub images': [
            "images/Robinia pseudoacacia/Robinia pseudoacacia 2.jpg",
            "images/Robinia pseudoacacia/Robinia pseudoacacia 3.jpg",
        ]},
    {
        'Latin name': "Rodgersia aesculifolia",
        'Dutch name': "Schout-bij-nacht",
        'Image path': "images/Rodgersia aesculifolia/Rodgersia aesculifolia 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Rosa canina",
        'Dutch name': "Hondsroos",
        'Image path': "images/Rosa canina/Rosa canina 1.jpg",
        'Sub images': [
            "images/Rosa canina/Rosa canina 2.jpg",
            "images/Rosa canina/Rosa canina 3.jpg",
        ]},
    {
        'Latin name': "Rosa pimpinellifolia",
        'Dutch name': "Duinroos",
        'Image path': "images/Rosa pimpinellifolia/Rosa pimpinellifolia 1.jpg",
        'Sub images': [
            "images/Rosa pimpinellifolia/Rosa pimpinellifolia 2.jpg", 
        ]},
    {
        'Latin name': "Rosa rubiginosa",
        'Dutch name': "Egelantier",
        'Image path': "images/Rosa rubiginosa/Rosa rubiginosa 1.jpg",
        'Sub images': [
            "images/Rosa rubiginosa/Rosa rubiginosa 2.jpg",
            "images/Rosa rubiginosa/Rosa rubiginosa 3.jpg",
        ]},
    {
        'Latin name': "Rosmarinus officinalis",
        'Dutch name': "Rozemarijn",
        'Image path': "images/Rosmarinus officinalis/Rosmarinus officinalis 1.jpg",
        'Sub images': [
            "images/Rosmarinus officinalis/Rosmarinus officinalis 2.jpg",
        ]},
    {
        'Latin name': "Rubus fruticosus",
        'Dutch name': "Braam",
        'Image path': "images/Rubus fruticosus/Rubus fruticosus 1.jpg",
        'Sub images': [
            "images/Rubus fruticosus/Rubus fruticosus 2.jpg",
            "images/Rubus fruticosus/Rubus fruticosus 3.jpg",
        ]},
    {
        'Latin name': "Rubus fruticosus  'Thornless Evergreen'",
        'Dutch name': "Doornloze braam",
        'Image path': "images/Rubus fruticosus  'Thornless Evergreen'/Rubus fruticosus  'Thornless Evergreen' 1.jpg",
        'Sub images': [
            "images/Rubus fruticosus  'Thornless Evergreen'/Rubus fruticosus  'Thornless Evergreen' 2.jpg",
        ]},
    {
        'Latin name': "Rubus idaeus",
        'Dutch name': "Framboos",
        'Image path': "images/Rubus idaeus/Rubus idaeus 1.jpg",
        'Sub images': [
            "images/Rubus idaeus/Rubus idaeus 2.jpg",
        ]},
    {
        'Latin name': "Rubus 'Tayberry'",
        'Dutch name': "Taybes",
        'Image path': "images/Rubus 'Tayberry'/Rubus 'Tayberry' 1.jpg",
        'Sub images': [
            "images/Rubus 'Tayberry'/Rubus 'Tayberry' 2.jpg",
        ]},
    {
        'Latin name': "Rubus x loganobaccus 'Logan' LOGANBERRY",
        'Dutch name': "Loganbes",
        'Image path': "images/Rubus x loganobaccus 'Logan' LOGANBERRY/Rubus x loganobaccus 'Logan' LOGANBERRY 1.jpg",
        'Sub images': [
            "images/Rubus x loganobaccus 'Logan' LOGANBERRY/Rubus x loganobaccus 'Logan' LOGANBERRY 2.jpg",
        ]},
    {
        'Latin name': "Rudbeckia fulgida 'Goldsturm'",
        'Dutch name': "Gele zonnehoed",
        'Image path': "images/Rudbeckia fulgida 'Goldsturm'/Rudbeckia fulgida 'Goldsturm' 1.jpg",
        'Sub images': [
            "images/Rudbeckia fulgida 'Goldsturm'/Rudbeckia fulgida 'Goldsturm' 2.jpg",
            "images/Rudbeckia fulgida 'Goldsturm'/Rudbeckia fulgida 'Goldsturm' 3.jpg",
        ]},
    {
        'Latin name': "Rumex obtusifolius",
        'Dutch name': "Ridderzuring",
        'Image path': "images/Rumex obtusifolius/Rumex obtusifolius 1.jpg",
        'Sub images': [
            "images/Rumex obtusifolius/Rumex obtusifolius 2.jpg",
        ]},
    {
        'Latin name': "Rumex sanguineus",
        'Dutch name': "Bloedzuring",
        'Image path': "images/Rumex sanguineus/Rumex sanguineus 1.jpg",
        'Sub images': [
            "images/Rumex sanguineus/Rumex sanguineus 2.jpg",
            "images/Rumex sanguineus/Rumex sanguineus 3.jpg",
        ]},
    {
        'Latin name': "Ruta graveolens",
        'Dutch name': "Wijnruit",
        'Image path': "images/Ruta graveolens/Ruta graveolens 1.jpg",
        'Sub images': [
            "images/Ruta graveolens/Ruta graveolens 2.jpg",
            "images/Ruta graveolens/Ruta graveolens 3.jpg",
            "images/Ruta graveolens/Ruta graveolens 4.jpg",
        ]},
    {
        'Latin name': "Sagittaria sagittifolia",
        'Dutch name': "Pijlkruid",
        'Image path': "images/Sagittaria sagittifolia/Sagittaria sagittifolia 1.jpg",
        'Sub images': [
            "images/Sagittaria sagittifolia/Sagittaria sagittifolia 2.jpg",
        ]},
    {
        'Latin name': "Salix alba",
        'Dutch name': "Schietwilg",
        'Image path': "images/Salix alba/Salix alba 1.jpg",
        'Sub images': [
            "images/Salix alba/Salix alba 2.jpg",
            "images/Salix alba/Salix alba 3.jpg",
            "images/Salix alba/Salix alba 4.jpg",
            "images/Salix alba/Salix alba 5.jpg",
            "images/Salix alba/Salix alba 6.jpg",
        ]},
    {
        'Latin name': "Salix caprea",
        'Dutch name': "Boswilg",
        'Image path': "images/Salix caprea/Salix caprea 1.jpg",
        'Sub images': [
            "images/Salix caprea/Salix caprea 2.jpg",
            "images/Salix caprea/Salix caprea 3.jpg",
            "images/Salix caprea/Salix caprea 4.jpg",
            "images/Salix caprea/Salix caprea 5.jpg",
        ]},
    {
        'Latin name': "Salix cinerea",
        'Dutch name': "Grauwe wilg",
        'Image path': "images/Salix cinerea/Salix cinerea 1.jpg",
        'Sub images': [
            "images/Salix cinerea/Salix cinerea 2.jpg",
            "images/Salix cinerea/Salix cinerea 3.jpg",
            "images/Salix cinerea/Salix cinerea 4.jpg",
            "images/Salix cinerea/Salix cinerea 5.jpg",
            "images/Salix cinerea/Salix cinerea 6.jpg",
        ]},
    {
        'Latin name': "Salix repens",
        'Dutch name': "Kruipwilg",
        'Image path': "images/Salix repens/Salix repens 1.jpg",
        'Sub images': [
            "images/Salix repens/Salix repens 2.jpg",
            "images/Salix repens/Salix repens 3.jpg",
            "images/Salix repens/Salix repens 4.jpg",
            "images/Salix repens/Salix repens 5.jpg",
        ]},
    {
        'Latin name': "Salix x sepulcralis 'Chrysocoma'",
        'Dutch name': "Gele treurwilg",
        'Image path': "images/Salix x sepulcralis 'Chrysocoma'/Salix x sepulcralis 'Chrysocoma' 1.jpg",
        'Sub images': [
            "images/Salix x sepulcralis 'Chrysocoma'/Salix x sepulcralis 'Chrysocoma' 2.jpg",
            "images/Salix x sepulcralis 'Chrysocoma'/Salix x sepulcralis 'Chrysocoma' 3.jpg",
            "images/Salix x sepulcralis 'Chrysocoma'/Salix x sepulcralis 'Chrysocoma' 4.jpg",
        ]},
    {
        'Latin name': "Salvia nemorosa 'Ostfriesland'",
        'Dutch name': "Bossalie",
        'Image path': "images/Salvia nemorosa 'Ostfriesland'/Salvia nemorosa 'Ostfriesland' 1.jpg",
        'Sub images': [
            "images/Salvia nemorosa 'Ostfriesland'/Salvia nemorosa 'Ostfriesland' 2.jpg",
        ]},
    {
        'Latin name': "Salvia officinalis",
        'Dutch name': "Salie",
        'Image path': "images/Salvia officinalis/Salvia officinalis 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Sambucus nigra",
        'Dutch name': "Gewone vlier",
        'Image path': "images/Sambucus nigra/Sambucus nigra 1.jpg",
        'Sub images': [
            "images/Sambucus nigra/Sambucus nigra 2.jpg",
            "images/Sambucus nigra/Sambucus nigra 3.jpg",
        ]},
    {
        'Latin name': "Sambucus racemosa",
        'Dutch name': "Trosvlier",
        'Image path': "images/Sambucus racemosa/Sambucus racemosa 1.jpg",
        'Sub images': [
            "images/Sambucus racemosa/Sambucus racemosa 2.jpg",
            "images/Sambucus racemosa/Sambucus racemosa 3.jpg",
        ]},
    {
        'Latin name': "Sanguisorba officinalis",
        'Dutch name': "Grote pimpernel",
        'Image path': "images/Sanguisorba officinalis/Sanguisorba officinalis 1.jpg",
        'Sub images': [
            "images/Sanguisorba officinalis/Sanguisorba officinalis 2.jpg",
            "images/Sanguisorba officinalis/Sanguisorba officinalis 3.jpg",
        ]},
    {
        'Latin name': "Santolina chamaecyparissus",
        'Dutch name': "Heilegenbloem",
        'Image path': "images/Santolina chamaecyparissus/Santolina chamaecyparissus 1.jpg",
        'Sub images': [
            "images/Santolina chamaecyparissus/Santolina chamaecyparissus 2.jpg",
            "images/Santolina chamaecyparissus/Santolina chamaecyparissus 3.jpg",
        ]},
    {
        'Latin name': "Sarcococca hookeriana var. humilis",
        'Dutch name': "Vleesbes",
        'Image path': "images/Sarcococca hookeriana var. humilis/Sarcococca hookeriana var. humilis 1.jpg",
        'Sub images': [
            "images/Sarcococca hookeriana var. humilis/Sarcococca hookeriana var. humilis 2.jpg",
            "images/Sarcococca hookeriana var. humilis/Sarcococca hookeriana var. humilis 3.jpg",
            "images/Sarcococca hookeriana var. humilis/Sarcococca hookeriana var. humilis 4.jpg",
        ]},
    {
        'Latin name': "Satureja montana",
        'Dutch name': "Bergbonenkruid",
        'Image path': "images/Satureja montana/Satureja montana 1.jpg",
        'Sub images': [
            "images/Satureja montana/Satureja montana 2.jpg",
            "images/Satureja montana/Satureja montana 3.jpg",
            "images/Satureja montana/Satureja montana 4.jpg",
        ]},
    {
        'Latin name': "Schizophragma hydrangeoides",
        'Dutch name': "Schijnhortensia",
        'Image path': "images/Schizophragma hydrangeoides/Schizophragma hydrangeoides 1.jpg",
        'Sub images': [
            "images/Schizophragma hydrangeoides/Schizophragma hydrangeoides 2.jpg",
            "images/Schizophragma hydrangeoides/Schizophragma hydrangeoides 3.jpg",
            "images/Schizophragma hydrangeoides/Schizophragma hydrangeoides 4.jpg",
        ]},
    {
        'Latin name': "Scilla siberica",
        'Dutch name': "Oosterse sterhyacint",
        'Image path': "images/Scilla siberica/Scilla siberica 1.jpg",
        'Sub images': [
            "images/Scilla siberica/Scilla siberica 2.jpg",
            "images/Scilla siberica/Scilla siberica 3.jpg",
        ]},
    {
        'Latin name': "Sedum 'Matrona'",
        'Dutch name': "Vetkruid",
        'Image path': "images/Sedum 'Matrona'/Sedum 'Matrona' 1.jpg",
        'Sub images': [
            "images/Sedum 'Matrona'/Sedum 'Matrona' 2.jpg",
            "images/Sedum 'Matrona'/Sedum 'Matrona' 3.jpg",
        ]},
    {
        'Latin name': "Senecio jacobaea",
        'Dutch name': "Jakobskruid",
        'Image path': "images/Senecio jacobaea/Senecio jacobaea 1.jpg",
        'Sub images': [
            "images/Senecio jacobaea/Senecio jacobaea 2.jpg",
            "images/Senecio jacobaea/Senecio jacobaea 3.jpg",
        ]},
    {
        'Latin name': "Sequoia sempervirens",
        'Dutch name': "Kustmammoetboom",
        'Image path': "images/Sequoia sempervirens/Sequoia sempervirens 1.jpg",
        'Sub images': [
            "images/Sequoia sempervirens/Sequoia sempervirens 2.jpg",
            "images/Sequoia sempervirens/Sequoia sempervirens 3.jpg",
            "images/Sequoia sempervirens/Sequoia sempervirens 4.jpg",
        ]},
    {
        'Latin name': "Sequoiadendron giganteum",
        'Dutch name': "Mammoetboom",
        'Image path': "images/Sequoiadendron giganteum/Sequoiadendron giganteum 1.jpg",
        'Sub images': [
            "images/Sequoiadendron giganteum/Sequoiadendron giganteum 2.jpg",
            "images/Sequoiadendron giganteum/Sequoiadendron giganteum 3.jpg",
            "images/Sequoiadendron giganteum/Sequoiadendron giganteum 4.jpg",
        ]},
    {
        'Latin name': "Sesleria autumnalis",
        'Dutch name': "Blauwgras",
        'Image path': "images/Sesleria autumnalis/Sesleria autumnalis 1.jpg",
        'Sub images': [
            "images/Sesleria autumnalis/Sesleria autumnalis 2.jpg",
        ]},
    {
        'Latin name': "Sisyrinchium striatum",
        'Dutch name': "Bieslelie",
        'Image path': "images/Sisyrinchium striatum/Sisyrinchium striatum 1.jpg",
        'Sub images': [
            "images/Sisyrinchium striatum/Sisyrinchium striatum 2.jpg",
        ]},
    {
        'Latin name': "Skimmia japonica",
        'Dutch name': "Skimmia",
        'Image path': "images/Skimmia japonica/Skimmia japonica 1.jpg",
        'Sub images': [
            "images/Skimmia japonica/Skimmia japonica 2.jpg",
            "images/Skimmia japonica/Skimmia japonica 3.jpg",
        ]},
    {
        'Latin name': "Solidago rugosa 'Fireworks'",
        'Dutch name': "Guldenroede",
        'Image path': "images/Solidago rugosa 'Fireworks'/Solidago rugosa 'Fireworks' 1.jpg",
        'Sub images': [
            "images/Solidago rugosa 'Fireworks'/Solidago rugosa 'Fireworks' 2.jpg",
        ]},
    {
        'Latin name': "Sorbus aucuparia",
        'Dutch name': "Wilde lijsterbes",
        'Image path': "images/Sorbus aucuparia/Sorbus aucuparia 1.jpg",
        'Sub images': [
            "images/Sorbus aucuparia/Sorbus aucuparia 2.jpg",
            "images/Sorbus aucuparia/Sorbus aucuparia 3.jpg",
            "images/Sorbus aucuparia/Sorbus aucuparia 4.jpg",
        ]},
    {
        'Latin name': "Sparganum erectum",
        'Dutch name': "Grote egelskop",
        'Image path': "images/Sparganum erectum/Sparganum erectum 1.jpg",
        'Sub images': [
            "images/Sparganum erectum/Sparganum erectum 2.jpg",
        ]},
    {
        'Latin name': "Spiraea japonica",
        'Dutch name': "Japanse spierstruik",
        'Image path': "images/Spiraea japonica/Spiraea japonica 1.jpg",
        'Sub images': [
            "images/Spiraea japonica/Spiraea japonica 2.jpg",
        ]},
    {
        'Latin name': "Spiraea x vanhouttei",
        'Dutch name': "Spierstruik",
        'Image path': "images/Spiraea x vanhouttei/Spiraea x vanhouttei 1.jpg",
        'Sub images': [
            "images/Spiraea x vanhouttei/Spiraea x vanhouttei 2.jpg",
        ]},
    {
        'Latin name': "Spodiopogon sibiricus",
        'Dutch name': "Siberisch siergras",
        'Image path': "images/Spodiopogon sibiricus/Spodiopogon sibiricus 1.jpg",
        'Sub images': [
            "images/Spodiopogon sibiricus/Spodiopogon sibiricus 2.jpg",
        ]},
    {
        'Latin name': "Sporobolus heterolepis",
        'Dutch name': "Prairiedropzaad",
        'Image path': "images/Sporobolus heterolepis/Sporobolus heterolepis 1.jpg",
        'Sub images': [
            "images/Sporobolus heterolepis/Sporobolus heterolepis 2.jpg",
            "images/Sporobolus heterolepis/Sporobolus heterolepis 3.jpg",
            "images/Sporobolus heterolepis/Sporobolus heterolepis 4.jpg",
        ]},
    {
        'Latin name': "Stachys byzantina",
        'Dutch name': "Ezelsoor",
        'Image path': "images/Stachys byzantina/Stachys byzantina 1.jpg",
        'Sub images': [
            "images/Stachys byzantina/Stachys byzantina 2.jpg",
            "images/Stachys byzantina/Stachys byzantina 3.jpg",
        ]},
    {
        'Latin name': "Stachys monieri 'Hummelo'",
        'Dutch name': "Andoorn",
        'Image path': "images/Stachys monieri 'Hummelo'/Stachys monieri 'Hummelo' 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Stachys sylvatica",
        'Dutch name': "Bosandoorn",
        'Image path': "images/Stachys sylvatica/Stachys sylvatica 1.jpg",
        'Sub images': [
            "images/Stachys sylvatica/Stachys sylvatica 2.jpg",
        ]},
    {
        'Latin name': "Stachyurus praecox",
        'Dutch name': "Staartaar",
        'Image path': "images/Stachyurus praecox/Stachyurus praecox 1.jpg",
        'Sub images': [
            "images/Stachyurus praecox/Stachyurus praecox 2.jpg",
            "images/Stachyurus praecox/Stachyurus praecox 3.jpg",
        ]},
    {
        'Latin name': "Staphylea colchica",
        'Dutch name': "Kaukasische pimpernoot",
        'Image path': "images/Staphylea colchica/Staphylea colchica 1.jpg",
        'Sub images': [
            "images/Staphylea colchica/Staphylea colchica 2.jpg",
            "images/Staphylea colchica/Staphylea colchica 3.jpg",
        ]},
    {
        'Latin name': "Stellaria holostea",
        'Dutch name': "Grote muur",
        'Image path': "images/Stellaria holostea/Stellaria holostea 1.jpg",
        'Sub images': [
            "images/Stellaria holostea/Stellaria holostea 2.jpg",
            "images/Stellaria holostea/Stellaria holostea 3.jpg",
        ]},
    {
        'Latin name': "Stellaria media",
        'Dutch name': "Vogelmuur",
        'Image path': "images/Stellaria media/Stellaria media 1.jpg",
        'Sub images': [
            "images/Stellaria media/Stellaria media 2.jpg",
        ]},
    {
        'Latin name': "Stephanandra incisa",
        'Dutch name': "Kransspirea",
        'Image path': "images/Stephanandra incisa/Stephanandra incisa 1.jpg",
        'Sub images': [
            "images/Stephanandra incisa/Stephanandra incisa 2.jpg",
            "images/Stephanandra incisa/Stephanandra incisa 3.jpg",
        ]},
    {
        'Latin name': "Stipa gigantea",
        'Dutch name': "Reuzenvedergras",
        'Image path': "images/Stipa gigantea/Stipa gigantea 1.jpg",
        'Sub images': [
            "images/Stipa gigantea/Stipa gigantea 2.jpg",
        ]},
    {
        'Latin name': "Stipa tenuissima",
        'Dutch name': "vedergras",
        'Image path': "images/Stipa tenuissima/Stipa tenuissima 1.jpg",
        'Sub images': [
            "images/Stipa tenuissima/Stipa tenuissima 2.jpg",
            "images/Stipa tenuissima/Stipa tenuissima 3.jpg",
            "images/Stipa tenuissima/Stipa tenuissima 4.jpg",
        ]},
    {
        'Latin name': "Stratiotes aloides",
        'Dutch name': "Krabbenscheer",
        'Image path': "images/Stratiotes aloides/Stratiotes aloides 1.jpg",
        'Sub images': [
            "images/Stratiotes aloides/Stratiotes aloides 2.jpg",
            "images/Stratiotes aloides/Stratiotes aloides 3.jpg",
        ]},
    {
        'Latin name': "Styphnolobium japonicum",
        'Dutch name': "japanse honingboom",
        'Image path': "images/Styphnolobium japonicum/Styphnolobium japonicum 1.jpg",
        'Sub images': [
            "images/Styphnolobium japonicum/Styphnolobium japonicum 2.jpg",
            "images/Styphnolobium japonicum/Styphnolobium japonicum 3.jpg",
        ]},
    {
        'Latin name': "Symphytum azureum",
        'Dutch name': "Blauwe smeerwortel",
        'Image path': "images/Symphytum azureum/Symphytum azureum 1.jpg",
        'Sub images': [
            "images/Symphytum azureum/Symphytum azureum 2.jpg",
        ]},
    {
        'Latin name': "Symphytum grandiflorum",
        'Dutch name': "Kruipende smeerwortel",
        'Image path': "images/Symphytum grandiflorum/Symphytum grandiflorum 1.jpg",
        'Sub images': [
            "images/Symphytum grandiflorum/Symphytum grandiflorum 2.jpg",
        ]},
    {
        'Latin name': "Symphytum officinale",
        'Dutch name': "Gewone smeerwortel",
        'Image path': "images/Symphytum officinale/Symphytum officinale 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Syringa vulgaris",
        'Dutch name': "Sering",
        'Image path': "images/Syringa vulgaris/Syringa vulgaris 1.jpg",
        'Sub images': [
            "images/Syringa vulgaris/Syringa vulgaris 2.jpg",
        ]},
    {
        'Latin name': "Tanacetum vulgare",
        'Dutch name': "Boerenwormkruid",
        'Image path': "images/Tanacetum vulgare/Tanacetum vulgare 1.jpg",
        'Sub images': [
            "images/Tanacetum vulgare/Tanacetum vulgare 2.jpg",
        ]},
    {
        'Latin name': "Taxodium distichum",
        'Dutch name': "Moerascipres",
        'Image path': "images/Taxodium distichum/Taxodium distichum 1.jpg",
        'Sub images': [
            "images/Taxodium distichum/Taxodium distichum 2.jpg",
            "images/Taxodium distichum/Taxodium distichum 3.jpg",
            "images/Taxodium distichum/Taxodium distichum 4.jpg",
            "images/Taxodium distichum/Taxodium distichum 5.jpg",
            "images/Taxodium distichum/Taxodium distichum 6.jpg",
        ]},
    {
        'Latin name': "Taxus baccata",
        'Dutch name': "Venijnboom",
        'Image path': "images/Taxus baccata/Taxus baccata 1.jpg",
        'Sub images': [
            "images/Taxus baccata/Taxus baccata 2.jpg",
            "images/Taxus baccata/Taxus baccata 3.jpg",
        ]},
    {
        'Latin name': "Telekia speciosa",
        'Dutch name': "Groot koeienoog",
        'Image path': "images/Telekia speciosa/Telekia speciosa 1.jpg",
        'Sub images': [
            "images/Telekia speciosa/Telekia speciosa 2.jpg",
        ]},
    {
        'Latin name': "Tellima grandiflora",
        'Dutch name': "Mijterloof",
        'Image path': "images/Tellima grandiflora/Tellima grandiflora 1.jpg",
        'Sub images': [
            "images/Tellima grandiflora/Tellima grandiflora 2.jpg",
        ]},
    {
        'Latin name': "Teucrium x lucidrys",
        'Dutch name': "Gamander",
        'Image path': "images/Teucrium x lucidrys/Teucrium x lucidrys 1.jpg",
        'Sub images': [
            "images/Teucrium x lucidrys/Teucrium x lucidrys 2.jpg",
        ]},
    {
        'Latin name': "Teucrium scorodonia",
        'Dutch name': "Valse salie",
        'Image path': "images/Teucrium scorodonia/Teucrium scorodonia 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Thalictrum delavayi",
        'Dutch name': "Chinese ruit",
        'Image path': "images/Thalictrum delavayi/Thalictrum delavayi 1.jpg",
        'Sub images': [
            "images/Thalictrum delavayi/Thalictrum delavayi 2.jpg",
            "images/Thalictrum delavayi/Thalictrum delavayi 3.jpg",
        ]},
    {
        'Latin name': "Thuja occidentalis",
        'Dutch name': "Westerse levensboom",
        'Image path': "images/Thuja occidentalis/Thuja occidentalis 1.jpg",
        'Sub images': [
            "images/Thuja occidentalis/Thuja occidentalis 2.jpg",
            "images/Thuja occidentalis/Thuja occidentalis 3.jpg",
        ]},
    {
        'Latin name': "Thuja plicata",
        'Dutch name': "Reuzenlevensboom",
        'Image path': "images/Thuja plicata/Thuja plicata 1.jpg",
        'Sub images': [
            "images/Thuja plicata/Thuja plicata 2.jpg",
            "images/Thuja plicata/Thuja plicata 3.jpg",
            "images/Thuja plicata/Thuja plicata 4.jpg",
            "images/Thuja plicata/Thuja plicata 5.jpg",
        ]},
    {
        'Latin name': "Thymus vulgaris 'Compactus'",
        'Dutch name': "Echte tijm",
        'Image path': "images/Thymus vulgaris 'Compactus'/Thymus vulgaris 'Compactus' 1.jpg",
        'Sub images': [
            "images/Thymus vulgaris 'Compactus'/Thymus vulgaris 'Compactus' 2.jpg",
            "images/Thymus vulgaris 'Compactus'/Thymus vulgaris 'Compactus' 3.jpg",
        ]},
    {
        'Latin name': "Tiarella cordifolia",
        'Dutch name': "Schuimbloem",
        'Image path': "images/Tiarella cordifolia/Tiarella cordifolia 1.jpg",
        'Sub images': [
            "images/Tiarella cordifolia/Tiarella cordifolia 2.jpg",
        ]},
    {
        'Latin name': "Tilia cordata",
        'Dutch name': "Winterlinde",
        'Image path': "images/Tilia cordata/Tilia cordata 1.jpg",
        'Sub images': [
            "images/Tilia cordata/Tilia cordata 2.jpg",
            "images/Tilia cordata/Tilia cordata 3.jpg",
            "images/Tilia cordata/Tilia cordata 4.jpg",
            "images/Tilia cordata/Tilia cordata 5.jpg",
            "images/Tilia cordata/Tilia cordata 6.jpg",
        ]},
    {
        'Latin name': "Tilia platyphyllos",
        'Dutch name': "Zomerlinde",
        'Image path': "images/Tilia platyphyllos/Tilia platyphyllos 1.jpg",
        'Sub images': [
            "images/Tilia platyphyllos/Tilia platyphyllos 2.jpg",
            "images/Tilia platyphyllos/Tilia platyphyllos 3.jpg",
        ]},
    {
        'Latin name': "Tradescantia 'Osprey'",
        'Dutch name': "Eendagsbloem",
        'Image path': "images/Tradescantia 'Osprey'/Tradescantia 'Osprey' 1.jpg",
        'Sub images': [
            "images/Tradescantia 'Osprey'/Tradescantia 'Osprey' 2.jpg",
        ]},
    {
        'Latin name': "Tricyrtis formosana",
        'Dutch name': "Paddenlelie",
        'Image path': "images/Tricyrtis formosana/Tricyrtis formosana 1.jpg",
        'Sub images': [
            "images/Tricyrtis formosana/Tricyrtis formosana 2.jpg",
            "images/Tricyrtis formosana/Tricyrtis formosana 3.jpg",
        ]},
    {
        'Latin name': "Trifolium pratense",
        'Dutch name': "Rode klaver",
        'Image path': "images/Trifolium pratense/Trifolium pratense 1.jpg",
        'Sub images': [
            "images/Trifolium pratense/Trifolium pratense 2.jpg",
        ]},
    {
        'Latin name': "Tsuga canadensis",
        'Dutch name': "Oostelijke hemlockspar",
        'Image path': "images/Tsuga canadensis/Tsuga canadensis 1.jpg",
        'Sub images': [
            "images/Tsuga canadensis/Tsuga canadensis 2.jpg",
        ]},
    {
        'Latin name': "Tulipa sprengeri",
        'Dutch name': "Sprenger's Tulp",
        'Image path': "images/Tulipa sprengeri/Tulipa sprengeri 1.jpg",
        'Sub images': [
            "images/Tulipa sprengeri/Tulipa sprengeri 2.jpg",
            "images/Tulipa sprengeri/Tulipa sprengeri 3.jpg",
        ]},
    {
        'Latin name': "Tulipa sylvestris",
        'Dutch name': "Bostulp",
        'Image path': "images/Tulipa sylvestris/Tulipa sylvestris 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Tussilago farfara",
        'Dutch name': "Klein hoefblad",
        'Image path': "images/Tussilago farfara/Tussilago farfara 1.jpg",
        'Sub images': [
            "images/Tussilago farfara/Tussilago farfara 2.jpg",
            "images/Tussilago farfara/Tussilago farfara 3.jpg",
        ]},
    {
        'Latin name': "Typha angustifolia",
        'Dutch name': "Kleine lisdodde",
        'Image path': "images/Typha angustifolia/Typha angustifolia 1.jpg",
        'Sub images': [
            "images/Typha angustifolia/Typha angustifolia 2.jpg",
            "images/Typha angustifolia/Typha angustifolia 3.jpg",
        ]},
    {
        'Latin name': "Typha latifolia",
        'Dutch name': "Grote lisdodde",
        'Image path': "images/Typha latifolia/Typha latifolia 1.jpg",
        'Sub images': [
            "images/Typha latifolia/Typha latifolia 2.jpg",
            "images/Typha latifolia/Typha latifolia 3.jpg",
        ]},
    {
        'Latin name': "Typha minima",
        'Dutch name': "Dwerglisdodde",
        'Image path': "images/Typha minima/Typha minima 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Ulex europaeus",
        'Dutch name': "Gaspeldoorn",
        'Image path': "images/Ulex europaeus/Ulex europaeus 1.jpg",
        'Sub images': [
            "images/Ulex europaeus/Ulex europaeus 2.jpg",
            "images/Ulex europaeus/Ulex europaeus 3.jpg",
        ]},
    {
        'Latin name': "Ulmus laevis",
        'Dutch name': "Fladderiep",
        'Image path': "images/Ulmus laevis/Ulmus laevis 1.jpg",
        'Sub images': [
            "images/Ulmus laevis/Ulmus laevis 2.jpg",
            "images/Ulmus laevis/Ulmus laevis 3.jpg",
            "images/Ulmus laevis/Ulmus laevis 4.jpg",
        ]},
    {
        'Latin name': "Urtica dioica",
        'Dutch name': "Grote brandnetel",
        'Image path': "images/Urtica dioica/Urtica dioica 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Vaccinium corymbosum",
        'Dutch name': "Blauwe bes",
        'Image path': "images/Vaccinium corymbosum/Vaccinium corymbosum 1.jpg",
        'Sub images': [
            "images/Vaccinium corymbosum/Vaccinium corymbosum 2.jpg",
            "images/Vaccinium corymbosum/Vaccinium corymbosum 3.jpg",
            "images/Vaccinium corymbosum/Vaccinium corymbosum 4.jpg",
        ]},
    {
        'Latin name': "Vaccinium myrtillus",
        'Dutch name': "Blauwe bosbes",
        'Image path': "images/Vaccinium myrtillus/Vaccinium myrtillus 1.jpg",
        'Sub images': [
            "images/Vaccinium myrtillus/Vaccinium myrtillus 2.jpg",
        ]},
    {
        'Latin name': "Valeriana repens",
        'Dutch name': "Echte valeriaan",
        'Image path': "images/Valeriana repens/Valeriana repens 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Verbascum nigrum var. album",
        'Dutch name': "Zwarte toorts",
        'Image path': "images/Verbascum nigrum var. album/Verbascum nigrum var. album 1.jpg",
        'Sub images': [
            "images/Verbascum nigrum var. album/Verbascum nigrum var. album 2.jpg",
        ]},
    {
        'Latin name': "Verbena bonariensis",
        'Dutch name': "Ijzerhard",
        'Image path': "images/Verbena bonariensis/Verbena bonariensis 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Veronicastrum virginicum",
        'Dutch name': "Virginische ereprijs",
        'Image path': "images/Veronicastrum virginicum/Veronicastrum virginicum 1.jpg",
        'Sub images': [
        ]},
    {
        'Latin name': "Viburnum davidii",
        'Dutch name': "Sneeuwbal",
        'Image path': "images/Viburnum davidii/Viburnum davidii 1.jpg",
        'Sub images': [
            "images/Viburnum davidii/Viburnum davidii 2.jpg",
            "images/Viburnum davidii/Viburnum davidii 3.jpg",
            "images/Viburnum davidii/Viburnum davidii 4.jpg",
            "images/Viburnum davidii/Viburnum davidii 5.jpg",
        ]},
    {
        'Latin name': "Viburnum macrocephalum",
        'Dutch name': "Chinese sneeuwbal",
        'Image path': "images/Viburnum macrocephalum/Viburnum macrocephalum 1.jpg",
        'Sub images': [
            "images/Viburnum macrocephalum/Viburnum macrocephalum 2.jpg",
            "images/Viburnum macrocephalum/Viburnum macrocephalum 3.jpg",
            "images/Viburnum macrocephalum/Viburnum macrocephalum 4.jpg",
        ]},
    {
        'Latin name': "Viburnum opulus",
        'Dutch name': "Gelderse roos",
        'Image path': "images/Viburnum opulus/Viburnum opulus 1.jpg",
        'Sub images': [
            "images/Viburnum opulus/Viburnum opulus 2.jpg",
            "images/Viburnum opulus/Viburnum opulus 3.jpg",
            "images/Viburnum opulus/Viburnum opulus 4.jpg",
        ]},
    {
        'Latin name': "Viburnum plicatum 'Mariesii'",
        'Dutch name': "Japanse sneeuwbal",
        'Image path': "images/Viburnum plicatum 'Mariesii'/Viburnum plicatum 'Mariesii' 1.jpg",
        'Sub images': [
            "images/Viburnum plicatum 'Mariesii'/Viburnum plicatum 'Mariesii' 2.jpg",
            "images/Viburnum plicatum 'Mariesii'/Viburnum plicatum 'Mariesii' 3.jpg",
            "images/Viburnum plicatum 'Mariesii'/Viburnum plicatum 'Mariesii' 4.jpg",
            "images/Viburnum plicatum 'Mariesii'/Viburnum plicatum 'Mariesii' 5.jpg",
            "images/Viburnum plicatum 'Mariesii'/Viburnum plicatum 'Mariesii' 6.jpg",
        ]},
    {
        'Latin name': "Viburnum rhytidophyllum",
        'Dutch name': "Leerbladige sneeuwbal",
        'Image path': "images/Viburnum rhytidophyllum/Viburnum rhytidophyllum 1.jpg",
        'Sub images': [
            "images/Viburnum rhytidophyllum/Viburnum rhytidophyllum 2.jpg",
            "images/Viburnum rhytidophyllum/Viburnum rhytidophyllum 3.jpg",
            "images/Viburnum rhytidophyllum/Viburnum rhytidophyllum 4.jpg",
        ]},
    {
        'Latin name': "Viburnum tinus",
        'Dutch name': "Sneeuwbal",
        'Image path': "images/Viburnum tinus/Viburnum tinus 1.jpg",
        'Sub images': [
            "images/Viburnum tinus/Viburnum tinus 2.jpg",
            "images/Viburnum tinus/Viburnum tinus 3.jpg",
            "images/Viburnum tinus/Viburnum tinus 4.jpg",
            "images/Viburnum tinus/Viburnum tinus 5.jpg",
        ]},
    {
        'Latin name': "Viburnum x bodnantense",
        'Dutch name': "Wintersneeuwbal",
        'Image path': "images/Viburnum x bodnantense/Viburnum x bodnantense 1.jpg",
        'Sub images': [
            "images/Viburnum x bodnantense/Viburnum x bodnantense 2.jpg",
            "images/Viburnum x bodnantense/Viburnum x bodnantense 3.jpg",
        ]},
    {
        'Latin name': "Vinca major",
        'Dutch name': "Grote maagdenpalm",
        'Image path': "images/Vinca major/Vinca major 1.jpg",
        'Sub images': [
            "images/Vinca major/Vinca major 2.jpg",
        ]},
    {
        'Latin name': "Vinca minor",
        'Dutch name': "Kleine maagdenpalm",
        'Image path': "images/Vinca minor/Vinca minor 1.jpg",
        'Sub images': [
            "images/Vinca minor/Vinca minor 2.jpg",
            "images/Vinca minor/Vinca minor 3.jpg",
        ]},
    {
        'Latin name': "Vitis coignetiae",
        'Dutch name': "Sierdruif",
        'Image path': "images/Vitis coignetiae/Vitis coignetiae 1.jpg",
        'Sub images': [
            "images/Vitis coignetiae/Vitis coignetiae 2.jpg",
            "images/Vitis coignetiae/Vitis coignetiae 3.jpg",
        ]},
    {
        'Latin name': "Vitis vinifera",
        'Dutch name': "Druivelaar",
        'Image path': "images/Vitis vinifera/Vitis vinifera 1.jpg",
        'Sub images': [
            "images/Vitis vinifera/Vitis vinifera 2.jpg",
        ]},
    {
        'Latin name': "Waldsteinia ternata",
        'Dutch name': "Goudaardbei",
        'Image path': "images/Waldsteinia ternata/Waldsteinia ternata 1.jpg",
        'Sub images': [
            "images/Waldsteinia ternata/Waldsteinia ternata 2.jpg",
        ]},
    {
        'Latin name': "Weigela florida",
        'Dutch name': "Weigela",
        'Image path': "images/Weigela florida/Weigela florida 1.jpg",
        'Sub images': [
            "images/Weigela florida/Weigela florida 2.jpg",
        ]},
    {
        'Latin name': "Wisteria floribunda",
        'Dutch name': "Japanse blauwe regen",
        'Image path': "images/Wisteria floribunda/Wisteria floribunda 1.jpg",
        'Sub images': [
            "images/Wisteria floribunda/Wisteria floribunda 2.jpg",
        ]},
    {
        'Latin name': "Wisteria sinensis",
        'Dutch name': "Chinese blauwe regen",
        'Image path': "images/Wisteria sinensis/Wisteria sinensis 1.jpg",
        'Sub images': [
            "images/Wisteria sinensis/Wisteria sinensis 2.jpg",
            "images/Wisteria sinensis/Wisteria sinensis 3.jpg",
        ]},
    {
        'Latin name': "x Cupressocyparis leylandii",
        'Dutch name': "Leylandcipres",
        'Image path': "images/x Cupressocyparis leylandii/x Cupressocyparis leylandii 1.jpg",
        'Sub images': [
            "images/x Cupressocyparis leylandii/x Cupressocyparis leylandii 2.jpg",
            "images/x Cupressocyparis leylandii/x Cupressocyparis leylandii 3.jpg",
        ]},
    {
        'Latin name': "Zelkova carpinifolia",
        'Dutch name': "Kaukasische schijniep",
        'Image path': "images/Zelkova carpinifolia/Zelkova carpinifolia 1.jpg",
        'Sub images': [
            "images/Zelkova carpinifolia/Zelkova carpinifolia 2.jpg",
            "images/Zelkova carpinifolia/Zelkova carpinifolia 3.jpg",
        ]},

]
