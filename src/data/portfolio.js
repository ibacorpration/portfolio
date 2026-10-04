import { FiLinkedin, FiGithub, FiMail, FiPhone } from 'react-icons/fi';
import { SiKaggle, SiHuggingface, SiPython, SiCplusplus, SiOpencv, SiTensorflow, SiKeras, SiScikitlearn, SiDocker, SiRailway, SiFastapi, SiGithub, SiWhatsapp } from 'react-icons/si';

export const portfolioData = {
  hero: {
    name: "Ibrahem",
    title: "Junior AI Engineer",
    location: "Cairo, Egypt",
    passions: ["Computer Vision", "RAG Chatbots", "Deep Learning", "AI Automation"],
    summary: "I build intelligent AI systems. With a strong foundation in machine learning and deep learning, I help create smart solutions from computer vision models to document-grounded RAG chatbots.",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ibrahem-sayed-1b38722a4", icon: FiLinkedin },
      { name: "GitHub", url: "https://github.com/ibacorpration", icon: FiGithub },
      { name: "WhatsApp", url: "https://wa.me/201273446781", icon: SiWhatsapp }
      { name: "Phone", url: "tel:01273446781", icon: FiPhone },
      { name: "Email", url: "mailto:ibrahemk09zobj@gmail.com", icon: FiMail },
      { name: "Kaggle", url: "https://www.kaggle.com/", icon: SiKaggle },
    ]
  },
  about: {
    title: "I'm passionate about building AI solutions",
    description: "I'm always open to discussing new projects and opportunities. My background in Computer Science and hands-on training allows me to deliver high-quality intelligent systems.",
    stats: [
      { label: "Production Projects", value: "3", suffix: "+" },
      { label: "B.Sc. Graduate (Excellent)", value: "2026", suffix: "" },
      { label: "Technologies", value: "10", suffix: "+" },
      { label: "Graduation Project: Smart Safe Road", value: "1", suffix: "" }
    ]
  },
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", value: 95 },
        { name: "C++", value: 80 }
      ]
    },
    {
      category: "Computer Vision",
      items: [
        { name: "OpenCV", value: 90 },
        { name: "YOLO", value: 85 },
        { name: "Face & Emotion Recognition", value: 85 },
        { name: "Segmentation", value: 80 }
      ]
    },
    {
      category: "Deep Learning",
      items: [
        { name: "TensorFlow", value: 85 },
        { name: "Keras", value: 85 },
        { name: "Transfer Learning", value: 90 },
        { name: "Scikit-learn", value: 85 }
      ]
    },
    {
      category: "NLP & GenAI",
      items: [
        { name: "Transformers", value: 80 },
        { name: "RAG", value: 85 },
        { name: "Semantic Search", value: 80 },
        { name: "LLMs & AI Agents", value: 80 }
      ]
    },
    {
      category: "Deployment",
      items: [
        { name: "Docker", value: 80 },
        { name: "Railway", value: 85 },
        { name: "FastAPI", value: 90 },
        { name: "Model Deployment", value: 85 }
      ]
    },
    {
      category: "Automation & Tools",
      items: [
        { name: "n8n", value: 75 },
        { name: "GitHub", value: 90 },
        { name: "Kaggle", value: 80 },
        { name: "Roboflow", value: 85 },
        { name: "Hugging Face", value: 85 },
        { name: "Colab", value: 95 }
      ]
    }
  ],
  projects: [
    {
      id: "01",
      title: "Smart Face Attend",
      description: "Face-recognition attendance platform with liveness detection and a RAG chatbot.",
      tags: ["YuNet", "ArcFace", "ONNX", "FastAPI", "React", "Chatbot", "Gemini", "Groq", "Docker"],
      link: "https://iba-corpration.up.railway.app/",
      image: "/attendance.png"
    },
    {
      id: "02",
      title: "Smart Safe Road",
      description: "Real-time traffic monitoring: vehicle detection, tracking, speed estimation, Arabic license plate recognition.",
      tags: ["YOLOv8", "ByteTrack", "OCR", "Computer Vision"],
      link: "https://github.com/ibacorpration",
      image: "/safe-road.png"
    },
    {
      id: "03",
      title: "Tourism AI Assistant",
      description: "Document-grounded Q&A chatbot with PDF ingestion, chunking, embeddings, and conversational memory.",
      tags: ["FastAPI", "Groq", "Sentence Transformers", "ChromaDB"],
      link: "https://github.com/ibacorpration",
      image: "/ai-assistant.png"
    }
  ],
  experience: [
    {
      title: "AI Engineer Training",
      company: "Instant Advanced AI, Egypt",
      date: "Nov 2025 – Present",
      points: [
        "Machine Learning foundations, mathematics, optimization",
        "Deep Learning & Computer Vision: CNNs, YOLO, Transfer Learning, UNet, MediaPipe",
        "NLP, Transformers, GANs, RNNs/LSTMs, RAG, automation, MLOps (Railway / Docker / Azure)"
      ]
    },
    {
      title: "B.Sc. Computer Science",
      company: "Faculty of Computers & Information, Modern Academy",
      date: "Graduating 2026",
      points: [
        "Grade: Excellent",
        "Graduation Project: Smart Safe Road"
      ]
    }
  ]
};
