<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdn.bootcss.com/typed.js/1.1.4/typed.min.js"></script>
	<style type="text/css">
		.write{
			font-size: 22px;
		}
		.container{
			text-align: center;
		}
	</style>
</head>
<body>


<div class="container">
	<h1><span class="write"></span> </h1>
</div>


<script type="text/javascript">
	$(function(){
        $(".write").typed({
            strings: ["I am Shyra Basas", "I am a Web Developer"],
            typeSpeed: 70,
            backDelay: 200,
            loop: true
        });
    });
</script>


</body>
</html>