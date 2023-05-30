const regexName = /^[A-Z][A-Za-z0-9 ]*$/;

export const validate = (form) => {
    let errors = {}
    if (!form.names) { errors.names = "Name is required" }
    if (!regexName.test(form.names)) { errors.names = "The name cannot have special characters or tildes and must start with an uppercase letter"}
    if (form.names.length < 3) { errors.names = "The name cannot be less than 3 characters" }
    if (form.names.length > 30) { errors.names = "The name cannot be longer than 30 characters" }
    if (!form.difficulty || form.difficulty === " ") { errors.difficulty = "The difficulty field is required" }
    if (form.difficulty > 5 || form.difficulty < 1 ) { errors.difficulty = "Only values from 1 to 5 are accepted"}
    if(form.difficulty === "Select a difficulty") {errors.difficulty = "Not valid"}
    if (!form.duration || form.duration === " ") { errors.duration = "The duration field is required" } 
    if (form.duration >24 || form.duration < 1)  { errors.duration = "Only values from 1 to 24 are accepted"}
    if(!form.season || form.season.length === 0){errors.season = "Select at least one season"}
    if(!form.season || form.season.length > 2) {errors.season = "Select a maximun of two seasons"}
    if (!form.countries || form.countries.length === 0 ) { errors.countries = "Choose a country"}
    if(form.countries.length > 10) {errors.countries = "You can select up to 10 countries"}
     return errors;
}