import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        card: 'components/storyblok/Card',
        cardSection: 'components/storyblok/CardSection',
        experienceItem: 'components/storyblok/ExperienceItem',
        experienceSection: 'components/storyblok/ExperienceSection',
        hero: 'components/storyblok/Hero',
        page: 'components/storyblok/Page',
        portfolioItem: 'components/storyblok/PortfolioItem',
        portfolioSection: 'components/storyblok/PortfolioSection',
        simpleHeader: 'components/storyblok/SimpleHeader',
        socialSection: 'components/storyblok/SocialSection',
      },
      apiOptions: {
        region: 'us',
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: import.meta.env.MODE === 'production' ? 'https://mvc.codes' : 'https://localhost:4321',
  vite: {
    plugins: [
      basicSsl(),
    ],
    server: {
      https: true,
    },
  },
})
