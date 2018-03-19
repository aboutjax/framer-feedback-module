require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"feedback":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Events.Dismiss = "DismissFeedback";

exports.Feedback = (function(superClass) {
  extend(Feedback, superClass);

  function Feedback(options) {
    var counter, dismiss, dismissFeedback, svg, svgProps, textPadding;
    if (options == null) {
      options = {};
    }
    svgProps = {
      color: options.color || 'white'
    };
    svg = "		<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n  <path fill=\"" + svgProps.color + "\" d=\"M13.41525,12.0005 L17.70725,7.7075 C18.09825,7.3175 18.09825,6.6845 17.70725,6.2935 C17.31625,5.9025 16.68425,5.9025 16.29325,6.2935 L12.00125,10.5865 L7.70725,6.2925 C7.31625,5.9025 6.68425,5.9025 6.29325,6.2925 C5.90225,6.6835 5.90225,7.3155 6.29325,7.7065 L10.58725,12.0005 L6.29325,16.2945 C5.90325,16.6845 5.90225,17.3185 6.29325,17.7085 C6.68425,18.0995 7.31725,18.0985 7.70725,17.7085 L12.00125,13.4145 L16.29425,17.7065 C16.68425,18.0975 17.31725,18.0975 17.70825,17.7065 C18.09925,17.3165 18.09825,16.6835 17.70825,16.2935 L13.41525,12.0005 Z\"/>\n</svg>\n\n";
    if (options.autoDismiss) {
      textPadding = {
        top: 16,
        right: 16,
        bottom: 16,
        left: 16
      };
    } else {
      textPadding = {
        top: 16,
        right: 48,
        bottom: 16,
        left: 16
      };
    }
    Feedback.__super__.constructor.call(this, _.defaults(options, {
      fontSize: 16,
      color: 'white',
      text: options.text,
      backgroundColor: '#333',
      borderRadius: 3,
      lineHeight: 1.4,
      x: Align.center,
      y: Align.bottom(-20),
      clip: true,
      padding: textPadding,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1
    }));
    this.name = 'feedback';
    this.states.show = {
      opacity: 1,
      y: options.y || Align.bottom(-20)
    };
    this.states.hide = {
      opacity: 0,
      y: options.y - 30 || Align.bottom(0)
    };
    this.states.animationOptions = {
      time: 0.25
    };
    this.stateSwitch('hide');
    this.states["switch"]('show');
    dismissFeedback = (function(_this) {
      return function() {
        var feedback;
        feedback = Layer.select('feedback');
        feedback.states["switch"]('hide');
        Utils.delay(0.5, function() {
          return feedback.destroy();
        });
        return _this.emit(Events.Dismiss);
      };
    })(this);
    if (options.autoDismiss) {
      counter = new Layer({
        parent: this,
        borderRadius: 10,
        y: Align.top(0),
        height: options.autoDismiss.counterHeight || 3,
        backgroundColor: options.autoDismiss.color || 'white',
        width: this.width
      });
      counter.animate({
        width: 0,
        options: {
          time: options.autoDismiss.duration || 3,
          curve: 'linear'
        }
      });
      counter.onAnimationEnd(function() {
        return dismissFeedback();
      });
    } else {
      dismiss = new Layer({
        parent: this,
        backgroundColor: null,
        borderRadius: 50,
        y: Align.top(14),
        x: Align.right(-12),
        html: svg,
        width: 24,
        height: 24,
        opacity: 0.5,
        style: {
          'cursor': 'pointer'
        }
      });
      dismiss.onMouseOver(function() {
        return this.opacity = 1;
      });
      dismiss.onMouseOut(function() {
        return this.opacity = 0.5;
      });
      dismiss.onClick(function() {
        return dismissFeedback();
      });
    }
  }

  Feedback.prototype.onDismiss = function(cb) {
    return this.on(Events.Dismiss, cb);
  };

  return Feedback;

})(TextLayer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2phY2t5bGVlL1Byb2plY3RzL2NvZGUvZnJhbWVyLWZlZWRiYWNrLW1vZHVsZS9leGFtcGxlcy9mZWVkYmFjay5mcmFtZXIvbW9kdWxlcy9mZWVkYmFjay5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIkV2ZW50cy5EaXNtaXNzID0gXCJEaXNtaXNzRmVlZGJhY2tcIlxuXG4jIEZlZWRiYWNrIENsYXNzXG5jbGFzcyBleHBvcnRzLkZlZWRiYWNrIGV4dGVuZHMgVGV4dExheWVyXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblxuICAgICMgRGlzbWlzcyBpY29uIHN2ZyBzZXQgdXBcbiAgICBzdmdQcm9wcyA9XG4gICAgICBjb2xvcjogb3B0aW9ucy5jb2xvciB8fCAnd2hpdGUnXG5cbiAgICBzdmcgPVxuICAgIFwiXCJcIlxuICAgIFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aCBmaWxsPVwiI3tzdmdQcm9wcy5jb2xvcn1cIiBkPVwiTTEzLjQxNTI1LDEyLjAwMDUgTDE3LjcwNzI1LDcuNzA3NSBDMTguMDk4MjUsNy4zMTc1IDE4LjA5ODI1LDYuNjg0NSAxNy43MDcyNSw2LjI5MzUgQzE3LjMxNjI1LDUuOTAyNSAxNi42ODQyNSw1LjkwMjUgMTYuMjkzMjUsNi4yOTM1IEwxMi4wMDEyNSwxMC41ODY1IEw3LjcwNzI1LDYuMjkyNSBDNy4zMTYyNSw1LjkwMjUgNi42ODQyNSw1LjkwMjUgNi4yOTMyNSw2LjI5MjUgQzUuOTAyMjUsNi42ODM1IDUuOTAyMjUsNy4zMTU1IDYuMjkzMjUsNy43MDY1IEwxMC41ODcyNSwxMi4wMDA1IEw2LjI5MzI1LDE2LjI5NDUgQzUuOTAzMjUsMTYuNjg0NSA1LjkwMjI1LDE3LjMxODUgNi4yOTMyNSwxNy43MDg1IEM2LjY4NDI1LDE4LjA5OTUgNy4zMTcyNSwxOC4wOTg1IDcuNzA3MjUsMTcuNzA4NSBMMTIuMDAxMjUsMTMuNDE0NSBMMTYuMjk0MjUsMTcuNzA2NSBDMTYuNjg0MjUsMTguMDk3NSAxNy4zMTcyNSwxOC4wOTc1IDE3LjcwODI1LDE3LjcwNjUgQzE4LjA5OTI1LDE3LjMxNjUgMTguMDk4MjUsMTYuNjgzNSAxNy43MDgyNSwxNi4yOTM1IEwxMy40MTUyNSwxMi4wMDA1IFpcIi8+XG4gICAgPC9zdmc+XG5cblxuICAgIFx0XHRcIlwiXCJcblxuICAgICMgdGV4dCBwYWRkaW5nIHNldHRpbmdzIGZvciBkaWZmZXJlbnQgdHlwZXMgb2YgZmVlZGJhY2tcbiAgICBpZiBvcHRpb25zLmF1dG9EaXNtaXNzXG4gICAgICB0ZXh0UGFkZGluZyA9XG4gICAgICAgIHRvcDogMTYsXG4gICAgICAgIHJpZ2h0OiAxNixcbiAgICAgICAgYm90dG9tOiAxNixcbiAgICAgICAgbGVmdDogMTZcbiAgICBlbHNlXG4gICAgICB0ZXh0UGFkZGluZyA9XG4gICAgICAgIHRvcDogMTYsXG4gICAgICAgIHJpZ2h0OiA0OCxcbiAgICAgICAgYm90dG9tOiAxNixcbiAgICAgICAgbGVmdDogMTZcblxuICAgICMgc29tZSBnZW5lcmljIGxvb2tpbmcgZGVmYXVsdHMgZm9yIEZlZWRiYWNrIGNsYXNzXG4gICAgc3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuICAgICAgZm9udFNpemU6IDE2XG4gICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgdGV4dDogb3B0aW9ucy50ZXh0XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJ1xuICAgICAgYm9yZGVyUmFkaXVzOiAzXG4gICAgICBsaW5lSGVpZ2h0OiAxLjRcbiAgICAgIHg6IEFsaWduLmNlbnRlclxuICAgICAgeTogQWxpZ24uYm90dG9tKC0yMClcbiAgICAgIGNsaXA6IHRydWVcbiAgICAgIHBhZGRpbmc6IHRleHRQYWRkaW5nXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yKSdcbiAgICAgIGJvcmRlcldpZHRoOiAxXG5cbiAgICBAbmFtZSA9ICdmZWVkYmFjaydcbiAgICBAc3RhdGVzLnNob3cgPVxuICAgICAgb3BhY2l0eTogMVxuICAgICAgeTogb3B0aW9ucy55IHx8IEFsaWduLmJvdHRvbSgtMjApXG5cbiAgICBAc3RhdGVzLmhpZGUgPVxuICAgICAgb3BhY2l0eTogMFxuICAgICAgeTogb3B0aW9ucy55IC0gMzAgfHwgQWxpZ24uYm90dG9tKDApXG5cbiAgICBAc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuICAgICAgdGltZTogMC4yNVxuXG4gICAgQHN0YXRlU3dpdGNoKCdoaWRlJylcbiAgICBAc3RhdGVzLnN3aXRjaCgnc2hvdycpXG5cbiAgICAjIGhhbmRsZXIgZm9yIGRpbWlzc2luZyBmZWVkYmFjay5cbiAgICBkaXNtaXNzRmVlZGJhY2sgPSAoKSA9PlxuICAgICAgZmVlZGJhY2sgPSBMYXllci5zZWxlY3QoJ2ZlZWRiYWNrJylcbiAgICAgIGZlZWRiYWNrLnN0YXRlcy5zd2l0Y2goJ2hpZGUnKVxuICAgICAgVXRpbHMuZGVsYXkgMC41LCAtPlxuICAgICAgICBmZWVkYmFjay5kZXN0cm95KClcblxuICAgICAgQGVtaXQoRXZlbnRzLkRpc21pc3MpXG5cblxuICAgICMgV2hlbiAnYXV0b0Rpc21pc3MnIG9iamVjdCBpcyB1c2VkIGFzIGFuIG9wdGlvbiwgZ2VuZXJhdGUgaG9yaXpvbnRhbCBiYXIgdGhhdCBjb3VudHMgZG93biB0byB0aGUgdXNlci1zcGVjaWZpZWQgZHVyYXRpb24uXG4gICAgaWYgb3B0aW9ucy5hdXRvRGlzbWlzc1xuICAgICAgY291bnRlciA9IG5ldyBMYXllclxuICAgICAgICBwYXJlbnQ6IEBcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMFxuICAgICAgICB5OiBBbGlnbi50b3AoMClcbiAgICAgICAgaGVpZ2h0OiBvcHRpb25zLmF1dG9EaXNtaXNzLmNvdW50ZXJIZWlnaHQgfHwgM1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbnMuYXV0b0Rpc21pc3MuY29sb3IgfHwgJ3doaXRlJ1xuICAgICAgICB3aWR0aDogQHdpZHRoXG5cbiAgICAgIGNvdW50ZXIuYW5pbWF0ZVxuICAgICAgICB3aWR0aDogMFxuICAgICAgICBvcHRpb25zOlxuICAgICAgICAgIHRpbWU6IG9wdGlvbnMuYXV0b0Rpc21pc3MuZHVyYXRpb24gfHwgM1xuICAgICAgICAgIGN1cnZlOiAnbGluZWFyJ1xuXG4gICAgICBjb3VudGVyLm9uQW5pbWF0aW9uRW5kIC0+XG4gICAgICAgIGRpc21pc3NGZWVkYmFjaygpXG5cbiAgICAjIE90aGVyd2lzZSwgZGVmYXVsdCB0byB1c2luZyBhIGRpbWlzc2FibGUgRmVlZGJhY2sgJiBnZW5lcmF0ZSBkaW1pc3MgaWNvbiBidXR0b24uXG4gICAgZWxzZVxuICAgICAgZGlzbWlzcyA9IG5ldyBMYXllclxuICAgICAgICBwYXJlbnQ6IEBcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsXG4gICAgICAgIGJvcmRlclJhZGl1czogNTBcbiAgICAgICAgeTogQWxpZ24udG9wKDE0KVxuICAgICAgICB4OiBBbGlnbi5yaWdodCgtMTIpXG4gICAgICAgIGh0bWw6IHN2Z1xuICAgICAgICB3aWR0aDogMjRcbiAgICAgICAgaGVpZ2h0OiAyNFxuICAgICAgICBvcGFjaXR5OiAwLjVcbiAgICAgICAgc3R5bGU6ICdjdXJzb3InOidwb2ludGVyJ1xuXG4gICAgICBkaXNtaXNzLm9uTW91c2VPdmVyIC0+XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDFcblxuICAgICAgZGlzbWlzcy5vbk1vdXNlT3V0IC0+XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDAuNVxuXG4gICAgICBkaXNtaXNzLm9uQ2xpY2sgLT5cbiAgICAgICAgZGlzbWlzc0ZlZWRiYWNrKClcblxuICBvbkRpc21pc3M6IChjYikgLT4gQG9uKEV2ZW50cy5EaXNtaXNzLCBjYilcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQ0FBO0FEQUEsSUFBQTs7O0FBQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUI7O0FBR1gsT0FBTyxDQUFDOzs7RUFDQyxrQkFBQyxPQUFEO0FBR1gsUUFBQTs7TUFIWSxVQUFROztJQUdwQixRQUFBLEdBQ0U7TUFBQSxLQUFBLEVBQU8sT0FBTyxDQUFDLEtBQVIsSUFBaUIsT0FBeEI7O0lBRUYsR0FBQSxHQUNBLGdIQUFBLEdBRWdCLFFBQVEsQ0FBQyxLQUZ6QixHQUUrQjtJQU8vQixJQUFHLE9BQU8sQ0FBQyxXQUFYO01BQ0UsV0FBQSxHQUNFO1FBQUEsR0FBQSxFQUFLLEVBQUw7UUFDQSxLQUFBLEVBQU8sRUFEUDtRQUVBLE1BQUEsRUFBUSxFQUZSO1FBR0EsSUFBQSxFQUFNLEVBSE47UUFGSjtLQUFBLE1BQUE7TUFPRSxXQUFBLEdBQ0U7UUFBQSxHQUFBLEVBQUssRUFBTDtRQUNBLEtBQUEsRUFBTyxF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
