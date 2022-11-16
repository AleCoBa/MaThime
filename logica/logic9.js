tr=1
function ptja(nodo){
    var pt = parseInt(nodo.id);
    if (pt == tr) {
        swal.fire({
            title: '¡Correcto!',
            icon: 'success',
            color: "white",
            iconColor: "rgb(76, 212, 202)",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false
        }).then(function () {
            window.location = ("4°1.html");
        });
    } else {
        swal.fire({
            title: 'Te has equivocado',
            icon: 'question',
            iconColor: "rgb(212, 148, 76)",
            color: "white",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false
        });
    }
}
ps = 180
function jesc(nodo){
    var pk = parseInt(nodo.id);
    if (pk == ps) {
        swal.fire({
            title: '¡Correcto!',
            icon: 'success',
            color: "white",
            iconColor: "rgb(76, 212, 202)",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false
        }).then(function () {
            window.location = ("4°2.html");
        });
    } else {
        swal.fire({
            title: 'Te has equivocado',
            icon: 'question',
            iconColor: "rgb(212, 148, 76)",
            color: "white",
            background: "rgb(30, 30, 30)",
            allowOutsideClick: false
        });
    }
}
function asc() {
    var sds = document.getElementById("next").value;

    if (sds.length == 0) {
        swal.fire({
            title: "los campos estan vacios",
            icon: "error",
            background: "rgb(30, 30, 30)",
            color: "red",
        })
    } else {

        sds = parseInt(sds);


        if (sds == 39) {
            swal.fire({
                title: "Correcto",
                icon: "success",
                background: "rgb(30, 30, 30)",
                color: "white",
            }).then(function () {
                window.location = ("eleccion4.html");
            });
        } else {
            swal.fire({
                title: "¿Estás seguro?",
                icon: "question",
                iconColor: "rgb(212, 148, 76)",
                background: "rgb(30, 30, 30)",
                color: "white",
            });
        }

    }
}