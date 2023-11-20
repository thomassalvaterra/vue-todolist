const{ createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            newItem: "",
            toDo: [{
                text: "Clean your shoes",
                done: true,
                },
                {
                text: "Go to work",
                done: true,
                },
                {
                text: "Eat your protein",
                done: false,
                },
                {
                text: "Play football",
                done: true,
                },
                {
                text: "Do your homework",
                done: false,
                },
                {
                text: "Sleep",
                done: false
                }
            ]
        }
    },

    methods: {
        //Sbarro gli elementi cliccati
        changeStatus(i) {
            if(this.toDdo[i].done) {
                this.toDo[i] = false;
            } else{
                this.toDo[i].done = true;
            }
        },
        //aggiungo pulsante elimina
        remove(i) {
            this.toDo.splice( i, 1);
        },
        //aggiungo elementi
        addElement() {
            let element = { 
                text : this.newItem, 
                done: false 
            };

            this.toDo.push(element);
            this.newItem = "";
        }
    },
    
    mounted() {
    console.log("Pagina caricata");
    }

};

createApp(opzioni).mount("#app");