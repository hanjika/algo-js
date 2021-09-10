let series = {
    name:"",
    year: undefined,
    cast: []
};

function askTvSeries() {
    series.name = window.prompt("What is the name of your favourite TV series?");
    series.year = Number(window.prompt("In which year was this TV series produced?"));
    series.cast = window.prompt("Who are the cast members?").split(", ");
    return JSON.stringify(series);
}

console.log(askTvSeries());