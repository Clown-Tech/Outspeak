import db from './index.js';

export function getPoliticanEvents(userId) {
    try{
        db.ref('/politician').on('value', (snapshot) => {
        let data = snapshot.val();
        console.log(Object.values(data)[1]);
      })
    } catch (error){
          console.log(error);
      }
  }

  export function getPoliticans(userId) {
    try{
        db.ref('/politician').on('value', (snapshot) => {
        let data = snapshot.val();
        //Object.values(data).length
        for(var i = 0; i < 100; i++){
            var ranNum = Math.floor(Math.random() * 300); 
            if(Object.values(data)[5][ranNum].hasOwnProperty('death_date') != true){
                        console.log(Object.values(data)[5][ranNum]["identifiers"][i]);
                
            }
        }
      })
    } catch (error){
          console.log(error);
      }
  }
