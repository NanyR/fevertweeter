  function getAPI(){
    const url= "http://localhost:3000/flutrack?s=feverANDcoughORfever"
    $.getJSON(url, function(data){
      var results = data.map(function(d){
        `<p> ${d.aggravate} </p>
        <p> ${d.longitude} </p>
        <p> ${d.latitude} </p>
        <p> ${d.tweet_date} </p>
        <p> ${d.user_name} </p>
        <p> ${d.tweet_text} </p>`

      })
      console.log(results)
      $("#displayData").html(results)
    })
  }
