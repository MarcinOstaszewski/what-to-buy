// doKupienia
const zakupy = {
    'mleko': 1,
    'masło': 0, 
    'chleb': 1, 
    'bułki': 1, 
    'herbata': 0, 
    'kawa': 1,
    'miód': 0,
    'czekolada': 0,
    'kakao': 0,
    'jabłka': 1,
}

const kategorie = {
    pieczywo: {
        chleb: 0,
        bułki: 0,
        ciasto: 0,
        razowy: 0,
        pełny_przemiał: 0,
    },
    nabiał: {
        mleko: 0,
        masło: 0,
        śmietana: 0,
        zsiadłe: 0,
        kefir: 0,
        jogurt: 0,
        jajka: 0,
    },
    napoje: {
        woda_gazowana: 0,
        woda_niegazowana: 0,
        sok_jabłkowy: 0,
        sok_pomarańczowy: 0,
        sok_pomidorowy: 0,
        sok_warzywny: 0,
        sok_inny: 0,
        tonik: 0,
        sprite: 0,
        cola: 0,
    },
    używki: {
        kawa: 0,
        herbata: 0,
    },
    słodycze: {
        czekolada: 0,
        ciastka: 0,
        paluszki: 0,
        batony: 0,
        bombonierka: 0,
    },
    kasze: {
        gryczana: 0,
        jaglana: 0,
        mazurska: 0,
        ryż_biały: 0,
        ryż_brązowy: 0,
    },
    makarony: {
        rurki: 0,
        fale: 0,
        kwadraty: 0,
        nitki: 0,
        razowy: 0,
        lasagne: 0,
    },
    owoce: {
        jabłka: 0,
        banany: 0,
        gruszki: 0,
        śliwki: 0,
        winogrona: 0,
        orzechy: 0,
        cytryny: 0,
        limonki: 0,
    }, 
    warzywa: {
        marchew: 0,
        ziemniaki: 0,
        pietruszka: 0,
        pomidory: 0,
        papryka: 0,
        sałata: 0,
        kapusta: 0,
        włoszczyzna: 0,
        kalafior: 0,
        brokuł: 0,
        brukselka: 0,
        fasola: 0,
        szparagowa: 0,
    },
    konserwy: {
        kukurydza: 0,
        groszek: 0,
        ciecierzyca: 0,
        kapary: 0,
        mieszanka: 0,
        fasola_czerwona: 0,
        fasola_biała: 0,
    },
    chemia: {
      dezodorant: 0,  
      szampon: 0,  
      mydło_w_płynie: 0,  
      płyn_do_zmywania: 0,  
      mleczko_do_czyszczenia: 0,  
      pasta_do_zębów: 0,  
      proszek_do_prania: 0,  
      płyn_do_prania: 0,  
      płyn_do_płukania: 0,  
    },
    przybory: {
        papier_śniadaniowy: 0,
        papier_do_pieczenia: 0,
        filtry_do_kawy: 0,
    },
}

// const zakupy = [
//     'mleko', 'masło', 'chleb', 'bułki', 'herbata', 'kawa'
// ]

// const devel = {
//     listy: {
//         spożywcze: {
//             produkty:{
//                 mleko : { }
//             },
//             ustawienia: {
//                 kolor: '#22e',

//             }
//         },
//         chemia: {
            
//         },
//         narzędzia: {
                
//         },

//     }
// }

export {
    zakupy,
    kategorie
}