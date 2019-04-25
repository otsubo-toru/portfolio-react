


$(function(){
	var clothMap = [
		{ val:"FRL30", thumbPath:"/curtain/hsn/img/cloth/", thumb:"frl30.jpg", sheetW:"183cm", sheetL:"50m", cut:false, roll:true },
		{ val:"FRL50", thumbPath:"/curtain/hsn/img/cloth/", thumb:"frl50.jpg", sheetW:"183cm", sheetL:"30m", cut:false, roll:true },
		{ val:"SDC30", thumbPath:"/curtain/hsn/img/cloth/", thumb:"sdc30.jpg", sheetW:"183cm", sheetL:"50m", cut:false, roll:true },
		{ val:"SDC50", thumbPath:"/curtain/hsn/img/cloth/", thumb:"sdc50.jpg", sheetW:"137cm", sheetL:"20m", cut:false, roll:true },
		{ val:"350A", thumbPath:"/curtain/hsn/img/cloth/", thumb:"350a.jpg", sheetW:"205cm", sheetL:"50m��", cut:true, roll:true },
		{ val:"350T", thumbPath:"/curtain/hsn/img/cloth/", thumb:"350t.jpg", sheetW:"205cm", sheetL:"50m��", cut:true, roll:true },
		{ val:"350H", thumbPath:"/curtain/hsn/img/cloth/", thumb:"350h.jpg", sheetW:"205cm", sheetL:"50m��", cut:true, roll:true },
		{ val:"350��", thumbPath:"/curtain/hsn/img/cloth/", thumb:"350kan.jpg", sheetW:"205cm", sheetL:"50m��", cut:true, roll:true },
		{ val:"350B2", thumbPath:"/curtain/hsn/img/cloth/", thumb:"350b2.jpg", sheetW:"203cm", sheetL:"50m��", cut:true, roll:true },
		{ val:"3300FT", thumbPath:"/curtain/hsn/img/cloth/", thumb:"3300ft.jpg", sheetW:"203cm", sheetL:"50m��", cut:true, roll:true },
		{ val:"380", thumbPath:"/curtain/hsn/img/cloth/", thumb:"380.jpg", sheetW:"203cm", sheetL:"50m��", cut:true, roll:true },
		{ val:"1205TN", thumbPath:"/curtain/hsn/img/cloth/", thumb:"1205tn.jpg", sheetW:"205cm", sheetL:"30m��", cut:true, roll:true },
		{ val:"550A", thumbPath:"/curtain/hsn/img/cloth/", thumb:"550a.jpg", sheetW:"205cm", sheetL:"30m��", cut:true, roll:true },
		{ val:"550H", thumbPath:"/curtain/hsn/img/cloth/", thumb:"550h.jpg", sheetW:"205cm", sheetL:"30m��", cut:true, roll:true },
		{ val:"580T", thumbPath:"/curtain/hsn/img/cloth/", thumb:"580t.jpg", sheetW:"203cm", sheetL:"30m��", cut:true, roll:true },
		{ val:"1600S", thumbPath:"/curtain/hsn/img/cloth/", thumb:"1600s.jpg", sheetW:"204cm", sheetL:"30m��", cut:true, roll:true },
		{ val:"1600OR", thumbPath:"/curtain/hsn/img/cloth/", thumb:"1600or.jpg", sheetW:"204cm", sheetL:"30m��", cut:true, roll:true },
		{ val:"1000F", thumbPath:"/curtain/hsn/img/cloth/", thumb:"1000f.jpg", sheetW:"190cm", sheetL:"26m��", cut:true, roll:true },
		{
			val : "400SF",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			thumb : "400sf_l_ivory.jpg",
			sheetW : "188cm",
			sheetL : "50m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�O���[", thumb:"400sf_gray.jpg" },
				{ val:"���C�g�A�C�{���[", thumb:"400sf_l_ivory.jpg" }
			]
		},
		{
			val : "RG4200FD",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			thumb : "rg4200fd_snow_white.jpg",
			sheetW : "204cm",
			sheetL : "30m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�X�m�[�z���C�g", thumb:"rg4200fd_snow_white.jpg" },
				{ val:"���C�g�O���[", thumb:"rg4200fd_l_gray.jpg" },
				{ val:"���C�g�A�C�{���[", thumb:"rg4200fd_l_ivory.jpg" }
			]
		},
		{
			val : "RG3200F",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			thumb : "rg3200f_blue_crystal.jpg",
			sheetW : "110cm",
			sheetL : "50m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�u���[�N���X�^��", thumb:"rg3200f_blue_crystal.jpg" },
				{ val:"�N���A�u���C�g", thumb:"rg3200f_clear_bright.jpg" }
			]
		},
		{
			val : "PLCA",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			sheetW : "195cm",
			sheetL : "30m��",
			cut : true,
			roll : true,
			thumb : "plca.jpg"
		},
		{
			val : "V2000",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			sheetW : "196cm",
			sheetL : "50m��",
			cut : true,
			roll : true,
			thumb : "v2000.jpg"
		},
		{
			val : "���[�N���A�V�[�gW",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			sheetW : "102cm",
			sheetL : "30m��",
			cut : false,
			roll : true,
			thumb : "uclear_w.jpg"
		},
		{
			val : "�J���[�^�[�|����1��",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			thumb : "oneup01.jpg",
			sheetW : "188cm",
			sheetL : "50m��",
			cut : true,
			roll : true,
			color : [
				{ val:"M-101(�z���C�g)", thumb:"oneup_m101.jpg" },
				{ val:"M-102(�N���A�z���C�g)", thumb:"oneup_m102.jpg" },
				{ val:"M-103(�C�G���[)", thumb:"oneup_m103.jpg" },
				{ val:"M-104(�I�����W)", thumb:"oneup_m104.jpg" },
				{ val:"M-105(���b�h)", thumb:"oneup_m105.jpg" },
				{ val:"M-106(���C�g�O���[��)", thumb:"oneup_m106.jpg" },
				{ val:"M-107(���J�N�T)", thumb:"oneup_m107.jpg" },
				{ val:"M-108(�O���[��)", thumb:"oneup_m108.jpg" },
				{ val:"M-109(���C�g�u���[)", thumb:"oneup_m109.jpg" },
				{ val:"M-110(�u���[)", thumb:"oneup_m110.jpg" },
				{ val:"M-111(�l�C�r�[�u���[)", thumb:"oneup_m111.jpg" },
				{ val:"M-112(�O���C)", thumb:"oneup_m112.jpg" },
				{ val:"M-113(�u���b�N)", thumb:"oneup_m113.jpg" },
				{ val:"M-114(�A�C�{���[)", thumb:"oneup_m114.jpg" }
			]
		},
		{
			val : "�J���[�^�[�|����2��",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			thumb : "oneup02.jpg",
			sheetW : "188cm",
			sheetL : "50m��",
			cut : true,
			roll : true,
			color : [
				{ val:"OU-01(�z���C�g)", thumb:"oneup_ou01.jpg" },
				{ val:"OU-02(�N���A�z���C�g)", thumb:"oneup_ou02.jpg" },
				{ val:"OU-03(�A�C�{���[)", thumb:"oneup_ou03.jpg" },
				{ val:"OU-04(�C�G���[)", thumb:"oneup_ou04.jpg" },
				{ val:"OU-05(�I�����W)", thumb:"oneup_ou05.jpg" },
				{ val:"OU-06(���b�h)", thumb:"oneup_ou06.jpg" },
				{ val:"OU-07(���C�g�O���[��)", thumb:"oneup_ou07.jpg" },
				{ val:"OU-08(���J�N�T)", thumb:"oneup_ou08.jpg" },
				{ val:"OU-09(�O���[��)", thumb:"oneup_ou09.jpg" },
				{ val:"OU-10(���C�g�u���[)", thumb:"oneup_ou10.jpg" },
				{ val:"OU-11(�u���[)", thumb:"oneup_ou11.jpg" },
				{ val:"OU-12(�l�C�r�[�u���[)", thumb:"oneup_ou12.jpg" },
				{ val:"OU-13(���C�g�O���C)", thumb:"oneup_ou13.jpg" },
				{ val:"OU-14(�O���C)", thumb:"oneup_ou14.jpg" },
				{ val:"OU-15(�V���o�[)", thumb:"oneup_ou15.jpg" },
				{ val:"OU-16(�u���b�N)", thumb:"oneup_ou16.jpg" },
				{ val:"OU-17(�s���N)", thumb:"oneup_ou17.jpg" },
				{ val:"OU-18(�_���W�F�����I�����W)", thumb:"oneup_ou18.jpg" },
				{ val:"OU-19(�u���E��)", thumb:"oneup_ou19.jpg" }
			]
		},
		{
			val : "�E���g���}�b�N�X",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			thumb : "ultramax.jpg",
			sheetW : "103cm",
			sheetL : "50m��",
			cut : true,
			roll : true,
			color : [
				{ val:"U-01(���C�����u���[)", thumb:"ultramax_u01.jpg" },
				{ val:"U-02(���C�g�u���[)", thumb:"ultramax_u02.jpg" },
				{ val:"U-03(�A�N�A�u���[)", thumb:"ultramax_u03.jpg" },
				{ val:"U-04(�G�������h�O���[��)", thumb:"ultramax_u04.jpg" },
				{ val:"U-26(���T�r)", thumb:"ultramax_u26.jpg" },
				{ val:"U-06(�_�[�N�O���[��)", thumb:"ultramax_u06.jpg" },
				{ val:"U-07(�O���[��)", thumb:"ultramax_u07.jpg" },
				{ val:"U-08(�X�J�C�O���[��)", thumb:"ultramax_u08.jpg" },
				{ val:"U-09(�t�H���X�g�O���[��)", thumb:"ultramax_u09.jpg" },
				{ val:"U-10(���C�g�O���[��)", thumb:"ultramax_u10.jpg" },
				{ val:"U-11(�C�G���[)", thumb:"ultramax_u11.jpg" },
				{ val:"U-12(�I�����W)", thumb:"ultramax_u12.jpg" },
				{ val:"U-13(���b�h)", thumb:"ultramax_u13.jpg" },
				{ val:"U-28(�s�[�`)", thumb:"ultramax_u28.jpg" },
				{ val:"U-30(���C�����b�h)", thumb:"ultramax_u30.jpg" },
				{ val:"U-27(�u���E��)", thumb:"ultramax_u27.jpg" },
				{ val:"U-16(�x�[�W��)", thumb:"ultramax_u16.jpg" },
				{ val:"U-31(�N���[��)", thumb:"ultramax_u31.jpg" },
				{ val:"U-17(�A�C�{���[)", thumb:"ultramax_u17.jpg" },
				{ val:"U-18(�z���C�g)", thumb:"ultramax_u18.jpg" },
				{ val:"U-19(�O���[)", thumb:"ultramax_u19.jpg" },
				{ val:"U-20(�u���b�N)", thumb:"ultramax_u20.jpg" },
				{ val:"U-21(�V���o�[)", thumb:"ultramax_u21.jpg" },
				{ val:"U-22(�z���C�g�V���o�[)", thumb:"ultramax_u22.jpg" }
			]
		},
		{
			val : "�n���P�[��",
			thumbPath:"/curtain/hsn/tarpaulin/img/color/",
			thumb : "hurricane.jpg",
			sheetW : "103cm",
			sheetL : "50m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�z���C�g", thumb:"hurricane_white.jpg" },
				{ val:"���C�g�O���[", thumb:"hurricane_l_gray.jpg" },
				{ val:"���T�r", thumb:"hurricane_wasabi.jpg" },
				{ val:"���C�g�A�C�{���[", thumb:"hurricane_l_ivory.jpg" },
				{ val:"�O���[", thumb:"hurricane_gray.jpg" },
				{ val:"���X�O���[��", thumb:"hurricane_mos_green.jpg" },
				{ val:"�x�[�W��", thumb:"hurricane_beige.jpg" },
				{ val:"�V���o�[", thumb:"hurricane_silver.jpg" },
				{ val:"�G�������h", thumb:"hurricane_emerald.jpg" },
				{ val:"�A�C�{���[", thumb:"hurricane_ivory.jpg" },
				{ val:"�X�J�C�u���[", thumb:"hurricane_sky_blue.jpg" },
				{ val:"�C�G���[�O���[��", thumb:"hurricane_yellow_green.jpg" },
				{ val:"�C�G���[", thumb:"hurricane_yellow.jpg" },
				{ val:"�u���[", thumb:"hurricane_blue.jpg" },
				{ val:"���C�g�O���[��", thumb:"hurricane_l_green.jpg" },
				{ val:"�I�����W", thumb:"hurricane_orange.jpg" },
				{ val:"�l�C�r�[", thumb:"hurricane_navy.jpg" },
				{ val:"�O���[��", thumb:"hurricane_green.jpg" },
				{ val:"���b�h", thumb:"hurricane_red.jpg" },
				{ val:"�u���b�N", thumb:"hurricane_black.jpg" },
				{ val:"�_�[�N�O���[��", thumb:"hurricane_d_green.jpg" },
				{ val:"�u���e�B�b�V���O���[��", thumb:"hurricane_brit_green.jpg" }
			]
		},
		{
			val : "#1003",
			thumbPath : "/curtain/hsn/tarpo_mesh/img/color/",
			thumb : "1003_lg.jpg",
			sheetW : "189cm",
			sheetL : "52m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�z���C�g", thumb:"1003_wh.jpg" },
				{ val:"�O���[", thumb:"1003_gr.jpg" },
				{ val:"�X�J�C�u���[", thumb : "1003_bl.jpg" },
				{ val:"���C�g�O���[��", thumb:"1003_lg.jpg" },
				{ val:"�_�[�N�O���[��", thumb:"1003_dg.jpg" }
			]
		},
		{
			val : "#1004",
			thumbPath : "/curtain/hsn/tarpo_mesh/img/color/",
			thumb : "1004_dg.jpg",
			sheetW : "189cm",
			sheetL : "52m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�z���C�g", thumb:"1004_wh.jpg" },
				{ val:"�O���[", thumb:"1004_gr.jpg" },
				{ val:"�X�J�C�u���[", thumb:"1004_bl.jpg" },
				{ val:"���C�g�O���[��", thumb:"1004_lg.jpg" },
				{ val:"�_�[�N�O���[��", thumb:"1004_dg.jpg" },
				{ val:"�u���b�N", thumb:"1004_bk.jpg" }
			]
		},
		{
			val : "#1034",
			thumbPath : "/curtain/hsn/tarpo_mesh/img/color/",
			thumb : "1034_gr.jpg",
			sheetW : "189cm",
			sheetL : "52m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�z���C�g", thumb:"1034_wh.jpg" },
				{ val:"�O���[", thumb:"1034_gr.jpg" }
			]
		},
		{
			val : "#1005",
			thumbPath : "/curtain/hsn/tarpo_mesh/img/color/",
			thumb : "1005_dg.jpg",
			sheetW : "187cm",
			sheetL : "50m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�O���[", thumb:"1005_gr.jpg" },
				{ val:"�_�[�N�O���[��", thumb:"1005_dg.jpg" }
			]
		},
		{
			val : "#2014",
			thumbPath : "/curtain/hsn/tarpo_mesh/img/color/",
			thumb : "2014_wh.jpg",
			sheetW : "187cm",
			sheetL : "100m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�z���C�g", thumb:"2014_wh.jpg" },
				{ val:"�_�[�N�O���[��", thumb:"2014_dg.jpg" }
			]
		},
		{
			val : "#2039",
			thumbPath : "/curtain/hsn/tarpo_mesh/img/color/",
			thumb : "2039_bl.jpg",
			sheetW : "189cm",
			sheetL : "52m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�z���C�g", thumb:"2039_wh.jpg" },
				{ val:"�O���[", thumb:"2039_gr.jpg" },
				{ val:"�X�J�C�u���[", thumb:"2039_bl.jpg" },
				{ val:"���C�g�O���[��", thumb:"2039_lg.jpg" },
				{ val:"�u���b�N", thumb:"2039_bk.jpg" }
			]
		},
		{
			val : "#2054",
			thumbPath : "/curtain/hsn/tarpo_mesh/img/color/",
			thumb : "2054_bk.jpg",
			sheetW : "189cm",
			sheetL : "52m��",
			cut : true,
			roll : true,
			color : [
				{ val:"�z���C�g", thumb:"2054_wh.jpg" },
				{ val:"�O���[", thumb:"2054_gr.jpg" },
				{ val:"�X�J�C�u���[", thumb:"2054_bl.jpg" },
				{ val:"���C�g�O���[��", thumb:"2054_lg.jpg" },
				{ val:"�u���b�N", thumb:"2054_bk.jpg" }
			]
		}
	];
	var unitMap = [
		{ val:"����", unit:"��" },
		{ val:"�J�b�g", unit:"m" }
	];
	var maxValue = 50;
	
	//���ς���t�H�[���̓���ݒ�
	$(".mitumori-form.md-popup").sendMitumori({
		nameList : {
			"pd_vendor_code" : "���[�J�[��",
			"pd_name" : "���i��",
			"series" : "�i��",
			"color" : "�J���[",
			"unit" : "�P��",
			"pd_color" : "�i��",
			"pd_value" : "����"
		}
	}).each(function() {
		var self = this;
		
		$("[name=color]", self).on("change", function() {
			var series = $("[name=series]", self).val();
			var cloth = selectMap(series,clothMap);
			var color = selectMap($(this).val(),cloth.color);
			var val = cloth.val + (color.val ? " "+color.val : "");
			$("[name=pd_color]", self).val(val);
			if(color.val) {
				fillColorImg(color.val, cloth.thumbPath+color.thumb);
			}
		});
			
		$("input:radio[name=unit]", self).on("change", function(evt) {
			var	val = $(evt.target).val();
			var series = $("[name=series]", self).val();
			var cloth = selectMap(series,clothMap);
			var map = selectMap(val,unitMap);
			var pdColor = $("[name=pd_color]", self).val();
			// �u���i���v���u�������i�����̔��j�v�܂��́u�������i�J�b�g�̔��j�v�ɂ���
			$("[name=pd_name]", self).val($("[name=pd_name]", self)[0].defaultValue+"�i"+val+"�̔��j");
			// �u���ʁv�ɃV�[�g�̋K�i��\��
			$(".input-value-sub",self).html(cloth.sheetW+"&times;"+((val=="�J�b�g")?"&nbsp;":cloth.sheetL+"�F"));
			// �J�b�g�̔��Ȃ�A�u���ʁv���u�K�i����-1�v�܂łɂ���
			$("select[name=pd_value]",self).fillSelectOptions({ min:1, max:(val=="�J�b�g")?parseInt(cloth.sheetL,10)-1:maxValue });
			//�u���ʁv�̒P�ʂ�؂�ւ�
			$("[name=pd_unit]",self).val(map.unit)
				.parents(".input-item").eq(0).find(".input-unit").text(map.unit);
		});
		
		//�u���ʁv���Z�b�g
		$("select[name=pd_value]",self).fillSelectOptions({ min:1, max:maxValue });
		
		//�u�I�v�V�������v���ɒl���Z�b�g
		$("input:radio[name=unit], select[name=pd_value], textarea[name=other]",self).on("change", function() {
			var txt = "";
			var series = $("[name=series]", self).val();
			var cloth = selectMap(series,clothMap);
			if($("input:radio[name=unit]:checked", self).val()=="����") {
				txt = "�����K�i�F"+cloth.sheetW+"�~"+cloth.sheetL;
			} else if($("input:radio[name=unit]:checked", self).val()=="�J�b�g")  {
				txt = "�V�[�g�T�C�Y�F"+cloth.sheetW+"�~"+$("[name=pd_value]",self).val()+"m";
			}
			if($("textarea[name=other]",self).val()!="") {
				if(txt!="") { txt+="\n\n�y���l�z\n"; }
				txt += $("textarea[name=other]",self).val();
			}
			$("textarea[name=pd_other]",self).val(txt);
		});
		
		//���ς���t�H�[���̃|�b�v�A�b�v���̓���ݒ�
		var popup = new MF_Popup();
		popup.form = $(this);
		popup.triggerArea = $(".mitumori-form-trigger");
		popup.initForm();
		popup.setTriggerArea();
		$(popup.triggerArea).each(function() {
			//�u���������ς���v�{�^�������������A
			// ���ς���t�H�[�����|�b�v�A�b�v�\��
			$(".submit", this).on("click", function() {
				// ���ς���t�H�[�������Z�b�g
				$(popup.form).resetMitumoriForm()
					.find(".estimate-area.md-mitumori-form").scrollTop(0);
				$(".input-value-sub",self).html("");
				//�t�H�[������؂�ւ�
				var val = $(this).parents(".input-item").eq(0).find("input[name=name]").val();
				var cloth = selectMap(val,clothMap);
				$(".input-series", popup.form).text(cloth.val);
				$("[name=pd_color], [name=series]", popup.form).val(cloth.val);
				fillColorImg(cloth.val, cloth.thumbPath+cloth.thumb);
				// �J���[�o���G�[�V�����������...
				if(!cloth.color) {
					$("[name=color]").removeClass("validate")
						.parents(".el-input-block").hide();
				} else {
					$("[name=color]").addClass("validate").fillSelectOptions({ opList:cloth.color })
						.parents(".el-input-block").show();
				}
				// �����E�J�b�g�̔��̗L���ɂ�镪��
				if(!cloth.cut) {
					$("[name=unit]",self).filter("[value='����']").trigger("click")
						.end().parent(".input-label").hide();
					$(".input-name",self).text($("[name=pd_name]",self)[0].defaultValue+"(�����̔�)");
				} else if(!cloth.roll) {
					$("[name=unit]",self).filter("[value='�J�b�g']").trigger("click")
						.end().parent(".input-label").hide();
					$(".input-name",self).text($("[name=pd_name]",self)[0].defaultValue+"(�J�b�g�̔�)");
				} else {
					$("[name=unit]",self).parent(".input-label").show();
					$(".input-name",self).text($("[name=pd_name]",self)[0].defaultValue);
				}
				// �t�H�[����\��
				popup.toggleForm();
				return false;
			});
		});
		$(this).on("sendForm", function() {
			popup.toggleForm();
		});
		
		/*�g�p�֐�
		-----------------------------------*/
		function selectMap(val,map) {
			var obj = "";
			$(map).each(function() {
				if(this.val==val) { obj=this; }
			});
			return obj;
		};
		function fillColorImg(val,thumb) {
			var imgElem = $("[name=pd_color]",self).parents(".input-item").eq(0).find(".input-image");
			$(imgElem).html("").append(
				$("<img class='mb05' width='100'/>").attr({
					"src" : thumb,
					"alt" : val
				})
			);
		};
	});
});



