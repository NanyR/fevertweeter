


  function getAPI(){
    const url= "http://localhost:3000/flutrack?s=feverANDcoughORfever"
    $.getJSON(url, function(data){
      console.log(data)
    })
  }
