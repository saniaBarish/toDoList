class Store {
    constructor({initialData}){

        this.data = initialData;
    }

    addNewList(name){
        this.data.push({
            id: Date.parse(new Date().toString()),
            name: name,
            notes: []
        })
    }
    deleteList(id){
        this.data.forEach((list,i) => {
            if(list.id === id){
                this.data.splice(i,1);
            }
        })
    }
    addNewNote(note, id){
        this.data.forEach((list,i) =>{
            if(list.id === id){
                this.data[i].notes.push(note);
                console.log(this.data[i].notes);
                console.log(note);
            }
        })
    }
}

export default Store;