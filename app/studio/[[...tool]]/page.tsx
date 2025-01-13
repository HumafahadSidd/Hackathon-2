// Importing NextStudio and config
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

// Ensuring the config is correct and valid
console.log(config); // Debugging step to ensure config is imported correctly

// Exporting the page component
export const dynamic = 'force-static';
export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  // Checking if NextStudio is a valid component
  return <NextStudio config={config} />;
}
