# Rails React SaaS Boilerplate

Un boilerplate moderne et prêt à l'emploi pour développer des applications SaaS avec Rails 8, React, et Inertia.js.

## 🚀 Stack Technologique

### Backend
- **Rails 8.0** - Framework web Ruby
- **PostgreSQL** - Base de données
- **Devise** - Authentification utilisateur
- **SolidQueue** - Jobs en arrière-plan
- **SolidCache** - Système de cache
- **rest-client** - Appels API

### Frontend
- **React 18** - Interface utilisateur
- **TypeScript** - Typage statique
- **Inertia.js** - Pont Rails ↔ React
- **Vite** - Build tool et serveur de développement
- **Tailwind CSS** - Framework CSS utilitaire

### Outils de développement
- **RSpec** - Tests
- **Factory Bot** - Données de test
- **Rubocop** - Linting Ruby
- **rails-erd** - Génération de diagrammes de base de données

## 📊 Schéma de base de données

![Database Schema](erd.pdf)

*Le diagramme est automatiquement généré avec `rails-erd` à chaque migration.*

## 🛠 Installation

### Prérequis
- Ruby 3.3.4
- Node.js 18+ 
- PostgreSQL
- Yarn

### Configuration

1. **Cloner le repository**
```bash
git clone <votre-repo>
cd rails-react-saas-boilerplate
```

2. **Installer les dépendances**
```bash
# Gems Ruby
bundle install

# Packages JavaScript
yarn install
```

3. **Configuration de la base de données**
```bash
# Créer et configurer la base de données
rails db:create
rails db:migrate
rails db:seed
```

4. **Générer le diagramme ERD**
```bash
rake erd:generate
```

## 🏃‍♂️ Démarrage

### Développement
```bash
# Démarrer tous les services (Rails + Vite)
bin/dev
```

Accédez à votre application sur `http://localhost:3000`

### Services individuels
```bash
# Serveur Rails uniquement
rails server

# Serveur Vite uniquement (frontend)
yarn dev
```

## 🌐 Système de traductions

Le système de traductions frontend utilise des fichiers JSON :

- `config/locales/frontend/en.json` - Anglais
- `config/locales/frontend/fr.json` - Français

### Utilisation dans React
```tsx
import { useTranslations } from '@/hooks/useTranslations'

function MyComponent() {
  const { t } = useTranslations()
  
  return <h1>{t('pages.home.welcome')}</h1>
}
```

## 🔧 Commandes utiles

```bash
# Tests
bundle exec rspec

# Linting
bundle exec rubocop

# Type checking TypeScript
yarn type-check

# Générer le diagramme ERD
rake erd:generate

# Console Rails
rails console

# Console de base de données
rails dbconsole
```

## 📁 Structure du projet

```
app/
├── controllers/          # Contrôleurs Rails
├── models/              # Modèles ActiveRecord
├── frontend/            # Code React/TypeScript
│   ├── entrypoints/     # Points d'entrée Vite
│   ├── pages/          # Pages Inertia.js
│   ├── layouts/        # Layouts React
│   ├── hooks/          # Hooks React personnalisés
│   └── stylesheets/    # Styles CSS/Tailwind
config/
├── locales/
│   └── frontend/       # Traductions JSON
└── vite.json          # Configuration ViteRuby
```

## 🚀 Déploiement

Ce boilerplate est configuré pour le déploiement avec :
- **Kamal** (inclus dans Rails 8)
- **Docker** (Dockerfile fourni)

Consultez `config/deploy.yml` pour la configuration Kamal.

## 📝 Fonctionnalités incluses

- ✅ Authentification utilisateur (Devise)
- ✅ Interface React avec TypeScript
- ✅ Système de traductions frontend
- ✅ Jobs en arrière-plan (SolidQueue)
- ✅ Cache performant (SolidCache)
- ✅ Styling moderne (Tailwind CSS)
- ✅ Hot reload en développement
- ✅ Tests configurés (RSpec)
- ✅ Diagrammes ERD automatiques
- ✅ Linting et formatage de code

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
