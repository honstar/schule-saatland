import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';
import initSocialpod from '../../../blocks/socialpod/socialpod.js';
import { setLibs } from '../../../scripts/utils.js';

document.body.innerHTML = await readFile({ path: './mocks/body.html' });
setLibs('/libs');

describe('The socialpod block', () => {
  it('Adds socialpod with links', async () => {
    const socialpod = document.querySelector('.socialpod');
    await initSocialpod(socialpod);
    const title = socialpod.querySelector('h2');
    const p = socialpod.querySelector('p');
    const buttons = p.children;
    
    buttons.forEach((button) => {
      expect(button.className).to.equal('con-button blue');
    });
    expect(title.textContent).to.equal('Discover even more');
  });
});
