import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import * as marked from 'marked';

let renderer = new marked.Renderer();
renderer.link = (href: string, title: string, text: string) => {
  const isExternalLink = href.startsWith('http') || href.startsWith('//');

  if (isExternalLink) {
    return `<a href="${href}">${text}</a>`;
  } else {
    return `<a routerLink="${href}">${text}</a>`;
  }
};
marked.setOptions({
  renderer: renderer
});

// Data about the Markdown we'll render into Angular templates
import { PATHS_DATA } from "./markdown.paths";

for (let pathDataCurrent of PATHS_DATA) {
  let pathAngularTemplate = join(pathDataCurrent.pathDirectory, `${pathDataCurrent.pathPrefix}.template.html`);
  let angularTemplate = readFileSync(pathAngularTemplate, {encoding:'utf-8'});

  // Each piece of content is added as a named ng-template
  let combinedTemplate = '';
  for (let contentNameCurrent of pathDataCurrent.markdownContentNames) {
    let pathContentCurrent = join(pathDataCurrent.pathDirectory, `${pathDataCurrent.pathPrefix}.${contentNameCurrent}.md`);
    let markdownContentCurrent = readFileSync(pathContentCurrent, {encoding:'utf-8'});

    let renderedContentCurrent = marked.parse(markdownContentCurrent);

    combinedTemplate += `<ng-template #${contentNameCurrent}>\n`;
    combinedTemplate += `${renderedContentCurrent}\n`;
    combinedTemplate += `</ng-template>\n`;
    combinedTemplate += `\n`;
  }

  // The angular template can then draw upon those
  combinedTemplate += angularTemplate;

  // Store it at the rendered location to be used by Angular compilation
  let pathRenderedTemplate = join(pathDataCurrent.pathDirectory, `${pathDataCurrent.pathPrefix}.rendered.html`);
  writeFileSync(pathRenderedTemplate, combinedTemplate);

  console.log(combinedTemplate);
}
