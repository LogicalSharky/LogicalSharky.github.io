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
        'Image path': "images/Abies nordmanniana/Abies nordmanniana.jpg",
    },
    {
        'Latin name': "Acaena microphylla",
        'Dutch name': "Stekelnootje",
        'Image path': "images/Acaena microphylla/Acaena microphylla.jpg",
    },
    {
        'Latin name': "Acanthus mollis",
        'Dutch name': "Zachte acanthus",
        'Image path': "images/Acanthus mollis/Acanthus mollis.jpg",
    },
    {
        'Latin name': "Acer campestre",
        'Dutch name': "Veldesdoorn",
        'Image path': "images/Acer campestre/Acer campestre.jpg",
    },
    {
        'Latin name': "Acer negundo",
        'Dutch name': "Vederesdoorn",
        'Image path': "images/Acer negundo/Acer negundo.jpg",
    },
    {
        'Latin name': "Acer palmatum 'Atropurpureum'",
        'Dutch name': "Japanse esdoorn",
        'Image path': "images/Acer palmatum 'Atropurpureum'/Acer palmatum 'Atropurpureum'.jpg",
    },
    {
        'Latin name': "Acer palmatum 'Dissectum'",
        'Dutch name': "Japanse esdoorn",
        'Image path': "images/Acer palmatum 'Dissectum'/Acer palmatum 'Dissectum'.jpg",
    },
    {
        'Latin name': "Acer platanoides",
        'Dutch name': "Noorse esdoorn",
        'Image path': "images/Acer platanoides/Acer platanoides.jpg",
    },
    {
        'Latin name': "Acer pseudoplatanus",
        'Dutch name': "Gewone esdoorn",
        'Image path': "images/Acer pseudoplatanus/Acer pseudoplatanus.jpg",
    },
    {
        'Latin name': "Acer saccharinum",
        'Dutch name': "Zilveresdoorn",
        'Image path': "images/Acer saccharinum/Acer saccharinum.jpg",
    },
    {
        'Latin name': "Achillea 'Coronation Gold'",
        'Dutch name': "Duizenblad",
        'Image path': "images/Achillea 'Coronation Gold'/Achillea 'Coronation Gold'.jpg",
    },
    {
        'Latin name': "Achillea millefolium",
        'Dutch name': "Duizendblad",
        'Image path': "images/Achillea millefolium/Achillea millefolium.jpg",
    },
    {
        'Latin name': "Aconitum napellus",
        'Dutch name': "Blauwe monnikskap",
        'Image path': "images/Aconitum napellus/Aconitum napellus.jpg",
    },
    {
        'Latin name': "Actaea simplex 'White Pearl'",
        'Dutch name': "Zilverkaars",
        'Image path': "images/Actaea simplex 'White Pearl'/Actaea simplex 'White Pearl'.jpg",
    },
    {
        'Latin name': "Actinidia deliciosa",
        'Dutch name': "Kiwi",
        'Image path': "images/Actinidia deliciosa/Actinidia deliciosa.jpg",
    },
    {
        'Latin name': "Actinidia kolomikta",
        'Dutch name': "Sierkiwi",
        'Image path': "images/Actinidia kolomikta/Actinidia kolomikta.jpg",
    },
    {
        'Latin name': "Aegopodium podagraria",
        'Dutch name': "Zevenblad",
        'Image path': "images/Aegopodium podagraria/Aegopodium podagraria.jpg",
    },
    {
        'Latin name': "Aesculus hippocastanum",
        'Dutch name': "Witte paardenkastanje",
        'Image path': "images/Aesculus hippocastanum/Aesculus hippocastanum.jpg",
    },
    {
        'Latin name': "Aesculus x carnea",
        'Dutch name': "Rode paardenkastanje",
        'Image path': "images/Aesculus x carnea/Aesculus x carnea.jpg",
    },
    {
        'Latin name': "Agastache 'Blue Fortune'",
        'Dutch name': "Dropplant",
        'Image path': "images/Agastache 'Blue Fortune'/Agastache 'Blue Fortune'.jpg",
    },
    {
        'Latin name': "Agrimonia eupatoria",
        'Dutch name': "Gewone agrimonie",
        'Image path': "images/Agrimonia eupatoria/Agrimonia eupatoria.jpg",
    },
    {
        'Latin name': "Ajuga reptans ' Atropurpurea'",
        'Dutch name': "Kruipend zenegroen",
        'Image path': "images/Ajuga reptans ' Atropurpurea'/Ajuga reptans ' Atropurpurea'.jpg",
    },
    {
        'Latin name': "Akebia quinata",
        'Dutch name': "Schijnaugurk",
        'Image path': "images/Akebia quinata/Akebia quinata.jpg",
    },
    {
        'Latin name': "Alcea rosea",
        'Dutch name': "Stokroos",
        'Image path': "images/Alcea rosea/Alcea rosea.jpg",
    },
    {
        'Latin name': "Alchemilla mollis",
        'Dutch name': "Fraaie vrouwenmantel",
        'Image path': "images/Alchemilla mollis/Alchemilla mollis.jpg",
    },
    {
        'Latin name': "Alisma plantago-aquatica",
        'Dutch name': "Grote waterweegbree",
        'Image path': "images/Alisma plantago-aquatica/Alisma plantago-aquatica.jpg",
    },
    {
        'Latin name': "Alliaria petiolata",
        'Dutch name': "Look-zonder-look",
        'Image path': "images/Alliaria petiolata/Alliaria petiolata.jpg",
    },
        {
        'Latin name': "Allium christophii",
        'Dutch name': "Sterrenlook",
        'Image path': "images/Allium christophii/Allium christophii.jpg",
    },
    {
        'Latin name': "Allium schoenoprasum",
        'Dutch name': "Bieslook",
        'Image path': "images/Allium schoenoprasum/Allium schoenoprasum.jpg",
    },
    {
        'Latin name': "Allium ursinum",
        'Dutch name': "Daslook",
        'Image path': "images/Allium ursinum/Allium ursinum.jpg",
    },
    {
        'Latin name': "Alnus cordata",
        'Dutch name': "Hartbladige els",
        'Image path': "images/Alnus cordata/Alnus cordata.jpg",
    },
    {
        'Latin name': "Alnus glutinosa",
        'Dutch name': "Zwarte els",
        'Image path': "images/Alnus glutinosa/Alnus glutinosa.jpg",
    },
    {
        'Latin name': "Alnus incana",
        'Dutch name': "Witte els",
        'Image path': "images/Alnus incana/Alnus incana.jpg",
    },
    {
        'Latin name': "Amelanchier ovalis",
        'Dutch name': "Europees krentenboompje",
        'Image path': "images/Amelanchier ovalis/Amelanchier ovalis.jpg",
    },
    {
        'Latin name': "Ammophila arenaria",
        'Dutch name': "Helmgras",
        'Image path': "images/Ammophila arenaria/Ammophila arenaria.jpg",
    },
    {
        'Latin name': "Ampelopsis glandulosa 'Elegans'",
        'Dutch name': "Bonte wingerd",
        'Image path': "images/Ampelopsis glandulosa 'Elegans'/Ampelopsis glandulosa 'Elegans'.jpg",
    },
    {
        'Latin name': "Anaphalis triplinervis",
        'Dutch name': "Siberische edelweiss",
        'Image path': "images/Anaphalis triplinervis/Anaphalis triplinervis.jpg",
    },
        {
        'Latin name': "Anemone x hybrida 'Honorine Jobert'",
        'Dutch name': "Herfstanemoon",
        'Image path': "images/Anemone x hybrida 'Honorine Jobert'/Anemone x hybrida 'Honorine Jobert'.jpg",
    },
    {
        'Latin name': "Anemone blanda",
        'Dutch name': "Oosterse anemoon",
        'Image path': "images/Anemone blanda/Anemone blanda.jpg",
    },
    {
        'Latin name': "Anemone nemorosa",
        'Dutch name': "Bosanemoon",
        'Image path': "images/Anemone nemorosa/Anemone nemorosa.jpg",
    },
    {
        'Latin name': "Anthriscus sylvestris",
        'Dutch name': "Fluitenkruid",
        'Image path': "images/Anthriscus sylvestris/Anthriscus sylvestris.jpg",
    },
    {
        'Latin name': "Aquilegia vulgaris",
        'Dutch name': "Wilde akelei",
        'Image path': "images/Aquilegia vulgaris/Aquilegia vulgaris.jpg",
    },
    {
        'Latin name': "Araucaria araucana",
        'Dutch name': "Slangenden",
        'Image path': "images/Araucaria araucana/Araucaria araucana.jpg",
    },
    {
        'Latin name': "Arisaema consanguineum",
        'Dutch name': "Drakenvuurkorf",
        'Image path': "images/Arisaema consanguineum/Arisaema consanguineum.jpg",
    },
    {
        'Latin name': "Aristolochia macrophylla",
        'Dutch name': "Duitse pijp",
        'Image path': "images/Aristolochia macrophylla/Aristolochia macrophylla.jpg",
    },
    {
        'Latin name': "Armoracia rusticana",
        'Dutch name': "Mierikswortel",
        'Image path': "images/Armoracia rusticana/Armoracia rusticana.jpg",
    },
    {
        'Latin name': "Aronia melanocarpa",
        'Dutch name': "Zwarte appelbes",
        'Image path': "images/Aronia melanocarpa/Aronia melanocarpa.jpg",
    },
        {
        'Latin name': "Artemisia abrotanum",
        'Dutch name': "Citroenkruid",
        'Image path': "images/Artemisia abrotanum/Artemisia abrotanum.jpg",
    },
    {
        'Latin name': "Artemisia dracunculus",
        'Dutch name': "Dragon",
        'Image path': "images/Artemisia dracunculus/Artemisia dracunculus.jpg",
    },
    {
        'Latin name': "Placeholder",
        'Dutch name': "Placeholder",
        'Image path': "images/Placeholder/Placeholder.jpg",
    },
    {
        'Latin name': "Artemisia lactiflora 'Elfenbein'",
        'Dutch name': "Alsem",
        'Image path': "images/Artemisia lactiflora 'Elfenbein'/Artemisia lactiflora 'Elfenbein'.jpg",
    },
    {
        'Latin name': "Arum italicum",
        'Dutch name': "Italiaanse aronskelk",
        'Image path': "images/Arum italicum/Arum italicum.jpg",
    },
    {
        'Latin name': "Arum maculatum",
        'Dutch name': "Gevlekte aronskelk",
        'Image path': "images/Arum maculatum/Arum maculatum.jpg",
    },
    {
        'Latin name': "Aruncus dioicus",
        'Dutch name': "Geitenbaard",
        'Image path': "images/Aruncus dioicus/Aruncus dioicus.jpg",
    },
    {
        'Latin name': "Asarum europaeum",
        'Dutch name': "Mansoor",
        'Image path': "images/Asarum europaeum/Asarum europaeum.jpg",
    },
    {
        'Latin name': "Asplenium scolopendrium",
        'Dutch name': "Tongvaren",
        'Image path': "images/Asplenium scolopendrium/Asplenium scolopendrium.jpg",
    },
    {
        'Latin name': "Aster 'Prof. Anton Kippenberg'",
        'Dutch name': "Kussenaster",
        'Image path': "images/Aster 'Prof. Anton Kippenberg'/Aster 'Prof. Anton Kippenberg'.jpg",
    },
        {
        'Latin name': "Aster x frikartii 'Mönch'",
        'Dutch name': "Herfstaster",
        'Image path': "images/Aster x frikartii 'Mönch'/Aster x frikartii 'Mönch'.jpg",
    },
    {
        'Latin name': "Aster amellus ' Veilchenkönigin'",
        'Dutch name': "Bergaster",
        'Image path': "images/Aster amellus ' Veilchenkönigin'/Aster amellus ' Veilchenkönigin'.jpg",
    },
    {
        'Latin name': "Aster divaricatus",
        'Dutch name': "Bosaster",
        'Image path': "images/Aster divaricatus/Aster divaricatus.jpg",
    },
    {
        'Latin name': "Aster lateriflorus 'Horizontalis'",
        'Dutch name': "Kleinbloemige aster",
        'Image path': "images/Aster lateriflorus 'Horizontalis'/Aster lateriflorus 'Horizontalis'.jpg",
    },
    {
        'Latin name': "Aster novae-angliae 'Andenken an Alma Pötschke'",
        'Dutch name': "Nieuw-Engelse aster",
        'Image path': "images/Aster novae-angliae 'Andenken an Alma Pötschke'/Aster novae-angliae 'Andenken an Alma Pötschke'.jpg",
    },
    {
        'Latin name': "Astilbe chinensis 'Pumila'",
        'Dutch name': "Pluimspirea",
        'Image path': "images/Astilbe chinensis 'Pumila'/Astilbe chinensis 'Pumila'.jpg",
    },
    {
        'Latin name': "Astilboides tabularis",
        'Dutch name': "Tafelblad",
        'Image path': "images/Astilboides tabularis/Astilboides tabularis.jpg",
    },
    {
        'Latin name': "Astrantia major",
        'Dutch name': "Zeeuws knoopje",
        'Image path': "images/Astrantia major/Astrantia major.jpg",
    },
    {
        'Latin name': "Athyrium filix-femina",
        'Dutch name': "Wijfjesvaren",
        'Image path': "images/Athyrium filix-femina/Athyrium filix-femina.jpg",
    },
    {
        'Latin name': "Athyrium niponicum var. pictum",
        'Dutch name': "Japanse regenboogvaren",
        'Image path': "images/Athyrium niponicum var. pictum/Athyrium niponicum var. pictum.jpg",
    },
        {
        'Latin name': "Bergenia 'Bressingham Ruby'",
        'Dutch name': "Schoenlappersplant",
        'Image path': "images/Bergenia 'Bressingham Ruby'/Bergenia 'Bressingham Ruby'.jpg",
    },
    {
        'Latin name': "Betula papyrifera",
        'Dutch name': "Papierberk",
        'Image path': "images/Betula papyrifera/Betula papyrifera.jpg",
    },
    {
        'Latin name': "Betula pendula",
        'Dutch name': "Ruwe berk",
        'Image path': "images/Betula pendula/Betula pendula.jpg",
    },
    {
        'Latin name': "Betula pubescens",
        'Dutch name': "Zachte berk",
        'Image path': "images/Betula pubescens/Betula pubescens.jpg",
    },
    {
        'Latin name': "Blechnum spicant",
        'Dutch name': "Dubbelloof",
        'Image path': "images/Blechnum spicant/Blechnum spicant.jpg",
    },
    {
        'Latin name': "Brunnera macrophylla 'Jack Frost'",
        'Dutch name': "Kaukasisch vergeet-mij-nietje",
        'Image path': "images/Brunnera macrophylla 'Jack Frost'/Brunnera macrophylla 'Jack Frost'.jpg",
    },
    {
        'Latin name': "Buddleja davidii",
        'Dutch name': "Vlinderstruik",
        'Image path': "images/Buddleja davidii/Buddleja davidii.jpg",
    },
    {
        'Latin name': "Butomus umbellatus",
        'Dutch name': "Zwanenbloem",
        'Image path': "images/Butomus umbellatus/Butomus umbellatus.jpg",
    },
    {
        'Latin name': "Buxus sempervirens",
        'Dutch name': "Palmboompje",
        'Image path': "images/Buxus sempervirens/Buxus sempervirens.jpg",
    },
    {
        'Latin name': "Calamagrostis x acutiflora 'Karl Foerster'",
        'Dutch name': "Pluimstruisriet",
        'Image path': "images/Calamagrostis x acutiflora 'Karl Foerster'/Calamagrostis x acutiflora 'Karl Foerster'.jpg",
    },
        {
        'Latin name': "Calamintha nepeta subsp. nepeta",
        'Dutch name': "Bergsteentijm",
        'Image path': "images/Calamintha nepeta subsp. nepeta/Calamintha nepeta subsp. nepeta.jpg",
    },
    {
        'Latin name': "Calla palustris",
        'Dutch name': "Slangenwortel",
        'Image path': "images/Calla palustris/Calla palustris.jpg",
    },
    {
        'Latin name': "Calluna vulgaris",
        'Dutch name': "Struikhei",
        'Image path': "images/Calluna vulgaris/Calluna vulgaris.jpg",
    },
    {
        'Latin name': "Caltha palustris",
        'Dutch name': "Dotterbloem",
        'Image path': "images/Caltha palustris/Caltha palustris.jpg",
    },
    {
        'Latin name': "Camassia leichtlinii 'Caerulea'",
        'Dutch name': "Prairielelie",
        'Image path': "images/Camassia leichtlinii 'Caerulea'/Camassia leichtlinii 'Caerulea'.jpg",
    },
    {
        'Latin name': "Campanula lactiflora ' Loddon Anna'",
        'Dutch name': "Klokjesbloem",
        'Image path': "images/Campanula lactiflora ' Loddon Anna'/Campanula lactiflora ' Loddon Anna'.jpg",
    },
    {
        'Latin name': "Campanula rotundifolia",
        'Dutch name': "Grasklokje",
        'Image path': "images/Campanula rotundifolia/Campanula rotundifolia.jpg",
    },
    {
        'Latin name': "Campsis radicans",
        'Dutch name': "Trompetklimmer",
        'Image path': "images/Campsis radicans/Campsis radicans.jpg",
    },
    {
        'Latin name': "Cardamine pratensis",
        'Dutch name': "Pinksterbloem",
        'Image path': "images/Cardamine pratensis/Cardamine pratensis.jpg",
    },
    {
        'Latin name': "Carex comans 'Bronze Form'",
        'Dutch name': "Zegge",
        'Image path': "images/Carex comans 'Bronze Form'/Carex comans 'Bronze Form'.jpg",
    },
        {
        'Latin name': "Carex morrowii 'Variegata'",
        'Dutch name': "Japanse zegge",
        'Image path': "images/Carex morrowii 'Variegata'/Carex morrowii 'Variegata'.jpg",
    },
    {
        'Latin name': "Carex pendula",
        'Dutch name': "Hangende zegge",
        'Image path': "images/Carex pendula/Carex pendula.jpg",
    },
    {
        'Latin name': "Carex plantaginea",
        'Dutch name': "Breedbladige zegge",
        'Image path': "images/Carex plantaginea/Carex plantaginea.jpg",
    },
    {
        'Latin name': "Carex sylvatica",
        'Dutch name': "Boszegge",
        'Image path': "images/Carex sylvatica/Carex sylvatica.jpg",
    },
    {
        'Latin name': "Carpinus betulus",
        'Dutch name': "Haagbeuk",
        'Image path': "images/Carpinus betulus/Carpinus betulus.jpg",
    },
    {
        'Latin name': "Castanea sativa",
        'Dutch name': "Tamme kastanje",
        'Image path': "images/Castanea sativa/Castanea sativa.jpg",
    },
    {
        'Latin name': "Catalpa bignonioides",
        'Dutch name': "Trompetboom",
        'Image path': "images/Catalpa bignonioides/Catalpa bignonioides.jpg",
    },
    {
        'Latin name': "Cedrus deodara",
        'Dutch name': "Himalayaceder",
        'Image path': "images/Cedrus deodara/Cedrus deodara.jpg",
    },
    {
        'Latin name': "Cedrus libani",
        'Dutch name': "Libanonceder",
        'Image path': "images/Cedrus libani/Cedrus libani.jpg",
    },
    {
        'Latin name': "Cedrus libani subsp. atlantica",
        'Dutch name': "Atlasceder",
        'Image path': "images/Cedrus libani subsp. atlantica/Cedrus libani subsp. atlantica.jpg",
    },
        {
        'Latin name': "Centranthus ruber 'Coccineus'",
        'Dutch name': "Rode valeriaan",
        'Image path': "images/Centranthus ruber 'Coccineus'/Centranthus ruber 'Coccineus'.jpg",
    },
    {
        'Latin name': "Ceratophyllum demersum",
        'Dutch name': "Grof hoornblad",
        'Image path': "images/Ceratophyllum demersum/Ceratophyllum demersum.jpg",
    },
    {
        'Latin name': "Ceratostigma plumbaginoides",
        'Dutch name': "Loodkruid",
        'Image path': "images/Ceratostigma plumbaginoides/Ceratostigma plumbaginoides.jpg",
    },
    {
        'Latin name': "Cercidiphyllum japonicum",
        'Dutch name': "Katsuraboom",
        'Image path': "images/Cercidiphyllum japonicum/Cercidiphyllum japonicum.jpg",
    },
    {
        'Latin name': "Chaenomeles x superba",
        'Dutch name': "Dwergkwee",
        'Image path': "images/Chaenomeles x superba/Chaenomeles x superba.jpg",
    },
    {
        'Latin name': "Chamaecyparis lawsoniana",
        'Dutch name': "Californische cipres",
        'Image path': "images/Chamaecyparis lawsoniana/Chamaecyparis lawsoniana.jpg",
    },
    {
        'Latin name': "Chamaecyparis nootkatensis",
        'Dutch name': "Nootkacipres",
        'Image path': "images/Chamaecyparis nootkatensis/Chamaecyparis nootkatensis.jpg",
    },
    {
        'Latin name': "Chamaecyparis nootkatensis 'Pendula'",
        'Dutch name': "Treurcipres",
        'Image path': "images/Chamaecyparis nootkatensis 'Pendula'/Chamaecyparis nootkatensis 'Pendula'.jpg",
    },
    {
        'Latin name': "Chelone obliqua",
        'Dutch name': "Schildpadbloem",
        'Image path': "images/Chelone obliqua/Chelone obliqua.jpg",
    },
    {
        'Latin name': "Chimonanthus praecox",
        'Dutch name': "Winterzoet",
        'Image path': "images/Chimonanthus praecox/Chimonanthus praecox.jpg",
    },
    {
        'Latin name': "Chionodoxa sardensis",
        'Dutch name': "Kleine sneeuwroem",
        'Image path': "images/Chionodoxa sardensis/Chionodoxa sardensis.jpg",
    },
        {
        'Latin name': "Choisya ternata",
        'Dutch name': "Mexicaanse oranjebloesem",
        'Image path': "images/Choisya ternata/Choisya ternata.jpg",
    },
    {
        'Latin name': "Cirsium arvense",
        'Dutch name': "Akkerdistel",
        'Image path': "images/Cirsium arvense/Cirsium arvense.jpg",
    },
    {
        'Latin name': "Clematis alpina",
        'Dutch name': "Alpenbosrank",
        'Image path': "images/Clematis alpina/Clematis alpina.jpg",
    },
    {
        'Latin name': "Clematis montana",
        'Dutch name': "Bergbosrank",
        'Image path': "images/Clematis montana/Clematis montana.jpg",
    },
    {
        'Latin name': "Clematis tibetana subsp. tangutica",
        'Dutch name': "Gouden bosrank",
        'Image path': "images/Clematis tibetana subsp. tangutica/Clematis tibetana subsp. tangutica.jpg",
    },
    {
        'Latin name': "Clematis vitalba",
        'Dutch name': "Wilde bosrank",
        'Image path': "images/Clematis vitalba/Clematis vitalba.jpg",
    },
    {
        'Latin name': "Clethra alnifolia",
        'Dutch name': "Schijnels",
        'Image path': "images/Clethra alnifolia/Clethra alnifolia.jpg",
    },
    {
        'Latin name': "Colchicum autumnale",
        'Dutch name': "Herfsttijloos",
        'Image path': "images/Colchicum autumnale/Colchicum autumnale.jpg",
    },
    {
        'Latin name': "Comarum palustre",
        'Dutch name': "Wateraardbei",
        'Image path': "images/Comarum palustre/Comarum palustre.jpg",
    },
    {
        'Latin name': "Convallaria majalis",
        'Dutch name': "Lelietje-van-dalen",
        'Image path': "images/Convallaria majalis/Convallaria majalis.jpg",
    },
        {
        'Latin name': "Cornus mas",
        'Dutch name': "Gele kornoelje",
        'Image path': "images/Cornus mas/Cornus mas.jpg",
    },
    {
        'Latin name': "Cornus sanguinea",
        'Dutch name': "Rode kornoelje",
        'Image path': "images/Cornus sanguinea/Cornus sanguinea.jpg",
    },
    {
        'Latin name': "Cortaderia selloana",
        'Dutch name': "Pampasgras",
        'Image path': "images/Cortaderia selloana/Cortaderia selloana.jpg",
    },
    {
        'Latin name': "Corydalis flexuosa",
        'Dutch name': "Helmbloem",
        'Image path': "images/Corydalis flexuosa/Corydalis flexuosa.jpg",
    },
    {
        'Latin name': "Corylopsis spicata",
        'Dutch name': "Schijnhazelaar",
        'Image path': "images/Corylopsis spicata/Corylopsis spicata.jpg",
    },
    {
        'Latin name': "Corylus avellana",
        'Dutch name': "Hazelaar",
        'Image path': "images/Corylus avellana/Corylus avellana.jpg",
    },
    {
        'Latin name': "Corylus colurna",
        'Dutch name': "Boomhazelaar",
        'Image path': "images/Corylus colurna/Corylus colurna.jpg",
    },
    {
        'Latin name': "Corylus 'Fertile de Nottingham'",
        'Dutch name': "Hazelaar",
        'Image path': "images/Corylus 'Fertile de Nottingham'/Corylus 'Fertile de Nottingham'.jpg",
    },
    {
        'Latin name': "Corylus 'Webb's Prize Cobb'",
        'Dutch name': "Hazelaar",
        'Image path': "images/Corylus 'Webb's Prize Cobb'/Corylus 'Webb's Prize Cobb'.jpg",
    },
    {
        'Latin name': "Cotinus coggygria",
        'Dutch name': "Pruikenboom",
        'Image path': "images/Cotinus coggygria/Cotinus coggygria.jpg",
    },
        {
        'Latin name': "Cotinus coggygria 'Royal Purple'",
        'Dutch name': "Pruikenboom",
        'Image path': "images/Cotinus coggygria 'Royal Purple'/Cotinus coggygria 'Royal Purple'.jpg",
    },
    {
        'Latin name': "Cotinus coggygria 'Young Lady'",
        'Dutch name': "Pruikenboom",
        'Image path': "images/Cotinus coggygria 'Young Lady'/Cotinus coggygria 'Young Lady'.jpg",
    },
    {
        'Latin name': "Crambe cordifolia",
        'Dutch name': "Zeekool",
        'Image path': "images/Crambe cordifolia/Crambe cordifolia.jpg",
    },
    {
        'Latin name': "Crataegus laevigata",
        'Dutch name': "Tweestijlige meidoorn",
        'Image path': "images/Crataegus laevigata/Crataegus laevigata.jpg",
    },
    {
        'Latin name': "Crataegus monogyna",
        'Dutch name': "Éénstijlige meidoorn",
        'Image path': "images/Crataegus monogyna/Crataegus monogyna.jpg",
    },
    {
        'Latin name': "Crocosmia 'Lucifer'",
        'Dutch name': "Montbretia",
        'Image path': "images/Crocosmia 'Lucifer'/Crocosmia 'Lucifer'.jpg",
    },
    {
        'Latin name': "Crocus flavus",
        'Dutch name': "Gele crocus",
        'Image path': "images/Crocus flavus/Crocus flavus.jpg",
    },
    {
        'Latin name': "Crocus pulchellus 'Zephyr'",
        'Dutch name': "Herfst prachtkrokus",
        'Image path': "images/Crocus pulchellus 'Zephyr'/Crocus pulchellus 'Zephyr'.jpg",
    },
    {
        'Latin name': "Crocus tommasinianus",
        'Dutch name': "Boerenkrokus",
        'Image path': "images/Crocus tommasinianus/Crocus tommasinianus.jpg",
    },
    {
        'Latin name': "Cryptomeria japonica",
        'Dutch name': "Japanse ceder",
        'Image path': "images/Cryptomeria japonica/Cryptomeria japonica.jpg",
    },
        {
        'Latin name': "Cupressus sempervirens",
        'Dutch name': "Italiaanse cipres",
        'Image path': "images/Cupressus sempervirens/Cupressus sempervirens.jpg",
    },
    {
        'Latin name': "Cyclamen coum",
        'Dutch name': "Rondbladige cyclaam",
        'Image path': "images/Cyclamen coum/Cyclamen coum.jpg",
    },
    {
        'Latin name': "Cyclamen hederifolium",
        'Dutch name': "Napolitaanse cyclaam",
        'Image path': "images/Cyclamen hederifolium/Cyclamen hederifolium.jpg",
    },
    {
        'Latin name': "Cydonia oblonga",
        'Dutch name': "Kweeper",
        'Image path': "images/Cydonia oblonga/Cydonia oblonga.jpg",
    },
    {
        'Latin name': "Cytisus scoparius",
        'Dutch name': "Brem",
        'Image path': "images/PlacehoCytisus scopariuslder/Cytisus scoparius.jpg",
    },
    {
        'Latin name': "Daphne x burkwoodii",
        'Dutch name': "Peperboompje",
        'Image path': "images/Daphne x burkwoodii/Daphne x burkwoodii.jpg",
    },
    {
        'Latin name': "Daphne mezereum",
        'Dutch name': "Rood peperboompje",
        'Image path': "images/Daphne mezereum/Daphne mezereum.jpg",
    },
    {
        'Latin name': "Darmera peltata",
        'Dutch name': "Schildblad",
        'Image path': "images/Darmera peltata/Darmera peltata.jpg",
    },
    {
        'Latin name': "Daucus carota",
        'Dutch name': "Wilde peen",
        'Image path': "images/Daucus carota/Daucus carota.jpg",
    },
    {
        'Latin name': "Delphinium belladonna 'Völkerfrieden'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium belladonna 'Völkerfrieden'/Delphinium belladonna 'Völkerfrieden'.jpg",
    },
        {
        'Latin name': "Delphinium 'Black knight'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium 'Black knight'/Delphinium 'Black knight'.jpg",
    },
    {
        'Latin name': "Delphinium 'Pacific Galahad'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium 'Pacific Galahad'/Delphinium 'Pacific Galahad'.jpg",
    },
    {
        'Latin name': "Delphinium 'Pink Blush'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium 'Pink Blush'/Delphinium 'Pink Blush'.jpg",
    },
    {
        'Latin name': "Delphinium 'Summer Skies'",
        'Dutch name': "Ridderspoor",
        'Image path': "images/Delphinium 'Summer Skies'/Delphinium 'Summer Skies'.jpg",
    },
    {
        'Latin name': "Deschampsia cespitosa",
        'Dutch name': "Ruwe smele",
        'Image path': "images/Deschampsia cespitosa/Deschampsia cespitosa.jpg",
    },
    {
        'Latin name': "Deutzia gracilis",
        'Dutch name': "Bruidsbloem",
        'Image path': "images/Deutzia gracilis/Deutzia gracilis.jpg",
    },
    {
        'Latin name': "Dicentra formosa",
        'Dutch name': "Gebroken hartje",
        'Image path': "images/Dicentra formosa/Dicentra formosa.jpg",
    },
    {
        'Latin name': "Dicentra spectabilis",
        'Dutch name': "Gebroken hartje",
        'Image path': "images/Dicentra spectabilis/Dicentra spectabilis.jpg",
    },
    {
        'Latin name': "Dictamnus albus",
        'Dutch name': "Vuurwerkplant",
        'Image path': "images/Dictamnus albus/Dictamnus albus.jpg",
    },
    {
        'Latin name': "Dierama pulcherrimum",
        'Dutch name': "Engelenhengel",
        'Image path': "images/Dierama pulcherrimum/Dierama pulcherrimum.jpg",
    },
        {
        'Latin name': "Digitalis lutea",
        'Dutch name': "Geel vingerhoedskruid",
        'Image path': "images/Digitalis lutea/Digitalis lutea.jpg",
    },
    {
        'Latin name': "Digitalis purpurea",
        'Dutch name': "Vingerhoedskruid",
        'Image path': "images/Digitalis purpurea/Digitalis purpurea.jpg",
    },
    {
        'Latin name': "Dipsacus fullonum",
        'Dutch name': "Grote kaardenbol",
        'Image path': "images/Dipsacus fullonum/Dipsacus fullonum.jpg",
    },
    {
        'Latin name': "Doronicum orientale",
        'Dutch name': "Voorjaarszonnebloem",
        'Image path': "images/Doronicum orientale/Doronicum orientale.jpg",
    },
    {
        'Latin name': "Dryopteris erythrosora",
        'Dutch name': "Herfstvaren",
        'Image path': "images/Dryopteris erythrosora/Dryopteris erythrosora.jpg",
    },
    {
        'Latin name': "Dryopteris filix-mas",
        'Dutch name': "Mannetjesvaren",
        'Image path': "images/Dryopteris filix-mas/Dryopteris filix-mas.jpg",
    },
    {
        'Latin name': "Echinops ritro ' Veitch's Blue'",
        'Dutch name': "Kogeldistel",
        'Image path': "images/Echinops ritro ' Veitch's Blue'/Echinops ritro ' Veitch's Blue'.jpg",
    },
    {
        'Latin name': "Echium vulgare",
        'Dutch name': "Slangenkruid",
        'Image path': "images/Echium vulgare/Echium vulgare.jpg",
    },
    {
        'Latin name': "Epilobium hirsutum",
        'Dutch name': "Harig wilgenroosje",
        'Image path': "images/Epilobium hirsutum/Epilobium hirsutum.jpg",
    },
    {
        'Latin name': "Epimedium x perralchicum 'Frohnleiten'",
        'Dutch name': "Elfenbloem",
        'Image path': "images/Epimedium x perralchicum 'Frohnleiten'/Epimedium x perralchicum 'Frohnleiten'.jpg",
    },
        {
        'Latin name': "Equisetum hyemale var. robustum",
        'Dutch name': "Schaafstro",
        'Image path': "images/Equisetum hyemale var. robustum/Equisetum hyemale var. robustum.jpg",
    },
    {
        'Latin name': "Eranthis hyemalis",
        'Dutch name': "Winterakoniet",
        'Image path': "images/Eranthis hyemalis/Eranthis hyemalis.jpg",
    },
    {
        'Latin name': "Eremurus stenophyllus",
        'Dutch name': "Naald van Cleopatra",
        'Image path': "images/Eremurus stenophyllus/Eremurus stenophyllus.jpg",
    },
    {
        'Latin name': "Eryngium x zabelii 'Big Blue'",
        'Dutch name': "Kruisdistel",
        'Image path': "images/Eryngium x zabelii 'Big Blue'/Eryngium x zabelii 'Big Blue'.jpg",
    },
    {
        'Latin name': "Erythronium dens-canis",
        'Dutch name': "Hondstand",
        'Image path': "images/Erythronium dens-canis/Erythronium dens-canis.jpg",
    },
    {
        'Latin name': "Euonymus europaeus",
        'Dutch name': "Wilde kardinaalsmuts",
        'Image path': "images/Euonymus europaeus/Euonymus europaeus.jpg",
    },
    {
        'Latin name': "Euonymus fortunei",
        'Dutch name': "Japanse kardinaalsmuts",
        'Image path': "images/Euonymus fortunei/Euonymus fortunei.jpg",
    },
    {
        'Latin name': "Eupatorium cannabinum",
        'Dutch name': "Koninginnekruid",
        'Image path': "images/Eupatorium cannabinum/Eupatorium cannabinum.jpg",
    },
    {
        'Latin name': "Eupatorium maculatum ' Atropurpureum'",
        'Dutch name': "Leverkruid",
        'Image path': "images/Eupatorium maculatum ' Atropurpureum'/Eupatorium maculatum ' Atropurpureum'.jpg",
    },
    {
        'Latin name': "Euphorbia amygdaloides var. robbiae",
        'Dutch name': "Amandelswolfsmelk",
        'Image path': "images/Euphorbia amygdaloides var. robbiae/Euphorbia amygdaloides var. robbiae.jpg",
    },
        {
        'Latin name': "Euphorbia characias subsp. wulfenii",
        'Dutch name': "Wolfsmelk",
        'Image path': "images/Euphorbia characias subsp. wulfenii/Euphorbia characias subsp. wulfenii.jpg",
    },
    {
        'Latin name': "Euphorbia griffithii 'Dixter'",
        'Dutch name': "Wolfsmelk",
        'Image path': "images/Euphorbia griffithii 'Dixter'/Euphorbia griffithii 'Dixter'.jpg",
    },
    {
        'Latin name': "Exochorda 'The Bride'",
        'Dutch name': "Parelstruik",
        'Image path': "images/Exochorda 'The Bride'/Exochorda 'The Bride'.jpg",
    },
    {
        'Latin name': "Fagus sylvatica",
        'Dutch name': "Beuk",
        'Image path': "images/Fagus sylvatica/Fagus sylvatica.jpg",
    },
    {
        'Latin name': "Fallopia baldschuanica",
        'Dutch name': "Chinese bruidssluier",
        'Image path': "images/Fallopia baldschuanica/Fallopia baldschuanica.jpg",
    },
    {
        'Latin name': "Festuca glauca",
        'Dutch name': "Vijgenboom",
        'Image path': "images/Festuca glauca/Festuca glauca.jpg",
    },
    {
        'Latin name': "Ficus carica",
        'Dutch name': "Vijgenboom",
        'Image path': "images/Ficus carica/Ficus carica.jpg",
    },
    {
        'Latin name': "Filipendula ulmaria",
        'Dutch name': "Moerasspirea",
        'Image path': "images/Filipendula ulmaria/Filipendula ulmaria.jpg",
    },
    {
        'Latin name': "Foeniculum vulgare",
        'Dutch name': "Venkel",
        'Image path': "images/Foeniculum vulgare/Foeniculum vulgare.jpg",
    },
    {
        'Latin name': "Forsythia x intermedia",
        'Dutch name': "Chinees klokje",
        'Image path': "images/Forsythia x intermedia/Forsythia x intermedia.jpg",
    },
        {
        'Latin name': "Fragaria vesca",
        'Dutch name': "Bosaardbei",
        'Image path': "images/Fragaria vesca/Fragaria vesca.jpg",
    },
    {
        'Latin name': "Fragaria x ananassa",
        'Dutch name': "Aardbei",
        'Image path': "images/Fragaria x ananassa/Fragaria x ananassa.jpg",
    },
    {
        'Latin name': "Frangula alnus",
        'Dutch name': "Sporkehout",
        'Image path': "images/Frangula alnus/Frangula alnus.jpg",
    },
    {
        'Latin name': "Fraxinus angustifolia",
        'Dutch name': "Smalbladige es",
        'Image path': "images/Fraxinus angustifolia/Fraxinus angustifolia.jpg",
    },
    {
        'Latin name': "Fraxinus excelsior",
        'Dutch name': "Gewone es",
        'Image path': "images/Fraxinus excelsior/Fraxinus excelsior.jpg",
    },
    {
        'Latin name': "Fraxinus ornus",
        'Dutch name': "Pluim-es",
        'Image path': "images/Fraxinus ornus/Fraxinus ornus.jpg",
    },
    {
        'Latin name': "Fritillaria meleagris",
        'Dutch name': "Wilde kievitsbloem",
        'Image path': "images/Fritillaria meleagris/Fritillaria meleagris.jpg",
    },
    {
        'Latin name': "Galanthus nivalis",
        'Dutch name': "Sneeuwklokje",
        'Image path': "images/Galanthus nivalis/Galanthus nivalis.jpg",
    },
    {
        'Latin name': "Galeopsis tetrahit",
        'Dutch name': "Gewone hennepnetel",
        'Image path': "images/Galeopsis tetrahit/Galeopsis tetrahit.jpg",
    },
    {
        'Latin name': "Galium odoratum",
        'Dutch name': "Lievevrouwebedstro",
        'Image path': "images/Galium odoratum/Galium odoratum.jpg",
    },
        {
        'Latin name': "Gaura lindheimeri ' Whirling Butterflies'",
        'Dutch name': "Prachtkaars",
        'Image path': "images/Gaura lindheimeri ' Whirling Butterflies'/Gaura lindheimeri ' Whirling Butterflies'.jpg",
    },
    {
        'Latin name': "Geranium ' Ann Folkard'",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium ' Ann Folkard'/Geranium ' Ann Folkard'.jpg",
    },
    {
        'Latin name': "Geranium ' Gerwat' ROZANNE",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium ' Gerwat' ROZANNE/Geranium ' Gerwat' ROZANNE.jpg",
    },
    {
        'Latin name': "Geranium x cantabrigiense ' Biokovo'",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium x cantabrigiense ' Biokovo'/Geranium x cantabrigiense ' Biokovo'.jpg",
    },
    {
        'Latin name': "Geranium macrorrhizum",
        'Dutch name': "Rotsooievaarsbek",
        'Image path': "images/Geranium macrorrhizum/Geranium macrorrhizum.jpg",
    },
    {
        'Latin name': "Geranium phaeum",
        'Dutch name': "Donkere ooievaarsbek",
        'Image path': "images/Geranium phaeum/Geranium phaeum.jpg",
    },
    {
        'Latin name': "Geranium renardii",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium renardii/Geranium renardii.jpg",
    },
    {
        'Latin name': "Geranium sanguineum",
        'Dutch name': "Bloedooievaarsbek",
        'Image path': "images/Geranium sanguineum/Geranium sanguineum.jpg",
    },
    {
        'Latin name': "Geranium wlassovianum",
        'Dutch name': "Ooievaarsbek",
        'Image path': "images/Geranium wlassovianum/Geranium wlassovianum.jpg",
    },
    {
        'Latin name': "Geum rivale",
        'Dutch name': "Knikkend nagelkruid",
        'Image path': "images/Geum rivale/Geum rivale.jpg",
    },
        {
        'Latin name': "Ginkgo biloba",
        'Dutch name': "Japanse notenboom",
        'Image path': "images/Ginkgo biloba/Ginkgo biloba.jpg",
    },
    {
        'Latin name': "Gladiolus papilio",
        'Dutch name': "Vlindergladiool",
        'Image path': "images/Gladiolus papilio/Gladiolus papilio.jpg",
    },
    {
        'Latin name': "Glechoma hederacea",
        'Dutch name': "Hondsdraf",
        'Image path': "images/Glechoma hederacea/Glechoma hederacea.jpg",
    },
    {
        'Latin name': "Glyceria maxima",
        'Dutch name': "Liesgras",
        'Image path': "images/Glyceria maxima/Glyceria maxima.jpg",
    },
    {
        'Latin name': "Gunnera manicata",
        'Dutch name': "Mammoetblad",
        'Image path': "images/Gunnera manicata/Gunnera manicata.jpg",
    },
    {
        'Latin name': "Hakonechloa macra",
        'Dutch name': "Japans bosgras",
        'Image path': "images/Hakonechloa macra/Hakonechloa macra.jpg",
    },
    {
        'Latin name': "Hamamelis x intermedia",
        'Dutch name': "Toverhazelaar",
        'Image path': "images/Hamamelis x intermedia/Hamamelis x intermedia.jpg",
    },
    {
        'Latin name': "Hedera helix",
        'Dutch name': "Klimop",
        'Image path': "images/Hedera helix/Hedera helix.jpg",
    },
    {
        'Latin name': "Hedera hibernica",
        'Dutch name': "Ierse klimop",
        'Image path': "images/Hedera hibernica/Hedera hibernica.jpg",
    },
    {
        'Latin name': "Helenium 'Moerheim Beauty'",
        'Dutch name': "Zonnekruid",
        'Image path': "images/Helenium 'Moerheim Beauty'/Helenium 'Moerheim Beauty'.jpg",
    },
        {
        'Latin name': "Helianthus 'Lemon Queen'",
        'Dutch name': "Zonnebloem",
        'Image path': "images/Helianthus 'Lemon Queen'/Helianthus 'Lemon Queen'.jpg",
    },
    {
        'Latin name': "Helichrysum italicum",
        'Dutch name': "Kerrieplant",
        'Image path': "images/Helichrysum italicum/Helichrysum italicum.jpg",
    },
    {
        'Latin name': "Helictotrichon sempervirens",
        'Dutch name': "Sierhaver",
        'Image path': "images/Helictotrichon sempervirens/Helictotrichon sempervirens.jpg",
    },
    {
        'Latin name': "Helleborus argutifolius",
        'Dutch name': "Corsicaans nieskruid",
        'Image path': "images/Helleborus argutifolius/Helleborus argutifolius.jpg",
    },
    {
        'Latin name': "Helleborus foetidus",
        'Dutch name': "Stinkend nieskruid",
        'Image path': "images/Helleborus foetidus/Helleborus foetidus.jpg",
    },
    {
        'Latin name': "Helleborus orientalis",
        'Dutch name': "Oosters nieskruid",
        'Image path': "images/Helleborus orientalis/Helleborus orientalis.jpg",
    },
    {
        'Latin name': "Heptacodium miconioides",
        'Dutch name': "Zevenzonenboom",
        'Image path': "images/Heptacodium miconioides/Heptacodium miconioides.jpg",
    },
    {
        'Latin name': "Heracleum sphondylium",
        'Dutch name': "Gewone berenklauw",
        'Image path': "images/Heracleum sphondylium/Heracleum sphondylium.jpg",
    },
    {
        'Latin name': "Heuchera micrantha ' Palace Purple'",
        'Dutch name': "Purpurklokje",
        'Image path': "images/Heuchera micrantha ' Palace Purple'/Heuchera micrantha ' Palace Purple'.jpg",
    },
    {
        'Latin name': "Hibiscus syriacus",
        'Dutch name': "Altheastruik",
        'Image path': "images/Hibiscus syriacus/Hibiscus syriacus.jpg",
    },
        {
        'Latin name': "Hippophae rhamnoides",
        'Dutch name': "Duindoorn",
        'Image path': "images/Hippophae rhamnoides/Hippophae rhamnoides.jpg",
    },
    {
        'Latin name': "Hippuris vulgaris",
        'Dutch name': "Lidsteng",
        'Image path': "images/Hippuris vulgaris/Hippuris vulgaris.jpg",
    },
    {
        'Latin name': "Hosta 'Elegans'",
        'Dutch name': "Hartlelie",
        'Image path': "images/Hosta 'Elegans'/Hosta 'Elegans'.jpg",
    },
    {
        'Latin name': "Hottonia palustris",
        'Dutch name': "Waterviolier",
        'Image path': "images/Hottonia palustris/Hottonia palustris.jpg",
    },
    {
        'Latin name': "Humulus lupulus",
        'Dutch name': "Hop",
        'Image path': "images/Humulus lupulus/Humulus lupulus.jpg",
    },
    {
        'Latin name': "Hyacinthoides non-scripta",
        'Dutch name': "Boshyacint",
        'Image path': "images/Hyacinthoides non-scripta/Hyacinthoides non-scripta.jpg",
    },
    {
        'Latin name': "Hydrangea anomala subsp. petiolaris",
        'Dutch name': "Klimhortensia",
        'Image path': "images/Hydrangea anomala subsp. petiolaris/Hydrangea anomala subsp. petiolaris.jpg",
    },
    {
        'Latin name': "Hydrangea aspera",
        'Dutch name': "Fluweelhortensia",
        'Image path': "images/Hydrangea aspera/Hydrangea aspera.jpg",
    },
    {
        'Latin name': "Hydrangea macrophylla",
        'Dutch name': "Boerenhortensia",
        'Image path': "images/Hydrangea macrophylla/Hydrangea macrophylla.jpg",
    },
    {
        'Latin name': "Hydrangea paniculata",
        'Dutch name': "Pluimhortensia",
        'Image path': "images/Hydrangea paniculata/Hydrangea paniculata.jpg",
    },
        {
        'Latin name': "Hydrangea quercifolia",
        'Dutch name': "Eikenbladhortensia",
        'Image path': "images/Hydrangea quercifolia/Hydrangea quercifolia.jpg",
    },
    {
        'Latin name': "Hydrangea serrata",
        'Dutch name': "Berghortensia",
        'Image path': "images/Hydrangea serrata/Hydrangea serrata.jpg",
    },
    {
        'Latin name': "Hydrocharis morsus-ranae",
        'Dutch name': "Kikkerbeet",
        'Image path': "images/Hydrocharis morsus-ranae/Hydrocharis morsus-ranae.jpg",
    },
    {
        'Latin name': "Hypericum perforatum",
        'Dutch name': "Sint-Janskruid",
        'Image path': "images/Hypericum perforatum/Hypericum perforatum.jpg",
    },
    {
        'Latin name': "Hypochaeris radicata",
        'Dutch name': "Gewoon biggenkruid",
        'Image path': "images/Hypochaeris radicata/Hypochaeris radicata.jpg",
    },
    {
        'Latin name': "Hyssopus officinalis",
        'Dutch name': "Hysop",
        'Image path': "images/Hyssopus officinalis/Hyssopus officinalis.jpg",
    },
    {
        'Latin name': "Iberis sempervirens",
        'Dutch name': "Scheefkelk",
        'Image path': "images/Iberis sempervirens/Iberis sempervirens.jpg",
    },
    {
        'Latin name': "Ilex aquifolium",
        'Dutch name': "Gewone hulst",
        'Image path': "images/Ilex aquifolium/Ilex aquifolium.jpg",
    },
    {
        'Latin name': "Ilex crenata 'Convexa'",
        'Dutch name': "Japanse hulst",
        'Image path': "images/Ilex crenata 'Convexa'/Ilex crenata 'Convexa'.jpg",
    },
    {
        'Latin name': "Impatiens glandulifera",
        'Dutch name': "Reuzenbalsemien",
        'Image path': "images/Impatiens glandulifera/Impatiens glandulifera.jpg",
    },
        {
        'Latin name': "Imperata cylindrica 'Red Baron'",
        'Dutch name': "Japans bloedgras",
        'Image path': "images/Imperata cylindrica 'Red Baron'/Imperata cylindrica 'Red Baron'.jpg",
    },
    {
        'Latin name': "Iris pseudacorus",
        'Dutch name': "Gele lis",
        'Image path': "images/Iris pseudacorus/Iris pseudacorus.jpg",
    },
    {
        'Latin name': "Iris reticulata",
        'Dutch name': "Dwergiris",
        'Image path': "images/Iris reticulata/Iris reticulata.jpg",
    },
    {
        'Latin name': "Iris sibirica 'Blue King'",
        'Dutch name': "Siberische lis",
        'Image path': "images/Iris sibirica 'Blue King'/PlaIris sibirica 'Blue King'ceholder.jpg",
    },
    {
        'Latin name': "Jasminum nudiflorum",
        'Dutch name': "Winterjasmijn",
        'Image path': "images/Jasminum nudiflorum/Jasminum nudiflorum.jpg",
    },
    {
        'Latin name': "Juglans regia",
        'Dutch name': "Walnootboom",
        'Image path': "images/Juglans regia/Juglans regia.jpg",
    },
    {
        'Latin name': "Juniperus communis",
        'Dutch name': "Jeneverbes",
        'Image path': "images/Juniperus communis/Juniperus communis.jpg",
    },
    {
        'Latin name': "Juniperus horizontalis",
        'Dutch name': "Kruipende jeneverbes",
        'Image path': "images/Juniperus horizontalis/Juniperus horizontalis.jpg",
    },
    {
        'Latin name': "Kalimeris incisa 'Madiva'",
        'Dutch name': "Zomeraster",
        'Image path': "images/Kalimeris incisa 'Madiva'/Kalimeris incisa 'Madiva'.jpg",
    },
    {
        'Latin name': "Kerria japonica",
        'Dutch name': "Ranonkelstruik",
        'Image path': "images/Kerria japonica/Kerria japonica.jpg",
    },
        {
        'Latin name': "Kirengeshoma palmata",
        'Dutch name': "Japanse wasbloem",
        'Image path': "images/Kirengeshoma palmata/Kirengeshoma palmata.jpg",
    },
    {
        'Latin name': "Knautia macedonica",
        'Dutch name': "Beemdkroon",
        'Image path': "images/Knautia macedonica/Knautia macedonica.jpg",
    },
    {
        'Latin name': "Kolkwitzia amabilis",
        'Dutch name': "Koninginnenstruik",
        'Image path': "images/Kolkwitzia amabilis/Kolkwitzia amabilis.jpg",
    },
    {
        'Latin name': "Lamiastrum galeobdolon",
        'Dutch name': "Gele dovenetel",
        'Image path': "images/Lamiastrum galeobdolon/Lamiastrum galeobdolon.jpg",
    },
    {
        'Latin name': "Lamium maculatum 'White Nancy'",
        'Dutch name': "Gevlekte dovenetel",
        'Image path': "images/Lamium maculatum 'White Nancy'/Lamium maculatum 'White Nancy'.jpg",
    },
    {
        'Latin name': "Lamium orvala",
        'Dutch name': "Struikdovenetel",
        'Image path': "images/Lamium orvala/Lamium orvala.jpg",
    },
    {
        'Latin name': "Lamium purpureum",
        'Dutch name': "Paarse dovenetel",
        'Image path': "images/Lamium purpureum/Lamium purpureum.jpg",
    },
    {
        'Latin name': "Larix decidua",
        'Dutch name': "Europese lariks",
        'Image path': "images/Larix decidua/Larix decidua.jpg",
    },
    {
        'Latin name': "Laurus nobilis",
        'Dutch name': "Echte laurier",
        'Image path': "images/Laurus nobilis/Laurus nobilis.jpg",
    },
    {
        'Latin name': "Lavandula angustifolia",
        'Dutch name': "Echte Lavendel",
        'Image path': "images/Lavandula angustifolia/Lavandula angustifolia.jpg",
    },
        {
        'Latin name': "Leucanthemum vulgare",
        'Dutch name': "Gewone margriet",
        'Image path': "images/Leucanthemum vulgare/Leucanthemum vulgare.jpg",
    },
    {
        'Latin name': "Leucojum aestivum",
        'Dutch name': "Zomerklokje",
        'Image path': "images/Leucojum aestivum/Leucojum aestivum.jpg",
    },
    {
        'Latin name': "Levisticum officinale",
        'Dutch name': "Lavas",
        'Image path': "images/Levisticum officinale/Levisticum officinale.jpg",
    },
    {
        'Latin name': "Leymus arenarius",
        'Dutch name': "Zandhaver",
        'Image path': "images/Leymus arenarius/Leymus arenarius.jpg",
    },
    {
        'Latin name': "Liatris spicata",
        'Dutch name': "Lampenpoetser",
        'Image path': "images/Liatris spicata/Liatris spicata.jpg",
    },
    {
        'Latin name': "Ligularia dentata 'Othello'",
        'Dutch name': "Tongkruiskruid",
        'Image path': "images/Ligularia dentata 'Othello'/Ligularia dentata 'Othello'.jpg",
    },
    {
        'Latin name': "Ligularia przewalskii",
        'Dutch name': "Kruiskruid",
        'Image path': "images/Ligularia przewalskii/Ligularia przewalskii.jpg",
    },
    {
        'Latin name': "Ligustrum ovalifolium",
        'Dutch name': "Haagliguster",
        'Image path': "images/Ligustrum ovalifolium/Ligustrum ovalifolium.jpg",
    },
    {
        'Latin name': "Ligustrum vulgare",
        'Dutch name': "Wilde liguster",
        'Image path': "images/Ligustrum vulgare/Ligustrum vulgare.jpg",
    },
    {
        'Latin name': "Lilium martagon",
        'Dutch name': "Turkse lelie",
        'Image path': "images/Lilium martagon/Lilium martagon.jpg",
    },
        {
        'Latin name': "Liquidambar styraciflua",
        'Dutch name': "Amerikaanse amberboom",
        'Image path': "images/Liquidambar styraciflua/Liquidambar styraciflua.jpg",
    },
    {
        'Latin name': "Liriodendron tulipifera",
        'Dutch name': "Tulpenboom",
        'Image path': "images/Liriodendron tulipifera/Liriodendron tulipifera.jpg",
    },
    {
        'Latin name': "Liriope muscari",
        'Dutch name': "Leliegras",
        'Image path': "images/Liriope muscari/Liriope muscari.jpg",
    },
    {
        'Latin name': "Lonicera caprifolium",
        'Dutch name': "Tuinkamperfoelie",
        'Image path': "images/Lonicera caprifolium/Lonicera caprifolium.jpg",
    },
    {
        'Latin name': "Lonicera fragrantissima",
        'Dutch name': "Winterkamperfoelie",
        'Image path': "images/Lonicera fragrantissima/Lonicera fragrantissima.jpg",
    },
    {
        'Latin name': "Lonicera japonica",
        'Dutch name': "Japanse kamperfoelie",
        'Image path': "images/Lonicera japonica/Lonicera japonica.jpg",
    },
    {
        'Latin name': "Lonicera periclymenum",
        'Dutch name': "Wilde kamperfoelie",
        'Image path': "images/Lonicera periclymenum/Lonicera periclymenum.jpg",
    },
    {
        'Latin name': "Lonicera xylosteum",
        'Dutch name': "Rode kamperfoelie",
        'Image path': "images/Lonicera xylosteum/PlacLonicera xylosteumeholder.jpg",
    },
    {
        'Latin name': "Lupinus 'The Chatelaine'",
        'Dutch name': "Lupine",
        'Image path': "images/Lupinus 'The Chatelaine'/Lupinus 'The Chatelaine'.jpg",
    },
    {
        'Latin name': "Luzula nivea",
        'Dutch name': "Sneeuwwitte veldbies",
        'Image path': "images/Luzula nivea/Luzula nivea.jpg",
    },
        {
        'Latin name': "Luzula sylvatica",
        'Dutch name': "Grote veldbies",
        'Image path': "images/Luzula sylvatica/Luzula sylvatica.jpg",
    },
    {
        'Latin name': "Lychnis flos-cuculi",
        'Dutch name': "Echte koekoeksbloem",
        'Image path': "images/Lychnis flos-cuculi/Lychnis flos-cuculi.jpg",
    },
    {
        'Latin name': "Lysimachia clethroides",
        'Dutch name': "Wederik",
        'Image path': "images/Lysimachia clethroides/Lysimachia clethroides.jpg",
    },
    {
        'Latin name': "Lysimachia nummularia",
        'Dutch name': "Penningkruid",
        'Image path': "images/Lysimachia nummularia/Lysimachia nummularia.jpg",
    },
    {
        'Latin name': "Lysimachia punctata",
        'Dutch name': "Puntwederik",
        'Image path': "images/Lysimachia punctata/Lysimachia punctata.jpg",
    },
    {
        'Latin name': "Lythrum salicaria",
        'Dutch name': "Grote kattenstaart",
        'Image path': "images/Lythrum salicaria/Lythrum salicaria.jpg",
    },
    {
        'Latin name': "Macleaya microcarpa ' Kelway's Coral Plume'",
        'Dutch name': "Pluimpapaver",
        'Image path': "images/Macleaya microcarpa ' Kelway's Coral Plume'/Macleaya microcarpa ' Kelway's Coral Plume'.jpg",
    },
    {
        'Latin name': "Magnolia stellata",
        'Dutch name': "Stermagnolia",
        'Image path': "images/Magnolia stellata/Magnolia stellata.jpg",
    },
    {
        'Latin name': "Magnolia x soulangeana",
        'Dutch name': "Beverboom",
        'Image path': "images/Magnolia x soulangeana/Magnolia x soulangeana.jpg",
    },
    {
        'Latin name': "Malus domestica",
        'Dutch name': "Appelboom",
        'Image path': "images/Malus domestica/Malus domestica.jpg",
    },
        {
        'Latin name': "Malus sylvestris",
        'Dutch name': "Wilde appelboom",
        'Image path': "images/Malus sylvestris/Malus sylvestris.jpg",
    },
    {
        'Latin name': "Malva moschata",
        'Dutch name': "Muskuskaasjeskruid",
        'Image path': "images/Malva moschata/Malva moschata.jpg",
    },
    {
        'Latin name': "Matricaria recutita",
        'Dutch name': "Echte kamille",
        'Image path': "images/Matricaria recutita/Matricaria recutita.jpg",
    },
    {
        'Latin name': "Matteuccia struthiopteris",
        'Dutch name': "Struisvaren",
        'Image path': "images/Matteuccia struthiopteris/Matteuccia struthiopteris.jpg",
    },
    {
        'Latin name': "Melilotus albus",
        'Dutch name': "Witte honingklaver",
        'Image path': "images/Melilotus albus/Melilotus albus.jpg",
    },
    {
        'Latin name': "Mentha aquatica",
        'Dutch name': "Watermunt",
        'Image path': "images/Mentha aquatica/Mentha aquatica.jpg",
    },
    {
        'Latin name': "Mentha spicata 'Moroccan'",
        'Dutch name': "Marokkaanse kruizemunt",
        'Image path': "images/Mentha spicata 'Moroccan'/Mentha spicata 'Moroccan'.jpg",
    },
    {
        'Latin name': "Mentha x piperita",
        'Dutch name': "Pepermunt",
        'Image path': "images/Mentha x piperita/Mentha x piperita.jpg",
    },
    {
        'Latin name': "Menyanthes trifoliata",
        'Dutch name': "Waterdrieblad",
        'Image path': "images/Menyanthes trifoliata/Menyanthes trifoliata.jpg",
    },
    {
        'Latin name': "Mespilus germanica",
        'Dutch name': "Mispelboom",
        'Image path': "images/Mespilus germanica/Mespilus germanica.jpg",
    },
    {
        'Latin name': "Metasequoia glyptostroboides",
        'Dutch name': "Watercipres",
        'Image path': "images/Metasequoia glyptostroboides/Metasequoia glyptostroboides.jpg",
    },
    {
        'Latin name': "Miscanthus sinensis",
        'Dutch name': "Prachtriet",
        'Image path': "images/Miscanthus sinensis/Miscanthus sinensis.jpg",
    },
    {
        'Latin name': "Molinia caerulea",
        'Dutch name': "Pijpenstrootje",
        'Image path': "images/Molinia caerulea/Molinia caerulea.jpg",
    },
    {
        'Latin name': "Monarda 'Squaw'",
        'Dutch name': "Bergamotplant",
        'Image path': "images/Monarda 'Squaw'/Monarda 'Squaw'.jpg",
    },
    {
        'Latin name': "Morus nigra",
        'Dutch name': "Zwarte moerbei",
        'Image path': "images/Morus nigra/Morus nigra.jpg",
    },
    {
        'Latin name': "Muhlenbergia capillaris",
        'Dutch name': "Roze muhlygras",
        'Image path': "images/Muhlenbergia capillaris/Muhlenbergia capillaris.jpg",
    },
    {
        'Latin name': "Muscari botryoides",
        'Dutch name': "Blauwe druifjes",
        'Image path': "images/Muscari botryoides/Muscari botryoides.jpg",
    },
    {
        'Latin name': "Myriophyllum spicatum",
        'Dutch name': "Aarvederkruid",
        'Image path': "images/Myriophyllum spicatum/Myriophyllum spicatum.jpg",
    },
    {
        'Latin name': "Myrrhis odorata",
        'Dutch name': "Roomse kervel",
        'Image path': "images/Myrrhis odorata/Myrrhis odorata.jpg",
    },
    {
        'Latin name': "Narcissus bulbocodium",
        'Dutch name': "Hoepelroknarcis",
        'Image path': "images/Narcissus bulbocodium/Narcissus bulbocodium.jpg",
    },
    {
        'Latin name': "Narcissus poeticus",
        'Dutch name': "Dichtersnarcis",
        'Image path': "images/Narcissus poeticus/Narcissus poeticus.jpg",
    },
    {
        'Latin name': "Narcissus pseudonarcissus",
        'Dutch name': "Wilde narcis",
        'Image path': "images/Narcissus pseudonarcissus/Narcissus pseudonarcissus.jpg",
    },
    {
        'Latin name': "Nepeta 'Walker's Low'",
        'Dutch name': "Kattenkruid",
        'Image path': "images/Nepeta 'Walker's Low'/Nepeta 'Walker's Low'.jpg",
    },
    {
        'Latin name': "Nimphaea alba",
        'Dutch name': "Witte waterlelie",
        'Image path': "images/Nimphaea alba/Nimphaea alba.jpg",
    },
    {
        'Latin name': "Nuphar lutea",
        'Dutch name': "Gele plomp",
        'Image path': "images/Nuphar lutea/Nuphar lutea.jpg",
    },
    {
        'Latin name': "Nymphoides peltata",
        'Dutch name': "Watergentiaan",
        'Image path': "images/Nymphoides peltata/Nymphoides peltata.jpg",
    },
    {
        'Latin name': "Oenothera glazioviana",
        'Dutch name': "Grote teunisbloem",
        'Image path': "images/Oenothera glazioviana/Oenothera glazioviana.jpg",
    },
    {
        'Latin name': "Origanum vulgare subsp. hirtum",
        'Dutch name': "Griekse oregano",
        'Image path': "images/Origanum vulgare subsp. hirtum/Origanum vulgare subsp. hirtum.jpg",
    },
    {
        'Latin name': "Ornithogalum umbellatum",
        'Dutch name': "Gewone vogelmelk",
        'Image path': "images/Ornithogalum umbellatum/Ornithogalum umbellatum.jpg",
    },
    {
        'Latin name': "Osmanthus x burkwoodii",
        'Dutch name': "Schijnhulst",
        'Image path': "images/Osmanthus x burkwoodii/Osmanthus x burkwoodii.jpg",
    },
    {
        'Latin name': "Osmunda regalis",
        'Dutch name': "Koningsvaren",
        'Image path': "images/Osmunda regalis/Osmunda regalis.jpg",
    },
    {
        'Latin name': "Panicum virgatum",
        'Dutch name': "Vingergras",
        'Image path': "images/Panicum virgatum/Panicum virgatum.jpg",
    },
    {
        'Latin name': "Parthenocissus quinquefolia",
        'Dutch name': "Vijfbladige wingerd",
        'Image path': "images/Parthenocissus quinquefolia/Parthenocissus quinquefolia.jpg",
    },
    {
        'Latin name': "Parthenocissus tricuspidata",
        'Dutch name': "Driebladige wingerd",
        'Image path': "images/Parthenocissus tricuspidata/Parthenocissus tricuspidata.jpg",
    },
    {
        'Latin name': "Passiflora caerulea",
        'Dutch name': "Blauwe passiebloem",
        'Image path': "images/Passiflora caerulea/Passiflora caerulea.jpg",
    },
    {
        'Latin name': "Paulownia tomentosa",
        'Dutch name': "Anna Paulownaboom",
        'Image path': "images/Paulownia tomentosa/Paulownia tomentosa.jpg",
    },
    {
        'Latin name': "Pennisetum alopecuroides",
        'Dutch name': "Lampenpetsersgras",
        'Image path': "images/Pennisetum alopecuroides/Pennisetum alopecuroides.jpg",
    },
    {
        'Latin name': "Perovskia atriplicifolia 'Little Spire'",
        'Dutch name': "Reuzenlavendel",
        'Image path': "images/Perovskia atriplicifolia 'Little Spire'/Perovskia atriplicifolia 'Little Spire'.jpg",
    },
    {
        'Latin name': "Persicaria amplexicaulis",
        'Dutch name': "Duizendknoop",
        'Image path': "images/Persicaria amplexicaulis/Persicaria amplexicaulis.jpg",
    },
    {
        'Latin name': "Persicaria bistorta 'Superba'",
        'Dutch name': "Adderwortel",
        'Image path': "images/Persicaria bistorta 'Superba'/Persicaria bistorta 'Superba'.jpg",
    },
    {
        'Latin name': "Petasites hybridus",
        'Dutch name': "Groot hoefblad",
        'Image path': "images/Petasites hybridus/Petasites hybridus.jpg",
    },
    {
        'Latin name': "Philadelphus coronarius",
        'Dutch name': "Boerenjasmijn",
        'Image path': "images/Philadelphus coronarius/Philadelphus coronarius.jpg",
    },
    {
        'Latin name': "Phlomis russeliana",
        'Dutch name': "Brandkruid",
        'Image path': "images/Phlomis russeliana/Phlomis russeliana.jpg",
    },
    {
        'Latin name': "Phlox paniculata",
        'Dutch name': "Vlambloem",
        'Image path': "images/Phlox paniculata/Phlox paniculata.jpg",
    },
    {
        'Latin name': "Phragmites australis",
        'Dutch name': "Riet",
        'Image path': "images/Phragmites australis/Phragmites australis.jpg",
    },
    {
        'Latin name': "Physocarpus opulifolius",
        'Dutch name': "Blaasspirea",
        'Image path': "images/Physocarpus opulifolius/Physocarpus opulifolius.jpg",
    },
    {
        'Latin name': "Picea abies",
        'Dutch name': "Fijnspar",
        'Image path': "images/Picea abies/Picea abies.jpg",
    },
    {
        'Latin name': "Pinus mugo",
        'Dutch name': "Bergden",
        'Image path': "images/Pinus mugo/Pinus mugo.jpg",
    },
    {
        'Latin name': "Pinus nigra subsp. nigra",
        'Dutch name': "Oostenrijkse den",
        'Image path': "images/Pinus nigra subsp. nigra/Pinus nigra subsp. nigra.jpg",
    },
    {
        'Latin name': "Pinus strobus",
        'Dutch name': "Weymouthden",
        'Image path': "images/Pinus strobus/Pinus strobus.jpg",
    },
    {
        'Latin name': "Pinus sylvestris",
        'Dutch name': "Grove den",
        'Image path': "images/Pinus sylvestris/Pinus sylvestris.jpg",
    },
    {
        'Latin name': "Plantago lanceolata",
        'Dutch name': "Smalle weegbree",
        'Image path': "images/Plantago lanceolata/Plantago lanceolata.jpg",
    },
    {
        'Latin name': "Plantago major",
        'Dutch name': "Gewone weegbree",
        'Image path': "images/Plantago major/Plantago major.jpg",
    },
    {
        'Latin name': "Platanus occidentalis",
        'Dutch name': "Westerse plataan",
        'Image path': "images/Platanus occidentalis/Platanus occidentalis.jpg",
    },
    {
        'Latin name': "Platanus orientalis",
        'Dutch name': "Oosterse plataan",
        'Image path': "images/Platanus orientalis/Platanus orientalis.jpg",
    },
    {
        'Latin name': "Platanus x hispanica",
        'Dutch name': "Gewone plataan",
        'Image path': "images/Platanus x hispanica/Platanus x hispanica.jpg",
    },
    {
        'Latin name': "Polygonatum multiflorum",
        'Dutch name': "Gewone salomonszegel",
        'Image path': "images/Polygonatum multiflorum/Polygonatum multiflorum.jpg",
    },
    {
        'Latin name': "Polygonum aviculare",
        'Dutch name': "Varkensgras",
        'Image path': "images/Polygonum aviculare/Polygonum aviculare.jpg",
    },
    {
        'Latin name': "Polygonum persicaria",
        'Dutch name': "Perzikkruid",
        'Image path': "images/Polygonum persicaria/Polygonum persicaria.jpg",
    },
    {
        'Latin name': "Polypodium vulgare",
        'Dutch name': "Gewone eikvaren",
        'Image path': "images/Polypodium vulgare/Polypodium vulgare.jpg",
    },
    {
        'Latin name': "Polystichum setiferum",
        'Dutch name': "Zachte naaldvaren",
        'Image path': "images/Polystichum setiferum/Polystichum setiferum.jpg",
    },
    {
        'Latin name': "Populus nigra",
        'Dutch name': "Zwarte populier",
        'Image path': "images/Populus nigra/Populus nigra.jpg",
    },
    {
        'Latin name': "Populus tremula",
        'Dutch name': "Ratelpopulier",
        'Image path': "images/Populus tremula/Populus tremula.jpg",
    },
    {
        'Latin name': "Populus x canescens",
        'Dutch name': "Grauwe abeel",
        'Image path': "images/Populus x canescens/Populus x canescens.jpg",
    },
    {
        'Latin name': "Potamogeton natans",
        'Dutch name': "Drijvend fonteinkruid",
        'Image path': "images/Potamogeton natans/Potamogeton natans.jpg",
    },
    {
        'Latin name': "Potentilla anserina",
        'Dutch name': "Zilverschoon",
        'Image path': "images/Potentilla anserina/Potentilla anserina.jpg",
    },
    {
        'Latin name': "Potentilla fruticosa",
        'Dutch name': "Struikganzerik",
        'Image path': "images/Potentilla fruticosa/Potentilla fruticosa.jpg",
    },
    {
        'Latin name': "Prunella vulgaris",
        'Dutch name': "Gewone brunel",
        'Image path': "images/Prunella vulgaris/Prunella vulgaris.jpg",
    },
    {
        'Latin name': "Prunus armeniaca",
        'Dutch name': "Abrikozenboom",
        'Image path': "images/Prunus armeniaca/Prunus armeniaca.jpg",
    },
    {
        'Latin name': "Prunus avium",
        'Dutch name': "Zoete kers",
        'Image path': "images/Prunus avium/Prunus avium.jpg",
    },
    {
        'Latin name': "Prunus cerasus",
        'Dutch name': "Zure kers",
        'Image path': "images/Prunus cerasus/Prunus cerasus.jpg",
    },
    {
        'Latin name': "Prunus dulcis",
        'Dutch name': "Amandelboom",
        'Image path': "images/Prunus dulcis/Prunus dulcis.jpg",
    },
    {
        'Latin name': "Prunus lusitanica",
        'Dutch name': "Portugese laurier",
        'Image path': "images/Prunus lusitanica/Prunus lusitanica.jpg",
    },
    {
        'Latin name': "Prunus padus",
        'Dutch name': "Gewone vogelkers",
        'Image path': "images/Prunus padus/Prunus padus.jpg",
    },
    {
        'Latin name': "Prunus persica",
        'Dutch name': "Perzikboom",
        'Image path': "images/Prunus persica/Prunus persica.jpg",
    },
    {
        'Latin name': "Prunus spinosa",
        'Dutch name': "Sleedoorn",
        'Image path': "images/Prunus spinosa/Prunus spinosa.jpg",
    },
    {
        'Latin name': "Pseudotsuga menziesii",
        'Dutch name': "Douglasspar",
        'Image path': "images/Pseudotsuga menziesii/Pseudotsuga menziesii.jpg",
    },
    {
        'Latin name': "Pteridium aquilinum",
        'Dutch name': "Adelaarsvaren",
        'Image path': "images/Pteridium aquilinum/Pteridium aquilinum.jpg",
    },
    {
        'Latin name': "Pterocarya fraxinifolia",
        'Dutch name': "Kaukasische vleugelnoot",
        'Image path': "images/Pterocarya fraxinifolia/Pterocarya fraxinifolia.jpg",
    },
    {
        'Latin name': "Pulicaria dysenterica",
        'Dutch name': "Heelblaadjes",
        'Image path': "images/Pulicaria dysenterica/Pulicaria dysenterica.jpg",
    },
    {
        'Latin name': "Pulmonaria officinalis 'Sissinghurst White'",
        'Dutch name': "gevlekt longkruid",
        'Image path': "images/Pulmonaria officinalis 'Sissinghurst White'/Pulmonaria officinalis 'Sissinghurst White'.jpg",
    },
    {
        'Latin name': "Puschkinia scilloides",
        'Dutch name': "Buishyacint",
        'Image path': "images/Puschkinia scilloides/Puschkinia scilloides.jpg",
    },
    {
        'Latin name': "Pyracantha coccinea",
        'Dutch name': "Vuurdoorn",
        'Image path': "images/Pyracantha coccinea/Pyracantha coccinea.jpg",
    },
    {
        'Latin name': "Pyrus calleryana",
        'Dutch name': "Chinese sierpeer",
        'Image path': "images/Pyrus calleryana/Pyrus calleryana.jpg",
    },
    {
        'Latin name': "Pyrus communis",
        'Dutch name': "Perenboom",
        'Image path': "images/Pyrus communis/Pyrus communis.jpg",
    },
    {
        'Latin name': "Pyrus pyraster",
        'Dutch name': "Wilde peer",
        'Image path': "images/Pyrus pyraster/Pyrus pyraster.jpg",
    },
    {
        'Latin name': "Quercus palustris",
        'Dutch name': "Moeraseik",
        'Image path': "images/Quercus palustris/Quercus palustris.jpg",
    },
    {
        'Latin name': "Quercus petraea",
        'Dutch name': "Wintereik",
        'Image path': "images/Quercus petraea/Quercus petraea.jpg",
    },
    {
        'Latin name': "Quercus robur",
        'Dutch name': "Zomereik",
        'Image path': "images/Quercus robur/Quercus robur.jpg",
    },
    {
        'Latin name': "Quercus rubra",
        'Dutch name': "Amerikaanse eik",
        'Image path': "images/Quercus rubra/Quercus rubra.jpg",
    },
    {
        'Latin name': "Ranunculus ficaria",
        'Dutch name': "Speenkruid",
        'Image path': "images/Ranunculus ficaria/Ranunculus ficaria.jpg",
    },
    {
        'Latin name': "Ranunculus repens",
        'Dutch name': "Kruipende boterbloem",
        'Image path': "images/Ranunculus repens/Ranunculus repens.jpg",
    },
    {
        'Latin name': "Rhamnus cathartica",
        'Dutch name': "Wegedoorn",
        'Image path': "images/Rhamnus cathartica/Rhamnus cathartica.jpg",
    },
    {
        'Latin name': "Rheum palmatum var. tanguticum",
        'Dutch name': "Sierrabarber",
        'Image path': "images/Rheum palmatum var. tanguticum/Rheum palmatum var. tanguticum.jpg",
    },
    {
        'Latin name': "Rheum rhabarbarum",
        'Dutch name': "Rabarber",
        'Image path': "images/Rheum rhabarbarum/Rheum rhabarbarum.jpg",
    },
    {
        'Latin name': "Ribes 'Josta' JOSTABERRY",
        'Dutch name': "Jostabes",
        'Image path': "images/Ribes 'Josta' JOSTABERRY/Ribes 'Josta' JOSTABERRY.jpg",
    },
    {
        'Latin name': "Ribes nigrum",
        'Dutch name': "Zwarte bes",
        'Image path': "images/Ribes nigrum/Ribes nigrum.jpg",
    },
    {
        'Latin name': "Ribes rubrum",
        'Dutch name': "Aalbes",
        'Image path': "images/Ribes rubrum/Ribes rubrum.jpg",
    },
    {
        'Latin name': "Ribes sanguineum",
        'Dutch name': "Rode ribes",
        'Image path': "images/Ribes sanguineum/Ribes sanguineum.jpg",
    },
    {
        'Latin name': "Ribes uva-crispa",
        'Dutch name': "Kruisbes",
        'Image path': "images/Ribes uva-crispa/Ribes uva-crispa.jpg",
    },
    {
        'Latin name': "Robinia pseudoacacia",
        'Dutch name': "Valse acacia",
        'Image path': "images/Robinia pseudoacacia/Robinia pseudoacacia.jpg",
    },
    {
        'Latin name': "Rodgersia aesculifolia",
        'Dutch name': "Schout-bij-nacht",
        'Image path': "images/Rodgersia aesculifolia/Rodgersia aesculifolia.jpg",
    },
    {
        'Latin name': "Rosa canina",
        'Dutch name': "Hondsroos",
        'Image path': "images/Rosa canina/Rosa canina.jpg",
    },
    {
        'Latin name': "Rosa pimpinellifolia",
        'Dutch name': "Duinroos",
        'Image path': "images/Rosa pimpinellifolia/Rosa pimpinellifolia.jpg",
    },
    {
        'Latin name': "Rosa rubiginosa",
        'Dutch name': "Egelantier",
        'Image path': "images/Rosa rubiginosa/Rosa rubiginosa.jpg",
    },
    {
        'Latin name': "Rosmarinus officinalis",
        'Dutch name': "Rozemarijn",
        'Image path': "images/Rosmarinus officinalis/Rosmarinus officinalis.jpg",
    },
    {
        'Latin name': "Rubus fruticosus",
        'Dutch name': "Braam",
        'Image path': "images/Rubus fruticosus/Rubus fruticosus.jpg",
    },
    {
        'Latin name': "Rubus fruticosus  'Thornless Evergreen'",
        'Dutch name': "Doornloze braam",
        'Image path': "images/Rubus fruticosus  'Thornless Evergreen'/Rubus fruticosus  'Thornless Evergreen'.jpg",
    },
    {
        'Latin name': "Rubus idaeus",
        'Dutch name': "Framboos",
        'Image path': "images/Rubus idaeus/Rubus idaeus.jpg",
    },
    {
        'Latin name': "Rubus 'Tayberry'",
        'Dutch name': "Taybes",
        'Image path': "images/Rubus 'Tayberry'/Rubus 'Tayberry'.jpg",
    },
    {
        'Latin name': "Rubus x loganobaccus 'Logan' LOGANBERRY",
        'Dutch name': "Loganbes",
        'Image path': "images/Rubus x loganobaccus 'Logan' LOGANBERRY/Rubus x loganobaccus 'Logan' LOGANBERRY.jpg",
    },
    {
        'Latin name': "Rudbeckia fulgida 'Goldsturm'",
        'Dutch name': "Gele zonnehoed",
        'Image path': "images/Rudbeckia fulgida 'Goldsturm'/Rudbeckia fulgida 'Goldsturm'.jpg",
    },
    {
        'Latin name': "Rumex obtusifolius",
        'Dutch name': "Ridderzuring",
        'Image path': "images/Rumex obtusifolius/Rumex obtusifolius.jpg",
    },
    {
        'Latin name': "Rumex sanguineus",
        'Dutch name': "Bloedzuring",
        'Image path': "images/Rumex sanguineus/Rumex sanguineus.jpg",
    },
    {
        'Latin name': "Ruta graveolens",
        'Dutch name': "Wijnruit",
        'Image path': "images/Ruta graveolens/Ruta graveolens.jpg",
    },
    {
        'Latin name': "Sagittaria sagittifolia",
        'Dutch name': "Pijlkruid",
        'Image path': "images/Sagittaria sagittifolia/Sagittaria sagittifolia.jpg",
    },
    {
        'Latin name': "Salix alba",
        'Dutch name': "Schietwilg",
        'Image path': "images/Salix alba/Salix alba.jpg",
    },
    {
        'Latin name': "Salix caprea",
        'Dutch name': "Boswilg",
        'Image path': "images/Salix caprea/Salix caprea.jpg",
    },
    {
        'Latin name': "Salix cinerea",
        'Dutch name': "Grauwe wilg",
        'Image path': "images/Salix cinerea/Salix cinerea.jpg",
    },
    {
        'Latin name': "Salix repens",
        'Dutch name': "Kruipwilg",
        'Image path': "images/Salix repens/Salix repens.jpg",
    },
    {
        'Latin name': "Salix x sepulcralis 'Chrysocoma'",
        'Dutch name': "Gele treurwilg",
        'Image path': "images/Salix x sepulcralis 'Chrysocoma'/Salix x sepulcralis 'Chrysocoma'.jpg",
    },
    {
        'Latin name': "Salvia nemorosa 'Ostfriesland'",
        'Dutch name': "Bossalie",
        'Image path': "images/Salvia nemorosa 'Ostfriesland'/Salvia nemorosa 'Ostfriesland'.jpg",
    },
    {
        'Latin name': "Salvia officinalis",
        'Dutch name': "Salie",
        'Image path': "images/Salvia officinalis/Salvia officinalis.jpg",
    },
    {
        'Latin name': "Sambucus nigra",
        'Dutch name': "Gewone vlier",
        'Image path': "images/Sambucus nigra/Sambucus nigra.jpg",
    },
    {
        'Latin name': "Sambucus racemosa",
        'Dutch name': "Trosvlier",
        'Image path': "images/Sambucus racemosa/Sambucus racemosa.jpg",
    },
    {
        'Latin name': "Sanguisorba officinalis",
        'Dutch name': "Grote pimpernel",
        'Image path': "images/Sanguisorba officinalis/Sanguisorba officinalis.jpg",
    },
    {
        'Latin name': "Santolina chamaecyparissus",
        'Dutch name': "Heilegenbloem",
        'Image path': "images/Santolina chamaecyparissus/Santolina chamaecyparissus.jpg",
    },
    {
        'Latin name': "Sarcococca hookeriana var. humilis",
        'Dutch name': "Vleesbes",
        'Image path': "images/Sarcococca hookeriana var. humilis/Sarcococca hookeriana var. humilis.jpg",
    },
    {
        'Latin name': "Satureja montana",
        'Dutch name': "Bergbonenkruid",
        'Image path': "images/Satureja montana/Satureja montana.jpg",
    },
    {
        'Latin name': "Schizophragma hydrangeoides",
        'Dutch name': "Schijnhortensia",
        'Image path': "images/Schizophragma hydrangeoides/Schizophragma hydrangeoides.jpg",
    },
    {
        'Latin name': "Scilla siberica",
        'Dutch name': "Oosterse sterhyacint",
        'Image path': "images/Scilla siberica/Scilla siberica.jpg",
    },
    {
        'Latin name': "Sedum 'Matrona'",
        'Dutch name': "Vetkruid",
        'Image path': "images/Sedum 'Matrona'/Sedum 'Matrona'.jpg",
    },
    {
        'Latin name': "Senecio jacobaea",
        'Dutch name': "Jakobskruid",
        'Image path': "images/Senecio jacobaea/Senecio jacobaea.jpg",
    },
    {
        'Latin name': "Sequoia sempervirens",
        'Dutch name': "Kustmammoetboom",
        'Image path': "images/Sequoia sempervirens/Sequoia sempervirens.jpg",
    },
    {
        'Latin name': "Sequoiadendron giganteum",
        'Dutch name': "Mammoetboom",
        'Image path': "images/Sequoiadendron giganteum/Sequoiadendron giganteum.jpg",
    },
    {
        'Latin name': "Sesleria autumnalis",
        'Dutch name': "Blauwgras",
        'Image path': "images/Sesleria autumnalis/Sesleria autumnalis.jpg",
    },
    {
        'Latin name': "Sisyrinchium striatum",
        'Dutch name': "Bieslelie",
        'Image path': "images/Sisyrinchium striatum/Sisyrinchium striatum.jpg",
    },
    {
        'Latin name': "Skimmia japonica",
        'Dutch name': "Skimmia",
        'Image path': "images/Skimmia japonica/Skimmia japonica.jpg",
    },
    {
        'Latin name': "Solidago rugosa 'Fireworks'",
        'Dutch name': "Guldenroede",
        'Image path': "images/Solidago rugosa 'Fireworks'/Solidago rugosa 'Fireworks'.jpg",
    },
    {
        'Latin name': "Sorbus aucuparia",
        'Dutch name': "Wilde lijsterbes",
        'Image path': "images/Sorbus aucuparia/Sorbus aucuparia.jpg",
    },
    {
        'Latin name': "Sparganum erectum",
        'Dutch name': "Grote egelskop",
        'Image path': "images/Sparganum erectum/Sparganum erectum.jpg",
    },
    {
        'Latin name': "Spiraea japonica",
        'Dutch name': "Japanse spierstruik",
        'Image path': "images/Spiraea japonica/Spiraea japonica.jpg",
    },
    {
        'Latin name': "Spiraea x vanhouttei",
        'Dutch name': "Spierstruik",
        'Image path': "images/Spiraea x vanhouttei/Spiraea x vanhouttei.jpg",
    },
    {
        'Latin name': "Spodiopogon sibiricus",
        'Dutch name': "Siberisch siergras",
        'Image path': "images/Spodiopogon sibiricus/Spodiopogon sibiricus.jpg",
    },
    {
        'Latin name': "Sporobolus heterolepis",
        'Dutch name': "Prairiedropzaad",
        'Image path': "images/Sporobolus heterolepis/Sporobolus heterolepis.jpg",
    },
    {
        'Latin name': "Stachys byzantina",
        'Dutch name': "Ezelsoor",
        'Image path': "images/Stachys byzantina/Stachys byzantina.jpg",
    },
    {
        'Latin name': "Stachys monieri 'Hummelo'",
        'Dutch name': "Andoorn",
        'Image path': "images/Stachys monieri 'Hummelo'/Stachys monieri 'Hummelo'.jpg",
    },
    {
        'Latin name': "Stachys sylvatica",
        'Dutch name': "Bosandoorn",
        'Image path': "images/Stachys sylvatica/Stachys sylvatica.jpg",
    },
    {
        'Latin name': "Stachyurus praecox",
        'Dutch name': "Staartaar",
        'Image path': "images/Stachyurus praecox/Stachyurus praecox.jpg",
    },
    {
        'Latin name': "Staphylea colchica",
        'Dutch name': "Kaukasische pimpernoot",
        'Image path': "images/Staphylea colchica/Staphylea colchica.jpg",
    },
    {
        'Latin name': "Stellaria holostea",
        'Dutch name': "Grote muur",
        'Image path': "images/Stellaria holostea/Stellaria holostea.jpg",
    },
    {
        'Latin name': "Stellaria media",
        'Dutch name': "Vogelmuur",
        'Image path': "images/Stellaria media/Stellaria media.jpg",
    },
    {
        'Latin name': "Stephanandra incisa",
        'Dutch name': "Kransspirea",
        'Image path': "images/Stephanandra incisa/Stephanandra incisa.jpg",
    },
    {
        'Latin name': "Stipa gigantea",
        'Dutch name': "Reuzenvedergras",
        'Image path': "images/Stipa gigantea/Stipa gigantea.jpg",
    },
    {
        'Latin name': "Stipa tenuissima",
        'Dutch name': "vedergras",
        'Image path': "images/Stipa tenuissima/Stipa tenuissima.jpg",
    },
    {
        'Latin name': "Stratiotes aloides",
        'Dutch name': "Krabbenscheer",
        'Image path': "images/Stratiotes aloides/Stratiotes aloides.jpg",
    },
    {
        'Latin name': "Styphnolobium japonicum",
        'Dutch name': "japanse honingboom",
        'Image path': "images/Styphnolobium japonicum/Styphnolobium japonicum.jpg",
    },
    {
        'Latin name': "Symphytum azureum",
        'Dutch name': "Blauwe smeerwortel",
        'Image path': "images/Symphytum azureum/Symphytum azureum.jpg",
    },
    {
        'Latin name': "Symphytum grandiflorum",
        'Dutch name': "Kruipende smeerwortel",
        'Image path': "images/Symphytum grandiflorum/Symphytum grandiflorum.jpg",
    },
    {
        'Latin name': "Symphytum officinale",
        'Dutch name': "Gewone smeerwortel",
        'Image path': "images/Symphytum officinale/Symphytum officinale.jpg",
    },
    {
        'Latin name': "Syringa vulgaris",
        'Dutch name': "Sering",
        'Image path': "images/Syringa vulgaris/Syringa vulgaris.jpg",
    },
    {
        'Latin name': "Tanacetum vulgare",
        'Dutch name': "Boerenwormkruid",
        'Image path': "images/Tanacetum vulgare/Tanacetum vulgare.jpg",
    },
    {
        'Latin name': "Taxodium distichum",
        'Dutch name': "Moerascipres",
        'Image path': "images/Taxodium distichum/Taxodium distichum.jpg",
    },
    {
        'Latin name': "Taxus baccata",
        'Dutch name': "Venijnboom",
        'Image path': "images/Taxus baccata/Taxus baccata.jpg",
    },
    {
        'Latin name': "Telekia speciosa",
        'Dutch name': "Groot koeienoog",
        'Image path': "images/Telekia speciosa/Telekia speciosa.jpg",
    },
    {
        'Latin name': "Tellima grandiflora",
        'Dutch name': "Mijterloof",
        'Image path': "images/Tellima grandiflora/Tellima grandiflora.jpg",
    },
    {
        'Latin name': "Teucrium × lucidrys",
        'Dutch name': "Gamander",
        'Image path': "images/Teucrium × lucidrys/Teucrium × lucidrys.jpg",
    },
    {
        'Latin name': "Teucrium scorodonia",
        'Dutch name': "Valse salie",
        'Image path': "images/Teucrium scorodonia/Teucrium scorodonia.jpg",
    },
    {
        'Latin name': "Thalictrum delavayi",
        'Dutch name': "Chinese ruit",
        'Image path': "images/Thalictrum delavayi/Thalictrum delavayi.jpg",
    },
    {
        'Latin name': "Thuja occidentalis",
        'Dutch name': "Westerse levensboom",
        'Image path': "images/Thuja occidentalis/Thuja occidentalis.jpg",
    },
    {
        'Latin name': "Thuja plicata",
        'Dutch name': "Reuzenlevensboom",
        'Image path': "images/Thuja plicata/Thuja plicata.jpg",
    },
    {
        'Latin name': "Thymus vulgaris 'Compactus'",
        'Dutch name': "Echte tijm",
        'Image path': "images/Thymus vulgaris 'Compactus'/Thymus vulgaris 'Compactus'.jpg",
    },
    {
        'Latin name': "Tiarella cordifolia",
        'Dutch name': "Schuimbloem",
        'Image path': "images/Tiarella cordifolia/Tiarella cordifolia.jpg",
    },
    {
        'Latin name': "Tilia cordata",
        'Dutch name': "Winterlinde",
        'Image path': "images/Tilia cordata/Tilia cordata.jpg",
    },
    {
        'Latin name': "Tilia platyphyllos",
        'Dutch name': "Zomerlinde",
        'Image path': "images/Tilia platyphyllos/Tilia platyphyllos.jpg",
    },
    {
        'Latin name': "Tradescantia 'Osprey'",
        'Dutch name': "Eendagsbloem",
        'Image path': "images/Tradescantia 'Osprey'/Tradescantia 'Osprey'.jpg",
    },
    {
        'Latin name': "Tricyrtis formosana",
        'Dutch name': "Paddenlelie",
        'Image path': "images/Tricyrtis formosana/Tricyrtis formosana.jpg",
    },
    {
        'Latin name': "Trifolium pratense",
        'Dutch name': "Rode klaver",
        'Image path': "images/Trifolium pratense/Trifolium pratense.jpg",
    },
    {
        'Latin name': "Tsuga canadensis",
        'Dutch name': "Oostelijke hemlockspar",
        'Image path': "images/Tsuga canadensis/Tsuga canadensis.jpg",
    },
    {
        'Latin name': "Tulipa sprengeri",
        'Dutch name': "Sprenger's Tulp",
        'Image path': "images/Tulipa sprengeri/Tulipa sprengeri.jpg",
    },
    {
        'Latin name': "Tulipa sylvestris",
        'Dutch name': "Bostulp",
        'Image path': "images/Tulipa sylvestris/Tulipa sylvestris.jpg",
    },
    {
        'Latin name': "Tussilago farfara",
        'Dutch name': "Klein hoefblad",
        'Image path': "images/Tussilago farfara/Tussilago farfara.jpg",
    },
    {
        'Latin name': "Typha angustifolia",
        'Dutch name': "Kleine lisdodde",
        'Image path': "images/Typha angustifolia/Typha angustifolia.jpg",
    },
    {
        'Latin name': "Typha latifolia",
        'Dutch name': "Grote lisdodde",
        'Image path': "images/Typha latifolia/Typha latifolia.jpg",
    },
    {
        'Latin name': "Typha minima",
        'Dutch name': "Dwerglisdodde",
        'Image path': "images/Typha minima/Typha minima.jpg",
    },
    {
        'Latin name': "Ulex europaeus",
        'Dutch name': "Gaspeldoorn",
        'Image path': "images/Ulex europaeus/Ulex europaeus.jpg",
    },
    {
        'Latin name': "Ulmus laevis",
        'Dutch name': "Fladderiep",
        'Image path': "images/Ulmus laevis/Ulmus laevis.jpg",
    },
    {
        'Latin name': "Urtica dioica",
        'Dutch name': "Grote brandnetel",
        'Image path': "images/Urtica dioica/Urtica dioica.jpg",
    },
    {
        'Latin name': "Vaccinium corymbosum",
        'Dutch name': "Blauwe bes",
        'Image path': "images/Vaccinium corymbosum/Vaccinium corymbosum.jpg",
    },
    {
        'Latin name': "Vaccinium myrtillus",
        'Dutch name': "Blauwe bosbes",
        'Image path': "images/Vaccinium myrtillus/Vaccinium myrtillus.jpg",
    },
    {
        'Latin name': "Valeriana repens",
        'Dutch name': "Echte valeriaan",
        'Image path': "images/Valeriana repens/Valeriana repens.jpg",
    },
    {
        'Latin name': "Verbascum nigrum var. album",
        'Dutch name': "Zwarte toorts",
        'Image path': "images/Verbascum nigrum var. album/Verbascum nigrum var. album.jpg",
    },
    {
        'Latin name': "Verbena bonariensis",
        'Dutch name': "Ijzerhard",
        'Image path': "images/Verbena bonariensis/Verbena bonariensis.jpg",
    },
    {
        'Latin name': "Veronicastrum virginicum",
        'Dutch name': "Virginische ereprijs",
        'Image path': "images/Veronicastrum virginicum/Veronicastrum virginicum.jpg",
    },
    {
        'Latin name': "Viburnum x bodnantense",
        'Dutch name': "Wintersneeuwbal",
        'Image path': "images/Viburnum x bodnantense/Viburnum x bodnantense.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Viburnum davidii",
        'Dutch name': "Sneeuwbal",
        'Image path': "images/Viburnum davidii/Viburnum davidii.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Viburnum macrocephalum",
        'Dutch name': "Chinese sneeuwbal",
        'Image path': "images/Viburnum macrocephalum/Viburnum macrocephalum.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Viburnum opulus",
        'Dutch name': "Gelderse roos",
        'Image path': "images/Viburnum opulus/Viburnum opulus.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Viburnum plicatum 'Mariesii'",
        'Dutch name': "Japanse sneeuwbal",
        'Image path': "images/Viburnum plicatum 'Mariesii'/Viburnum plicatum 'Mariesii'.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Viburnum rhytidophyllum",
        'Dutch name': "Leerbladige sneeuwbal",
        'Image path': "images/Viburnum rhytidophyllum/Viburnum rhytidophyllum.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Viburnum tinus",
        'Dutch name': "Sneeuwbal",
        'Image path': "images/Viburnum tinus/Viburnum tinus.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Vinca major",
        'Dutch name': "Grote maagdenpalm",
        'Image path': "images/Vinca major/Vinca major.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Vinca minor",
        'Dutch name': "Kleine maagdenpalm",
        'Image path': "images/Vinca minor/Vinca minor.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Vitis coignetiae",
        'Dutch name': "Sierdruif",
        'Image path': "images/Vitis coignetiae/Vitis coignetiae.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Vitis vinifera",
        'Dutch name': "Druivelaar",
        'Image path': "images/Vitis vinifera/Vitis vinifera.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Waldsteinia ternata",
        'Dutch name': "Goudaardbei",
        'Image path': "images/Waldsteinia ternata/Waldsteinia ternata.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Weigela florida",
        'Dutch name': "Weigela",
        'Image path': "images/Weigela florida/Weigela florida.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Wisteria floribunda",
        'Dutch name': "Japanse blauwe regen",
        'Image path': "images/Wisteria floribunda/Wisteria floribunda.jpg",
            'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "Wisteria sinensis",
        'Dutch name': "Chinese blauwe regen",
        'Image path': "images/Wisteria sinensis/Wisteria sinensis.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
        ]},
    {
        'Latin name': "x Cupressocyparis leylandii",
        'Dutch name': "Leylandcipres",
        'Image path': "images/x Cupressocyparis leylandii/x Cupressocyparis leylandii 1.jpg",
        'Sub images': [
            "images/PLACEHOLDER/PLACEHOLDER 2.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 3.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 4.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 5.jpg",
            "images/PLACEHOLDER/PLACEHOLDER 6.jpg",
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
