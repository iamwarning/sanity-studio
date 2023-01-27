import {createAuthStore, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// @ts-ignore
import {theme} from 'https://themer.sanity.build/api/hues?preset=tw-cyan'

export default defineConfig({
  name: 'default',
  title: 'Jorgel, Inc.',
  subtitle: 'Sanity Backend',
  projectId: 'eg6glti6',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes
  },
  theme: theme as import('sanity').StudioTheme,
  basePath: '/studio',
  auth: createAuthStore({
    projectId: 'eg6glti6',
    dataset: 'production',
    mode: 'append',
    redirectOnSingle: false,
    loginMethod: 'cookie',
    providers: []
  })
})
