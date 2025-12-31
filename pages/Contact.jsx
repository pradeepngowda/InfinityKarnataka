
// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar, Users, Compass, Check, MessageSquare, Loader2, X, AlertCircle } from 'lucide-react';

// const Contact = () => {
//   const [status, setStatus] = useState('idle');
//   const [inquiryType, setInquiryType] = useState('General Inquiry');
//   const [errorMsg, setErrorMsg] = useState("");
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (status === 'sending') return;
    
//     setStatus('sending');
//     setErrorMsg("");
    
//     const SERVICE_ID = "service_dgyopmr"; 
//     const TEMPLATE_ID = "template_morn856";
//     const PUBLIC_KEY = "uXnBAXGFdAcHJOj2Z";

//     const templateParams = {
//         to_name: "Admin",
//         to_email: "infinitykarnataka@gmail.com",
//         from_name: `${formData.firstName} ${formData.lastName}`.trim(),
//         from_email: formData.email,
//         phone: formData.phone,
//         service_type: inquiryType,
//         message: formData.message,
//     };

//     emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
//       .then((response) => {
//         setStatus('success');
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           message: ""
//         });
//       })
//       .catch((err) => {
//         setStatus('error');
//         setErrorMsg(err?.text || "An unexpected error occurred while sending your message.");
//       });
//   };

//   const closePopup = () => setStatus('idle');

//   const infoCards = [
//     { 
//       icon: MapPin, 
//       title: 'Visit Us', 
//       lines: ['Heritage Plaza, Bengaluru', 'Karnataka, India'] 
//     },
//     { 
//       icon: Phone, 
//       title: 'Call Us', 
//       lines: ['+91 9060797969'] 
//     },
//     { 
//       icon: Mail, 
//       title: 'Email Us', 
//       lines: ['infinitykarnataka@gmail.com'] 
//     },
//     { 
//       icon: Clock, 
//       title: 'Working Hours', 
//       lines: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM'] 
//     },
//   ];

//   const inquiryTypes = [
//     { label: 'General Inquiry', icon: MessageSquare },
//     { label: 'Trip Booking', icon: Calendar },
//     { label: 'Group Tours', icon: Users },
//     { label: 'Custom Itinerary', icon: Compass },
//   ];

//   return (
//     <div className="bg-white min-h-screen relative">
//       {status !== 'idle' && status !== 'sending' && (
//         <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-md animate-in fade-in duration-300">
//           <div className="bg-white rounded-3xl max-w-md w-full p-12 shadow-2xl text-center relative animate-in zoom-in-95 duration-500 overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d4af37] via-[#b8860b] to-[#d4af37]"></div>
            
//             <button 
//               onClick={closePopup} 
//               className="absolute top-6 right-6 text-zinc-300 hover:text-zinc-900 transition-colors p-2 hover:bg-stone-50 rounded-full"
//             >
//               <X size={20} />
//             </button>
            
