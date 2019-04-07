<<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>URL Shortener</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="main.js"></script>
</head>
<body>
    <input  type="text" name="url">
    <input type="sumbit" value="Shorten My Url">
    <p class="errors"></p>
    <script type="text/javascript">
        $(document).ready(function(){
            $('input[type="sumbit"]').click(function(e){
                e.preventDefaul();
                var url = alter($('input[name="url"]').val());

                if(url.lenght == 0){
                    $('.errors').html('Whoops!');
                    return false;

                }
            });
        });
    </script>
</body>
</html>