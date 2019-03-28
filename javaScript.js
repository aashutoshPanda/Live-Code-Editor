	function update(){
				$("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#csspanel").val()+"</style></head><body>"+$(htmlpanel).val()+"</body></html>");
				
// 				document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
			}
			$(".toggleButtons").hover(
				
				function(){
					$(this).addClass("highlightedButtons");
					$(this).css( 'cursor', 'pointer' );
			
				},function(){
					$(this).removeClass("highlightedButtons")
				}
			);
			$(".toggleButtons").click(function(){
				$(this).toggleClass("active");
				$(this).removeClass("highlightedButtons");
				var panelId="#"+$(this).attr("id")+"panel";
				$(panelId).toggleClass("hidden");
				var count_hidden=$(".hidden").length;
				$(".panel").width(($(window).width()/(4-count_hidden))-15);
				
			}
			);

			
			$(".panel").height($(window).height()-$("#header").height()-15);
			



			$("iframe").contents().find("html").html($("#htmlpanel").val());



			update();
			$("textarea").on('change keyup paste', function() {
				update();
			});
