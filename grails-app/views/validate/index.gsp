<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Results</title>
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
    <div class="jumbotron text-center">
        <g:if test="${valid == 'This feed was successfully checked as well-formed XML!'}">
            <h4>${rss}</h4>
            <h4>${valid}</h4>
        </g:if>
        <g:elseif test="${feeds == null}">
            <h3> Sorry! This feed cannot be checked. </h3>
            <h5> The program threw the following error: </h5>
            <h5> ${valid} </h5>
        </g:elseif>
        <g:if test="${feeds != null}">
            <table class="table table-condensed table-responsive">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Feed</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <g:each status="i" var="mapElement" in="${feedMap}">
                        <g:if test="${mapElement.value.equals('Valid')}">
                            <tr class="success">
                                <td class="text-left">${i+1}</td>
                                <td class="text-left">${mapElement.key}</td>
                                <td class="text-left">${mapElement.value}</td>
                            </tr>
                        </g:if>
                        <g:else>
                            <tr class="danger">
                                <td class="text-left">${i+1}</td>
                                <td class="text-left">${mapElement.key}</td>
                                <td class="text-left">${mapElement.value}</td>
                            </tr>
                        </g:else>
                    </g:each>
                </tbody>
            </table>
        </g:if>
    </div>
</body>

</html>