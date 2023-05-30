import {
    GET_COUNTRIES,
    GET_COUNTRIES_NAME,
    GET_DETAIL,
    FILTER_BY_CONTINENTS,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    GET_ACTIVITY_CREATED,
    POST_ACTIVITY,
    CLEAR_FILTER,
    FILTER_BY_SEASON
    } from '../actions-types/actions-types'

const initialState = {
    countries: [],
    allContinents: [],
    activities: [],
    detailId: [], 
    controllActivities: {}, 
    season: [],
    
}

function rootReducer (state= initialState, action) {
    switch(action.type) {
        case GET_COUNTRIES:
            
            return {
                ...state,
                countries: action.payload,
                allContinents: action.payload
                
            }

        case GET_COUNTRIES_NAME :
            return {
                ...state,
                countries: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                detailId: action.payload,
            }
        

        case CLEAR_FILTER :
            const clear = state.allContinents
            return {
                ...state,
                countries: clear

            } 
        
            
        

        case FILTER_BY_CONTINENTS:
            const continents = state.allContinents;
            console.log(continents)
            const filteredContinents = action.payload === "All" ? continents :
            continents.filter(c => c.continents === action.payload)
            return{
                ...state,
                countries: filteredContinents
            }

        case ORDER_BY_NAME:
               const { type } = action.payload;
               const sortedCountries = [...state.countries];
                  
               if (type === "a-z") {
                 sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
               } else if (type === "z-a") {
                 sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
               }
                  
               return {
                 ...state,
                      countries: sortedCountries
               };
              
               case ORDER_BY_POPULATION:
                let populationOrden;
                if (action.payload === "asc") {
                  populationOrden = state.countries.slice().sort((a, b) => b.population - a.population);
                } else if (action.payload === "desc") {
                  populationOrden = state.countries.slice().sort((a, b) => a.population - b.population);
                } else {
                  populationOrden = state.countries;
                }
                return {
                  ...state,
                  countries: populationOrden,
                };
                      
         
        case GET_ACTIVITY_CREATED:
            return {
                ...state,
                activities: action.payload

            }      
        
        
        case POST_ACTIVITY:
            return {
                ...state,
                controllActivities: action.payload
            } 
         
        case FILTER_BY_SEASON:
            const {payload} = action;
            console.log(payload)
            
            const filteredActivities = state.allContinents.map((act) => {
                console.log(act.activities)
                const temporada = act.activities.map((el) => el.season)
                console.log(temporada)
                return{
                    id: act.id,
                    name: act.name,
                    flags: act.flags,
                    continents: act.continents,
                    capital: act.capital,
                    activities: temporada,
                }
                });
                let seasonActivities = []
                if(payload === 'All') seasonActivities = filteredActivities.filter(el => el.activities.length > 0 )
                if(payload !== 'All')seasonActivities = filteredActivities.filter((el)=> el.activities.includes(payload))
            console.log(seasonActivities)
            return {
                ...state,
                countries: seasonActivities
            };     

        default:
                return state;
    }

}

export default rootReducer;


/* {
    "id": "ARG",
    "name": "Argentina",
    "flags": "https://flagcdn.com/w320/ar.png",
    "continents": "South America",
    "capital": "{\"Buenos Aires\"}",
    "subregion": "South America",
    "area": "2780400",
    "population": 45376763,
    "maps": "https://goo.gl/maps/Z9DXNxhf2o93kvyc6",
    "activities": [
        {
            "names": "Beach",
            "season": "Summer"
        } */