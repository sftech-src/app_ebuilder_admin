import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const EBuilderPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f0fdf0',
      100: '#dcfce7',
      200: '#abd0ab',
      300: '#78d278',
      400: '#58da58',
      500: '#25a825',
      600: '#339933',
      700: '#166316',
      800: '#0f4c0f',
      900: '#0a3a0a',
    },
  },
  components: {
    fieldset: {
      background: '{gray.50}',
      borderColor: '{primary.200}',
      legendBorderColor: '{primary.200}',
      legendColor: '#000000',
      contentPadding: '0.75em 0 0 0',
      legendFontWeight: 'normal',
    },
  },
});
