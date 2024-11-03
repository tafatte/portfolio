$(document).ready(function() {
    // Initialiser toutes les fenêtres à invisible
    $('.start-menu,.folder-profil, .folder-graphisme, .folder-projets, .folder-contact, .folder-logiciels, .folder-jeux, .folder-films, .fenetre-profil, .fenetre-graphisme, .fenetre-projets, .fenetre-contact, .fenetre-logiciels, .fenetre-jeux, .fenetre-films, .fatal-error, .fondblanc-contenu-cours-affiches, .fondblanc-contenu-cours-typo, .fondblanc-contenu-cours-autres, .fondblanc-contenu-cours-typo,.fondblanc-contenu-perso-affiches, .fondblanc-contenu-perso-typo, .fondblanc-contenu-perso-autres, .fondblanc-contenu-perso-typo').addClass('invisible');
    // Vérifie si toutes les fenêtres sont ouvertes
    function checkAllWindowsOpen() {
        if (
            !$('.fenetre-profil').hasClass('invisible') &&
            !$('.fenetre-projets').hasClass('invisible') &&
            !$('.fenetre-graphisme').hasClass('invisible') && 
            !$('.fenetre-contact').hasClass('invisible') &&
            !$('.fenetre-logiciels').hasClass('invisible') 
        ) {
            $('.fatal-error').removeClass('invisible');
        } else {
            $('.fatal-error').addClass('invisible');
        }
    }

    // Gestion des double-clics pour afficher les fenêtres
    $('.profil').on('dblclick', function() {
        window.scrollTo(0, 0);
        $(this).addClass("wait");
        setTimeout(() => {
        $(this).removeClass('wait');
        if ($('.folder-profil').hasClass('invisible')) {
            $('.folder-profil').removeClass('invisible');
            $('.fenetre-profil').removeClass('invisible');
            checkAllWindowsOpen(); // Vérification après ouverture
        }
        }, 400); 
    });

    $('.graphisme').on('dblclick', function() {
        window.scrollTo(0, 0);
        $(this).addClass("wait");
        setTimeout(() => {
        $(this).removeClass('wait');
        if ($('.folder-graphisme').hasClass('invisible')) {
            $('.folder-graphisme').removeClass('invisible');
            $('.fenetre-graphisme').removeClass('invisible');
            checkAllWindowsOpen(); // Vérification après ouverture
        }
        }, 400); 
    });

    $('.projets').on('dblclick', function() {
        window.scrollTo(0, 0);
        $(this).addClass("wait");
        setTimeout(() => {
        $(this).removeClass('wait');
        if ($('.folder-projets').hasClass('invisible')) {
            $('.folder-projets').removeClass('invisible');
            $('.fenetre-projets').removeClass('invisible');
            checkAllWindowsOpen(); // Vérification après ouverture
        }
        }, 400); 
    });

    $('.contact').on('dblclick', function() {
        window.scrollTo(0, 0);
        $(this).addClass("wait");
        setTimeout(() => {
        $(this).removeClass('wait');
        if ($('.folder-contact').hasClass('invisible')) {
            $('.folder-contact').removeClass('invisible');
            $('.fenetre-contact').removeClass('invisible');
            checkAllWindowsOpen(); // Vérification après ouverture
        }
        }, 400); 
    });

    $('.logiciels').on('dblclick', function() {
        window.scrollTo(0, 0);
        $(this).addClass("wait");
        setTimeout(() => {
        $(this).removeClass('wait');
        if ($('.folder-logiciels').hasClass('invisible')) {
            $('.folder-logiciels').removeClass('invisible');
            $('.fenetre-logiciels').removeClass('invisible');
            checkAllWindowsOpen(); // Vérification après ouverture
        }
        }, 400); 
    });


    // Gestion des clics pour fermer les fenêtres
    $('.croix-profil').on("click", function() {
        window.scrollTo(0, 0);
        if (!$('.folder-profil').hasClass('invisible')) {
            $('.fenetre-profil').addClass('invisible');
            $('.folder-profil').addClass('invisible');
            checkAllWindowsOpen(); // Vérification après fermeture
        }
    });

    $('.croix-graphisme').on("click", function() {
        window.scrollTo(0, 0);
        if (!$('.folder-graphisme').hasClass('invisible')) {
            $('.fenetre-graphisme').addClass('invisible');
            $('.folder-graphisme').addClass('invisible');
            checkAllWindowsOpen(); // Vérification après fermeture
        }
    });

    $('.croix-projets').on("click", function() {
        window.scrollTo(0, 0);
        if (!$('.folder-projets').hasClass('invisible')) {
            $('.fenetre-projets').addClass('invisible');
            $('.folder-projets').addClass('invisible');
            checkAllWindowsOpen(); // Vérification après fermeture
        }
    });

    $('.croix-contact').on("click", function() {
        window.scrollTo(0, 0);
        if (!$('.folder-contact').hasClass('invisible')) {
            $('.fenetre-contact').addClass('invisible');
            $('.folder-contact').addClass('invisible');
            checkAllWindowsOpen(); // Vérification après fermeture
        }
    });

    $('.croix-logiciels').on("click", function() {
        window.scrollTo(0, 0);
        if (!$('.folder-logiciels').hasClass('invisible')) {
            $('.fenetre-logiciels').addClass('invisible');
            $('.folder-logiciels').addClass('invisible');
            checkAllWindowsOpen(); // Vérification après fermeture
        }
    });


    $('.croix-error').on("click", function() {
        if (!$('.fatal-error').hasClass('invisible')) {
            location.reload();
        }
    });
    $('.fenetre-projets').easyDrag({'handle': '.ruban-bleu'});
    $('.fenetre-graphisme').easyDrag({'handle': '.ruban-bleu'});
    $('.fenetre-contact').easyDrag({'handle': '.ruban-bleu-contact'});
    $('.fenetre-logiciels').easyDrag({'handle': '.ruban-bleu'});
    $('.fatal-error').easyDrag({'handle': '.ruban-bleu-error'});
    $('.fenetre-profil').easyDrag({'handle': '.ruban-bleu'});


    $('.cours-une').on("click", function() {
        window.scrollTo(0, 0);
        if ($('.fondblanc-contenu-cours-une').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-une').removeClass('invisible');
        }    
        if (!$('.fondblanc-contenu-cours-affiches').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-affiches').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-typo').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-typo').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-autres').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-autres').addClass('invisible');
        }
        
    });
    $('.cours-affiches').on("click", function() {
        window.scrollTo(0, 0);
        if ($('.fondblanc-contenu-cours-affiches').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-affiches').removeClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-une').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-une').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-typo').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-typo').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-autres').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-autres').addClass('invisible');
        
        }
    });
    $('.cours-typo').on("click", function() {
        window.scrollTo(0, 0);
        if ($('.fondblanc-contenu-cours-typo').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-typo').removeClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-une').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-une').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-affiches').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-affiches').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-autres').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-autres').addClass('invisible');
        
        }
    });
    $('.cours-autres').on("click", function() {
        window.scrollTo(0, 0);
        if ($('.fondblanc-contenu-cours-autres').hasClass('invisible')) {
        $('.fondblanc-contenu-cours-autres').removeClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-une').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-une').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-typo').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-typo').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-cours-affiches').hasClass('invisible')) {
            $('.fondblanc-contenu-cours-affiches').addClass('invisible');
        
        }
    });


