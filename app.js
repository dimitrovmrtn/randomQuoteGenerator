  var backgrounds = [
    "url('https://images.unsplash.com/photo-1484968309888-8d6b403bc1ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')", 
    "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80')",
    "url('https://images.unsplash.com/photo-1489861518096-4d12b732e831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1407&q=80')",
    "url('https://images.unsplash.com/photo-1468779823294-9824b5b9a1b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80')",
    "url('https://images.unsplash.com/photo-1498770459452-65a65086844d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    "url('https://images.unsplash.com/photo-1496858705185-1f25b056e4a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    "url('https://images.unsplash.com/photo-1428452932365-4e7e1c4b0987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    "url('https://images.unsplash.com/photo-1475687628081-a6cdfccba7ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    "url('https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80')",
    "url('https://images.unsplash.com/photo-1496535731694-9673400f50c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
    "url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    "url('https://images.unsplash.com/photo-1472856053553-799da7ffa653?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
  ];

  function getBackground(){
    var newBackground = backgrounds[Math.floor(Math.random()*backgrounds.length)];
    var body = $("body");
    body.css("background", newBackground);
    body.css("background-size", "cover");
    body.css("background-position", "center");
  };


  var randomQuote;
  var author;
  function getQuote(){
  var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data){
    $(".quote").html('"'+data.quoteText+'"'); 
    $(".author").html("-"+data.quoteAuthor);
    
    
  });
 

};
    $("#tweet").on("click", function(){
      console.log(randomQuote);
window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });
  
    $("#newQuote").on("click", function(){
    getQuote();
    getBackground();
  });

  getQuote();
  getBackground();
