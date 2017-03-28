


  function getAPI(){
    const url= "http://api.flutrack.org/?s=feverANDcoughORfever"
    $.getJSON(url, function(data){
      console.log(data)
    })
  }
