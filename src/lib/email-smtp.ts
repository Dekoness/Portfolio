import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailSMTP({ name, email, message }: { 
  name: string; 
  email: string; 
  message: string; 
}) {
  console.log('🔧 Intentando enviar con Resend...');
  
  try {
    // Verificar que la API key esté configurada
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY no está configurada en las variables de entorno');
    }

    if (!process.env.EMAIL_TO) {
      throw new Error('EMAIL_TO no está configurado');
    }

    console.log('📧 Enviando a:', process.env.EMAIL_TO);
    
    const { data, error } = await resend.emails.send({
      from: 'Portafolio <onboarding@resend.dev>', // Usa el dominio de Resend
      to: [process.env.EMAIL_TO],
      subject: `📧 Nuevo mensaje de ${name} desde tu portafolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">💼 Nuevo mensaje desde tu portafolio</h2>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <strong>👤 Nombre:</strong> ${name}
          </div>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <strong>📧 Email:</strong> ${email}
          </div>
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <strong>💬 Mensaje:</strong><br>${message}
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            Enviado el: ${new Date().toLocaleString('es-ES')}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Error de Resend:', error);
      throw new Error(`Resend error: ${error.message}`);
    }

    console.log('✅ Email enviado exitosamente con Resend');
    return { success: true, data };

  } catch (error) {
    console.error('❌ Error en sendEmailSMTP:', error);
    throw error;
  }
}

// Función dummy para que no rompa el código
export const verifySMTPConnection = async () => {
  return true;
};