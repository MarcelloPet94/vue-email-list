var appVue = new Vue 
({
    el : '#root',        
    data : {
        mail: []
    },
    
    created: function()
    {

        let i = 0
        while(i < 10)
        {
            this.emailGen()
            i++
        }
    },

    methods : {
        emailGen : function()
        {
            
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((dato) => {
                
                this.mail.push(dato.data.response)
                console.log(dato)

            })
            .catch(function (error) {
            // handle error
            console.log(error)
            })


        },
    }
});

