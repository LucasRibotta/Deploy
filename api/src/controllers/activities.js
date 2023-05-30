const { Country, Activity } = require('../db');

const getCreateActivity = async (data) => {
  try {
    const { names, difficulty, duration, season, countries } = data;
    const activity = await Activity.findOne({
      where: { names }
    });
    let createdActivity = null;
    if (!(activity instanceof Activity)) {
      createdActivity = await Activity.create({
        names,
        difficulty,
        duration,
        season
      });
    }
    let foundCountries = [];
    for (let countryName of countries) {
      const country = await Country.findOne({
        where: { name: countryName }
      });
      foundCountries.push(country);
    }
    if (activity instanceof Activity) {
      await activity.addCountries(foundCountries);
    } else {
      await createdActivity.addCountries(foundCountries);
    }
    return createdActivity;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {getCreateActivity};