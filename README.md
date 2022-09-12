# React Shopping Cart:

## Aufgabe
Mit Hilfe von React soll ein kleines Shopsystem ala Amazon gebaut werden. Es soll möglich sein, verschiedene Artikel aus einer großen Liste auf der Startseite anzuschauen und auf einer Detailseite(z.B. neue Route oder ausklappbare Details auf der Startseite) anzuschauen und zusätzlich soll es möglich sein, Artikel über einen Button den Warenkorb hinzuzufügen.
Der Warenkorb soll immer ganz oben auf der Webseite angezeigt werden, welche Artikel der Benutzer aktuell im Warenkorb hat. Der Nutzer soll beim neu laden (F5, Reset) der Webseite seinen Warenkorb noch sehen über den localStorage!  
Die Artikel in dem Shop können selbständig überlegt werden und z.B. in einen Array gespeichert werden. Beachtet bitte alle wichtigen Informationen zu einem Artikel.   
Das Styling kann ebenfalls selbständig überlegt werden, **allerdings bitte zuerst die Funktionalität bauen.**


### Bonusaufgabe 1:
Der Warenkorb kann über ein Bestellformular "bestellt" werden und diese Bestelldaten (Warenkorb, Adresse, Vorname, Nachname, Bezahlmöglichkeit) sollen ebenfalls im localStorage gespeichert werden.  


### Bonusaufgabe 2:
Es soll auf der Startseite möglich sein, im Header nach Artikeln zu suchen über ein INPUT Feld, diese werden dann "gefiltert" z.B. über den Artikel Array.  

### Technische Tipps:
Benutzt einen Warenkorb Array und einen Aritkel Array im useContext. Grundsätzlich sollten vier Komponenten (App, ArticlePage, ArticleDetailPage, ShoppingCart) und der useContext ausreichen!  
Für die Speicherung im lokalen Storage (localStorage) benutzt gerne die Vanilla JavaScript localStorage hier: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage?retiredLocale=de  

### Technische Tipps Bonusaufgabe:
Speicherung von den Bestelldaten kann ebenfalls im useContext in einem Array geschrieben werden und danach in einer JSON Datei gepusht werden. Das Suchformular kann durch eine einfache Abfrage mit "include" des Artikelnamens aus dem Artikelarray mit "filter" benutzt werden und dann die ArticlePage damit dargestellt werden.*  


#Zeit: Restlicher Tag 05.09.22
