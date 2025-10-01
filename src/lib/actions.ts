'use server';

import { sendEmailSMTP } from './email-smtp';

export type State = {
  success?: boolean;
  message: string;
};

export async function submitContactForm(prevState: State | undefined, formData: FormData): Promise<State> {
  console.log('🔄 DEBUG - Procesando formulario directamente...');
  
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    console.log('📨 Datos del formulario:', { name, email });

    // Validaciones
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return { 
        success: false, 
        message: 'Todos los campos son obligatorios.' 
      };
    }

    if (name.trim().length < 2) {
      return { 
        success: false, 
        message: 'El nombre debe tener al menos 2 caracteres.' 
      };
    }

    if (message.trim().length < 10) {
      return { 
        success: false, 
        message: 'El mensaje debe tener al menos 10 caracteres.' 
      };
    }

    console.log('📤 Enviando email directamente con Resend...');
    
    // Enviar email DIRECTAMENTE sin API route
    await sendEmailSMTP({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });

    console.log('✅ Email enviado exitosamente');
    
    return { 
      success: true, 
      message: '✅ ¡Mensaje enviado correctamente! Te responderé pronto.' 
    };

  } catch (error: any) {
    console.error('💥 Error enviando email:', error);
    
    return { 
      success: false, 
      message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' 
    };
  }
}