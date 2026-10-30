import React, { useState, useRef } from 'react';
import { X, UploadCloud, FileText, CheckCircle2, AlertCircle, Trash2, MessageCircle } from 'lucide-react';
import { JobOpening } from '../types/index.ts';
import { validateCareerForm } from '../utils/validation.ts';
import { createCareerWhatsAppUrl } from '../utils/whatsapp.ts';

interface CareerApplyModalProps {
  job: JobOpening | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (candidateName: string, roleTitle: string) => void;
}

export const CareerApplyModal: React.FC<CareerApplyModalProps> = ({
  job,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('3 - 5 Years (Mid-Senior)');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen || !job) return null;

  const handleFile = (file: File) => {
    const sizeKB = (file.size / 1024).toFixed(1);
    const sizeFormatted = file.size > 1024 * 1024 ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : `${sizeKB} KB`;
    setSelectedFile({
      name: file.name,
      size: sizeFormatted,
    });
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.cv;
      return copy;
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateCareerForm({
      fullName,
      email,
      phone,
      experience,
      hasCv: !!selectedFile,
    });

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const waUrl = createCareerWhatsAppUrl({
      fullName,
      email,
      phone,
      roleTitle: job.title,
      experience,
      portfolioUrl,
      cvFileName: selectedFile?.name,
      coverNote,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      onSuccess(fullName, job.title);
      // Reset
      setFullName('');
      setEmail('');
      setPhone('');
      setPortfolioUrl('');
      setCoverNote('');
      setSelectedFile(null);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-xl bg-[#0d1424] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="career-modal-title"
      >
        <button
          onClick={onClose}
          aria-label="Close application modal"
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <span>Engineering & Design Careers</span>
            <span aria-hidden="true">&middot;</span>
            <span className="text-slate-400">{job.location}</span>
          </div>
          <h2 id="career-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Apply for {job.title}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Compensation: <span className="text-emerald-400 font-mono">{job.salaryRange}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="applicant-name" className="block text-xs font-medium text-slate-300 mb-1">
                Full Name *
              </label>
              <input
                id="applicant-name"
                type="text"
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                  errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500'
                }`}
              />
              {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="applicant-email" className="block text-xs font-medium text-slate-300 mb-1">
                Email Address *
              </label>
              <input
                id="applicant-email"
                type="email"
                placeholder="your.email@provider.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                  errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500'
                }`}
              />
              {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="applicant-phone" className="block text-xs font-medium text-slate-300 mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                id="applicant-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                  errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="applicant-exp" className="block text-xs font-medium text-slate-300 mb-1">
                Experience Level *
              </label>
              <select
                id="applicant-exp"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              >
                <option value="1 - 2 Years (Associate)">1 - 2 Years (Associate)</option>
                <option value="3 - 5 Years (Mid-Senior)">3 - 5 Years (Mid-Senior)</option>
                <option value="5 - 8 Years (Senior / Lead)">5 - 8 Years (Senior / Lead)</option>
                <option value="8+ Years (Staff / Principal)">8+ Years (Staff / Principal)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="applicant-portfolio" className="block text-xs font-medium text-slate-300 mb-1">
              Portfolio / GitHub / LinkedIn URL (Optional)
            </label>
            <input
              id="applicant-portfolio"
              type="url"
              placeholder="https://github.com/yourhandle or https://portfolio.dev"
              value={portfolioUrl}
              onChange={(e) => setPortfolioUrl(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          {/* CV Dropzone */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Upload CV / Resume (PDF or DOCX) *
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileInputChange}
              className="hidden"
            />

            {!selectedFile ? (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`cursor-pointer border-2 border-dashed rounded-xl p-5 text-center transition-colors ${
                  isDragging
                    ? 'border-cyan-400 bg-cyan-950/20'
                    : errors.cv
                    ? 'border-rose-500 bg-rose-950/10'
                    : 'border-slate-700 hover:border-slate-500 bg-slate-900/60'
                }`}
              >
                <UploadCloud className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                <p className="text-xs font-medium text-slate-200">
                  Click to select file or drag & drop here
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  PDF, DOCX up to 10MB
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-700">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-cyan-400 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-200 truncate">{selectedFile.name}</p>
                    <p className="text-[11px] text-slate-400 font-mono">{selectedFile.size}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Remove uploaded CV"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
            {errors.cv && (
              <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.cv}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="applicant-note" className="block text-xs font-medium text-slate-300 mb-1">
              Short Note or Proudest Architecture Achievement
            </label>
            <textarea
              id="applicant-note"
              rows={2}
              placeholder="Tell us what excites you about building high-performance systems..."
              value={coverNote}
              onChange={(e) => setCoverNote(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="text-[11px] text-slate-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Response within 48 business hours</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 hover:from-emerald-400 hover:to-teal-500 rounded-lg shadow-lg disabled:opacity-50 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit & Connect on WhatsApp'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
