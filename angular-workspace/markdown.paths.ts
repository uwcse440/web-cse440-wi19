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
    'src/app/assignment-contribution-statement',
    'assignment-contribution-statement.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/assignments',
    'assignments.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/assignments/assignment0',
    'assignment0.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/assignments/assignment1',
    'assignment1.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/assignments/assignment2',
    'assignment2.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/assignments/assignment3',
    'assignment3.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/assignments/assignment4',
    'assignment4.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/assignments/readings',
    'readings.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/calendar',
    'calendar.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/home',
    'home.component',
    ['content']
  ),
  new MarkdownPathData(
    'src/app/projects',
    'projects.component',
    ['content']
  ),
];
