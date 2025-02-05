
   let faqList = document.getElementById("faq");

   const respuestas = [
       "Respuesta a la pregunta 1  ",
       "Respuesta a la pregunta 2: ",
       "Respuesta a la pregunta 3: "
   ];

   let items = faqList.getElementsByTagName("li");
   for (let i = 0; i < items.length; i++) {
       items[i].innerHTML = `<strong>Pregunta ${i + 1}:</strong> <br> ${respuestas[i]}`;
   }
   