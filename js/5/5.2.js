let series = {
    name:"",
    year: undefined,
    cast: []
};

let result = [];

function askTvSeries() {
    series.name = window.prompt("What is the name of your favourite TV series?");
    series.year = Number(window.prompt("In which year was this TV series produced?"));
    series.cast = window.prompt("Who are the cast members?").split(", ");
    return series;
}

function randomizeCast(tvSeries) {
    let n = tvSeries.cast.length;
    for (let i = 0; i < n; i++) {
        let randnum = Math.floor(Math.random() * tvSeries.cast.length);
        result.push(tvSeries.cast[randnum]);
        tvSeries.cast.splice(randnum, 1);
    }
    return result;
}

document.write(randomizeCast(askTvSeries()));