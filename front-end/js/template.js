/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function($){
	$(document).ready(function(){
	
		$(".banner-image").backstretch('images/banner.jpg');
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}
		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};


		// Isotope filters
		//-----------------------------------------------
		// if ($('.isotope-container').length>0) {
		// 	$(window).load(function() {
		// 		$('.isotope-container').fadeIn();
		// 		var $container = $('.isotope-container').isotope({
		// 			itemSelector: '.isotope-item',
		// 			layoutMode: 'masonry',
		// 			transitionDuration: '0.6s',
		// 			filter: "*"
		// 		});
		// 		// filter items on button click
		// 		$('.filters').on( 'click', 'ul.nav li a', function() {
		// 			var filterValue = $(this).attr('data-filter');
		// 			$(".filters").find("li.active").removeClass("active");
		// 			$(this).parent().addClass("active");
		// 			$container.isotope({ filter: filterValue });
		// 			return false;
		// 		});
		// 	});
		// };
		var filtragem="*"

		const quantosInicial={
			Total:8,
			Outros:4
		}

		function ColunasGrid(){
			return parseInt(window.screen.availWidth/300)
		}

		var quantosGlobal={
			Total:quantosInicial.Total,
			quantos:quantosInicial.Outros
		}
		filtrar('*',quantosInicial.Total,quantosInicial.Outros)

		$('.filters>ul>li>a').on( 'click', function() {
			filtragem=$(this).attr('data-filter');
			$(".filters").find("li.active").removeClass("active");
			$(this).parent().addClass("active");
			filtrar($(this).attr('data-filter'),quantosInicial.Total,quantosInicial.Outros)
			return false
		});


		$("#botao-aparecer").on( 'click', function() {
			filtrar(filtragem,quantosGlobal.Total+ColunasGrid(),quantosGlobal.Outros+ColunasGrid())
			return false
		})

		function filtrar(filtragem,Total,Outros){
			quantosGlobal={
				Total,
				Outros
			}
	        if (filtragem == '*') {
	            $('#todos-os-items-portfolio > div').addClass('desaparecer');

	            var lista_sumico=$('#todos-os-items-portfolio > div').splice(0,Total)

				for (var i = lista_sumico.length - 1; i >= 0; i--) {
					$(lista_sumico[i]).removeClass("desaparecer")
				}

	        } else {
	            var $el = $(filtragem)

	            $('#todos-os-items-portfolio > div').addClass('desaparecer');
	            var lista_sumico=$('#todos-os-items-portfolio > div').filter($el).splice(0,Outros)

				for (var i = lista_sumico.length - 1; i >= 0; i--) {
					$(lista_sumico[i]).removeClass("desaparecer")
				}
	        }
		}

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}		

		// var botao = $("#botao-aparecer");
		
		// botao.parent().append($("<p>"));
		// var paragrafo = botao.parent().find("p");
		// console.log(paragrafo[0])
		// var lista_filtragem = document.querySelector(".nav.nav-pills");
		// var itens_lista = lista_filtragem.querySelectorAll("li");

		// for (var i = itens_lista.length - 1; i >= 0; i--) {
		// 	itens_lista[i].addEventListener("click", function(event){

		// 		var atributo_box_filtragem = event.target.parentNode.getAttribute("data-filter");
		// 		paragrafo.removeClass();

		// 		paragrafo.addClass(atributo_box_filtragem.substring(1));
		// 		aparecer_modal(paragrafo.getAttribute("class"));
		// 	});
		// };

		// function aparecer_modal(classe){
		// 	if(classe == "*"){
		// 		clicar_botao("");
		// 	} else {
		// 		clicar_botao("." + classe);
		// 	}
		// }

		// function clicar_botao(valor){
		// 	lista_sumico = document.querySelectorAll(".desaparecer"+valor);

		// 	for (var i = lista_sumico.length - 1; i >= 0; i--) {
		// 		$(lista_sumico[i]).removeClass("desaparecer");
		// 		lista_sumico[i] = $('.isotope-container').isotope({
		// 			itemSelector: '.isotope-item',
		// 			layoutMode: 'masonry',
		// 			transitionDuration: '0.6s',
		// 			filter: "*"
		// 		});
		// 	};
		// }

	}); // End document ready
})(this.jQuery);



// var botao = $("#botao-aparecer");
// botao.click(function(){
// 	lista_sumico = document.querySelectorAll(".desaparecer");

// 	for (var i = lista_sumico.length - 1; i >= 0; i--) {
// 		$(lista_sumico[i]).removeClass("desaparecer");
// 		lista_sumico[i] = $('.isotope-container').isotope({
// 			itemSelector: '.isotope-item',
// 			layoutMode: 'masonry',
// 			transitionDuration: '0.6s',
// 			filter: "*"
// 		});
// 	};
// });