export const downloadFile = ()=> {
    const pdfUrl = "./files/Eduardo GS CV.pdf";
    
    // Realiza una solicitud para obtener el contenido del PDF
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "Eduardo GS CV.pdf"; 
        downloadLink.click();
      })
      .catch(error => console.error("Error al descargar el archivo PDF:", error));
  }