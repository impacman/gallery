function load() {
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        const body = document.querySelector('body');

        function mainFunction() {
            function ibg() {
                let ibg = document.querySelectorAll('.ibg');
            
                for (let f = 0; f < ibg.length; f++) {
                    let selector = ibg[f].querySelector('img');
            
                    if (selector) {
                        ibg[f].style.backgroundImage = 'url(' + selector.getAttribute('src') + ')';
                    }
                }
            }
            ibg();
            
            function gallery() {
                const 
                    btn = $('.fullscreen__btn'),
                    img = $('.gallery__wrap-ibg');
        
                $(btn).on('click', function (e) {
                    e.preventDefault();
                    $(this).toggleClass('active');
                    img.toggleClass('active');
                });
            };
            gallery();
        
            function translate() {
                let langText = {
                    'en': {
                        'title': 'Gallery',
                        'onClick': 'Click'
                    },
                    'ru': {
                        'title': 'Галерея',
                        'onClick': 'Нажми'
                    }
                };
        
                const translatePageBtn = $('.translate-page__btn');
        
                translatePageBtn.on('click', function(e) {
                    e.preventDefault();
                    const translatePage = $('.translate-page');
        
                    if ((!translatePage.children().hasClass('hidden')) || (translatePage.children().hasClass('hidden'))) {
                        translatePageBtn.toggleClass('hidden');
                    }
        
                    let 
                        lang = $(this).attr('id'),
                        langClass = $('.lang');
        
                    langClass.each(function(index, item) {
                        $(this).text(langText[lang][$(this).attr('key')]);
                    });
                });
            };
            translate();            
        };
        mainFunction();

        loader.className += ' loader_no-active'; 
        body.className += ' overflow-active';
    });
}
load();