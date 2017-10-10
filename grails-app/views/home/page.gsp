<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
 <div class="container">
 <g:form role="form">
   <div class="form-group">
      <label for="name">RSS Feed</label>
      <input type="rss" class="form-control" id="name" placeholder="Ex. http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml" onkeyup="alert('test');"></input>
   </div>

	<div class="col-xs-2">
	   	<div class="form-group">
	   		<label for="title">Title</label>
	   		<input type="text" class="form-control" placeholder="Ex. New York Times">
	   	</div>
	</div>

	<div class="col-xs-2">
   		<div class="form-group">
   			<label for="source">Source</label>
   			<select class="form-control">
   				<option>Algeria</option>
				<option>Angola</option>
				<option>Benin</option>
				<option>Botswana</option>
				<option>Burkina Faso</option>
				<option>Burundi</option>
				<option>Cabo Verde</option>
				<option>Cameroon</option>
				<option>Central African Republic</option>
				<option>Chad</option>
				<option>Comoros</option>
				<option>Congo, Democratic Republic of the</option>
				<option>Congo, Republic of the</option>
				<option>Cote d'Ivoire</option>
				<option>Djibouti</option>
				<option>Egypt</option>
				<option>Equatorial Guinea</option>
				<option>Eritrea</option>
				<option>Ethiopia</option>
				<option>Gabon</option>
				<option>Gambia, The</option>
				<option>Ghana</option>
				<option>Guinea</option>
				<option>Guinea-Bissau</option>
				<option>Kenya</option>
				<option>Lesotho</option>
				<option>Liberia</option>
				<option>Libya</option>
				<option>Madagascar</option>
				<option>Malawi</option>
				<option>Mali</option>
				<option>Mauritania</option>
				<option>Mauritius</option>
				<option>Mayotte</option>
				<option>Morocco</option>
				<option>Mozambique</option>
				<option>Namibia</option>
				<option>Niger</option>
				<option>Nigeria</option>
				<option>Rwanda</option>
				<option>Saint Helena, Ascension, and Tristan da Cunha</option>
				<option>Sao Tome and Principe</option>
				<option>Senegal</option>
				<option>Seychelles</option>
				<option>Sierra Leone</option>
				<option>Somalia</option>
				<option>South Africa</option>
				<option>South Sudan</option>
				<option>Sudan</option>
				<option>Swaziland</option>
				<option>Tanzania</option>
				<option>Togo</option>
				<option>Tunisia</option>
				<option>Uganda</option>
				<option>Western Sahara</option>
				<option>Zambia</option>
				<option>Zimbabwe</option>
				<option>Antarctica</option>
				<option>Bouvet Island</option>
				<option>Heard Island and McDonald Islands</option>
				<option>South Georgia and South Sandwich Islands</option>
				<option>Southern Ocean</option>
				<option>French Southern and Antarctic Lands</option>
				<option>Arctic Ocean</option>
				<option>Greenland</option>
				<option>Iceland</option>
				<option>Jan Mayen</option>
				<option>Svalbard</option>
				<option>Afghanistan</option>
				<option>Bangladesh</option>
				<option>Bhutan</option>
				<option>China</option>
				<option>India</option>
				<option>Japan</option>
				<option>Kazakhstan</option>
				<option>Korea, North</option>
				<option>Korea, South</option>
				<option>Kyrgyzstan</option>
				<option>Maldives</option>
				<option>Mongolia</option>
				<option>Nepal</option>
				<option>Pakistan</option>
				<option>Sri Lanka</option>
				<option>Tajikistan</option>
				<option>Turkmenistan</option>
				<option>Uzbekistan</option>
				<option>Anguilla</option>
				<option>Antigua and Barbuda</option>
				<option>Aruba</option>
				<option>Bahamas, The</option>
				<option>Barbados</option>
				<option>Belize</option>
				<option>British Virgin Islands</option>
				<option>Cayman Islands</option>
				<option>Costa Rica</option>
				<option>Cuba</option>
				<option>Curacao</option>
				<option>Dominica</option>
				<option>Dominican Republic</option>
				<option>El Salvador</option>
				<option>Grenada</option>
				<option>Guadeloupe</option>
				<option>Guatemala</option>
				<option>Haiti</option>
				<option>Honduras</option>
				<option>Jamaica</option>
				<option>Martinique</option>
				<option>Montserrat</option>
				<option>Navassa Island</option>
				<option>Nicaragua</option>
				<option>Panama</option>
				<option>Puerto Rico</option>
				<option>Saint Barthelemy</option>
				<option>Saint Kitts and Nevis</option>
				<option>Saint Lucia</option>
				<option>Saint Martin</option>
				<option>Saint Vincent and the Grenadines</option>
				<option>Sint Maarten</option>
				<option>Trinidad and Tobago</option>
				<option>Turks and Caicos Islands</option>
				<option>Virgin Islands</option>
				<option>Albania</option>
				<option>Armenia</option>
				<option>Azerbaijan</option>
				<option>Belarus</option>
				<option>Bosnia and Herzegovina</option>
				<option>Bulgaria</option>
				<option>Georgia</option>
				<option>Kosovo</option>
				<option>Macedonia</option>
				<option>Moldova</option>
				<option>Montenegro</option>
				<option>Romania</option>
				<option>Russia</option>
				<option>Serbia</option>
				<option>Ukraine</option>
				<option>Andorra</option>
				<option>Austria</option>
				<option>Belgium</option>
				<option>Croatia</option>
				<option>Czechia</option>
				<option>Denmark</option>
				<option>Estonia</option>
				<option>European Union</option>
				<option>Faroe Islands</option>
				<option>Finland</option>
				<option>France</option>
				<option>Germany</option>
				<option>Gibraltar</option>
				<option>Greece</option>
				<option>Guernsey</option>
				<option>Holy See (Vatican City)</option>
				<option>Hungary</option>
				<option>Ireland</option>
				<option>Isle of Man</option>
				<option>Italy</option>
				<option>Jersey</option>
				<option>Latvia</option>
				<option>Liechtenstein</option>
				<option>Lithuania</option>
				<option>Luxembourg</option>
				<option>Malta</option>
				<option>Monaco</option>
				<option>Netherlands</option>
				<option>Norway</option>
				<option>Poland</option>
				<option>Portugal</option>
				<option>San Marino</option>
				<option>Slovakia</option>
				<option>Slovenia</option>
				<option>Spain</option>
				<option>Sweden</option>
				<option>Switzerland</option>
				<option>United Kingdom</option>
				<option>Akrotiri</option>
				<option>Bahrain</option>
				<option>Cyprus</option>
				<option>Dhekelia</option>
				<option>Gaza Strip</option>
				<option>Iran</option>
				<option>Iraq</option>
				<option>Israel</option>
				<option>Jordan</option>
				<option>Kuwait</option>
				<option>Lebanon</option>
				<option>Oman</option>
				<option>Qatar</option>
				<option>Saudi Arabia</option>
				<option>Syria</option>
				<option>Turkey</option>
				<option>United Arab Emirates</option>
				<option>West Bank</option>
				<option>Yemen</option>
				<option>Bermuda</option>
				<option>Canada</option>
				<option>Mexico</option>
				<option>Saint Pierre and Miquelon</option>
				<option>United States</option>
				<option>American Samoa</option>
				<option>Australia</option>
				<option>Cook Islands</option>
				<option>Coral Sea Islands</option>
				<option>Fiji</option>
				<option>French Polynesia</option>
				<option>Guam</option>
				<option>Howland Island</option>
				<option>Jarvis Island</option>
				<option>Johnston Atoll</option>
				<option>Kingman Reef</option>
				<option>Kiribati</option>
				<option>Marshall Islands</option>
				<option>Micronesia, Federated States of</option>
				<option>Midway Islands</option>
				<option>Nauru</option>
				<option>New Caledonia</option>
				<option>New Zealand</option>
				<option>Niue</option>
				<option>Norfolk Island</option>
				<option>Northern Mariana Islands</option>
				<option>Palau</option>
				<option>Palmyra Atoll</option>
				<option>Papua New Guinea</option>
				<option>Pitcairn Islands</option>
				<option>Samoa</option>
				<option>Solomon Islands</option>
				<option>Tokelau</option>
				<option>Tonga</option>
				<option>Tuvalu</option>
				<option>United States Pacific Island Wildlife Refuges</option>
				<option>Vanuatu</option>
				<option>Wake Island</option>
				<option>Wallis and Futuna</option>
				<option>Argentina</option>
				<option>Bolivia</option>
				<option>Brazil</option>
				<option>Chile</option>
				<option>Colombia</option>
				<option>Ecuador</option>
				<option>Falkland Islands (Islas Malvinas)</option>
				<option>French Guiana</option>
				<option>Guyana</option>
				<option>Paraguay</option>
				<option>Peru</option>
				<option>Suriname</option>
				<option>Uruguay</option>
				<option>Venezuela</option>
				<option>Ashmore and Cartier Islands</option>
				<option>Brunei</option>
				<option>Burma</option>
				<option>Cambodia</option>
				<option>Christmas Island</option>
				<option>Cocos (Keeling) Islands</option>
				<option>Hong Kong</option>
				<option>Indonesia</option>
				<option>Laos</option>
				<option>Macau</option>
				<option>Malaysia</option>
				<option>Paracel Islands</option>
				<option>Philippines</option>
				<option>Singapore</option>
				<option>Spratly Islands</option>
				<option>Taiwan</option>
				<option>Thailand</option>
				<option>Timor-Leste</option>
				<option>Vietnam</option>
			</select>
   		</div>
   	</div>

   	<div class="col-xs-1">
   		<div class="form-group">
   			<label for="lang">ISO</label>
   			<select class="form-control">
   				<option value="" selected disabled>-</option>
	   			<option>en</option>
				<option>de</option>
				<option>cs</option>
				<option>nl</option>
				<option>da</option>
				<option>sv</option>
				<option>fi</option>
				<option>et</option>
				<option>no</option>
				<option>is</option>
				<option>es</option>
				<option>pt</option>
				<option>ca</option>
				<option>it</option>
				<option>ru</option>
				<option>uk</option>
				<option>bg</option>
				<option>ka</option>
				<option>pl</option>
				<option>ro</option>
				<option>hu</option>
				<option>lv</option>
				<option>ja</option>
				<option>zh</option>
				<option>ko</option>
				<option>ar</option>
				<option>fa</option>
				<option>el</option>
				<option>hr</option>
				<option>mk</option>
				<option>bs</option>
				<option>sq</option>
				<option>ku</option>
				<option>tr</option>
				<option>sr</option>
				<option>he</option>
				<option>ta</option>
				<option>hi</option>
				<option>ur</option>
				<option>th</option>
				<option>vi</option>
				<option>id</option>
				<option>ne</option>
				<option>fr</option>
			</select>
   		</div>
   	</div>

   	<div class="col-xs-2">
   		<div class="form-group">
   			<label for="category">Category</label>
   			<select class="form-control">
   				<option value="" selected disabled>-</option>
   				<option>Business</option>
				<option>Defense</option>
				<option>Entertainment</option>
				<option>Environment</option>
				<option>Food</option>
				<option>Health</option>
				<option>Lifestyle</option>
				<option>Politics</option>
				<option>Science</option>
				<option>Sports</option>
				<option>Technology</option>
			</select>
   		</div>
   	</div>

   	<div class="col-xs-2">
   		<div class="form-group">
   			<label for="country">Country Covered</label>
   			<select class="form-control">
   				<option value="" selected disabled>-</option>
   				<option>Algeria</option>
				<option>Angola</option>
				<option>Benin</option>
				<option>Botswana</option>
				<option>Burkina Faso</option>
				<option>Burundi</option>
				<option>Cabo Verde</option>
				<option>Cameroon</option>
				<option>Central African Republic</option>
				<option>Chad</option>
				<option>Comoros</option>
				<option>Congo, Democratic Republic of the</option>
				<option>Congo, Republic of the</option>
				<option>Cote d'Ivoire</option>
				<option>Djibouti</option>
				<option>Egypt</option>
				<option>Equatorial Guinea</option>
				<option>Eritrea</option>
				<option>Ethiopia</option>
				<option>Gabon</option>
				<option>Gambia, The</option>
				<option>Ghana</option>
				<option>Guinea</option>
				<option>Guinea-Bissau</option>
				<option>Kenya</option>
				<option>Lesotho</option>
				<option>Liberia</option>
				<option>Libya</option>
				<option>Madagascar</option>
				<option>Malawi</option>
				<option>Mali</option>
				<option>Mauritania</option>
				<option>Mauritius</option>
				<option>Mayotte</option>
				<option>Morocco</option>
				<option>Mozambique</option>
				<option>Namibia</option>
				<option>Niger</option>
				<option>Nigeria</option>
				<option>Rwanda</option>
				<option>Saint Helena, Ascension, and Tristan da Cunha</option>
				<option>Sao Tome and Principe</option>
				<option>Senegal</option>
				<option>Seychelles</option>
				<option>Sierra Leone</option>
				<option>Somalia</option>
				<option>South Africa</option>
				<option>South Sudan</option>
				<option>Sudan</option>
				<option>Swaziland</option>
				<option>Tanzania</option>
				<option>Togo</option>
				<option>Tunisia</option>
				<option>Uganda</option>
				<option>Western Sahara</option>
				<option>Zambia</option>
				<option>Zimbabwe</option>
				<option>Antarctica</option>
				<option>Bouvet Island</option>
				<option>Heard Island and McDonald Islands</option>
				<option>South Georgia and South Sandwich Islands</option>
				<option>Southern Ocean</option>
				<option>French Southern and Antarctic Lands</option>
				<option>Arctic Ocean</option>
				<option>Greenland</option>
				<option>Iceland</option>
				<option>Jan Mayen</option>
				<option>Svalbard</option>
				<option>Afghanistan</option>
				<option>Bangladesh</option>
				<option>Bhutan</option>
				<option>China</option>
				<option>India</option>
				<option>Japan</option>
				<option>Kazakhstan</option>
				<option>Korea, North</option>
				<option>Korea, South</option>
				<option>Kyrgyzstan</option>
				<option>Maldives</option>
				<option>Mongolia</option>
				<option>Nepal</option>
				<option>Pakistan</option>
				<option>Sri Lanka</option>
				<option>Tajikistan</option>
				<option>Turkmenistan</option>
				<option>Uzbekistan</option>
				<option>Anguilla</option>
				<option>Antigua and Barbuda</option>
				<option>Aruba</option>
				<option>Bahamas, The</option>
				<option>Barbados</option>
				<option>Belize</option>
				<option>British Virgin Islands</option>
				<option>Cayman Islands</option>
				<option>Costa Rica</option>
				<option>Cuba</option>
				<option>Curacao</option>
				<option>Dominica</option>
				<option>Dominican Republic</option>
				<option>El Salvador</option>
				<option>Grenada</option>
				<option>Guadeloupe</option>
				<option>Guatemala</option>
				<option>Haiti</option>
				<option>Honduras</option>
				<option>Jamaica</option>
				<option>Martinique</option>
				<option>Montserrat</option>
				<option>Navassa Island</option>
				<option>Nicaragua</option>
				<option>Panama</option>
				<option>Puerto Rico</option>
				<option>Saint Barthelemy</option>
				<option>Saint Kitts and Nevis</option>
				<option>Saint Lucia</option>
				<option>Saint Martin</option>
				<option>Saint Vincent and the Grenadines</option>
				<option>Sint Maarten</option>
				<option>Trinidad and Tobago</option>
				<option>Turks and Caicos Islands</option>
				<option>Virgin Islands</option>
				<option>Albania</option>
				<option>Armenia</option>
				<option>Azerbaijan</option>
				<option>Belarus</option>
				<option>Bosnia and Herzegovina</option>
				<option>Bulgaria</option>
				<option>Georgia</option>
				<option>Kosovo</option>
				<option>Macedonia</option>
				<option>Moldova</option>
				<option>Montenegro</option>
				<option>Romania</option>
				<option>Russia</option>
				<option>Serbia</option>
				<option>Ukraine</option>
				<option>Andorra</option>
				<option>Austria</option>
				<option>Belgium</option>
				<option>Croatia</option>
				<option>Czechia</option>
				<option>Denmark</option>
				<option>Estonia</option>
				<option>European Union</option>
				<option>Faroe Islands</option>
				<option>Finland</option>
				<option>France</option>
				<option>Germany</option>
				<option>Gibraltar</option>
				<option>Greece</option>
				<option>Guernsey</option>
				<option>Holy See (Vatican City)</option>
				<option>Hungary</option>
				<option>Ireland</option>
				<option>Isle of Man</option>
				<option>Italy</option>
				<option>Jersey</option>
				<option>Latvia</option>
				<option>Liechtenstein</option>
				<option>Lithuania</option>
				<option>Luxembourg</option>
				<option>Malta</option>
				<option>Monaco</option>
				<option>Netherlands</option>
				<option>Norway</option>
				<option>Poland</option>
				<option>Portugal</option>
				<option>San Marino</option>
				<option>Slovakia</option>
				<option>Slovenia</option>
				<option>Spain</option>
				<option>Sweden</option>
				<option>Switzerland</option>
				<option>United Kingdom</option>
				<option>Akrotiri</option>
				<option>Bahrain</option>
				<option>Cyprus</option>
				<option>Dhekelia</option>
				<option>Gaza Strip</option>
				<option>Iran</option>
				<option>Iraq</option>
				<option>Israel</option>
				<option>Jordan</option>
				<option>Kuwait</option>
				<option>Lebanon</option>
				<option>Oman</option>
				<option>Qatar</option>
				<option>Saudi Arabia</option>
				<option>Syria</option>
				<option>Turkey</option>
				<option>United Arab Emirates</option>
				<option>West Bank</option>
				<option>Yemen</option>
				<option>Bermuda</option>
				<option>Canada</option>
				<option>Mexico</option>
				<option>Saint Pierre and Miquelon</option>
				<option>United States</option>
				<option>American Samoa</option>
				<option>Australia</option>
				<option>Cook Islands</option>
				<option>Coral Sea Islands</option>
				<option>Fiji</option>
				<option>French Polynesia</option>
				<option>Guam</option>
				<option>Howland Island</option>
				<option>Jarvis Island</option>
				<option>Johnston Atoll</option>
				<option>Kingman Reef</option>
				<option>Kiribati</option>
				<option>Marshall Islands</option>
				<option>Micronesia, Federated States of</option>
				<option>Midway Islands</option>
				<option>Nauru</option>
				<option>New Caledonia</option>
				<option>New Zealand</option>
				<option>Niue</option>
				<option>Norfolk Island</option>
				<option>Northern Mariana Islands</option>
				<option>Palau</option>
				<option>Palmyra Atoll</option>
				<option>Papua New Guinea</option>
				<option>Pitcairn Islands</option>
				<option>Samoa</option>
				<option>Solomon Islands</option>
				<option>Tokelau</option>
				<option>Tonga</option>
				<option>Tuvalu</option>
				<option>United States Pacific Island Wildlife Refuges</option>
				<option>Vanuatu</option>
				<option>Wake Island</option>
				<option>Wallis and Futuna</option>
				<option>Argentina</option>
				<option>Bolivia</option>
				<option>Brazil</option>
				<option>Chile</option>
				<option>Colombia</option>
				<option>Ecuador</option>
				<option>Falkland Islands (Islas Malvinas)</option>
				<option>French Guiana</option>
				<option>Guyana</option>
				<option>Paraguay</option>
				<option>Peru</option>
				<option>Suriname</option>
				<option>Uruguay</option>
				<option>Venezuela</option>
				<option>Ashmore and Cartier Islands</option>
				<option>Brunei</option>
				<option>Burma</option>
				<option>Cambodia</option>
				<option>Christmas Island</option>
				<option>Cocos (Keeling) Islands</option>
				<option>Hong Kong</option>
				<option>Indonesia</option>
				<option>Laos</option>
				<option>Macau</option>
				<option>Malaysia</option>
				<option>Paracel Islands</option>
				<option>Philippines</option>
				<option>Singapore</option>
				<option>Spratly Islands</option>
				<option>Taiwan</option>
				<option>Thailand</option>
				<option>Timor-Leste</option>
				<option>Vietnam</option>
			</select>
   		</div>
   	</div>

   	<div class="col-xs-2">
   		<div class="form-group">
   			<label for="region">Region Covered</label>
   			<select class="form-control">
   				<option value="" selected disabled>-</option>
	   			<option>Africa</option>
				<option>Antarctica Region</option>
				<option>Arctic Region</option>
				<option>Asia</option>
				<option>Central American and the Caribbean</option>
				<option>Eastern Europe</option>
				<option>Europe</option>
				<option>Middle East</option>
				<option>North America</option>
				<option>Oceania</option>
				<option>South America</option>
				<option>Southeast Asia</option>
			</select>
   		</div>
   	</div>

<g:form name="testForm" url="test" action="index">
   	<div class="col-xs-1">
		<div class="radio">
  			<label><input type="radio" name="optradio">News Feed</label>
		</div>
		<div class="radio">
  			<label><input type="radio" name="optradio">Blog</label>
		</div>
	</div>
   
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   		<div class = "form-group">
      		<label for = "inputfile">Have multiple feeds?</label>
      		<input type = "file" id = "inputfile">
      		<p class = "help-block">Accepted formats: .csv, .xlsx</p>
   		</div>
    </div>

   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
   		<input type="submit" id="button" class="btn btn-info pull-right" value="Validate"">
   </div>
</form>
</div>

	<g:actionSubmit value="Send to controller" action="index"/>
</g:form>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <!--g:javascript src="application.js" /-->
 	<script type="text/javascript">
 		alert('test');
 		function disableButton() {
 			console.log('doing it');
 			var rss = document.getElementById('name').value;
 			console.log("doing it");
 			/*if (!rss.match(/\S/)) {
 				alert("no");
 				document.getElementById('button').disabled = true;
 			}*/

 		}
 	</script>


    
  </body>
</html>