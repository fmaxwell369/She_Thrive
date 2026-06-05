import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // ── ABOUT SECTION ──────────────────────────────────────────────
      
      "about": {
        "top_label": "Qui nous sommes",
        "title": "À propos de SHE Thrive",
        "intro": "SHE Thrive est un mouvement fondé sur la foi, engagé à restaurer les femmes et à susciter des bâtisseurs de nations. Basés sur les fondements d'Isaïe 61:1–7, nous sommes appelés à guérir, équiper et élever des femmes qui transformeront leurs vies, leurs familles et leurs communautés.",
        "img_alt": "Communauté de femmes SHE Thrive",
        "stat_year": "Année de création de SHE Thrive",
        "story_title": "NOTRE HISTOIRE.",
        "story_p1": "She Thrive International est née d'une conviction profonde et personnelle de voir des vies transformées et des communautés reconstruites. Le voyage a commencé à Yaoundé au Cameroun, où notre fondatrice s'est donné pour mission personnelle de visiter régulièrement des orphelinats. Ce qui a commencé comme de simples actes de gentillesse s'est rapidement transformé en une action mais plus large s'étendant aux enfants de la rue. Des repas étaient préparés et partagés dans des endroits comme l'Avenue Kennedy, créant des moments d'espoir pour ceux qui en avaient le plus besoin. Mais au-delà de la satisfaction des besoins immédiats, une question plus profonde est apparue : Comment créer un changement durable ? Cette question a suscité une vision : autonomiser les individus non pas seulement par de l'aide, mais par des opportunités. L'idée initiale était simple mais puissante : aider les gens à démarrer de petites entreprises, les soutenir pour grandir durablement et les inspirer à étendre ce même soutien à d'autres. Cependant, cette vision a fait face à un obstacle majeur : des ressources financières limitées. Plutôt que d'arrêter la mission, ce défi a conduit à l'innovation. Grâce à des recherches, des opportunités de subventions internationales pour les entreprises ont été découvertes. Ce qui a commencé comme une solution personnelle est rapidement devenu une voie d'impact. Des femmes ont été guidées tout au long du processus de candidature, et beaucoup ont réussi à obtenir des financements pour lancer et développer leurs entreprises.",
        "story_p2": "Pourquoi les femmes ? Parce que l'autonomisation d'une femme est l'un des moyens les plus efficaces de transformer une société. Les femmes façonnent les foyers, nourrissent les futurs dirigeants et influencent l'orientation des communautés. Quand une femme s'élève, sa famille s'élève, et quand les familles s'élèvent, les nations se reconstruisent. She Thrive International existe pour championner cette transformation. Nous nous engagons à équiper les femmes avec les outils, les ressources et les opportunités dont elles ont besoin pour s'épanouir, non seulement pour elles-mêmes, mais pour les générations à venir.",
        "vision_label": "Notre Vision",
        "vision_title": "Voir des femmes autonomes s'élever en tant que leaders, restauratrices et bâtisseuses de nations.",
        "vision_desc": "Nous envisageons un continent où le genre n'est pas une barrière — où les femmes dirigent des conseils d'administration, des communautés, des gouvernements et des ménages avec dignité, confiance et ressources.",
        "mission_label": "Notre Mission",
        "mission_title": "Équiper. Autonomiser. Élever.",
        "mission_desc": "Équiper et soutenir les femmes à travers des programmes d'autonomisation et des systèmes communautaires solides qui produisent une transformation durable.",
        "pillars": {
          "skills": "Compétences & Formation professionnelle",
          "leadership": "Développement du leadership",
          "community": "Communauté & Mentorat",
          "finance": "Accès à la microfinance"
        }
      },

      // ── BLOG SECTION ───────────────────────────────────────────────
      "blog": {
        "top_label": "Notre Blog",
        "title": "Derniers Articles",
        "view_all": "Voir tous les articles",
        "read_more": "Lire la suite",
        "read": "de lecture",
        "categories": {
          "Entrepreneurship": "Entrepreneuriat",
          "Leadership": "Leadership",
          "Stories": "Histoires"
        }
      },

      // ── CONTACT SECTION ────────────────────────────────────────────
      "contact": {
        "top_label": "Contactez-nous",
        "title": "Contact Us",
        "subtitle": "Des questions ? Envie de vous associer ? Prêt à nous rejoindre ? Nous serions ravis de vous entendre.",
        "whatsapp_title": "Discuter sur WhatsApp",
        "whatsapp_subtitle": "Nous vous répondons sous 5 minutes.",
        "success_title": "Message envoyé !",
        "success_desc": "Notre équipe vous répondra dans un délai de 24 à 48 heures. Merci de nous avoir contactés.",
        "send_another": "Envoyer un autre message",
        "labels": {
          "name": "Nom complet *",
          "email": "Adresse e-mail *",
          "subject": "Sujet",
          "message": "Message *"
        },
        "placeholders": {
          "name": "Votre nom complet",
          "email": "votre@email.com",
          "subject": "De quoi s'agit-il ?",
          "message": "Dites-nous comment nous pouvons vous aider..."
        },
        "buttons": {
          "send": "Envoyer le message",
          "sending": "Envoi en cours..."
        },
        "cities": {
          "Douala": "Douala"
        }
      },

      // ── DONATE SECTION ─────────────────────────────────────────────
      "donate": {
        "top_label": "Faire un don aujourd'hui",
        "title": "Faire une différence",
        "subtitle": "Chaque franc que vous donnez finance directement la formation, le mentorat et l'avenir d'une femme.",
        "thank_you": "Merci !",
        "success_desc": "Votre générosité change des vies. Nous vous enverrons un reçu par e-mail.",
        "give_once": "Donner une fois",
        "give_monthly": "Donner mensuellement",
        "custom_placeholder": "Entrez un montant personnalisé",
        "btn_donate": "Faire un don de",
        "btn_sponsor": "Parrainer une formation",
        "trust": {
          "secure": "Paiement sécurisé",
          "programs": "100% alloué aux programmes",
          "receipt": "Reçu fourni"
        },
        "impacts": {
          "p1": "Couvre le matériel de formation pour 1 femme",
          "p2": "Parraine 1 semaine de formation professionnelle",
          "p3": "Finance les sessions de mentorat pendant un mois",
          "p4": "Bourse d'études complète pour 1 femme"
        }
      },

      // ── FOOTER SECTION ─────────────────────────────────────────────
      "footer": {
        "description": "Équiper les femmes africaines avec les compétences, le leadership et la communauté nécessaires pour transformer leur vie et bâtir des nations plus fortes.",
        "titles": {
          "links": "Liens rapides",
          "programs": "Nos programmes",
          "contact": "Contact"
        },
        "links": {
          "home": "Accueil",
          "about": "À propos",
          "programs": "Programmes",
          "impact": "Impact",
          "events": "Événements",
          "contact": "Contact"
        },
        "programs_list": {
          "p1": "Empower HER",
          "p2": "Bâtisseurs de Nation",
          "p3": "Parrainer une femme",
          "p4": "Devenir bénévole"
        },
        "rights": "Tous droits réservés."
      },

      // ── GALLERY SECTION ────────────────────────────────────────────
      "gallery": {
        "top_label": "Des moments qui comptent",
        "title": "Notre Galerie",
        "subtitle": "Un aperçu des ateliers, des cérémonies et des moments communautaires qui nous définissent.",
        "images": {
          "img1": "Atelier de leadership à Douala",
          "img2": "Remise des diplômes du programme Empower HER",
          "img3": "Session de mentorat individuel",
          "img4": "Femmes entrepreneures partageant leurs projets",
          "img5": "Session de formation technique",
          "img6": "Équipe et bénévoles de SHE Thrive"
        }
      },

      // ── GET INVOLVED SECTION ────────────────────────────────────────
      "get_involved": {
        "top_label": "Passer à l'action",
        "title": "S'impliquer",
        "subtitle": "Il existe de nombreuses façons de faire partie du mouvement SHE Thrive — trouvez la vôtre.",
        "btn_start": "Commencer",
        "success": {
          "title": "Merci !",
          "desc": "Notre équipe vous contactera dans un délai de 48 heures.",
          "btn_close": "Fermer"
        },
        "modal_subtitle": "Remplissez le formulaire et nous vous répondrons très bientôt.",
        "submit_btn": "Soumettre la demande",
        "dropdowns": {
          "select_program": "Sélectionnez un programme",
          "select_city": "Sélectionnez votre ville",
          "not_sure": "Pas encore certaine",
          "other_city": "Autre"
        },
        "placeholders": {
          "name": "Nom complet",
          "email": "Adresse e-mail",
          "phone": "Numéro de téléphone",
          "organization": "Nom de l'organisation",
          "skills": "Vos compétences / Réalisations",
          "availability": "Disponibilités (ex: week-ends)",
          "amount": "Montant du parrainage (XAF)",
          "message": "Message (optionnel)"
        },
        "cards": {
          "program": {
            "title": "Rejoindre un programme",
            "desc": "Inscrivez-vous à Empower HER ou Nation Builders et commencez votre parcours de transformation dès aujourd'hui.",
            "form_title": "Rejoindre un programme"
          },
          "volunteer": {
            "title": "Devenir bénévole",
            "desc": "Partagez votre temps, vos compétences et votre passion. Nous recherchons des formateurs, mentors, coordinateurs et plus.",
            "form_title": "Candidature Bénévole"
          },
          "partner": {
            "title": "Devenir partenaire",
            "desc": "Alignez votre organisation avec notre mission. Ensemble, nous pouvons toucher plus de femmes à travers le Cameroun.",
            "form_title": "Demande de Partenariat"
          },
          "sponsor": {
            "title": "Parrainer une femme",
            "desc": "Financez le parcours de formation d'une femme. Votre parrainage couvre les frais de scolarité, le matériel et le mentorat.",
            "form_title": "Parrainer une femme"
          }
        }
      },

      // ── HERO SECTION ───────────────────────────────────────────────
      "hero": {
        "title_part1": "Autonomiser les ",
        "title_span1": "Femmes.",
        "title_part2": "Bâtir les ",
        "title_span2": "Nations.",
        "description_part1": "Un mouvement né pour restaurer, équiper et connecter les femmes pour une transformation durable. Grâce aux compétences, à la foi et à la communauté,",
        "description_span1": " SHE ",
        "description_span2": "Thrive",
        "description_part2": " élève des femmes qui ne se contentent pas de survivre, mais qui s'épanouissent et bâtissent.",
        "btn_movement": "Rejoindre le mouvement",
        "btn_events": "S'inscrire à nos prochains événements",
        "stats": {
          "trained": "Femmes formées",
          "businesses": "Entreprises lancées",
          "cities": "Villes atteintes"
        }
      },

      // ── IMPACT SECTION ─────────────────────────────────────────────
      "impact": {
        "stats_top_label": "Notre Impact",
        "stats_title": "Des chiffres qui racontent notre histoire",
        "stats_subtitle": "Derrière chaque chiffre se cache une femme dont la vie a été transformée.",
        "testi_top_label": "Les voix de SHE Thrive",
        "testi_title": "Histoires de Transformation",
        "testi_subtitle": "Écoutez directement les femmes dont les vies ont changé grâce à nos programmes.",
        "labels": {
          "trained": "Femmes formées",
          "businesses": "Entreprises créées",
          "cities": "Villes atteintes",
          "satisfaction": "Taux de satisfaction"
        },
        "roles": {
          "entrepreneur": "Créatrice d'entreprise",
          "student": "Alumna Empower HER",
          "leader": "Leader Communautaire"
        },
       "quotes": {
    "testimonial_1": "Grâce au programme de soutien aux subventions d’entreprise de She Thrive International, j’ai reçu l’appui et les encouragements dont j’avais besoin pour transformer ma vision en réalité. Grâce à cette subvention, j’ai lancé avec succès ENJECK FARMS — une entreprise avicole en pleine croissance, engagée à fournir des produits de volaille locaux, accessibles et de haute qualité.",
    "testimonial_2": "La dépendance à la validation extérieure et le besoin d’acceptation sont des mécanismes psychologiques dans lesquels l’estime de soi repose sur l’approbation des autres plutôt que sur une évaluation personnelle intérieure. Bien qu’il soit naturel de rechercher de la reconnaissance, une dépendance excessive peut devenir un obstacle majeur au développement personnel et révéler une faible estime de soi.",
    "testimonial_3": "Je suis passée de la vente de snacks à la gestion d'une boutique en ligne avec des clientes dans tout le Cameroun. SHE Thrive ne m'a pas seulement formée – elles ont cru en moi à un moment où moi-même, je ne croyais plus en mes capacités.",
    "roles": {
      "stacy": "Diplômée Empower HER · Propriétaire de ENJECK FARMS",
      "maureen": "Membre Nation Builders · Actrice de santé communautaire",
      "patience": "Diplômée Empower HER · Entrepreneure digitale"
    },
    "cities": {
      "douala": "Douala",
      "bafoussam": "Bafoussam"
    }
  }
      },

      // ── NAVBAR SECTION ─────────────────────────────────────────────
      "navbar": {
        "sub_logo": "International",
        "btn_join": "Rejoindre",
        "links": {
          "home": "Accueil",
          "about": "À propos",
          "programs": "Programmes",
          "impact": "Impact",
          "get_involved": "S'impliquer",
          "events": "Événements",
          "contact": "Contact",
          "jobs": "Offres d'emploi",
          "coaching": "Coaching",
          "counseling": "Accompagnement"
        }
      },

      // ── PROGRAMS SECTION ───────────────────────────────────────────
      "programs": {
        "top_label": "Ce que nous proposons",
        "title": "Nos Programmes",
        "subtitle": "Chaque programme est conçu pour rencontrer les femmes là où elles se trouvent — et les emmener plus loin qu'elles ne l'auraient imaginé.",
        "not_sure": "Vous ne savez pas quel programme vous convient ?",
        "btn_team": "Discuter avec notre équipe",
        "btn_join": "Rejoindre",
       "items": {
  "empower_her": {
    "title": "Empower HER",
    "tagline": "Doter les femmes de compétences pour la vie et l'autonomie financière.",
    "desc": "Empower HER est la branche d'autonomisation pratique de SHE Thrive, axée sur la formation, l'équipement et l'activation des femmes.",
    "audience": "Les femmes prêtes à grandir, à gagner leur vie et à construire un avenir meilleur.",
    "outcomes": [
      "Programmes d'acquisition de compétences",
      "Formation aux affaires et à l'entrepreneuriat",
      "Ateliers et conférences",
      "Sessions de développement personnel"
    ]
  },
  "nation_builders": {
    "title": "Nation Builders",
    "tagline": "Bâtir une communauté forte de femmes qui se soutiennent mutuellement.",
    "desc": "Conçu pour former les futures leaders et entrepreneures afin de générer un impact durable et transformationnel au sein de leurs communautés.",
    "audience": "Les femmes qui ont besoin de soutien, de guérison, de connexion et de croissance spirituelle.",
    "outcomes": [
      "Systèmes de soutien spirituel et de prière",
      "Conseil et mentorat",
      "Groupes communautaires et cercles de redevabilité",
      "Soutien émotionnel et accompagnement de vie"
    ]
  }
}
      },

      // ── WHAT WE DO SECTION ──────────────────────────────────────────
      "whatwedo": {
        "eyebrow": "Ce que nous faisons",
        "title_main": "Trois Piliers de ",
        "title_italic": "Transformation",
        "subtitle": "Chaque service que nous proposons repose sur une conviction : les femmes s'épanouissent lorsqu'elles disposent du bon soutien au bon moment.",
        "services": {
          "consulting": {
            "tag": "01 / Conseil & Coaching",
            "headline": "Construire, Diriger et Grandir avec Clarté",
            "description": "Conseil aux entreprises, coaching de leadership, orientation financière et développement personnel — le tout conçu pour vous amener là où vous devez être.",
            "audience": "Entrepreneurs · Femmes Leaders · Startups · ONG",
            "cta": "Réserver une session stratégique"
          },
          "jobs": {
            "tag": "02 / Thrive Jobs",
            "headline": "Accédez à des Opportunités qui Changent la Vie",
            "description": "Connectez-vous à des offres d'emploi vérifiées, des stages et des projets basés sur vos compétences grâce à notre réseau sélectionné et nos programmes de placement.",
            "categories": {
              "jobs": "Emplois",
              "internships": "Stages",
              "gigs": "Missions freelance"
            },
            "cta": "Explorer les opportunités"
          },
          "counseling": {
            "tag": "03 / Écoute & Prières",
            "headline": "Soutien Émotionnel & Accompagnement Spirituel",
            "description": "Accompagnement individuel, orientation de vie et soutien par la prière pour les femmes et les personnes traversant les moments les plus difficiles de la vie.",
            "reassurance": "Confidentiel. Compassionnel. Sans jugement.",
            "cta": "Demander une session"
          }
        }
      },

      // ── EVENTS SECTION ─────────────────────────────────────────────
      "events": {
        "eyebrow": "Ce qui arrive",
        "title": "Événements À Venir",
        "subtitle": "Rejoignez-nous lors de nos événements — là où les femmes se rassemblent pour apprendre, grow, diriger et s'épanouir ensemble.",
        "categories": {
          "summit": "Sommet",
          "training": "Formation",
          "meetup": "Rencontre"
        },
        "notify_text": "Vous voulez être informée de nos prochains événements ?",
        "btn_notify": "Restez informée",
        "btn_register": "S'inscrire",
        "items": {
          "conference_en": {
            "title": "INSCRIPTION CONFÉRENCE SHE THRIVE (Anglais)",
            "location": "Douala",
            "description": "7 voix puissantes. 7 sessions transformatrices. Pouvez-vous deviner qui elles sont ? Restez connectées... les révélations commencent bientôt."
          },
          "conference_fr": {
            "title": "ENREGISTREMENT CONFÉRENCE SHE THRIVE (Français)",
            "location": "Douala",
            "description": "7 voix puissantes. 7 sessions transformatrices. Pouvez-vous deviner qui elles sont ? Restez connectées... les révélations commencent bientôt."
          }
        }
      }
    }
  },
  en: {
    translation: {
      // ── ABOUT SECTION ──────────────────────────────────────────────
    
      "about": {
        "top_label": "Who We Are",
        "title": "About SHE Thrive",
        "intro": "SHE Thrive is a faith-driven movement committed to restoring women and raising nation builders. Built on the foundation of Isaiah 61:1–7, we are called to heal, equip, and raise women who will transform their lives, families, and communities.",
        "img_alt": "SHE Thrive women community",
        "stat_year": "Year SHE Thrive was founded",
        "story_title": "OUR STORY.",
        "story_p1": "She Thrive International was born from a deep, personal conviction to see lives transformed and communities rebuilt. The journey began in Yaoundé -Cameroon, where our founder made it a personal mission to regularly visit orphanages. What started as simple acts of kindness soon grew into a broader outreach extending to children living on the streets. Meals were prepared and shared in places like Avennue Kennedy, creating moments of hope for those who needed it most. But beyond meeting immediate needs, a deeper question emerged: How can lasting change be created? This question sparked a vision to empower individuals not just with aid, but with opportunity. The initial idea was simple yet powerful: help people start small businesses, support them in growing sustainably, and inspire them to extend that same support to others. However, this vision faced a significant obstacle limited financial resources. Rather than stopping the mission, this challenge led to innovation. Through research, international business grant opportunities were discovered. What began as a personal solution quickly became a pathway for impact. Women were guided through the application process, and many successfully secured funding to launch and grow their businesses.",
        "story_p2": "Why women? Because empowering a woman is one of the most effective ways to transform a society. Women shape homes, nurture future leaders, and influence the direction of communities. When a woman rises, her family rises and when families rise, nations are rebuilt. She Thrive International exists to champion this transformation. We are committed to equipping women with the tools, resources, and opportunities they need to thrive not just for themselves, but for generations to come.",
        "vision_label": "Our Vision",
        "vision_title": "To see empowered women rising as leaders, restorers, and nation builders.",
        "vision_desc": "We envision a continent where gender is no barrier — where women lead boardrooms, communities, governments, and households with dignity, confidence, and resources.",
        "mission_label": "Our Mission",
        "mission_title": "Equip. Empower. Elevate.",
        "mission_desc": "To equip and support women through empowerment programs and strong community systems that produce lasting transformation.",
        "pillars": {
          "skills": "Skills & Vocational Training",
          "leadership": "Leadership Development",
          "community": "Community & Mentorship",
          "finance": "Micro-finance Access"
        }
      },

      // ── BLOG SECTION ───────────────────────────────────────────────
      "blog": {
        "top_label": "From Our Blog",
        "title": "Latest Articles",
        "view_all": "View All Posts",
        "read_more": "Read more",
        "read": "read",
        "categories": {
          "Entrepreneurship": "Entrepreneurship",
          "Leadership": "Leadership",
          "Stories": "Stories"
        }
      },

      // ── CONTACT SECTION ────────────────────────────────────────────
      "contact": {
        "top_label": "Reach Out",
        "title": "Contact Us",
        "subtitle": "Have questions? Want to partner? Ready to join? We'd love to hear from you.",
        "whatsapp_title": "Chat on WhatsApp",
        "whatsapp_subtitle": "We reply within 5 min",
        "success_title": "Message Sent!",
        "success_desc": "Our team will get back to you within 24–48 hours. Thank you for reaching out.",
        "send_another": "Send Another",
        "labels": {
          "name": "Full Name *",
          "email": "Email Address *",
          "subject": "Subject",
          "message": "Message *"
        },
        "placeholders": {
          "name": "Your full name",
          "email": "your@email.com",
          "subject": "What is this about?",
          "message": "Tell us how we can help you..."
        },
        "buttons": {
          "send": "Send Message",
          "sending": "Sending..."
        },
        "cities": {
          "Douala": "Douala"
        }
      },

      // ── DONATE SECTION ─────────────────────────────────────────────
      "donate": {
        "top_label": "Give Today",
        "title": "Make a Difference",
        "subtitle": "Every franc you give directly funds a woman's training, mentorship, and future.",
        "thank_you": "Thank you!",
        "success_desc": "Your generosity changes lives. We'll send a receipt to your email.",
        "give_once": "Give Once",
        "give_monthly": "Give Monthly",
        "custom_placeholder": "Enter custom amount",
        "btn_donate": "Donate",
        "btn_sponsor": "Sponsor a Training",
        "trust": {
          "secure": "Secure payment",
          "programs": "100% goes to programs",
          "receipt": "Receipt provided"
        },
        "impacts": {
          "p1": "Covers training materials for 1 woman",
          "p2": "Sponsors 1 week of skills training",
          "p3": "Funds mentorship sessions for a month",
          "p4": "Full program scholarship for 1 woman"
        }
      },

      // ── FOOTER SECTION ─────────────────────────────────────────────
      "footer": {
        "description": "Equipping African women with skills, leadership, and community to transform their lives and build stronger nations.",
        "titles": {
          "links": "Quick Links",
          "programs": "Our Programs",
          "contact": "Contact"
        },
        "links": {
          "home": "Home",
          "about": "About Us",
          "programs": "Programs",
          "impact": "Impact",
          "events": "Events",
          "contact": "Contact"
        },
        "programs_list": {
          "p1": "Empower HER",
          "p2": "Nation Builders",
          "p3": "Sponsor a Woman",
          "p4": "Volunteer"
        },
        "rights": "All rights reserved."
      },

      // ── GALLERY SECTION ────────────────────────────────────────────
      "gallery": {
        "top_label": "Moments That Matter",
        "title": "Our Gallery",
        "subtitle": "A glimpse into the workshops, ceremonies, and community moments that define us.",
        "images": {
          "img1": "Leadership workshop in Douala",
          "img2": "Empower HER graduation ceremony",
          "img3": "One-on-one mentorship session",
          "img4": "Women entrepreneurs sharing their projects",
          "img5": "Technical skills training session",
          "img6": "SHE Thrive team and volunteers"
        }
      },

      // ── GET INVOLVED SECTION ────────────────────────────────────────
      "get_involved": {
        "top_label": "Take Action",
        "title": "Get Involved",
        "subtitle": "There are many ways to be part of the SHE Thrive movement — find yours.",
        "btn_start": "Get Started",
        "success": {
          "title": "Thank you!",
          "desc": "Our team will reach out to you within 48 hours.",
          "btn_close": "Close"
        },
        "modal_subtitle": "Fill in the form and we'll get back to you soon.",
        "submit_btn": "Submit Application",
        "dropdowns": {
          "select_program": "Select a Program",
          "select_city": "Select Your City",
          "not_sure": "Not sure yet",
          "other_city": "Other"
        },
        "placeholders": {
          "name": "Full Name",
          "email": "Email Address",
          "phone": "Phone Number",
          "organization": "Organization Name",
          "skills": "Your Skills / Expertise",
          "availability": "Availability (e.g. weekends)",
          "amount": "Sponsorship Amount (XAF)",
          "message": "Message (optional)"
        },
        "cards": {
          "program": {
            "title": "Join a Program",
            "desc": "Enroll in Empower HER or Nation Builders and start your transformation journey today.",
            "form_title": "Join a Program"
          },
          "volunteer": {
            "title": "Become a Volunteer",
            "desc": "Share your time, skills, and passion. We need trainers, mentors, event coordinators, and more.",
            "form_title": "Volunteer Application"
          },
          "partner": {
            "title": "Partner With Us",
            "desc": "Align your organization with our mission. Together we can reach more women across Cameroon.",
            "form_title": "Partnership Inquiry"
          },
          "sponsor": {
            "title": "Sponsor a Woman",
            "desc": "Fund a woman's training journey. Your sponsorship covers tuition, materials, and mentorship.",
            "form_title": "Sponsor a Woman"
          }
        }
      },

      // ── HERO SECTION ───────────────────────────────────────────────
      "hero": {
        "title_part1": "Empowering ",
        "title_span1": "Women.",
        "title_part2": "Building ",
        "title_span2": "Nations.",
        "description_part1": "A movement raised to restore, equip, and connect women for lasting transformation. Through skills, faith, and community,",
        "description_span1": " SHE ",
        "description_span2": "Thrive",
        "description_part2": " raises women who don't just survive, they thrive and build.",
        "btn_movement": "Join The Movement",
        "btn_events": "Register For Our Upcoming Events",
        "stats": {
          "trained": "Women Trained",
          "businesses": "Businesses Started",
          "cities": "Cities Reached"
        }
      },

      // ── IMPACT SECTION ─────────────────────────────────────────────
      "impact": {
        "stats_top_label": "Our Impact",
        "stats_title": "Numbers That Tell Our Story",
        "stats_subtitle": "Behind every number is a woman whose life has been transformed.",
        "testi_top_label": "Voices of SHE Thrive",
        "testi_title": "Stories of Transformation",
        "testi_subtitle": "Hear directly from the women whose lives have been changed by our programs.",
        "labels": {
          "trained": "Women Trained",
          "businesses": "Businesses Started",
          "cities": "Cities Reached",
          "satisfaction": "Satisfaction Rate"
        },
        "roles": {
          "entrepreneur": "Business Owner",
          "student": "Empower HER Alumna",
          "leader": "Community Leader"
        },
        "quotes": {
    "testimonial_1": "Through the business grant support program by She Thrive International, I received the support and encouragement I needed to turn my vision into reality With the grant, I successfully launched ENJECK FARMS — a growing poultry business committed to providing accessible, high-quality, locally produced poultry products.I am deeply grateful to She Thrive International for believing in my dream and giving me the platform to build a sustainable future.",
    "testimonial_2": "Dependence on external validation and the need for acceptance are psychological mechanisms in which self-esteem relies on the approval of others rather than on internal self-evaluation. Although it is natural to seek recognition, excessive dependence can become a major obstacle to personal growth and may reveal low self-esteem.",
    "testimonial_3": "I went from selling snacks to running an online boutique with customers across Cameroon. SHE Thrive didn't just train me – they believed in me they believed in me when I didn't believe in myself.",
    "roles": {
      "stacy": "Empower HER Graduate · Owner of ENJECK FARMS",
      "maureen": "Nation Builders Fellow · Community Health Advocate",
      "patience": "Empower HER Graduate · Digital Entrepreneur"
    },
    "cities": {
      "douala": "Douala",
      "bafoussam": "Bafoussam"
    }
  }
      },

      // ── NAVBAR SECTION ─────────────────────────────────────────────
      "navbar": {
        "sub_logo": "International",
        "btn_join": "Join Now",
        "links": {
          "home": "Home",
          "about": "About",
          "programs": "Programs",
          "impact": "Impact",
          "get_involved": "Get Involved",
          "events": "Events",
          "contact": "Contact",
          "jobs": "Jobs",
          "coaching": "Coaching",
          "counseling": "Counseling"
        }
      },

      // ── PROGRAMS SECTION ───────────────────────────────────────────
      "programs": {
        "top_label": "What We Offer",
        "title": "Our Programs",
        "subtitle": "Every program is designed to meet women where they are — and take them further than they imagined possible.",
        "not_sure": "Not sure which program is right for you?",
        "btn_team": "Talk to Our Team",
        "btn_join": "Join",
        "items": {
          "empower_her": {
            "title": "Empower HER",
            "tagline": "Equipping women with Skills for life and Income.",
            "desc": "Empower HER is the practical empowerment arm of SHE Thrive focused on training, equipping, and activating women.",
            "audience": "Women ready to grow, earn, and build a better future.",
            "outcomes": [
              "Skills acquisition programs",
              "Business & Entrepreneurship training",
              "Workshops and Conferences",
              "Personal development Sessions",
            ]
          },
          "nation_builders": {
            "title": "Nation Builders",
            "tagline": "Raising a Strong Community of Women Who Stand Together.",
            "desc": "Designed to build future leaders and entrepreneurs to make a lasting, transformational impact across their communities.",
            "audience": "Women who need support, healing, connection, and spiritual growth.",
            "outcomes": [
              "Prayer and spiritual support systems",
              "Counseling and mentorship",
              "Community groups and accountability circles",
              "Emotional and life support",
            ]
          }
        }
      },

      // ── WHAT WE DO SECTION ──────────────────────────────────────────
      "whatwedo": {
        "eyebrow": "What We Do",
        "title_main": "Three Pillars of ",
        "title_italic": "Transformation",
        "subtitle": "Every service we offer is built around one conviction: women thrive when they have the right support at the right time.",
        "services": {
          "consulting": {
            "tag": "01 / Consulting & Coaching",
            "headline": "Build, Lead, and Scale with Clarity",
            "description": "Business consulting, leadership coaching, financial guidance, and personal development — all designed to move you from where you are to where you're meant to be.",
            "audience": "Entrepreneurs · Women Leaders · Startups · NGOs",
            "cta": "Book a Strategy Session"
          },
          "jobs": {
            "tag": "02 / Thrive Jobs",
            "headline": "Access Opportunities That Change Your Life",
            "description": "Connect to verified job offers, internships, and skill-based gigs through our curated network and placement programs.",
            "categories": {
              "jobs": "Jobs",
              "internships": "Internships",
              "gigs": "Skill-based Gigs"
            },
            "cta": "Explore Opportunities"
          },
          "counseling": {
            "tag": "03 / Counseling & Prayers",
            "headline": "Emotional Support & Spiritual Guidance",
            "description": "One-on-one counseling, life guidance, and prayer support for women and individuals navigating life's hardest moments.",
            "reassurance": "Confidential. Compassionate. Judgment-free.",
            "cta": "Request a Session"
          }
        }
      },

      // ── EVENTS SECTION ─────────────────────────────────────────────
      "events": {
        "eyebrow": "What's Coming",
        "title": "Upcoming Events",
        "subtitle": "Join us at our events — where women gather to learn, grow, lead, and thrive together.",
        "categories": {
          "summit": "Summit",
          "training": "Training",
          "meetup": "Meetup"
        },
        "notify_text": "Want to be notified of future events?",
        "btn_notify": "Get Notified",
        "btn_register": "Register",
        "items": {
          "conference_en": {
            "title": "REGISTRATION SHE THRIVE CONFERENCE (English)",
            "location": "Douala",
            "description": "7 powerful voices. 7 transformational sessions. Can you guess who they are ? Stay tuned... the reveal begins soon."
          },
          "conference_fr": {
            "title": "REGISTRATION SHE THRIVE CONFERENCE (French)",
            "location": "Douala",
            "description": "7 powerful voices. 7 transformational sessions. Can you guess who they are ? Stay tuned... the reveal begins soon."
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Langue par défaut
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React gère déjà l'échappement XSS
    }
  });

export default i18n;