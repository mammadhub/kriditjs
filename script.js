let A = (maash, mebleq, muddet) => {
    let faiz, odenish, ayliqodenish;
    switch (true) {
        case (0 <= muddet && muddet <= 12):
            faiz = 13;
            break;
        case (12 < muddet && muddet <= 24):
            faiz = 15;
            break;
        case (24 < muddet && muddet <= 36):
            faiz = 17;
            break;
        default:
            return "size bu shertlerle kredit dushmur";
    }
    odenish = mebleq + (mebleq * faiz)/100;
    ayliqodenish = odenish / muddet;
    if (ayliqodenish <= maash * 0.45 && odenish <= 10 * maash) {
        return `${mebleq} azn mebleg size ${faiz}%le ${muddet} ay muddetine ayliq ${ayliqodenish.toFixed(2)} manat odenishle verilir`;
    } else {
        return "size bu shertlerle kredit dushmur";
    }
}
console.log(A(77, 600, 20));
