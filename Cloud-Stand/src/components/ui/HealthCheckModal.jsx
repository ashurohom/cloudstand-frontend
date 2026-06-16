import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_ENDPOINTS } from '../../config/api';

function HealthCheckModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailPattern.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(API_ENDPOINTS.healthCheck, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || '',
          company: form.company || '',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', phone: '', company: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-[2px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-y-auto rounded-[24px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-slate-200"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
            >
              ✕
            </button>

            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">Request Submitted!</h3>
                  <p className="text-[#475569]">We will reach out to schedule your free health check soon.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[#111827]">Schedule Health Check</h2>
                    <p className="mt-2 text-sm text-[#475569]">
                      Fill out the details below to request your free system health check analysis.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#111827]">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`h-[44px] w-full rounded-xl border bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all focus:bg-white ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0EA5E9]'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#111827]">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`h-[44px] w-full rounded-xl border bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all focus:bg-white ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0EA5E9]'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#111827]">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="h-[44px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#0EA5E9] focus:bg-white"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#111827]">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="h-[44px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#0EA5E9] focus:bg-white"
                        placeholder="Acme Inc."
                      />
                    </div>

                    {submitError && (
                      <div className="text-sm text-red-500 text-center font-medium mt-2">
                        {submitError}
                      </div>
                    )}

                    <div className="mt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea580c] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default HealthCheckModal;
