// const $boton = document.getElementById("btnCrearPdf")


// document.addEventListener("DOMContentLoaded", () => {
//     // Escuchamos el click del botón

//     const $boton = document.querySelector("#btnCrearPdf")
//     $boton.addEventListener("click", () => {
//         const $elementoParaConvertir = document.getElementById("#hola"); //
//         html2pdf ()
//             .set({
//                 margin: 0,
//                 filename: 'Boleta.pdf',
//                 image: {
//                     type: 'jpeg',
//                     quality: 0.98
//                 },
            
//             html2canvas: {
//                 scale: 3, // A mayor escala, mejores gráficos, pero más peso
//                 letterRendering: true,
//             },
//             jsPDF: {
//                 unit: "in",
//                 format: "a4",
//                 orientation: 'portrait' // landscape o portrait
//             }
//         })
//         .from($elementoParaConvertir)
//         .save()
//         .catch(err => console.log(err));

//     })


// });

// document.addEventListener("DOMContentLoaded", () => {


// $boton.onclick = function(){
//     var doc = new jsPDF('p','pt','letter');
//     var margin = 10;
//     var scale = (doc.internal.pageSize.width - margin * 2) / document.body.scrollWidth;
//     doc.html(document.body,{
//         x: margin,
//         y: margin,

//         html2Canvas: {
//             scale:scale,
//         },
//         callback: function(doc){
//             doc.output('dataurlnewwindow', {filename: 'fichero-pdf.pdf'})
//         } 


//     });

// }

// });

    


    // $boton.addEventListener('click', function(){
        
    //     var element = document.getElementById('hola');
    //             html2pdf(element, {
    //             margin:       0,
    //             filename:     'myfile.pdf',
    //             image:        { type: 'jpeg', quality: 0.98 },
    //             html2canvas:  { scale: 2, loggin:true, dpi:102,letterRendering:true },
    //             jsPDF:        { unit: 'mm', }

    //             })

    //     console.log("hola")
                
    // });

