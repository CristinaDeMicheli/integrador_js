function limpiarFormulario() {
    const pNode = document.getElementById("total");
    pNode.textContent= "Total a pagar: $";
    document.getElementById("comprar-tickets").reset();

  }

  function calcular() {
    const pNode = document.getElementById("total");
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
    let suma=0;
    if (cantidad > 0){
    if (categoria === "Estudiante") {
        suma=(cantidad*200) *20 /100;

    } else if (categoria === "Trainee"){
         suma=(cantidad*200) *50 /100;

    } else if (categoria === "Junior"){
         suma=(cantidad*200) *85 /100;
    } else
    {
         suma=(cantidad*200);
    }

   /* pNode.textContent += suma;*/
   pNode.textContent= "Total a pagar: $"+suma;
    }
    else{
        alert("Debe ingresar una cantidad para calcular el precio");
    }
    
  }