const axios= require('axios'); //Traigo la libreria axios

axios.get('https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json')

    .then(result=>{
        console.log(result);
    })
    
    .catch(error=>{
        console.log(error);
    }
    );
