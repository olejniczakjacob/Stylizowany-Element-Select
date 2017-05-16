/*
	Autor: Jakub Olejniczak
	Website: http://jakub-olejniczak.pl
	Github: https://github.com/olejniczakjacob
	Linkedin: https://www.linkedin.com/in/olejniczakjacob
*/
document.addEventListener("DOMContentLoaded", function(){

	var div = document.querySelector('#select'); // dodanie do zmiennej diva z lista rozwijana
	var close = document.querySelector('.close-open'); // dodanie do zmiennej buttona (strzałki) do zwijania i rozwijania listy

	var ul = document.createElement("ul"); //utworzenie listy rozwijanej ul

	var select = document.querySelector("#selectOld"); // dodanie do zmiennej starego selecta
	var elements = select.options; // zapisanie w tablicy elementów selecta

   	div.insertBefore(ul, div.childNodes[0]); //dodanie ul przed pierwsze dziecko diva #select

  	for(var i = 0, len = elements.length; i < len; i++ ){

  		var li = document.createElement("li"); //stworzenie li
  		var txt = document.createTextNode(elements[i].text); //odczytanie tekstu z danego elementu option

		ul.appendChild(li); //dodanie li do ul
		li.appendChild(txt); //dodanie tekstu do danego li

  		if(elements[i].selected){	
    		li.classList.add('active');
  		} // dodanie klasy active do aktywnego elementu li

		li.addEventListener("click", function(){
			choose(this);
		}); //uruchomienie funkcji odpowiedzialnej za wybranie kliknietego elementu
  	}

  	function choose(element){
  		var lista = element.parentNode.getElementsByTagName('li'); 
		for (var i = 0, len = lista.length; i < len; i++){ 
		    if (lista[i] != element){ 
		    	lista[i].classList.remove('active');
			} else{ 
		    	lista[i].classList.add('active');
    			select.selectedIndex = i;
		    } 
		}
  		document.querySelector('#choose').textContent = document.querySelector('li.active').textContent; //dodanie do diva #choose nazwe wybranego miesiaca
  	} // zmiana aktywnego li w nowym #select

  	document.querySelector('#choose').textContent = document.querySelector('li.active').textContent;

	if (select.hasAttribute("disabled")) {
		div.setAttribute('disabled','');
	} //dodanie do nowego #select atrybutu disabled jesli stary select jest zablokowany

	ul.addEventListener("click", function(event){
		event.stopPropagation();
		clickBg();
	}); 

	close.addEventListener("click", function(event){
		event.stopPropagation();
		clickBg();
	});

	function clickBg(){
		var disabled = div.hasAttribute("disabled");	
		if(!disabled){
			if(ul.className == ''){
				ul.classList.add("open");
				document.addEventListener("click", function(event){
					event.stopPropagation();
					var month = ul.firstChild;
					if(month.className == 'active'){
						div.classList.add("warn");
					}
					ul.classList.remove("open");
				});	
			} else{
				lol();
			}
		}
	} //funkcja dodajaca klase open do ul po klikniecu w #select

	function lol(){
		var month = ul.firstChild;
		if(month.className == 'active'){
			div.classList.remove("success");
			div.classList.add("warn");
		} else{
			div.classList.remove("warn");
			div.classList.add("success");
		}
		ul.classList.remove("open");
	} //funkcja dodajaca klasy success lub warn do #select


/////////////////////////////////////////////////////////////////////////////////////////////////

		// przycisk blokujacy selecta

		var buttonn = document.querySelector('#button'); 

		buttonn.addEventListener("click", function(){
			block();
		}); 

		function block(){

			var disabled1 = document.querySelector('#select').hasAttribute("disabled");
			var disabled2 = document.querySelector('#selectOld').hasAttribute("disabled");

			if(disabled1 == false && disabled2 == false){
				document.querySelector('#select').setAttribute('disabled','');
				document.querySelector('#selectOld').setAttribute('disabled','');
			} else{
				document.querySelector('#select').removeAttribute('disabled','');
				document.querySelector('#selectOld').removeAttribute('disabled','');
			}
		}
});