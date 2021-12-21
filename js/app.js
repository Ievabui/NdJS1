let books = {
    "Grožinė": [
        {
            ISBN: "GR1234K",
            metai: 2004,
            pavadinimas: "Pasakos vaikams",
            puslapių: 150
        },
        {
            ISBN: "GR1235K",
            metai: 2021,
            pavadinimas: "Pasakos prieš miegą",
            puslapių: 100
        },
        {
            ISBN: "GR1236K",
            metai: 2019,
            pavadinimas: "Peliuko nuotykiai",
            puslapių: 300
        },
        {
            ISBN: "GR1237K",
            metai: 2010,
            pavadinimas: "Kiškis piškis",
            puslapių: 250
        }
    ],
    "Detektyvinė": [
        {
            ISBN: "DR9981K",
            metai: 2021,
            pavadinimas: "Žmogžudystė vakaruose",
            puslapių: 130

        },
        {
            ISBN: "DR9982K",
            metai: 2020,
            pavadinimas: "Traukinys į Veroną",
            puslapių: 230
        },
        {
            ISBN: "DR9983K",
            metai: 2021,
            pavadinimas: "Paslaptingas vėrinys",
            puslapių: 90
        }
    ],
    "Kulinarinė": [
        {
            ISBN: "KR7845K",
            metai: 2021,
            pavadinimas: "Visos meduolių paslaptys",
            puslapių: 290
        },
        {
            ISBN: "KR7892K",
            metai: 2019,
            pavadinimas: "Beatos pyragai",
            puslapių: 200
        },
        {
            ISBN: "KR7875K",
            metai: 2021,
            pavadinimas: "Kalėdiniai patiekalai",
            puslapių: 250
        },
        {
            ISBN: "KR7884K",
            metai: 2018,
            pavadinimas: "Oliverio idėjos grietiems pietums",
            puslapių: 150
        },
        {
            ISBN: "KR7899K",
            metai: 2009,
            pavadinimas: "BBQ patiekalai",
            puslapių: 260
        }
    ]
}
/*let katalogas = books[i]
for (let i = 0; i < books.length; i++) {
    console.log(books[i] + 'literatūra' + books[i].length)
}*/
for (let type in books) {
    console.log(type + ' literatura ' + books[type].length + ' knygos')
}

for (let book of Object.keys(books)) {
    for (metai in book) {
        if (book.metai === 2021) {
            console.log(books[pavadinimas].name + '(nauja knyga)');
        }
        console.log(book.pavadinimas);

    }
}



    const ul = document.querySelector('.grožinė')
    for (let book of Object.keys(books)) {
        for (let data in book) {
            const li = document.createElement('li');
            li.textContent = book[data]
            ul.appendChild(li)
        }
    }
