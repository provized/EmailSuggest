(function($) {

    $.fn.emailsuggest = function(options) {

        var p = $(this);

        this.on('change keyup copy paste cut', function(e) {
            if (e.keyCode !== 40 && e.keyCode !== 38 && e.keyCode !== 13) {
                if (p.val().length > 0) {
                    var perf_emails = {};
                    var setemails = $(this).val().replace(/\s/g, '').split(",");
                    $.each(setemails, function(a, b) {
                        if(a+1 === setemails.length){
                            $.each(options.emails, function(index, value) {
                                if (value.toLowerCase().search(b.toLowerCase()) !== -1) {
                                    perf_emails[value] = value;
                                }
                            });
                            $.each(options.names, function(index, contacts) {
                                $.each(contacts, function(index, contact) {
                                    if (index.toLowerCase().search(b.toLowerCase()) !== -1 || contact.toLowerCase().search(b.toLowerCase()) !== -1) {
                                        perf_emails[index] = contact;
                                    }
                                })
                            });
                        }
                    });
                    if (p.next().is('.es_list')) {
                        p.next('.es_list').html('');
                    } else {
                        p.after('<div class="es_list"></div>');
                    }
                    $.each(perf_emails, function(a, b) {
                        p.next('.es_list').append('<div>' + a + ' <span>' + b + '</span></div>').children('div:nth-child(1)').addClass('on');
                    });
                } else {
                    p.next('.es_list').remove();
                }
            } else if (e.keyCode === 13) {
                e.preventDefault();
                if (p.next().is('.es_list')) {
                    var v = p.val();
                    if (p.next('.es_list').children().length === 1) {
                        if(v.search(',') !== -1){
                            p.val(v.substr(0, v.lastIndexOf(",")) + ', ' + p.next('.es_list').children('div').children('span').html());
                        } else {
                            p.val(p.next('.es_list').children('div').children('span').html());
                        }
                    } else {
                        if(p.next('.es_list').children('.on')){
                            if(v.search(',') !== -1){
                                p.val(v.substr(0, v.lastIndexOf(",")) + ', ' + p.next('.es_list').children('.on').children('span').html());
                            } else {
                                p.val(p.next('.es_list').children('.on').children('span').html());
                            }
                        }
                    }
                    p.focus();
                    p.next('.es_list').remove();
                }
            } else if(e.keyCode === 40 || e.keyCode === 38){
                e.preventDefault();
                var i = p.next('.es_list').children('.on').index() >= 0 ? p.next('.es_list').children('.on').index()+1 : p.next('.es_list').children('.on').index();
                if(e.keyCode === 40){
                    p.next('.es_list').children('div:nth-child('+i+')').removeClass('on').next().addClass('on');
                } else if(e.keyCode === 38){
                    p.next('.es_list').children('div:nth-child('+i+')').removeClass('on').prev().addClass('on');
                }
            }
        });

    };

}(jQuery));