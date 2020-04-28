const NormalDistribution  = require('normal-distribution');

const { std , mean } = require('mathjs');

let standardDeviation = std;

function calculateNormalDistribution(mean, standardDeviation, value){
  return new NormalDistribution.default(mean, standardDeviation).pdf(value);
}

function calculateMean(values){
  return mean(values);
}

function calculateStandardDeviation(values){
  return standardDeviation(values);
}



const dataSet = [
    {
        "age": "43",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "135",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "39",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "160",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "39",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "160",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "160",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "42",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "146",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "49",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "130",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "50",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "135",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "59",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "TRUE",
        "rest_electro": "left_vent_hyper",
        "max_heart_rate": "119",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "54",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "200",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "142",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "59",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "125",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "56",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "170",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "122",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "52",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "60",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "100",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "125",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "55",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "160",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "143",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "57",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "38",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "166",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "60",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "left_vent_hyper",
        "max_heart_rate": "135",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "55",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "50",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "140",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "48",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "106",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "110",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "39",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "190",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "106",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "66",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "94",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "56",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "155",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "44",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "135",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "135",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "43",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "120",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "54",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "118",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "52",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "138",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "48",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "115",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "51",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "135",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "59",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "180",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "100",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "58",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "110",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "118",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "124",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "54",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "91",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "48",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "92",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "38",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "39",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "120",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "115",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "33",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "185",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "50",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "145",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "41",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "125",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "144",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "49",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "65",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "170",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "112",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "50",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "65",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "87",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "46",
        "chest_pain_type": "typ_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "175",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "40",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "188",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "39",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "145",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "54",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "125",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "48",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "138",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "55",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "130",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "44",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "56",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "114",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "32",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "184",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "55",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "137",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "54",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "122",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "51",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "125",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "145",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "47",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "174",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "57",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "145",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "43",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "142",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "138",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "45",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "122",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "53",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "162",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "56",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "128",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "48",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "118",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "55",
        "chest_pain_type": "typ_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "?",
        "max_heart_rate": "136",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "49",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "115",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "175",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "56",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "124",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "39",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "146",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "52",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "53",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "148",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "55",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "left_vent_hyper",
        "max_heart_rate": "134",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "112",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "36",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "178",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "53",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "145",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "130",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "34",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "98",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "31",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "153",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "29",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "160",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "165",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "29",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "43",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "130",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "49",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "122",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "39",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "38",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "54",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "154",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "40",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "32",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "118",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "130",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "55",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "110",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "42",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "155",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "48",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "103",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "45",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "144",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "53",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "132",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "39",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "132",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "41",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "130",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "42",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "49",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "100",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "174",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "54",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "130",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "58",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "160",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "28",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "left_vent_hyper",
        "max_heart_rate": "185",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "51",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "48",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "102",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "51",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "100",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "42",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "48",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "99",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "32",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "125",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "155",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "55",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "160",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "53",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "124",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "112",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "180",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "120",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "55",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "145",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "155",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "49",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "128",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "96",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "35",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "left_vent_hyper",
        "max_heart_rate": "180",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "35",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "54",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "137",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "58",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "49",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "120",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "52",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "165",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "48",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "122",
        "blood_sugar": "TRUE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "150",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "62",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "152",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "41",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "112",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "142",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "52",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "82",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "40",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "138",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "52",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "120",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "39",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "34",
        "chest_pain_type": "typ_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "180",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "40",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "167",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "47",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "158",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "47",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "125",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "56",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "40",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "172",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "52",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "94",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "54",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "142",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "54",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "160",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "175",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "53",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "116",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "50",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "121",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "55",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "47",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "98",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "36",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "112",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "184",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "65",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "115",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "37",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "130",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "54",
        "chest_pain_type": "typ_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "137",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "36",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "172",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "47",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "145",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "36",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "180",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "52",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "134",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "41",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "42",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "152",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "37",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "98",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "58",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "50",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "48",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "100",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "100",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "58",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "135",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "100",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "58",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "136",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "99",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "44",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "142",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "38",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "145",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "130",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "54",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "110",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "140",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "54",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "56",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "125",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "53",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "61",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "125",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "115",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "49",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "172",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "50",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "170",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "116",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "45",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "135",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "110",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "52",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "124",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "50",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "125",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "43",
        "chest_pain_type": "typ_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "155",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "38",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "53",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "180",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "120",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "57",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "92",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "59",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "54",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "125",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "122",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "39",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "50",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "160",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "52",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "118",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "44",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "36",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "160",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "44",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "135",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "46",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "125",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "41",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "118",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "45",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "45",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "130",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "52",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "110",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "55",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "145",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "96",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "37",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "41",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "37",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "158",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "44",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "100",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "42",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "136",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "41",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "160",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "59",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "34",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "168",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "52",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "170",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "126",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "56",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "100",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "38",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "92",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "134",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "54",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "105",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "48",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "160",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "58",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "140",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "54",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "TRUE",
        "rest_electro": "normal",
        "max_heart_rate": "125",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "35",
        "chest_pain_type": "atyp_angina",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "168",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "58",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "160",
        "blood_sugar": "TRUE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "92",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "55",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "128",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "37",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "120",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "168",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "54",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "134",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "47",
        "chest_pain_type": "typ_angina",
        "rest_blood_pressure": "110",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "150",
        "exercice_angina": "no",
        "disease": "negative"
    },
    {
        "age": "63",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "150",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "115",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "59",
        "chest_pain_type": "non_anginal",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "120",
        "exercice_angina": "yes",
        "disease": "negative"
    },
    {
        "age": "52",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "112",
        "blood_sugar": "FALSE",
        "rest_electro": "st_t_wave_abnormality",
        "max_heart_rate": "96",
        "exercice_angina": "yes",
        "disease": "positive"
    },
    {
        "age": "49",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "130",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "170",
        "exercice_angina": "no",
        "disease": "positive"
    },
    {
        "age": "53",
        "chest_pain_type": "asympt",
        "rest_blood_pressure": "140",
        "blood_sugar": "FALSE",
        "rest_electro": "normal",
        "max_heart_rate": "155",
        "exercice_angina": "no",
        "disease": "negative"
    }
];


