function toCamelCase(name) {
    const countryNameMap = {
        heardIslandAndMcDonaldIslands: 'Heard Island And McDonald Islands',
        sainthElenaAscensionAndTristanDaCunha: 'Saint Helena, Ascension And Tristan Da Cunha',
        saoTomeandPrincipe: 'São Tomé And Príncipe',
        reunion: 'Réunion' || 'réunion',
        cocosIslands: 'Cocos (Keeling) Islands',
        alandIslands: 'Åland Islands',
        saintBarthelemy: 'Saint Barthélemy',
      // Agrega otros nombres de países según sea necesario
    };
  
    const formattedName = name.toLowerCase();
  
    // Condiciones para manejar nombres de países específicos
    if (countryNameMap.hasOwnProperty(formattedName)) {
      return countryNameMap[formattedName];
    }
  
    // Resto de la lógica para convertir a camelCase
    return formattedName
      .replace(/[^a-zA-Z0-9]+(.)/g, (match, character) => character.toUpperCase())
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/[^a-zA-Z0-9áéíóúñ\s]/g, "")
      .replace(/\s/g, "")
      .replace(/,\s*/g, "");
  }
  
  // Mantén el export default al final del archivo
  export default toCamelCase;