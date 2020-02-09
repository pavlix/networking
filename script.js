"use strict";

const names = ['Abadon', 'Abigail', 'Abiha', 'Abdon', 'Ábel', 'Abelard', 'Adalbert', 'Adam', 'Adéla', 'Adin', 'Adina', 'Adolf', 'Adrian', 'Adrián', 'Adriana', 'Adrien', 'Adriena', 'Agáta', 'Agaton', 'Aglaja', 'Achil', 'Achiles', 'Aida', 'Ailill', 'Alan', 'Alban', 'Albert', 'Albín', 'Albína', 'Albrecht', 'Aldo', 'Alen', 'Alena', 'Aleš', 'Alex', 'Alexandr', 'Alexandra', 'Alexej', 'Alfons', 'Alfréd', 'Alice', 'Alida', 'Alin', 'Alina', 'Alois', 'Aloisie', 'Alojz', 'Alruna', 'Alva', 'Alvar', 'Alvin', 'Alyson', 'Alžběta', 'Amadeus', 'Amálie', 'Amanda', 'Amát', 'Ambrož', 'Amon', 'Amos', 'Anabela', 'Anastázie', 'Anděla', 'Andrea', 'Andreas', 'Andrei', 'Andrej', 'Aneta', 'Anežka', 'Angela', 'Angus', 'Anita', 'Anna', 'Annaliesa', 'Annika', 'Antal', 'Antonie', 'Antonín', 'Apolena', 'Apolo', 'Arabela', 'Aranka', 'Areta', 'Ariadna', 'Arian', 'Ariana', 'Ariela', 'Arion', 'Arleta', 'Armando', 'Armida', 'Armin', 'Arnold', 'Arnošt', 'Arpád', 'Artur', 'Astrid', 'Atila', 'Atilla', 'Attila', 'Augustin', 'Augustýn', 'Aurora', 'Aurelio', 'Aya', 'Axel', 'Babeta', 'Baltazar', 'Barabáš', 'Barbora', 'Bartoloměj', 'Baek', 'Beáta', 'Bedřich', 'Bela', 'Běla', 'Belinda', 'Benedikt', 'Benjamin', 'Beno', 'Berenika', 'Bernadeta', 'Bernard', 'Berta', 'Bertram', 'Bianka', 'Bibiana', 'Blahomil', 'Blahomír', 'Blahoslav', 'Blanka', 'Blažej', 'Blažena', 'Bob', 'Bohdan', 'Bohdana', 'Bohuchval', 'Bohumil', 'Bohumila', 'Bohumír', 'Bohuslav', 'Bohuslava', 'Bojan', 'Bolemír', 'Boleslav', 'Bonaventura', 'Bonifác', 'Boris', 'Borislav', 'Bořek', 'Bořivoj', 'Božena', 'Božetěch', 'Božidar', 'Božidara', 'Brigita', 'Bronislav', 'Bruno', 'Brunhilda', 'Bratislav', 'Bryan', 'Břetislav', 'Bruce', 'Bystrík', 'Carmen', 'Cecil', 'Celestýn', 'Cecílie', 'Crha', 'Ctibor', 'Ctirad', 'Ctislav', 'Cyprián', 'Cyril', 'Čeněk', 'Česlav', 'Česlava', 'Čestmír', 'Dag', 'Dagmar', 'Daisy', 'Dalibor', 'Dalimil', 'Dana', 'Dan', 'Daniel', 'Daniela', 'Danuše', 'Darina', 'Darja', 'David', 'Deana', 'Denis', 'Denisa', 'Deodatus', 'Diana', 'Dimitris', 'Dita', 'Dobromil', 'Dobromila', 'Dobroslav', 'Dominik', 'Dominika', 'Donna', 'Dorian', 'Dorin', 'Dorota', 'Doubravka', 'Dmitr', 'Drahomír', 'Drahomíra', 'Drahoslav', 'Drahoslava', 'Dušan', 'Džamil', 'Džamila', 'Edita', 'Eduard', 'Edwulf', 'Eithne', 'Egon', 'Ela', 'Elena', 'Ellen', 'Eleonora', 'Eli', 'Elisa', 'Eliáš', 'Elisabeta', 'Eliška', 'Elke', 'Elza', 'Ema', 'Emanuel', 'Emil', 'Emílie', 'Emily', 'Emma', 'Ena', 'Engelbert', 'Erik', 'Erika', 'Ervín', 'Ester', 'Etel', 'Euniké', 'Eva', 'Evelína', 'Evžen', 'Evžénie', 'Eydís', 'Fabian', 'Fabio', 'Felix', 'Ferdinand', 'Filip', 'Filipa', 'Fiona', 'Fjodor', 'Floriana', 'Florin', 'Fridolín', 'František', 'Františka', 'Felicia', 'Gabriel', 'Gabriela', 'Gabriella', 'Gerda', 'Geppetto', 'Gertruda', 'Gita', 'Gizela', 'Glauco', 'Grace', 'Godric', 'Gorazd', 'Gustav', 'Gwenda', 'Gaster', 'Hadrián', 'Hana', 'Hanuš', 'Haštal', 'Háta', 'Havel', 'Hedvika', 'Heda', 'Helena', 'Helga', 'Herbert', 'Hermína', 'Hermiona', 'Heřman', 'Honza', 'Homer', 'Hortenzie', 'Horymír', 'Hostivín', 'Hubert', 'Hugo', 'Hynek', 'Chaim', 'Chajim', 'Cheyenne', 'Chrudoš', 'Christie', 'Chřen', 'Ida', 'Idunn', 'Ignác', 'Ignácie', 'Igor', 'Ilja', 'Ilona', 'Ingrid', 'Ingemar', 'Inka', 'Irena', 'Iris', 'Irma', 'Irmhild', 'Isabela', 'Isabella', 'Iška', 'Iulian', 'Iva', 'Ivan', 'Ivana', 'Iveta', 'Ivo', 'Ivona', 'Izabela', 'Jáchym', 'Jakub', 'Jakubka', 'Jan', 'Jack', 'Jin', 'Jun', 'Jana', 'Jarmil', 'Jarmila', 'Jarolím', 'Jaromír', 'Jaromíra', 'Jaroslav', 'Jaroslava', 'Jeroným', 'Jessika', 'Jindra', 'Jindřich', 'Jindřiška', 'Jiří', 'Jiřina', 'Jitka', 'Johana', 'John', 'Jolana', 'Jonáš', 'Jorga', 'Jorik', 'Josef', 'Joshua', 'Judita', 'Juliana', 'Julie', 'Julia', 'Julius', 'Justýna', 'Kamil', 'Kamila', 'Karel', 'Karina', 'Karla', 'Karolína', 'Kaspar', 'Kašpar', 'Kateřina', 'Katia', 'Katka', 'Katy', 'Kazimír', 'Kelly', 'Kevin', 'Klára', 'Krorona', 'Klaudie', 'Klement', 'Kliment', 'Konstantin', 'Koridon', 'Krasimír', 'Kristiana', 'Kristián', 'Kristina', 'Kristýna', 'Krystýna', 'Kryštof', 'Křesomysl', 'Květa', 'Květoslav', 'Květoslava', 'Kvido', 'Lada', 'Ladislav', 'Ladislava', 'Laura', 'Lenka', 'Leo', 'Lea', 'Leona', 'Leonard', 'Leontina', 'Leopold', 'Leoš', 'Lešek', 'Lia', 'Liběna', 'Libor', 'Libuše', 'Liliana', 'Linda', 'Lipan', 'Lisa', 'Livie', 'Lili', 'Ljuba', 'Lubomír', 'Lubor', 'Luboš', 'Lucian', 'Lucie', 'Luděk', 'Ludmila', 'Ludvík', 'Lumír', 'Lukáš', 'Lýdie', 'Magdaléna', 'Mahulena', 'Maja', 'Mája', 'Malia', 'Malika', 'Malvína', 'Marcel', 'Marcela', 'Marek', 'Marián', 'Mariana', 'Marie', 'Marika', 'Marin', 'Marina', 'Marisa', 'Marius', 'Markéta', 'Marlen', 'Marshall', 'Maroš', 'Marta', 'Martin', 'Martina', 'Matěj', 'Matouš', 'Matyáš', 'Matylda', 'Maxim', 'Maxmilián', 'Medard', 'Metoděj', 'Michaela', 'Michael', 'Mikeš', 'Mikuláš', 'Milada', 'Milan', 'Milena', 'Miloslav', 'Miloslava', 'Miloš', 'Miluše', 'Mircea', 'Miriam', 'Miron', 'Miroslav', 'Miroslava', 'Mlada', 'Mlhoš', 'Mnata', 'Mojmír', 'Monika', 'Muriel', 'Myra', 'Nicolae', 'Nefrika', 'Nicoleta', 'Nicola', 'Naďa', 'Naděžda', 'Narcis', 'Narcisa', 'Nastasja', 'Nastěnka', 'Natálie', 'Nataniel', 'Nataša', 'Nazarius', 'Neklan', 'Nela', 'Nelly', 'Nereus', 'Nezamysl', 'Nicu', 'Nidgar', 'Niels', 'Nika', 'Nikander', 'Nikanor', 'Nikasius', 'Nikefor', 'Nikeforos', 'Niket', 'Nikita', 'Nikodém', 'Nikolas (popř. Nicolas či Nicholas)', 'Nikolaus', 'Nikoleta', 'Nikolita', 'Nikon', 'Nina', 'Ninoslav', 'Nivard', 'Noemi', 'Nonius', 'Nonna', 'Nonnosus', 'Nora', 'Norbert', 'Norman', 'Nymfa', 'Octavian', 'Odeta', 'Odin', 'Oldřich', 'Oldřiška', 'Oleg', 'Olga', 'Oliver', 'Olívie', 'Ondřej', 'Oskar', 'Otakar', 'Otmar', 'Oto', 'Otýlie', 'Olimpiada', 'Olin', 'Ondřejka', 'Olivia', 'Pankrác', 'Patricie', 'Patrik', 'Pavel', 'Pavla', 'Pavlín', 'Pavlína', 'Penelope', 'Petr', 'Petra', 'Pia', 'Pipin', 'Pius', 'Pnina', 'Pravoslav', 'Pribin', 'Prokop', 'Prokopa', 'Přemysl', 'Peregrin', 'Quido', 'Radana', 'Radan', 'Radek', 'Radim', 'Radka', 'Radmila', 'Radomír', 'Radoslav', 'Radovan', 'Raven', 'Radu', 'Rafael', 'Regína', 'Renáta', 'René', 'Restituta', 'Richard', 'Rita', 'Robert', 'Roberta', 'Robin', 'Rodan', 'Roderik', 'Roland', 'Roman', 'Romana', 'Ronald', 'Rosalinda', 'Rostislav', 'Rozálie', 'Rudolf', 'Rút', 'Růžena', 'Řehoř', 'Řeřich', 'Saaba (Sába)', 'Sabina', 'Salome', 'Sally', 'Samir', 'Samuel', 'Sandra', 'Sante', 'Sára', 'Saskie', 'Sáva', 'Sebastian', 'Sergei', 'Servác', 'Seth', 'Silvestr', 'Silva', 'Silvia', 'Silvie', 'Simon', 'Simona', 'Slavěna', 'Slavomír', 'Soběslav', 'Soběslava', 'Sofie', 'Soňa', 'Sorin', 'Spytihněv', 'Stanislav', 'Stanislava', 'Stela', 'Stelian', 'Strachota', 'Svatava', 'Svatopluk', 'Svatoslav', 'Světlana', 'Sven', 'Sylva', 'Sylvie', 'Šárka', 'Šarlota', 'Šimon', 'Štefan', 'Šťáhlav', 'Štěpán', 'Štěpánka', 'Šimona', 'Tadeáš', 'Talip', 'Tamara', 'Tara', 'Tarsicius', 'Taťána', 'Tea', 'Teodor', 'Tereza', 'Terezie', 'Tibor', 'Tobias', 'Tomáš', 'Toni', 'Trina', 'Tristan', 'Tomáška', 'Udo', 'Ulrika', 'Ulrich', 'Uma', 'Urban', 'Uršula', 'Uvo', 'Václav', 'Vadim', 'Valdemar', 'Valentýn', 'Valentýna', 'Valerie', 'Vanda', 'Vanesa', 'Vavřinec', 'Věnceslav', 'Vendelín', 'Vendula', 'Věra', 'Veronika', 'Věroslav', 'Viktor', 'Viktorie', 'Vili', 'Vilém', 'Vilma', 'Vilemína', 'Vincenc', 'Viola', 'Violka', 'Vít', 'Vítězslav', 'Vlad', 'Vladan', 'Vladěna', 'Vladimír', 'Vladimíra', 'Vladislav', 'Vladivoj', 'Vlasta', 'Vlastimil', 'Vlastislav', 'Vnislav', 'Vojen', 'Vojtěch', 'Voršila', 'Vratislav', 'Vsevolod', 'Vanessa', 'Václava', 'Waldemar', 'Walter', 'William', 'Willow', 'Werner', 'Wolfgang', 'Wolfram', 'Xaver', 'Xaverie', 'Xaverius', 'Xena', 'Xenie', 'Yveta', 'Yva', 'Yvana', 'Yvan', 'Záboj', 'Zachar', 'Zachariáš', 'Záviš', 'Zbislav', 'Zbyhněv', 'Zbyhněva', 'Zbyněk', 'Zbyňka', 'Zbyslav', 'Zbyslava', 'Zbyšek', 'Zbyška', 'Zdena', 'Zdeněk', 'Zdenka', 'Zdeňka', 'Zderad', 'Zdeslav', 'Zdeslava', 'Zdík', 'Zdirad', 'Zdislav', 'Zdislava', 'Zeno', 'Zenobie', 'Zenon', 'Zikmund', 'Zina', 'Zinaida', 'Zita', 'Zlata', 'Zlatan', 'Zlatko', 'Zlatomír', 'Zlatomíra', 'Zlatuše', 'Zoe', 'Zoja', 'Zoltán', 'Zora', 'Zoran', 'Zoroslav', 'Zoroslava', 'Zosim', 'Zuzana', 'Zvonimír', 'Zvonimíra', 'Žakelína', 'Žakelina', 'Žaneta', 'Žarko', 'Ždan', 'Ždana', 'Želibor', 'Želimír', 'Želimíra', 'Želislav', 'Želislava', 'Želmír', 'Želmíra', 'Žibřid', 'Žitomír', 'Žitomíra', 'Žitoslav', 'Žitoslava', 'Živa', 'Živan', 'Živana', 'Žofie', 'Žukelína'];

