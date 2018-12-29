// Basic file manipulation
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

// Configuration of Markdown-It
import * as MarkdownIt from "markdown-it";
import * as MarkdownItAnchor from "markdown-it-anchor";

// Paths we will process
import { PATHS_DATA } from "./markdown.paths";

// Our primary Markdown renderer
let markdownIt = MarkdownIt("commonmark")
  .use(MarkdownItAnchor, {});

function renderMarkdown(markdown: string) {
  // Preprocess to match link, because the library requires they have a protocol,
  // which our links that are Angular interpolations will be lacking (e.g., [{{ linktext }}]({{ linkhref }})).
  let regexLink = /\[(.*)\]\((.*)\)/g;
  markdown = markdown.replace(regexLink, function (match: string, tokenLinkText: string, tokenLinkHREF: string) {
    // Replace it with an Angular component that will render the link according to its properties
    let generated = `<html><app-generated-link linkHREF="${tokenLinkHREF}" linkText="${tokenLinkText}"></app-generated-link></html>`;

    return generated;
  });

  // Use the library for primary Markdown rendering
  return markdownIt.render(markdown);
}

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
