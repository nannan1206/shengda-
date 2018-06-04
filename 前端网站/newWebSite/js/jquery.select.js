(function($) {

	var selects = $('select'); //获取select

	for (var i = 0; i < selects.length; i++) {
		createSelect(selects[i], i);
	}

	$('.select_box').click(function() {
		var ul = $(this).find('ul');
		if (ul.is(':visible')) {
			$('.select_showbox').removeClass('active');
			ul.hide();
		} else {
			$(".select_option").hide();
			$('.select_showbox').removeClass('active');
			$(this).find('.select_showbox').addClass('active');
			ul.show();
		}
		return

	});

	function createSelect(select_container, index) {
		//创建select容器，class为select_box，插入到select标签前
		var tag_select = $('<div class="select_box"><div class="select_showbox" style="cursor:pointer"></div><ul class="select_option"></ul></div>'); //div相当于select标签

		var ul_option = $(tag_select).find('ul');

		createOptions(index, ul_option); //创建option

		tag_select.insertBefore(select_container);

	}

	function createOptions(index, ul_list) {
		//获取被选中的元素并将其值赋值到显示框中
		var options = selects.eq(index).find('option'),
			selected_option = options.filter(':selected'),
			selected_index = selected_option.index(),
			showbox = ul_list.prev();
		showbox.text(selected_option.text());

		//为每个option建立个li并赋值
		for (var n = 0; n < options.length; n++) {
			var tag_option = $('<li id="' + options.eq(n).val() + '"></li>'), //li相当于option
				txt_option = options.eq(n).text();
			tag_option.text(txt_option).css('cursor', 'pointer').appendTo(ul_list);

			//为被选中的元素添加class为selected
			if (n == selected_index) {
				tag_option.attr('class', 'selected');
			}
		}
		li_click(ul_list, selects[index]);
	}

	function updateOptions() {
		var ul_lists = $('.select_option');

		for (var i = 0; i < selects.length; i++) {
			var ul_list = $(ul_lists).eq(i);

			ul_list.html('');

			//获取被选中的元素并将其值赋值到显示框中
			var options = selects.eq(i).find('option'),
				selected_option = options.filter(':selected'),
				selected_index = selected_option.index(),
				showbox = ul_list.prev();
			showbox.text(selected_option.text());

			//为每个option建立个li并赋值
			for (var n = 0; n < options.length; n++) {
				var tag_option = $('<li id="' + options.eq(n).val() + '"></li>'), //li相当于option
					txt_option = options.eq(n).text();
				tag_option.text(txt_option).css('cursor', 'pointer').appendTo(ul_list);

				//为被选中的元素添加class为selected
				if (n == selected_index) {
					tag_option.attr('class', 'selected');
				}
			}
			li_click(ul_list, selects[i]);

		}
	}

	function li_click(ul_option, select_container) {
		var li_option = ul_option.find('li');
		li_option.on('click', function(e) {
			e.stopPropagation();
			var value = $(this).text();

			$(select_container).val($(this).attr('id')).change();

			$(this).closest('.select_box').find('.select_showbox').removeClass('active');

			updateOptions();

			ul_option.hide();
		});

		li_option.hover(function() {
			$(this).addClass('hover').siblings().removeClass('hover');
		}, function() {
			li_option.removeClass('hover');
		});
	}

})(jQuery)