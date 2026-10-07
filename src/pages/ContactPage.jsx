import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Building, 
  MessageSquare, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const ContactPage = () => {
  const { navigate } = useRouter();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Institutional Partnership',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addToast('Please complete all contact fields', 'warning');
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      addToast('Message received! Our team will respond within 4 hours.', 'success');
    }, 600);
  };

  const offices = [
    {
      city: 'Bengaluru R&D Hub',
      address: 'Quantum Towers, 80 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
      lead: 'High-Frequency & Algorithmic Systems Lab',
      email: 'bengaluru@quantbharat.in'
    },
    {
      city: 'Hyderabad Computational Center',
      address: 'Tower 4, HITEC City, Madhapur, Hyderabad, Telangana 500081',
      lead: 'Large-Scale Stochastic Simulators',
      email: 'hyderabad@quantbharat.in'
    },
    {
      city: 'Delhi NCR Liaison',
      address: 'Cyber Hub, Sector 24, Gurugram, Haryana 122002',
      lead: 'IITs & Enterprise Institutional Partnerships',
      email: 'delhi@quantbharat.in'
    }
  ];

  return (
    <div className="space-y-12 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-200">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <Badge variant="saffron" size="sm">Get in Touch</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Contact QuantBharat
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Whether you are an IIT student chapter, a quantitative hedge fund looking to recruit benchmarked talent, or a researcher with a continuous mathematics puzzle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Dispatched</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. A technical fellow from our Bengaluru office has received your dispatch and will reply to <strong>{formData.email}</strong> within 4 business hours.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Your Name"
                    placeholder="Aditi Deshmukh"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="aditi@iitd.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg bg-white dark:bg-[#080B11] border border-slate-300 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
                  >
                    <option value="Institutional Partnership">Institutional / University Partnership</option>
                    <option value="Corporate Recruitment">Corporate Recruiting & Dalal Street Benchmarking</option>
                    <option value="Academic Council">Academic Council & Curriculum Contribution</option>
                    <option value="Technical Support">Platform Technical Question or Bug Report</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <Input
                  label="Detailed Message"
                  as="textarea"
                  rows={5}
                  placeholder="Share details of your inquiry or institutional requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />

                <Button
                  type="submit"
                  variant="saffron"
                  size="md"
                  loading={loading}
                  iconRight={Send}
                  className="w-full"
                >
                  Transmit Message
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Right: Offices and Response Guarantee */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 space-y-4 border-l-4 border-l-[#FF7A00]">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#FF7A00]" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Response Guarantee SLA</h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              All inquiries submitted through this portal are prioritized by our quantitative fellows with an average response time of under 4 hours on working days.
            </p>
          </Card>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Bharat Technology Hubs
            </h3>
            {offices.map((office, i) => (
              <Card key={i} className="p-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{office.city}</h4>
                  <Badge variant="neutral" size="xs">Active Lab</Badge>
                </div>
                <p className="text-[11px] text-slate-400">{office.address}</p>
                <div className="text-[10px] text-[#FF7A00] font-mono pt-1">
                  {office.email}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
