import React, { useState } from 'react';
import { Menu, Phone, MapPin, Clock, Calendar, Stethoscope, UserPlus, Heart, ChevronRight, ChevronFirst, Brain, Bone, Eye, Bluetooth as Tooth, Baby, Activity, Syringe, Microscope, FileText, CreditCard, AlertCircle, BookOpen, Sun, Moon, Globe2, Lock, X, Wind, Tablets, Beaker, Dna, Download, FileCheck, FileSpreadsheet, FileText as FileTextIcon, Shield, CreditCard as CreditCardIcon, Receipt, Wallet, GraduationCap, BookOpen as BookOpenIcon, ClipboardList, Video, Users, Calendar as CalendarIcon, Clock as ClockIcon, Bookmark } from 'lucide-react';

// Define translations type
type TranslationType = {
  home: string;
  aboutUs: string;
  services: string;
  appointments: string;
  resources: string;
  contact: string;
  heroTitle: string;
  heroSubtitle: string;
  bookAppointment: string;
  emergencyCare: string;
  aboutTitle: string;
  aboutSubtitle: string;
  mission: string;
  vision: string;
  values: string;
  servicesTitle: string;
  servicesSubtitle: string;
  viewAllServices: string;
  bookAppointmentTitle: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  department: string;
  scheduleAppointment: string;
  workingHours: string;
  patientResources: string;
  patientResourcesSubtitle: string;
  downloadForms: string;
  insurancePayments: string;
  healthEducation: string;
  testimonials: string;
  testimonialsSubtitle: string;
  emergencyCareTitle: string;
  emergencyServices: string;
  emergencyHotline: string;
  whenToSeek: string;
  healthUpdates: string;
  healthUpdatesSubtitle: string;
  readMore: string;
  emergencyContact: string;
  emergencyLine: string;
  copyright: string;
  providingQuality: string;
  note1: string;
  note2: string;
  note3: string;
  note4: string;
  quickLinks: string;
  legal: string;
  privacyPolicy: string;
  termsOfService: string;
  accessibility: string;
  generalMedicine: string;
  generalMedicineDesc: string;
  emergencyCareService: string;
  emergencyCareDesc: string;
  healthTopics: string[];
  emergencySymptoms: string[];
  keyFeatures: string;
};

const translations: TranslationType = {
  home: "Home",
  aboutUs: "About Us",
  services: "Services",
  appointments: "Appointments",
  resources: "Resources",
  contact: "Contact",
  heroTitle: "Your Health Is Our Top Priority",
  heroSubtitle: "Providing quality healthcare services with a team of experienced medical professionals. Your well-being is at the heart of everything we do.",
  bookAppointment: "Book Appointment",
  emergencyCare: "Emergency Care",
  aboutTitle: "About Our Clinic",
  aboutSubtitle: "With over 20 years of experience, we provide comprehensive healthcare services with state-of-the-art facilities and a team of dedicated professionals.",
  mission: "Our Mission",
  vision: "Our Vision",
  values: "Our Values",
  servicesTitle: "Our Services",
  servicesSubtitle: "We offer a comprehensive range of medical services with state-of-the-art facilities and experienced specialists",
  viewAllServices: "View All Services",
  bookAppointmentTitle: "Book an Appointment",
  fullName: "Full Name",
  email: "Email",
  phone: "Phone",
  preferredDate: "Preferred Date",
  department: "Department",
  scheduleAppointment: "Schedule Appointment",
  workingHours: "Working Hours",
  patientResources: "Patient Resources",
  patientResourcesSubtitle: "Access important information and resources to help you prepare for your visit",
  downloadForms: "Download Forms",
  insurancePayments: "Insurance & Payments",
  healthEducation: "Health Education",
  testimonials: "Patient Testimonials",
  testimonialsSubtitle: "Read what our patients say about their experience with us",
  emergencyCareTitle: "Emergency Care",
  emergencyServices: "24/7 Emergency Services Available",
  emergencyHotline: "Emergency Hotline",
  whenToSeek: "When to Seek Emergency Care",
  healthUpdates: "Latest Health Updates",
  healthUpdatesSubtitle: "Stay informed with our latest health tips and medical news",
  readMore: "Read More",
  emergencyContact: "Emergency Contact",
  emergencyLine: "24/7 Emergency Line:",
  copyright: "© 2025 HealthCare. All rights reserved.",
  providingQuality: "Providing quality healthcare services with compassion and expertise.",
  note1: "Please complete all forms using blue or black ink",
  note2: "Bring valid photo ID and insurance card to your appointment",
  note3: "Arrive 15 minutes early if you need assistance with forms",
  note4: "Contact us if you have any questions about the forms",
  quickLinks: "Quick Links",
  legal: "Legal",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",
  accessibility: "Accessibility",
  generalMedicine: "General Medicine",
  generalMedicineDesc: "Comprehensive primary healthcare including routine check-ups, vaccinations, and preventive care",
  emergencyCareService: "Emergency Care",
  emergencyCareDesc: "24/7 emergency medical services with rapid response teams and fully equipped trauma units",
  healthTopics: ["Advanced cardiac care including ECG, stress tests, and heart disease management", "Specialized care for neurological disorders with advanced diagnostic capabilities", "Treatment for bone and joint conditions, sports injuries, and rehabilitation services", "Comprehensive children's healthcare from newborns to adolescents", "Complete eye care services including routine exams, vision correction, and treatment of eye diseases", "Comprehensive dental services from routine cleanings to advanced procedures for optimal oral health", "Expert care for respiratory conditions and lung diseases with advanced diagnostic and treatment options", "Full-service pharmacy with prescription medications, consultations, and medication management support", "State-of-the-art diagnostic laboratory offering comprehensive testing and quick results", "Advanced genetic testing and counseling services for inherited conditions and personalized medicine"],
  emergencySymptoms: ["Severe chest pain or difficulty breathing", "Severe injuries or trauma", "Stroke symptoms", "Severe allergic reactions", "Neurological Assessments", "Brain Disorder Treatment", "Spine Care", "Headache Management", "Pediatric Emergency Care", "Eye Examinations", "Vision Correction", "Cataract Surgery", "Glaucoma Treatment", "Retinal Care", "Routine Cleanings", "Dental Surgery", "Orthodontics", "Cosmetic Dentistry", "Emergency Dental Care", "Respiratory Testing", "Asthma Management", "COPD Treatment", "Sleep Studies", "Pulmonary Rehabilitation", "Prescription Filling", "Medication Counseling", "Compounding Services", "Vaccination Services", "Home Delivery", "Blood Testing", "Urinalysis", "Pathology Services", "Genetic Testing", "Rapid Test Results", "Genetic Testing", "Counseling Services", "Family Planning", "Research Programs", "Precision Medicine"],
  keyFeatures: "Key Features"
};

