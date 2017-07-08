var drinks = [];
drinks.a = "Apple";
drinks.b = "Bread";
drinks.c = "Cactus";
drinks.d = "Door Fabric";
drinks.e = "Egg";
drinks.f = "Freshest Flowers";
drinks.g = "Grass";
drinks.h = "Haggis";
drinks.i = "Ink (Squid)";
drinks.j = "Jambalaya";
drinks.k = "Kidney Beans";
drinks.l = "Lo Mein";
drinks.m = "Mackerel";
drinks.n = "Nails";
drinks.o = "Okra";
drinks.p = "Parsnip";
drinks.q = "Quinoa";
drinks.r = "Raw Bamboo";
drinks.s = "Salt";
drinks.t = "Tobasco";
drinks.u = "Um Bongo";
drinks.v = "Vinegar";
drinks.w = "Wood Shavings";
drinks.x = "Xylitol";
drinks.y = "Yams";
drinks.z = "Zucchini";


$(document).ready(function(){

	if(window.location.hash) {
	  var hash = window.location.hash.replace('#', '');

	  $('#drink-name').val(hash);
	  getDrink();
	}

	$('#get-drink').click(function(e) {
		e.preventDefault();
		window.location.hash = $('#drink-name').val();

		getDrink();
	});

	$('#name-input').submit(function(e) {
		e.preventDefault();
		window.location.hash = $('#drink-name').val();

		getDrink();
	});

	function getDrink() {
		var name = $('#drink-name').val();
		if (name.match(/[^a-zA-Z ]/g)) {
			name = name.replace(/[^a-zA-Z ]/g, '');
		}

		$('.twitter-share').attr('href', 'https://twitter.com/intent/tweet?text=I created my %23bonanzacoffee, what\'s yours?&url=http://code.robblewis.me/bonanzacoffee/%23'+name);
		
		name = name.toLowerCase();
		name = name.split('');
		var drink = [];

		for (var i = 0; i < name.length; i++) {
			letter = name[i];
			drink.push(drinks[letter]);
		}

		$('.wrapper-input').slideUp();

		name = name.join('');

		$output = $('.wrapper-output');
		$output.find('h2 span').empty().append(name);
		$output.find('.drink-output').empty().append(drink.join('<br>'));
		$output.show().slideDown();
	}

	$('.another').click(function(e) {
		e.preventDefault();
		$('.wrapper-output').slideUp();
		$('.wrapper-input').slideDown();
		$('.wrapper-input').find('input').val('');

	});

});