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

const categories = {
    pieczywo: {
        order: 0,
        products: {
            chleb: 1,
            bułki: 1,
            ciasto: 0,
            razowy: 0,
            pełny_przemiał: 1,
            czosnkowe: 0,
        },
    },
    nabiał: {
        order: 1,
        products: {
            mleko: 0,
            masło: 0,
            śmietana: 0,
            zsiadłe: 0,
            kefir: 1,
            jogurt: 1,
            jajka: 1,
            ser_biały: 1,
            ser_żółty: 0,
        }
    },
    napoje: {
        order: 9,
        products: {
            woda_gazowana: 0,
            woda_niegazowana: 1,
            sok_jabłkowy: 1,
            sok_pomarańczowy: 0,
            sok_pomidorowy: 0,
            sok_warzywny: 0,
            sok_inny: 0,
            tonik: 0,
            sprite: 0,
            cola: 0,
        }
    },
    używki: {
        order: 10,
        products: {
            kawa: 0,
            herbata: 0,
        },
    },
    słodycze: {
        order: 11,
        products: {
            czekolada: 0,
            ciastka: 0,
            paluszki: 0,
            batony: 0,
            bombonierka: 0,
        }
    },
    kasze: {
        order: 3,
        products: {
            gryczana: 0,
            jaglana: 0,
            mazurska: 0,
            ryż_biały: 0,
            ryż_brązowy: 0,
        }
    },
    sypkie: {
        order: 4,
        products: {
            mąka: 1,
            cukier: 0,
            sól: 0,
            mąka_razowa: 0,
            kasza_manna: 0,
        }
    },
    przyprawy: {
        order: 13,
        products: {
            pieprz: 0,
            oregano: 0,
            ziele_angielskie: 0,
            liść_laurowy: 0,
            gyros: 0,
            curry: 0,
            czosnek: 1,
            imbir: 0,
            papryka_słodka: 0,
            papryka_ostra: 0,
            ketchup: 1,
            chrzan: 0,
            musztarda: 0,
            majonez: 0
        }
    },
    makarony: {
        order: 4,
        products: {
            rurki: 0,
            fale: 0,
            kwadraty: 0,
            nitki: 0,
            razowy: 0,
            lasagne: 0,
        }
    },
    mięso_ryby: {
        order: 5,
        products: {
            makrela: 1,
            śledzie: 1,
            szprotki: 0,
            szynka: 0,
            kiełbasa: 0,
            boczek: 0,
            polędwica: 0,
            baleron: 0,
        }
    },
    owoce: {
        order: 3,
        products: {
            jabłka: 1,
            banany: 0,
            gruszki: 1,
            śliwki: 0,
            winogrona: 0,
            orzechy: 0,
            cytryny: 1,
            limonki: 0,
        }
    }, 
    warzywa: {
        order: 2,
        products: {
            marchew: 0,
            ziemniaki: 0,
            pietruszka: 1,
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
            czosnek: 1,
            ogórki: 0,
            cebula: 1,
        }
    },
    konserwy: {
        order: 7,
        products: {
            kukurydza: 0,
            groszek: 0,
            ciecierzyca: 0,
            kapary: 0,
            mieszanka: 0,
            fasola_czerwona: 0,
            fasola_biała: 0,
        }
    },
    chemia: {
        order: 6,
        products: {
            dezodorant: 0,  
            szampon: 0,  
            mydło_w_płynie: 0,  
            płyn_do_zmywania: 0,  
            mleczko_do_czyszczenia: 0,  
            pasta_do_zębów: 0,  
            proszek_do_prania: 0,  
            płyn_do_prania: 0,  
            płyn_do_płukania: 0,  
        }
    },
    przybory: {
        order: 8,
        products: {
            papier_śniadaniowy: 0, 
            papier_do_pieczenia: 0,
            filtry_do_kawy: 0,
        }
    },
}

export {
    zakupy,
    categories
}