//             {status === 'success' ? (
//               <div className="space-y-8">
//                 <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-100/50 animate-bounce">
//                   <CheckCircle2 size={48} />
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-serif italic text-zinc-900 mb-4">Enquiry <span className="text-[#d4af37]">Sent!</span></h3>
//                   <p className="text-zinc-500 text-sm font-medium leading-relaxed">
//                     Thank you for reaching out to Infinity Karnataka. Your message has been safely delivered to our heritage experts.
//                   </p>
//                 </div>
//                 <button 
//                   onClick={closePopup}
//                   className="w-full bg-[#d4af37] text-white py-5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:brightness-110 transition-all shadow-xl shadow-amber-500/10 active:scale-95"
//                 >
//                   Return to Contact
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-8">
//                 <div className="w-24 h-24 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto shadow-inner border border-rose-100/50">
//                   <AlertCircle size={48} />
//                 </div>
//                 <div>
//                   <h3 className="text-3xl font-serif italic text-zinc-900 mb-4">Something went <span className="text-rose-500">wrong</span></h3>
//                   <p className="text-zinc-500 text-xs font-bold uppercase tracking-tight leading-relaxed">
//                     {errorMsg}
//                   </p>
//                 </div>
//                 <button 
//                   onClick={closePopup}
//                   className="w-full bg-zinc-900 text-white py-5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all shadow-xl active:scale-95"
//                 >
//                   Try Again
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       <section className="pt-40 pb-32 bg-[#e9eff2] text-center px-4">
//         <div className="max-w-4xl mx-auto">
//           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d66d51] mb-6 block">Get in Touch</span>
//           <h1 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-8 leading-tight">
//             Let's Plan Your Karnataka Adventure
//           </h1>
//           <p className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
//             Have questions about our tours? Want to plan a custom itinerary? We're here to help you create the perfect Karnataka experience.
//           </p>
//         </div>
//       </section>

//       <section className="relative px-4 -mt-20 z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {infoCards.map((card, i) => (
//               <div key={i} className="bg-white rounded-xl p-10 border border-stone-100 shadow-xl flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
//                 <div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-6 border border-stone-100 shadow-sm">
//                   <card.icon className="w-5 h-5 text-zinc-500" />
//                 </div>
//                 <h3 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-4">{card.title}</h3>
//                 <div className="space-y-1.5">
//                   {card.lines.map((line, idx) => (
//                     <p key={idx} className="text-[11px] text-zinc-400 font-medium leading-relaxed">{line}</p>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
//             <div className="lg:col-span-2 space-y-12">
//               <div>
//                 <h2 className="text-3xl font-serif text-zinc-900 mb-2">Send Us a Message</h2>
//                 <p className="text-xs text-zinc-500 font-bold">What can we help you with?</p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-10">
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
//                   {inquiryTypes.map((type) => (
//                     <button
//                       key={type.label}
//                       type="button"
//                       onClick={() => setInquiryType(type.label)}
//                       className={`flex flex-col items-center justify-center p-4 md:p-8 rounded-xl border transition-all duration-300 group ${
//                         inquiryType === type.label 
//                         ? 'border-zinc-900 bg-zinc-50/50 text-zinc-900 shadow-inner' 
//                         : 'border-stone-100 bg-white text-zinc-400 hover:border-zinc-300'
//                       }`}
//                     >
//                       <type.icon className={`w-5 h-5 md:w-6 md:h-6 mb-3 md:mb-4 transition-colors ${inquiryType === type.label ? 'text-zinc-900' : 'text-zinc-300 group-hover:text-zinc-500'}`} />
//                       <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-center">{type.label}</span>
//                     </button>
//                   ))}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <div className="space-y-3">
//                     <label className="text-[11px] font-black uppercase tracking-widest text-zinc-900">First Name *</label>
//                     <input 
//                       required
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       type="text" 
//                       placeholder="John" 
//                       className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all placeholder:text-stone-300"
//                     />
//                   </div>
//                   <div className="space-y-3">
//                     <label className="text-[11px] font-black uppercase tracking-widest text-zinc-900">Last Name *</label>
//                     <input 
//                       required
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       type="text" 
//                       placeholder="Doe" 
//                       className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all placeholder:text-stone-300"
//                     />
//                   </div>
//                   <div className="space-y-3">
//                     <label className="text-[11px] font-black uppercase tracking-widest text-zinc-900">Email Address *</label>
//                     <input 
//                       required
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       type="email" 
//                       placeholder="infinitykarnataka@gmail.com" 
//                       className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all placeholder:text-stone-300"
//                     />
//                   </div>
//                   <div className="space-y-3">
//                     <label className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Phone Number</label>
//                     <input 
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       type="tel" 
//                       placeholder="+91 9060797969" 
//                       className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all placeholder:text-stone-300"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   <label className="text-[11px] font-black uppercase tracking-widest text-zinc-900">Your Message *</label>
//                   <textarea 
//                     required
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={6}
//                     placeholder="Tell us about your travel plans, preferences, or any questions you have..."
//                     className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all resize-none placeholder:text-stone-300"
//                   ></textarea>
//                 </div>

//                 <div className="flex justify-start pt-4">
//                   <button 
//                     type="submit"
//                     disabled={status === 'sending'}
//                     className="bg-[#2d3748] text-white px-10 py-5 rounded-lg font-black uppercase tracking-[0.2em] flex items-center space-x-4 hover:bg-zinc-900 transition-all shadow-xl active:scale-95 text-[10px] disabled:opacity-50 disabled:active:scale-100"
//                   >
//                     <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
//                     {status === 'sending' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
//                   </button>
//                 </div>
//               </form>
//             </div>

//             <div className="space-y-8">
//               <div className="bg-white border border-stone-100 rounded-2xl p-10 shadow-sm">
//                 <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-900 mb-8 border-b border-stone-50 pb-4">Quick Planning Tips</h3>
//                 <ul className="space-y-5">
//                   <li className="flex items-start gap-4">
//                     <div className="mt-1 bg-stone-50 rounded-full p-0.5">
//                       <Check size={12} className="text-[#d66d51]" />
//                     </div>
//                     <span className="text-[11px] text-zinc-500 font-bold leading-relaxed">Best time to visit: October to March</span>
//                   </li>
//                   <li className="flex items-start gap-4">
//                     <div className="mt-1 bg-stone-50 rounded-full p-0.5">
//                       <Check size={12} className="text-[#d66d51]" />
//                     </div>
//                     <span className="text-[11px] text-zinc-500 font-bold leading-relaxed">Plan 2-3 days minimum per major destination</span>
//                   </li>
//                   <li className="flex items-start gap-4">
//                     <div className="mt-1 bg-stone-50 rounded-full p-0.5">
//                       <Check size={12} className="text-[#d66d51]" />
//                     </div>
//                     <span className="text-[11px] text-zinc-500 font-bold leading-relaxed">Book heritage site guides in advance</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;









import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar, Users, Compass, Check, MessageSquare, Loader2, X, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [inquiryType, setInquiryType] = useState('General Inquiry');
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (status === 'sending') return;
    
    setStatus('sending');
    setErrorMsg("");
    
    const SERVICE_ID = "service_xw6ulks"; 
    const TEMPLATE_ID = "template_npiiugs";
    const PUBLIC_KEY = "Yb60XbnL0oq3SsEQW";

    const templateParams = {
        to_name: "Admin",
        to_email: "infinitykarnataka@gmail.com",
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        from_email: formData.email,
        phone: formData.phone,
        service_type: inquiryType,
        message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        setStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      })
      .catch((err) => {
        setStatus('error');
        setErrorMsg(err?.text || "An unexpected error occurred while sending your message.");
      });
  };

  const closePopup = () => setStatus('idle');

  const infoCards = [
    { 
      icon: MapPin, 
      title: 'Visit Us', 
      lines: ['Bagalagunte, Bengaluru', 'Karnataka, India'],
      link: 'https://maps.app.goo.gl/LRdAao5Di3jherRo6?g_st=ic',
      isExternal: true
    },
    { 
      icon: Phone, 
      title: 'Call Us', 
      lines: ['+91 9060797969'],
      link: 'tel:+919060797969',
      isExternal: false
    },
    { 
      icon: Mail, 
      title: 'Email Us', 
      lines: ['infinitykarnataka@gmail.com'],
      link: 'mailto:infinitykarnataka@gmail.com',
      isExternal: false
    },
    { 
      icon: Clock, 
      title: 'Working Hours', 
      lines: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
      link: null, // No link for working hours
      isExternal: false
    },
  ];

  const inquiryTypes = [
    { label: 'General Inquiry', icon: MessageSquare },
    { label: 'Trip Booking', icon: Calendar },
    { label: 'Group Tours', icon: Users },
    { label: 'Custom Itinerary', icon: Compass },
  ];

  return (
    <div className="bg-white min-h-screen relative">
      {status !== 'idle' && status !== 'sending' && (
        <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-md w-full p-12 shadow-2xl text-center relative animate-in zoom-in-95 duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d4af37] via-[#b8860b] to-[#d4af37]"></div>
            
            <button 
              onClick={closePopup} 
              className="absolute top-6 right-6 text-zinc-300 hover:text-zinc-900 transition-colors p-2 hover:bg-stone-50 rounded-full"
            >
              <X size={20} />
            </button>
            
            {status === 'success' ? (
              <div className="space-y-8">
                <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-100/50 animate-bounce">
                  <CheckCircle2 size={48} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif italic text-zinc-900 mb-4">Enquiry <span className="text-[#d4af37]">Sent!</span></h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                    Thank you for reaching out to Infinity Karnataka. Your message has been safely delivered to our heritage experts.
                  </p>
                </div>
                <button 
                  onClick={closePopup}
                  className="w-full bg-[#d4af37] text-white py-5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:brightness-110 transition-all shadow-xl shadow-amber-500/10 active:scale-95"
                >
                  Return to Contact
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="w-24 h-24 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto shadow-inner border border-rose-100/50">
                  <AlertCircle size={48} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif italic text-zinc-900 mb-4">Something went <span className="text-rose-500">wrong</span></h3>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-tight leading-relaxed">
                    {errorMsg}
                  </p>
                </div>
                <button 
                  onClick={closePopup}
                  className="w-full bg-zinc-900 text-white py-5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all shadow-xl active:scale-95"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <section className="pt-40 pb-32 bg-[#e9eff2] text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d66d51] mb-6 block">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-8 leading-tight">
            Let's Plan Your Karnataka Adventure
          </h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about our tours? Want to plan a custom itinerary? We're here to help you create the perfect Karnataka experience.
          </p>
        </div>
      </section>

      <section className="relative px-4 -mt-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, i) => {
              const CardContent = (
                <>
                  <div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mb-6 border border-stone-100 shadow-sm group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                    <card.icon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-4">{card.title}</h3>
                  <div className="space-y-1.5">
                    {card.lines.map((line, idx) => (
                      <p key={idx} className="text-[11px] text-zinc-400 font-medium leading-relaxed">{line}</p>
                    ))}
                  </div>
                </>
              );

              const baseStyles = "bg-white rounded-xl p-10 border border-stone-100 shadow-xl flex flex-col items-center text-center transition-all duration-300 group h-full";
              const hoverStyles = card.link ? "hover:-translate-y-2 hover:shadow-2xl cursor-pointer" : "";

              return card.link ? (
                <a 
                  key={i} 
                  href={card.link}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  className={`${baseStyles} ${hoverStyles}`}
                >
                  {CardContent}
                </a>
              ) : (
                <div key={i} className={baseStyles}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-zinc-900 mb-2">Send Us a Message</h2>
                <p className="text-xs text-zinc-500 font-bold">What can we help you with?</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type.label}
                      type="button"
                      onClick={() => setInquiryType(type.label)}
                      className={`flex flex-col items-center justify-center p-4 md:p-8 rounded-xl border transition-all duration-300 group ${
                        inquiryType === type.label 
                        ? 'border-zinc-900 bg-zinc-50/50 text-zinc-900 shadow-inner' 
                        : 'border-stone-100 bg-white text-zinc-400 hover:border-zinc-300'
                      }`}
                    >
                      <type.icon className={`w-5 h-5 md:w-6 md:h-6 mb-3 md:mb-4 transition-colors ${inquiryType === type.label ? 'text-zinc-900' : 'text-zinc-300 group-hover:text-zinc-500'}`} />
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-center">{type.label}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-zinc-900">First Name *</label>
                    <input 
                      required
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      type="text" 
                      placeholder="John" 
                      className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all placeholder:text-stone-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-zinc-900">Last Name *</label>
                    <input 
                      required
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Doe" 
                      className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all placeholder:text-stone-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-zinc-900">Email Address *</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="infinitykarnataka@gmail.com" 
                      className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all placeholder:text-stone-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Phone Number</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      placeholder="+91 9060797969" 
                      className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all placeholder:text-stone-300"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-zinc-900">Your Message *</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your travel plans, preferences, or any questions you have..."
                    className="w-full bg-white border border-stone-200 rounded-lg px-6 py-4 text-sm focus:outline-none focus:border-zinc-900 transition-all resize-none placeholder:text-stone-300"
                  ></textarea>
                </div>

                <div className="flex justify-start pt-4">
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-[#2d3748] text-white px-10 py-5 rounded-lg font-black uppercase tracking-[0.2em] flex items-center space-x-4 hover:bg-zinc-900 transition-all shadow-xl active:scale-95 text-[10px] disabled:opacity-50 disabled:active:scale-100"
                  >
                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                    {status === 'sending' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-stone-100 rounded-2xl p-10 shadow-sm">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-900 mb-8 border-b border-stone-50 pb-4">Quick Planning Tips</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 bg-stone-50 rounded-full p-0.5">
                      <Check size={12} className="text-[#d66d51]" />
                    </div>
                    <span className="text-[11px] text-zinc-500 font-bold leading-relaxed">Best time to visit: October to March</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 bg-stone-50 rounded-full p-0.5">
                      <Check size={12} className="text-[#d66d51]" />
                    </div>
                    <span className="text-[11px] text-zinc-500 font-bold leading-relaxed">Plan 2-3 days minimum per major destination</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 bg-stone-50 rounded-full p-0.5">
                      <Check size={12} className="text-[#d66d51]" />
                    </div>
                    <span className="text-[11px] text-zinc-500 font-bold leading-relaxed">Book heritage site guides in advance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;