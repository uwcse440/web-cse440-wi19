import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.link = (href: string, title: string, text: string) => {
    const isExternalLink = href.startsWith('http') || href.startsWith('//');

    if (isExternalLink) {
      return `<a href="${href}">${text}</a>`;
    } else {
      return `<a routerLink="${href}">${text}</a>`;
    }
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}
