require(['jquery', 'handlebars'], function($, handlebars) {
    var source = $('#tpl').html();
    var template = handlebars.compile(source);
    var context = {
        diannao: [{
            wode: '我的电脑'
        }],
        c: [{
            cc: 'c:'
        }],
        a: [{
            aa: 'a.txt'
        }],
        changyong: [{
            chang: '常用'
        }],
        list: [{
            b: 'b.txt'
        }, {
            c: 'c.html'
        }],
        one: [{
            chengxu: '程序'
        }],
        one_1: [{
            jiaoxue: '教学.doc'
        }],
        one_2: [{
            demo: 'demo'
        }],
        one_2_1: [{
            base: 'base.js'
        }],
        two: [{
            d: 'd:'
        }],
        two_1: [{
            yingyin: '影音'
        }],
        two_1_1: [{
            jingang: '金刚.rmvb'
        }, {
            binghe: '冰河时代.rm'
        }],
        two_2: [{
            youxi: '游戏'
        }],
        two_2_1: [{
            lol: 'LOL.exe'
        }]
    }
    var html = template(context);
    $('.wrap').html(html);

    $('.jian').on('click', function() {
        $(this).css('display', 'none').next().css('display', 'block').siblings().css('display', 'none');
    })
    $('.jia').on('click', function() {
        $(this).css('display', 'none').prev().css('display', 'block');
        $(this).nextAll().css('display', 'block');

    })
})