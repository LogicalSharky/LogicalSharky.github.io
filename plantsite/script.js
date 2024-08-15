const images = [
    {
        name: "Choisya ternata",
        src: "images/Choisya ternata.jpg",
        tags: ["white", "spring", "1.5m", "2m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Chimonanthus praecox",
        src: "images/Chimonanthus praecox.jpg",
        tags: ["yellow", "winter", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Chaenomeles × superba",
        src: "images/Chaenomeles × superba.jpg",
        tags: ["red", "orange", "spring", "1.5m", "full sunlight", "any ground type", "bush", "edible", "fruit"]
    },
    {
        name: "Buxus sempervirens",
        src: "images/Buxus sempervirens.jpg",
        tags: ["green", "spring", "1m", "2m", "full sunlight", "half shade", "well-drained soil", "bush", "hedge", "evergreen"]
    },
    {
        name: "Buddleja davidii",
        src: "images/Buddleja davidii.jpg",
        tags: ["purple", "white", "summer", "2m", "3m", "full sunlight", "any ground type", "bush"]
    },
    {
        name: "Aronia melanocarpa",
        src: "images/Aronia melanocarpa.jpg",
        tags: ["white", "black", "autumn", "1.5m", "2m", "full sunlight", "half shade", "any ground type", "bush", "berries", "edible"]
    },
    {
        name: "Amelanchier ovalis",
        src: "images/Amelanchier ovalis.jpg",
        tags: ["white", "spring", "2m", "5m", "full sunlight", "half shade", "any ground type", "tree", "berries", "edible"]
    },
    {
        name: "Abelia × grandiflora",
        src: "images/Abelia × grandiflora.jpg",
        tags: ["pink", "white", "summer", "autumn", "1.5m", "2m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Clethra alnifolia",
        src: "images/Clethra alnifolia.jpg",
        tags: ["white", "summer", "1.5m", "2m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Corylopsis spicata",
        src: "images/Corylopsis spicata.jpg",
        tags: ["yellow", "spring", "1.5m", "2m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Cotinus coggygria",
        src: "images/Cotinus coggygria.jpg",
        tags: ["pink", "purple", "summer", "3m", "5m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Daphne × burkwoodii",
        src: "images/Daphne × burkwoodii.jpg",
        tags: ["pink", "spring", "1m", "1.5m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Daphne mezereum",
        src: "images/Daphne mezereum.jpg",
        tags: ["pink", "purple", "early spring", "1m", "1.5m", "full sunlight", "half shade", "well-drained soil", "bush", "edible", "berries"]
    },
    {
        name: "Deutzia gracilis",
        src: "images/Deutzia gracilis.jpg",
        tags: ["white", "pink", "summer", "1m", "1.5m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Exochorda 'The Bride'",
        src: "images/Exochorda 'The Bride'.jpg",
        tags: ["white", "spring", "1.5m", "2m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Forsythia × intermedia",
        src: "images/Forsythia × intermedia.webp",
        tags: ["yellow", "spring", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Hamamelis × intermedia",
        src: "images/Hamamelis × intermedia.jpg",
        tags: ["yellow", "orange", "red", "winter", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Heptacodium miconioides",
        src: "images/Heptacodium miconioides.jpg",
        tags: ["white", "fall", "3m", "5m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Hibiscus syriacus",
        src: "images/Hibiscus syriacus.jpg",
        tags: ["white", "pink", "purple", "summer", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Hydrangea aspera",
        src: "images/Hydrangea aspera.jpg",
        tags: ["blue", "purple", "summer", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Hydrangea macrophylla",
        src: "images/Hydrangea macrophylla.jpg",
        tags: ["blue", "pink", "purple", "summer", "1.5m", "2m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Hydrangea paniculata",
        src: "images/Hydrangea paniculata.jpg",
        tags: ["white", "pink", "summer", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Hydrangea quercifolia",
        src: "images/Hydrangea quercifolia.jpg",
        tags: ["white", "pink", "summer", "1.5m", "2m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Hydrangea serrata",
        src: "images/Hydrangea serrata.jpg",
        tags: ["blue", "pink", "summer", "1.5m", "2m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Ilex crenata 'Convexa'",
        src: "images/Ilex crenata 'Convexa'.jpg",
        tags: ["green", "winter", "1m", "1.5m", "full sunlight", "half shade", "well-drained soil", "bush", "evergreen", "hedge", "berries"]
    },
    {
        name: "Kerria japonica",
        src: "images/Kerria japonica.jpg",
        tags: ["yellow", "spring", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Kolkwitzia amabilis",
        src: "images/Kolkwitzia amabilis.jpg",
        tags: ["pink", "spring", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Ligustrum ovalifolium",
        src: "images/Ligustrum ovalifolium.jpg",
        tags: ["white", "summer", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush", "hedge"]
    },
    {
        name: "Lonicera fragrantissima",
        src: "images/Lonicera fragrantissima.jpg",
        tags: ["white", "winter", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Lonicera xylosteum",
        src: "images/Lonicera xylosteum.jpg",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush", "berries"]
    },
    {
        name: "Magnolia stellata",
        src: "images/Magnolia stellata.webp",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "tree"]
    },
    {
        name: "Osmanthus × burkwoodii",
        src: "images/Osmanthus × burkwoodii.jpg",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Philadelphus coronarius",
        src: "images/Philadelphus coronarius.jpg",
        tags: ["white", "summer", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Physocarpus opulifolius",
        src: "images/Physocarpus opulifolius.jpg",
        tags: ["white", "pink", "summer", "2m", "3m", "full sunlight", "half shade", "any ground type", "bush", "berries"]
    },
    {
        name: "Potentilla fruticosa",
        src: "images/Potentilla fruticosa.jpg",
        tags: ["yellow", "orange", "summer", "0.5m", "1m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Prunus lusitanica",
        src: "images/Prunus lusitanica.jpg",
        tags: ["white", "spring", "3m", "5m", "full sunlight", "half shade", "well-drained soil", "bush", "hedge"]
    },
    {
        name: "Pyracantha coccinea",
        src: "images/Pyracantha coccinea.jpg",
        tags: ["white", "orange", "red", "spring", "autumn", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "hedge", "berries"]
    },
    {
        name: "Ribes sanguineum",
        src: "images/Ribes sanguineum.jpg",
        tags: ["red", "pink", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Sambucus racemosa",
        src: "images/Sambucus racemosa.jpg",
        tags: ["white", "spring", "3m", "5m", "full sunlight", "half shade", "any ground type", "bush", "berries"]
    },
    {
        name: "Sarcococca hookeriana var. humilis",
        src: "images/Sarcococca hookeriana var. humilis.jpeg",
        tags: ["white", "winter", "0.5m", "1m", "shade", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Skimmia japonica",
        src: "images/Skimmia japonica.jpg",
        tags: ["white", "spring", "1m", "2m", "shade", "half shade", "well-drained soil", "bush", "berries"]
    },
    {
        name: "Spiraea × vanhouttei",
        src: "images/Spiraea × vanhouttei.jpeg",
        tags: ["white", "spring", "1.5m", "2m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Spiraea japonica",
        src: "images/Spiraea japonica.jpg",
        tags: ["pink", "spring", "1m", "2m", "full sunlight", "half shade", "any ground type", "bush"]
    },
    {
        name: "Stachyurus praecox",
        src: "images/Stachyurus praecox.jpg",
        tags: ["yellow", "winter", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Staphylea colchica",
        src: "images/Staphylea colchica.jpg",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"]
    },
    {
        name: "Stephanandra incisa",
        src: "images/Stephanandra incisa.jpg",
        tags: ["white", "spring", "1.5m", "2m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Syringa vulgaris",
        src: "images/Syringa vulgaris.jpg",
        tags: ["purple", "white", "pink", "spring", "3m", "5m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Viburnum × bodnantense",
        src: "images/Viburnum × bodnantense.jpg",
        tags: ["pink", "winter", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"]
    },
    {
        name: "Viburnum davidii",
        src: "images/Viburnum davidii.jpg",
        tags: ["white", "spring", "1m", "1.5m", "shade", "half shade", "well-drained soil", "bush", "berries", "evergreen"]
    },
    {
        name: "Viburnum plicatum 'Mariesii'",
        src: "images/Viburnum plicatum 'Mariesii'.jpg",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"]
    },
    {
        name: "Viburnum rhytidophyllum",
        src: "images/Viburnum rhytidophyllum.jpg",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"]
    },
    {
        name: "Viburnum tinus",
        src: "images/Viburnum tinus.jpg",
        tags: ["white", "pink", "winter", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "evergreen"]
    },
    {
        name: "Viburnum macrocephalum",
        src: "images/Viburnum macrocephalum.jpeg",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries"]
    },
    {
        name: "Weigela florida",
        src: "images/Weigela florida.jpg",
        tags: ["pink", "red", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Acer campestre",
        src: "images/Acer campestre.jpg",
        tags: ["yellow", "green", "spring", "10m", "15m", "full sunlight", "half shade", "well-drained soil", "tree", "native"]
    },
    {
        name: "Acer platanoides",
        src: "images/Acer platanoides.jpg",
        tags: ["yellow", "red", "spring", "10m", "15m", "full sunlight", "half shade", "well-drained soil", "tree", "native"]
    },
    {
        name: "Acer pseudoplatanus",
        src: "images/Acer pseudoplatanus.jpg",
        tags: ["yellow", "spring", "10m", "15m", "full sunlight", "half shade", "well-drained soil", "tree", "native"]
    },
    {
        name: "Alnus glutinosa",
        src: "images/Alnus glutinosa.jpg",
        tags: ["catkins", "spring", "10m", "15m", "full sunlight", "half shade", "wet soil", "tree", "native"]
    },
    {
        name: "Alnus incana",
        src: "images/Alnus incana.jpg",
        tags: ["catkins", "spring", "10m", "15m", "full sunlight", "half shade", "wet soil", "tree", "native"]
    },
    {
        name: "Betula pendula",
        src: "images/Betula pendula.jpg",
        tags: ["catkins", "spring", "10m", "15m", "full sunlight", "half shade", "well-drained soil", "tree", "native"]
    },
    {
        name: "Betula pubescens",
        src: "images/Betula pubescens.jpg",
        tags: ["catkins", "spring", "10m", "15m", "full sunlight", "half shade", "wet soil", "tree", "native"]
    },
    {
        name: "Carpinus betulus",
        src: "images/Carpinus betulus.jpg",
        tags: ["catkins", "spring", "10m", "15m", "full sunlight", "half shade", "well-drained soil", "tree", "hedge", "native"]
    },
    {
        name: "Cornus mas",
        src: "images/Cornus mas.jpg",
        tags: ["yellow", "winter", "3m", "5m", "full sunlight", "half shade", "well-drained soil", "tree", "edible", "fruit", "native"]
    },
    {
        name: "Cornus sanguinea",
        src: "images/Cornus sanguinea.jpg",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native"]
    },
    {
        name: "Corylus avellana",
        src: "images/Corylus avellana.jpg",
        tags: ["catkins", "winter", "5m", "8m", "full sunlight", "half shade", "well-drained soil", "tree", "edible", "nuts", "native"]
    },
    {
        name: "Crataegus laevigata",
        src: "images/Crataegus laevigata.jpg",
        tags: ["white", "spring", "5m", "full sunlight", "half shade", "well-drained soil", "tree", "berries", "native"]
    },
    {
        name: "Crataegus monogyna",
        src: "images/Crataegus monogyna.jpg",
        tags: ["white", "spring", "5m", "full sunlight", "half shade", "well-drained soil", "tree", "berries", "native"]
    },
    {
        name: "Euonymus europaeus",
        src: "images/Euonymus europaeus.jpg",
        tags: ["green", "spring", "3m", "5m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native"]
    },
    {
        name: "Fagus sylvatica",
        src: "images/Fagus sylvatica.jpg",
        tags: ["green", "spring", "10m", "15m", "full sunlight", "half shade", "well-drained soil", "tree", "native"]
    },
    {
        name: "Frangula alnus",
        src: "images/Frangula alnus.jpg",
        tags: ["green", "spring", "3m", "5m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native"]
    },
    {
        name: "Fraxinus excelsior",
        src: "images/Fraxinus excelsior.jpg",
        tags: ["green", "spring", "10m", "15m", "full sunlight", "half shade", "well-drained soil", "tree", "native"]
    },
    {
        name: "Hippophae rhamnoides",
        src: "images/Hippophae rhamnoides.jpeg",
        tags: ["yellow", "spring", "3m", "5m", "full sunlight", "well-drained soil", "bush", "berries", "edible"]
    },
    {
        name: "Ilex aquifolium",
        src: "images/Ilex aquifolium.jpg",
        tags: ["white", "spring", "3m", "5m", "full sunlight", "half shade", "well-drained soil", "bush", "tree", "berries", "evergreen", "native", "hedge"]
    },
    {
        name: "Ligustrum vulgare",
        src: "images/Ligustrum vulgare.jpg",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native", "hedge"]
    },
    {
        name: "Malus sylvestris",
        src: "images/Malus sylvestris.jpg",
        tags: ["white", "pink", "spring", "3m", "5m", "full sunlight", "well-drained soil", "tree", "fruit", "edible", "native"]
    },
    {
        name: "Populus × canescens",
        src: "images/Populus × canescens.jpg",
        tags: ["yellow", "spring", "15m", "20m", "full sunlight", "well-drained soil", "tree", "native"]
    },
    {
        name: "Populus nigra",
        src: "images/Populus nigra.jpg",
        tags: ["yellow", "spring", "15m", "20m", "full sunlight", "well-drained soil", "tree", "native"]
    },
    {
        name: "Populus tremula",
        src: "images/Populus tremula.jpg",
        tags: ["yellow", "spring", "10m", "15m", "full sunlight", "well-drained soil", "tree", "native"]
    },
    {
        name: "Prunus avium",
        src: "images/Prunus avium.jpg",
        tags: ["white", "spring", "10m", "15m", "full sunlight", "well-drained soil", "tree", "fruit", "edible", "native"]
    },
    {
        name: "Prunus padus",
        src: "images/Prunus padus.jpg",
        tags: ["white", "spring", "5m", "10m", "full sunlight", "half shade", "well-drained soil", "tree", "berries", "native"]
    },
    {
        name: "Prunus spinosa",
        src: "images/Prunus spinosa.jpg",
        tags: ["white", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible", "native"]
    },
    {
        name: "Pyrus pyraster",
        src: "images/Pyrus pyraster.jpg",
        tags: ["white", "spring", "10m", "15m", "full sunlight", "well-drained soil", "tree", "fruit", "edible", "native"]
    },
    {
        name: "Quercus petraea",
        src: "images/Quercus petraea.jpg",
        tags: ["yellow", "spring", "15m", "20m", "full sunlight", "well-drained soil", "tree", "native"]
    },
    {
        name: "Quercus robur",
        src: "images/Quercus robur.jpg",
        tags: ["yellow", "spring", "15m", "20m", "full sunlight", "well-drained soil", "tree", "native"]
    },
    {
        name: "Rhamnus cathartica",
        src: "images/Rhamnus cathartica.jpg",
        tags: ["green", "spring", "5m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "native"]
    },
    {
        name: "Rosa canina",
        src: "images/Rosa canina.jpg",
        tags: ["pink", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible", "native"]
    },
    {
        name: "Rosa pimpinellifolia",
        src: "images/Rosa pimpinellifolia.jpg",
        tags: ["yellow", "spring", "1.5m", "2m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible", "native"]
    },
    {
        name: "Rosa rubiginosa",
        src: "images/Rosa rubiginosa.jpeg",
        tags: ["pink", "spring", "2m", "3m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible", "native"]
    },
    {
        name: "Salix alba",
        src: "images/Salix alba.jpg",
        tags: ["catkins", "spring", "15m", "20m", "full sunlight", "wet soil", "tree", "native"]
    },
    {
        name: "Salix caprea",
        src: "images/Salix caprea.jpg",
        tags: ["catkins", "spring", "5m", "10m", "full sunlight", "wet soil", "tree", "native"]
    },
    {
        name: "Salix cinerea",
        src: "images/Salix cinerea.jpg",
        tags: ["catkins", "spring", "5m", "full sunlight", "wet soil", "tree", "native"]
    },
    {
        name: "Salix repens",
        src: "images/Salix repens.jpg",
        tags: ["catkins", "spring", "0.5m", "1m", "full sunlight", "well-drained soil", "bush", "native"]
    },
    {
        name: "Sambucus nigra",
        src: "images/Sambucus nigra.jpg",
        tags: ["white","black", "summer", "5m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible", "native"]
    },
    {
        name: "Sorbus aucuparia",
        src: "images/Sorbus aucuparia.jpg",
        tags: ["white", "summer", "10m", "full sunlight", "half shade", "well-drained soil", "tree", "berries", "edible", "native"]
    },
    {
        name: "Tilia cordata",
        src: "images/Tilia cordata.jpg",
        tags: ["yellow", "summer", "15m", "20m", "full sunlight", "half shade", "well-drained soil", "tree", "native"]
    },
    {
        name: "Tilia platyphyllos",
        src: "images/Tilia platyphyllos.jpg",
        tags: ["yellow", "summer", "15m", "20m", "full sunlight", "half shade", "well-drained soil", "tree", "native"]
    },
    {
        name: "Ulex europaeus",
        src: "images/Ulex europaeus.jpg",
        tags: ["yellow", "spring", "1m", "2m", "full sunlight", "well-drained soil", "bush", "native"]
    },
    {
        name: "Ulmus laevis",
        src: "images/Ulmus laevis.jpg",
        tags: ["green", "spring", "15m", "20m", "full sunlight", "wet soil", "tree", "native"]
    },
    {
        name: "Viburnum opulus",
        src: "images/Viburnum opulus.jpg",
        tags: ["white", "spring", "3m", "5m", "full sunlight", "half shade", "well-drained soil", "bush", "berries", "edible", "native"]
    },
    {
        name: "Acaena microphylla",
        src: "images/Acaena microphylla.jpg",
        tags: ["red", "summer", "0.2m", "full sunlight", "half shade", "well-drained soil", "ground cover"]
    },
    {
        name: "Acanthus mollis",
        src: "images/Acanthus mollis.jpg",
        tags: ["white", "purple", "summer", "1m", "full sunlight", "half shade", "well-drained soil", "bush"]
    },
    {
        name: "Achillea 'Coronation Gold'",
        src: "images/Achillea 'Coronation Gold'.jpg",
        tags: ["yellow", "summer", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Aconitum napellus",
        src: "images/Aconitum napellus.jpg",
        tags: ["blue", "purple", "white", "summer", "1.5m", "shade", "moist soil", "perennial", "toxic"]
    },
    {
        name: "Actaea simplex 'White Pearl'",
        src: "images/Actaea simplex 'White Pearl'.jpg",
        tags: ["white", "autumn", "1.5m", "shade", "moist soil", "perennial", "berries"]
    },
    {
        name: "Agastache 'Blue Fortune'",
        src: "images/Agastache 'Blue Fortune'.jpg",
        tags: ["blue", "summer", "1m", "full sunlight", "well-drained soil", "perennial", "edible"]
    },
    {
        name: "Ajuga reptans 'Atropurpurea'",
        src: "images/Ajuga reptans 'Atropurpurea'.jpg",
        tags: ["purple", "spring", "0.2m", "shade", "moist soil", "ground cover", "evergreen"]
    },
    {
        name: "Alcea rosea",
        src: "images/Alcea rosea.jpg",
        tags: ["pink", "red", "white", "yellow", "summer", "2m", "full sunlight", "well-drained soil", "biennial"]
    },
    {
        name: "Alchemilla mollis",
        src: "images/Alchemilla mollis.jpeg",
        tags: ["green", "yellow", "summer", "0.2m", "shade", "moist soil", "ground cover"]
    },
    {
        name: "Anaphalis triplinervis",
        src: "images/Anaphalis triplinervis.jpg",
        tags: ["white", "summer", "0.5m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Anemone × hybrida 'Honorine Jobert'",
        src: "images/Anemone × hybrida 'Honorine Jobert'.jpg",
        tags: ["white", "autumn", "1m", "shade", "moist soil", "perennial"]
    },
    {
        name: "Aquilegia vulgaris",
        src: "images/Aquilegia vulgaris.jpg",
        tags: ["blue", "purple", "red", "pink", "spring", "0.5m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Artemisia lactiflora 'Elfenbein'",
        src: "images/Artemisia lactiflora 'Elfenbein'.jpg",
        tags: ["white", "summer", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Aruncus dioicus",
        src: "images/Aruncus dioicus.jpg",
        tags: ["white", "summer", "1.5m", "shade", "moist soil", "perennial"]
    },
    {
        name: "Asarum europaeum",
        src: "images/Asarum europaeum.jpg",
        tags: ["brown", "spring", "0.2m", "shade", "moist soil", "ground cover", "evergreen"]
    },
    {
        name: "Aster amellus 'Veilchenkönigin'",
        src: "images/Aster amellus 'Veilchenkönigin'.jpg",
        tags: ["purple", "autumn", "0.5m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Aster divaricatus",
        src: "images/Aster divaricatus.jpg",
        tags: ["white", "autumn", "0.5m", "shade", "moist soil", "perennial"]
    },
    {
        name: "Aster × frikartii 'Mönch'",
        src: "images/Aster × frikartii 'Mönch'.jpg",
        tags: ["blue", "autumn", "0.5m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Aster lateriflorus 'Horizontalis'",
        src: "images/Aster lateriflorus 'Horizontalis'.jpg",
        tags: ["white", "pink", "autumn", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Aster novae-angliae 'Andenken an Alma Pötschke'",
        src: "images/Aster novae-angliae 'Andenken an Alma Pötschke'.jpg",
        tags: ["pink", "autumn", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Aster 'Prof. Anton Kippenberg'",
        src: "images/Aster 'Prof. Anton Kippenberg'.jpeg",
        tags: ["purple", "autumn", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Astilbe chinensis 'Pumila'",
        src: "images/Astilbe chinensis 'Pumila'.jpg",
        tags: ["pink", "summer", "0.5m", "shade", "moist soil", "perennial"]
    },
    {
        name: "Astilboides tabularis",
        src: "images/Astilboides tabularis.jpg",
        tags: ["white", "summer", "1m", "shade", "moist soil", "perennial"]
    },
    {
        name: "Astrantia major",
        src: "images/Astrantia major.jpg",
        tags: ["white", "pink", "summer", "1m", "half shade", "moist soil", "perennial"]
    },
    {
        name: "Bergenia 'Bressingham Ruby'",
        src: "images/Bergenia 'Bressingham Ruby'.jpg",
        tags: ["red", "spring", "0.5m", "full sunlight", "moist soil", "perennial"]
    },
    {
        name: "Brunnera macrophylla 'Jack Frost'",
        src: "images/Brunnera macrophylla 'Jack Frost'.jpg",
        tags: ["blue", "white", "spring", "0.2m", "shade", "moist soil", "perennial", "large leaves"]
    },
    {
        name: "Calamintha nepeta subsp. nepeta",
        src: "images/Calamintha nepeta subsp. nepeta.jpg",
        tags: ["white", "summer", "0.5m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Campanula lactiflora 'Loddon Anna'",
        src: "images/Campanula lactiflora 'Loddon Anna'.jpg",
        tags: ["white", "summer", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Centranthus ruber 'Coccineus'",
        src: "images/Centranthus ruber 'Coccineus'.jpg",
        tags: ["red", "summer", "0.5m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Ceratostigma plumbaginoides",
        src: "images/Ceratostigma plumbaginoides.jpg",
        tags: ["blue", "summer", "0.2m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Chelone obliqua",
        src: "images/Chelone obliqua.jpg",
        tags: ["pink", "summer", "1m", "full sunlight", "moist soil", "perennial"]
    },
    {
        name: "Corydalis flexuosa",
        src: "images/Corydalis flexuosa.jpg",
        tags: ["blue", "spring", "0.2m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Crambe cordifolia",
        src: "images/Crambe cordifolia.jpg",
        tags: ["white", "summer", "1.5m", "full sunlight", "well-drained soil", "perennial", "large leaves"]
    },
    {
        name: "Crocosmia 'Lucifer'",
        src: "images/Crocosmia 'Lucifer'.jpg",
        tags: ["red", "summer", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Darmera peltata",
        src: "images/Darmera peltata.jpg",
        tags: ["pink", "spring", "1m", "full sunlight", "moist soil", "perennial", "large leaves"]
    },
    {
        name: "Delphinium 'Völkerfrieden'",
        src: "images/Delphinium 'Völkerfrieden'.jpg",
        tags: ["blue", "summer", "1.5m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Dicentra formosa",
        src: "images/Dicentra formosa.jpg",
        tags: ["pink", "spring", "0.2m", "half shade", "moist soil", "perennial"]
    },
    {
        name: "Dicentra spectabilis",
        src: "images/Dicentra spectabilis.jpg",
        tags: ["pink", "spring", "1m", "half shade", "moist soil", "perennial"]
    },
    {
        name: "Dictamnus albus",
        src: "images/Dictamnus albus.jpg",
        tags: ["white", "summer", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Digitalis purpurea",
        src: "images/Digitalis purpurea.jpg",
        tags: ["purple", "white", "pink", "summer", "1.5m", "full sunlight", "well-drained soil", "perennial", "toxic"]
    },
    {
        name: "Doronicum orientale",
        src: "images/Doronicum orientale.jpg",
        tags: ["yellow", "spring", "0.5m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Echinacea purpurea",
        src: "images/Echinacea purpurea.png",
        tags: ["purple", "summer", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Echinops ritro 'Veitch's Blue'",
        src: "images/Echinops ritro 'Veitch's Blue'.jpg",
        tags: ["blue", "summer", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Epimedium × perralchicum 'Frohnleiten'",
        src: "images/Epimedium × perralchicum 'Frohnleiten'.jpeg",
        tags: ["yellow", "spring", "0.5m", "shade", "well-drained soil", "perennial"]
    },
    {
        name: "Eryngium × zabelii 'Big Blue'",
        src: "images/Eryngium × zabelii 'Big Blue'.jpeg",
        tags: ["blue", "summer", "0.5m", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Eupatorium maculatum 'Atropurpureum'",
        src: "images/Eupatorium maculatum 'Atropurpureum'.jpg",
        tags: ["purple", "summer", "1.5m", "full sunlight", "moist soil", "perennial"]
    },
    {
        name: "Euphorbia amygdaloides var. robbiae",
        src: "images/Euphorbia amygdaloides var. robbiae.jpg",
        tags: ["green", "spring", "0.5m", "shade", "well-drained soil", "evergreen"]
    },
    {
        name: "Euphorbia characias subsp. wulfenii",
        src: "images/Euphorbia characias subsp. wulfenii.jpg",
        tags: ["yellow-green", "spring", "0.5m", "1m", "full sunlight", "well-drained soil", "evergreen"]
    },
    {
        name: "Euphorbia griffithii 'Dixter'",
        src: "images/Euphorbia griffithii 'Dixter'.jpg",
        tags: ["orange-red", "summer", "0.5m", "1m", "full sunlight", "well-drained soil", "evergreen"]
    },
    {
        name: "Fragaria vesca",
        src: "images/Fragaria vesca.jpg",
        tags: ["white", "spring", "0.2m", "full sunlight", "well-drained soil", "edible", "fruit"]
    },
    {
        name: "Galium odoratum",
        src: "images/Galium odoratum.jpg",
        tags: ["white", "spring", "0.2m", "0.5m", "shade", "well-drained soil", "perennial", "fragrant"]
    },
    {
        name: "Gaura lindheimeri 'Whirling Butterflies'",
        src: "images/Gaura lindheimeri 'Whirling Butterflies'.jpg",
        tags: ["white", "pink", "summer", "1m", "1.5m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Geranium 'Ann Folkard'",
        src: "images/Geranium 'Ann Folkard'.jpg",
        tags: ["purple", "yellow", "summer", "0.5m", "1m", "full sunlight", "well-drained soil", "perennial"]
    },
    {
        name: "Geranium × cantabrigiense 'Biokovo'",
        src: "images/Geranium × cantabrigiense 'Biokovo'.jpg",
        tags: ["white", "summer", "0.5m", "1m", "full sunlight", "half shade", "well-drained soil", "perennial"]
    },
    {
        name: "Geranium 'Gerwat' ROZANNE",
        src: "images/Geranium 'Gerwat' ROZANNE.jpg",
        tags: ["blue", "purple", "summer", "0.5m", "1m", "full sunlight", "half shade", "well-drained soil", "perennial"]
    },
    {
        name: "Geranium macrorrhizum",
        src: "images/Geranium macrorrhizum.jpg",
        tags: ["pink", "summer", "0.5m", "1m", "full sunlight", "half shade", "well-drained soil", "perennial"]
    },
    {
        name: "Geranium phaeum",
        src: "images/Geranium phaeum.jpg",
        tags: ["purple", "summer", "0.5m", "1m", "full sunlight", "half shade", "well-drained soil", "perennial"]
    },
    {
        name: "Geranium renardii",
        src: "images/Geranium renardii.jpeg",
        tags: ["pink", "summer", "0.2m", "0.5m", "full sunlight", "half shade", "well-drained soil", "perennial"]
    },
    {
        name: "Geranium sanguineum",
        src: "images/Geranium sanguineum.jpg",
        tags: ["red", "pink", "summer", "0.2m", "0.5m", "full sunlight", "half shade", "well-drained soil", "perennial"]
    },

    // Add more images here following the same format
];

// Define categories and tags
const categories = {
    Colors: ["red", "blue", "green", "yellow", "white", "black", "brown", "purple", "orange", "pink"],
    Ground: ["well-drained soil", "moist soil", "any ground type"],
    Season: ["winter", "sumer", "autumn", "spring"],
    Height: ["0.2m", "0.5m", "1m", "1.5m", "2m", "3m", "5m", "8m", "10m", "15m", "20m"],
    Sunlight: ["full sunlight", "half shade", "shade"],
    Type: ["perennial", "biennial", "bush", "tree", "ground cover", "hedge"],
    Food: ["fruit", "edible", "nuts", "berries"],
    Other: ["large leaves", "toxic", "native", "evergreen", "all"]
};

document.addEventListener('DOMContentLoaded', () => {
    populateSideMenu();

    // Add event listener for Enter key to trigger search
    document.getElementById('searchInput').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchImages();
        }
    });

    // Close the side menu when clicking outside of it
    document.addEventListener('click', (event) => {
        const sideMenu = document.getElementById('sideMenu');
        const sideMenuToggle = document.querySelector('.side-menu-toggle');

        if (!sideMenu.contains(event.target) && !sideMenuToggle.contains(event.target)) {
            closeSideMenu();
        }
    });

    // Close the popup when clicking outside of the popup content
    const popup = document.getElementById('popup');
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });
});

function populateSideMenu() {
    const sideMenuContent = document.getElementById('sideMenuContent');
    sideMenuContent.innerHTML = ''; // Clear existing content

    Object.keys(categories).forEach(category => {
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        sideMenuContent.appendChild(categoryTitle);

        // Sort tags alphabetically
        const sortedTags = categories[category].sort();

        sortedTags.forEach(tag => {
            const tagLink = document.createElement('a');
            tagLink.textContent = tag;
            tagLink.href = "#";
            tagLink.onclick = () => {
                document.getElementById('searchInput').value = tag;
                searchImages();
            };
            sideMenuContent.appendChild(tagLink);
        });
    });
}

function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('show');
}

function closeSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.remove('show');
}

function searchImages() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';

    if (searchInput === 'all') {
        // Show all images if the input is 'all'
        const allImages = [...images].sort((a, b) => a.name.localeCompare(b.name));
        displayImages(allImages);
        return;
    }

    const searchGroups = searchInput.split('/');
    const matchingImages = [];

    searchGroups.forEach(group => {
        const tags = group.split(',').map(tag => tag.trim());
        const includeTags = [];
        const excludeTags = [];

        // Separate include and exclude tags
        tags.forEach(tag => {
            if (tag.startsWith('-')) {
                excludeTags.push(tag.substring(1).trim());
            } else {
                includeTags.push(tag.trim());
            }
        });

        const groupImages = images.filter(image => {
            const tagsMatch = includeTags.every(tag => image.tags.includes(tag));
            const noExcludedTags = excludeTags.every(tag => !image.tags.includes(tag));
            const nameMatch = image.name.toLowerCase().includes(includeTags.join(' '));
            return (tagsMatch || nameMatch) && noExcludedTags;
        });

        matchingImages.push(...groupImages);
    });

    const uniqueImages = Array.from(new Set(matchingImages));
    const sortedImages = uniqueImages.sort((a, b) => a.name.localeCompare(b.name));

    displayImages(sortedImages);

    if (sortedImages.length === 0) {
        imageGrid.innerHTML = '<p>No images found</p>';
    }
}

function displayImages(imagesToDisplay) {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';

    imagesToDisplay.forEach(image => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');
        imageCard.onclick = () => openPopup(image);

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;

        const nameElement = document.createElement('div');
        nameElement.classList.add('image-name');
        nameElement.textContent = image.name;

        imageCard.appendChild(imgElement);
        imageCard.appendChild(nameElement);
        imageGrid.appendChild(imageCard);
    });
}

function openPopup(image) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const popupImageName = document.getElementById('popupImageName');
    const popupImageTags = document.getElementById('popupImageTags');
    const popupImageLink = document.getElementById('popupImageLink');

    popupImage.src = image.src;
    popupImage.alt = image.name;
    popupImageName.textContent = image.name;
    popupImageTags.textContent = 'Tags: ' + image.tags.join(', ');
    popupImageLink.href = `https://www.google.com/search?q=${encodeURIComponent(image.name)}`;

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
