<!DOCTYPE html>
<html lang="en">

<head>
    <!-- GOOGLE FONT -->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
    <script src="https://use.fontawesome.com/99e15c5291.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <!-- Bootstrap -->
    <link rel="stylesheet" type="text/css" media="screen" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>Validate News Feed</title>
    <!-- Main Style Sheet -->
    <!--link ref="stylesheet" href="${resource(dir: 'css', file: 'main.css')}" type="text/css"-->
    <asset:stylesheet src="main.css" />
    <asset:javascript src="piwik.js" />
    <!--asset:stylesheet src="smartadmin-production.css" /-->
    <!--asset:stylesheet src="main.css" /-->
    <!--link ref="stylesheet" href="main.css" type="text/css"-->
    <style>
    select.form-control {
        -webkit-appearance: none;
        -webkit-border-radius: 0px;
        background: url("data:image/svg+xml;utf8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'><path fill='#444' d='M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z'></path></svg>");
        background-position: 100% 50%;
        background-repeat: no-repeat;
    }
    /*.form-group {
    	border-radius: 0;
    }*/
    /*.row {
    	border-radius: 0;
    }*/
    /*.radio-inline+.radio-inline, .checkbox-inline+.checkbox-inline {
			margin-top: 0;
			margin-left: 30px;
		}

		.radio-inline, .checkbox-inline {
			display: inline-block;
			padding-left: 6px;
			margin-bottom: 10px;
			vertical-align: middle;
			font-weight: 400;
			cursor: pointer;
		}*/
    /*h1 {
			margin-top: 5px;
			font-size: 30px;
			text-align: center;
			word-wrap: break-word;
			font-family: "Open Sans",Sans-Serif;
			font-weight: 100;
			line-height: 1.1;
			color: inherit;
			letter-spacing: -1px;
			margin: 10px 0;
		}*/
    /*body {
			font-family: 'Roboto', sans-serif;
			font-weight: 100;
		}

		.btn {
			font-size: 14px;
		}

		#button {
			border-color: rgb(184, 89, 64);
			background-color: rgb(241, 90, 36)
		}

		.navbar-brand {
			float: left;
			padding: 25px;
			font-size: 18px;
			line-height: 20px;
			height: 25px;
		}

		.form-control, #button {
			border-radius: 0;
		}

		.thirdline {
			padding-left: 0px;
		} */
    </style>
    <!--link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"-->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>

