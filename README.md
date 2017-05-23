# Browser Technologies - Minor Webdevelopment 2017 - Herkansing

Nooroel Imamdi | 500706701

## Algemeen
In de minor Web Development 2017 is in het tweede blok het vak Browser Technologies aan bod gekomen. In dit vak wordt aangeleerd hoe je goede, robuuste, toegankelijke websites maakt. Je gaat leren over Progressive Enhancement, Feature Detection en Fallback. Motto: ‘Het web is voor iedereen!’

## Opdracht
Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen. Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement. Gebruik als enhanced feature een (hippe, innovatieve, vooruitstrevende) Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.

## User case
Een aantal user cases zijn van te voren aangeboden door de docenten van dit vak. De user case die ik zal uitwerken luidt als volgt:

> ‘Ik wil boodschappen-om-tostis-te-maken in mijn boodschappenlijstje kunnen gooien’.

## Core functionality
De basis functionaliteit is dat de gebruiker een lijstje kan maken van alles dat er nodig is om tostis te maken.

## Stappenplan

De applicatie wordt in de volgende etappes opgebouwd
- `HTML` (basislaag)
- `CSS`
- `JavaScript`

### Wat heb ik nodig om deze toepassing tot stand te brengen?
- `form`-elementen waarmee een formulier wordt aangemaakt
- `input`-elementen waar de gebruiker een keuze kan maken of invoeren
- `img`-elementen waarmee ingrediënten geïllustreerd kunnen worden.
- `express` is een web applicatie framework die server-side draait.
- `body-parser` om het formulier binnen `node.js` te verwerken.
- `ejs` wordt gebruikt als template-engine.
- `drag and drop` waarmee elementen op de pagina d.m.v. slepen verplaats kunnen worden.

### HTML

#### `div` versus `html5`-elementen
Met de komst van de `html5`-elementen is het mogelijk om een html-opmaak steeds vaker te voorzien van semantische codering. De vraag die binnen dit vak luidt is echter:

> In hoeverre wordt dit ondersteund door oudere webbrowsers?

##### Oplossing #1: Definieer sematische elementen als block-elementen
HTML5 heeft in totaal acht nieuwe semantische elementen geïntroduceerd, waarvan allen **block-elementen**. Om deze elementen op te vangen in oudere browsers, kunnen deze elementen binnen deze browsers opgevangen worden door **block-elementen** hiervan te maken.

Zie voorbeeld hieronder:
```
header, section, footer, aside, nav, main, article, figure {
    display: block;
}
```

In Internet Explorer 8 komen we echter het volgende probleem op het spoor:

> However, IE8 (and earlier) does not allow styling of unknown elements!

