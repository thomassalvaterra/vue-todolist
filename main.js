const{ createApp } = Vue;

const opzioni = {
    data: function () {
        return {
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
        
    }
};

mounted() {
    console.log("Pagina caricata");
}

createApp(opzioni).mount("#app");