<body>
    <nav class="navbar navbar-inverse" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">
                    <img src="https://scraawl.com/static/images/logo.png" style="max-width: 100px; margin-top: -8px;"> Scraawl
                </a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="/report/createReport">
                            <i class="fa fa-plus"></i>
                            <span class="hidden-sm hidden-md">New Report</span>
                        </a>
                    </li>
                    <li>
                        <a href="/report/list">
                            <i class="fa fa-home"></i>
                            <span class="hidden-sm">My Reports</span>
                        </a>
                    </li>
                    <li>
                        <a href="/account/profile">
                        <i class="fa fa-user"></i>
                        <span class="hidden-sm hidden-md">My Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/alert/index">
                            <i class="fa fa-bell"></i>
                            <span class="hidden-sm hidden-md">My Alerts</span>
                            </a>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="divider-vertical"></li>
                    <li>
                        <a href="https://www.scraawl.com/product/blog/">
                            <i class="fa fa-file-text-o"></i>
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="https://www.scraawl.com/product/faqs/">
                            <i class="fa fa-question-circle"></i>
                            <span class="hidden-sm hidden-md">Help</span>
                        </a>
                    </li>
                    <li>
                        <a href="/logout/index">
                                <i class="fa fa-sign-out"></i>
                                <span class="hidden-sm hidden-md">Logout</span>
                            </a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
    <div class="container">
        <h1 class="title">News Feed Validator</h1>
        <!-- where the search menu should be-->
        <g:form controller="validate" enctype="multipart/form-data">
            <div id="content">
                <div>
                    <label for="name" class="control-label">Type</label>
                    <div class="form-group ">
                        <label class="radio-inline">
                            <input id="radio-twitter" type="radio" name="type" value="news">News Feed
                        </label>
                        <label class="radio-inline">
                            <input id="radio-feed" type="radio" name="type" value="blog" checked="">Blog
                        </label>
                    </div>
                </div>
                <form role="form" method="POST" action class="form-main" _lpchecked="1">
                    <div class="form-group form-group-keywords">
                        <div id="inputs" class="pull-right">
                            <a href="#" id="importCsv">Import CSV file</a>
                            <!--  Hide html5 file api button because its default style can't be customized -->
                            <input name="csv" type="file" id="csvfile" accept=".csv, .txt" style="display: none; visibility: hidden; position: absolute; top: -50; left: -50" oninput="enableButton()">
                        </div>
                        <label for="filterKeywords" class="control-label">RSS Feed</label>
                        <g:textField name="rss" class="form-control tagit-hidden-field" id="name" oninput="enableButton()"></g:textField>
                        <!--input type="text" id="rss" name="rss" class="form-control tagit-hidden-field" value=""-->
                        <p class="help-block">
                            Example: <em>http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml</em>
                        </p>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-xs-2">
                                <div class="form-group">
                                    <label for="title" class="control-label">Title</label>
                                    <input id="title" type="text" class="form-control" name="title" value>
                                </div>
                            </div>
                            <div class="col-xs-2">
                                <div class="form-group">
                                    <label for="source" class="control-label">Source</label>
                                    <select id="source" class="form-control" name="source">
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
                            <div class="col-xs-1">
                                <div class="form-group">
                                    <label for="lang" class="control-label">ISO</label>
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
                                    <label for="category" class="control-label">Category</label>
                                    <select id="category" class="form-control" name="category">
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
                            <div class="col-xs-3">
                                <div class="form-group">
                                    <label for="country" class="control-label">Country Covered</label>
                                    <select id="country" class="form-control" name="country">
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
                                    <label for="region" class="control-label">Region</label>
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
                        </div>
                    </div>
                    <div class="form-group">
                        <button id="btn-start" type="submit" class="btn btn-primary" disabled data-toggle="modal" data-target="#myModal">Validate</button>
                    </div>
                </form>
        </g:form>
        </div>
        <g:form controller="validate" enctype="multipart/form-data">
            <!--label for="type">Type</label-->
            <!--div class="form-group"-->
            <!--div class="col-xs-12">
					<label class="radio-inline">
						<input type="radio" name="type" value="News Feed">News Feed</label>
					<label class="radio-inline">
						<input type="radio" name="type" value="Blog">Blog</label>
				</div-->
            <!--label for="feed">RSS Feed</label>
                        <g:textField name="rss" class="form-control" id="name" placeholder="Ex. http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml" onpaste="enableButton()"></g:textField>
                    </div-->
            <!--div class="thirdline"-->
            <!--div class="col-xs-2">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" placeholder="Ex. New York Times">
                    </div>
                </div-->
            <!--div class="col-xs-2">
                    <div class="form-group">
                        <label for="source">Source</label>
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
                        <input id="country" type="text" class="form-control" name="country" value>
                    </div>
                </div>
                <div class="col-xs-2">
                    <div class="form-group">
                        <label for="region">Region Covered</label>
                        <select id="region" class="form-control" name="region">
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
                </div-->
            <!--/div-->
            <!--div class="col-xs-1">
			<div class="radio">
				<label>
					<input type="radio" name="optradio">News Feed</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="optradio">Blog</label>
			</div>
		</div-->
            <!--div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="form-group">
                    <label for="inputfile">Have multiple feeds?</label>
            <input name="csv" type="file" id="inputfile" onclick="enableButton()"-->
            <!--p class="help-block">Accepted format: .csv</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <g:submitButton class="btn btn-info pull-right" disabled id="button" name="validate" value="Validate" />
            </div-->
        </g:form>
        <!-- <input type="submit" class="btn btn-info pull-right" value="Validate"/>
	-->
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript">
    function enableButton() {
        document.getElementById('btn-start').disabled = false;
    }
    $("a[id='importCsv']").click(function() {
    $("input[id='csvfile']").click();
});
    </script>
</body>
</html>