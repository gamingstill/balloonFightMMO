var PIXI = require('pixi.js');
var pixidisplay = require('pixi-display');
var TextureCache = PIXI.utils.TextureCache;
var App = PIXI.Application;
var Texture = PIXI.Texture;
var Text = PIXI.Text;
var BaseTexture = PIXI.BaseTexture;
var Container = PIXI.Container;
var Rectangle = PIXI.Rectangle;
var autoDetectRenderer = PIXI.autoDetectRenderer;
var loader = PIXI.loader;
var Sprite = PIXI.Sprite;
var TweenEngine = null;
var Resources = PIXI.loader.resources;
var Graphics = PIXI.Graphics;
var Matrix = PIXI.Matrix;
var Tex_fromImage = PIXI.Texture.fromImage;
var DisplayList = PIXI.DisplayList;
var Layer1 =  new PIXI.DisplayGroup(10, false),
    Layer2 = new PIXI.DisplayGroup(9, false),
    Layer3 = new PIXI.DisplayGroup(8, false),
    Layer4 = new PIXI.DisplayGroup(7, false),
    GLayer1 = new PIXI.DisplayGroup(6, false),
    GLayer2 = new PIXI.DisplayGroup(5, false);

module.exports.App = App;
module.exports.DisplayList = DisplayList;
module.exports.Matrix = Matrix;
module.exports.TextureCache = TextureCache;
module.exports.Layer1 = Layer1;
module.exports.Layer2 = Layer2;
module.exports.Layer3 = Layer3;
module.exports.Layer4 = Layer4;
module.exports.GLayer1 = GLayer1;
module.exports.GLayer2 = GLayer2;
module.exports.Texture = Texture;
module.exports.BaseTexture = BaseTexture;
module.exports.Container = Container;
module.exports.Rectangle = Rectangle;
module.exports.autoDetectRenderer = autoDetectRenderer;
module.exports.loader = loader;
module.exports.Sprite = Sprite;
module.exports.TweenEngine = TweenEngine;
module.exports.Resources = Resources;
module.exports.Graphics = Graphics;
module.exports.Tex_fromImage = Tex_fromImage;