[HTML5 Browser Support, W3Schools](https://www.w3schools.com/html/html5_browsers.asp)

##### Oplossing #2: Just `div`

Om deze reden heb ik ervoor gekozen om het `div`-element te gebruiken, in plaats van de nieuwe semantische HTML5-elementen. Het `div`-element wordt namelijk wél ondersteund in oudere webbrowsers én Internet Explorer.

### JavaScript

## Features
- Drag and drop ingrediënten
- Ingrediënten toevoegen d.m.v. button
- Boodschappenlijstje leegmaken

### Drag and Drop ingrediënten
![Support Drag and Drop](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/draganddropsupport.png?raw=true)

> Drag and drop wordt door `42.11%` van de browsers ondersteund.

De volgende browser ondersteunen *Drag and Drop* **niet**:
- iOS Safari
- Opera Mini
- Android Browser
- Chrome for Android

In Microsoft Internet Explorer en Microsoft Edge wordt deze feature in de meest recente browsers **gedeeltelijk** ondersteund.

#### Fallback
De fallback voor *Drag and Drop* is het `input`-element waarmee de gebruikers, die niet de mogelijkheid hebben tot *Drag and Drop*, alsnog de *core-functionaliteit* kunnen uitvoeren, namelijk het toevoegen van een ingrediënt aan het boodschappenlijstje door op een button te klikken.

Aangezien dit `server-side` wordt afgehandeld, is deze fallback ook operationeel indien de gebruiker niet beschikt over `JavaScript`.

### Ingrediënten toevoegen d.m.v. button
Naast de *drag and drop*-methode is het ook mogelijk om je lijstje aan te vullen door op de knop met daarop het gewenste product te klikken. Zoals hierboven wordt beschreven, functioneert dit ook als fallback voor de *drag and drop*-optie.

### Boodschappenlijstje leegmaken
Het leegmaken van het boodschappenlijstje wordt eveneens afgehandeld middels `server-side`. Hierdoor wordt deze feature ook ondersteund indien er geen `JavaScript` beschikbaar is.

## Progressive Enhancement
De `HTML` is de basislaag van de website. Hierin wordt de structuur beschreven waarbinnen de content zich bevindt. Hetgeen na deze basislaag komt is een extra laag, oftewel een enhancement: verrijkingen van de basislaag.

Zoals eerder stond beschreven is de *core functionality*:

> Ik wil boodschappen-om-tostis-te-maken in mijn boodschappenlijstje kunnen gooien

### HTML
![HTML only](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/htmlonly.png?raw=true)

Als er slechts sprake is van HTML, dan is de bovenstaande afbeelding het resultaat:

- Uitleg wordt getoond
- Afbeeldingen worden getoond
- Gebruiker kan middels de knoppen (`input`-elementen) items toevoegen

### CSS
![HTML en CSS](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/html-css.png?raw=true)

Als CSS beschikbaar is, dan is de bovenstaande afbeelding het resultaat:

- Gebruiker krijgt opgemaakte interface te zien
- Er wordt een onderscheid gemaakt tussen boodschappenlijst en items
- Door middel van buttons wordt duidelijk welke items toegevoegd kunnen worden
- De knop 'leegmaken' is duidelijk vormgegeven

### JS
In het geval van JavaScript zijn er twee gevallen beschikbaar:

- Met draggable
- Zonder draggable

![JavaScript zonder Draggable](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/js-without-draggable.png?raw=true)

![JavaScript met Draggable](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/js-with-draggable.png?raw=true)

Indien de optie `draggable` beschikbaar is in de browser van de gebruiker, dan verschijnt de tekst:

> Selecteer of sleep een item naar het boodschappenlijstje

Indien dat niet het geval is, dan wordt de volgende tekst getoond:

> Selecteer een item

#### Feature detection & Fallback
De werking van deze melding wordt op de volgende wijze in gang gezet binnen JavaScript.

```
if('classList' || 'draggable') {
	onlySelect.classList.add('hide');
	dragandropAvailable.classList.remove('hide');
	cursorMove.classList.add('cursor');
}
```
Aangezien `classList` ook niet in alle browsers beschikbaar is, wordt er een `if`-statement gemaakt met een ` logical operators`. Hierbij worden, in het geval `classList` én `draggable` beschikbaar zijn, de volgende zaken uitgevoerd:

- De gebruiker krijgt de instructies dat slepen ook mogelijk door een toggle tussen twee `p`-elementen.
- De `cursor`-class wordt toegepast op de afbeeldingen, zodat de gebruiker bij een hover over de `img` de indicatie krijgt dat slepen ook mogelijk is.


### Devices & Browsers (Devicelab)
De app is doorlopen en getest op verschillende devices. Hieronder volgt een overzicht de tests.

#### MacBook (Desktop)

##### Google Chrome
![Google Chrome - lege lijst](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/macbook-googlechrome.png?raw=true)

![Google Chrome - lijst](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/macbook-googlechrome-list.png?raw=true)

##### Safari
![Safari - lege lijst](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/macbook-safari.png?raw=true)

![Safari - lijst ](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/macbook-safari-list.png?raw=true)

##### Firefox
![Firefox - lege lijst](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/macbook-firefox.png?raw=true)

![Firefox - lijst ](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/macbook-firefox-list.png?raw=true)

**Werking**
De browsers *Google Chrome*, *Safari* en *Firefox* ondersteunen allen de *drag and drop*-optie. Bovendien is het ook mogelijk om middels de `input`-buttons de lijst in te vullen. Ook is het in deze browsers mogelijk om het lijstje weer leeg te maken.


#### Windows 7

##### Internet Explorer 8
![Internet Explorer 8 - lege lijst](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/win7-internetexplorer8.png?raw=true)

![Internet Explorer 8 - lijst ](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/win7-internetexplorer8-list.png?raw=true)

**Werking**
Op Internet Explorer 8 wordt de *drag and drop*-optie niet ondersteund. De fallback, de `input`-button, werkt optimaal en maakt het mogelijk om de core functionality uit te blijven voeren in *IE8*. Bovendien is het in *IE8* mogelijk om de lijst leeg te maken.


#### Samsung S7

##### Google Chrome
![Google Chrome - lege lijst](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/samsungs7-chrome.jpeg?raw=true)

![Google Chrome - lijst lijst](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/samsungs7-chrome-list.jpeg?raw=true)

##### Samung Internetbrowser
![Samsung Internetbrowser - lege lijst](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/samsungs7-samsungbrowser.jpeg?raw=true)

![Samsung Internetbrowser - lijst lijst](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/samsungs7-samsungbrowser-list.jpeg?raw=true)

**Werking**
Bij zowel de *Google Chrome*- als de *Samsung Internet*-browser kan het boodschappenlijstje gevuld worden middels de `input`-velden. De *Drag and drop* werkt niet in deze browser op deze device. Verder kan je gebruiker het boodschappenlijstje legen middels de `input`-knop *lijstje leegmaken*.


### HTC Nexus
![iPad mini](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/htc-nexus.jpg?raw=true)

**Werking**
Het boodschappenlijstje kan gevuld worden middels de `input`-velden. De *Drag and drop* werkt niet op deze device. Verder kan je gebruiker het boodschappenlijstje legen middels de `input`-knop *lijstje leegmaken*.


### iPad mini
![iPad mini](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/ipadmini.jpg?raw=true)

**Werking**
Het boodschappenlijstje kan gevuld worden middels de `input`-velden. De *Drag and drop* werkt niet op deze device. Verder kan je gebruiker het boodschappenlijstje legen middels de `input`-knop *lijstje leegmaken*.


### iPad Touch
![iPad touch](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/ipodtouch.jpg?raw=true)

**Werking**
Het boodschappenlijstje kan gevuld worden middels de `input`-velden. De *Drag and drop* werkt niet op deze device. Verder kan je gebruiker het boodschappenlijstje legen middels de `input`-knop *lijstje leegmaken*.


### Kindle
![Kindle](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/kindle.jpg?raw=true)

**Werking**
Het boodschappenlijstje kan gevuld worden middels de `input`-velden. De *Drag and drop* werkt niet op deze device. Verder kan je gebruiker het boodschappenlijstje legen middels de `input`-knop *lijstje leegmaken*.


### Nokia
![Nokia](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/nokia.jpg?raw=true)

**Werking**
Het boodschappenlijstje kan gevuld worden middels de `input`-velden. De *Drag and drop* werkt niet op deze device. Verder kan je gebruiker het boodschappenlijstje legen middels de `input`-knop *lijstje leegmaken*.


### OP Phone
![Op](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/op.jpg?raw=true)

**Werking**
Het boodschappenlijstje kan gevuld worden middels de `input`-velden. De *Drag and drop* werkt niet op deze device. Verder kan je gebruiker het boodschappenlijstje legen middels de `input`-knop *lijstje leegmaken*.


### Samsung Note 3
![Samsung Note 3](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/samsungnote3.jpg?raw=true)

**Werking**
Het boodschappenlijstje kan gevuld worden middels de `input`-velden. De *Drag and drop* werkt niet op deze device. Verder kan je gebruiker het boodschappenlijstje legen middels de `input`-knop *lijstje leegmaken*.


### Windows Tablet
![Windows Tablet](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/windows-tablet.jpg?raw=true)

**Werking**
Het boodschappenlijstje kan gevuld worden middels de `input`-velden. De *Drag and drop* werkt niet op deze device. Verder kan je gebruiker het boodschappenlijstje legen middels de `input`-knop *lijstje leegmaken*.


### Afbeeldingen
Alle afbeeldingen beschikken over een `alt`-tag, waardoor niet geladen afbeeldingen alsnog kunnen aantonen wat de functie van de betreffende afbeelding is.

### Kleur
De kleuren en contrasten zijn getest met de tool *Sim Daltonism*. Hieronder volgt een overzicht.

![Sim Daltonism - Normal view](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/simdaltonism-color-normalview.png?raw=true)
*Sim Daltonism - Normal view*

![Sim Daltonism - Deuternomaly](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/simdaltonism-color-deuteranomaly.png?raw=true)
*Sim Daltonism - Deuternomaly*

![Sim Daltonism - Deuteranopia](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/simdaltonism-color-deuteranopia.png?raw=true)
*Sim Daltonism - Deuteranopia*

![Sim Daltonism - Monochromacy](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/simdaltonism-color-monochromacy.png?raw=true)
*Sim Daltonism - Monochromacy*

![Sim Daltonism - Partial Monochromacy](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/simdaltonism-color-partialmonochromacy.png?raw=true)
*Sim Daltonism - Partial Monochromacy*

![Sim Daltonism - Protanomaly](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/simdaltonism-color-protanomaly.png?raw=true)
*Sim Daltonism - Protanomaly*

![Sim Daltonism - Protanopia](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/simdaltonism-color-protanopia.png?raw=true)
*Sim Daltonism - Protanopia*

![Sim Daltonism - Tritanomaly](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/simdaltonism-color-tritanomaly.png?raw=true)
*Sim Daltonism - Tritanomaly*

![Sim Daltonism - Pritanopia](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/simdaltonism-color-tritanopia.png?raw=true)
*Sim Daltonism - Tritanopia*

## Installatie

### Clone deze repo
```
git clone https://github.com/nooroel-imamdi/browser-technologies-her
cd browser-technologies-her
```

### node_modules

#### dependencies
```
"body-parser": "^1.17.1",
"ejs": "^2.5.6",
"express": "^4.15.2",
"ngrok": "^2.2.9"
```

#### devDependencies
```
"nodemon": "^1.11.0"
```

### Installeer de 'dependencies'
```
npm install
```

## Start server
Bij het uitvoeren van de onderstaande command, wordt de app opgestart.

```
nodemon
```

App is nu bereikbaar via `localhost:7000`

## Sources
- Icons made by [Freepik](http://www.flaticon.com/authors/freepik) from [Flaticon](www.flaticon.com)
- [HTML5 Drag and Drop, W3Schools](https://www.w3schools.com/html/html5_draganddrop.asp)
- [MDN - Dragstart](https://developer.mozilla.org/en-US/docs/Web/Events/dragstart)
- [HTML5 Browser Support, W3Schools](https://www.w3schools.com/html/html5_browsers.asp)
- [Can I use](https://caniuse.com/)
