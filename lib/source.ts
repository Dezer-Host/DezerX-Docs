import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';
import { Aperture, Braces, BoxIcon, CreditCardIcon, ServerIcon } from 'lucide-react';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/docs/framework/',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
  },
  icon(icon) {
    if (!icon) {
      return;
    }
    
    if (icon === 'Aperture') return createElement(Aperture);
        if (icon === 'Braces') return createElement(Braces);
                if (icon === 'BoxIcon') return createElement(BoxIcon);
                if (icon === 'CreditCardIcon') return createElement(CreditCardIcon);
                if (icon === 'ServerIcon') return createElement(ServerIcon);

  },
});

export const openapi = createOpenAPI();