function shuffleArray(array) {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(names)

let people = [];
let rounds = [];
let size = 3;
let groups = [];
let dragged = null;

class Group {
  constructor() {
    this._people = [];
  }
  get length() {
    return this._people.length;
  }
  forEach(callback, thisArg) {
    return this._people.forEach(callback, thisArg);
  }
  some(callback) {
    return this._people.some(callback);
  }
  includes(person) {
    return this._people.includes(person);
  }
}

class Person {
  constructor(number, name) {
    this.number = number;
    this.name = name;
    this._group = null;
    this.old_groups = [];
  }
  get group() {
    return this._group;
  }
  set group(newgroup) {
    if (this._group) this._group._people = this._group._people.filter(item => item != this);
    this._group = newgroup;
    this._group._people.push(this);
  }
  retire_group() {
    this.old_groups.push(this._group);
    this._group = null;
  }
  toString() {
    return `${this.number}: ${this.name}`;
  }
}

let meeting;
let met;
let bad;

function compute()
{
  meeting = {}
  met = {}
  bad = {}

  people.forEach(me => {
    bad[me.number] = 0;
    people.forEach(other => {
      if (me != other) {
        let pair = [me.number, other.number];
        meeting[pair] = me.group && me.group.includes(other) ? 1 : 0;
        met[pair] = me.old_groups.map(group => group.includes(other) ? 1 : 0).reduce((a, b) => a + b, 0);
        bad[me.number] = Math.max(bad[me.number], meeting[pair] ? meeting[pair] + met[pair] : 0);
      }
    })
  })
}

function submit_number_of_people() {
  let number = document.getElementById("number_of_people").value;

  for (let i = 0; i < number; i++) {
    people.push(new Person(i + 1, names[i]))
  }

  create_groups();
}

function create_groups() {
  groups = [];

  compute();

  let size_input = document.getElementById("size_of_group");
  if (size_input)
    size = size_input.value;

  people.forEach(person => {
    groups.forEach(group => {
      if (person && group.length < size) {
        if (!group.some(other => met[[person.number, other.number]] > 0)) {
          person.group = group;
          person = null;
        }
      }
    })
    if (person) {
      person.group = new Group();
      groups.push(person.group);
    }
  })
  groups.push(new Group());

  update();
}

function submit_round() {
  people.forEach(person => person.retire_group());
  rounds.push(groups);
  groups = [];

  create_groups();
}

function update() {
  let target = document.getElementById("content");
  target.innerHTML = "";

  compute();
  target.appendChild(renderRelation());
  target.appendChild(renderRound());
  //target.appendChild(renderPeople());
}

function E(etype, parent=null) {
  let element = document.createElement(etype);
  if (parent) parent.appendChild(element);

  return element;
}

function group_ondrop(newgroup) {
  dragged.group = newgroup;
  dragged = null;

  groups = groups.filter(group => group.length);
  groups.push(new Group());

  update();
}

function relationColor(row, col) {
  if (row == col)
    return "";

  let pair = [row, col];

  let now = meeting[pair];
  let before = met[pair];
  let total = now + before;

  if (now) {
    if (total > 2)
      return "orange";
    if (total > 1)
      return "red";
    return "lightgreen";
  }

  if (total > 1)
    return "brown";
  if (total == 1)
    return "darkgreen";

  return "lightgrey";
}

function personColor(person) {
  let b = bad[person.number];

  if (b > 1)
    return "red";
  if (b > 0)
    return "lightgreen";
  return "lightgrey";
}

function renderRound() {
  let target = E("div");
  E("div", target).innerHTML = `Kolo #${rounds.length + 1}`;
  E("div", target).innerHTML = `<input id="size_of_group" type="number" value="${size}"/>`;
  let gbutton = E("button", target);
  gbutton.innerHTML = 'Vytvořit skupiny automaticky';
  gbutton.onclick = create_groups;

  groups.forEach((group, idx) => {
    let group_html = E("div", target);
    let span = E("span", group_html);
    span.style.display = "inline-flex";
    span.innerHTML = `Skupina #${idx + 1}: `;
    span.style.width = "8em";
    span.style.padding = "4px";
    span.style.margin = "8px 4px";
    group_html.ondragover = event => {
      return false;
    }
    let dropentercount = 0;
    group_html.ondragenter = event => {
      dropentercount++;
      group_html.style.backgroundColor = "lightgrey";
    }
    group_html.ondragleave = event => {
      if (--dropentercount == 0)
        group_html.style.backgroundColor = "";
    }
    group_html.ondrop = event => group_ondrop(group);
    group.forEach(person => {
      let person_html = E("span", group_html);
      person_html.innerHTML = person;
      person_html.draggable = true;
      person_html.ondragstart = event => {
        dragged = person;
      }
      person_html.ondragend = event => {
        dragged = null;
      }
      person_html.style.display = "inline-flex";
      person_html.style.width = "8em";
      person_html.style.padding = "4px";
      person_html.style.margin = "8px 4px";
      person_html.style.backgroundColor = personColor(person);
    })
  });
  let button = E("Button", target);
  button.innerHTML = "Uzavřít kolo";
  button.onclick = submit_round;

  return target;
}

function renderPeople() {
  let table = document.createElement("table");

  people.forEach(person => {
    let tr = document.createElement("tr");

    tr.innerHTML = `<td>${person.number}</td><td>${person.name}</td>`;

    table.appendChild(tr);
  })

  return table;
}

function renderRelation() {
  let table = E("table")

  for (let row = 1; row < people.length + 1; row++) {
    let tr = E("tr", table);
    for (let col = 1; col < people.length + 1; col++) {
      let td = E("td", tr);
      td.style.backgroundColor = relationColor(row, col);
      td.style.width = "20px";
      td.style.height = "20px";
    }
  }

  return table;
}

