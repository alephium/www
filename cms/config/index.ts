import {
  titleFieldConfig,
  subtitleFieldConfig,
  urlFieldConfig,
  descriptionFieldConfig,
  linkFieldsConfig,
  technologySubsectionFields
} from './fields'

const runningLocally = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

const remoteConfig = {
  name: 'github',
  repo: 'nop33/alephium-website',
  branch: 'main'
}

const localConfig = {
  name: 'git-gateway'
}

export default {
  backend: runningLocally ? localConfig : remoteConfig,
  local_backend: runningLocally,
  load_config_file: false,
  publish_mode: 'editorial_workflow',
  media_folder: 'src/images',
  public_folder: '/assets',
  logo_url: 'https://alephium.org/static/media/logo-h.a9af87f7.svg',
  collections: [
    {
      label: 'Pages',
      name: 'pages',
      editor: {
        preview: false
      },
      files: [
        {
          label: 'Technology',
          name: 'technology',
          file: 'src/content/technology.md',
          fields: [
            {
              label: 'Technology section',
              name: 'pageSectionTechContent',
              widget: 'object',
              required: true,
              fields: [
                titleFieldConfig,
                subtitleFieldConfig,
                {
                  label: 'BlockFlow section',
                  name: 'blockFlowSection',
                  widget: 'object',
                  required: true,
                  fields: technologySubsectionFields
                },
                {
                  label: 'PoLW section',
                  name: 'polwSection',
                  widget: 'object',
                  required: true,
                  fields: technologySubsectionFields
                },
                {
                  label: 'Smart contracts section',
                  name: 'smartContractSection',
                  widget: 'object',
                  required: true,
                  fields: technologySubsectionFields
                },
                {
                  label: 'VMs section',
                  name: 'vmsSection',
                  widget: 'object',
                  required: true,
                  fields: technologySubsectionFields
                }
              ]
            }
          ]
        },
        {
          label: 'Home page',
          name: 'home',
          file: 'src/content/homepage.md',
          fields: [
            {
              label: 'Header section',
              name: 'pageSectionHeroContent',
              widget: 'object',
              required: true,
              fields: [
                {
                  label: 'Dark',
                  name: 'dark',
                  widget: 'object',
                  required: true,
                  fields: [titleFieldConfig, subtitleFieldConfig]
                },
                {
                  label: 'Light',
                  name: 'light',
                  required: true,
                  widget: 'object',
                  fields: [titleFieldConfig, subtitleFieldConfig]
                }
              ]
            },
            {
              label: 'Intro section',
              name: 'pageSectionIntroContent',
              widget: 'object',
              required: true,
              fields: [
                titleFieldConfig,
                subtitleFieldConfig,
                {
                  label: 'Cards',
                  name: 'cards',
                  widget: 'list',
                  required: true,
                  fields: [
                    titleFieldConfig,
                    descriptionFieldConfig,
                    {
                      label: 'Link',
                      name: 'link',
                      widget: 'object',
                      required: true,
                      fields: linkFieldsConfig
                    }
                  ]
                }
              ]
            },
            {
              label: 'Community section',
              name: 'followUsSection',
              widget: 'object',
              required: true,
              fields: [
                titleFieldConfig,
                subtitleFieldConfig,
                descriptionFieldConfig,
                {
                  label: 'Social media links',
                  name: 'socialMediaLinks',
                  widget: 'list',
                  required: true,
                  fields: [{ label: 'Name', name: 'name', widget: 'string', required: true }, urlFieldConfig]
                }
              ]
            },
            {
              label: 'Footer',
              name: 'footer',
              widget: 'object',
              required: true,
              fields: [
                {
                  label: 'Columns',
                  name: 'columns',
                  widget: 'list',
                  required: true,
                  fields: [
                    titleFieldConfig,
                    {
                      label: 'Links',
                      name: 'links',
                      widget: 'list',
                      required: true,
                      fields: linkFieldsConfig
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Modals',
      name: 'modals',
      editor: {
        preview: false
      },
      folder: 'src/content/modals',
      create: false,
      fields: [titleFieldConfig, { label: 'Content', name: 'body', widget: 'markdown', required: true }]
    }
  ]
}
