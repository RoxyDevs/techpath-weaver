# 💡 TechPath Weaver

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
  <img src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
</div>

<div align="center">
  <h3>👩‍💻 AI-Powered Career Guide for Women in Tech | Guía de Carrera con IA para Mujeres en Tecnología</h3>
</div>

---

## 🎯 About | Sobre el Proyecto

**English**: TechPath Weaver is an innovative AI-powered platform designed to empower women in their tech career journey. Using cutting-edge AI technology from Google Gemini, it provides personalized career recommendations, skill gap analysis, intelligent mentor matching, and progress tracking.

**Español**: TechPath Weaver es una plataforma innovadora impulsada por IA diseñada para empoderar a las mujeres en su trayectoria profesional tecnológica. Utilizando tecnología de IA de vanguardia de Google Gemini, proporciona recomendaciones de carrera personalizadas, análisis de brechas de habilidades, emparejamiento inteligente de mentoras y seguimiento del progreso.

---

## 🚀 Key Features | Características Principales

- 🔍 **Personalized Career Recommendations** | **Recomendaciones personalizadas de carrera**
  - AI-powered suggestions based on your profile, skills, and interests
  - Sugerencias impulsadas por IA basadas en tu perfil, habilidades e intereses

- 🧠 **Skill Gap Analysis** | **Análisis de Brechas de Habilidades**
  - Identify missing skills and get course recommendations
  - Identifica habilidades faltantes y obtiene recomendaciones de cursos

- 🤝 **Smart Mentor Matching** | **Emparejamiento Inteligente de Mentoras**
  - Connect with mentors who align with your goals and interests
  - Conéctate con mentoras que se alinean con tus objetivos e intereses

- 📊 **Progress Tracking** | **Seguimiento del Progreso**
  - Monitor your achievements and career milestones
  - Monitorea tus logros e hitos profesionales

- 💬 **Telegram Bot Integration** | **Integración con Bot de Telegram**
  - Quick consultations and updates via Telegram
  - Consultas rápidas y actualizaciones a través de Telegram

- 🧠 **AI-Powered Chat** | **Chat Impulsado por IA**
  - Interactive conversations with Gemini AI for career guidance
  - Conversaciones interactivas con IA Gemini para orientación profesional

---

## 🛠️ Tech Stack | Stack Tecnológico

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library

### Backend & Services
- **Firebase**
  - Authentication (Email, Google, GitHub)
  - Firestore (NoSQL database)
  - Cloud Functions (Serverless backend)
  - Hosting (Static site hosting)
  - Storage (File uploads)

### AI & Machine Learning
- **Google Gemini API** - Advanced AI language model
- **Firebase Genkit** - AI integration framework
- **LangChain** - AI orchestration

### Integrations
- **Telegram Bot API** - Bot integration
- **Discord Webhooks** - Community notifications
- **SendGrid** - Email service

### SEO & Analytics
- **Next SEO** - SEO optimization
- **Schema.org** - Structured data
- **Open Graph** - Social media previews
- **Google Analytics** - Usage tracking

---

## 💻 Installation | Instalación

### Prerequisites | Requisitos Previos

```bash
# Node.js 18.x or higher
node --version

# npm or yarn
npm --version
```

### Step 1: Clone the Repository | Clonar el Repositorio

```bash
git clone https://github.com/RoxyDevs/techpath-weaver.git
cd techpath-weaver
```

### Step 2: Install Dependencies | Instalar Dependencias

```bash
npm install
# or
yarn install
```

### Step 3: Environment Setup | Configuración del Entorno

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Gemini AI Configuration
GEMINI_API_KEY=your_gemini_api_key

# Telegram Bot (Optional)
TELEGRAM_BOT_TOKEN=your_telegram_token

