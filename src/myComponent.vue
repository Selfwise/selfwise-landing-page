// LandingPage.vue
<script setup>
import { ref, computed } from "vue";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Users,
  Target,
  BarChart,
  Shield,
  Sparkles,
  ChevronRight,
} from "lucide-vue-next";

// Navigation content
const navigation = {
  logo: "Selfwise",
  links: [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Témoignages", href: "#testimonials" },
  ],
};

// Content blocks configuration
const blocks = ref([
  {
    type: "hero",
    content: {
      title: "Révolutionnez votre pratique de coaching avec l'IA",
      subtitle:
        "Utilisez l'intelligence artificielle pour amplifier votre impact et accompagner vos clients vers le succès",
      cta: "Commencer l'essai gratuit",
      secondaryCta: "Voir la démo",
      image: "/hero-image.png",
    },
  },
  {
    type: "features",
    title: "Des outils conçus pour les coachs professionnels",
    subtitle:
      "Tout ce dont vous avez besoin pour un coaching moderne et efficace",
    items: [
      {
        icon: Brain,
        title: "IA Assistant Personnel",
        description:
          "Un assistant IA qui vous aide à préparer vos séances et analyser les progrès",
      },
      {
        icon: Users,
        title: "Gestion des Clients",
        description:
          "Suivez facilement le parcours et l'évolution de chaque client",
      },
      {
        icon: Target,
        title: "Objectifs Personnalisés",
        description:
          "Créez des parcours sur mesure adaptés aux besoins spécifiques",
      },
    ],
  },
  {
    type: "stats",
    items: [
      { value: "2,500+", label: "Coachs actifs" },
      { value: "15,000+", label: "Clients accompagnés" },
      { value: "95%", label: "Taux de satisfaction" },
    ],
  },
  {
    type: "benefits",
    title: "Pourquoi choisir Selfwise ?",
    items: [
      {
        icon: BarChart,
        title: "Suivi des Progrès",
        description:
          "Mesurez l'impact de vos interventions avec des analyses détaillées",
      },
      {
        icon: Shield,
        title: "Sécurité Garantie",
        description:
          "Vos données et celles de vos clients sont protégées aux plus hauts standards",
      },
      {
        icon: Sparkles,
        title: "IA Éthique",
        description:
          "Une IA développée dans le respect de l'éthique du coaching",
      },
    ],
  },
]);

// Filter visible blocks
const visibleBlocks = computed(() =>
  blocks.value.filter((block) => !block.hidden)
);

// Base vertical spacing class for consistent section spacing
const sectionClass = computed(() => "py-24 first:pt-16 last:pb-32 mb-1 mt-1 ");
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation -->
    <nav
      class="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-8">
            <RouterLink to="/" class="text-2xl font-bold">
              {{ navigation.logo }}
            </RouterLink>
            <div class="hidden md:flex gap-6">
              <a
                v-for="link in navigation.links"
                :key="link.name"
                :href="link.href"
                class="text-muted-foreground hover:text-foreground transition-colors"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <Button variant="secondary">Se connecter</Button>
            <Button>Essai gratuit</Button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Dynamic Blocks -->
    <main class=" ">
      <!-- This creates a visual separator between sections -->
      <template v-for="block in visibleBlocks" :key="block.type">
        <!-- Hero Block -->
        <section
          v-if="block.type === 'hero'"
          :class="sectionClass"
          class="relative overflow-hidden"
        >
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6">
              {{ block.content.title }}
            </h1>
            <p class="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {{ block.content.subtitle }}
            </p>
            <div class="flex justify-center gap-4">
              <Button size="lg">
                {{ block.content.cta }}
              </Button>
              <Button variant="outline" size="lg">
                {{ block.content.secondaryCta }}
              </Button>
            </div>
          </div>
        </section>

        <!-- Features Block -->
        <section
          v-if="block.type === 'features'"
          :class="[sectionClass, 'bg-muted/50  ']"
        >
          <div class="container mx-auto px-4">
            <div class="text-center">
              <h2 class="text-3xl font-bold mb-4 my-5">
                {{ block.title }}
              </h2>
              <p class="text-muted-foreground">
                {{ block.subtitle }}
              </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
              <Card
                v-for="feature in block.items"
                :key="feature.title"
                class="p-6 transition-all hover:shadow-lg"
              >
                <component
                  :is="feature.icon"
                  class="w-10 h-10 mb-4 text-primary"
                />
                <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
                <p class="text-muted-foreground">{{ feature.description }}</p>
              </Card>
            </div>
          </div>
        </section>

        <!-- Stats Block -->
        <section v-if="block.type === 'stats'" :class="sectionClass">
          <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-3 gap-8 text-center">
              <div v-for="stat in block.items" :key="stat.label" class="p-6">
                <p class="text-4xl font-bold mb-2">{{ stat.value }}</p>
                <p class="text-muted-foreground">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Benefits Block -->
        <section
          v-if="block.type === 'benefits'"
          :class="[sectionClass, 'bg-muted/50']"
        >
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-3">
              {{ block.title }}
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div
                v-for="benefit in block.items"
                :key="benefit.title"
                class="flex flex-col items-center text-center p-6"
              >
                <component
                  :is="benefit.icon"
                  class="w-12 h-12 mb-4 text-primary"
                />
                <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
                <p class="text-muted-foreground">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </section>
      </template>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