///////////////////


    $('.perso-une').on("click", function() {
        window.scrollTo(0, 0);
        if ($('.fondblanc-contenu-perso-une').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-une').removeClass('invisible');
        }    
        if (!$('.fondblanc-contenu-perso-affiches').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-affiches').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-typo').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-typo').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-autres').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-autres').addClass('invisible');
        }
        
    });
    $('.perso-affiches').on("click", function() {
        window.scrollTo(0, 0);
        if ($('.fondblanc-contenu-perso-affiches').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-affiches').removeClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-une').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-une').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-typo').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-typo').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-autres').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-autres').addClass('invisible');
        
        }
    });
    $('.perso-typo').on("click", function() {
        window.scrollTo(0, 0);
        if ($('.fondblanc-contenu-perso-typo').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-typo').removeClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-une').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-une').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-affiches').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-affiches').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-autres').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-autres').addClass('invisible');
        
        }
    });
    $('.perso-autres').on("click", function() {
        window.scrollTo(0, 0);
        if ($('.fondblanc-contenu-perso-autres').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-autres').removeClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-une').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-une').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-typo').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-typo').addClass('invisible');
        }
        if (!$('.fondblanc-contenu-perso-affiches').hasClass('invisible')) {
            $('.fondblanc-contenu-perso-affiches').addClass('invisible');
        
        }
    });
    $('.start').on("click", function() {
    if ($('.start-menu').hasClass('invisible')) {
        $('.start').addClass('startclicked');
        $('.start-menu').removeClass('invisible');
    } else {
        $('.start').removeClass('startclicked');
        $('.start-menu').addClass('invisible'); 
    }
    });

    // Écouter les clics sur le document
    $(document).on("click", function(event) {
        if (!$(event.target).closest('.start-menu, .start').length) {
            $('.start').removeClass('startclicked');
            $('.start-menu').addClass('invisible');
        }
    });
    
    $(".categories-cours li").click(function() {
    // Retire la classe 'categories-cours-li-clicked' de tous les éléments
        $(".categories-cours li").removeClass("categories-cours-li-clicked");
    
    // Ajoute la classe 'categories-cours-li-clicked' à l'élément cliqué
        $(this).addClass("categories-cours-li-clicked");
    });
    $(".categories-perso li").click(function() {
    // Retire la classe 'categories-cours-li-clicked' de tous les éléments
        $(".categories-perso li").removeClass("categories-perso-li-clicked");
    
    // Ajoute la classe 'categories-cours-li-clicked' à l'élément cliqué
        $(this).addClass("categories-perso-li-clicked");
    });



   
});


 