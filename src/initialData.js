
var _ = require("lodash");

export const lists = [
    {
        id: +_.uniqueId(),
        name: "ToDo"
    },
    {
        id: +_.uniqueId(),
        name: "Doing"
    },
    {
        id: +_.uniqueId(),
        name: "Done"
    }
]

 export const notes = [
    {
        id: 1,
        discription: "Fix bug whith player",
        listId: lists[0].id
    },
    {
        id: 2,
        discription: "Add feature with D3",
        listId: lists[0].id
    },
    {
        id: 3,
        discription: "Learn EmberJS",
        listId: lists[1].id
    }
]

export const initialData = [lists, notes];