# SendGrid (Optional)
SENDGRID_API_KEY=your_sendgrid_key
```

### Step 4: Firebase Setup | Configuración de Firebase

1. Create a new Firebase project at https://console.firebase.google.com
2. Enable Authentication (Email/Password, Google, GitHub)
3. Create a Firestore database
4. Copy your Firebase config to `.env.local`

### Step 5: Run Development Server | Ejecutar Servidor de Desarrollo

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Deployment | Construcción y Despliegue

### Build for Production | Construir para Producción

```bash
npm run build
npm start
```

### Deploy to Firebase Hosting | Desplegar en Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init

# Deploy
firebase deploy
```

### Deploy to Vercel | Desplegar en Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

---

## 📚 Usage Guide | Guía de Uso

### For Users | Para Usuarios

1. **Sign Up / Register** | **Registrarse**
   - Create an account using email or social login
   - Complete your profile with skills and interests

2. **Take the Assessment** | **Realizar la Evaluación**
   - Answer questions about your current skills and goals
   - Get personalized career path recommendations

3. **Explore Resources** | **Explorar Recursos**
   - Browse courses, tutorials, and job opportunities
   - Save favorites to your dashboard

4. **Connect with Mentors** | **Conectar con Mentoras**
   - Find mentors based on your interests
   - Schedule mentoring sessions

5. **Track Progress** | **Seguir el Progreso**
   - Monitor your learning journey
   - Earn achievements and badges

### For Developers | Para Desarrolladores

#### Project Structure | Estructura del Proyecto

```
techpath-weaver/
├── app/              # Next.js App Router
├── components/       # React components
├── lib/              # Utilities and helpers
├── firebase/         # Firebase configuration
├── functions/        # Cloud Functions
├── public/           # Static assets
├── styles/           # Global styles
└── types/            # TypeScript types
```

#### Adding New Features | Añadir Nuevas Funcionalidades

1. Create feature branch: `git checkout -b feature/new-feature`
2. Implement your feature
3. Write tests
4. Submit pull request

---

## 🧪 Testing | Pruebas

```bash
# Run unit tests
npm test

# Run e2e tests
npm run test:e2e

# Check coverage
npm run test:coverage
```

---

## 🐛 Known Issues & Roadmap | Problemas Conocidos y Hoja de Ruta

### Current Issues | Problemas Actuales
- [ ] Telegram bot response time optimization
- [ ] Mobile UI improvements for mentor matching

### Upcoming Features | Próximas Funcionalidades
- [ ] Video call integration for mentoring sessions
- [ ] Job board with AI-powered matching
- [ ] Community forum
- [ ] Mobile app (React Native)
- [ ] Multi-language support (Portuguese, French)

---

## 🤝 Contributing | Contribuciones

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct.

---

## ⚖️ License | Licencia

This repository is distributed under the **Creative Commons Zero v1.0 Universal (CC0 1.0)** license.

The content can be freely used, even for commercial purposes, without the need for attribution.

> **However**, the name, visual identity, and concept of **TechPath Weaver** are intellectual property of **Roxana Rolón** and cannot be reused for commercial or branding purposes without express consent.

---

## 💬 Connect | Conectar

- 💼 [LinkedIn - Roxana Rolón](https://www.linkedin.com/in/roxdevs/)
- 🐦 [Twitter](https://twitter.com/roksrolon)
- 👾 [Discord: Proyecto Dev Latam](https://discord.gg/)
- 📧 Email: roxanarolon@example.com

---

## 🙏 Acknowledgments | Agradecimientos

- Google Gemini AI for powering the intelligent recommendations
- Firebase team for the amazing backend infrastructure
- The Dev Latam community for support and feedback
- All the amazing women in tech who inspire this project

---

<div align="center">
  <p>✨ <i>TechPath Weaver: Weaving paths to the technological future of women | Tejiendo caminos hacia el futuro tecnológico de las mujeres</i> ✨</p>
  <p>Made with ❤️ by <a href="https://github.com/RoxyDevs">Roxana Rolón</a></p>
</div>
