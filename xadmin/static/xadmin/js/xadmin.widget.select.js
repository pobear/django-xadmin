;(function($){
    // add select render
    $.fn.exform.renders.push(function(f){
      if($.fn.selectize){
        f.find('select:not(.select-search):not([multiple=multiple])').selectize();
        f.find('select.select-search').each(function(){
            var $el = $(this);
            //console.info($el);
            //console.info($el.data('search-url'));
            var preload = $el.hasClass('select-preload');
            $el.selectize({
                valueField: 'id',
                labelField: '__str__',
                searchField: '__str__',
                create: false,
                maxItems: 1,
                preload: preload,
                load: function(query, callback) {
                    if(!preload && !query.length) return callback();
                    $.ajax({
                        url: $el.data('search-url')+$el.data('choices'),
                        dataType: 'json',
                        data: {
                            '_q_' : query,
                            '_cols': 'id.__str__'
                        },
                        type: 'GET',
                        error: function() {
                            callback();
                        },
                        success: function(res) {
                            callback(res.objects);
                        }
                    });
                }
            });
        })
    }});
})(jQuery)

