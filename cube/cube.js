$(function(){

var CUBE_MOVEMENT = {
    'xrc' : {   // Xaxis-Right-Clockwise 沿着X轴，右边部分，顺时针转动
        'ftr': 'utr',
        'fbr': 'ubr',
        'utr': 'bbl',
        'ubr': 'btl',

        'btl': 'dbr',
        'bbl': 'dtr',
        'dtr': 'ftr',
        'dbr': 'fbr',

        'rtl': 'rtr',
        'rbl': 'rtl',
        'rtr': 'rbr',
        'rbr': 'rbl'
    },
    'xra' : {   // Xaxis-Right-AntiClockwise 沿着X轴，右边部分，逆时针转动
        'utr': 'ftr',
        'ubr': 'fbr',
        'bbl': 'utr',
        'btl': 'ubr',
        'dbr': 'btl',
        'dtr': 'bbl',
        'ftr': 'dtr',
        'fbr': 'dbr',
        'rtr': 'rtl',
        'rtl': 'rbl',
        'rbr': 'rtr',
        'rbl': 'rbr'
    },
    'xlc' : {
        'ftl': 'utl',
        'fbl': 'ubl',
        'utl': 'bbr',
        'ubl': 'btr',

        'btr': 'dbl',
        'bbr': 'dtl',
        'dtl': 'ftl',
        'dbl': 'fbl',

        'ltl': 'lbl',
        'lbl': 'lbr',
        'ltr': 'ltl',
        'lbr': 'ltr'
    },
    'xla' : {
        'utl': 'ftl',
        'ubl': 'fbl',
        'bbr': 'utl',
        'btr': 'ubl',
        'dbl': 'btr',
        'dtl': 'bbr',
        'ftl': 'dtl',
        'fbl': 'dbl',
        'ltr': 'ltl',
        'ltl': 'lbl',
        'lbr': 'ltr',
        'lbl': 'lbr'
    },
    'yuc' : {
        'ftl' : 'rtl',
        'ftr' : 'rtr',
        'rtl' : 'btl',
        'rtr' : 'btr',
        'btl' : 'ltl',
        'btr' : 'ltr',
        'ltl' : 'ftl',
        'ltr' : 'ftr',
        'utl' : 'ubl',
        'ubl' : 'ubr',
        'utr' : 'utl',
        'ubr' : 'utr'
    },
    'yua' : {
        'rtl' : 'ftl',
        'rtr' : 'ftr',
        'btl' : 'rtl',
        'btr' : 'rtr',
        'ltl' : 'btl',
        'ltr' : 'btr',
        'ftl' : 'ltl',
        'ftr' : 'ltr',
        'ubl' : 'utl',
        'ubr' : 'ubl',
        'utl' : 'utr',
        'utr' : 'ubr'
    },
    'ydc' : {
        'fbl' : 'rbl',
        'fbr' : 'rbr',
        'rbl' : 'bbl',
        'rbr' : 'bbr',
        'bbl' : 'lbl',
        'bbr' : 'lbr',
        'lbl' : 'fbl',
        'lbr' : 'fbr',
        'dtl' : 'dbl',
        'dbl' : 'dbr',
        'dtr' : 'dtl',
        'dbr' : 'dtr'
    },
    'yda' : {
        'rbl' : 'fbl',
        'rbr' : 'fbr',
        'bbl' : 'rbl',
        'bbr' : 'rbr',
        'lbl' : 'bbl',
        'lbr' : 'bbr',
        'fbl' : 'lbl',
        'fbr' : 'lbr',
        'dbl' : 'dtl',
        'dbr' : 'dbl',
        'dtl' : 'dtr',
        'dtr' : 'dbr'
    },
    'zfc' : {
        'ftl': 'ftr',
        'fbl': 'ftl',
        'ftr': 'fbr',
        'fbr': 'fbl',
        'ubl': 'rtl',
        'ubr': 'rbl',
        'rtl': 'dtr',
        'rbl': 'dtl',
        'dtl': 'ltr',
        'dtr': 'lbr',
        'ltr': 'ubr',
        'lbr': 'ubl'
    },
    'zfa' : {
        'ftr': 'ftl',
        'ftl': 'fbl',
        'fbr': 'ftr',
        'fbl': 'fbr',
        'rtl': 'ubl',
        'rbl': 'ubr',
        'dtr': 'rtl',
        'dtl': 'rbl',
        'ltr': 'dtl',
        'lbr': 'dtr',
        'ubr': 'ltr',
        'ubl': 'lbr'
    },
    'zbc' : {
        'btr': 'btl',
        'btl': 'bbl',
        'bbr': 'btr',
        'bbl': 'bbr',
        'lbl': 'utl',
        'ltl': 'utr',
        'dbl': 'ltl',
        'dbr': 'lbl',
        'rbr': 'dbl',
        'rtr': 'dbr',
        'utr': 'rbr',
        'utl': 'rtr'
    },
    'zba' : {
        'btl': 'btr',
        'bbl': 'btl',
        'btr': 'bbr',
        'bbr': 'bbl',
        'utl': 'lbl',
        'utr': 'ltl',
        'ltl': 'dbl',
        'lbl': 'dbr',
        'dbl': 'rbr',
        'dbr': 'rtr',
        'rbr': 'utr',
        'rtr': 'utl'
    }
};
var FACE_COLOR = {
};
var TILE_FACE = {
    utl : 'xl yu zb',
    ubl : 'xl yu zf',
    utr : 'xr yu zb',
    ubr : 'xr yu zf',
    dtl : 'xl yd zf',
    dbl : 'xl yd zb',
    dtr : 'xr yd zf',
    dbr : 'xr yd zb',
    ltl : 'xl yu zb',
    lbl : 'xl yd zb',
    ltr : 'xl yu zf',
    lbr : 'xl yd zf',
    rtl : 'xr yu zf',
    rbl : 'xr yd zf',
    rtr : 'xr yu zb',
    rbr : 'xr yd zb',
    ftl : 'xl yu zf',
    fbl : 'xl yd zf',
    ftr : 'xr yu zf',
    fbr : 'xr yd zf',
    btl : 'xr yu zb',
    bbl : 'xr yd zb',
    btr : 'xl yu zb',
    bbr : 'xl yd zb'
}

function MiniCube(config) {
    this._container = $('#container' || config.container);
    this._miniCube = $('#miniCube' || config.cube);
    this._controls = $('#controls' || config.controls);
    this._plane = $('<div id="plane" class="plane"></div>');
    this._moving = false;
    this._init();
}
MiniCube.prototype = {
    _movement : '',
    _init : function () {
        this._setInitialPositionAndColor();
        this._plane.appendTo(this._miniCube);
        this._bind();
    },
    _bind : function () {
        var that = this;
        this._plane.on('transitionend', this._endTransiton.bind(this));
        this._controls.children('button').each(function(i, e){
            $(e).on('click', function(){
                var move = $(e).attr('class');
                that._doMovement(move);
                that._moving = true;
            });
        });
    },
    _setInitialPositionAndColor : function () {
    },
    _endTransiton : function () {
        this._plane.removeClass('rotate-' + this._movement);
        this._moveTilePosition(this._movement);
        this._moveOutOfPlane();
        this._moving = false;
    },
    _moveIntoPlane : function (tiles) {
        tiles.appendTo(this._plane);
    },
    _moveOutOfPlane : function () {
        var tiles = this._plane.children();
        tiles.appendTo(this._miniCube);
    },
    _doMovement : function (move) {
        if (this._moving) {
            return false;
        }
        this._movement = move;
        var tiles = this._miniCube.find('.' + move.substring(0,2));
        this._moveIntoPlane(tiles);
        this._plane.addClass('rotate-' + move);
    },
    _moveTilePosition : function (movement) {
        var positionObject = CUBE_MOVEMENT[movement], position, temp, source;
        this._plane.children().each(function(i, e){
            position = $(e).attr('class').split(' ')[2];

            source = $(e).attr('class').substr($(e).attr('class').length - 8);
            $(e).removeClass(source).addClass(TILE_FACE[positionObject[position]]);
            e.className = e.className.replace(position, positionObject[position]);
        });
    }
}

var cube = new MiniCube();
});