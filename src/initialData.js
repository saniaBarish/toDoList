
var _ = require("lodash");

export const lists = [
    {
        id: +_.uniqueId(),
        name: "ToDo",
        isOpen: false
    },
    {
        id: +_.uniqueId(),
        name: "Doing",
        isOpen: false
    },
    {
        id: +_.uniqueId(),
        name: "Done",
        isOpen: false
    }
]

 export const notes = [
    {
        id: 1,
        discription: "Fix bug whith player",
        listId: +lists[0].id,
        isOpen: false
    },
    {
        id: 2,
        discription: "Add feature with D3",
        listId: +lists[0].id,
        isOpen: false
    },
    {
        id: 3,
        discription: "Learn EmberJS",
        listId: +lists[1].id,
        isOpen: false
    }
]
export default {lists, notes};