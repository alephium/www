export const titleFieldConfig = { label: 'Title', name: 'title', widget: 'string', required: true }

export const subtitleFieldConfig = { label: 'Subtitle', name: 'subtitle', widget: 'text', required: true }

export const urlFieldConfig = { label: 'URL', name: 'url', widget: 'string', required: true }

export const descriptionFieldConfig = { label: 'Description', name: 'description', widget: 'text', required: true }

export const linkFieldsConfig = [
  { label: 'Text', name: 'text', widget: 'string', required: true },
  { label: 'URL', name: 'url', widget: 'string', required: false },
  { label: 'Opens in new tab', name: 'newTab', widget: 'boolean', required: false }
]

export const technologySubsectionFields = [
  titleFieldConfig,
  descriptionFieldConfig,
  { label: 'Card text', name: 'cardText', widget: 'text', required: true },
  {
    label: 'Links',
    name: 'links',
    widget: 'list',
    required: true,
    fields: linkFieldsConfig
  }
]
