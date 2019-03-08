interface Project {
  name: String;
  path: String;
}

class ProjectsData {
  projects = [
    {
      name: 'Balance',
      path: 'balance'
    },
    {
      name: 'Career Coach',
      path: 'careercoach'
    },
    {
      name: 'FamiTree',
      path: 'famitree'
    },
    {
      name: 'Laundr',
      path: 'laundr'
    },
    {
      name: 'Lensy',
      path: 'lensy'
    },
    {
      name: 'Logera',
      path: 'logera'
    },
    {
      name: 'Melon',
      path: 'melon'
    },
    {
      name: 'MOGO',
      path: 'mogo'
    },
    {
      name: 'notE',
      path: 'note'
    },
    {
      name: 'Pawsitive',
      path: 'pawsitive'
    },
    {
      name: 'penguin',
      path: 'penguin'
    },
    {
      name: 'QuaLights',
      path: 'qualights'
    },
    {
      name: 'SEEK',
      path: 'seek'
    },
    {
      name: 'Switch',
      path: 'switch'
    },
    {
      name: 'WastePlacer',
      path: 'wasteplacer'
    }
  ]
}

export const projects = new ProjectsData();
