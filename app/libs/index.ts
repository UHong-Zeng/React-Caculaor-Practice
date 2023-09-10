export const basic_operation = [
  {
    name: 'plus',
    operation: '+',
    position: {
      row: "4",
      col: "1",
    }
  },
  {
    name: 'minus',
    operation: '-',
    position: {
      row: "3",
      col: "1",
    }
  },
  {
    name: 'multiply',
    operation: 'X',
    position: {
      row: "3",
      col: "2",
    }
  },
  {
    name: 'power',
    operation: '*',
    position: {
      row: "2",
      col: "2",
    }
  },
  {
    name: 'divide',
    operation: '/',
    extends:{
      name: 'mod',
      operation: '%',
    },
    position: {
      row: "2",
      col: "1",
    }
  },
  {
    name: 'equal',
    operation: '=',
    position: {
      row: "4",
      col: "2",
    }
  },
  {
    name: 'clear',
    operation: 'AC',
    position: {
      row: "1",
      col: "1",
    }
  },
  {
    name: 'back',
    operation: '←',
    position: {
      row: "1",
      col: "2",
    },
  },
]

export const advance_operation = [
  {
    name: 'pi',
    operation: 'π',
  },
]