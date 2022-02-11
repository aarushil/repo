$(function(){
	FlipClock.Lang.Custom = { days:'أيام', hours:'ساعات', minutes:'الدقائق', seconds:'ثواني' };
	var opts = {
		clockFace: 'DailyCounter',
		countdown: true,
		language: 'Custom'
	};  
	var countdown = 1646159400 - ((new Date().getTime())/1000); // from: 03/02/2022 12:00 am +0530
	countdown = Math.max(1, countdown);
	$('.clock-builder-output').FlipClock(countdown, opts);
});