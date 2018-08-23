(function () {
    var formulary = document.registrationForm,
        element = formulary.elements;
    //functions
    var submit = function (e) {
        if (!validateInputs()) {
            console.log("Error al validar los datos");
            e.preventDefault();
        } else {
            console.log("Enviando ...");
            //comentar para no enviar datos
            e.preventDefault();
        }
    };
    //functions blur and focus
    var focusInput = function () {
        this.parentElement.children[1].className = "labels active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
    }
    var blurInput = function () {
        if (this.value <= 0) {
            this.parentElement.children[1].className = "labels";
            this.parentElement.children[0].className = this.parentElement.children[0].className + "error";
        };
    }
    //Events
    formulary.addEventListener("submit", submit);
    for (var i = 0; i < element.length; i++) {
        if (element[i].type == "text" || element[i].type == "password" || element[i].type == "email") {
            element[i].addEventListener("focus", focusInput);
            element[i].addEventListener("blur", blurInput);
        };
    }
}());
$(document).ready(main);
function main() {
    var cont = 0;
    $(document).ready(function () {
        $('.changePassword').click(function () {
            if (cont == 0) {
                $('.passGroup').removeClass('pass')
                cont = 1
            } else {
                $('.passGroup').addClass('pass')
                cont = 0;
            }
        });
    })
};