<script>
  function academic() {
    document.getElementById("academic-summary").style.display = "block";
    document.getElementById("class-schedule").style.display = "none";
    document.getElementById("webstac-news").style.display = "none";
  }
  function schedule() {
    document.getElementById("academic-summary").style.display = "none";
    document.getElementById("class-schedule").style.display = "block";
    document.getElementById("webstac-news").style.display = "none";
  }
  function news() {
    document.getElementById("academic-summary").style.display = "none";
    document.getElementById("class-schedule").style.display = "none";
    document.getElementById("webstac-news").style.display = "block";
  }
</script>
