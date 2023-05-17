/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/installation', 
        'getting-started/usage', 
        'getting-started/methodology', 
        'getting-started/types', 
        'getting-started/library-integrations'
      ],
      collapsed: false,
    },
    'styling-and-theming',
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/avatar',
        'components/badge',
        {
          type: 'category',
          label: 'Buttons',
          items: [
            'components/buttons/button', 
            'components/buttons/fab', 
            'components/buttons/icon-button'
          ],
          collapsed: false,
        },
        'components/card',
        'components/chip',
        'components/data-table',
        'components/dialog',
        'components/drawer',
        'components/elevation',
        {
          type: 'category',
          label: 'Grids',
          items: [
            'components/grids/layout-grid', 
            'components/grids/image-list', 
            'components/grids/grid-list'
          ],
          collapsed: false,
        },
        'components/icon',
        {
          type: 'category',
          label: 'Inputs and Controls',
          items: [
            'components/inputs-and-controls/checkbox',
            'components/inputs-and-controls/form-field',
            'components/inputs-and-controls/radio-button',
            'components/inputs-and-controls/select-menu',
            'components/inputs-and-controls/slider',
            'components/inputs-and-controls/switch',
            'components/inputs-and-controls/text-field'
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Lists',
          items: [
            'components/lists/list',
            'components/lists/collapsible',
            'components/lists/variants',

          ],
          collapsed: false,
        },
        'components/menu',
        'components/ripple',
        'components/snackbar',
        'components/tabs',
        'components/theme',
        'components/tooltip',
        'components/top-app-bar',
        'components/typography',
        {
          type: 'category',
          label: 'Progress',
          items: [
            'components/progress/linear-progress',
            'components/progress/circular-progress',
          ],
          collapsed: false,
        },
        'components/provider',
      ],
      collapsed: false,
    },
  ],
};

