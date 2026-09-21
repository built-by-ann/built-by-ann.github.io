import jsxA11y from 'eslint-plugin-jsx-a11y'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['dist/**', 'node_modules/**', '.next/**'] },
  {
    files: ['src/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      parser: tseslint.parser,
    },
    settings: {
      'jsx-a11y': {
        // React Router's <Link>/<NavLink> and our <ExternalLink> render <a>, so lint them as anchors.
        components: { Link: 'a', NavLink: 'a', ExternalLink: 'a' },
      },
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      // Router links use `to` instead of `href`.
      'jsx-a11y/anchor-is-valid': ['error', { components: ['Link', 'NavLink', 'ExternalLink'], specialLink: ['to'] }],
    },
  },
]
