export interface Routine {
  id: number,
  name: string,
  tasks: {
    id: number,
    name: string,
    description: string,
    duration: number
  }[]
}

// temp data
export const routineData: Routine = {
  id: 1,
  name: 'Work Routine',
  tasks: [
    {
      id: 1,
      name: 'Wake up',
      description: 'Description goes here...',
      // duration: 3600
      duration: 10
    },
    {
      id: 2,
      name: 'Work Part 1',
      description: 'Description goes here...',
      duration: 10800
    },
    {
      id: 3,
      name: 'Lunch Break',
      description: 'Description goes here...',
      duration: 3600
    },
    {
      id: 4,
      name: 'Work Part 2',
      description: 'Description goes here...',
      duration: 10800
    }
  ]
};
