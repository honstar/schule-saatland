import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {  
  const { decorateButtons } = await import(`${getLibs()}/utils/decorate.js`);
  decorateButtons(el);
}
