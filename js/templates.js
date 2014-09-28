var layout = 

"
<!doctype html>
<html>


<head>
	<title>Boston Beans</title>
	<meta charset='UTF-8'>
    <link href='css/bootstrap.min.css' rel='stylesheet'>
    <link href='css/stylesheet.css' rel='stylesheet'>
    
</head>

<body>
  <div class='container'>
    
	  <header>
    
    <nav class='navbar navbar-default' role='navigation'>
      <div class='container-fluid'>
        <div class='navbar-header'>
          <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
            <span class='sr-only'>Toggle navigation</span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
          </button>
          <a class='navbar-brand' href='index.html'>Boston Beans</a>
        </div>
    
        <div class='collapse navbar-collapse'>

          <ul class='nav navbar-nav navbar-right'>
            <li><a href='#'>Shop</a></li>
            <li><a href='#'>Sourcing</a></li>
            <li class='dropdown'>
              <a href='#' class='dropdown-toggle' data-toggle='dropdown'>About</a>
              <ul class='dropdown-menu' role='menu'>
                <li><a href='#'>Our Story</a></li>
                <li><a href='#'>Help</a></li>
                <li><a href='#'>Contact Us</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </header>
    
    <section>
    
      <div class='row'>
      
        <div class='col-sm-6 col-md-4'>
          <div class='thumbnail'>
            <img src='images/grid_lattes.jpg' alt='Grid of Lattes'>
            <div class='caption center'>
              <h3>Meet our Baristas!</h3>
            </div>
          </div>
        </div>

        <div class='col-sm-6 col-md-4'>
          <div class='thumbnail'>
            <img src='images/comm_coff_bost.png' alt='Commercial Coffee House, Boston'>
            <div class='caption center'>
              <h3>History of coffee in Boston</h3>
            </div>
          </div>
        </div>
            <div class='col-sm-6 col-md-4'>
          <div class='thumbnail'>
            <img src='images/coff_beans.jpg' alt='Roasted Coffee Beans'>
            <div class='caption center'>
              <h3>Sourcing</h3>
            </div>
          </div>
        </div>
        
      </div><!-- end of row -->
              
    </section>
    
    <footer>
      <img src='images/people_sitting_lg.png' style='width: 100%;' />
    </footer>
	
  </div>

<script src='js/jquery-1.11.1.min.js'></script>
<script src='js/bootstrap.min.js'></script>


</body>
</html>
"