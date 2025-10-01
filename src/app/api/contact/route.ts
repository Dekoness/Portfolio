import { NextRequest, NextResponse } from 'next/server';
import { sendEmailSMTP } from '@/lib/email-smtp';

export async function POST(request: NextRequest) {
  console.log('📨 API Contact recibió petición');
  
  try {
    // Leer y validar datos
    const { name, email, message } = await request.json();
    console.log('🔍 Datos recibidos en API:', { name, email });

    // Validaciones
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: 'El nombre debe tener al menos 2 caracteres' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: 'El mensaje debe tener al menos 10 caracteres' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'El formato del email no es válido' },
        { status: 400 }
      );
    }

    console.log('📤 Intentando enviar email con Resend...');
    
    // Enviar email
    await sendEmailSMTP({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });

    console.log('✅ Email enviado exitosamente');
    
    return NextResponse.json({
      success: true,
      message: '✅ Mensaje enviado correctamente. Te responderé pronto.'
    });

  } catch (error: any) {
    console.error('❌ Error en API contact:', error);
    
    let errorMessage = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
    
    // Mensajes más específicos para Resend
    if (error?.message?.includes('RESEND_API_KEY')) {
      errorMessage = 'Error de configuración: API Key de Resend no configurada.';
    } else if (error?.message?.includes('Resend error')) {
      errorMessage = 'Error del servicio de email. Inténtalo de nuevo.';
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage 
      },
      { status: 500 }
    );
  }
}

// Método GET no permitido
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Método no permitido' },
    { status: 405 }
  );
}