// let chest_pain_type_result = {
  // "asympt": {
  //   positive: 10,
  //   negative: 20
  // }
// }

// let errors = {
//   chest_pain_type: {},
//   blood_sugar: {},
//   rest_electro: {},
//   exercice_angina: {}
// }

/*
  exercice_angina: {
    yes: { positive: 60, negative: 12, positiveRatio: 60/92, negativeRation: 12/117 },
    no: { positive: 32, negative: 105 },
    totalPositive: 92,
    totalNegative: 117
  }
*/

function countErrors(dataSet){

  let errors = {};

  dataSet.forEach(item => {

    let keys = Object.keys(item);
    /*
    keys = [
            age,
            chest_pain_type,
            rest_blood_pressure,
            blood_sugar,
            rest_electro,
            max_heart_rate,
            exercice_angina,
            disease,
           ]
    */


    keys.forEach(key => {

      if(key == 'rest_blood_pressure') return; //numerical values
      if(key == 'max_heart_rate') return; //numerical values
      if(key == 'age') return; //numerical values

      // create the object if didn't exist
      if(!errors[key]) errors[key] = {};

      // skip ? category if found
      if(item[key] == '?') return;

  
      let value = item[key]; // key: chest_pain_type, value is item[chest_pain_type] => asympt (for example)


      /*
        errors[chest_pain_type][asympt]
      */


      // first time => initialize
      if(!errors[key][value])

        errors[key][value] = {
          positive: item.disease == 'positive' ? 1 : 0,
          negative: item.disease == 'negative' ? 1 : 0,
        }

      // previous value exist => update the value only
      else
        errors[key][value][item.disease] = errors[key][value][item.disease] + 1;
      

    });

  });


  /*
  errors: {
    exercice_angina: {
      yes: { positive: 60, negative: 12 },
      no: { positive: 32, negative: 105 }
    },
    ...
  }
  */
  return errors;

}

