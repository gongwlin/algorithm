
var formatFlags = {
    D: function(dateObj) {
      return dateObj.getDate();
    },
    DD: function(dateObj) {
      return pad(dateObj.getDate());
    },
    day: function(dateObj) {
      const date = dateObj.getDay();
      const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      return arr[date];
    },
    M: function(dateObj) {
      return dateObj.getMonth() + 1;
    },
    MM: function(dateObj) {
        return pad(dateObj.getMonth() + 1);
      },
    YY: function(dateObj) {
      return pad(String(dateObj.getFullYear()), 4).substr(2);
    },
    YYYY: function(dateObj) {
      return pad(dateObj.getFullYear(), 4);
    },
    h: function(dateObj) {
      return dateObj.getHours();
    },
    hh: function(dateObj) {
      return pad(dateObj.getHours());
    },
    m: function(dateObj) {
      return dateObj.getMinutes();
    },
    mm: function(dateObj) {
      return pad(dateObj.getMinutes());
    },
    s: function(dateObj) {
      return dateObj.getSeconds();
    },
    ss: function(dateObj) {
      return pad(dateObj.getSeconds());
    },
    sss: function(dateObj) {
      return pad(dateObj.getMilliseconds(), 3);
    }
  };

  function pad(val, len = 2) {
    val = String(val);
    while (val.length < len) {
      val = '0' + val;
    }
    return val;
  }

  format = function (dateObj, mask) {
    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in format');
    }
    var token = /YYYY|M{1,2}|D{1,2}|h{1,2}|m{1,2}|s{1,2}|s{1,3}|day/g;
    var literal = /\[([^]*?)\]/gm;
    var literals = [];
    // Make literals inactive by replacing them with ??
    mask = mask.replace(literal, function($0, $1) {
      literals.push($1);
      return '@@@';
    });
    // Apply formatting rules
    mask = mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj) : $0.slice(1, $0.length - 1);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/@@@/g, function() {
      return literals.shift();
    });
  };

  const date = new Date();
  console.log(date, format(date, 'YYYY年MM月DD日 day'))
