$('a.delete').confirm({
    columnClass: 'col-md-offset-3 col-md-6 delete alert',
    icon: 'icon-trush-can',
    title: 'Delete!',
    content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    animateFromElement: false,
    escapeKey: true,
    backgroundDismiss: true,
    buttons: {
        'Cancel': function () {},
        'Yes, delete': function () {
            $.alert('Canceled!');
        }
    }
});
$('a.success').confirm({
    columnClass: 'col-md-offset-3 col-md-6 success alert',
    icon: 'icon-check-sign',
    title: 'Success!',
    content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    animateFromElement: false,
    escapeKey: true,
    backgroundDismiss: true,
    buttons: {
        'Cancel': function () {},
        'Ok': function () {
            $.alert('Canceled!');
        }
    }
});
$('a.warning').confirm({
    columnClass: 'col-md-offset-3 col-md-6 warning alert',
    icon: 'icon-exclamation-triangle',
    title: 'Are you sure!',
    content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
    animateFromElement: false,
    escapeKey: true,
    backgroundDismiss: true,
    buttons: {
        'Cancel': function () {},
        'Yes': function () {
            $.alert('Canceled!');
        }
    }
});
$('a.exists').confirm({
    columnClass: 'col-md-offset-3 col-md-6 exists alert',
    icon: 'icon-ban',
    title: 'Email address is already exists',
    content: '<ul><li>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</li><li>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</li><li>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</li></ul>',
    animateFromElement: false,
    escapeKey: true,
    backgroundDismiss: true,
    buttons: {
        'Ok': function () {}
    }        
});


function trapTab(divId) {
var focusableElements = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable], iframe";
var elements = $("." + divId).find("*").filter(focusableElements);
elements.get(0).focus();
$(window).on("keydown", function(e) {
        if (e.which == 9) {
            var item = $(':focus');
            var index = elements.index(item);
            if (e.shiftKey) {
                if (index == 0) {
                    elements.get(elements.length - 1).focus();
                    e.preventDefault();
                }
            } else {
                if (index == (elements.length - 1)) {
                    elements.get(0).focus();
                    e.preventDefault();
                }
            }
        }
    });
}