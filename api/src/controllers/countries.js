const axios = require('axios');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');


const getAllCountries = async (req, res) => {
    // Obtener el parámetro 'name' de la consulta (query)
    const { name } = req.query;
    // Contar la cantidad de países en la base de datos
    const dBCountry = await Country.count();

    try {
       
        if (!dBCountry) {
            // Si no hay países en la base de datos, obtener los países de la API externa
            const countriesApiGet = await axios.get("https://restcountries.com/v3/all")
             // Mapear los datos de los países obtenidos de la API a un formato deseado
            const apiCountries =  countriesApiGet.data.map(pais => {
                return {
                     id: pais.cca3,
                     name: pais.name.common,
                     flags: pais.flags[1],
                     continents: pais.continents[0],
                     capital: pais.capital || "Sin Datos",
                     subregion: pais.subregion,
                     area: pais.area,
                     population: pais.population,
                     maps: pais.maps?.googleMaps || null,
                }
            })
             // Insertar los países obtenidos de la API en la base de datos
            await Country.bulkCreate(apiCountries); 
        } else if (name) {
            // Si se proporciona el parámetro 'name', buscar países por nombre en la base de datos
            const countryName = await Country.findAll({
                where: {
                     name:  { [Op.iLike]: `%${name}%` },
                    },
                    include:{
                     model: Activity,
                     attributes: ['names', 'season'],
                     through: {attributes: []}
                }
            })
            countryName ?
                res.status(200).json(countryName) :
                res.status(404).json(`El pais con el nombre:${name} no se encontro`);
        } else {
            // Si no se proporciona el parámetro 'name', obtener todos los países de la base de datos
            const allCountrys = await Country.findAll({include: {
              model: Activity,
              attributes: ['names', 'season'],
              through: {attributes: []}
            }})
            res.status(200).json(allCountrys);
        };
           
    } catch (error) {
        return res.status(500).json(error)
    }  
}


const getCountriesId = async (req, res) => {
    const { id } = req.params;
    try {
      const country = await Country.findByPk(id.toUpperCase(), {
        include: {
          model: Activity,
          through: { attributes: [] },
        },
      });
  
      if (country) return res.status(200).json(country);
      return res.status(404).json({
        error: {
          message: "Country doesn't exist",
          values: { ...req.params },
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: {
          message: "Server error",
        },
      });
    }
  };


module.exports = {
    getAllCountries,
    getCountriesId
}