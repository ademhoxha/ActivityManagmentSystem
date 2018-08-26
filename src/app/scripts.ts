import * as $ from 'jquery';

export enum ScriptType {
    InputFormRequiredScripts = 0,
    StepMenuRequiredScripts = 1,
    PanelRequiredScripts = 2,
    PanelCloseAll = 3,
    PanelOpenSecond = 4,
    PanelToogleSecond = 5,

}

export class ScriptUtils {

    constructor() { }

    execScriptFunction(type: ScriptType) {
        if (type == ScriptType.InputFormRequiredScripts)
            return inputFormRequiredScripts();

        else if (type == ScriptType.StepMenuRequiredScripts)
            return stepMenuRequiredScripts();

        else if (type == ScriptType.PanelRequiredScripts)
            return panelRequiredScripts();
        else if (type == ScriptType.PanelCloseAll)
            return panelClosePanels();
        else if (type == ScriptType.PanelOpenSecond)
            return panelOpenSecondaryPanel();
        else if (type == ScriptType.PanelToogleSecond)
            return panelToogleSecondaryPanel();
    }

}

function inputFormRequiredScripts() {

    $('._card-form-conteiner-body').mouseenter(function () {
        $(this).parents('._card-form-container').find('._card-form-container-header').find('._card-form-container-header-title').addClass('_card-form-container-header-title-hover');
    })

    $('._card-form-conteiner-body').mouseleave(function () {
        $(this).parents('._card-form-container').find('._card-form-container-header').find('._card-form-container-header-title').removeClass('_card-form-container-header-title-hover');
    })


    $('._card-form-conteiner-body ._input-group-flex .ui-float-label input').focus(function () {
        $(this).parents('.ui-float-label').find('._to-right').addClass('_card-form-container-focus-icon');
        $(this).parents('.ui-float-label').parents('._input-group-flex').addClass('_card-form-container-focus-flex-border');

    })
    $('._card-form-conteiner-body ._input-group-flex .ui-float-label input').focusout(function () {
        $(this).parents('.ui-float-label').find('._to-right').removeClass('_card-form-container-focus-icon');
        $(this).parents('.ui-float-label').parents('._input-group-flex').removeClass('_card-form-container-focus-flex-border');
    })

    $('input').keyup(function () {

        if ($(this).hasClass('ng-invalid')) {
           /* $(this).parents('._input-group-flex').find('._input-group-external-label').removeClass('_card-form-container-focus-icon-black');
            $(this).parents('._input-group-flex').find('._input-group-external-label').addClass('_card-form-container-focus-icon-red');*/

            $(this).parents('._input-group-flex').find('i').removeClass('_card-form-container-focus-icon-black');
            $(this).parents('._input-group-flex').find('i').addClass('_card-form-container-focus-icon-red');
        }

        if ($(this).hasClass('ng-valid')) {
            /*$(this).parents('._input-group-flex').find('._input-group-external-label').removeClass('_card-form-container-focus-icon-red');
            $(this).parents('._input-group-flex').find('._input-group-external-label').addClass('_card-form-container-focus-icon-black');*/
    
            $(this).parents('._input-group-flex').find('i').removeClass('_card-form-container-focus-icon-red');
            $(this).parents('._input-group-flex').find('i').addClass('_card-form-container-focus-icon-black');
        }
    })

    /* $('input').keyup( function() {
         console.log("VALID")
         $(this).parents('._input-group-flex').find('._input-group-external-label').removeClass('_card-form-container-focus-icon-red');
         $(this).parents('._input-group-flex').find('._input-group-external-label').addClass('_card-form-container-focus-icon-black');
 
         $(this).parents('._input-group-flex').find('i').removeClass('_card-form-container-focus-icon-red');
         $(this).parents('._input-group-flex').find('i').addClass('_card-form-container-focus-icon-black');
     } )*/

}

function stepMenuRequiredScripts() {
    funcMenu();
    $(window).resize(function () {
        funcMenu();
    });
}

function funcMenu() {
    var $menuList = $('._step-menu-tab');
    var i = 0;
    while (i < $menuList.length) {
        var $menu = $menuList[i];
        var $length = $($menu).find('div._step-menu-item').length;
        if (($menu['clientWidth'] / $length) < 225) {
            $($menu).addClass('_responsive-menu');
        }
        else {
            $($menu).removeClass('_responsive-menu');
        }
        i++;
    }
}

function panelRequiredScripts() {
    $('div').click(function (e) {
        if ($("._panel-first-level").hasClass('_over-panel-yes-visible') && !$(e.target).hasClass("._over-panel")
            && !$(e.target).parents('._over-panel').length && !$(e.target).parents('._open-app-menu').length) {
            panelClosePanels();
        }
    });
}

function panelClosePanels() {
    if ($("._panel-second-level").hasClass('_over-panel-yes-visible')) {
        panelToogleSecondaryPanel()
    }
    panelTooglePrimaryPanel()
}

function panelOpenSecondaryPanel() {
    if ($("._panel-second-level").hasClass('_over-panel-no-visible')) {
        panelToogleSecondaryPanel();
    }
}

function panelToogleSecondaryPanel() {
    //$("._panel-second-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
    $("._panel-second-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
}

function panelTooglePrimaryPanel() {
    //$("._panel-first-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
    $("._panel-first-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
}