// AllServices Component
const AllServices = ({ isDarkMode, onClose }: { isDarkMode: boolean; onClose: () => void }) => {
  const t = translations;
  
  const allServices = [
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: t.generalMedicine,
      description: t.generalMedicineDesc,
      features: t.healthTopics
    },
    {
      icon: <ChevronFirst className="h-12 w-12 text-blue-600" />,
      title: t.emergencyCareService,
      description: t.emergencyCareDesc,
      features: t.emergencySymptoms
    },
    {
      icon: <Activity className="h-12 w-12 text-blue-600" />,
      title: "Cardiology",
      description: "Advanced cardiac care including ECG, stress tests, and heart disease management. State-of-the-art facilities for comprehensive heart care.",
      features: ["ECG/EKG", "Stress Testing", "Heart Disease Treatment", "Cardiac Rehabilitation", "Preventive Cardiology"]
    },
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: "Neurology",
      description: "Specialized care for neurological disorders with advanced diagnostic capabilities. Expert treatment for brain, spine, and nervous system conditions.",
      features: ["Neurological Assessments", "Brain Disorder Treatment", "Spine Care", "Headache Management", "Stroke Care"]
    },
    {
      icon: <Bone className="h-12 w-12 text-blue-600" />,
      title: "Orthopedics",
      description: "Treatment for bone and joint conditions, sports injuries, and rehabilitation services. Comprehensive care for musculoskeletal system.",
      features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Physical Therapy", "Spine Surgery"]
    },
    {
      icon: <Baby className="h-12 w-12 text-blue-600" />,
      title: "Pediatrics",
      description: "Comprehensive children's healthcare from newborns to adolescents. Specialized care tailored to young patients' needs.",
      features: ["Well-Child Visits", "Immunizations", "Growth Monitoring", "Behavioral Health", "Pediatric Emergency Care"]
    },
    {
      icon: <Eye className="h-12 w-12 text-blue-600" />,
      title: "Ophthalmology",
      description: "Complete eye care services including routine exams, vision correction, and treatment of eye diseases.",
      features: ["Eye Examinations", "Vision Correction", "Cataract Surgery", "Glaucoma Treatment", "Retinal Care"]
    },
    {
      icon: <Tooth className="h-12 w-12 text-blue-600" />,
      title: "Dental Care",
      description: "Comprehensive dental services from routine cleanings to advanced procedures for optimal oral health.",
      features: ["Routine Cleanings", "Dental Surgery", "Orthodontics", "Cosmetic Dentistry", "Emergency Dental Care"]
    },
    {
      icon: <Wind className="h-12 w-12 text-blue-600" />,
      title: "Pulmonology",
      description: "Expert care for respiratory conditions and lung diseases with advanced diagnostic and treatment options.",
      features: ["Respiratory Testing", "Asthma Management", "COPD Treatment", "Sleep Studies", "Pulmonary Rehabilitation"]
    },
    {
      icon: <Tablets className="h-12 w-12 text-blue-600" />,
      title: "Pharmacy Services",
      description: "Full-service pharmacy with prescription medications, consultations, and medication management support.",
      features: ["Prescription Filling", "Medication Counseling", "Compounding Services", "Vaccination Services", "Home Delivery"]
    },
    {
      icon: <Beaker className="h-12 w-12 text-blue-600" />,
      title: "Laboratory Services",
      description: "State-of-the-art diagnostic laboratory offering comprehensive testing and quick results.",
      features: ["Blood Testing", "Urinalysis", "Pathology Services", "Genetic Testing", "Rapid Test Results"]
    },
    {
      icon: <Dna className="h-12 w-12 text-blue-600" />,
      title: "Genetics",
      description: "Advanced genetic testing and counseling services for inherited conditions and personalized medicine.",
      features: ["Genetic Testing", "Counseling Services", "Family Planning", "Research Programs", "Precision Medicine"]
    }
  ];

  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 overflow-y-auto`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{t.servicesTitle}</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <p className="text-lg opacity-80 mb-12 max-w-3xl">
          {t.servicesSubtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="opacity-80 mb-4">{service.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">{t.keyFeatures}:</h4>
                <ul className="list-disc list-inside opacity-80 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="#appointments"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  {t.bookAppointment}
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Patient Forms Component
const PatientForms = ({ isDarkMode, onClose }: { isDarkMode: boolean; onClose: () => void }) => {
  const t = translations;
  const forms = [
    {
      icon: <FileCheck className="h-8 w-8 text-blue-600" />,
      title: "New Patient Registration",
      description: "Complete this form to register as a new patient at our facility.",
      downloadUrl: "https://www.pdffiller.com/preview/29/855/29855080.png",
      fileName: "new-patient-registration.pdf"
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-blue-600" />,
      title: "Medical History Form",
      description: "Comprehensive medical history questionnaire to help us provide better care.",
      downloadUrl: "https://www.pdffiller.com/preview/100/20/100020487.png",
      fileName: "medical-history.pdf"
    },
    {
      icon: <FileTextIcon className="h-8 w-8 text-blue-600" />,
      title: "Insurance Information",
      description: "Form to provide your insurance details and coverage information.",
      downloadUrl: "https://www.pdffiller.com/preview/481/718/481718337.png",
      fileName: "insurance-information.pdf"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-blue-600" />,
      title: "Consent Forms",
      description: "Various consent forms for different medical procedures and treatments.",
      downloadUrl: "https://www.pdffiller.com/preview/542/612/542612435.png",
      fileName: "consent-forms.pdf"
    },
    {
      icon: <FileTextIcon className="h-8 w-8 text-blue-600" />,
      title: "HIPAA Privacy Form",
      description: "Required form acknowledging our privacy practices and your rights.",
      downloadUrl: "https://www.pdffiller.com/preview/100/20/100020488.png",
      fileName: "hipaa-privacy.pdf"
    },
    {
      icon: <FileTextIcon className="h-8 w-8 text-blue-600" />,
      title: "Emergency Contact Form",
      description: "Form to provide emergency contact information and authorized individuals.",
      downloadUrl: "https://www.pdffiller.com/preview/100/20/100020489.png",
      fileName: "emergency-contact.pdf"
    }
  ];

  const handleDownload = (url: string, fileName: string) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = fileName;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 overflow-y-auto`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Patient Forms</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <p className="text-lg opacity-80 mb-12 max-w-3xl">
          Download and complete these forms before your visit to save time during your appointment. All forms are available in PDF format for easy printing and completion. Please bring the completed forms to your appointment.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {forms.map((form, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center mb-4">
                {form.icon}
                <h3 className="text-xl font-semibold ml-3">{form.title}</h3>
              </div>
              <p className="opacity-80 mb-4">{form.description}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleDownload(form.downloadUrl, form.fileName)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Download className="h-5 w-5 mr-1" />
                  Download PDF
                </button>
                <a
                  href={form.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-gray-700"
                >
                  <Eye className="h-5 w-5 mr-1" />
                  Preview
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <h3 className="text-xl font-semibold mb-4">Important Notes:</h3>
          <ul className="list-disc list-inside space-y-2 opacity-80">
            <li>{t.note1}</li>
            <li>{t.note2}</li>
            <li>{t.note3}</li>
            <li>{t.note4}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Insurance & Payments Component
const InsurancePayments = ({ isDarkMode, onClose }: { isDarkMode: boolean; onClose: () => void }) => {
  const t = translations;
  const insuranceInfo = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Accepted Insurance Plans",
      description: "We accept most major insurance providers including Medicare and Medicaid.",
      details: [
        "Blue Cross Blue Shield",
        "Aetna",
        "UnitedHealthcare",
        "Cigna",
        "Medicare",
        "Medicaid"
      ]
    },
    {
      icon: <CreditCardIcon className="h-8 w-8 text-blue-600" />,
      title: "Payment Options",
      description: "Flexible payment options to make healthcare accessible for everyone.",
      details: [
        "Credit/Debit Cards",
        "Health Savings Accounts (HSA)",
        "Flexible Spending Accounts (FSA)",
        "Payment Plans Available",
        "Online Bill Pay"
      ]
    },
    {
      icon: <Receipt className="h-8 w-8 text-blue-600" />,
      title: "Billing & Statements",
      description: "Clear and transparent billing process with detailed statements.",
      details: [
        "Electronic Statements",
        "Paper Statements Available",
        "Online Payment Portal",
        "Billing Support Team",
        "Financial Assistance Programs"
      ]
    }
  ];

  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 overflow-y-auto`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Insurance & Payments</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <p className="text-lg opacity-80 mb-12 max-w-3xl">
          We strive to make healthcare accessible and affordable for all our patients. Learn about our accepted insurance plans, payment options, and billing processes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {insuranceInfo.map((info, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center mb-4">
                {info.icon}
                <h3 className="text-xl font-semibold ml-3">{info.title}</h3>
              </div>
              <p className="opacity-80 mb-4">{info.description}</p>
              <ul className="list-disc list-inside opacity-80 space-y-2">
                {info.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Health Education Component
const HealthEducation = ({ isDarkMode, onClose }: { isDarkMode: boolean; onClose: () => void }) => {
  const t = translations;
  const resources = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Health Articles",
      description: "Comprehensive articles on various health topics written by our medical experts.",
      topics: [
        "Preventive Care",
        "Nutrition & Diet",
        "Exercise & Fitness",
        "Mental Health",
        "Chronic Disease Management"
      ]
    },
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      title: "Educational Videos",
      description: "Video content explaining medical procedures and health concepts.",
      topics: [
        "Understanding Your Diagnosis",
        "Treatment Options",
        "Lifestyle Tips",
        "Exercise Demonstrations",
        "Medication Guides"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Support Groups",
      description: "Join our community support groups for various health conditions.",
      topics: [
        "Diabetes Support",
        "Heart Health Group",
        "Mental Wellness Circle",
        "Parent Support Network",
        "Senior Health Forum"
      ]
    }
  ];

  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 overflow-y-auto`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Health Education Resources</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <p className="text-lg opacity-80 mb-12 max-w-3xl">
          Access our comprehensive library of health education resources designed to help you make informed decisions about your health and well-being.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center mb-4">
                {resource.icon}
                <h3 className="text-xl font-semibold ml-3">{resource.title}</h3>
              </div>
              <p className="opacity-80 mb-4">{resource.description}</p>
              <ul className="list-disc list-inside opacity-80 space-y-2">
                {resource.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// BlogPost Component
const BlogPost = ({ isDarkMode, onClose, post, onRelatedArticleClick }: { isDarkMode: boolean; onClose: () => void; post: any; onRelatedArticleClick: (post: any) => void }) => {
  // Define related articles based on the current post
  const getRelatedArticles = (currentPost: any) => {
    switch (currentPost.title) {
      case "Understanding Preventive Care":
        return [
          {
            title: "The Importance of Regular Health Screenings",
            date: "March 1, 2025",
            excerpt: "Learn about essential health screenings and when you should get them.",
            readTime: 7,
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            content: [
              {
                subheading: "Why Health Screenings Matter",
                paragraphs: [
                  "Regular health screenings are vital for early detection and prevention of various health conditions.",
                  "Different age groups and risk factors require different types of screenings."
                ]
              },
              {
                subheading: "Common Health Screenings",
                bullets: [
                  "Blood pressure and cholesterol checks",
                  "Cancer screenings (mammograms, colonoscopy)",
                  "Diabetes screening",
                  "Bone density tests",
                  "Vision and hearing tests"
                ]
              }
            ]
          },
          {
            title: "Vaccination Schedule for Adults",
            date: "February 28, 2025",
            excerpt: "Stay up-to-date with recommended vaccinations for adults.",
            readTime: 6,
            image: "https://images.unsplash.com/photo-1632685062337-095b120f8a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            content: [
              {
                subheading: "Adult Vaccination Guidelines",
                paragraphs: [
                  "Keeping up with vaccinations is crucial for maintaining good health throughout adulthood.",
                  "Many vaccines require periodic boosters to maintain effectiveness."
                ]
              }
            ]
          },
          {
            title: "Mental Health Check-ups",
            date: "February 25, 2025",
            excerpt: "Understanding the importance of regular mental health assessments.",
            readTime: 8,
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            content: [
              {
                subheading: "Mental Health Awareness",
                paragraphs: [
                  "Regular mental health check-ups are as important as physical health screenings.",
                  "Early intervention can prevent more serious mental health issues."
                ]
              }
            ]
          }
        ];
      case "COVID-19 Updates":
        return [
          {
            title: "Long COVID: Understanding the Long-term Effects",
            date: "March 8, 2025",
            excerpt: "Comprehensive guide to long COVID symptoms and management.",
            readTime: 9,
            image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            content: [
              {
                subheading: "Long COVID Symptoms",
                paragraphs: [
                  "Long COVID can affect multiple organ systems and persist for months.",
                  "Understanding and managing long-term symptoms is crucial for recovery."
                ]
              }
            ]
          },
          {
            title: "New Variants and Vaccine Efficacy",
            date: "March 5, 2025",
            excerpt: "Latest research on COVID-19 variants and vaccine effectiveness.",
            readTime: 7,
            image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            content: [
              {
                subheading: "Variant Tracking",
                paragraphs: [
                  "Continuous monitoring of new variants helps in vaccine development.",
                  "Understanding how variants affect vaccine efficacy is crucial."
                ]
              }
            ]
          },
          {
            title: "Post-Pandemic Healthcare",
            date: "March 1, 2025",
            excerpt: "How healthcare has evolved since the pandemic began.",
            readTime: 8,
            image: "https://images.unsplash.com/photo-1587746746689-c35c4a0be986?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            content: [
              {
                subheading: "Healthcare Evolution",
                paragraphs: [
                  "The pandemic has transformed healthcare delivery systems.",
                  "Telemedicine and remote care have become mainstream."
                ]
              }
            ]
          }
        ];
      case "Healthy Living Tips":
        return [
          {
            title: "Nutrition Basics: Building a Balanced Diet",
            date: "March 3, 2025",
            excerpt: "Essential guidelines for maintaining a healthy diet.",
            readTime: 7,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            content: [
              {
                subheading: "Balanced Nutrition",
                paragraphs: [
                  "Understanding macronutrients and micronutrients is key to a healthy diet.",
                  "Proper portion control and meal timing can optimize health benefits."
                ]
              }
            ]
          },
          {
            title: "Exercise for Beginners",
            date: "February 28, 2025",
            excerpt: "Starting your fitness journey with simple exercises.",
            readTime: 6,
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            content: [
              {
                subheading: "Getting Started",
                paragraphs: [
                  "Beginning an exercise routine doesn't have to be intimidating.",
                  "Simple, consistent activities can lead to significant health improvements."
                ]
              }
            ]
          },
          {
            title: "Stress Management Techniques",
            date: "February 25, 2025",
            excerpt: "Effective ways to manage daily stress and anxiety.",
            readTime: 8,
            image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
            content: [
              {
                subheading: "Managing Stress",
                paragraphs: [
                  "Stress management is crucial for both mental and physical health.",
                  "Various techniques can help reduce and cope with daily stressors."
                ]
              }
            ]
          }
        ];
      default:
        return [];
    }
  };

  const relatedArticles = getRelatedArticles(post);

  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 overflow-y-auto`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm opacity-70">
              <span className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {post.content.map((section: any, index: number) => (
            <div key={index} className="mb-8">
              {section.subheading && (
                <h2 className="text-2xl font-semibold mb-4">{section.subheading}</h2>
              )}
              {section.paragraphs.map((paragraph: string, pIndex: number) => (
                <p key={pIndex} className="opacity-80 mb-4">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc list-inside space-y-2 opacity-80 mt-4">
                  {section.bullets.map((bullet: string, bIndex: number) => (
                    <li key={bIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-semibold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article, index) => (
              <div
                key={index}
                onClick={() => onRelatedArticleClick(article)}
                className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                } hover:shadow-md transition-shadow cursor-pointer`}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold mb-2">{article.title}</h4>
                <p className="text-sm opacity-60 mb-2">{article.date}</p>
                <p className="text-sm opacity-80">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Privacy Policy Component
const PrivacyPolicy = ({ isDarkMode, onClose }: { isDarkMode: boolean; onClose: () => void }) => {
  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 overflow-y-auto`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Personal identification information (Name, address, contact details)</li>
              <li>Medical history and health information</li>
              <li>Insurance information</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our healthcare services</li>
              <li>Communicate with you about appointments and treatments</li>
              <li>Process your payments and insurance claims</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Healthcare providers involved in your care</li>
              <li>Insurance companies for billing purposes</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or destruction.</p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Request corrections to your information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of certain data sharing</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

// Terms of Service Component
const TermsOfService = ({ isDarkMode, onClose }: { isDarkMode: boolean; onClose: () => void }) => {
  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 overflow-y-auto`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section className="mb-8">
            <h2>Medical Services</h2>
            <p>Our healthcare services are provided by licensed medical professionals. However:</p>
            <ul>
              <li>Emergency situations may require immediate in-person medical attention</li>
              <li>Online services are not a substitute for emergency medical care</li>
              <li>We reserve the right to refuse service to anyone</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Appointments and Cancellations</h2>
            <p>Please note our appointment and cancellation policies:</p>
            <ul>
              <li>24-hour notice required for appointment cancellations</li>
              <li>Late arrivals may result in shortened appointment times</li>
              <li>Missed appointments may incur a fee</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Payment Terms</h2>
            <p>Payment is required at the time of service unless other arrangements have been made. We accept various payment methods and insurance plans.</p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>While we strive to provide the best possible care, we are not liable for:</p>
            <ul>
              <li>Outcomes of medical treatments</li>
              <li>Indirect or consequential damages</li>
              <li>Issues arising from third-party services</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

// Accessibility Component
const Accessibility = ({ isDarkMode, onClose }: { isDarkMode: boolean; onClose: () => void }) => {
  return (
    <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 overflow-y-auto`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Accessibility</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2>Our Commitment</h2>
            <p>We are committed to providing an accessible website and healthcare facility for all users, including those with disabilities.</p>
          </section>

          <section className="mb-8">
            <h2>Website Accessibility</h2>
            <p>Our website follows WCAG 2.1 guidelines and includes features such as:</p>
            <ul>
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Text resizing options</li>
              <li>Color contrast considerations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Facility Accessibility</h2>
            <p>Our healthcare facility provides:</p>
            <ul>
              <li>Wheelchair accessible entrances and rooms</li>
              <li>Accessible parking spaces</li>
              <li>Support for service animals</li>
              <li>Assistive listening devices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Communication Support</h2>
            <p>We offer various communication accommodations:</p>
            <ul>
              <li>Sign language interpretation (with advance notice)</li>
              <li>Written materials in alternative formats</li>
              <li>Clear face masks for lip reading</li>
              <li>Language translation services</li>
            </ul>
          </section>

          <section>
            <h2>Feedback</h2>
            <p>We welcome feedback on how we can improve accessibility. Please contact us if you encounter any accessibility barriers or have suggestions for improvement.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

// Medical Staff Component
const MedicalStaff = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const staff = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief of Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Dr. Johnson is a renowned cardiologist with over 15 years of experience in treating complex heart conditions.",
      specialties: ["Interventional Cardiology", "Heart Disease", "Cardiac Rehabilitation"]
    },
    {
      name: "Dr. Michael Chen",
      title: "Neurosurgery Specialist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Leading expert in minimally invasive brain surgery and neurological disorders treatment.",
      specialties: ["Brain Surgery", "Spine Surgery", "Neurological Disorders"]
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Pediatric Department Head",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Specialized in pediatric care with a focus on early childhood development and chronic conditions.",
      specialties: ["General Pediatrics", "Pediatric Emergency", "Child Development"]
    },
    {
      name: "Dr. James Wilson",
      title: "Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Expert in sports medicine and joint replacement surgery with advanced training in robotic procedures.",
      specialties: ["Joint Replacement", "Sports Medicine", "Trauma Surgery"]
    },
    {
      name: "Dr. Lisa Thompson",
      title: "Emergency Medicine Director",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Experienced in managing critical care situations and emergency department operations.",
      specialties: ["Emergency Medicine", "Critical Care", "Trauma Management"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === staff.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? staff.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Remarkable Medical Staff</h2>
          <p className="opacity-80 max-w-2xl mx-auto">
            Meet our team of experienced and dedicated medical professionals committed to providing exceptional healthcare services.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {staff.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`max-w-4xl mx-auto ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <img className="h-96 w-full md:w-96 object-cover" src={member.image} alt={member.name} />
                      </div>
                      <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{member.title}</div>
                        <h3 className="mt-2 text-2xl font-semibold">{member.name}</h3>
                        <p className="mt-4 text-lg opacity-80">{member.description}</p>
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold mb-2">Specialties:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, idx) => (
                              <span 
                                key={idx}
                                className={`px-3 py-1 rounded-full text-sm ${
                                  isDarkMode 
                                    ? 'bg-blue-900/30 text-blue-200' 
                                    : 'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
          >
            <ChevronFirst className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {staff.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-6' 
                    : isDarkMode 
                      ? 'bg-gray-600 hover:bg-gray-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [showPatientForms, setShowPatientForms] = useState(false);
  const [showInsurancePayments, setShowInsurancePayments] = useState(false);
  const [showHealthEducation, setShowHealthEducation] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  
  // Add form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    department: 'General Medicine'
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send appointment request');
      }

      // Clear form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        preferredDate: '',
        department: 'General Medicine'
      });

      alert('Thank you for your appointment request. We will contact you shortly.');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const t = translations;

  const blogPosts = [
    {
      title: "Understanding Preventive Care",
      date: "March 15, 2025",
      excerpt: "Learn about the importance of regular check-ups and preventive healthcare measures.",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      content: [
        {
          subheading: "What is Preventive Care?",
          paragraphs: [
            "Preventive care consists of health services like screenings, check-ups, and patient counseling that are used to prevent illnesses, disease, and other health problems. It is one of the most important steps you can take to manage your health.",
            "Regular preventive care can help you stay healthy and access prompt treatment when necessary, as well as help reduce your overall medical expenses."
          ]
        },
        {
          subheading: "Key Components of Preventive Care",
          paragraphs: [
            "Preventive care encompasses a variety of healthcare services designed to keep you healthy and catch potential health issues early when they're most treatable."
          ],
          bullets: [
            "Annual physical examinations",
            "Immunizations and vaccinations",
            "Cancer screenings",
            "Blood pressure and cholesterol checks",
            "Mental health screenings",
            "Lifestyle counseling"
          ]
        },
        {
          subheading: "Benefits of Regular Check-ups",
          paragraphs: [
            "Regular check-ups are essential for maintaining good health and preventing serious medical conditions. They allow your healthcare provider to track your health over time and identify potential issues before they become serious.",
            "Early detection through preventive care can lead to better treatment outcomes and can often be more cost-effective than treating a condition that has progressed."
          ]
        }
      ]
    },
    {
      title: "COVID-19 Updates",
      date: "March 10, 2025",
      excerpt: "Latest information about COVID-19 variants, vaccines, and safety measures.",
      readTime: 10,
      image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      content: [
        {
          subheading: "Current Situation",
          paragraphs: [
            "As we continue to navigate the COVID-19 pandemic, staying informed about the latest developments, variants, and safety measures is crucial for protecting yourself and your community.",
            "Our healthcare facility remains committed to providing up-to-date information and comprehensive care during these challenging times."
          ]
        },
        {
          subheading: "Latest Safety Guidelines",
          paragraphs: [
            "The CDC and WHO continue to update their guidelines based on the latest scientific evidence and emerging variants."
          ],
          bullets: [
            "Wear masks in high-risk situations",
            "Maintain good hand hygiene",
            "Stay up to date with vaccinations",
            "Monitor local transmission rates",
            "Follow isolation guidelines if exposed"
          ]
        },
        {
          subheading: "Vaccination Information",
          paragraphs: [
            "Vaccines remain our best defense against severe illness from COVID-19. We offer the latest approved vaccines and boosters at our facility.",
            "Schedule your vaccination appointment today to ensure you have the most current protection against emerging variants."
          ]
        }
      ]
    },
    {
      title: "Healthy Living Tips",
      date: "March 5, 2025",
      excerpt: "Simple lifestyle changes that can significantly improve your health and well-being.",
      readTime: 6,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      content: [
        {
          subheading: "Building Healthy Habits",
          paragraphs: [
            "Creating and maintaining healthy habits is key to improving your overall well-being. Small, consistent changes can lead to significant health benefits over time.",
            "This guide will help you implement practical lifestyle changes that are both sustainable and effective."
          ]
        },
        {
          subheading: "Essential Health Tips",
          paragraphs: [
            "Here are some fundamental practices that can help improve your health and quality of life:"
          ],
          bullets: [
            "Get 7-9 hours of quality sleep each night",
            "Eat a balanced diet rich in whole foods",
            "Exercise for at least 30 minutes daily",
            "Stay hydrated by drinking plenty of water",
            "Practice stress management techniques",
            "Maintain social connections"
          ]
        },
        {
          subheading: "Making Sustainable Changes",
          paragraphs: [
            "The key to successful lifestyle changes is making them sustainable. Start small and gradually build up to bigger changes.",
            "Remember that progress isn't always linear, and it's okay to have setbacks. The important thing is to stay committed to your health goals and keep moving forward."
          ]
        }
      ]
    }
  ];

  const handleRelatedArticleClick = (article: any) => {
    setSelectedBlogPost(article);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm shadow-sm z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Heart className={`h-8 w-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className="ml-2 text-2xl font-semibold">HealthCare</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">{t.home}</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">{t.aboutUs}</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">{t.services}</a>
              <a href="#appointments" className="hover:text-blue-600 transition-colors">{t.appointments}</a>
              <a href="#resources" className="hover:text-blue-600 transition-colors">{t.resources}</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">{t.contact}</a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden fixed inset-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} z-40 pt-20`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-base font-medium">{t.home}</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium">{t.aboutUs}</a>
            <a href="#services" className="block px-3 py-2 text-base font-medium">{t.services}</a>
            <a href="#appointments" className="block px-3 py-2 text-base font-medium">{t.appointments}</a>
            <a href="#resources" className="block px-3 py-2 text-base font-medium">{t.resources}</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium">{t.contact}</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.heroTitle}
              </h1>
              <p className="text-lg opacity-80 mb-8">
                {t.heroSubtitle}
              </p>
              <div className="space-x-4">
                <a 
                  href="#appointments" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t.bookAppointment}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#emergency" 
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  {t.emergencyCare}
                  <AlertCircle className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Medical professionals in consultation" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.aboutTitle}</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              {t.aboutSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <ul className="list-disc list-inside opacity-80 space-y-2">
                <li>Provide exceptional healthcare services to enhance community well-being</li>
                <li>Deliver compassionate care and medical excellence</li>
                <li>Pioneer innovative treatments and solutions</li>
                <li>Make quality healthcare accessible to all</li>
                <li>Maintain highest standards of patient care and safety</li>
              </ul>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <ul className="list-disc list-inside opacity-80 space-y-2">
                <li>Be the leading healthcare provider in excellence</li>
                <li>Pioneer advanced medical treatments</li>
                <li>Deliver outstanding community service</li>
                <li>Create a healthier future through technology</li>
                <li>Ensure personalized care for every patient</li>
                <li>Set new standards in medical excellence</li>
              </ul>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="list-disc list-inside opacity-80 space-y-2">
                <li>Excellence in patient care and safety</li>
                <li>Compassion and empathy</li>
                <li>Innovation</li>
                <li>Integrity and ethics</li>
                <li>Collaboration</li>
                <li>Community engagement</li>
                <li>Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.servicesTitle}</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              {t.servicesSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
                title: "General Medicine",
                description: "Comprehensive primary healthcare including routine check-ups, vaccinations, and preventive care"
              },
              {
                icon: <ChevronFirst className="h-8 w-8 text-blue-600" />,
                title: "Emergency Care",
                description: "24/7 emergency medical services with rapid response teams and fully equipped trauma units"
              },
              {
                icon: <Activity className="h-8 w-8 text-blue-600" />,
                title: "Cardiology",
                description: "Advanced cardiac care including ECG, stress tests, and heart disease management"
              },
              {
                icon: <Brain className="h-8 w-8 text-blue-600" />,
                title: "Neurology",
                description: "Specialized care for neurological disorders with advanced diagnostic capabilities"
              },
              {
                icon: <Bone className="h-8 w-8 text-blue-600" />,
                title: "Orthopedics",
                description: "Treatment for bone and joint conditions, sports injuries, and rehabilitation services"
              },
              {
                icon: <Baby className="h-8 w-8 text-blue-600" />,
                title: "Pediatrics",
                description: "Comprehensive children's healthcare from newborns to adolescents"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md hover:shadow-lg transition-shadow`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="opacity-80">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAllServices(true)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.viewAllServices}
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Appointments Section */}
      <section id="appointments" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.bookAppointmentTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.fullName}</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.email}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.phone}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.preferredDate}</label>
                  <input 
                    type="date" 
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.department}</label>
                  <select 
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 rounded-md ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600' 
                        : 'border-gray-300'
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  >
                    <option>General Medicine</option>
                    <option>Cardiology</option>
                    <option>Pediatrics</option>
                    <option>Orthopedics</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {t.scheduleAppointment}
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-medium">{t.workingHours}</h3>
                  <p className="opacity-80">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="opacity-80">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="opacity-80">Sunday: Emergency Only</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="opacity-80">(555) 123-4567</p>
                  <p className="opacity-80">Emergency: (555) 911-1234</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="opacity-80">123 Healthcare Avenue</p>
                  <p className="opacity-80">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Resources Section */}
      <section id="resources" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.patientResources}</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              {t.patientResourcesSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <FileText className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.downloadForms}</h3>
              <p className="opacity-80 mb-4">
                Download and complete necessary forms before your visit to save time
              </p>
              <button 
                onClick={() => setShowPatientForms(true)}
                className="text-blue-600 hover:underline"
              >
                {t.downloadForms} →
              </button>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <CreditCard className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.insurancePayments}</h3>
              <p className="opacity-80 mb-4">
                Information about accepted insurance providers and payment options
              </p>
              <button 
                onClick={() => setShowInsurancePayments(true)}
                className="text-blue-600 hover:underline"
              >
                Learn More →
              </button>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.healthEducation}</h3>
              <p className="opacity-80 mb-4">
                Access our library of health resources and educational materials
              </p>
              <button 
                onClick={() => setShowHealthEducation(true)}
                className="text-blue-600 hover:underline"
              >
                Browse Resources →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add MedicalStaff section before Testimonials */}
      <MedicalStaff isDarkMode={isDarkMode} />

      {/* Testimonials Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.testimonials}</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              {t.testimonialsSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                text: "Exceptional care and attention to detail. The staff was professional and caring throughout my treatment."
              },
              {
                name: "Sarah Johnson",
                text: "The doctors here are amazing. They took the time to explain everything and made me feel comfortable."
              },
              {
                name: "Michael Brown",
                text: "State-of-the-art facility with a caring team. I couldn't be happier with my experience."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}
              >
                <p className="opacity-80 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Information Section */}
      <section id="emergency" className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.emergencyCareTitle}</h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              {t.emergencyServices}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t.emergencyHotline}</h3>
              <p className="text-3xl font-bold mb-2">(555) 911-1234</p>
              <p className="opacity-90">Available 24 hours a day, 7 days a week</p>
            </div>
            <div className="bg-red-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t.whenToSeek}</h3>
              <ul className="list-disc list-inside opacity-90 space-y-2">
                <li>Severe chest pain or difficulty breathing</li>
                <li>Severe injuries or trauma</li>
                <li>Stroke symptoms</li>
                <li>Severe allergic reactions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.healthUpdates}</h2>
            <p className="opacity-80 max-w-2xl mx-auto">
              {t.healthUpdatesSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm opacity-60 mb-4">{post.date}</p>
                <p className="opacity-80 mb-4">{post.excerpt}</p>
                <button 
                  onClick={() => setSelectedBlogPost(post)}
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  {t.readMore}
                  <ChevronRight className="ml-1 h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add AllServices component before the footer */}
      {showAllServices && (
        <AllServices
          isDarkMode={isDarkMode}
          onClose={() => setShowAllServices(false)}
        />
      )}

      {/* Add components before the footer */}
      {showPatientForms && (
        <PatientForms
          isDarkMode={isDarkMode}
          onClose={() => setShowPatientForms(false)}
        />
      )}
      {showInsurancePayments && (
        <InsurancePayments
          isDarkMode={isDarkMode}
          onClose={() => setShowInsurancePayments(false)}
        />
      )}
      {showHealthEducation && (
        <HealthEducation
          isDarkMode={isDarkMode}
          onClose={() => setShowHealthEducation(false)}
        />
      )}

      {selectedBlogPost && (
        <BlogPost
          isDarkMode={isDarkMode}
          onClose={() => setSelectedBlogPost(null)}
          post={selectedBlogPost}
          onRelatedArticleClick={handleRelatedArticleClick}
        />
      )}

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-900 text-white'} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-semibold">HealthCare</span>
              </div>
              <p className="text-gray-400">
                {t.providingQuality}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">{t.home}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">{t.aboutUs}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">{t.services}</a></li>
                <li><a href="#appointments" className="text-gray-400 hover:text-white">{t.appointments}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.legal}</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowPrivacyPolicy(true)}
                    className="text-gray-400 hover:text-white"
                  >
                    {t.privacyPolicy}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowTermsOfService(true)}
                    className="text-gray-400 hover:text-white"
                  >
                    {t.termsOfService}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowAccessibility(true)}
                    className="text-gray-400 hover:text-white"
                  >
                    {t.accessibility}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.emergencyContact}</h3>
              <p className="text-gray-400">{t.emergencyLine}</p>
              <p className="text-white text-xl">(555) 911-1234</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>{t.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Legal Pages */}
      {showPrivacyPolicy && (
        <PrivacyPolicy
          isDarkMode={isDarkMode}
          onClose={() => setShowPrivacyPolicy(false)}
        />
      )}
      {showTermsOfService && (
        <TermsOfService
          isDarkMode={isDarkMode}
          onClose={() => setShowTermsOfService(false)}
        />
      )}
      {showAccessibility && (
        <Accessibility
          isDarkMode={isDarkMode}
          onClose={() => setShowAccessibility(false)}
        />
      )}
    </div>
  );
}

export default App;