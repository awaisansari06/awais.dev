import React, { useRef } from 'react';
import { Send, Copy, Check, Mail, Github, Linkedin, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { SectionContainer } from './SectionContainer';
import { Button } from './Button';
import { SOCIAL_LINKS } from '../constants';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [emailCopied, setEmailCopied] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('muhammadavais14@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_641kgsh';
      const templateId = 'template_eyo2h15';
      const publicKey = '1nJ2FYw3i06jb1j-R';

      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setSubmitStatus('success');
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <SectionContainer id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">

          {/* Background Gradient Blob */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-600/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
                <p className="text-slate-400 leading-relaxed">
                  Currently looking for internship opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-surfaceHighlight/50 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Email me at</p>
                        <p className="text-white font-medium">muhammadavais14@gmail.com</p>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
                      title="Copy Email"
                    >
                      {emailCopied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-surfaceHighlight/50 rounded-xl text-slate-300 hover:text-white hover:bg-primary-500 hover:-translate-y-1 transition-all duration-300 border border-white/5"
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 bg-surface/50 p-6 rounded-2xl border border-white/5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-slate-700 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-slate-700 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-slate-700 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none placeholder-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                  <CheckCircle size={18} />
                  <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  <XCircle size={18} />
                  <span className="text-sm">Failed to send message. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};