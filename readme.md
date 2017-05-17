# Sytylizowany komponent select 
### Zadanie rekrutacyjne na stanowisko "Staż w Zespole Design Lab (Frontend Developer), obszar Marketing" w Allegro

Normalnie elementu select nie można oscylować za pomocą CSS, aby to zrobić należy stworzyć za pomocą JS zwykłą listę `ul`
do której trzeba dodać elementy `li` i tekst z `option`.

**Uruchomienie komponentu na stronie:**
1. Do diva w którym ma być umieszczony komponent należy dodać poniższy kod:

```html
<select id="selectOld">
  <option selected>Miesiąc</option> 
  <option>Styczeń</option> 
  <option>Luty</option> 
  <option>Marzec</option> 
  <option>Kwiecień</option> 
  <option>Maj</option> 
  <option>Czerwiec</option> 
  <option>Lipiec</option> 
  <option>Sierpień</option> 
  <option>Wrzesień</option> 
  <option>Październik</option> 
  <option>Listopad</option> 
  <option>Grudzień</option> 
</select>

<div id="select">
  <strong>
    <span id="choose">Miesiąc</span>
    <i class="material-icons close-open">keyboard_arrow_down</i>
  </strong>
</div>
```
Wartości pól `option` można zastąpić dowolnym tekstem np. dniami tygodnia. Skrypt JavaScript odczyta te wartości 
oraz ich ilość i stworzy odpowiednią ilość elementów `li` w liscie `ul`, która zostanie utworzona w `div#select` przed `strong`.

2. Do strony należy podpiąć plik CSS i JS.
3. I gotowe można teraz cieszyć się dobrze wyglądającym elementem select oraz łatwo go stylizować.

![screenshot 2017-05-16 21-36-59](https://cloud.githubusercontent.com/assets/20646753/26124734/d68d4798-3a7f-11e7-87f1-215038aa0afe.jpg)
