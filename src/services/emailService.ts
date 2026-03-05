import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Initialiser EmailJS 
const EMAILJS_PUBLIC_KEY = 'V2SX78Xih-y_py_FX';
const EMAILJS_SERVICE_ID = 'service_cy0ogvw';
const EMAILJS_TEMPLATE_ID = 'template_ckbd8qe';

// Initialiser EmailJS une seule fois
let isInitialized = false;

const initEmailJS = () => {
  if (!isInitialized) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    isInitialized = true;
  }
};

export const sendEmail = async (data: EmailData): Promise<{success: boolean; message: string}> => {
  try {
    initEmailJS();
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: data.name,
        email: data.email,
        message: data.message,
        to_email: 'ngolognonhoua@gmail.com'
      }
    );

    if (response.status === 200) {
      return {
        success: true,
        message: '✅ Message envoyé avec succès! Je vous répondrai très bientôt.'
      };
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return {
      success: false,
      message: '❌ Erreur lors de l\'envoi. Veuillez réessayer ou contactez-moi directement.'
    };
  }
  
  return {
    success: false,
    message: '❌ Erreur lors de l\'envoi. Veuillez réessayer.'
  };
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
