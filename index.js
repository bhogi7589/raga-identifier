var melas = ['Kanakangi', 'Ratnangi', 'Ganamurti', 'Vanaspati', 'Manavati', 'Tanarupi', 'Senapati', 'Hanumatodi', 'Dhenuka', 'Natakapriya', 'Kokilapriya', 'Roopavati', 'Gayakapriya', 'Vakulabharanam', 'Mayamalavagowla', 'Chakravakam', 'Sooryakantam', 'Hatakambari', 'Jhankaradhwani', 'Natabhairavi', 'Keeravani', 'Kharaharapriya', 'Gowrimanohari', 'Varunapriya', 'Mararanjani', 'Charukesi', 'Sarasangi', 'Harikambhoji', 'Dheerasankarabaranam', 'Naganandini', 'Yagapriya', 'Ragavardhini', 'Gangeyabhushani', 'Vagadheeswari', 'Shulini', 'Chalanata', 'Salagam', 'Jalarnavam', 'Jhalavarali', 'Navaneetam', 'Pavani', 'Raghupriya', 'Gavambhodi', 'Bhavapriya', 'Shubhapantuvarali', 'Shadvidamargini', 'Suvarnangi', 'Divyamani', 'Dhavalambari', 'Namanarayani', 'Kamavardhini', 'Ramapriya', 'Gamanashrama', 'Vishwambari', 'Shamalangi', 'Shanmukhapriya', 'Simhendramadhyamam', 'Hemavati', 'Dharmavati', 'Neetimati', 'Kantamani', 'Rishabhapriya', 'Latangi', 'Vachaspati', 'Mechakalyani', 'Chitrambari', 'Sucharitra', 'Jyoti swarupini', 'Dhatuvardani', 'Nasikabhushini', 'Kosalam', 'Rasikapriya'];

var indu = [0, 1, 2, 3, 4, 5];
var netra = [6, 7, 8, 9, 10, 11];
var agni = [12, 13, 14, 15, 16, 17];
var veda = [18, 19, 20, 21, 22, 23];
var bana = [24, 25, 26, 27, 28, 29];
var rutu = [30, 31, 32, 33, 34, 35];
var rishi = [36, 37, 38, 39, 40, 41];
var vasu = [42, 43, 44, 45, 46, 47];
var brahma = [48, 49, 50, 51, 52, 53];
var disi = [54, 55, 56, 57, 58, 59];
var rudra = [60, 61, 62, 63, 64, 65];
var aditya = [66, 67, 68, 69, 70, 71];

var r1 = [indu, netra, agni, rishi, vasu, brahma];
var r2 = [veda, bana, disi, rudra];
var r3 = [rutu, aditya];
var g1 = [indu, rishi];
var g2 = [netra, veda, vasu, disi];
var g3 = [agni, bana, rutu, brahma, rudra, aditya];
var m1 = [indu, netra, agni, veda, bana, rutu];
var m2 = [rishi, vasu, brahma, disi, rudra, aditya];
var d1 = [0, 1, 2];
var d2 = [3, 4];
var d3 = [5];
var n1 = [0];
var n2 = [1, 3];
var n3 = [2, 4, 5];

function intersection(a1,a2){
    return a1.filter(function(n){return a2.indexOf(n) !== -1});
}

function intersections(larr){
    var flarr = [];
    for (var i = 0; i < larr.length; i++){
        if (larr[i] !== 0){
            flarr.push(larr[i]);
        }
    }
    if (flarr.length == 0){
        return [indu, netra, agni, veda, bana, rutu, rishi, vasu, brahma, disi, rudra, aditya];
    }
    if (flarr.length == 1){
        return flarr[0];
    }
    var inter = intersection(flarr[0], flarr[1]);
    for (var q = 2; q < flarr.length; q++){
        inter = intersection(inter, flarr[q]);
    }
    return inter;
}

function intersectionsdn(larr){
    var flarr = [];
    for (var i = 0; i < larr.length; i++){
        if (larr[i] !== 0){
            flarr.push(larr[i]);
        }
    }
    if (flarr.length == 0){
        return [0, 1, 2, 3, 4, 5];
    }
    if (flarr.length == 1){
        return flarr[0];
    }
    var inter = intersection(flarr[0], flarr[1]);
    for (var q = 2; q < flarr.length; q++){
        inter = intersection(inter, flarr[q]);
    }
    return inter;
}

function parse(){
    var r = parseInt(document.getElementById("r").value);
    var g = parseInt(document.getElementById("g").value);
    var m = parseInt(document.getElementById("m").value);
    var d = parseInt(document.getElementById("d").value);
    var n = parseInt(document.getElementById("n").value);
    
    if (r == 0 && g == 0 && m == 0 && d == 0 && n == 0){
        document.getElementById("ragas").innerHTML = "No ragas found.";
        return;
    }
    
    if (r == 1){
        r = r1;
    }
    if (r == 2){
        r = r2;
    }
    if (r == 3){
        r = r3;
    }
    if (g == 1){
        g = g1;
    }
    if (g == 2){
        g = g2;
    }
    if (g == 3){
        g = g3;
    }
    if (m == 1){
        m = m1;
    }
    if (m == 2){
        m = m2;
    }
    if (d == 1){
        d = d1;
    }
    if (d == 2){
        d = d2;
    }
    if (d == 3){
        d = d3;
    }
    if (n == 1){
        n = n1;
    }
    if (n == 2){
        n = n2;
    }
    if (n == 3){
        n = n3;
    }
    var parts = intersections([r, g, m]);
    var indices = intersectionsdn([d, n]);
    var out = [];
    for (var i = 0; i < parts.length; i++){
        for (var j = 0; j < indices.length; j++){
            var index = indices[j];
            var number = parts[i][index] + 1;
            out.push(melas[parts[i][index]] + " - Melakarta no. " + number);
        }
    }
    console.log(out);
    if (out.length == 0){
        document.getElementById("ragas").innerHTML = "No ragas found.";
        return;
    }
    document.getElementById("ragas").innerHTML = out.join("<br>");
}