"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

// NOTE: This is a placeholder. In a real application, you would:
// 1. Set up your Firebase project and add credentials to environment variables.
// 2. Use the Firebase Admin SDK to initialize Firestore.
// 3. Implement the logic to save the form data to a 'contacts' collection.
// 4. Add robust error handling for the database operation.
export async function submitContactForm(prevState: State | undefined, formData: FormData): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Faltan campos o hay errores. No se pudo enviar el mensaje.",
      success: false,
    };
  }

  // Placeholder for Firebase logic
  console.log("Form data is valid and would be sent to Firebase:", validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Here, you would interact with Firestore.
  // For example: await db.collection('contacts').add(validatedFields.data);

  return {
    message: "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.",
    success: true,
  };
}
