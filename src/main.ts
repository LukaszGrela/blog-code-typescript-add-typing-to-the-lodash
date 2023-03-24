import { run as runEntriesTest } from './entries-test';
import { run as runKeysTest } from './keys-test';
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

runEntriesTest();
runKeysTest();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://greladesign.co/blog" target="_blank">
      <h1>blog.greladesign</h1>
    </a>
    <div class="card">
      <p>Sample project with the code for blog post about TypeScript: typing lodash methods.</p>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
