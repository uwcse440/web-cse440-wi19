import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import * as MarkdownIt from "markdown-it";
import * as MarkdownItAnchor from "markdown-it-anchor";

let markdownIt = MarkdownIt("commonmark")
  .use(MarkdownItAnchor, {});

function renderMarkdown(markdown: string) {
  let regexLink = /\[(.*)\]\((.*)\)/g;

  // Match links, because the library requires they have a protocol, which our Angular links do not
  markdown = markdown.replace(regexLink, function (match: string, tokenLinkText: string, tokenHREF: string) {
    return `<a href="${tokenHREF}">${tokenLinkText}</a>`;
  });

  // Use the library for primary Markdown rendering
  return markdownIt.render(markdown);
}

// Data about the Markdown we'll render into Angular templates
import { PATHS_DATA } from "./markdown.paths";

for (let pathDataCurrent of PATHS_DATA) {
  let pathAngularTemplate = join(pathDataCurrent.pathDirectory, `${pathDataCurrent.pathPrefix}.template.html`);
  let angularTemplate = readFileSync(pathAngularTemplate, {encoding:"utf-8"});

  // Each piece of content is added as a named ng-template
  let combinedTemplate = "";
  for (let contentNameCurrent of pathDataCurrent.markdownContentNames) {
    let pathContentCurrent = join(pathDataCurrent.pathDirectory, `${pathDataCurrent.pathPrefix}.${contentNameCurrent}.md`);
    let markdownContentCurrent = readFileSync(pathContentCurrent, {encoding:"utf-8"});

    // Render the Markdown
    let renderedContentCurrent = renderMarkdown(markdownContentCurrent);

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

  console.log(`Rendered ${pathRenderedTemplate}`);
}
