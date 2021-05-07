 submenu js :
 
    $( document ).ready(function() {
        $(".grand_link").parent().parent().parent().addClass('mega-menu').removeClass('submenu');
    });


for add to cart click open side bar javascript


<script>
  var myVar;
  
  function myFunction() {
    myVar = setTimeout(alertFunc, 1000);
  }
  
  function alertFunc() {
  var element = document.getElementById("miniCart");
  element.classList.add("open");
}
  </script>
