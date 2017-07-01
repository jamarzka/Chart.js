'use strict';

module.exports = function(Chart) {
	var helpers = Chart.helpers;

	return {
		id: 'tickAutoSkip',

		beforeDraw: function(chart, options) {
			helpers.each(chart.scales, function(scale) {
				var scaleOptions = scale.options;

				if (scaleOptions.display && scale.isHorizontal()) {
					scale.tickSkip = [1, 3, 5, 7];
				}
			});
		},
	};
};

	/*

	Chart.defaults.scale.autoskip = {
		enabled: true,
		padding: 0,
		keepLast: true,
	};

	var defaults = Chart.defaults;

	function calcSkipRatio() {
		var labelRotationRadians = helpers.toRadians(me.labelRotation);
		var cosRotation = Math.cos(labelRotationRadians);
		var longestRotatedLabel = me.longestLabelWidth * cosRotation;

		var itemsToDraw = [];

		if (isHorizontal) {
			skipRatio = false;

			if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
				skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
			}

			// if they defined a max number of optionTicks,
			// increase skipRatio until that number is met
			if (maxTicks && me.ticks.length > maxTicks) {
				while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
					if (!skipRatio) {
						skipRatio = 1;
					}
					skipRatio += 1;
				}
			}

			if (!useAutoskipper) {
				skipRatio = false;
			}
		}
	}*/

	/*
	function skip(el, index, count) {
		var isLastTick = me.ticks.length === index + 1;

		// Since we always show the last tick,we need may need to hide the last shown one before
		var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio >= me.ticks.length);
		if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
			return;
		}
	}
	*/


			// console.log(chart);

			// how to get the scale instance?

			/*
			var isHorizontal = me.isHorizontal();
			var isRotated = me.labelRotation !== 0;

			var labelRotationRadians = helpers.toRadians(me.labelRotation);

			var skipRatio;
			var useAutoskipper = optionTicks.autoSkip;

			// figure out the maximum number of gridlines to show
			var maxTicks;
			if (optionTicks.maxTicksLimit) {
				maxTicks = optionTicks.maxTicksLimit;
			}

			var cosRotation = Math.cos(labelRotationRadians);
			var longestRotatedLabel = me.longestLabelWidth * cosRotation;

			if (isHorizontal) {
				skipRatio = false;

				if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
					skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
				}

				// if they defined a max number of optionTicks,
				// increase skipRatio until that number is met
				if (maxTicks && me.ticks.length > maxTicks) {
					while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
						if (!skipRatio) {
							skipRatio = 1;
						}
						skipRatio += 1;
					}
				}

				if (!useAutoskipper) {
					skipRatio = false;
				}
			}
			*/
