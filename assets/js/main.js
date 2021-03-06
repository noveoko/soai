Vue.component('random-book',{
template:`<div>A random Book!</div>`

})

const vm = new Vue({
  el:"#app",
  data:{
    info:{
      scroll:0
    },
    links:{
      twitter:'https://twitter.com/soaiworld',
      youtube:'https://www.youtube.com/c/SchoolofAI',
      linkedin:'https://www.linkedin.com/company/18747123/',
      facebook:'https://www.facebook.com/SchoolOfAIOfficial/',
      github:'https://github.com/soaiworld',
      instagram:'https://www.instagram.com/soaiworld/',
      slack:'http://bit.ly/2PblklZ'
  },
  external_links:{
"Machine Learning":[{title:"100 Page Machine Learning Book",data:{
    author: "https://www.linkedin.com/in/andriyburkov/?originalSubdomain=ca",
    site: "http://themlbook.com/",
    free: "http://themlbook.com/wiki/doku.php"}}],
  "Deep Learning":[{title:"Introduction to Deep Learning",data:{
    author: "https://mit.edu",
    site: "http://introtodeeplearning.com/"}}],
  "Software Development":[{title:"97 Things Every Programmer Should Know (extended)",data:{
    author: "https://leanpub.com/u/shirishpadalkar",
    site: "https://leanpub.com/97-Things-Every-Programmer-Should-Know-Extended"}}],
  "Cryptography":[{title:"A Graduate Course in Applied Cryptography",data:{
    author: "https://crypto.stanford.edu/~dabo/",
    site: "https://toc.cryptobook.us/"}}]
  },
  stats:{twitter:7808,instagram:5211,facebook:2880,linkedin:36198,youtube:610,slack:1425,googleSearch:54},
    book:null,
    youtube:null,
    mltopic:null,
    appidea:null
  },
  created: function (){
    console.log("App is powered by Vue");
    window.addEventListener('scroll', this.updateScroll);
    this.info.docHeight = document.body.clientHeight;
  },
  destroyed:function(){
    window.removeEventListener('scroll', this.updateScroll);
  },
  computed:{
    colorChange:function(){
      let scrollValue = Math.floor(this.info.scroll);
      let docHeight = this.info.docHeight;
      let remainder = docHeight-Math.abs(scrollValue)
      let percent = Math.floor((remainder/docHeight)*100)
      console.log(percent)
      if (percent >=0 && percent <=100){
        return `color: hsl(0, 100%, ${percent}%)`
      }else{return `color: hsl(0, 100%, 100%)`}
    },
    getLinks:function(){
      console.log(this.extlinks)
      return this.extlinks;
    },
    aBook:function(){
      console.log(this.book)
      return this.book
    },
    aYoutube:function(){
      console.log(this.youtube)
      return this.youtube;
    },
    aML:function(){
      return this.mltopic;
    },
    anAppIdea:function(){
      return this.appidea
    }
  },
  methods:{
    updateScroll:function(){
      this.info.scroll = document.body.getBoundingClientRect().top
      console.log("SCROLLING...")
    },
    openURL:function(url) {
      console.log("Opening URL", url)
      window.open(url, '_blank');
    },
    getBook:() => {
      let randbook;
      try {
        randbook = randomBook();
        vm.book = randbook;
      }
      catch (error) { console.error(error); }
    },
    getYoutube:function(){
      let yt
      try{yt = randomYoutube()
        vm.youtube = yt
    }catch(error){console.log(error)}
  },
  getML:function(){
    let randML
    try{randML = randomML()
      vm.mltopic = randML
    }
    catch(error){console.error(error)}
  },
  getAppIdea:function(){
    let randomApp
    try{randomApp = appIdea()
      vm.appidea = randomApp
    }
    catch(error){console.error(error)}
  }
  }
    
})
/**
* Template Name: Vesperr - v3.0.0
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 15;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

