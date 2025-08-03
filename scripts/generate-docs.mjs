import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./public/services-2.json'],
  output: './content/docs/API/services',
  includeDescription: true,
});
