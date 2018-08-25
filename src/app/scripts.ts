import * as $ from 'jquery';

export enum ScriptType {
    InputFormRequiredScripts = 0,
    StepMenuRequiredScripts = 1,

}

export class ScriptUtils {

    constructor() { }

    execScriptFunction(type: ScriptType) {
        if (type == ScriptType.InputFormRequiredScripts)
            return inputFormRequiredScripts();
        else if (type == ScriptType.StepMenuRequiredScripts)
            return stepMenuRequiredScripts();
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