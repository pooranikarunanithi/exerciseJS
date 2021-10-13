(() => {
    
    var today = new Date();
      
    if  ((today.getHours()<15) || (today.getHours() == 15 && today.getMinutes() < 30))
    {
        confirm("Bonjour")

    } 
    else
    {
        confirm("Bonsoir")

    }

    
  
   
  })();