class MarkdownPathData {
  constructor(
    public pathDirectory:string, // Directory containing all the related files
    public pathPrefix:string, // Prefix for all the related files
    public markdownContentNames:string[] // Names of Markdown content files/templates
  ) {
  }
}

export const PATHS_DATA:MarkdownPathData[] = [
  new MarkdownPathData(
    'src/app/assignments/assignment0',
    'assignment0.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/home',
    'home.component',
    ['content']
  ),
];
