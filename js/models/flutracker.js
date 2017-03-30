class FluTracker{
  static all(){
    return $.getJSON("http://localhost:3000/flutrack")
  }
}
