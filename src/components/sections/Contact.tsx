import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { sendEmail, validateEmail } from "../../services/emailService";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{type: 'success' | 'error' | null; message: string}>({
    type: null,
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Réinitialiser le feedback quand l'utilisateur change les données
    if (feedback.type) {
      setFeedback({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.fullname.trim()) {
      setFeedback({ type: 'error', message: "❌ Veuillez entrer votre nom complet." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFeedback({ type: 'error', message: "❌ Veuillez entrer une adresse email valide." });
      return;
    }

    if (!formData.subject.trim()) {
      setFeedback({ type: 'error', message: "❌ Veuillez entrer un sujet." });
      return;
    }

    if (!formData.message.trim()) {
      setFeedback({ type: 'error', message: "❌ Veuillez entrer un message." });
      return;
    }

    setLoading(true);
    
    const result = await sendEmail({
      name: formData.fullname,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    });

    setLoading(false);

    if (result.success) {
      setFeedback({ type: 'success', message: result.message });
      // Réinitialiser le formulaire
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      setFeedback({ type: 'error', message: result.message });
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Contactez-moi" 
          subtitle="Travaillons ensemble"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Discutons de votre projet
              </h3>
              
              <p className="text-gray-400 mb-8">
                Vous avez un projet en tête ? N'hésitez pas à me contacter. 
                Je suis toujours ouvert aux nouvelles opportunités et collaborations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <FiMail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:contact@ouattara.dev" className="text-white hover:text-primary transition-colors">
                      ngolognonhoua@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <FiPhone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Téléphone</p>
                    <a href="tel:+2250718959592" className="text-white hover:text-primary transition-colors">
                      07 18 95 95 92
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <FiMapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Localisation</p>
                    <p className="text-white">Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-white font-semibold mb-4">Suivez-moi</h4>
                <div className="flex gap-3">
                  {[{name: 'GitHub', url: 'https://github.com/GnonhouaN01'}, {name: 'LinkedIn', url: 'https://linkedin.com'}, {name: 'X', url: 'https://x.com'}, {name: 'TikTok', url: 'https://www.tiktok.com/@og2nx'}].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 hover:bg-primary hover:text-white transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullname" className="block text-sm text-gray-400 mb-2">
                      Nom complet
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      required
                      value={formData.fullname}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-primary focus:outline-none transition-colors text-white disabled:opacity-50"
                      placeholder="Ouattara Gnonhoua"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-primary focus:outline-none transition-colors text-white disabled:opacity-50"
                      placeholder="matader@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                    Sujet
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-primary focus:outline-none transition-colors text-white disabled:opacity-50"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-xl focus:border-primary focus:outline-none transition-colors text-white resize-none disabled:opacity-50"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Message de feedback */}
                {feedback.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-sm ${
                      feedback.type === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                        : 'bg-red-500/20 text-red-400 border border-red-500/50'
                    }`}
                  >
                    {feedback.message}
                  </motion.div>
                )}

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 disabled:opacity-50 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 hover:from-primary hover:via-blue-600 hover:to-cyan-600 shadow-lg shadow-primary/40 text-white"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin">⟳</div> Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FiSend /> Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}