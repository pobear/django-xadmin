/**
 * Created by pobear on 16/4/1.
 */
;(function($) {
  //dropdown submenu plugin
  $(document)
    .on('click.xa.dropdown.data-api touchstart.xa.dropdown.data-api', '.dropdown-submenu', function (e) { e.stopPropagation(); })
    .on('click.xa.dropdown.data-api', function(e){
      $('.dropdown-submenu.open').removeClass('open');
    });

  if ('ontouchstart' in document.documentElement) {
    $('.dropdown-submenu a').on('click.xa.dropdown.data-api', function(e){
      $(this).parent().toggleClass('open');
    });
  } else{
    $('.dropdown-submenu').on('click.xa.dropdown.data-api mouseover.xa.dropdown.data-api', function(e){
      $(this).parent().find('>.dropdown-submenu.open').removeClass('open');
      $(this).addClass('open');
    });
  }

  //toggle class button
  $('body').on('click.xa.togglebtn.data-api', '[data-toggle=class]', function (e) {
    var $this  = $(this), href;
    var target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7
    var className = $this.attr('data-class-name');
    $(target).toggleClass(className)
  });

  // loading btn
  // $('.btn.btn-loading,.btn[type=submit]')
  //   .click(function () {
  //     var btn = $(this)
  //     btn.button('loading')
  //   })

  //.nav-content bar nav-menu
  $('.navbar-xs .navbar-nav > li')
    .on('shown.bs.dropdown', function(e){
      $(this).find('>.dropdown-menu').css('max-height', $(window).height()-120);
      $(this).parent().find('>li').addClass('hidden-xs');
      $(this).removeClass('hidden-xs');
    })
    .on('hidden.bs.dropdown', function(e){
      $(this).parent().find('>li').removeClass('hidden-xs');
    });

  // dashboard widget
  $('.widget-form').each(function(e){
    var el = $(this);
    el.find('.btn-remove').click(function(){
      el.find('input[name=_delete]').val('on');
      return true;
    });
  });

  // g-search
  $('#g-search').find('.dropdown-menu a').click(function(){
      $('#g-search').attr('action', $(this).data('action')).submit();
  });

  $(function() {
    $('.exform:not(.rended)').exform();
  });
})(jQuery);
