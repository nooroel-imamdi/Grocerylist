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

Aangezien dit `server-side` wordt afgehandeld, is deze fallback ook operationeel indien de gebruik niet beschikt over `JavaScript`.

### Boodschappenlijstje leegmaken
Het leegmaken van het boodschappenlijstje wordt eveneens afgehandeld middels `server-side`. Hierdoor wordt deze feature ook ondersteund indien er geen `JavaScript beschikbaar is.`

## Progressive Enhancement
De `HTML` is de basislaag van de website. Hierin wordt de structuur beschreven waarbinnen de content zich bevindt. Hetgeen na deze basislaag komt is een extra laag, oftewel een enhancement: verrijkingen van de basislaag.

Zoals eerder stond beschreven is de *core functionality*:

> Ik wil boodschappen-om-tostis-te-maken in mijn boodschappenlijstje kunnen gooien

### HTML
![HTML only](https://github.com/nooroel-imamdi/browser-technologies-her/blob/master/docs/htmlonly.png?raw=true)



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

## Sources
- Icons made by [Freepik](http://www.flaticon.com/authors/freepik) from [Flaticon](www.flaticon.com)
- [HTML5 Drag and Drop, W3Schools](https://www.w3schools.com/html/html5_draganddrop.asp)
- [MDN - Dragstart](https://developer.mozilla.org/en-US/docs/Web/Events/dragstart)
- [HTML5 Browser Support, W3Schools](https://www.w3schools.com/html/html5_browsers.asp)
- [Can I use](https://caniuse.com/)