function addRatiosToErrors(errors){


  /*
  errors: {
    exercice_angina: {
      yes: { positive: 60, negative: 12 },
      no: { positive: 32, negative: 105 }
    },
    ...
  }


  */

  Object.keys(errors).forEach(key => {
    /*
    keys = [ chest_pain_type, rest_blood_pressure, blood_sugar, exercice_angina, disease ]
    
    errorObj example: 
    
        exercice_angina: {
          yes: { positive: 60, negative: 12 },
          no: { positive: 32, negative: 105 }
        }
    */
    let errorObj = errors[key];

    let totalPositive = Object.values(errorObj).map(obj => obj.positive).reduce((x,y) => x + y);
    let totalNegative = Object.values(errorObj).map(obj => obj.negative).reduce((x,y) => x + y);
    
    errorObj.totalPositive = totalPositive;
    errorObj.totalNegative = totalNegative;

    Object.keys(errorObj).forEach(innerKey => {
      errorObj[innerKey]['positiveRatio'] = errorObj[innerKey]['positive'] / totalPositive;
      errorObj[innerKey]['negativeRatio'] = errorObj[innerKey]['negative'] / totalPositive;
    });

    /*
    Result:

      exercice_angina: {
        yes: { positive: 60, negative: 12, positiveRatio: 60/92, negativeRation: 12/117 },
        no: { positive: 32, negative: 105, positiveRatio: 32/92, negativeRation: 105/117 },
        totalPositive: 92,
        totalNegative: 117
      }

    */

  });

  /*
   for disease we only need specific values
  */
  errors['disease'] = {
    totalPositive: errors['disease']['totalPositive'],
    totalNegative: errors['disease']['totalNegative'],

    positiveRatio: errors['disease']['totalPositive'] / ( errors['disease']['totalPositive'] + errors['disease']['totalNegative'] ),
    negativeRatio: errors['disease']['totalNegative'] / ( errors['disease']['totalPositive'] + errors['disease']['totalNegative'] ),
  }

  return errors;
}


function getValuesListOfKey(dataSet, key){
  return dataSet.map(item => parseFloat(item[key]));
}



function calculateProbability(testData){


  let positiveLikelihood = Object.keys(testData)
  .map(key => {
    
      // if it's numerical values we calculate the normal distribution of it
      if(!errors[key]) {
       
        let values = getValuesListOfKey(dataSet, key);

        return calculateNormalDistribution(
          calculateMean(values),
          calculateStandardDeviation(values),
          parseFloat(testData[key])
        );
      }
    let className = testData[key];

    return errors[key][className]['positiveRatio']
  })
  .reduce((x,y) => x * y);

  // multiply with the target class positiveRatio too
  positiveLikelihood = positiveLikelihood * errors['disease']['positiveRatio'];




  let negativeLikelihood = Object.keys(testData)
    .map(key => {

      // if it's numerical values we calculate the normal distribution of it
      if(!errors[key]) {
       
        let values = getValuesListOfKey(dataSet, key);

        return calculateNormalDistribution(
          calculateMean(values),
          calculateStandardDeviation(values),
          parseFloat(testData[key])
        );
      }

      let className = testData[key];

      return errors[key][className]['negativeRatio']
    })
    .reduce((x,y) => x * y);


  // multiply with the target class negativeRatio too
  negativeLikelihood = negativeLikelihood * errors['disease']['negativeRatio'];


  // calculate probabilities
  let positiveProbability = positiveLikelihood / (positiveLikelihood + negativeLikelihood);
  let negativeProbability = negativeLikelihood / (positiveLikelihood + negativeLikelihood);

  return {
    positive: `${positiveProbability * 100}%`,
    negative: `${negativeProbability * 100}%`,
  }
}



let errors = addRatiosToErrors(countErrors(dataSet));
// console.log(errors);

let testData = {
    "age": "50",
    "chest_pain_type": "asympt",
    "rest_blood_pressure": "140",
    "blood_sugar": "FALSE",
    "rest_electro": "st_t_wave_abnormality",
    "max_heart_rate": "140",
    "exercice_angina": "yes",
}

console.log(calculateProbability(testData))