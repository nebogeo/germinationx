$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof truffle=='undefined') truffle = {}
if(!truffle.interfaces) truffle.interfaces = {}
truffle.interfaces.SoundPlayer = function() { }
truffle.interfaces.SoundPlayer.__name__ = ["truffle","interfaces","SoundPlayer"];
truffle.interfaces.SoundPlayer.prototype.LoadSound = null;
truffle.interfaces.SoundPlayer.prototype.Play = null;
truffle.interfaces.SoundPlayer.prototype.__class__ = truffle.interfaces.SoundPlayer;
if(!truffle.canvas) truffle.canvas = {}
truffle.canvas.CanvasSoundPlayer = function(sounds) { if( sounds === $_ ) return; {
	null;
}}
truffle.canvas.CanvasSoundPlayer.__name__ = ["truffle","canvas","CanvasSoundPlayer"];
truffle.canvas.CanvasSoundPlayer.prototype.LoadSound = function(filename) {
	return 0;
}
truffle.canvas.CanvasSoundPlayer.prototype.Play = function(id) {
	null;
}
truffle.canvas.CanvasSoundPlayer.prototype.__class__ = truffle.canvas.CanvasSoundPlayer;
truffle.canvas.CanvasSoundPlayer.__interfaces__ = [truffle.interfaces.SoundPlayer];
truffle.SoundPlayer = function(sounds) { if( sounds === $_ ) return; {
	truffle.canvas.CanvasSoundPlayer.call(this,sounds);
}}
truffle.SoundPlayer.__name__ = ["truffle","SoundPlayer"];
truffle.SoundPlayer.__super__ = truffle.canvas.CanvasSoundPlayer;
for(var k in truffle.canvas.CanvasSoundPlayer.prototype ) truffle.SoundPlayer.prototype[k] = truffle.canvas.CanvasSoundPlayer.prototype[k];
truffle.SoundPlayer.prototype.__class__ = truffle.SoundPlayer;
truffle.interfaces.TextureDesc = function() { }
truffle.interfaces.TextureDesc.__name__ = ["truffle","interfaces","TextureDesc"];
truffle.interfaces.TextureDesc.prototype.__class__ = truffle.interfaces.TextureDesc;
truffle.canvas.CanvasTextureDesc = function(p) { if( p === $_ ) return; {
	null;
}}
truffle.canvas.CanvasTextureDesc.__name__ = ["truffle","canvas","CanvasTextureDesc"];
truffle.canvas.CanvasTextureDesc.prototype.Name = null;
truffle.canvas.CanvasTextureDesc.prototype.__class__ = truffle.canvas.CanvasTextureDesc;
truffle.canvas.CanvasTextureDesc.__interfaces__ = [truffle.interfaces.TextureDesc];
truffle.TextureDesc = function(p) { if( p === $_ ) return; {
	truffle.canvas.CanvasTextureDesc.call(this);
}}
truffle.TextureDesc.__name__ = ["truffle","TextureDesc"];
truffle.TextureDesc.__super__ = truffle.canvas.CanvasTextureDesc;
for(var k in truffle.canvas.CanvasTextureDesc.prototype ) truffle.TextureDesc.prototype[k] = truffle.canvas.CanvasTextureDesc.prototype[k];
truffle.TextureDesc.prototype.__class__ = truffle.TextureDesc;
truffle.interfaces.App = function(w) { if( w === $_ ) return; {
	this.World = w;
	this.Frame = 0;
}}
truffle.interfaces.App.__name__ = ["truffle","interfaces","App"];
truffle.interfaces.App.prototype.World = null;
truffle.interfaces.App.prototype.Frame = null;
truffle.interfaces.App.prototype.Update = function() {
	this.World.Update(this.Frame);
	this.Frame++;
}
truffle.interfaces.App.prototype.Handle = function(e) {
	this.World.Handle(e);
}
truffle.interfaces.App.prototype.__class__ = truffle.interfaces.App;
truffle.canvas.CanvasApp = function(w) { if( w === $_ ) return; {
	truffle.interfaces.App.call(this,w);
	this.UpdateCB();
}}
truffle.canvas.CanvasApp.__name__ = ["truffle","canvas","CanvasApp"];
truffle.canvas.CanvasApp.__super__ = truffle.interfaces.App;
for(var k in truffle.interfaces.App.prototype ) truffle.canvas.CanvasApp.prototype[k] = truffle.interfaces.App.prototype[k];
truffle.canvas.CanvasApp.prototype.InnerOnUpdate = null;
truffle.canvas.CanvasApp.prototype.InnerOnKeyDown = null;
truffle.canvas.CanvasApp.prototype.UpdateCB = function() {
	this.Update();
	haxe.Timer.delay($closure(this,"UpdateCB"),20);
}
truffle.canvas.CanvasApp.prototype.__class__ = truffle.canvas.CanvasApp;
truffle.App = function(w) { if( w === $_ ) return; {
	truffle.canvas.CanvasApp.call(this,w);
}}
truffle.App.__name__ = ["truffle","App"];
truffle.App.__super__ = truffle.canvas.CanvasApp;
for(var k in truffle.canvas.CanvasApp.prototype ) truffle.App.prototype[k] = truffle.canvas.CanvasApp.prototype[k];
truffle.App.prototype.__class__ = truffle.App;
truffle.interfaces.Drawable = function(p) { if( p === $_ ) return; {
	this.ReadyToDraw = true;
	this.Hidden = false;
}}
truffle.interfaces.Drawable.__name__ = ["truffle","interfaces","Drawable"];
truffle.interfaces.Drawable.prototype.ReadyToDraw = null;
truffle.interfaces.Drawable.prototype.Hidden = null;
truffle.interfaces.Drawable.prototype.DrawMe = null;
truffle.interfaces.Drawable.prototype.ID = null;
truffle.interfaces.Drawable.prototype.Depth = null;
truffle.interfaces.Drawable.prototype.SetID = function(s) {
	this.ID = s;
}
truffle.interfaces.Drawable.prototype.GetID = function() {
	return this.ID;
}
truffle.interfaces.Drawable.prototype.Intersect = function(bb) {
	return false;
}
truffle.interfaces.Drawable.prototype.SetDepth = function(s) {
	this.Depth = s;
}
truffle.interfaces.Drawable.prototype.GetDepth = function() {
	return this.Depth;
}
truffle.interfaces.Drawable.prototype.IsMouseEnabled = function() {
	return false;
}
truffle.interfaces.Drawable.prototype.UpdateInput = function(cs) {
	null;
}
truffle.interfaces.Drawable.prototype.Draw = function() {
	null;
}
truffle.interfaces.Drawable.prototype.__class__ = truffle.interfaces.Drawable;
truffle.interfaces.Sprite = function(p) { if( p === $_ ) return; {
	truffle.interfaces.Drawable.call(this);
}}
truffle.interfaces.Sprite.__name__ = ["truffle","interfaces","Sprite"];
truffle.interfaces.Sprite.__super__ = truffle.interfaces.Drawable;
for(var k in truffle.interfaces.Drawable.prototype ) truffle.interfaces.Sprite.prototype[k] = truffle.interfaces.Drawable.prototype[k];
truffle.interfaces.Sprite.prototype.Pos = null;
truffle.interfaces.Sprite.prototype.Width = null;
truffle.interfaces.Sprite.prototype.Height = null;
truffle.interfaces.Sprite.prototype.Angle = null;
truffle.interfaces.Sprite.prototype.MyScale = null;
truffle.interfaces.Sprite.prototype.Centre = null;
truffle.interfaces.Sprite.prototype.DoCentreMiddleBottom = null;
truffle.interfaces.Sprite.prototype.MouseDown = function(c,f) {
	null;
}
truffle.interfaces.Sprite.prototype.MouseUp = function(c,f) {
	null;
}
truffle.interfaces.Sprite.prototype.MouseOver = function(c,f) {
	null;
}
truffle.interfaces.Sprite.prototype.MouseOut = function(c,f) {
	null;
}
truffle.interfaces.Sprite.prototype.EnableMouse = function(s) {
	null;
}
truffle.interfaces.Sprite.prototype.ChangeBitmap = function(t) {
	null;
}
truffle.interfaces.Sprite.prototype.SetPos = function(s) {
	this.Pos = s;
	this.DrawMe = true;
}
truffle.interfaces.Sprite.prototype.SetScale = function(s) {
	this.MyScale = s;
	this.DrawMe = true;
}
truffle.interfaces.Sprite.prototype.SetRotate = function(angle) {
	this.Angle = angle;
	this.DrawMe = true;
}
truffle.interfaces.Sprite.prototype.GetTx = function() {
	return null;
}
truffle.interfaces.Sprite.prototype.TransformedPos = function() {
	return null;
}
truffle.interfaces.Sprite.prototype.SetColour = function(c) {
	null;
}
truffle.interfaces.Sprite.prototype.GetColour = function() {
	return null;
}
truffle.interfaces.Sprite.prototype.SetOffsetColour = function(c) {
	null;
}
truffle.interfaces.Sprite.prototype.GetOffsetColour = function() {
	return null;
}
truffle.interfaces.Sprite.prototype.CentreMiddleBottom = function(s) {
	this.DoCentreMiddleBottom = s;
}
truffle.interfaces.Sprite.prototype.Hide = function(s) {
	null;
}
truffle.interfaces.Sprite.prototype.Update = function(frame,tx) {
	null;
}
truffle.interfaces.Sprite.prototype.LoadFromURL = function(url) {
	null;
}
truffle.interfaces.Sprite.prototype.__class__ = truffle.interfaces.Sprite;
truffle.Sprite = function(pos,t,midbot,viz) { if( pos === $_ ) return; {
	if(viz == null) viz = true;
	if(midbot == null) midbot = false;
	truffle.canvas.CanvasSprite.call(this,pos,t,midbot,viz);
}}
truffle.Sprite.__name__ = ["truffle","Sprite"];
truffle.Sprite.__super__ = truffle.canvas.CanvasSprite;
for(var k in truffle.canvas.CanvasSprite.prototype ) truffle.Sprite.prototype[k] = truffle.canvas.CanvasSprite.prototype[k];
truffle.Sprite.prototype.__class__ = truffle.Sprite;
truffle.interfaces.World = function(p) { if( p === $_ ) return; {
	this.Scene = [];
	this.CurrentTilePos = new truffle.Vec2(0,0);
	this.ScreenScale = new truffle.Vec2(1,1);
	this.ScreenCentre = new truffle.Vec2(-650,550);
	this.ScreenOffset = new truffle.Vec2(this.ScreenCentre.x,this.ScreenCentre.y);
	this.Theta = -66 * Math.PI / 180;
	this.Alpha = 59 * Math.PI / 180;
	this.CosTheta = Math.cos(this.Theta);
	this.SinTheta = Math.sin(this.Theta);
	this.CosAlpha = Math.cos(this.Alpha);
	this.SinAlpha = Math.sin(this.Alpha);
	this.Scale = new truffle.Vec3(103,84,80);
}}
truffle.interfaces.World.__name__ = ["truffle","interfaces","World"];
truffle.interfaces.World.prototype.Scene = null;
truffle.interfaces.World.prototype.CurrentTilePos = null;
truffle.interfaces.World.prototype.ScreenScale = null;
truffle.interfaces.World.prototype.ScreenOffset = null;
truffle.interfaces.World.prototype.Theta = null;
truffle.interfaces.World.prototype.Alpha = null;
truffle.interfaces.World.prototype.CosTheta = null;
truffle.interfaces.World.prototype.CosAlpha = null;
truffle.interfaces.World.prototype.SinTheta = null;
truffle.interfaces.World.prototype.SinAlpha = null;
truffle.interfaces.World.prototype.ScreenCentre = null;
truffle.interfaces.World.prototype.Scale = null;
truffle.interfaces.World.prototype.AddSprite = function(s) {
	null;
}
truffle.interfaces.World.prototype.RemoveSprite = function(s) {
	null;
}
truffle.interfaces.World.prototype.MouseDown = function(c,f) {
	null;
}
truffle.interfaces.World.prototype.MouseUp = function(c,f) {
	null;
}
truffle.interfaces.World.prototype.MouseMove = function(c,f) {
	null;
}
truffle.interfaces.World.prototype.Update = function(time) {
	null;
}
truffle.interfaces.World.prototype.Handle = function(event) {
	null;
}
truffle.interfaces.World.prototype.SetChildIndex = function(sprite,depth) {
	null;
}
truffle.interfaces.World.prototype.ScreenSpaceTransform = function(pos) {
	var ox = pos.x * this.Scale.x;
	var oy = pos.y * this.Scale.y;
	var oz = pos.z * this.Scale.z;
	var zp = oz;
	var xp = ox * this.CosAlpha + oy * this.SinAlpha;
	var yp = oy * this.CosAlpha - ox * this.SinAlpha;
	var r = new truffle.Vec3(xp,yp * this.CosTheta + zp * this.SinTheta,zp * this.CosTheta - yp * this.SinTheta);
	return r;
}
truffle.interfaces.World.prototype.ScreenTransform = function(pos) {
	var ox = pos.x * this.Scale.x;
	var oy = pos.y * this.Scale.y;
	var oz = pos.z * this.Scale.z;
	var zp = oz;
	var xp = ox * this.CosAlpha + oy * this.SinAlpha;
	var yp = oy * this.CosAlpha - ox * this.SinAlpha;
	var r = new truffle.Vec3(xp,yp * this.CosTheta + zp * this.SinTheta,zp * this.CosTheta - yp * this.SinTheta);
	r.x += this.ScreenOffset.x;
	r.y += this.ScreenOffset.y;
	return r;
}
truffle.interfaces.World.prototype.InverseScreenTransform = function(pos) {
	var ox = pos.x - this.ScreenOffset.x;
	var oy = pos.y - this.ScreenOffset.y;
	var xp = ox / this.CosAlpha + oy / this.SinAlpha;
	var yp = oy / this.CosAlpha - ox / this.SinAlpha;
	var r = new truffle.Vec2(xp,yp / this.CosTheta);
	r.x /= this.Scale.x;
	r.y /= this.Scale.y;
	return r;
}
truffle.interfaces.World.prototype.Add = function(e) {
	this.Scene.push(e);
}
truffle.interfaces.World.prototype.Remove = function(e) {
	e.Destroy(this);
	this.Scene.remove(e);
}
truffle.interfaces.World.prototype.Get = function(type,p) {
	{
		var _g = 0, _g1 = this.Scene;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			if(p.x == e.LogicalPos.x && p.y == e.LogicalPos.y && Type.getClassName(Type.getClass(e)) == type) {
				return e;
			}
		}
	}
	return null;
}
truffle.interfaces.World.prototype.GetOther = function(me,type,p) {
	{
		var _g = 0, _g1 = this.Scene;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			if(p.x == e.LogicalPos.x && p.y == e.LogicalPos.y && Type.getClassName(Type.getClass(e)) == type && e != me) {
				return e;
			}
		}
	}
	return null;
}
truffle.interfaces.World.prototype.SetCurrentTilePos = function(s) {
	this.CurrentTilePos = s;
}
truffle.interfaces.World.prototype.SetScale = function(amount) {
	this.ScreenScale = amount;
	{
		var _g = 0, _g1 = this.Scene;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			e.GetRoot().SetScale(amount);
			e.Update(0,this);
		}
	}
}
truffle.interfaces.World.prototype.SetTranslate = function(amount) {
	this.ScreenOffset = amount;
	{
		var _g = 0, _g1 = this.Scene;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			e.SetLogicalPos(this,e.LogicalPos);
			e.Update(0,this);
		}
	}
}
truffle.interfaces.World.prototype.PostSortScene = function(depth) {
	null;
}
truffle.interfaces.World.prototype.SortScene = function() {
	this.Scene.sort(function(a,b) {
		if(a.GetDepth() < b.GetDepth()) return -1;
		else return 1;
	});
	var i = 0;
	{
		var _g = 0, _g1 = this.Scene;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			i = e.OnSortScene(this,i);
		}
	}
	this.PostSortScene(i);
}
truffle.interfaces.World.prototype.__class__ = truffle.interfaces.World;
truffle.canvas.CanvasWorld = function(p) { if( p === $_ ) return; {
	truffle.interfaces.World.call(this);
	this.Sprites = [];
	this.CurrentDepth = 1000;
	this.CurrentID = 0;
	this.CanvasState = new truffle.canvas.CanvasState();
}}
truffle.canvas.CanvasWorld.__name__ = ["truffle","canvas","CanvasWorld"];
truffle.canvas.CanvasWorld.__super__ = truffle.interfaces.World;
for(var k in truffle.interfaces.World.prototype ) truffle.canvas.CanvasWorld.prototype[k] = truffle.interfaces.World.prototype[k];
truffle.canvas.CanvasWorld.prototype.Sprites = null;
truffle.canvas.CanvasWorld.prototype.CurrentDepth = null;
truffle.canvas.CanvasWorld.prototype.CanvasState = null;
truffle.canvas.CanvasWorld.prototype.CurrentID = null;
truffle.canvas.CanvasWorld.prototype.AddSprite = function(s) {
	s.SetDepth(this.CurrentDepth++);
	s.SetID(this.CurrentID++);
	this.Sprites.push(s);
}
truffle.canvas.CanvasWorld.prototype.RemoveSprite = function(s) {
	var NewSprites = [];
	{
		var _g = 0, _g1 = this.Sprites;
		while(_g < _g1.length) {
			var Sprite = _g1[_g];
			++_g;
			if(s != Sprite) NewSprites.push(Sprite);
		}
	}
	this.Sprites = NewSprites;
}
truffle.canvas.CanvasWorld.prototype.SetChildIndex = function(sprite,depth) {
	sprite.SetDepth(depth);
}
truffle.canvas.CanvasWorld.prototype.MouseDown = function(c,f) {
	null;
}
truffle.canvas.CanvasWorld.prototype.MouseUp = function(c,f) {
	null;
}
truffle.canvas.CanvasWorld.prototype.MouseMove = function(c,f) {
	null;
}
truffle.canvas.CanvasWorld.prototype.AddToDrawList = function(Spr,BBox,DrawList) {
	{
		var _g = 0;
		while(_g < DrawList.length) {
			var d = DrawList[_g];
			++_g;
			if(Spr.GetID() == d.Spr.GetID()) {
				d.BBox.push(BBox);
				return;
			}
		}
	}
	DrawList.push({ Spr : Spr, BBox : [BBox]});
}
truffle.canvas.CanvasWorld.prototype.Update = function(time) {
	{
		var _g = 0, _g1 = this.Scene;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			if(e.TilePos != null) {
				var diff = e.TilePos.Sub(this.CurrentTilePos);
				e.Hide(Math.abs(diff.x) > 1 || Math.abs(diff.y) > 1);
			}
			if(e.NeedsUpdate && !e.Hidden && (e.UpdateFreq == 0 || time % e.UpdateFreq == 0)) {
				e.Update(time,(function($this) {
					var $r;
					var $t = $this;
					if(Std["is"]($t,truffle.World)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this)));
			}
		}
	}
	this.Sprites.sort(function(a,b) {
		if(a.Depth < b.Depth) return -1;
		else return 1;
	});
	var DrawList = [];
	{
		var _g = 0, _g1 = this.Sprites;
		while(_g < _g1.length) {
			var Sprite = _g1[_g];
			++_g;
			if(!Sprite.Hidden && Sprite.ReadyToDraw && Sprite.DrawMe) {
				var BBox = Sprite.GetLastBBox();
				{
					var _g2 = 0, _g3 = this.Sprites;
					while(_g2 < _g3.length) {
						var Other = _g3[_g2];
						++_g2;
						if(!Other.Hidden && Other.ReadyToDraw && Other != Sprite && Other.Intersect(BBox)) {
							this.AddToDrawList(Other,BBox,DrawList);
						}
						if(Other == Sprite) {
							this.AddToDrawList(Other,BBox,DrawList);
						}
					}
				}
			}
		}
	}
	this.CanvasState.BeginScene();
	{
		var _g = 0;
		while(_g < DrawList.length) {
			var d = DrawList[_g];
			++_g;
			this.CanvasState.ClearRects(d.BBox);
		}
	}
	{
		var _g = 0, _g1 = this.Sprites;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			{
				var _g2 = 0;
				while(_g2 < DrawList.length) {
					var d = DrawList[_g2];
					++_g2;
					if(s.GetID() == d.Spr.GetID()) {
						this.CanvasState.SetClip(d.BBox);
						d.Spr.Draw();
						this.CanvasState.UnClip();
					}
				}
			}
		}
	}
	this.CanvasState.Stats(DrawList.length / this.Sprites.length);
	this.CanvasState.EndScene();
	this.UpdateInput();
}
truffle.canvas.CanvasWorld.prototype.Handle = function(event) {
	null;
}
truffle.canvas.CanvasWorld.prototype.UpdateInput = function() {
	var FoundSprite = false;
	{
		var _g1 = 0, _g = this.Sprites.length;
		while(_g1 < _g) {
			var n = _g1++;
			var i = this.Sprites.length - n;
			i--;
			if(!FoundSprite && this.Sprites[i].IsMouseEnabled()) {
				FoundSprite = this.Sprites[i].UpdateMouse(this.CanvasState);
			}
		}
	}
	this.CanvasState.Update();
}
truffle.canvas.CanvasWorld.prototype.__class__ = truffle.canvas.CanvasWorld;
truffle.World = function(p) { if( p === $_ ) return; {
	truffle.canvas.CanvasWorld.call(this);
}}
truffle.World.__name__ = ["truffle","World"];
truffle.World.__super__ = truffle.canvas.CanvasWorld;
for(var k in truffle.canvas.CanvasWorld.prototype ) truffle.World.prototype[k] = truffle.canvas.CanvasWorld.prototype[k];
truffle.World.prototype.__class__ = truffle.World;
truffle.interfaces.ServerConnection = function(p) { if( p === $_ ) return; {
	this.RequestQueue = [];
	this.Ready = true;
}}
truffle.interfaces.ServerConnection.__name__ = ["truffle","interfaces","ServerConnection"];
truffle.interfaces.ServerConnection.prototype.RequestQueue = null;
truffle.interfaces.ServerConnection.prototype.Ready = null;
truffle.interfaces.ServerConnection.prototype.Request = function(URL,Context,Callback) {
	this.RequestQueue.push(new truffle.interfaces.ServerRequest(URL,Context,Callback));
}
truffle.interfaces.ServerConnection.prototype.InnerRequest = function(r) {
	null;
}
truffle.interfaces.ServerConnection.prototype.Update = function() {
	if(this.RequestQueue.length > 0 && this.Ready) {
		this.InnerRequest(this.RequestQueue.pop());
	}
}
truffle.interfaces.ServerConnection.prototype.__class__ = truffle.interfaces.ServerConnection;
truffle.canvas.CanvasServerConnection = function(p) { if( p === $_ ) return; {
	truffle.interfaces.ServerConnection.call(this);
	this.Rnd = new truffle.RndGen();
}}
truffle.canvas.CanvasServerConnection.__name__ = ["truffle","canvas","CanvasServerConnection"];
truffle.canvas.CanvasServerConnection.__super__ = truffle.interfaces.ServerConnection;
for(var k in truffle.interfaces.ServerConnection.prototype ) truffle.canvas.CanvasServerConnection.prototype[k] = truffle.interfaces.ServerConnection.prototype[k];
truffle.canvas.CanvasServerConnection.prototype.LoadedCallback = null;
truffle.canvas.CanvasServerConnection.prototype.LoadedContext = null;
truffle.canvas.CanvasServerConnection.prototype.Rnd = null;
truffle.canvas.CanvasServerConnection.prototype.InnerRequest = function(r) {
	r.URL += "/" + Std.string(this.Rnd.RndInt());
	var req = new haxe.Http(r.URL);
	req.onError = $closure(js.Lib,"alert");
	req.onData = function(data) {
		r.Callback(r.Context,hxjson2.JSON.decode(data));
	}
	req.request(false);
}
truffle.canvas.CanvasServerConnection.prototype.__class__ = truffle.canvas.CanvasServerConnection;
truffle.ServerConnection = function(p) { if( p === $_ ) return; {
	truffle.canvas.CanvasServerConnection.call(this);
}}
truffle.ServerConnection.__name__ = ["truffle","ServerConnection"];
truffle.ServerConnection.__super__ = truffle.canvas.CanvasServerConnection;
for(var k in truffle.canvas.CanvasServerConnection.prototype ) truffle.ServerConnection.prototype[k] = truffle.canvas.CanvasServerConnection.prototype[k];
truffle.ServerConnection.prototype.__class__ = truffle.ServerConnection;
truffle.interfaces.TextEntry = function(p) { if( p === $_ ) return; {
	truffle.interfaces.Drawable.call(this);
}}
truffle.interfaces.TextEntry.__name__ = ["truffle","interfaces","TextEntry"];
truffle.interfaces.TextEntry.__super__ = truffle.interfaces.Drawable;
for(var k in truffle.interfaces.Drawable.prototype ) truffle.interfaces.TextEntry.prototype[k] = truffle.interfaces.Drawable.prototype[k];
truffle.interfaces.TextEntry.prototype.__class__ = truffle.interfaces.TextEntry;
truffle.canvas.CanvasTextEntry = function(x,y,w,h,f) { if( x === $_ ) return; {
	truffle.interfaces.TextEntry.call(this);
}}
truffle.canvas.CanvasTextEntry.__name__ = ["truffle","canvas","CanvasTextEntry"];
truffle.canvas.CanvasTextEntry.__super__ = truffle.interfaces.TextEntry;
for(var k in truffle.interfaces.TextEntry.prototype ) truffle.canvas.CanvasTextEntry.prototype[k] = truffle.interfaces.TextEntry.prototype[k];
truffle.canvas.CanvasTextEntry.prototype.Callback = null;
truffle.canvas.CanvasTextEntry.prototype.__class__ = truffle.canvas.CanvasTextEntry;
truffle.TextEntry = function(x,y,w,h,f) { if( x === $_ ) return; {
	truffle.canvas.CanvasTextEntry.call(this,x,y,w,h,f);
}}
truffle.TextEntry.__name__ = ["truffle","TextEntry"];
truffle.TextEntry.__super__ = truffle.canvas.CanvasTextEntry;
for(var k in truffle.canvas.CanvasTextEntry.prototype ) truffle.TextEntry.prototype[k] = truffle.canvas.CanvasTextEntry.prototype[k];
truffle.TextEntry.prototype.__class__ = truffle.TextEntry;
truffle.canvas.CanvasParticles = function(pos,count) { if( pos === $_ ) return; {
	null;
}}
truffle.canvas.CanvasParticles.__name__ = ["truffle","canvas","CanvasParticles"];
truffle.canvas.CanvasParticles.prototype.Pos = null;
truffle.canvas.CanvasParticles.prototype.Rnd = null;
truffle.canvas.CanvasParticles.prototype.Positions = null;
truffle.canvas.CanvasParticles.prototype.Velocities = null;
truffle.canvas.CanvasParticles.prototype.Colours = null;
truffle.canvas.CanvasParticles.prototype.RecycleRate = null;
truffle.canvas.CanvasParticles.prototype.ColourTripleToInt = function(col) {
	var r = Std["int"](col.x * 255) << 16;
	var g = Std["int"](col.y * 255) << 8;
	var b = Std["int"](col.z * 255);
	return r | g | b;
}
truffle.canvas.CanvasParticles.prototype.Update = function(frame) {
	null;
}
truffle.canvas.CanvasParticles.prototype.__class__ = truffle.canvas.CanvasParticles;
truffle.Particles = function(pos,count) { if( pos === $_ ) return; {
	truffle.canvas.CanvasParticles.call(this,pos,count);
}}
truffle.Particles.__name__ = ["truffle","Particles"];
truffle.Particles.__super__ = truffle.canvas.CanvasParticles;
for(var k in truffle.canvas.CanvasParticles.prototype ) truffle.Particles.prototype[k] = truffle.canvas.CanvasParticles.prototype[k];
truffle.Particles.prototype.__class__ = truffle.Particles;
truffle.interfaces.Frame = function(p) { if( p === $_ ) return; {
	truffle.interfaces.Drawable.call(this);
}}
truffle.interfaces.Frame.__name__ = ["truffle","interfaces","Frame"];
truffle.interfaces.Frame.__super__ = truffle.interfaces.Drawable;
for(var k in truffle.interfaces.Drawable.prototype ) truffle.interfaces.Frame.prototype[k] = truffle.interfaces.Drawable.prototype[k];
truffle.interfaces.Frame.prototype.UpdatePosition = function(x,y) {
	null;
}
truffle.interfaces.Frame.prototype.UpdateText = function(text) {
	null;
}
truffle.interfaces.Frame.prototype.UpdateSize = function(w,h) {
	null;
}
truffle.interfaces.Frame.prototype.__class__ = truffle.interfaces.Frame;
truffle.canvas.CanvasFrame = function(text,x,y,w,h,Autosize) { if( text === $_ ) return; {
	if(Autosize == null) Autosize = false;
	truffle.interfaces.Frame.call(this);
}}
truffle.canvas.CanvasFrame.__name__ = ["truffle","canvas","CanvasFrame"];
truffle.canvas.CanvasFrame.__super__ = truffle.interfaces.Frame;
for(var k in truffle.interfaces.Frame.prototype ) truffle.canvas.CanvasFrame.prototype[k] = truffle.interfaces.Frame.prototype[k];
truffle.canvas.CanvasFrame.prototype.Textures = null;
truffle.canvas.CanvasFrame.prototype.UsingTextures = null;
truffle.canvas.CanvasFrame.prototype.R = null;
truffle.canvas.CanvasFrame.prototype.G = null;
truffle.canvas.CanvasFrame.prototype.B = null;
truffle.canvas.CanvasFrame.prototype.ExpandLeft = null;
truffle.canvas.CanvasFrame.prototype.YOff = null;
truffle.canvas.CanvasFrame.prototype.X = null;
truffle.canvas.CanvasFrame.prototype.Y = null;
truffle.canvas.CanvasFrame.prototype.Width = null;
truffle.canvas.CanvasFrame.prototype.Height = null;
truffle.canvas.CanvasFrame.prototype.MouseDownFunc = null;
truffle.canvas.CanvasFrame.prototype.MouseDownContext = null;
truffle.canvas.CanvasFrame.prototype.MouseUpFunc = null;
truffle.canvas.CanvasFrame.prototype.MouseUpContext = null;
truffle.canvas.CanvasFrame.prototype.MouseOverFunc = null;
truffle.canvas.CanvasFrame.prototype.MouseOverContext = null;
truffle.canvas.CanvasFrame.prototype.MouseOutFunc = null;
truffle.canvas.CanvasFrame.prototype.MouseOutContext = null;
truffle.canvas.CanvasFrame.prototype.Hide = function(s) {
	null;
}
truffle.canvas.CanvasFrame.prototype.IsHidden = function() {
	return false;
}
truffle.canvas.CanvasFrame.prototype.SetTextSize = function(s) {
	null;
}
truffle.canvas.CanvasFrame.prototype.UpdatePosition = function(x,y) {
	null;
}
truffle.canvas.CanvasFrame.prototype.UpdateText = function(text) {
	null;
}
truffle.canvas.CanvasFrame.prototype.UpdateHTMLText = function(text) {
	null;
}
truffle.canvas.CanvasFrame.prototype.InitTextures = function(t,r) {
	null;
}
truffle.canvas.CanvasFrame.prototype.EnableMouse = function(s) {
	null;
}
truffle.canvas.CanvasFrame.prototype.MouseDown = function(c,f) {
	null;
}
truffle.canvas.CanvasFrame.prototype.MouseDownCB = function(e) {
	null;
}
truffle.canvas.CanvasFrame.prototype.MouseUp = function(c,f) {
	null;
}
truffle.canvas.CanvasFrame.prototype.MouseUpCB = function(e) {
	null;
}
truffle.canvas.CanvasFrame.prototype.MouseOver = function(c,f) {
	null;
}
truffle.canvas.CanvasFrame.prototype.MouseOverCB = function(e) {
	null;
}
truffle.canvas.CanvasFrame.prototype.MouseOut = function(c,f) {
	null;
}
truffle.canvas.CanvasFrame.prototype.MouseOutCB = function(e) {
	null;
}
truffle.canvas.CanvasFrame.prototype.__class__ = truffle.canvas.CanvasFrame;
truffle.Frame = function(text,x,y,w,h,Autosize) { if( text === $_ ) return; {
	if(Autosize == null) Autosize = false;
	truffle.canvas.CanvasFrame.call(this,text,x,y,w,h,Autosize);
}}
truffle.Frame.__name__ = ["truffle","Frame"];
truffle.Frame.__super__ = truffle.canvas.CanvasFrame;
for(var k in truffle.canvas.CanvasFrame.prototype ) truffle.Frame.prototype[k] = truffle.canvas.CanvasFrame.prototype[k];
truffle.Frame.prototype.__class__ = truffle.Frame;
truffle.Keyboard = function() { }
truffle.Keyboard.__name__ = ["truffle","Keyboard"];
truffle.Keyboard.toInt = function(k) {
	return 0;
}
truffle.Keyboard.prototype.__class__ = truffle.Keyboard;
if(typeof haxe=='undefined') haxe = {}
haxe.Http = function(url) { if( url === $_ ) return; {
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
}}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	}
	h.onError = function(e) {
		throw e;
	}
	h.request(false);
	return r;
}
haxe.Http.prototype.url = null;
haxe.Http.prototype.async = null;
haxe.Http.prototype.postData = null;
haxe.Http.prototype.headers = null;
haxe.Http.prototype.params = null;
haxe.Http.prototype.setHeader = function(header,value) {
	this.headers.set(header,value);
}
haxe.Http.prototype.setParameter = function(param,value) {
	this.params.set(param,value);
}
haxe.Http.prototype.setPostData = function(data) {
	this.postData = data;
}
haxe.Http.prototype.request = function(post) {
	var me = this;
	var r = new js.XMLHttpRequest();
	var onreadystatechange = function() {
		if(r.readyState != 4) return;
		var s = (function($this) {
			var $r;
			try {
				$r = r.status;
			}
			catch( $e0 ) {
				{
					var e = $e0;
					$r = null;
				}
			}
			return $r;
		}(this));
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText);
		else switch(s) {
		case null: case undefined:{
			me.onError("Failed to connect or resolve host");
		}break;
		case 12029:{
			me.onError("Failed to connect to host");
		}break;
		case 12007:{
			me.onError("Unknown host");
		}break;
		default:{
			me.onError("Http Error #" + r.status);
		}break;
		}
	}
	if(this.async) r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) post = true;
	else { var $it1 = this.params.keys();
	while( $it1.hasNext() ) { var p = $it1.next();
	{
		if(uri == null) uri = "";
		else uri += "&";
		uri += StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
	}
	}}
	try {
		if(post) r.open("POST",this.url,this.async);
		else if(uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open("GET",this.url + (question?"?":"&") + uri,this.async);
			uri = null;
		}
		else r.open("GET",this.url,this.async);
	}
	catch( $e2 ) {
		{
			var e = $e2;
			{
				this.onError(e.toString());
				return;
			}
		}
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	{ var $it3 = this.headers.keys();
	while( $it3.hasNext() ) { var h = $it3.next();
	r.setRequestHeader(h,this.headers.get(h));
	}}
	r.send(uri);
	if(!this.async) onreadystatechange();
}
haxe.Http.prototype.onData = function(data) {
	null;
}
haxe.Http.prototype.onError = function(msg) {
	null;
}
haxe.Http.prototype.onStatus = function(status) {
	null;
}
haxe.Http.prototype.__class__ = haxe.Http;
if(typeof fungi=='undefined') fungi = {}
fungi.StringMaker = function(p) { if( p === $_ ) return; {
	var Rnd = new truffle.RndGen();
	this.MsgMap = { i_have_been_planted : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant has just germinated!";
	}, i_am_ill : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant is feeling ill.";
	}, i_have_fruited : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant has fruited.";
	}, i_have_died : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant has died.";
	}, i_have_recovered : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant has recovered.";
	}, i_have_been_picked_by : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant has been picked by " + extra[0];
	}, your_plant_doesnt_like : function(from,to,owner,extra,emotion) {
		return extra[0] + ", your " + extra[3] + " plant doesn't like " + to + "'s " + extra[2] + " plant nearby.";
	}, your_plant_needs : function(from,to,owner,extra,emotion) {
		return to + ", your " + extra[0] + " plant needs a " + extra[1] + " plant nearby for " + Reflect.field(fungi.StringMaker.Reasons,extra[1]) + ".";
	}, needs_help : function(from,to,owner,extra,emotion) {
		if(extra[2] == "oak" && (function($this) {
			var $r;
			Rnd.State = Std["int"](Rnd.State * 214013 + 2531011) & -1;
			$r = Std["int"](Math.abs(Rnd.State));
			return $r;
		}(this)) % 100 < 50) {
			if(emotion == "LOVE" || emotion == "HAPPY_FOR" || emotion == "GLOATING") return "Hey " + to + ", if you are feeling kind, " + extra[0] + "'s " + extra[2] + " plant needs more players helping it.";
			if(emotion == "HATE" || emotion == "PITTY") return "It's terrible " + to + ", " + extra[0] + "'s " + extra[2] + " won't survive without more players planting nearby.";
			if(emotion == "PRIDE" || emotion == "JOY" || emotion == "ADMIRATION") return to + ", make my day even better by joining in helping " + extra[0] + "'s " + extra[2] + " plant.";
			if(emotion == "DISTRESS" || emotion == "SHAME" || emotion == "RESENTMENT") return "Everything is going wrong " + to + ", " + extra[0] + "'s " + extra[2] + " plant badly needs more players to help it.";
			return to + ", " + extra[0] + "'s " + extra[2] + " plant needs a more players planting nearby.";
		}
		else {
			if(emotion == "LOVE" || emotion == "HAPPY_FOR" || emotion == "GLOATING") return "Hey " + to + ", if you are feeling kind, plant a " + extra[3] + " near " + extra[0] + "'s " + extra[2] + " plant.";
			if(emotion == "HATE" || emotion == "PITTY") return "It's terrible " + to + ", " + extra[0] + "'s " + extra[2] + " won't survive without a " + extra[3] + " nearby.";
			if(emotion == "PRIDE" || emotion == "JOY" || emotion == "ADMIRATION") return to + ", make my day even better by planting a " + extra[3] + " near " + extra[0] + "'s " + extra[2] + " plant.";
			if(emotion == "DISTRESS" || emotion == "SHAME" || emotion == "RESENTMENT") return "Everything is going wrong " + to + ", " + extra[0] + "'s " + extra[2] + " plant badly needs a " + extra[3] + " nearby.";
			return to + ", " + extra[0] + "'s " + extra[2] + " plant needs a " + extra[3] + " nearby.";
		}
	}, i_am_recovering : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant is recovering.";
	}, i_am_detrimented_by : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant is being harmed by " + extra[0] + "'s " + extra[2] + " plant.";
	}, i_am_detrimental_to : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant is harming " + extra[0] + "'s " + extra[2] + " plant.";
	}, i_am_benefitting_from : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant is being helped by " + extra[0] + "'s " + extra[2] + " plant.";
	}, i_am_beneficial_to : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant is helping " + extra[0] + "'s " + extra[2] + " plant.";
	}, thanks_for_helping : function(from,to,owner,extra,emotion) {
		return owner + "'s " + from + " plant thanks " + to + "'s " + extra[0] + " plant for helping.";
	}, spirit_complaint : function(from,to,owner,extra,emotion) {
		var e = "";
		if(emotion == "LOVE" || emotion == "HAPPY_FOR" || emotion == "GLOATING") e = "I am happy, but ";
		if(emotion == "HATE" || emotion == "PITTY") e = "I am sad, because ";
		if(emotion == "PRIDE") e = "I am proud, but ";
		if(emotion == "DISTRESS") e = "This is awful, ";
		if(emotion == "ADMIRATION") e = "Everythings fine, but ";
		if(emotion == "JOY") e = "I'm too happy to care, but ";
		if(emotion == "SHAME") e = "I'm ashamed that ";
		if(emotion == "RESENTMENT") e = "It sucks that ";
		var msg = e + to + "'s " + extra[0] + " plant is ";
		if(extra[1] == "ill-a") return msg + "a little ill";
		if(extra[1] == "ill-b") return msg + "quite ill";
		if(extra[1] == "ill-c") return msg + "very ill";
		if(extra[1] == "detriment") return msg + "harming my plants.";
		if(extra[1] == "new-fruit") return msg + "has fruited.";
		if(extra[1] == "picked-fruit") return msg + "has been picked.";
		return msg + "... something. (bug: " + extra[1] + ")";
	}, spirit_praise : function(from,to,owner,extra,emotion) {
		var e = "";
		if(emotion == "LOVE" || emotion == "HAPPY_FOR" || emotion == "GLOATING") e = "I am happy that ";
		if(emotion == "HATE" || emotion == "PITTY") e = "I am sad, but ";
		if(emotion == "PRIDE") e = "I am proud, ";
		if(emotion == "DISTRESS") e = "Things are awful, but ";
		if(emotion == "ADMIRATION") e = "It's great, ";
		if(emotion == "JOY") e = "Wow! - ";
		if(emotion == "SHAME") e = "I'm ashamed, ";
		if(emotion == "RESENTMENT") e = "Things are bad, but ";
		var msg = e + to + "'s " + extra[0] + " plant ";
		if(extra[1] == "grow-a") return msg + "is growing well.";
		if(extra[1] == "fruit-a") return msg + "has flowered!";
		if(extra[1] == "fruit-b") return msg + "is fruiting.";
		if(extra[1] == "fruit-c") return msg + "has fruited.";
		if(extra[1] == "recovery-to-b") return msg + "was very ill and is recovering.";
		if(extra[1] == "recovery-to-a") return msg + "is recovering.";
		if(extra[1] == "finished-recovery") return msg + "has fully recovered.";
		if(extra[1] == "benefit") return msg + "is helping my plants.";
		if(extra[1] == "new-fruit") return msg + "has fruited.";
		if(extra[1] == "picked-fruit") return msg + "has been picked.";
		return msg + "... something. (bug: " + extra[1] + ")";
	}, spirit_fortune_of_other : function(from,to,owner,extra,emotion) {
		var other = "TreeSpirit";
		if(extra[3] == "cover") other = "CoverSpirit";
		if(extra[3] == "shrub") other = "ShrubSpirit";
		if(extra[0] == "happy-for") {
			return other + ", you must be pleased with " + to + "'s " + extra[1] + " plant!";
		}
		if(extra[0] == "pity") {
			return "Oh dear " + other + ", I'm sorry about " + to + "'s " + extra[1] + " plant.";
		}
		if(extra[0] == "gloat") {
			return "Haha " + other + ", " + to + "'s " + extra[1] + " plant is ruining your day!";
		}
		if(extra[0] == "resent") {
			return other + ", it's only luck that " + to + " planted a " + extra[1] + " plant there.";
		}
		else return "spirit_fortune_of_other error!";
	}, spirit_received_offering : function(from,to,owner,extra,emotion) {
		var feeling = "kindly";
		if(extra[0] == "complain" || extra[0] == "diagnose") feeling = "annoyingly";
		return to + " has " + feeling + " given me a " + extra[1] + " layer fruit gift!";
	}, ive_asked_x_for_help : function(from,to,owner,extra,emotion) {
		var msg = to + ", I've asked " + extra[0] + " to help with your " + extra[2] + " plant";
		if(extra[3] == "ill-a") msg += ", which is ill.";
		else if(extra[3] == "ill-b") msg += ", which is ill.";
		else if(extra[3] == "ill-c") msg += ", which is ill.";
		else msg += ".";
		return msg;
	}, one_time_i_have_flowered : function(from,to,owner,extra,emotion) {
		return to + ", your " + from + " plant has flowered, and your score has increased!";
	}, gift_received : function(from,to,owner,extra,emotion) {
		return extra[0] + ", you have been given a " + extra[2] + " fruit by " + extra[1] + "!";
	}, gift_sent : function(from,to,owner,extra,emotion) {
		return extra[0] + ", you have given a " + extra[2] + " fruit to " + extra[1] + "!";
	}};
	this.NoteMap = { tutorial_0 : function(name) {
		return "Click on seeds, fruit (or flowers) to add them to your fruit store.\n" + "<img src=\"images/tutorial/00-tutorial.png\"> ";
	}, tutorial_1 : function(name) {
		return "Plant seeds and fruit to unlock more types of plants by increasing your flowered plants score.\n" + "<img src=\"images/tutorial/01-tutorial.png\"> ";
	}, tutorial_2 : function(name) {
		return "Find your plants or other player's plants by clicking on messages.\n" + "<img src=\"images/tutorial/02-tutorial.png\"> ";
	}, tutorial_3 : function(name) {
		return "Help other player's ill plants by planting beneficial plants near them.\n" + "<img src=\"images/tutorial/03-tutorial.png\"> ";
	}, tutorial_4 : function(name) {
		return "Send seeds and fruit to spirits or other players by dropping them onto messages.\n" + "<img src=\"images/tutorial/04-tutorial.png\"> \n" + "\n\n\n\n\n\n\n\n\n\n\nThis will send the dandelion seed to Ray's fruit store.";
	}, tutorial_5 : function(name) {
		return "Find and help ancient oak trees to increase your \"oak score\" - they need different players to plant near them.\n" + "<img src=\"images/tutorial/05-tutorial.png\"> ";
	}, tutorial_6 : function(name) {
		return "Drag and drop butterflies to find out who planted other plants.\n" + "<img src=\"images/tutorial/06-tutorial.png\"> ";
	}, welcome : function(name) {
		return "Welcome to Germination X " + name + ". \n" + "<img src=\"images/welcome.png\"> ";
	}, levelup1 : function(name) {
		return "Well done on planting all those ground cover plants " + name + "!\n" + "<img src=\"images/levelup1.png\"> ";
	}, levelup2 : function(name) {
		return name + ", you are a master gardener!\n" + "<img src=\"images/levelup2.png\"> ";
	}, levelup3 : function(name) {
		return name + ", you have proved your planting prowess, and are now an expert on companion planting and permaculture!\n" + "\nCongratulations, you have completed the current version of Germination X." + "\n\nYou have earned a final surprise as a gift, from now on you can pick and plant any type of plant." + "\n\nThankyou for playing!";
	}};
}}
fungi.StringMaker.__name__ = ["fungi","StringMaker"];
fungi.StringMaker.prototype.MsgMap = null;
fungi.StringMaker.prototype.NoteMap = null;
fungi.StringMaker.prototype.MsgToString = function(msg) {
	if(!Reflect.hasField(this.MsgMap,msg.code)) {
		return "oops - no message found for " + msg.code;
	}
	else {
		var owner = msg.owner;
		if(msg.type == "spirit") {
			owner = msg.from;
		}
		return this.MsgMap[msg.code](msg.from,msg.display,owner,msg.extra,msg.emotion);
	}
}
fungi.StringMaker.prototype.NoteToString = function(name,note) {
	if(!Reflect.hasField(this.NoteMap,note.code)) {
		return "oops - no note found for " + note.code;
	}
	else {
		return this.NoteMap[note.code](name);
	}
}
fungi.StringMaker.prototype.__class__ = fungi.StringMaker;
fungi.Fruit = function(pos,t,id) { if( pos === $_ ) return; {
	this.Type = t;
	this.State = "fruit-c";
	this.ID = id;
	this.OriginalPos = null;
	this.Spr = new truffle.Sprite(pos,Resources.Get(this.Type + "-" + this.State));
}}
fungi.Fruit.__name__ = ["fungi","Fruit"];
fungi.Fruit.prototype.Type = null;
fungi.Fruit.prototype.State = null;
fungi.Fruit.prototype.Spr = null;
fungi.Fruit.prototype.ID = null;
fungi.Fruit.prototype.OriginalPos = null;
fungi.Fruit.prototype.ChangeState = function(s) {
	this.State = s;
	this.Spr.ChangeBitmap(Resources.Get(this.Type + "-" + this.State));
}
fungi.Fruit.prototype.__class__ = fungi.Fruit;
truffle.Entity = function(w,pos) { if( w === $_ ) return; {
	this.LogicalPos = pos;
	this.Pos = w.ScreenTransform(this.LogicalPos);
	this.LastPos = w.ScreenTransform(this.LogicalPos);
	this.DestPos = w.ScreenTransform(this.LogicalPos);
	this.TilePos = null;
	this.Depth = this.Pos.z;
	this.DepthOffset = 0;
	this.Speed = 0;
	this.MoveTime = 0;
	this.UpdateFreq = 0;
	this.NeedsUpdate = false;
	this.OverridePos = false;
	w.Add(this);
	this.OnReachedDest = null;
}}
truffle.Entity.__name__ = ["truffle","Entity"];
truffle.Entity.prototype.TilePos = null;
truffle.Entity.prototype.LogicalPos = null;
truffle.Entity.prototype.Pos = null;
truffle.Entity.prototype.Depth = null;
truffle.Entity.prototype.NeedsUpdate = null;
truffle.Entity.prototype.Hidden = null;
truffle.Entity.prototype.Speed = null;
truffle.Entity.prototype.UpdateFreq = null;
truffle.Entity.prototype.MoveTime = null;
truffle.Entity.prototype.LastPos = null;
truffle.Entity.prototype.DestPos = null;
truffle.Entity.prototype.OverridePos = null;
truffle.Entity.prototype.OnReachedDest = null;
truffle.Entity.prototype.DepthOffset = null;
truffle.Entity.prototype.Destroy = function(world) {
	null;
}
truffle.Entity.prototype.SetTilePos = function(s) {
	this.TilePos = s;
}
truffle.Entity.prototype.SetLogicalPos = function(world,p) {
	this.LastPos = this.Pos;
	this.MoveTime = 0;
	this.LogicalPos = p;
	this.DestPos = world.ScreenTransform(this.LogicalPos);
}
truffle.Entity.prototype.Update = function(frame,world) {
	if(!this.OverridePos) {
		if(this.Speed == 0) {
			this.Pos = world.ScreenTransform(this.LogicalPos);
			this.Depth = this.Pos.z;
		}
		else {
			if(this.MoveTime < 1.0) {
				this.Pos = this.LastPos.Lerp(this.DestPos,this.MoveTime);
				this.MoveTime += this.Speed;
				if(this.OnReachedDest != null && this.MoveTime >= 1.0) {
					this.OnReachedDest();
					this.OnReachedDest = null;
				}
			}
			if(this.Pos.z < this.DestPos.z) this.Depth = this.DestPos.z;
			else this.Depth = this.Pos.z;
		}
	}
}
truffle.Entity.prototype.GetDepth = function() {
	return this.Depth + this.DepthOffset;
}
truffle.Entity.prototype.GetRoot = function() {
	return null;
}
truffle.Entity.prototype.UpdateMouse = function(x,y) {
	null;
}
truffle.Entity.prototype.OnSortScene = function(world,order) {
	this.GetRoot().SetDepth(order++);
	return order;
}
truffle.Entity.prototype.Hide = function(s) {
	this.Hidden = s;
	if(this.GetRoot()) this.GetRoot().Hide(s);
}
truffle.Entity.prototype.__class__ = truffle.Entity;
truffle.SpriteEntity = function(world,pos,t,viz) { if( world === $_ ) return; {
	if(viz == null) viz = true;
	truffle.Entity.call(this,world,pos);
	this.Spr = new truffle.Sprite(new truffle.Vec2(this.Pos.x,this.Pos.y),t,true,viz);
	world.AddSprite(this.Spr);
	this.Hide(!viz);
}}
truffle.SpriteEntity.__name__ = ["truffle","SpriteEntity"];
truffle.SpriteEntity.__super__ = truffle.Entity;
for(var k in truffle.Entity.prototype ) truffle.SpriteEntity.prototype[k] = truffle.Entity.prototype[k];
truffle.SpriteEntity.prototype.Spr = null;
truffle.SpriteEntity.prototype.Destroy = function(world) {
	truffle.Entity.prototype.Destroy.call(this,world);
	world.RemoveSprite(this.Spr);
}
truffle.SpriteEntity.prototype.Update = function(frame,world) {
	truffle.Entity.prototype.Update.call(this,frame,world);
	this.Spr.SetPos(new truffle.Vec2(this.Pos.x,this.Pos.y));
	this.Spr.Update(frame,null);
}
truffle.SpriteEntity.prototype.GetRoot = function() {
	return this.Spr;
}
truffle.SpriteEntity.prototype.__class__ = truffle.SpriteEntity;
truffle.Vec2 = function(px,py) { if( px === $_ ) return; {
	this.x = px;
	this.y = py;
}}
truffle.Vec2.__name__ = ["truffle","Vec2"];
truffle.Vec2.prototype.x = null;
truffle.Vec2.prototype.y = null;
truffle.Vec2.prototype.Add = function(other) {
	return new truffle.Vec2(this.x + other.x,this.y + other.y);
}
truffle.Vec2.prototype.Sub = function(other) {
	return new truffle.Vec2(this.x - other.x,this.y - other.y);
}
truffle.Vec2.prototype.Div = function(v) {
	return new truffle.Vec2(this.x / v,this.y / v);
}
truffle.Vec2.prototype.Mul = function(v) {
	return new truffle.Vec2(this.x * v,this.y * v);
}
truffle.Vec2.prototype.Mag = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
truffle.Vec2.prototype.Lerp = function(other,t) {
	return new truffle.Vec2(this.x * (1 - t) + other.x * t,this.y * (1 - t) + other.y * t);
}
truffle.Vec2.prototype.Eq = function(other) {
	return this.x == other.x && this.y == other.y;
}
truffle.Vec2.prototype.AsStr = function() {
	return Std.string(this.x) + ", " + Std.string(this.y);
}
truffle.Vec2.prototype.__class__ = truffle.Vec2;
fungi.Plant = function(world,plant,pos,servertile) { if( world === $_ ) return; {
	this.State = this.FixState(plant.state);
	this.PlantType = plant.type;
	truffle.SpriteEntity.call(this,world,pos,Resources.Get(this.PlantType + "-" + this.State),false);
	this.Id = Std.parseInt(plant.id);
	this.Owner = Std.parseInt(Reflect.field(plant,"owner-id"));
	this.OwnerName = plant.owner;
	this.PlantScale = 0;
	this.Fruits = [];
	this.Layer = plant.layer;
	this.GlowColour = 0;
	this.Spr.Hide(false);
	this.Rnd = new truffle.RndGen();
	this.Rnd.Seed(this.Id);
	this.ServerTile = new truffle.Vec2(servertile.x,servertile.y);
	this.ServerPos = new truffle.Vec2(plant.pos.x,plant.pos.y);
	this.GotSelect = false;
	if(this.PlantType == "oak") {
		this.LeavesSpr = new truffle.Sprite(new truffle.Vec2(0,0),Resources.Get(this.PlantType + "-leaves-" + this.State),true);
		world.AddSprite(this.LeavesSpr);
		this.LeavesSpr.Update(0,null);
		var cols = [new truffle.Vec3(1,0,0),new truffle.Vec3(0,1,0),new truffle.Vec3(0,0,1),new truffle.Vec3(1,1,0),new truffle.Vec3(1,0,1),new truffle.Vec3(0,1,1),new truffle.Vec3(0.5,0,1),new truffle.Vec3(1,0.5,0),new truffle.Vec3(0,1,0.5),new truffle.Vec3(0.5,0.5,0),new truffle.Vec3(0.5,0,0.5),new truffle.Vec3(0,0.5,0.5)];
		this.Spr.SetColour(cols[plant.size % cols.length]);
		this.Spr.Update(0,null);
	}
	{
		var _g1 = 0, _g = plant.fruit;
		while(_g1 < _g) {
			var i = _g1++;
			this.Fruit(world);
		}
	}
	this.OwnerUpdate(world);
}}
fungi.Plant.__name__ = ["fungi","Plant"];
fungi.Plant.__super__ = truffle.SpriteEntity;
for(var k in truffle.SpriteEntity.prototype ) fungi.Plant.prototype[k] = truffle.SpriteEntity.prototype[k];
fungi.Plant.prototype.Id = null;
fungi.Plant.prototype.Owner = null;
fungi.Plant.prototype.PlantScale = null;
fungi.Plant.prototype.Age = null;
fungi.Plant.prototype.Scale = null;
fungi.Plant.prototype.PlantType = null;
fungi.Plant.prototype.State = null;
fungi.Plant.prototype.Fruits = null;
fungi.Plant.prototype.Layer = null;
fungi.Plant.prototype.Star = null;
fungi.Plant.prototype.OwnerName = null;
fungi.Plant.prototype.Rnd = null;
fungi.Plant.prototype.ServerPos = null;
fungi.Plant.prototype.ServerTile = null;
fungi.Plant.prototype.GlowColour = null;
fungi.Plant.prototype.GotSelect = null;
fungi.Plant.prototype.LeavesSpr = null;
fungi.Plant.prototype.FixState = function(state) {
	if(state == "planted") return "grow-a";
	if(state == "fruit-a") return "grown";
	if(state == "fruit-b") return "grown";
	if(state == "fruit-c") return "grown";
	return state;
}
fungi.Plant.prototype.EnableSelection = function() {
	this.Spr.MouseUp(this,function(c) {
		c.GotSelect = true;
	});
}
fungi.Plant.prototype.OwnerUpdate = function(world) {
	if(this.Owner == world.MyID) {
		var CurrentCol = 10092441;
		if(this.GlowColour != CurrentCol) {
			this.GlowColour = CurrentCol;
			this.Spr.SetOffsetColour(new truffle.Vec3(32,32,32));
			this.Spr.Update(0,null);
		}
	}
}
fungi.Plant.prototype.StateUpdate = function(world,plant) {
	var s = this.FixState(plant.state);
	if(this.State != plant.state) {
		this.State = s;
		if(this.State != "decayed") {
			this.Spr.ChangeBitmap(Resources.Get(this.PlantType + "-" + this.State));
		}
		if(plant.state == "fruit-a" || plant.state == "fruit-b" || plant.state == "fruit-c") {
			{
				var _g = 0, _g1 = this.Fruits;
				while(_g < _g1.length) {
					var f = _g1[_g];
					++_g;
					f.ChangeState(plant.state);
				}
			}
		}
		this.OwnerUpdate(world);
	}
	var FruitDiff = plant.fruit - this.Fruits.length;
	if(FruitDiff != 0) {
		if(FruitDiff > 0) {
			{
				var _g = 0;
				while(_g < FruitDiff) {
					var i = _g++;
					this.Fruit(world);
				}
			}
		}
		else {
			{
				var _g1 = 0, _g = -FruitDiff;
				while(_g1 < _g) {
					var i = _g1++;
					this.Unfruit(world);
				}
			}
		}
	}
}
fungi.Plant.prototype.Destroy = function(world) {
	var world1 = (function($this) {
		var $r;
		var $t = world;
		if(Std["is"]($t,fungi.FungiWorld)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	truffle.SpriteEntity.prototype.Destroy.call(this,world1);
	{
		var _g = 0, _g1 = this.Fruits;
		while(_g < _g1.length) {
			var fruit = _g1[_g];
			++_g;
			world1.RemoveSprite(fruit.Spr);
		}
	}
	if(this.PlantType == "oak") {
		world1.RemoveSprite(this.LeavesSpr);
	}
}
fungi.Plant.prototype.Update = function(frame,world) {
	truffle.SpriteEntity.prototype.Update.call(this,frame,world);
	{
		var _g = 0, _g1 = this.Fruits;
		while(_g < _g1.length) {
			var fruit = _g1[_g];
			++_g;
			fruit.Spr.Update(frame,this.Spr.Transform);
		}
	}
	if(this.PlantType == "oak") {
		this.LeavesSpr.Update(frame,this.Spr.Transform);
	}
}
fungi.Plant.prototype.OnSortScene = function(world,order) {
	this.Spr.SetDepth(order++);
	{
		var _g = 0, _g1 = this.Fruits;
		while(_g < _g1.length) {
			var fruit = _g1[_g];
			++_g;
			world.SetChildIndex(fruit.Spr,order++);
		}
	}
	if(this.PlantType == "oak") {
		world.SetChildIndex(this.LeavesSpr,order++);
	}
	return order;
}
fungi.Plant.prototype.Fruit = function(world) {
	var Pos = Reflect.field(fungi.Plant.CentrePositions,this.PlantType).Add(this.Rnd.RndCircleVec2().Mul(32));
	var NewFruit = new fungi.Fruit(Pos,this.PlantType,0);
	world.AddSprite(NewFruit.Spr);
	this.Fruits.push(NewFruit);
	this.Update(0,world);
	NewFruit.Spr.MouseDown(this,function(p) {
		if(world.MyName != "" && world.CanPick()) {
			world.MovePlayer(p,function() {
				p.Fruits.remove(NewFruit);
				NewFruit.Spr.Pos = NewFruit.Spr.Pos.Add(new truffle.Vec2(p.Pos.x,p.Pos.y));
				world.GameGUI.Store.Pick(world,NewFruit);
				var ServerTileWidth = 5;
				var TilePosX = (function($this) {
					var $r;
					var $t = world.WorldPos.x;
					if(Std["is"]($t,Int)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this)) + Math.floor(p.LogicalPos.x / ServerTileWidth) - 1;
				var TilePosY = (function($this) {
					var $r;
					var $t = world.WorldPos.y;
					if(Std["is"]($t,Int)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this)) + Math.floor(p.LogicalPos.y / ServerTileWidth) - 1;
				world.Server.Request("pick/" + Std.string(TilePosX) + "/" + Std.string(TilePosY) + "/" + Std.string(p.Id) + "/" + Std.string(world.MyID),world,function(c,d) {
					if(d.ok == true) null;
				});
			},false);
		}
	});
}
fungi.Plant.prototype.Unfruit = function(world) {
	if(this.Fruits.length > 0) {
		var f = this.Rnd.Choose(this.Fruits);
		world.RemoveSprite(f.Spr);
		this.Fruits.remove(f);
	}
}
fungi.Plant.prototype.__class__ = fungi.Plant;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
fungi.GUI = function(w) { if( w === $_ ) return; {
	this.Msgs = [];
	this.MaxStories = 5;
	this.Rnd = new truffle.RndGen();
	this.TopItem = { };
	this.StrMkr = new fungi.StringMaker();
	this.Store = new fungi.FruitStore();
	this.NoteActive = false;
	this.NoteFrames = [];
	this.NotesRead = [];
	this.BuiltText = false;
	this.Instructions = 0;
	this.EmotionIndices = { LOVE : 0, HATE : 1, HOPE : 2, FEAR : 3, SATISFACTION : 4, RELIEF : 5, FEARS_CONFIRMED : 6, DISAPOINTMENT : 7, JOY : 8, DISTRESS : 9, HAPPY_FOR : 10, PITTY : 11, RESENTMENT : 12, GLOATING : 13, PRIDE : 14, SHAME : 15, GRATIFICATION : 16, REMORSE : 17, ADMIRATION : 18, REPROACH : 19, GRATITUDE : 20, ANGER : 21};
	this.Info = new truffle.Frame("",120,25,320,64);
	this.Info.SetTextSize(12);
	this.Info.R = 1;
	this.Info.G = 1;
	this.Info.B = 0.8;
	this.Info.UpdateText("Loading...");
	this.Info.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
	w.AddSprite(this.Info);
}}
fungi.GUI.__name__ = ["fungi","GUI"];
fungi.GUI.IntToColourTriple = function(col) {
	return new truffle.Vec3((col >> 16 & 255) / 255.0,(col >> 8 & 255) / 255.0,(col & 255) / 255.0);
}
fungi.GUI.prototype.Msgs = null;
fungi.GUI.prototype.MaxStories = null;
fungi.GUI.prototype.Rnd = null;
fungi.GUI.prototype.Info = null;
fungi.GUI.prototype.TopItem = null;
fungi.GUI.prototype.StrMkr = null;
fungi.GUI.prototype.EmotionIndices = null;
fungi.GUI.prototype.Store = null;
fungi.GUI.prototype.NoteActive = null;
fungi.GUI.prototype.NoteFrames = null;
fungi.GUI.prototype.NotesRead = null;
fungi.GUI.prototype.Instructions = null;
fungi.GUI.prototype.BuiltText = null;
fungi.GUI.prototype.MessagesEq = function(a,b) {
	return a.time == b.time;
}
fungi.GUI.prototype.GetLayerName = function(n) {
	switch(n) {
	case 0:{
		return "cover";
	}break;
	case 1:{
		return "shrub";
	}break;
	case 2:{
		return "tree";
	}break;
	}
	return "all";
}
fungi.GUI.prototype.BuildNote = function(w,Note,CallServer) {
	var c = this;
	var Box = new fungi.InfoBox(w,this.StrMkr.NoteToString(w.MyName,Note),160,170,256,256,function() {
		c.NoteActive = false;
		if(CallServer) {
			w.Server.Request("answer/" + w.MyID + "/" + Note.code + "/" + "0",w,function(c1,data) {
				null;
			});
			if(Note.code == "welcome") c.Instructions = 1;
		}
	},null);
	c = this;
	if(Note.code == "tutorial_0") {
		Box.AddButton(w,"More",function() {
			c.NoteActive = false;
			c.PostNote(w,{ code : "tutorial_1"},false);
		});
	}
	if(Note.code == "tutorial_1") {
		Box.AddButton(w,"More",function() {
			c.NoteActive = false;
			c.PostNote(w,{ code : "tutorial_2"},false);
		});
	}
	if(Note.code == "tutorial_2") {
		Box.AddButton(w,"More",function() {
			c.NoteActive = false;
			c.PostNote(w,{ code : "tutorial_3"},false);
		});
	}
	if(Note.code == "tutorial_3") {
		Box.AddButton(w,"More",function() {
			c.NoteActive = false;
			c.PostNote(w,{ code : "tutorial_4"},false);
		});
	}
	if(Note.code == "tutorial_4") {
		Box.AddButton(w,"More",function() {
			c.NoteActive = false;
			c.PostNote(w,{ code : "tutorial_5"},false);
		});
	}
	if(Note.code == "tutorial_5") {
		Box.AddButton(w,"More",function() {
			c.NoteActive = false;
			c.PostNote(w,{ code : "tutorial_6"},false);
		});
	}
}
fungi.GUI.prototype.PostNote = function(w,Note,CallServer) {
	if(!this.NoteActive) {
		this.BuildNote(w,Note,CallServer);
		this.NoteActive = true;
	}
}
fungi.GUI.prototype.ProcessNotes = function(w,Notes) {
	if(!this.NoteActive) {
		{
			var _g = 0;
			while(_g < Notes.length) {
				var Note = Notes[_g];
				++_g;
				var AlreadyRead = false;
				{
					var _g1 = 0, _g2 = this.NotesRead;
					while(_g1 < _g2.length) {
						var c = _g2[_g1];
						++_g1;
						if(c == Note.code) AlreadyRead = true;
					}
				}
				if(!Note.answer && !AlreadyRead) {
					this.PostNote(w,Note,true);
					this.NotesRead.push(Note.code);
				}
			}
		}
	}
}
fungi.GUI.prototype.UpdateTopBox = function(w) {
	if(!w.LoggedIn) {
		this.Info.UpdateText("Welcome to Germination X, it is now " + w.Season + ".");
	}
	else {
		this.Info.UpdateText("");
		if(!this.BuiltText) null;
		var fruit = w.PlayerInfo.seeds;
		fruit.reverse();
		this.Store.UpdateFruit(w,fruit);
		if(this.Instructions == 1 && this.Store.HaveFruit()) {
			this.Instructions = 2;
			var c = this;
			var Box = new fungi.InfoBox(w,"Great! Now drag your fruit from here to an empty space in the world to plant it",100,140,192,64,function() {
				c.Instructions = 3;
			},new truffle.Sprite(new truffle.Vec2(140,100),Resources.Get("arrup")));
		}
	}
}
fungi.GUI.prototype.BuildMessage = function(w,i,pos) {
	this.Msgs.push(new fungi.Message(w,i,pos,this));
}
fungi.GUI.prototype.Clear = function(w) {
	{
		var _g = 0, _g1 = this.Msgs;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			w.RemoveSprite(m.Block);
			w.RemoveSprite(m.Icon);
		}
	}
	this.Msgs = [];
}
fungi.GUI.prototype.UpdateMessages = function(w,d,time) {
	if(d.length > 0 && !this.MessagesEq(this.TopItem,d[0])) {
		this.TopItem = d[0];
		this.Clear(w);
		var pos = new truffle.Vec2(595,32);
		{
			var _g = 0;
			while(_g < d.length) {
				var i = d[_g];
				++_g;
				this.BuildMessage(w,i,pos);
				pos.y += 90;
			}
		}
	}
}
fungi.GUI.prototype.ShakeSpiritMessages = function(w) {
	var _g = 0, _g1 = this.Msgs;
	while(_g < _g1.length) {
		var m = _g1[_g];
		++_g;
		if(m.Type == "spirit") m.Shake(w.Time);
	}
}
fungi.GUI.prototype.UpdateMsgs = function(w,d,time) {
	this.UpdateTopBox(w);
	this.Rnd.Seed(0);
	this.Info.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
	this.UpdateMessages(w,d,time);
}
fungi.GUI.prototype.UpdateNotes = function(w,d) {
	this.ProcessNotes(w,d);
}
fungi.GUI.prototype.UpdateData = function(w,d,time) {
	this.UpdateMsgs(w,d.msgs,time);
	this.UpdateNotes(w,d.notes);
}
fungi.GUI.prototype.Update = function(w,time) {
	this.Store.Update(w);
	{
		var _g = 0, _g1 = this.Msgs;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			m.Update(w,time);
		}
	}
}
fungi.GUI.prototype.__class__ = fungi.GUI;
Resources = function() { }
Resources.__name__ = ["Resources"];
Resources.Get = function(name) {
	var tex = new truffle.TextureDesc();
	tex.Name = "images/game/" + name + ".png";
	return tex;
}
Resources.prototype.__class__ = Resources;
truffle.SkeletonEntity = function(world,pos) { if( world === $_ ) return; {
	truffle.Entity.call(this,world,pos);
	this.Root = null;
	this.Id = (function($this) {
		var $r;
		var $t = pos.y;
		if(Std["is"]($t,Int)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	this.bones = [];
}}
truffle.SkeletonEntity.__name__ = ["truffle","SkeletonEntity"];
truffle.SkeletonEntity.__super__ = truffle.Entity;
for(var k in truffle.Entity.prototype ) truffle.SkeletonEntity.prototype[k] = truffle.Entity.prototype[k];
truffle.SkeletonEntity.prototype.Root = null;
truffle.SkeletonEntity.prototype.g = null;
truffle.SkeletonEntity.prototype.bones = null;
truffle.SkeletonEntity.prototype.Id = null;
truffle.SkeletonEntity.prototype.GetClosest = function(pos,bones) {
	var dist = 99999.0;
	var closest = null;
	{ var $it0 = bones.iterator();
	while( $it0.hasNext() ) { var b = $it0.next();
	{
		var d = pos.Sub(b.Pos).Mag();
		if(d > 0.00001 && d < dist) {
			dist = d;
			closest = b;
		}
	}
	}}
	return closest;
}
truffle.SkeletonEntity.prototype.FindTop = function(desc) {
	var highest = 9999;
	var top = 0;
	var c = 0;
	{
		var _g = 0;
		while(_g < desc.length) {
			var d = desc[_g];
			++_g;
			if(d.position.y < highest) {
				highest = d.position.y;
				top = c;
			}
			c++;
		}
	}
	return top;
}
truffle.SkeletonEntity.prototype.BuildBones = function(desc) {
	var bones = new Array();
	{
		var _g = 0;
		while(_g < desc.length) {
			var d = desc[_g];
			++_g;
			var b = new truffle.Bone(new truffle.Vec2(-Std.parseInt(d.position.x),-Std.parseInt(d.position.y)),Resources.Get("test"));
			b.LoadFromURL(d.name);
			bones.push(b);
		}
	}
	return bones;
}
truffle.SkeletonEntity.prototype.CalculateMST = function(bones,root) {
	var g = new truffle.Graph(new List());
	var x = 0;
	var y = 0;
	{
		var _g = 0;
		while(_g < bones.length) {
			var xb = bones[_g];
			++_g;
			{
				var _g1 = 0;
				while(_g1 < bones.length) {
					var yb = bones[_g1];
					++_g1;
					g.AddEdge(new truffle.Edge(x,y,xb.Pos.Sub(yb.Pos).Mag()));
					y++;
				}
			}
			y = 0;
			x++;
		}
	}
	return g.MST(root);
}
truffle.SkeletonEntity.prototype.Build = function(world,desc) {
	{
		var _g = 0, _g1 = this.bones;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			world.RemoveSprite(b);
		}
	}
	this.bones = this.BuildBones(desc);
	var top = this.FindTop(desc);
	this.g = this.CalculateMST(this.bones,top);
	this.Root = this.bones[top];
	world.AddSprite(this.Root);
	var relative = new Array();
	{
		var _g1 = 0, _g = this.bones.length;
		while(_g1 < _g) {
			var i = _g1++;
			relative.push(new truffle.Vec2(0,0));
		}
	}
	{ var $it0 = this.g.Edges.iterator();
	while( $it0.hasNext() ) { var edge = $it0.next();
	{
		this.bones[edge.From].AddChild(world,this.bones[edge.To]);
		relative[edge.To] = this.bones[edge.From].Pos.Sub(this.bones[edge.To].Pos);
	}
	}}
	{
		var _g1 = 0, _g = this.bones.length;
		while(_g1 < _g) {
			var b = _g1++;
			this.bones[b].Pos = relative[b].Mul(1.0);
			this.bones[b].BindPos = this.bones[b].Pos;
		}
	}
}
truffle.SkeletonEntity.prototype.OnSortScene = function(world,order) {
	this.Root.Recurse(function(b,depth) {
		b.SetDepth(order++);
	});
	return order;
}
truffle.SkeletonEntity.prototype.Update = function(frame,world) {
	truffle.Entity.prototype.Update.call(this,frame,world);
	this.Root.SetPos(new truffle.Vec2(this.Pos.x,this.Pos.y));
	this.Root.Update(frame,null);
}
truffle.SkeletonEntity.prototype.Draw = function(world) {
	null;
}
truffle.SkeletonEntity.prototype.GetRoot = function() {
	return this.Root;
}
truffle.SkeletonEntity.prototype.__class__ = truffle.SkeletonEntity;
fungi.DrawnSpirit = function(world,name,pos) { if( world === $_ ) return; {
	truffle.SkeletonEntity.call(this,world,pos);
	this.Name = name;
	this.HighestEmotion = "Not calculated yet";
	this.Speed = 0.02;
	this.UpdateFreq = 2;
	this.LastData = [];
	this.Rnd = new truffle.RndGen();
	this.TotalEmotion = 0;
	this.EmotionColour = 0;
	this.HighestScore = 0;
	this.MessageTime = -1;
	this.LastMsgTxt = "";
	this.Mood = 0;
	this.Message = new truffle.Frame("",0,0,128,64);
	this.Message.SetTextSize(10);
	this.Message.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
	this.Message.R = 1;
	this.Message.G = 1;
	this.Message.B = 0.8;
	world.AddSprite(this.Message);
	this.Message.Hide(true);
	this.EmotionalColours = { JOY : [this.ToCol(255,224,1),this.ToCol(255,224,1),this.ToCol(255,126,2),this.ToCol(0,155,2)], FEAR : [this.ToCol(128,128,128),this.ToCol(128,64,2),this.ToCol(97,0,98),this.ToCol(220,2,1)], LOVE : [this.ToCol(225,224,1),this.ToCol(220,3,0),this.ToCol(225,117,225),this.ToCol(0,115,2)], HATE : [this.ToCol(128,128,128),this.ToCol(128,64,2),this.ToCol(97,0,98),this.ToCol(220,2,1)], PRIDE : [this.ToCol(29,201,33)]};
	this.DesiredPos = new truffle.Vec2(this.LogicalPos.x,this.LogicalPos.y);
	fungi.DrawnSpirit.EmotionIndices = { LOVE : 0, HATE : 1, HOPE : 2, FEAR : 3, SATISFACTION : 4, RELIEF : 5, FEARS_CONFIRMED : 6, DISAPOINTMENT : 7, JOY : 8, DISTRESS : 9, HAPPY_FOR : 10, PITTY : 11, RESENTMENT : 12, GLOATING : 13, PRIDE : 14, SHAME : 15, GRATIFICATION : 16, REMORSE : 17, ADMIRATION : 18, REPROACH : 19, GRATITUDE : 20, ANGER : 21};
	this.RawEmotions = { LOVE : 0, HATE : 0, HOPE : 0, FEAR : 0, SATISFACTION : 0, RELIEF : 0, FEARS_CONFIRMED : 0, DISAPOINTMENT : 0, JOY : 0, DISTRESS : 0, HAPPY_FOR : 0, PITTY : 0, RESENTMENT : 0, GLOATING : 0, PRIDE : 0, SHAME : 0, GRATIFICATION : 0, REMORSE : 0, ADMIRATION : 0, REPROACH : 0, GRATITUDE : 0, ANGER : 0};
	this.Emotions = { LOVE : 0, HATE : 0, HOPE : 0, FEAR : 0, SATISFACTION : 0, RELIEF : 0, FEARS_CONFIRMED : 0, DISAPOINTMENT : 0, JOY : 0, DISTRESS : 0, HAPPY_FOR : 0, PITTY : 0, RESENTMENT : 0, GLOATING : 0, PRIDE : 0, SHAME : 0, GRATIFICATION : 0, REMORSE : 0, ADMIRATION : 0, REPROACH : 0, GRATITUDE : 0, ANGER : 0};
}}
fungi.DrawnSpirit.__name__ = ["fungi","DrawnSpirit"];
fungi.DrawnSpirit.__super__ = truffle.SkeletonEntity;
for(var k in truffle.SkeletonEntity.prototype ) fungi.DrawnSpirit.prototype[k] = truffle.SkeletonEntity.prototype[k];
fungi.DrawnSpirit.EmotionIndices = null;
fungi.DrawnSpirit.GetEmotionColour = function(Emotion) {
	return new truffle.Vec3(0,0,0);
}
fungi.DrawnSpirit.IntToColourTriple = function(col) {
	return new truffle.Vec3((col >> 16 & 255) / 255.0,(col >> 8 & 255) / 255.0,(col & 255) / 255.0);
}
fungi.DrawnSpirit.prototype.Name = null;
fungi.DrawnSpirit.prototype.Debug = null;
fungi.DrawnSpirit.prototype.RawEmotions = null;
fungi.DrawnSpirit.prototype.Emotions = null;
fungi.DrawnSpirit.prototype.DesiredPos = null;
fungi.DrawnSpirit.prototype.LastData = null;
fungi.DrawnSpirit.prototype.Message = null;
fungi.DrawnSpirit.prototype.Emitter = null;
fungi.DrawnSpirit.prototype.EmotionalColours = null;
fungi.DrawnSpirit.prototype.Rnd = null;
fungi.DrawnSpirit.prototype.HighestEmotion = null;
fungi.DrawnSpirit.prototype.TotalEmotion = null;
fungi.DrawnSpirit.prototype.EmotionColour = null;
fungi.DrawnSpirit.prototype.HighestScore = null;
fungi.DrawnSpirit.prototype.MessageTime = null;
fungi.DrawnSpirit.prototype.LastMsgTxt = null;
fungi.DrawnSpirit.prototype.Mood = null;
fungi.DrawnSpirit.prototype.ToCol = function(r,g,b) {
	return new truffle.Vec3(r / 255.0,g / 255.0,b / 255.0);
}
fungi.DrawnSpirit.prototype.UpdateEmitter = function() {
	var Colours = Reflect.field(this.EmotionalColours,this.HighestEmotion);
	if(this.HighestEmotion != "" && Colours != null) {
		{
			var _g1 = 0, _g = this.Emitter.Colours.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.Emitter.Colours[i] = Colours[this.Rnd.RndInt() % Colours.length];
			}
		}
		this.Emitter.RecycleRate = 80;
	}
	else {
		this.Emitter.RecycleRate = 0;
	}
}
fungi.DrawnSpirit.prototype.BuildDebug = function(c) {
	this.Debug = new truffle.Frame("nowt yet.",this.Pos.x - 200,this.Pos.y - 25,140,150);
	this.Debug.Hide(true);
	c.AddSprite(this.Debug);
}
fungi.DrawnSpirit.prototype.AddMsg = function(msg,text) {
	this.Message.UpdateText(text);
	this.Message.Hide(false);
	var Col = fungi.DrawnSpirit.GetEmotionColour(msg.emotion);
	this.Message.R = Col.x;
	this.Message.G = Col.y;
	this.Message.B = Col.z;
	this.MessageTime = Date.now().getSeconds() + 30;
}
fungi.DrawnSpirit.prototype.OnSortScene = function(world,order) {
	var order1 = truffle.SkeletonEntity.prototype.OnSortScene.call(this,world,order);
	this.Message.SetDepth(order1++);
	return order1;
}
fungi.DrawnSpirit.prototype.UpdateDebug = function(e) {
	var ee = e.fatemotions.content;
	if(ee == null) return;
	this.Mood = Std.parseFloat(ee[0].content[0]);
	var text = this.Name + "\nMood:" + ee[0].content[0] + "\n";
	text += "Highest Emotion:" + this.HighestEmotion + "=" + this.HighestScore + "\n";
	text += "Total Emotions:" + this.TotalEmotion + "\n";
	text += "Causes:\n";
	{
		var _g1 = 1, _g = ee.length;
		while(_g1 < _g) {
			var i = _g1++;
			text += ee[i].attrs.type + " " + ee[i].attrs.direction + "\n";
		}
	}
	text += "Messages:\n";
	var acs = (function($this) {
		var $r;
		var $t = e.fatactions;
		if(Std["is"]($t,Array)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	{
		var _g1 = 0, _g = acs.length;
		while(_g1 < _g) {
			var i = _g1++;
			text += acs[i].msg + "\n";
		}
	}
	this.Debug.UpdateText(text);
	this.Debug.UpdatePosition(Std["int"](this.Pos.x - 200),Std["int"](this.Pos.y - 25));
}
fungi.DrawnSpirit.prototype.UpdateEmotions = function(e,world) {
	var TilePos = new truffle.Vec2(e.emotionalloc.tile.x,e.emotionalloc.tile.y);
	this.SetTilePos(TilePos);
	var LocalPos = new truffle.Vec2(e.emotionalloc.pos.x,e.emotionalloc.pos.y);
	var dst = new truffle.Vec2((TilePos.x - world.WorldPos.x + 1) * 5,(TilePos.y - world.WorldPos.y + 1) * 5);
	dst = new truffle.Vec2(dst.x + LocalPos.x,dst.y + LocalPos.y);
	if(dst.x != this.DesiredPos.x || dst.y != this.DesiredPos.y) {
		if(world.GetOther(this,"fungi.Spirit",dst)) {
			dst = dst.Add(new truffle.Vec2(world.MyRndGen.Choose([-1,0,1]),world.MyRndGen.Choose([-1,0,1])));
		}
		this.SetLogicalPos(world,new truffle.Vec3(dst.x,dst.y,3));
	}
	this.RawEmotions = e.emotions;
	this.Emotions = this.RawEmotions;
	this.TotalEmotion = 0;
	{
		var _g = 0, _g1 = Reflect.fields(this.RawEmotions);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.TotalEmotion += Reflect.field(this.RawEmotions,f);
		}
	}
	this.HighestEmotion = "";
	this.HighestScore = 0;
	{
		var _g = 0, _g1 = Reflect.fields(this.Emotions);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			var Score = Reflect.field(this.Emotions,f);
			if(Score > this.HighestScore) {
				this.HighestScore = Score;
				this.HighestEmotion = f;
			}
		}
	}
	if(!this.Debug.IsHidden()) this.UpdateDebug(e);
	var msg = Reflect.field(e,"last-message");
	if(msg.code != null) {
		var txt = world.GameGUI.StrMkr.MsgToString(msg);
		if(txt != this.LastMsgTxt) {
			this.AddMsg(msg,txt);
			this.LastMsgTxt = txt;
		}
	}
}
fungi.DrawnSpirit.prototype.Hide = function(s) {
	truffle.SkeletonEntity.prototype.Hide.call(this,s);
	if(s) {
		this.Debug.Hide(s);
		this.Message.Hide(s);
	}
}
fungi.DrawnSpirit.prototype.Update = function(frame,world) {
	var world1 = (function($this) {
		var $r;
		var $t = world;
		if(Std["is"]($t,fungi.FungiWorld)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	truffle.SkeletonEntity.prototype.Update.call(this,frame,world1);
	if(!this.Message.IsHidden()) {
		this.Rnd.Seed(0);
		var x = Math.floor(this.Root.Pos.x - 192);
		if(this.Root.Pos.x < 320) x = Math.floor(this.Root.Pos.x + 64);
		this.Message.UpdatePosition(x,Math.floor(this.Root.Pos.y - 20));
		this.Message.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
		if(Date.now().getSeconds() > this.MessageTime) this.Message.Hide(true);
	}
	var EmotionIndex = Reflect.field(fungi.DrawnSpirit.EmotionIndices,this.HighestEmotion);
	this.EmotionColour += this.HighestScore / 100;
	var c = this;
	var excitement = this.Emotions.LOVE + this.Emotions.ADMIRATION;
	if(excitement > 10) excitement = 10;
	var irritation = this.Emotions.HATE + this.Emotions.DISTRESS;
	if(irritation > 5) irritation = 5;
}
fungi.DrawnSpirit.prototype.__class__ = fungi.DrawnSpirit;
truffle.interfaces.ServerRequest = function(a,b,c) { if( a === $_ ) return; {
	this.URL = a;
	this.Context = b;
	this.Callback = c;
}}
truffle.interfaces.ServerRequest.__name__ = ["truffle","interfaces","ServerRequest"];
truffle.interfaces.ServerRequest.prototype.URL = null;
truffle.interfaces.ServerRequest.prototype.Context = null;
truffle.interfaces.ServerRequest.prototype.Callback = null;
truffle.interfaces.ServerRequest.prototype.__class__ = truffle.interfaces.ServerRequest;
if(typeof hxjson2=='undefined') hxjson2 = {}
hxjson2.JSONParseError = function(message,location,text) { if( message === $_ ) return; {
	if(text == null) text = "";
	if(location == null) location = 0;
	if(message == null) message = "";
	this.name = "JSONParseError";
	this._location = location;
	this._text = text;
	this.message = message;
}}
hxjson2.JSONParseError.__name__ = ["hxjson2","JSONParseError"];
hxjson2.JSONParseError.prototype._location = null;
hxjson2.JSONParseError.prototype._text = null;
hxjson2.JSONParseError.prototype.name = null;
hxjson2.JSONParseError.prototype.text = null;
hxjson2.JSONParseError.prototype.location = null;
hxjson2.JSONParseError.prototype.message = null;
hxjson2.JSONParseError.prototype.getlocation = function() {
	return this._location;
}
hxjson2.JSONParseError.prototype.gettext = function() {
	return this._text;
}
hxjson2.JSONParseError.prototype.toString = function() {
	return this.name + ": " + this.message + " at position: " + this._location + " near \"" + this._text + "\"";
}
hxjson2.JSONParseError.prototype.__class__ = hxjson2.JSONParseError;
fungi.Message = function(w,i,pos,GameGUI) { if( w === $_ ) return; {
	this.ShakeTime = 0;
	this.Type = i.type;
	this.Shaking = false;
	this.Rnd = new truffle.RndGen();
	this.OriginalPos = new truffle.Vec2(pos.x,pos.y);
	this.Seed = Std["int"](i.time);
	this.Rnd.Seed(this.Seed);
	this.Block = new truffle.Frame("",pos.x,pos.y,128,64);
	this.Block.ExpandLeft = 70;
	this.Block.SetTextSize(10);
	this.Block.UpdateText(GameGUI.StrMkr.MsgToString(i));
	var Colour = new truffle.Vec3(0.8,0.9,0.7);
	if(i.type == "spirit") Colour = fungi.Spirit.GetEmotionColour(i.emotion);
	this.Block.R = Colour.x;
	this.Block.G = Colour.y;
	this.Block.B = Colour.z;
	this.Block.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
	w.AddSprite(this.Block);
	this.Icon = this.MakeIcon(new truffle.Vec2(pos.x - 20,pos.y + 32),i.type,i.from,Colour);
	w.AddSprite(this.Icon);
	if(i.type == "plant" && GameGUI.Instructions == 3) {
		GameGUI.Instructions = 4;
		var x = Std["int"](pos.x - 192 - 60);
		var y = Std["int"](pos.y);
		var Box = new fungi.InfoBox(w,"Click on these messages to go to the plants",x,y,128,64,function() {
			GameGUI.Instructions = 5;
		},new truffle.Sprite(new truffle.Vec2(x + 124 + 20,y + 20),Resources.Get("arrright")));
	}
	this.Block.MouseDown(this,function(c) {
		if(!GameGUI.Store.Carrying()) {
			w.SetWorldPos(new truffle.Vec3(i.tile.x,i.tile.y,0),new truffle.Vec2(0,0));
			w.Highlight(new truffle.Vec2(i.pos.x + 5,i.pos.y + 5));
		}
	});
	var ToolTip = null;
	var x = pos.x;
	var y = pos.y;
	this.Block.MouseOut(this,function(c) {
		if(ToolTip != null) {
			w.RemoveSprite(ToolTip);
		}
	});
	this.Block.MouseOver(this,function(c) {
		if(!GameGUI.Store.Carrying()) {
			ToolTip = new truffle.Frame("Click to go to this plant",x,y,100,20);
			w.AddSprite(ToolTip);
		}
	});
	if(i.type == "spirit") {
		if(GameGUI.Instructions == 5) {
			GameGUI.Instructions = 6;
			var x1 = Std["int"](pos.x - 256 - 60);
			var y1 = Std["int"](pos.y);
			var Box = new fungi.InfoBox(w,"Drop fruit on these messages to send gifts to players or spirits",x1,y1,192,64,function() {
				GameGUI.Instructions = 7;
			},new truffle.Sprite(new truffle.Vec2(x1 + 186 + 20,y1 + 20),Resources.Get("arrright")));
		}
		var ToolTip1 = null;
		var x1 = pos.x;
		var y1 = pos.y;
		this.Block.MouseOver(this,function(c) {
			if(GameGUI.Store.Carrying()) {
				if(fungi.Message.IsGift(i.code)) {
					ToolTip1 = new truffle.Frame("Give fruit to " + i.extra[0],x1,y1,100,20);
				}
				else {
					ToolTip1 = new truffle.Frame("Give fruit to this spirit",x1,y1,100,20);
				}
				w.AddSprite(ToolTip1);
			}
			else {
				ToolTip1 = new truffle.Frame("Click to go to this plant",x1,y1,100,20);
				w.AddSprite(ToolTip1);
			}
		});
		this.Block.MouseOut(this,function(c) {
			if(ToolTip1 != null) {
				w.RemoveSprite(ToolTip1);
			}
		});
		this.Block.MouseUp(this,function(c) {
			if(GameGUI.Store.Carrying()) {
				c.Shake(w.Time);
				var Fruit = GameGUI.Store.Drop(w);
				if(fungi.Message.IsGift(i.code)) {
					w.Server.Request("gift/" + w.MyID + "/" + Fruit.ID + "/" + i.extra[1],c,function(c1,data) {
						null;
					});
				}
				else {
					w.Server.Request("offering/" + w.MyID + "/" + Fruit.ID + "/" + i.from,c,function(c1,data) {
						null;
					});
				}
			}
		});
	}
}}
fungi.Message.__name__ = ["fungi","Message"];
fungi.Message.IsGift = function(code) {
	return code == "your_plant_doesnt_like" || code == "i_am_detrimented_by" || code == "i_am_detrimental_to" || code == "i_am_benefitted_by" || code == "i_am_beneficial_to" || code == "needs_help" || code == "ive_asked_x_for_help";
}
fungi.Message.prototype.Type = null;
fungi.Message.prototype.Block = null;
fungi.Message.prototype.Icon = null;
fungi.Message.prototype.OriginalPos = null;
fungi.Message.prototype.ShakeTime = null;
fungi.Message.prototype.Shaking = null;
fungi.Message.prototype.Rnd = null;
fungi.Message.prototype.Seed = null;
fungi.Message.prototype.MakeIcon = function(Pos,Type,Icon,Colour) {
	if(Type == "plant" || Type == "spirit") {
		var s = new truffle.Sprite(Pos,Resources.Get(""));
		s.LoadFromURL("images/icons/" + Icon + ".png");
		if(Type == "spirit") {
			s.SetColour(new truffle.Vec3(Colour.x,Colour.y,Colour.z));
			s.Update(0,null);
		}
		return s;
	}
	else if(Type == "player") {
		var s = new truffle.Sprite(Pos,Resources.Get(""));
		return s;
	}
	else return new truffle.Sprite(Pos,Resources.Get("test"));
}
fungi.Message.prototype.Shake = function(time) {
	this.Shaking = true;
	this.ShakeTime = time + 10;
}
fungi.Message.prototype.Update = function(w,time) {
	if(this.Shaking) {
		this.Rnd.Seed(this.Seed + time * 43);
		var Shake = this.Rnd.RndCircleVec2().Mul(4);
		var x = Std["int"](this.OriginalPos.x + Shake.x);
		var y = Std["int"](this.OriginalPos.y + Shake.y);
		this.Block.UpdatePosition(x,y);
		this.Rnd.Seed(this.Seed);
		this.Block.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
		this.Icon.SetPos(new truffle.Vec2(x - 25,y + 25));
		this.Icon.Update(0,null);
		if(this.ShakeTime < time) {
			this.Shaking = false;
			this.Block.UpdatePosition(Std["int"](this.OriginalPos.x),Std["int"](this.OriginalPos.y));
			this.Rnd.Seed(this.Seed);
			this.Block.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
			this.Icon.SetPos(this.OriginalPos.Add(new truffle.Vec2(-25,25)));
			this.Icon.Update(0,null);
		}
	}
}
fungi.Message.prototype.__class__ = fungi.Message;
fungi.AvatarEntity = function(world,name,id,pos,layer,flowered) { if( world === $_ ) return; {
	this.FrameNum = id % 5 + 1;
	this.Variation = Std.string(id % 3 + 1);
	truffle.SpriteEntity.call(this,world,pos,Resources.Get("mand-" + this.Variation + "-0"));
	this.Speed = 0.1;
	this.UpdateFreq = 5;
	this.NeedsUpdate = true;
	this.ID = id;
	this.Layer = layer;
	this.Flowered = flowered;
	this.DepthOffset = 1;
	this.Name = name;
	if(this.Name == null) {
		this.Name = "no name";
	}
	this.NameTag = new truffle.Frame(this.Name,Std["int"](pos.x),Std["int"](pos.y),120,20,true);
	world.AddSprite(this.NameTag);
	var f = Std.string(flowered);
	this.Hat = new truffle.Sprite(new truffle.Vec2(0,0),Resources.Get("mand-tree-" + f),true);
	if(this.Layer == 0) this.Hat = new truffle.Sprite(new truffle.Vec2(0,0),Resources.Get("mand-cover-" + f),true);
	if(this.Layer == 1) this.Hat = new truffle.Sprite(new truffle.Vec2(0,0),Resources.Get("mand-shrub-" + f),true);
	world.AddSprite(this.Hat);
	var HatColour = new truffle.Vec3(0.4,0.6,0.4);
	var BodyColour = new truffle.Vec3(0.7,0.5,0.4);
	var v1 = id * 30 % 100 / 500;
	var v2 = id * 100 % 100 / 500;
	var v3 = id * 340 % 100 / 500;
	HatColour.x += v1;
	HatColour.y -= v1;
	HatColour.y += v2;
	HatColour.z -= v2;
	BodyColour.x += v3;
	BodyColour.y -= v3;
	BodyColour.y += v1;
	BodyColour.z -= v1;
	this.Hat.SetColour(HatColour);
	this.Spr.SetColour(BodyColour);
}}
fungi.AvatarEntity.__name__ = ["fungi","AvatarEntity"];
fungi.AvatarEntity.__super__ = truffle.SpriteEntity;
for(var k in truffle.SpriteEntity.prototype ) fungi.AvatarEntity.prototype[k] = truffle.SpriteEntity.prototype[k];
fungi.AvatarEntity.prototype.Name = null;
fungi.AvatarEntity.prototype.NameTag = null;
fungi.AvatarEntity.prototype.ID = null;
fungi.AvatarEntity.prototype.Variation = null;
fungi.AvatarEntity.prototype.FrameNum = null;
fungi.AvatarEntity.prototype.Hat = null;
fungi.AvatarEntity.prototype.Layer = null;
fungi.AvatarEntity.prototype.Flowered = null;
fungi.AvatarEntity.prototype.ChangeLayer = function(layer,flowered) {
	if(layer != this.Layer || flowered != this.Flowered) {
		this.Layer = layer;
		this.Flowered = flowered;
		var f = Std.string(this.Flowered);
		if(this.Layer == 0) this.Hat.ChangeBitmap(Resources.Get("mand-cover-" + f));
		if(this.Layer == 1) this.Hat.ChangeBitmap(Resources.Get("mand-shrub-" + f));
		if(this.Layer > 1) this.Hat.ChangeBitmap(Resources.Get("mand-tree-" + f));
	}
}
fungi.AvatarEntity.prototype.Update = function(time,world) {
	truffle.SpriteEntity.prototype.Update.call(this,time,world);
	this.NameTag.UpdatePosition(Std["int"](this.Spr.Pos.x - this.NameTag.Width / 2),Std["int"](this.Spr.Pos.y - 120));
	this.FrameNum++;
	var Anim = 0;
	if(this.FrameNum > 5) this.FrameNum = 1;
	if(this.FrameNum < 3) Anim = this.FrameNum;
	else Anim = 3 - (this.FrameNum - 3);
	this.Spr.ChangeBitmap(Resources.Get("mand-" + this.Variation + "-" + Std.string(Anim)));
	this.Hat.SetPos(new truffle.Vec2(0,Anim / 2 - 3));
	this.Hat.Update(0,this.Spr.GetTx());
}
fungi.AvatarEntity.prototype.Destroy = function(world) {
	truffle.SpriteEntity.prototype.Destroy.call(this,world);
	var world1 = (function($this) {
		var $r;
		var $t = world;
		if(Std["is"]($t,truffle.World)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	world1.RemoveSprite(this.NameTag);
	world1.RemoveSprite(this.Hat);
}
fungi.AvatarEntity.prototype.OnSortScene = function(world,order) {
	this.Hat.SetDepth(order++);
	this.NameTag.SetDepth(order++);
	this.Spr.SetDepth(order++);
	return order;
}
fungi.AvatarEntity.prototype.__class__ = fungi.AvatarEntity;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
hxjson2.JSONToken = function(type,value) { if( type === $_ ) return; {
	this.type = type == null?hxjson2.JSONTokenType.UNKNOWN:type;
	this.value = value;
}}
hxjson2.JSONToken.__name__ = ["hxjson2","JSONToken"];
hxjson2.JSONToken.prototype.type = null;
hxjson2.JSONToken.prototype.value = null;
hxjson2.JSONToken.prototype.__class__ = hxjson2.JSONToken;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
truffle.ClusterEntity = function(world,pos) { if( world === $_ ) return; {
	truffle.Entity.call(this,world,pos);
	this.Id = (function($this) {
		var $r;
		var $t = pos.y;
		if(Std["is"]($t,Int)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	this.Sprites = [];
}}
truffle.ClusterEntity.__name__ = ["truffle","ClusterEntity"];
truffle.ClusterEntity.__super__ = truffle.Entity;
for(var k in truffle.Entity.prototype ) truffle.ClusterEntity.prototype[k] = truffle.Entity.prototype[k];
truffle.ClusterEntity.prototype.Sprites = null;
truffle.ClusterEntity.prototype.Id = null;
truffle.ClusterEntity.prototype.Root = null;
truffle.ClusterEntity.prototype.strSort = function(a,b) {
	a = a.toLowerCase();
	b = b.toLowerCase();
	if(a < b) return -1;
	if(a > b) return 1;
	return 0;
}
truffle.ClusterEntity.prototype.Build = function(world,desc) {
	{
		var _g = 0, _g1 = this.Sprites;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			world.RemoveSprite(s);
		}
	}
	var filenames = [];
	{
		var _g = 0;
		while(_g < desc.length) {
			var b = desc[_g];
			++_g;
			filenames.push(b.name);
		}
	}
	filenames.sort($closure(this,"strSort"));
	{
		var _g = 0;
		while(_g < filenames.length) {
			var b = filenames[_g];
			++_g;
			var s = new truffle.Bone(new truffle.Vec2(0,0),Resources.Get("test"));
			s.LoadFromURL(b);
			s.InheritTransform = false;
			this.Sprites.push(s);
		}
	}
	{
		var _g1 = 1, _g = this.Sprites.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.Sprites[i - 1].AddChild(world,this.Sprites[i]);
		}
	}
	this.Root = this.Sprites[0];
	world.AddSprite(this.Root);
}
truffle.ClusterEntity.prototype.Hide = function(s) {
	if(this.Hidden != s) {
		this.Hidden = s;
		{
			var _g = 0, _g1 = this.Sprites;
			while(_g < _g1.length) {
				var Spr = _g1[_g];
				++_g;
				Spr.Hide(s);
			}
		}
	}
}
truffle.ClusterEntity.prototype.OnSortScene = function(world,order) {
	{
		var _g1 = 0, _g = this.Sprites.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.Sprites[this.Sprites.length - i - 1].SetDepth(order++);
		}
	}
	return order;
}
truffle.ClusterEntity.prototype.Update = function(frame,world) {
	truffle.Entity.prototype.Update.call(this,frame,world);
	this.Root.SetPos(new truffle.Vec2(this.Pos.x,this.Pos.y));
	this.Root.Update(frame,null);
}
truffle.ClusterEntity.prototype.GetRoot = function() {
	return this.Root;
}
truffle.ClusterEntity.prototype.__class__ = truffle.ClusterEntity;
fungi.FruitStore = function(p) { if( p === $_ ) return; {
	this.CarryingFruit = null;
	this.PickedFruit = null;
	this.FruitData = [];
	this.FruitObjs = [];
	this.PingBack = 2;
	this.NextPos = new truffle.Vec2(140,50);
}}
fungi.FruitStore.__name__ = ["fungi","FruitStore"];
fungi.FruitStore.prototype.FruitData = null;
fungi.FruitStore.prototype.FruitObjs = null;
fungi.FruitStore.prototype.CarryingFruit = null;
fungi.FruitStore.prototype.PickedFruit = null;
fungi.FruitStore.prototype.PingBack = null;
fungi.FruitStore.prototype.NextPos = null;
fungi.FruitStore.prototype.Carrying = function() {
	return this.CarryingFruit != null;
}
fungi.FruitStore.prototype.HaveFruit = function() {
	return this.FruitObjs.length > 0;
}
fungi.FruitStore.prototype.FruitArraysEq = function(a,b) {
	if(a.length != b.length) return false;
	{
		var _g1 = 0, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a[i].id != b[i].id) return false;
		}
	}
	return true;
}
fungi.FruitStore.prototype.UpdateFruit = function(w,fruit) {
	if(!this.FruitArraysEq(this.FruitData,fruit)) {
		this.FruitData = fruit;
		{
			var _g = 0, _g1 = this.FruitObjs;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				w.RemoveSprite(f.Spr);
			}
		}
		this.FruitObjs = [];
		this.NextPos.x = 140;
		this.NextPos.y = 50;
		{
			var _g = 0, _g1 = this.FruitData;
			while(_g < _g1.length) {
				var fd = _g1[_g];
				++_g;
				var f = [new fungi.Fruit(new truffle.Vec2(this.NextPos.x,this.NextPos.y),fd.type,fd.id)];
				f[0].OriginalPos = new truffle.Vec2(this.NextPos.x,this.NextPos.y);
				f[0].ChangeState("fruit-c");
				f[0].Spr.MouseDown(this,function(f) {
					return function(c) {
						c.Carry(w,f[0]);
					}
				}(f));
				this.NextPos.x += 30;
				this.FruitObjs.push(f[0]);
				w.AddSprite(f[0].Spr);
			}
		}
	}
}
fungi.FruitStore.prototype.Update = function(w) {
	if(this.PingBack < 1) {
		if(this.Carrying()) {
			var pos = this.CarryingFruit.Spr.Pos;
			this.CarryingFruit.Spr.SetPos(pos.Lerp(this.CarryingFruit.OriginalPos,0.2));
			this.CarryingFruit.Spr.Update(0,null);
			this.PingBack += 0.1;
			if(this.PingBack > 1) {
				this.CarryingFruit.Spr.SetPos(this.CarryingFruit.OriginalPos);
				this.CarryingFruit.Spr.Update(0,null);
				this.CarryingFruit.Spr.EnableMouse(true);
				this.CarryingFruit = null;
				this.FruitData = [];
			}
		}
		else {
			if(this.PickedFruit != null) {
				var pos = this.PickedFruit.Spr.Pos;
				this.PickedFruit.Spr.SetPos(pos.Lerp(this.PickedFruit.OriginalPos,0.2));
				this.PickedFruit.Spr.Update(0,null);
				this.PingBack += 0.1;
				if(this.PingBack > 1) {
					this.PickedFruit.Spr.Hide(true);
					this.PickedFruit = null;
					this.FruitData = [];
				}
			}
		}
	}
}
fungi.FruitStore.prototype.DropError = function() {
	this.PingBack = 0;
}
fungi.FruitStore.prototype.Pick = function(world,f) {
	if(this.PickedFruit != null) {
		world.RemoveSprite(f.Spr);
	}
	else {
		this.FruitObjs.push(f);
		this.PickedFruit = f;
		this.PickedFruit.OriginalPos = this.NextPos;
		this.PingBack = 0;
	}
}
fungi.FruitStore.prototype.Carry = function(world,s) {
	if(!this.Carrying()) {
		this.CarryingFruit = s;
		s.Spr.EnableMouse(false);
		world.GameGUI.ShakeSpiritMessages(world);
		return true;
	}
	return false;
}
fungi.FruitStore.prototype.UpdateCarrying = function(mx,my) {
	if(this.Carrying() && this.PingBack > 1) {
		this.CarryingFruit.Spr.SetPos(new truffle.Vec2(mx,my));
		this.CarryingFruit.Spr.Update(0,null);
	}
}
fungi.FruitStore.prototype.SortScene = function(Depth) {
	if(this.Carrying()) {
		this.CarryingFruit.Spr.SetDepth(Depth);
	}
}
fungi.FruitStore.prototype.Drop = function(world) {
	if(this.Carrying()) {
		var f = this.CarryingFruit;
		f.Spr.Hide(true);
		this.CarryingFruit = null;
		return f;
	}
	else {
		return null;
	}
}
fungi.FruitStore.prototype.__class__ = fungi.FruitStore;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	}
	catch( $e0 ) {
		{
			var err = $e0;
			{
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__;
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":{
		return ValueType.TBool;
	}break;
	case "string":{
		return ValueType.TClass(String);
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	}break;
	case "object":{
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	}break;
	case "function":{
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	}break;
	case "undefined":{
		return ValueType.TNull;
	}break;
	default:{
		return ValueType.TUnknown;
	}break;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Type.enumEq(a[i],b[i])) return false;
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				return false;
			}
		}
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
hxjson2.JSONTokenType = { __ename__ : ["hxjson2","JSONTokenType"], __constructs__ : ["UNKNOWN","COMMA","LEFT_BRACE","RIGHT_BRACE","LEFT_BRACKET","RIGHT_BRACKET","COLON","TRUE","FALSE","NULL","STRING","NUMBER","NAN"] }
hxjson2.JSONTokenType.UNKNOWN = ["UNKNOWN",0];
hxjson2.JSONTokenType.UNKNOWN.toString = $estr;
hxjson2.JSONTokenType.UNKNOWN.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.COMMA = ["COMMA",1];
hxjson2.JSONTokenType.COMMA.toString = $estr;
hxjson2.JSONTokenType.COMMA.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.LEFT_BRACE = ["LEFT_BRACE",2];
hxjson2.JSONTokenType.LEFT_BRACE.toString = $estr;
hxjson2.JSONTokenType.LEFT_BRACE.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.RIGHT_BRACE = ["RIGHT_BRACE",3];
hxjson2.JSONTokenType.RIGHT_BRACE.toString = $estr;
hxjson2.JSONTokenType.RIGHT_BRACE.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.LEFT_BRACKET = ["LEFT_BRACKET",4];
hxjson2.JSONTokenType.LEFT_BRACKET.toString = $estr;
hxjson2.JSONTokenType.LEFT_BRACKET.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.RIGHT_BRACKET = ["RIGHT_BRACKET",5];
hxjson2.JSONTokenType.RIGHT_BRACKET.toString = $estr;
hxjson2.JSONTokenType.RIGHT_BRACKET.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.COLON = ["COLON",6];
hxjson2.JSONTokenType.COLON.toString = $estr;
hxjson2.JSONTokenType.COLON.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.TRUE = ["TRUE",7];
hxjson2.JSONTokenType.TRUE.toString = $estr;
hxjson2.JSONTokenType.TRUE.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.FALSE = ["FALSE",8];
hxjson2.JSONTokenType.FALSE.toString = $estr;
hxjson2.JSONTokenType.FALSE.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.NULL = ["NULL",9];
hxjson2.JSONTokenType.NULL.toString = $estr;
hxjson2.JSONTokenType.NULL.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.STRING = ["STRING",10];
hxjson2.JSONTokenType.STRING.toString = $estr;
hxjson2.JSONTokenType.STRING.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.NUMBER = ["NUMBER",11];
hxjson2.JSONTokenType.NUMBER.toString = $estr;
hxjson2.JSONTokenType.NUMBER.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONTokenType.NAN = ["NAN",12];
hxjson2.JSONTokenType.NAN.toString = $estr;
hxjson2.JSONTokenType.NAN.__enum__ = hxjson2.JSONTokenType;
hxjson2.JSONDecoder = function(s,strict) { if( s === $_ ) return; {
	this.strict = strict;
	this.tokenizer = new hxjson2.JSONTokenizer(s,strict);
	this.nextToken();
	this.value = this.parseValue();
	if(strict && this.nextToken() != null) this.tokenizer.parseError("Unexpected characters left in input stream!");
}}
hxjson2.JSONDecoder.__name__ = ["hxjson2","JSONDecoder"];
hxjson2.JSONDecoder.prototype.strict = null;
hxjson2.JSONDecoder.prototype.value = null;
hxjson2.JSONDecoder.prototype.tokenizer = null;
hxjson2.JSONDecoder.prototype.token = null;
hxjson2.JSONDecoder.prototype.getValue = function() {
	return this.value;
}
hxjson2.JSONDecoder.prototype.nextToken = function() {
	return this.token = this.tokenizer.getNextToken();
}
hxjson2.JSONDecoder.prototype.parseArray = function() {
	var a = new Array();
	this.nextToken();
	if(this.token.type == hxjson2.JSONTokenType.RIGHT_BRACKET) {
		return a;
	}
	else {
		if(!this.strict && this.token.type == hxjson2.JSONTokenType.COMMA) {
			this.nextToken();
			if(this.token.type == hxjson2.JSONTokenType.RIGHT_BRACKET) {
				return a;
			}
			else {
				this.tokenizer.parseError("Leading commas are not supported.  Expecting ']' but found " + this.token.value);
			}
		}
	}
	while(true) {
		a.push(this.parseValue());
		this.nextToken();
		if(this.token.type == hxjson2.JSONTokenType.RIGHT_BRACKET) {
			return a;
		}
		else if(this.token.type == hxjson2.JSONTokenType.COMMA) {
			this.nextToken();
			if(!this.strict) {
				if(this.token.type == hxjson2.JSONTokenType.RIGHT_BRACKET) {
					return a;
				}
			}
		}
		else {
			this.tokenizer.parseError("Expecting ] or , but found " + this.token.value);
		}
	}
	return null;
}
hxjson2.JSONDecoder.prototype.parseObject = function() {
	var o = { };
	var key;
	this.nextToken();
	if(this.token.type == hxjson2.JSONTokenType.RIGHT_BRACE) {
		return o;
	}
	else {
		if(!this.strict && this.token.type == hxjson2.JSONTokenType.COMMA) {
			this.nextToken();
			if(this.token.type == hxjson2.JSONTokenType.RIGHT_BRACE) {
				return o;
			}
			else {
				this.tokenizer.parseError("Leading commas are not supported.  Expecting '}' but found " + this.token.value);
			}
		}
	}
	while(true) {
		if(this.token.type == hxjson2.JSONTokenType.STRING) {
			key = Std.string(this.token.value);
			this.nextToken();
			if(this.token.type == hxjson2.JSONTokenType.COLON) {
				this.nextToken();
				o[key] = this.parseValue();
				this.nextToken();
				if(this.token.type == hxjson2.JSONTokenType.RIGHT_BRACE) {
					return o;
				}
				else if(this.token.type == hxjson2.JSONTokenType.COMMA) {
					this.nextToken();
					if(!this.strict) {
						if(this.token.type == hxjson2.JSONTokenType.RIGHT_BRACE) {
							return o;
						}
					}
				}
				else {
					this.tokenizer.parseError("Expecting } or , but found " + this.token.value);
				}
			}
			else {
				this.tokenizer.parseError("Expecting : but found " + this.token.value);
			}
		}
		else {
			this.tokenizer.parseError("Expecting string but found " + this.token.value);
		}
	}
	return null;
}
hxjson2.JSONDecoder.prototype.parseValue = function() {
	if(this.token == null) this.tokenizer.parseError("Unexpected end of input");
	var $e = this.token.type;
	switch( $e[1] ) {
	case 2:
	{
		return this.parseObject();
	}break;
	case 4:
	{
		return this.parseArray();
	}break;
	case 10:
	{
		return this.token.value;
	}break;
	case 11:
	{
		return this.token.value;
	}break;
	case 7:
	{
		return true;
	}break;
	case 8:
	{
		return false;
	}break;
	case 9:
	{
		return null;
	}break;
	case 12:
	{
		if(!this.strict) return this.token.value;
		else this.tokenizer.parseError("Unexpected " + this.token.value);
	}break;
	default:{
		this.tokenizer.parseError("Unexpected " + this.token.value);
	}break;
	}
	return null;
}
hxjson2.JSONDecoder.prototype.__class__ = hxjson2.JSONDecoder;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	}
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	}
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	}
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
	null;
}
haxe.Timer.prototype.__class__ = haxe.Timer;
IntHash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.keys = function() {
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	return a.iterator();
}
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}};
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
truffle.canvas.Matrix = function() { }
truffle.canvas.Matrix.__name__ = ["truffle","canvas","Matrix"];
truffle.canvas.Matrix.prototype.__class__ = truffle.canvas.Matrix;
truffle.FrameTextures = function(p) { if( p === $_ ) return; {
	this.N = [];
	this.NE = [];
	this.E = [];
	this.SE = [];
	this.S = [];
	this.SW = [];
	this.W = [];
	this.NW = [];
}}
truffle.FrameTextures.__name__ = ["truffle","FrameTextures"];
truffle.FrameTextures.prototype.N = null;
truffle.FrameTextures.prototype.NE = null;
truffle.FrameTextures.prototype.E = null;
truffle.FrameTextures.prototype.SE = null;
truffle.FrameTextures.prototype.S = null;
truffle.FrameTextures.prototype.SW = null;
truffle.FrameTextures.prototype.W = null;
truffle.FrameTextures.prototype.NW = null;
truffle.FrameTextures.prototype.__class__ = truffle.FrameTextures;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	a.push(i);
	}}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	l.add(i);
	}}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(x));
	}}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(i++,x));
	}}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		{ var $it0 = it.iterator();
		while( $it0.hasNext() ) { var x = $it0.next();
		if(x == elt) return true;
		}}
	}
	else {
		{ var $it1 = it.iterator();
		while( $it1.hasNext() ) { var x = $it1.next();
		if(cmp(x,elt)) return true;
		}}
	}
	return false;
}
Lambda.exists = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) return true;
	}}
	return false;
}
Lambda.foreach = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(!f(x)) return false;
	}}
	return true;
}
Lambda.iter = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	f(x);
	}}
}
Lambda.filter = function(it,f) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) l.add(x);
	}}
	return l;
}
Lambda.fold = function(it,f,first) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	first = f(x,first);
	}}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) { var $it0 = it.iterator();
	while( $it0.hasNext() ) { var _ = $it0.next();
	n++;
	}}
	else { var $it1 = it.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	if(pred(x)) n++;
	}}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var v2 = $it0.next();
	{
		if(v == v2) return i;
		i++;
	}
	}}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	{ var $it0 = a.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(x);
	}}
	{ var $it1 = b.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	l.add(x);
	}}
	return l;
}
Lambda.prototype.__class__ = Lambda;
fungi.FungiWorld = function(w,h) { if( w === $_ ) return; {
	truffle.World.call(this);
	this.Frame = 0;
	this.TickTime = 0;
	this.DepthTickTime = 0;
	this.PerceiveTime = 0;
	this.Width = w;
	this.Height = h;
	this.Plants = [];
	this.Objs = [];
	this.Spirits = [];
	this.SpiralScale = 0;
	this.WorldPos = new truffle.Vec3(0,0,0);
	this.MyRndGen = new truffle.RndGen();
	this.Server = new truffle.ServerConnection();
	this.PlayerInfo = { };
	this.MyName = "";
	this.MyID = -1;
	this.NumPlants = 0;
	this.Season = "no season";
	this.LogicalCameraPos = new truffle.Vec2(0,0);
	this.Avatars = [];
	this.LoggedIn = false;
	this.DoDrawnSpirit = false;
	fungi.GUIFrameTextures.Init();
	this.TheCritters = new fungi.Critters(this,3);
	this.MouseUp(this,function(c) {
		if(c.GameGUI.Store.Carrying()) {
			c.GameGUI.Store.DropError();
		}
		c.TheCritters.CheckPlants(c);
	});
	{
		var _g = 0;
		while(_g < h) {
			var y = _g++;
			{
				var _g1 = 0;
				while(_g1 < w) {
					var x = _g1++;
					var ob = [new fungi.Cube(this,new truffle.Vec3(0,0,0))];
					ob[0].Spr.MouseDown(this,function(ob) {
						return function(c) {
							c.MovePlayer(ob[0],null,true);
						}
					}(ob));
					ob[0].Spr.MouseUp(this,function(ob) {
						return function(c) {
							if(c.GameGUI.Store.Carrying()) {
								var e = c.Get("fungi.Plant",new truffle.Vec2(ob[0].LogicalPos.x,ob[0].LogicalPos.y));
								if(e == null) {
									var f = c.GameGUI.Store.Drop((function($this) {
										var $r;
										var $t = c;
										if(Std["is"]($t,truffle.World)) $t;
										else throw "Class cast error";
										$r = $t;
										return $r;
									}(this)));
									if(f != null) {
										c.Spiral.SetPos(new truffle.Vec2(ob[0].Pos.x,ob[0].Pos.y - 128));
										c.AddServerPlant(ob[0].LogicalPos.Add(new truffle.Vec3(0,0,1)),f.Type,f.ID);
									}
								}
								else {
									c.GameGUI.Store.DropError();
								}
							}
						}
					}(ob));
					this.Objs.push(ob[0]);
				}
			}
		}
	}
	this.UpdateWorld(new truffle.Vec3(0,0,0));
	this.GameGUI = new fungi.GUI(this);
	this.MyTextEntry = new truffle.TextEntry(150,50,250,20,$closure(this,"NameCallback"));
	this.AddSprite(this.MyTextEntry);
	this.Spiral = new truffle.Sprite(new truffle.Vec2(0,0),Resources.Get("spiral"),true);
	this.AddSprite(this.Spiral);
	this.Update(0);
	this.SortScene();
	var names = ["TreeSpirit","ShrubSpirit","CoverSpirit"];
	var positions = [new truffle.Vec3(0,5,4),new truffle.Vec3(7,0,4),new truffle.Vec3(2,10,4)];
	{
		var _g1 = 0, _g = names.length;
		while(_g1 < _g) {
			var i = [_g1++];
			var c = [this];
			this.Server.Request("spirit-sprites/" + names[i[0]],this,function(i,c) {
				return function(cc,data) {
					if(c[0].DoDrawnSpirit) {
						var sp = new fungi.DrawnSpirit(c[0],names[i[0]],positions[i[0]]);
						sp.NeedsUpdate = true;
						sp.LastData = data;
						sp.Build(c[0],data);
						sp.BuildDebug(c[0]);
						c[0].SortScene();
						c[0].Spirits.push(sp);
					}
					else {
						var sp = new fungi.Spirit(c[0],names[i[0]],positions[i[0]]);
						sp.NeedsUpdate = true;
						sp.LastData = data;
						sp.Build(c[0],data);
						sp.BuildDebug(c[0]);
						c[0].SortScene();
						c[0].Spirits.push(sp);
					}
				}
			}(i,c));
		}
	}
	var help = new truffle.Sprite(new truffle.Vec2(40,470),Resources.Get("help"));
	help.MouseUp(this,function(c) {
		var Note = { code : "tutorial_0", answer : false};
		c.GameGUI.PostNote((function($this) {
			var $r;
			var $t = c;
			if(Std["is"]($t,truffle.World)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)),Note,false);
	});
	help.MouseOver(this,function(c) {
		help.SetColour(new truffle.Vec3(0.8,1,0.7));
		help.Update(0,null);
	});
	help.MouseOut(this,function(c) {
		help.SetColour(new truffle.Vec3(1,1,1));
		help.Update(0,null);
	});
	this.AddSprite(help);
	var c = this;
	this.MouseMove(this,function(e) {
		c.GameGUI.Store.UpdateCarrying(e.stageX,e.stageY);
		c.TheCritters.UpdateMouse(e.stageX,e.stageY);
	});
	this.HighlightEntity = new truffle.SpriteEntity(this,new truffle.Vec3(0,0,0),Resources.Get("arr5"),false);
	this.Add(this.HighlightEntity);
}}
fungi.FungiWorld.__name__ = ["fungi","FungiWorld"];
fungi.FungiWorld.__super__ = truffle.World;
for(var k in truffle.World.prototype ) fungi.FungiWorld.prototype[k] = truffle.World.prototype[k];
fungi.FungiWorld.prototype.Width = null;
fungi.FungiWorld.prototype.Height = null;
fungi.FungiWorld.prototype.Objs = null;
fungi.FungiWorld.prototype.WorldPos = null;
fungi.FungiWorld.prototype.MyRndGen = null;
fungi.FungiWorld.prototype.MyTextEntry = null;
fungi.FungiWorld.prototype.Plants = null;
fungi.FungiWorld.prototype.TheCritters = null;
fungi.FungiWorld.prototype.MyName = null;
fungi.FungiWorld.prototype.MyID = null;
fungi.FungiWorld.prototype.Frame = null;
fungi.FungiWorld.prototype.TickTime = null;
fungi.FungiWorld.prototype.DepthTickTime = null;
fungi.FungiWorld.prototype.PerceiveTime = null;
fungi.FungiWorld.prototype.Spirits = null;
fungi.FungiWorld.prototype.Server = null;
fungi.FungiWorld.prototype.Spiral = null;
fungi.FungiWorld.prototype.SpiralScale = null;
fungi.FungiWorld.prototype.GameGUI = null;
fungi.FungiWorld.prototype.NumPlants = null;
fungi.FungiWorld.prototype.Season = null;
fungi.FungiWorld.prototype.PlayerInfo = null;
fungi.FungiWorld.prototype.LogicalCameraPos = null;
fungi.FungiWorld.prototype.HighlightEntity = null;
fungi.FungiWorld.prototype.HighlightEndTime = null;
fungi.FungiWorld.prototype.Time = null;
fungi.FungiWorld.prototype.PlayerAvatar = null;
fungi.FungiWorld.prototype.Avatars = null;
fungi.FungiWorld.prototype.LoadedTiles = null;
fungi.FungiWorld.prototype.LoggedIn = null;
fungi.FungiWorld.prototype.DoDrawnSpirit = null;
fungi.FungiWorld.prototype.SetWorldPos = function(tile,pos) {
	if(!tile.Eq(this.WorldPos)) {
		var DiffX = tile.x - this.WorldPos.x;
		var DiffY = tile.y - this.WorldPos.y;
		this.ShiftWorld(new truffle.Vec3(DiffX,DiffY,0));
	}
	this.LogicalCameraPos.x = pos.x;
	this.LogicalCameraPos.y = pos.y;
	this.UpdateWorld(tile);
	this.SortScene();
	var t = this.ScreenSpaceTransform(new truffle.Vec3(-this.LogicalCameraPos.x,-this.LogicalCameraPos.y,0));
	this.SetTranslate(new truffle.Vec2(this.ScreenCentre.x + t.x,this.ScreenCentre.y + t.y));
}
fungi.FungiWorld.prototype.MovePlayer = function(ob,fn,tile) {
	if(this.LoggedIn) {
		ob = (function($this) {
			var $r;
			var $t = ob;
			if(Std["is"]($t,truffle.SpriteEntity)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		var z = ob.LogicalPos.z + 1;
		if(z < 0) z = 0;
		this.PlayerAvatar.SetLogicalPos(this,new truffle.Vec3(ob.LogicalPos.x,ob.LogicalPos.y,z));
		var ServerTileWidth = 5;
		var PosX = (function($this) {
			var $r;
			var $t = ob.LogicalPos.x;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)) % ServerTileWidth;
		var PosY = (function($this) {
			var $r;
			var $t = ob.LogicalPos.y;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)) % ServerTileWidth;
		var TilePosX = (function($this) {
			var $r;
			var $t = $this.WorldPos.x;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)) + Math.floor(ob.LogicalPos.x / ServerTileWidth) - 1;
		var TilePosY = (function($this) {
			var $r;
			var $t = $this.WorldPos.y;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)) + Math.floor(ob.LogicalPos.y / ServerTileWidth) - 1;
		if(TilePosX != this.WorldPos.x || TilePosY != this.WorldPos.y) {
			var that = this;
			this.PlayerAvatar.OnReachedDest = function() {
				if(fn != null) {
					fn();
				}
				if(tile && (ob.LogicalPos.x < 4 || ob.LogicalPos.x > 11 || ob.LogicalPos.y < 4 || ob.LogicalPos.y > 11)) {
					that.SetWorldPos(new truffle.Vec3(TilePosX,TilePosY,0),new truffle.Vec2(0,0));
				}
			}
		}
		else {
			this.PlayerAvatar.OnReachedDest = function() {
				if(fn != null) fn();
			}
		}
		this.Server.Request("move-player/" + Std.string(this.MyID) + "/" + Std.string(TilePosX) + "/" + Std.string(TilePosY) + "/" + Std.string(PosX) + "/" + Std.string(PosY),this,function(c,d) {
			null;
		});
	}
}
fungi.FungiWorld.prototype.Highlight = function(pos) {
	this.HighlightEntity.Hide(false);
	this.HighlightEntity.SetLogicalPos(this,new truffle.Vec3(pos.x,pos.y,3));
	this.HighlightEntity.Update(0,this);
	this.HighlightEndTime = this.Time + 100;
	this.MovePlayer(this.GetCube(new truffle.Vec3(pos.x,pos.y,0)),null,false);
}
fungi.FungiWorld.prototype.CanPick = function() {
	return Reflect.field(this.PlayerInfo,"seeds-left") > 0 && this.PlayerInfo.seeds.length < 5;
}
fungi.FungiWorld.prototype.MoveWorld = function(dir) {
	this.LogicalCameraPos.x += dir.x;
	this.LogicalCameraPos.y += dir.y;
	if(this.LogicalCameraPos.x > 5) {
		this.ShiftWorld(new truffle.Vec3(1,0,0));
		this.LogicalCameraPos.x = 0;
	}
	if(this.LogicalCameraPos.y > 5) {
		this.ShiftWorld(new truffle.Vec3(0,1,0));
		this.LogicalCameraPos.y = 0;
	}
	if(this.LogicalCameraPos.x < -5) {
		this.ShiftWorld(new truffle.Vec3(-1,0,0));
		this.LogicalCameraPos.x = 0;
	}
	if(this.LogicalCameraPos.y < -5) {
		this.ShiftWorld(new truffle.Vec3(0,-1,0));
		this.LogicalCameraPos.y = 0;
	}
	var t = this.ScreenSpaceTransform(new truffle.Vec3(-this.LogicalCameraPos.x,-this.LogicalCameraPos.y,0));
	this.SetTranslate(new truffle.Vec2(this.ScreenCentre.x + t.x,this.ScreenCentre.y + t.y));
}
fungi.FungiWorld.prototype.CompareLists = function(a,b) {
	if(a.length != b.length) return false;
	{
		var _g1 = 0, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a[i].name != b[i].name) return false;
		}
	}
	return true;
}
fungi.FungiWorld.prototype.UpdateSpiritSprites = function() {
	var _g = 0, _g1 = this.Spirits;
	while(_g < _g1.length) {
		var s = [_g1[_g]];
		++_g;
		if(Type.getClassName(Type.getClass(s[0])) == "fungi.DrawnSpirit") {
			this.Server.Request("spirit-sprites/" + s[0].Name,this,function(s) {
				return function(c,data) {
					if(!c.CompareLists(data,s[0].LastData)) {
						s[0].Build((function($this) {
							var $r;
							var $t = c;
							if(Std["is"]($t,truffle.World)) $t;
							else throw "Class cast error";
							$r = $t;
							return $r;
						}(this)),data);
						s[0].LastData = data;
					}
				}
			}(s));
		}
	}
}
fungi.FungiWorld.prototype.NameCallback = function(name) {
	this.Server.Request("login/" + name + "/0",this,function(c,d) {
		c.LoggedIn = true;
		c.GameGUI.Clear(c);
		c.PlayerInfo = d;
		c.MyID = c.PlayerInfo.id;
		c.MyName = c.PlayerInfo.name;
		c.RemoveSprite(c.MyTextEntry);
		{
			var _g = 0, _g1 = (function($this) {
				var $r;
				var $t = c.Plants;
				if(Std["is"]($t,Array)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			while(_g < _g1.length) {
				var plant = _g1[_g];
				++_g;
				plant.OwnerUpdate(c);
			}
		}
		c.GameGUI.TopItem = { };
		{
			var _g = 0, _g1 = c.Avatars;
			while(_g < _g1.length) {
				var avatar = _g1[_g];
				++_g;
				c.Remove(avatar);
			}
		}
		c.Avatars = [];
		c.SetWorldPos(new truffle.Vec3(c.PlayerInfo.tile.x,c.PlayerInfo.tile.y,0),new truffle.Vec2(0,0));
	});
}
fungi.FungiWorld.prototype.ShiftWorld = function(dir) {
	this.UpdateWorld(this.WorldPos.Add(dir));
	this.MovePlants(new truffle.Vec2(dir.x * 5,dir.y * 5));
	this.SortScene();
}
fungi.FungiWorld.prototype.UpdateWorld = function(pos) {
	this.WorldPos = pos;
	this.SetCurrentTilePos(new truffle.Vec2(this.WorldPos.x,this.WorldPos.y));
	var TileSize = 5;
	var circles = [];
	{
		var _g = -2;
		while(_g < 3) {
			var x = _g++;
			{
				var _g1 = -2;
				while(_g1 < 3) {
					var y = _g1++;
					this.MyRndGen.Seed((function($this) {
						var $r;
						var $t = $this.WorldPos.x + x + ($this.WorldPos.y + y) * 139;
						if(Std["is"]($t,Int)) $t;
						else throw "Class cast error";
						$r = $t;
						return $r;
					}(this)));
					{
						var _g2 = 0;
						while(_g2 < 2) {
							var i = _g2++;
							var pos1 = new truffle.Vec3(this.MyRndGen.RndFlt() * TileSize + x * TileSize + 5,this.MyRndGen.RndFlt() * TileSize + y * TileSize + 5,0);
							circles.push(new truffle.Circle(pos1,this.MyRndGen.RndFlt() * 4));
						}
					}
				}
			}
		}
	}
	var colcircles = [];
	var cols = [new truffle.Vec3(30,-15,-15),new truffle.Vec3(-30,60,-30),new truffle.Vec3(20,-10,-10),new truffle.Vec3(20,25,-45)];
	{
		var _g = -8;
		while(_g < 9) {
			var x = _g++;
			{
				var _g1 = -8;
				while(_g1 < 9) {
					var y = _g1++;
					this.MyRndGen.Seed((function($this) {
						var $r;
						var $t = $this.WorldPos.x + x + ($this.WorldPos.y + y) * 130;
						if(Std["is"]($t,Int)) $t;
						else throw "Class cast error";
						$r = $t;
						return $r;
					}(this)));
					if(this.MyRndGen.RndFlt() > 0.85) {
						var pos1 = new truffle.Vec3(this.MyRndGen.RndFlt() * TileSize + x * TileSize + 5,this.MyRndGen.RndFlt() * TileSize + y * TileSize + 5,0);
						colcircles.push({ colour : this.MyRndGen.Choose(cols), circle : new truffle.Circle(pos1,this.MyRndGen.RndFlt() * 30)});
					}
				}
			}
		}
	}
	{
		var _g1 = 0, _g = this.Objs.length;
		while(_g1 < _g) {
			var i = _g1++;
			var pos1 = new truffle.Vec3(i % this.Width,Math.floor(i / this.Width),-1);
			this.MyRndGen.Seed((function($this) {
				var $r;
				var $t = pos1.x % 5 * 236 + pos1.y % 5 * 139;
				if(Std["is"]($t,Int)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)));
			var col = new truffle.Vec3(1,1,1);
			{
				var _g2 = 0;
				while(_g2 < colcircles.length) {
					var c = colcircles[_g2];
					++_g2;
					if(c.circle.Inside(pos1)) {
						col.x = c.colour.x;
						col.y = c.colour.y;
						col.z = c.colour.z;
					}
				}
			}
			{
				var _g2 = 0;
				while(_g2 < circles.length) {
					var c = circles[_g2];
					++_g2;
					if(c.Inside(pos1)) {
						pos1.z = 0;
					}
				}
			}
			if(pos1.z != 0) {
				col.x -= 60;
				col.y -= 60;
				col.z -= 60;
			}
			this.Objs[i].LogicalPos = pos1;
			if(!(pos1.x >= 4 && pos1.x <= 11 && pos1.y >= 4 && pos1.y <= 11)) {
				var a = (col.x + col.y + col.z) / 3;
				col.x = a;
				col.y = a;
				col.z = a;
			}
			this.Objs[i].Spr.SetOffsetColour(col);
			this.Objs[i].UpdateTex(this.MyRndGen);
			this.Objs[i].Update(0,this);
		}
	}
	this.TickTime = 0;
}
fungi.FungiWorld.prototype.AddServerPlant = function(pos,type,FruitID) {
	if(this.LoggedIn && this.SpaceClear(pos)) {
		var cube = this.GetCube(pos);
		var t = this;
		this.MovePlayer(cube,function() {
			t.SpiralScale = 1;
		},false);
		var size = this.MyRndGen.RndFlt() + 0.5;
		var ServerTileWidth = 5;
		var PlantPosX = (function($this) {
			var $r;
			var $t = pos.x;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)) % ServerTileWidth;
		var PlantPosY = (function($this) {
			var $r;
			var $t = pos.y;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)) % ServerTileWidth;
		var TilePosX = (function($this) {
			var $r;
			var $t = $this.WorldPos.x;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)) + Math.floor(pos.x / ServerTileWidth) - 1;
		var TilePosY = (function($this) {
			var $r;
			var $t = $this.WorldPos.y;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)) + Math.floor(pos.y / ServerTileWidth) - 1;
		this.Server.Request("make-plant/" + Std.string(TilePosX) + "/" + Std.string(TilePosY) + "/" + Std.string(PlantPosX) + "/" + Std.string(PlantPosY) + "/" + type + "/" + this.MyID + "/" + this.GetSoilState(cube) + "/" + Std.string(FruitID),this,function(c,data) {
			null;
		});
	}
}
fungi.FungiWorld.prototype.PostSortScene = function(depth) {
	this.GameGUI.Store.SortScene(depth);
}
fungi.FungiWorld.prototype.ClearPlants = function() {
	{
		var _g = 0, _g1 = this.Plants;
		while(_g < _g1.length) {
			var plant = _g1[_g];
			++_g;
			this.Remove(plant);
		}
	}
	this.Plants = [];
}
fungi.FungiWorld.prototype.MovePlants = function(dir) {
	var NewPlants = [];
	{
		var _g = 0, _g1 = this.Plants;
		while(_g < _g1.length) {
			var plant = _g1[_g];
			++_g;
			plant.LogicalPos.x += -dir.x;
			plant.LogicalPos.y += -dir.y;
			if(plant.LogicalPos.x < 0 || plant.LogicalPos.y < 0 || plant.LogicalPos.x > this.Width || plant.LogicalPos.y > this.Width) {
				this.Remove(plant);
			}
			else {
				plant.Update(0,this);
				NewPlants.push(plant);
			}
		}
	}
	this.Plants = NewPlants;
	var NewAvatars = [];
	{
		var _g = 0, _g1 = this.Avatars;
		while(_g < _g1.length) {
			var avatar = _g1[_g];
			++_g;
			avatar.LogicalPos.x += -dir.x;
			avatar.LogicalPos.y += -dir.y;
			if(avatar.LogicalPos.x < 0 || avatar.LogicalPos.y < 0 || avatar.LogicalPos.x > this.Width || avatar.LogicalPos.y > this.Width) {
				this.Remove(avatar);
			}
			else {
				var s = avatar.Speed;
				avatar.Speed = 0;
				avatar.Update(0,this);
				avatar.Speed = s;
				NewAvatars.push(avatar);
			}
		}
	}
	this.Avatars = NewAvatars;
	if(this.PlayerAvatar != null) {
		this.PlayerAvatar.LogicalPos.x += -dir.x;
		this.PlayerAvatar.LogicalPos.y += -dir.y;
		var s = this.PlayerAvatar.Speed;
		this.PlayerAvatar.Speed = 0;
		this.PlayerAvatar.Update(0,this);
		this.PlayerAvatar.Speed = s;
	}
}
fungi.FungiWorld.prototype.GetCube = function(pos) {
	return this.Objs[(function($this) {
		var $r;
		var $t = pos.x + pos.y * $this.Width;
		if(Std["is"]($t,Int)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))];
}
fungi.FungiWorld.prototype.GetSoilState = function(cube) {
	var base = new truffle.Vec3(133,143,124);
	base = base.Add(cube.Spr.GetOffsetColour());
	return Std["int"](base.y - (base.x + base.z * 0.5));
}
fungi.FungiWorld.prototype.SpaceClear = function(pos) {
	{
		var _g = 0, _g1 = this.Plants;
		while(_g < _g1.length) {
			var plant = _g1[_g];
			++_g;
			if(plant.LogicalPos.Eq(pos)) return false;
		}
	}
	return true;
}
fungi.FungiWorld.prototype.Handle = function(e) {
	truffle.World.prototype.Handle.call(this,e);
	this.Update(0);
}
fungi.FungiWorld.prototype.UpdateGhosts = function(t) {
	var _g1 = 0, _g = t.length;
	while(_g1 < _g) {
		var i = _g1++;
		{
			var _g2 = 0, _g3 = this.Spirits;
			while(_g2 < _g3.length) {
				var g = _g3[_g2];
				++_g2;
				if(g.Name == t[i].name) {
					g.UpdateEmotions(t[i],this);
				}
			}
		}
	}
}
fungi.FungiWorld.prototype.GetAvatar = function(id) {
	{
		var _g = 0, _g1 = this.Avatars;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a.ID == id) return a;
		}
	}
	return null;
}
fungi.FungiWorld.prototype.UpdateTile = function(tiles) {
	{
		var _g = 0;
		while(_g < tiles.length) {
			var tile = tiles[_g];
			++_g;
			this.Season = tile.season;
			var TilePos = new truffle.Vec2((tile.pos.x - this.WorldPos.x + 1) * 5,(tile.pos.y - this.WorldPos.y + 1) * 5);
			var entities = (function($this) {
				var $r;
				var $t = tile.entities;
				if(Std["is"]($t,Array)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			{
				var _g1 = 0;
				while(_g1 < entities.length) {
					var entity = entities[_g1];
					++_g1;
					var WorldPos = new truffle.Vec2(entity.pos.x + TilePos.x,entity.pos.y + TilePos.y);
					var EntityType = Reflect.field(entity,"entity-type");
					if(EntityType == "avatar") {
						var Avatar = this.GetAvatar(entity.id);
						var cube = this.Get("fungi.Cube",WorldPos);
						if(cube != null) {
							var Pos = new truffle.Vec3(WorldPos.x,WorldPos.y,cube.LogicalPos.z + 1);
							if(Avatar != null) {
								Avatar.ChangeLayer(entity.layer,Reflect.field(entity,"flowered-plants"));
								Avatar.SetLogicalPos(this,Pos);
							}
							else {
								if(this.PlayerAvatar == null && entity.id == this.MyID) {
									this.PlayerAvatar = new fungi.AvatarEntity(this,entity.owner,entity.id,Pos,entity.layer,Reflect.field(entity,"flowered-plants"));
								}
								else {
									if(entity.id == this.MyID) {
										this.PlayerAvatar.ChangeLayer(entity.layer,Reflect.field(entity,"flowered-plants"));
									}
									if(!this.LoggedIn || entity.id != this.MyID) {
										var a = new fungi.AvatarEntity(this,entity.owner,entity.id,Pos,entity.layer,Reflect.field(entity,"flowered-plants"));
										this.Avatars.push(a);
									}
								}
							}
						}
					}
					else {
						var plant = entity;
						var e = this.Get("fungi.Plant",WorldPos);
						if(e == null) {
							var cube = this.Get("fungi.Cube",WorldPos);
							if(cube != null) {
								if(plant.version < 2) {
									this.Server.Request("soil/" + Std.string((function($this) {
										var $r;
										var $t = tile.pos.x;
										if(Std["is"]($t,Int)) $t;
										else throw "Class cast error";
										$r = $t;
										return $r;
									}(this))) + "/" + Std.string((function($this) {
										var $r;
										var $t = tile.pos.y;
										if(Std["is"]($t,Int)) $t;
										else throw "Class cast error";
										$r = $t;
										return $r;
									}(this))) + "/" + Std.string(plant.id) + "/" + this.GetSoilState(cube),this,function(c,d) {
										null;
									});
								}
								var pos = new truffle.Vec3(WorldPos.x,WorldPos.y,cube.LogicalPos.z + 1);
								this.Plants.push(new fungi.Plant(this,plant,pos,tile.pos));
							}
						}
						else {
							((function($this) {
								var $r;
								var $t = e;
								if(Std["is"]($t,fungi.Plant)) $t;
								else throw "Class cast error";
								$r = $t;
								return $r;
							}(this))).StateUpdate(this,plant);
						}
					}
				}
			}
		}
	}
	var temp = this.Plants;
	{
		var _g = 0, _g1 = this.Plants;
		while(_g < _g1.length) {
			var plant = _g1[_g];
			++_g;
			if(plant.State == "decayed") {
				this.Remove(plant);
				temp.remove(plant);
			}
		}
	}
	this.Plants = temp;
	this.SortScene();
}
fungi.FungiWorld.prototype.AddSpiritMsg = function(msg,text) {
	var _g = 0, _g1 = this.Spirits;
	while(_g < _g1.length) {
		var s = _g1[_g];
		++_g;
		if(s.Name == msg.from) {
			s.AddMsg(msg,text);
		}
	}
}
fungi.FungiWorld.prototype.Update = function(time) {
	truffle.World.prototype.Update.call(this,time);
	this.Time = time;
	this.Server.Update();
	this.TheCritters.Update();
	this.GameGUI.Update(this,time);
	if(this.HighlightEntity != null && !this.HighlightEntity.Hidden) {
		var Pos = this.HighlightEntity.Spr.Pos;
		this.HighlightEntity.Spr.SetPos(Pos.Add(new truffle.Vec2(0,Math.sin(time / 5) * 5)));
		this.HighlightEntity.Spr.Update(0,null);
		if(this.HighlightEndTime < time) this.HighlightEntity.Hide(true);
	}
	if(this.SpiralScale > 0.1) {
		this.Spiral.Hide(false);
		this.SpiralScale -= 0.01;
		this.Spiral.SetRotate(time * 12);
		this.Spiral.SetScale(new truffle.Vec2(this.SpiralScale,this.SpiralScale));
		this.Spiral.Update(time,null);
	}
	if(time > this.DepthTickTime) {
		this.SortScene();
		this.DepthTickTime = time + 50;
	}
	if(time > this.TickTime) {
		this.UpdateSpiritSprites();
		this.Server.Request("pull/" + Std.string(this.MyID) + "/" + Std.string((function($this) {
			var $r;
			var $t = $this.WorldPos.x;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))) + "/" + Std.string((function($this) {
			var $r;
			var $t = $this.WorldPos.y;
			if(Std["is"]($t,Int)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))),this,function(c,d) {
			c.UpdateTile(d.tiles);
			if(c.LoggedIn) {
				if(d.player != null) {
					c.PlayerInfo = d.player;
					c.GameGUI.UpdateData((function($this) {
						var $r;
						var $t = c;
						if(Std["is"]($t,truffle.World)) $t;
						else throw "Class cast error";
						$r = $t;
						return $r;
					}(this)),d.player.log,time);
				}
			}
			c.UpdateGhosts(d.spirits);
		});
		if(!this.LoggedIn) {
			this.Server.Request("get-msgs/" + Std.string(this.MyID),this,function(c,d) {
				c.GameGUI.UpdateMsgs((function($this) {
					var $r;
					var $t = c;
					if(Std["is"]($t,truffle.World)) $t;
					else throw "Class cast error";
					$r = $t;
					return $r;
				}(this)),d,time);
			});
		}
		this.TickTime = time + 200;
	}
}
fungi.FungiWorld.prototype.__class__ = fungi.FungiWorld;
truffle.Vec3 = function(px,py,pz) { if( px === $_ ) return; {
	this.x = px;
	this.y = py;
	this.z = pz;
}}
truffle.Vec3.__name__ = ["truffle","Vec3"];
truffle.Vec3.prototype.x = null;
truffle.Vec3.prototype.y = null;
truffle.Vec3.prototype.z = null;
truffle.Vec3.prototype.Add = function(other) {
	return new truffle.Vec3(this.x + other.x,this.y + other.y,this.z + other.z);
}
truffle.Vec3.prototype.Sub = function(other) {
	return new truffle.Vec3(this.x - other.x,this.y - other.y,this.z - other.z);
}
truffle.Vec3.prototype.Mul = function(v) {
	return new truffle.Vec3(this.x * v,this.y * v,this.z * v);
}
truffle.Vec3.prototype.Div = function(v) {
	return new truffle.Vec3(this.x / v,this.y / v,this.z / v);
}
truffle.Vec3.prototype.Mag = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
}
truffle.Vec3.prototype.Normalise = function() {
	return this.Div(Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z));
}
truffle.Vec3.prototype.Lerp = function(other,t) {
	return new truffle.Vec3(this.x * (1 - t) + other.x * t,this.y * (1 - t) + other.y * t,this.z * (1 - t) + other.z * t);
}
truffle.Vec3.prototype.Eq = function(other) {
	return this.x == other.x && this.y == other.y && this.z == other.z;
}
truffle.Vec3.prototype.AsStr = function() {
	return Std.string(this.x) + ", " + Std.string(this.y) + ", " + Std.string(this.z);
}
truffle.Vec3.prototype.__class__ = truffle.Vec3;
truffle.Circle = function(centre,radius) { if( centre === $_ ) return; {
	this.Centre = centre;
	this.Radius = radius;
}}
truffle.Circle.__name__ = ["truffle","Circle"];
truffle.Circle.prototype.Centre = null;
truffle.Circle.prototype.Radius = null;
truffle.Circle.prototype.Inside = function(pos) {
	return pos.Sub(this.Centre).Mag() < this.Radius;
}
truffle.Circle.prototype.__class__ = truffle.Circle;
truffle.interfaces.Key = { __ename__ : ["truffle","interfaces","Key"], __constructs__ : ["left","right","up","down","space"] }
truffle.interfaces.Key.left = ["left",0];
truffle.interfaces.Key.left.toString = $estr;
truffle.interfaces.Key.left.__enum__ = truffle.interfaces.Key;
truffle.interfaces.Key.right = ["right",1];
truffle.interfaces.Key.right.toString = $estr;
truffle.interfaces.Key.right.__enum__ = truffle.interfaces.Key;
truffle.interfaces.Key.up = ["up",2];
truffle.interfaces.Key.up.toString = $estr;
truffle.interfaces.Key.up.__enum__ = truffle.interfaces.Key;
truffle.interfaces.Key.down = ["down",3];
truffle.interfaces.Key.down.toString = $estr;
truffle.interfaces.Key.down.__enum__ = truffle.interfaces.Key;
truffle.interfaces.Key.space = ["space",4];
truffle.interfaces.Key.space.toString = $estr;
truffle.interfaces.Key.space.__enum__ = truffle.interfaces.Key;
truffle.Bone = function(pos,t) { if( pos === $_ ) return; {
	this.Children = new List();
	truffle.Sprite.call(this,pos,t);
	this.BindPos = pos;
	this.InheritTransform = true;
}}
truffle.Bone.__name__ = ["truffle","Bone"];
truffle.Bone.__super__ = truffle.Sprite;
for(var k in truffle.Sprite.prototype ) truffle.Bone.prototype[k] = truffle.Sprite.prototype[k];
truffle.Bone.prototype.Parent = null;
truffle.Bone.prototype.Children = null;
truffle.Bone.prototype.BindPos = null;
truffle.Bone.prototype.InheritTransform = null;
truffle.Bone.prototype.AddChild = function(world,c) {
	this.Children.add(c);
	c.Parent = this;
	world.AddSprite(c);
}
truffle.Bone.prototype.GetGlobalPos = function() {
	return this.TransformedPos();
}
truffle.Bone.prototype.Update = function(frame,tx) {
	truffle.Sprite.prototype.Update.call(this,frame,tx);
	var tx1 = null;
	if(this.InheritTransform) {
		tx1 = this.GetTx();
	}
	{ var $it0 = this.Children.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		if(!this.InheritTransform) {
			c.SetPos(c.Pos.Lerp(this.Pos,0.1));
		}
		c.Update(frame,tx1);
	}
	}}
}
truffle.Bone.prototype.Recurse = function(fn) {
	this.DoRecurse(fn,0);
}
truffle.Bone.prototype.DoRecurse = function(fn,depth) {
	fn(this,depth);
	{ var $it0 = this.Children.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		c.DoRecurse(fn,depth + 1);
	}
	}}
}
truffle.Bone.prototype.Hide = function(s) {
	if(this.Hidden != s) {
		truffle.Sprite.prototype.Hide.call(this,s);
		{ var $it0 = this.Children.iterator();
		while( $it0.hasNext() ) { var c = $it0.next();
		{
			c.Hide(s);
		}
		}}
	}
}
truffle.Bone.prototype.Print = function() {
	haxe.Log.trace("Bone " + Std.string(this.Pos.x) + " " + Std.string(this.Pos.y),{ fileName : "Bone.hx", lineNumber : 97, className : "truffle.Bone", methodName : "Print"});
	if(this.Children.length > 0) {
		haxe.Log.trace("Children start",{ fileName : "Bone.hx", lineNumber : 100, className : "truffle.Bone", methodName : "Print"});
		{ var $it0 = this.Children.iterator();
		while( $it0.hasNext() ) { var c = $it0.next();
		{
			c.Print();
		}
		}}
		haxe.Log.trace("Children end",{ fileName : "Bone.hx", lineNumber : 102, className : "truffle.Bone", methodName : "Print"});
	}
}
truffle.Bone.prototype.__class__ = truffle.Bone;
truffle.RndGen = function(p) { if( p === $_ ) return; {
	this.State = 0;
}}
truffle.RndGen.__name__ = ["truffle","RndGen"];
truffle.RndGen.prototype.State = null;
truffle.RndGen.prototype.Seed = function(s) {
	this.State = s;
	this.WarmUp();
}
truffle.RndGen.prototype.GetSeed = function() {
	return this.State;
}
truffle.RndGen.prototype.WarmUp = function() {
	var _g = 0;
	while(_g < 10) {
		var i = _g++;
		{
			this.State = Std["int"](this.State * 214013 + 2531011) & -1;
			Std["int"](Math.abs(this.State));
		}
	}
}
truffle.RndGen.prototype.RndInt = function() {
	this.State = Std["int"](this.State * 214013 + 2531011) & -1;
	return Std["int"](Math.abs(this.State));
}
truffle.RndGen.prototype.RndRange = function(lo,hi) {
	return lo + (function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) % (hi - lo);
}
truffle.RndGen.prototype.RndFlt = function() {
	return (function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) / Math.pow(2,32) * 2;
}
truffle.RndGen.prototype.RndCentredFlt = function() {
	return ((function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) / Math.pow(2,32) * 2 - 0.5) * 2;
}
truffle.RndGen.prototype.Choose = function(arr) {
	return arr[(function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) % arr.length];
}
truffle.RndGen.prototype.RndVec2 = function() {
	return new truffle.Vec2((function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) / Math.pow(2,32) * 2,(function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) / Math.pow(2,32) * 2);
}
truffle.RndGen.prototype.RndCentredVec2 = function() {
	return new truffle.Vec2(((function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) / Math.pow(2,32) * 2 - 0.5) * 2,((function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) / Math.pow(2,32) * 2 - 0.5) * 2);
}
truffle.RndGen.prototype.RndCircleVec2 = function() {
	var v = new truffle.Vec2(((function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) / Math.pow(2,32) * 2 - 0.5) * 2,((function($this) {
		var $r;
		$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
		$r = Std["int"](Math.abs($this.State));
		return $r;
	}(this)) / Math.pow(2,32) * 2 - 0.5) * 2);
	while(Math.sqrt(v.x * v.x + v.y * v.y) > 1) {
		v = new truffle.Vec2(((function($this) {
			var $r;
			$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
			$r = Std["int"](Math.abs($this.State));
			return $r;
		}(this)) / Math.pow(2,32) * 2 - 0.5) * 2,((function($this) {
			var $r;
			$this.State = Std["int"]($this.State * 214013 + 2531011) & -1;
			$r = Std["int"](Math.abs($this.State));
			return $r;
		}(this)) / Math.pow(2,32) * 2 - 0.5) * 2);
	}
	return v;
}
truffle.RndGen.prototype.__class__ = truffle.RndGen;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
fungi.InfoBox = function(world,HTMLText,x,y,w,h,OnClose,AddSprite) { if( world === $_ ) return; {
	this.X = x;
	this.Y = y;
	this.W = w;
	this.H = h;
	this.AdditionalSprite = AddSprite;
	if(this.AdditionalSprite != null) {
		this.AdditionalSprite.Update(0,null);
		world.AddSprite(this.AdditionalSprite);
	}
	this.Rnd = new truffle.RndGen();
	this.TopFrame = new truffle.Frame("",x,y,w,h);
	this.TopFrame.SetTextSize(10);
	this.TopFrame.UpdateHTMLText(HTMLText);
	world.AddSprite(this.TopFrame);
	this.TopFrame.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
	this.Button = new truffle.Frame("Ok",x + w / 2,y + h - 35,50,20);
	this.Button.SetTextSize(12);
	this.Button.UpdateText("Ok");
	world.AddSprite(this.Button);
	this.Button.MouseDown(this,function(c) {
		OnClose();
		world.RemoveSprite(c.TopFrame);
		world.RemoveSprite(c.Button);
		if(c.OtherButton != null) {
			world.RemoveSprite(c.OtherButton);
		}
		if(c.AdditionalSprite != null) {
			world.RemoveSprite(c.AdditionalSprite);
		}
	});
}}
fungi.InfoBox.__name__ = ["fungi","InfoBox"];
fungi.InfoBox.prototype.Rnd = null;
fungi.InfoBox.prototype.X = null;
fungi.InfoBox.prototype.Y = null;
fungi.InfoBox.prototype.W = null;
fungi.InfoBox.prototype.H = null;
fungi.InfoBox.prototype.TopFrame = null;
fungi.InfoBox.prototype.AdditionalSprite = null;
fungi.InfoBox.prototype.Button = null;
fungi.InfoBox.prototype.OtherButton = null;
fungi.InfoBox.prototype.AddButton = function(world,Name,OnClick) {
	this.OtherButton = new truffle.Frame("",this.X + this.W / 2 + 60,this.Y + this.H - 35,50,20);
	this.OtherButton.SetTextSize(12);
	this.OtherButton.UpdateText(Name);
	world.AddSprite(this.OtherButton);
	this.OtherButton.MouseDown(this,function(c) {
		world.RemoveSprite(c.Button);
		world.RemoveSprite(c.TopFrame);
		world.RemoveSprite(c.OtherButton);
		if(c.AdditionalSprite != null) {
			world.RemoveSprite(c.AdditionalSprite);
		}
		OnClick();
	});
}
fungi.InfoBox.prototype.__class__ = fungi.InfoBox;
fungi.GUIFrameTextures = function() { }
fungi.GUIFrameTextures.__name__ = ["fungi","GUIFrameTextures"];
fungi.GUIFrameTextures.TheFrameTextures = null;
fungi.GUIFrameTextures.Init = function() {
	fungi.GUIFrameTextures.TheFrameTextures = new truffle.FrameTextures();
	fungi.GUIFrameTextures.TheFrameTextures.N.push(Resources.Get("gui-n-001"));
	fungi.GUIFrameTextures.TheFrameTextures.N.push(Resources.Get("gui-n-002"));
	fungi.GUIFrameTextures.TheFrameTextures.N.push(Resources.Get("gui-n-003"));
	fungi.GUIFrameTextures.TheFrameTextures.NE.push(Resources.Get("gui-ne-001"));
	fungi.GUIFrameTextures.TheFrameTextures.NE.push(Resources.Get("gui-ne-002"));
	fungi.GUIFrameTextures.TheFrameTextures.E.push(Resources.Get("gui-e-001"));
	fungi.GUIFrameTextures.TheFrameTextures.E.push(Resources.Get("gui-e-002"));
	fungi.GUIFrameTextures.TheFrameTextures.E.push(Resources.Get("gui-e-003"));
	fungi.GUIFrameTextures.TheFrameTextures.E.push(Resources.Get("gui-e-004"));
	fungi.GUIFrameTextures.TheFrameTextures.SE.push(Resources.Get("gui-se-001"));
	fungi.GUIFrameTextures.TheFrameTextures.SE.push(Resources.Get("gui-se-003"));
	fungi.GUIFrameTextures.TheFrameTextures.S.push(Resources.Get("gui-s-001"));
	fungi.GUIFrameTextures.TheFrameTextures.S.push(Resources.Get("gui-s-002"));
	fungi.GUIFrameTextures.TheFrameTextures.S.push(Resources.Get("gui-s-004"));
	fungi.GUIFrameTextures.TheFrameTextures.SW.push(Resources.Get("gui-sw-001"));
	fungi.GUIFrameTextures.TheFrameTextures.SW.push(Resources.Get("gui-sw-003"));
	fungi.GUIFrameTextures.TheFrameTextures.W.push(Resources.Get("gui-w-001"));
	fungi.GUIFrameTextures.TheFrameTextures.W.push(Resources.Get("gui-w-002"));
	fungi.GUIFrameTextures.TheFrameTextures.W.push(Resources.Get("gui-w-003"));
	fungi.GUIFrameTextures.TheFrameTextures.W.push(Resources.Get("gui-w-004"));
	fungi.GUIFrameTextures.TheFrameTextures.NW.push(Resources.Get("gui-nw-001"));
	fungi.GUIFrameTextures.TheFrameTextures.NW.push(Resources.Get("gui-nw-002"));
	fungi.GUIFrameTextures.TheFrameTextures.NW.push(Resources.Get("gui-nw-003"));
}
fungi.GUIFrameTextures.Get = function() {
	return fungi.GUIFrameTextures.TheFrameTextures;
}
fungi.GUIFrameTextures.prototype.__class__ = fungi.GUIFrameTextures;
hxjson2.JSONEncoder = function(value) { if( value === $_ ) return; {
	this.jsonString = this.convertToString(value);
}}
hxjson2.JSONEncoder.__name__ = ["hxjson2","JSONEncoder"];
hxjson2.JSONEncoder.prototype.jsonString = null;
hxjson2.JSONEncoder.prototype.getString = function() {
	return this.jsonString;
}
hxjson2.JSONEncoder.prototype.convertToString = function(value) {
	if(Std["is"](value,List) || Std["is"](value,IntHash)) value = Lambda.array(value);
	if(Std["is"](value,Hash)) value = this.mapHash(value);
	if(Std["is"](value,String)) {
		return this.escapeString((function($this) {
			var $r;
			var $t = value;
			if(Std["is"]($t,String)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
	}
	else if(Std["is"](value,Float)) {
		return Math.isFinite((function($this) {
			var $r;
			var $t = value;
			if(Std["is"]($t,Float)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)))?value + "":"null";
	}
	else if(Std["is"](value,Bool)) {
		return value?"true":"false";
	}
	else if(Std["is"](value,Array)) {
		return this.arrayToString((function($this) {
			var $r;
			var $t = value;
			if(Std["is"]($t,Array)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
	}
	else if(Std["is"](value,Dynamic) && value != null) {
		return this.objectToString(value);
	}
	return "null";
}
hxjson2.JSONEncoder.prototype.mapHash = function(value) {
	var ret = { };
	{ var $it0 = value.keys();
	while( $it0.hasNext() ) { var i = $it0.next();
	ret[i] = value.get(i);
	}}
	return ret;
}
hxjson2.JSONEncoder.prototype.escapeString = function(str) {
	var s = "";
	var ch;
	var len = str.length;
	{
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			ch = str.charAt(i);
			switch(ch) {
			case "\"":{
				s += "\\\"";
			}break;
			case "\\":{
				s += "\\\\";
			}break;
			case "\n":{
				s += "\\n";
			}break;
			case "\r":{
				s += "\\r";
			}break;
			case "\t":{
				s += "\\t";
			}break;
			default:{
				var code = ch.charCodeAt(0);
				if(ch < " " || code > 127) {
					var hexCode = StringTools.hex(ch.charCodeAt(0));
					var zeroPad = "";
					{
						var _g2 = 0, _g1 = 4 - hexCode.length;
						while(_g2 < _g1) {
							var j = _g2++;
							zeroPad += "0";
						}
					}
					s += "\\u" + zeroPad + hexCode;
				}
				else {
					s += ch;
				}
			}break;
			}
		}
	}
	return "\"" + s + "\"";
}
hxjson2.JSONEncoder.prototype.arrayToString = function(a) {
	var s = "";
	{
		var _g1 = 0, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(s.length > 0) {
				s += ",";
			}
			s += this.convertToString(a[i]);
		}
	}
	return "[" + s + "]";
}
hxjson2.JSONEncoder.prototype.objectToString = function(o) {
	var s = "";
	var value;
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			value = Reflect.field(o,key);
			if(!Reflect.isFunction(value)) {
				if(s.length > 0) {
					s += ",";
				}
				s += this.escapeString(key) + ":" + this.convertToString(value);
			}
		}
	}
	return "{" + s + "}";
}
hxjson2.JSONEncoder.prototype.__class__ = hxjson2.JSONEncoder;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
hxjson2.JSON = function() { }
hxjson2.JSON.__name__ = ["hxjson2","JSON"];
hxjson2.JSON.encode = function(o) {
	return new hxjson2.JSONEncoder(o).getString();
}
hxjson2.JSON.decode = function(s,strict) {
	if(strict == null) strict = true;
	return new hxjson2.JSONDecoder(s,strict).getValue();
}
hxjson2.JSON.prototype.__class__ = hxjson2.JSON;
Main = function(p) { if( p === $_ ) return; {
	var fw = new fungi.FungiWorld(15,15);
	truffle.App.call(this,fw);
}}
Main.__name__ = ["Main"];
Main.__super__ = truffle.App;
for(var k in truffle.App.prototype ) Main.prototype[k] = truffle.App.prototype[k];
Main.main = function() {
	var m = new Main();
}
Main.prototype.__class__ = Main;
fungi.Cube = function(world,pos) { if( world === $_ ) return; {
	truffle.SpriteEntity.call(this,world,pos,Resources.Get("wire-cube"));
}}
fungi.Cube.__name__ = ["fungi","Cube"];
fungi.Cube.__super__ = truffle.SpriteEntity;
for(var k in truffle.SpriteEntity.prototype ) fungi.Cube.prototype[k] = truffle.SpriteEntity.prototype[k];
fungi.Cube.prototype.UpdateTex = function(rnd) {
	this.Spr.ChangeBitmap(Resources.Get(rnd.Choose(["ground-cube-a-1","ground-cube-a-2","ground-cube-a-3","ground-cube-a-4","ground-cube-a-5"])));
}
fungi.Cube.prototype.__class__ = fungi.Cube;
hxjson2.JSONTokenizer = function(s,strict) { if( s === $_ ) return; {
	this.jsonString = s;
	this.strict = strict;
	this.loc = 0;
	this.nextChar();
}}
hxjson2.JSONTokenizer.__name__ = ["hxjson2","JSONTokenizer"];
hxjson2.JSONTokenizer.prototype.obj = null;
hxjson2.JSONTokenizer.prototype.jsonString = null;
hxjson2.JSONTokenizer.prototype.loc = null;
hxjson2.JSONTokenizer.prototype.ch = null;
hxjson2.JSONTokenizer.prototype.strict = null;
hxjson2.JSONTokenizer.prototype.getNextToken = function() {
	var token = new hxjson2.JSONToken();
	this.skipIgnored();
	switch(this.ch) {
	case "{":{
		token.type = hxjson2.JSONTokenType.LEFT_BRACE;
		token.value = "{";
		this.nextChar();
	}break;
	case "}":{
		token.type = hxjson2.JSONTokenType.RIGHT_BRACE;
		token.value = "}";
		this.nextChar();
	}break;
	case "[":{
		token.type = hxjson2.JSONTokenType.LEFT_BRACKET;
		token.value = "[";
		this.nextChar();
	}break;
	case "]":{
		token.type = hxjson2.JSONTokenType.RIGHT_BRACKET;
		token.value = "]";
		this.nextChar();
	}break;
	case ",":{
		token.type = hxjson2.JSONTokenType.COMMA;
		token.value = ",";
		this.nextChar();
	}break;
	case ":":{
		token.type = hxjson2.JSONTokenType.COLON;
		token.value = ":";
		this.nextChar();
	}break;
	case "t":{
		var possibleTrue = "t" + this.nextChar() + this.nextChar() + this.nextChar();
		if(possibleTrue == "true") {
			token.type = hxjson2.JSONTokenType.TRUE;
			token.value = true;
			this.nextChar();
		}
		else {
			this.parseError("Expecting 'true' but found " + possibleTrue);
		}
	}break;
	case "f":{
		var possibleFalse = "f" + this.nextChar() + this.nextChar() + this.nextChar() + this.nextChar();
		if(possibleFalse == "false") {
			token.type = hxjson2.JSONTokenType.FALSE;
			token.value = false;
			this.nextChar();
		}
		else {
			this.parseError("Expecting 'false' but found " + possibleFalse);
		}
	}break;
	case "n":{
		var possibleNull = "n" + this.nextChar() + this.nextChar() + this.nextChar();
		if(possibleNull == "null") {
			token.type = hxjson2.JSONTokenType.NULL;
			token.value = null;
			this.nextChar();
		}
		else {
			this.parseError("Expecting 'null' but found " + possibleNull);
		}
	}break;
	case "N":{
		var possibleNAN = "N" + this.nextChar() + this.nextChar();
		if(possibleNAN == "NAN" || possibleNAN == "NaN") {
			token.type = hxjson2.JSONTokenType.NAN;
			token.value = Math.NaN;
			this.nextChar();
		}
		else {
			this.parseError("Expecting 'nan' but found " + possibleNAN);
		}
	}break;
	case "\"":{
		token = this.readString();
	}break;
	default:{
		if(this.isDigit(this.ch) || this.ch == "-") {
			token = this.readNumber();
		}
		else if(this.ch == "") {
			return null;
		}
		else {
			this.parseError("Unexpected " + this.ch + " encountered");
		}
	}break;
	}
	return token;
}
hxjson2.JSONTokenizer.prototype.readString = function() {
	var string = "";
	this.nextChar();
	while(this.ch != "\"" && this.ch != "") {
		if(this.ch == "\\") {
			this.nextChar();
			switch(this.ch) {
			case "\"":{
				string += "\"";
			}break;
			case "/":{
				string += "/";
			}break;
			case "\\":{
				string += "\\";
			}break;
			case "n":{
				string += "\n";
			}break;
			case "r":{
				string += "\r";
			}break;
			case "t":{
				string += "\t";
			}break;
			case "u":{
				var hexValue = "";
				{
					var _g = 0;
					while(_g < 4) {
						var i = _g++;
						if(!this.isHexDigit(this.nextChar())) {
							this.parseError(" Excepted a hex digit, but found: " + this.ch);
						}
						hexValue += this.ch;
					}
				}
				string += String.fromCharCode(this.hexValToInt(hexValue));
			}break;
			default:{
				string += "\\" + this.ch;
			}break;
			}
		}
		else {
			string += this.ch;
		}
		this.nextChar();
	}
	if(this.ch == "") {
		this.parseError("Unterminated string literal");
	}
	this.nextChar();
	var token = new hxjson2.JSONToken();
	token.type = hxjson2.JSONTokenType.STRING;
	token.value = string;
	return token;
}
hxjson2.JSONTokenizer.prototype.hexValToInt = function(hexVal) {
	var ret = 0;
	{
		var _g1 = 0, _g = hexVal.length;
		while(_g1 < _g) {
			var i = _g1++;
			ret = ret << 4;
			switch(hexVal.charAt(i).toUpperCase()) {
			case "1":{
				ret += 1;
			}break;
			case "2":{
				ret += 2;
			}break;
			case "3":{
				ret += 3;
			}break;
			case "4":{
				ret += 4;
			}break;
			case "5":{
				ret += 5;
			}break;
			case "6":{
				ret += 6;
			}break;
			case "7":{
				ret += 7;
			}break;
			case "8":{
				ret += 8;
			}break;
			case "9":{
				ret += 9;
			}break;
			case "A":{
				ret += 10;
			}break;
			case "B":{
				ret += 11;
			}break;
			case "C":{
				ret += 12;
			}break;
			case "D":{
				ret += 13;
			}break;
			case "E":{
				ret += 14;
			}break;
			case "F":{
				ret += 15;
			}break;
			}
		}
	}
	return ret;
}
hxjson2.JSONTokenizer.prototype.readNumber = function() {
	var input = "";
	if(this.ch == "-") {
		input += "-";
		this.nextChar();
	}
	if(!this.isDigit(this.ch)) {
		this.parseError("Expecting a digit");
	}
	if(this.ch == "0") {
		input += this.ch;
		this.nextChar();
		if(this.isDigit(this.ch)) {
			this.parseError("A digit cannot immediately follow 0");
		}
		else {
			if(!this.strict && this.ch == "x") {
				input += this.ch;
				this.nextChar();
				if(this.isHexDigit(this.ch)) {
					input += this.ch;
					this.nextChar();
				}
				else {
					this.parseError("Number in hex format require at least one hex digit after \"0x\"");
				}
				while(this.isHexDigit(this.ch)) {
					input += this.ch;
					this.nextChar();
				}
				input = Std.string(this.hexValToInt(input));
			}
		}
	}
	else {
		while(this.isDigit(this.ch)) {
			input += this.ch;
			this.nextChar();
		}
	}
	if(this.ch == ".") {
		input += ".";
		this.nextChar();
		if(!this.isDigit(this.ch)) {
			this.parseError("Expecting a digit");
		}
		while(this.isDigit(this.ch)) {
			input += this.ch;
			this.nextChar();
		}
	}
	if(this.ch == "e" || this.ch == "E") {
		input += "e";
		this.nextChar();
		if(this.ch == "+" || this.ch == "-") {
			input += this.ch;
			this.nextChar();
		}
		if(!this.isDigit(this.ch)) {
			this.parseError("Scientific notation number needs exponent value");
		}
		while(this.isDigit(this.ch)) {
			input += this.ch;
			this.nextChar();
		}
	}
	var num = Std.parseFloat(input);
	if(Math.isFinite(num) && !Math.isNaN(num)) {
		var token = new hxjson2.JSONToken();
		token.type = hxjson2.JSONTokenType.NUMBER;
		token.value = num;
		return token;
	}
	else {
		this.parseError("Number " + num + " is not valid!");
	}
	return null;
}
hxjson2.JSONTokenizer.prototype.nextChar = function() {
	return this.ch = this.jsonString.charAt(this.loc++);
}
hxjson2.JSONTokenizer.prototype.skipIgnored = function() {
	var originalLoc;
	do {
		originalLoc = this.loc;
		this.skipWhite();
		this.skipComments();
	} while(originalLoc != this.loc);
}
hxjson2.JSONTokenizer.prototype.skipComments = function() {
	if(this.ch == "/") {
		this.nextChar();
		switch(this.ch) {
		case "/":{
			do {
				this.nextChar();
			} while(this.ch != "\n" && this.ch != "");
			this.nextChar();
		}break;
		case "*":{
			this.nextChar();
			while(true) {
				if(this.ch == "*") {
					this.nextChar();
					if(this.ch == "/") {
						this.nextChar();
						break;
					}
				}
				else {
					this.nextChar();
				}
				if(this.ch == "") {
					this.parseError("Multi-line comment not closed");
				}
			}
		}break;
		default:{
			this.parseError("Unexpected " + this.ch + " encountered (expecting '/' or '*' )");
		}break;
		}
	}
}
hxjson2.JSONTokenizer.prototype.skipWhite = function() {
	while(this.isWhiteSpace(this.ch)) {
		this.nextChar();
	}
}
hxjson2.JSONTokenizer.prototype.isWhiteSpace = function(ch) {
	return ch == " " || ch == "\t" || ch == "\n" || ch == "\r";
}
hxjson2.JSONTokenizer.prototype.isDigit = function(ch) {
	return ch >= "0" && ch <= "9";
}
hxjson2.JSONTokenizer.prototype.isHexDigit = function(ch) {
	var uc = ch.toUpperCase();
	return this.isDigit(ch) || uc >= "A" && uc <= "F";
}
hxjson2.JSONTokenizer.prototype.parseError = function(message) {
	throw new hxjson2.JSONParseError(message,this.loc,this.jsonString);
}
hxjson2.JSONTokenizer.prototype.__class__ = hxjson2.JSONTokenizer;
fungi.ButterflyState = { __ename__ : ["fungi","ButterflyState"], __constructs__ : ["SearchingPlant","ApproachingPlant","ExaminePlant","Wait"] }
fungi.ButterflyState.SearchingPlant = ["SearchingPlant",0];
fungi.ButterflyState.SearchingPlant.toString = $estr;
fungi.ButterflyState.SearchingPlant.__enum__ = fungi.ButterflyState;
fungi.ButterflyState.ApproachingPlant = ["ApproachingPlant",1];
fungi.ButterflyState.ApproachingPlant.toString = $estr;
fungi.ButterflyState.ApproachingPlant.__enum__ = fungi.ButterflyState;
fungi.ButterflyState.ExaminePlant = ["ExaminePlant",2];
fungi.ButterflyState.ExaminePlant.toString = $estr;
fungi.ButterflyState.ExaminePlant.__enum__ = fungi.ButterflyState;
fungi.ButterflyState.Wait = ["Wait",3];
fungi.ButterflyState.Wait.toString = $estr;
fungi.ButterflyState.Wait.__enum__ = fungi.ButterflyState;
fungi.Butterfly = function(world,pos,seed) { if( world === $_ ) return; {
	truffle.SkeletonEntity.call(this,world,pos);
	this.NeedsUpdate = true;
	this.UpdateFreq = 3;
	this.Speed = 0.05;
	this.Rnd = new truffle.RndGen();
	this.Seed = seed;
	this.Rnd.Seed(seed);
	this.MessageTime = -1;
	this.State = fungi.ButterflyState.SearchingPlant;
	this.Message = new truffle.Frame("",0,0,128,64);
	this.Message.SetTextSize(10);
	this.Message.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
	this.Message.R = 0.8;
	this.Message.G = 1;
	this.Message.B = 1;
	world.AddSprite(this.Message);
	this.Message.Hide(true);
	this.LeftWing = new truffle.Bone(new truffle.Vec2(0,0),Resources.Get("wing"));
	this.Root = this.LeftWing;
	this.LeftWing.Centre = new truffle.Vec2(11,9);
	world.AddSprite(this.LeftWing);
	this.RightWing = new truffle.Bone(new truffle.Vec2(0,0),Resources.Get("wing"));
	this.RightWing.SetScale(new truffle.Vec2(-1,1));
	this.RightWing.Centre = new truffle.Vec2(11,9);
	this.LeftWing.AddChild(world,this.RightWing);
	var down = function(c) {
		c.OverridePos = true;
		c.LeftWing.EnableMouse(false);
		c.RightWing.EnableMouse(false);
		c.Message.Hide(true);
		var ps = (function($this) {
			var $r;
			var $t = world.Plants;
			if(Std["is"]($t,Array)) $t;
			else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		{
			var _g = 0;
			while(_g < ps.length) {
				var p = ps[_g];
				++_g;
				p.EnableSelection();
			}
		}
	}
	this.RightWing.MouseDown(this,down);
	this.LeftWing.MouseDown(this,down);
}}
fungi.Butterfly.__name__ = ["fungi","Butterfly"];
fungi.Butterfly.__super__ = truffle.SkeletonEntity;
for(var k in truffle.SkeletonEntity.prototype ) fungi.Butterfly.prototype[k] = truffle.SkeletonEntity.prototype[k];
fungi.Butterfly.prototype.LeftWing = null;
fungi.Butterfly.prototype.RightWing = null;
fungi.Butterfly.prototype.Rnd = null;
fungi.Butterfly.prototype.Message = null;
fungi.Butterfly.prototype.MessageTime = null;
fungi.Butterfly.prototype.Seed = null;
fungi.Butterfly.prototype.State = null;
fungi.Butterfly.prototype.AddMsg = function(text) {
	this.Message.UpdatePosition(Math.floor(this.Pos.x - 64),Math.floor(this.Pos.y - 100));
	this.Message.UpdateText(text);
	var s = this.Rnd.State;
	this.Rnd.Seed(this.Seed);
	this.Message.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
	this.Rnd.Seed(s);
	this.Message.Hide(false);
	this.MessageTime = Date.now().getSeconds() + 5;
}
fungi.Butterfly.prototype.OnSortScene = function(world,order) {
	var order1 = truffle.SkeletonEntity.prototype.OnSortScene.call(this,world,order);
	this.Message.SetDepth(order1++);
	return order1;
}
fungi.Butterfly.prototype.UpdateMouse = function(x,y) {
	if(this.OverridePos) {
		this.Pos = new truffle.Vec3(x,y,0);
	}
}
fungi.Butterfly.prototype.Update = function(frame,world) {
	var world1 = (function($this) {
		var $r;
		var $t = world;
		if(Std["is"]($t,fungi.FungiWorld)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	if(!this.Message.IsHidden()) {
		this.Message.UpdatePosition(Math.floor(this.Pos.x - 64),Math.floor(this.Pos.y - 100));
		var s = this.Rnd.State;
		this.Rnd.Seed(this.Seed);
		this.Message.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
		this.Rnd.Seed(s);
		if(Date.now().getSeconds() > this.MessageTime) {
			this.Message.Hide(true);
		}
	}
	var Rot = this.Rnd.RndRange(-45,45);
	this.LeftWing.SetRotate(Rot + this.Rnd.RndRange(-10,10));
	this.RightWing.SetRotate(Rot * 2);
	if(!this.OverridePos && this.Rnd.RndInt() % 10 == 0) {
		var $e = this.State;
		switch( $e[1] ) {
		case 0:
		{
			{
				if(world1.Plants.length > 0) {
					this.SetLogicalPos(world1,this.Rnd.Choose(world1.Plants).LogicalPos.Add(new truffle.Vec3(0,0,3)));
					this.State = fungi.ButterflyState.ApproachingPlant;
				}
			}
		}break;
		case 1:
		{
			{
				if(this.MoveTime > 1.0) {
					this.State = fungi.ButterflyState.ExaminePlant;
				}
			}
		}break;
		case 2:
		{
			{
				var plant = world1.Get("fungi.Plant",new truffle.Vec2(this.LogicalPos.x,this.LogicalPos.y));
				if(plant != null) {
					if(this.Rnd.RndInt() % 10 == 7) {
						this.State = fungi.ButterflyState.Wait;
					}
					else {
						this.State = fungi.ButterflyState.SearchingPlant;
					}
				}
				else {
					this.State = fungi.ButterflyState.SearchingPlant;
				}
			}
		}break;
		case 3:
		{
			{
				if(Date.now().getSeconds() > this.MessageTime && this.Rnd.RndInt() % 10 == 7) {
					this.Message.Hide(true);
					this.State = fungi.ButterflyState.SearchingPlant;
				}
			}
		}break;
		}
	}
	truffle.SkeletonEntity.prototype.Update.call(this,frame,world1);
}
fungi.Butterfly.prototype.CheckPlants = function(world) {
	if(this.OverridePos) {
		{
			var _g = 0, _g1 = (function($this) {
				var $r;
				var $t = world.Plants;
				if(Std["is"]($t,Array)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(p.GotSelect) {
					this.AddMsg("This " + p.PlantType + " was planted by " + p.OwnerName);
				}
				p.Spr.EnableMouse(false);
				p.GotSelect = false;
			}
		}
		this.OverridePos = false;
		this.LeftWing.EnableMouse(true);
		this.RightWing.EnableMouse(true);
	}
}
fungi.Butterfly.prototype.__class__ = fungi.Butterfly;
fungi.Bug = function(world,pos,seed) { if( world === $_ ) return; {
	truffle.SpriteEntity.call(this,world,pos,Resources.Get("spider-a"));
	this.NeedsUpdate = true;
	this.UpdateFreq = 3;
	this.Speed = 0.02;
	this.Rnd = new truffle.RndGen();
	this.Rnd.Seed(seed);
}}
fungi.Bug.__name__ = ["fungi","Bug"];
fungi.Bug.__super__ = truffle.SpriteEntity;
for(var k in truffle.SpriteEntity.prototype ) fungi.Bug.prototype[k] = truffle.SpriteEntity.prototype[k];
fungi.Bug.prototype.Rnd = null;
fungi.Bug.prototype.Update = function(frame,world) {
	var world1 = (function($this) {
		var $r;
		var $t = world;
		if(Std["is"]($t,fungi.FungiWorld)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	{
		this.Spr.ChangeBitmap(Resources.Get(this.Rnd.Choose(["spider-a","spider-b","spider-c"])));
	}
	if(this.Rnd.RndInt() % 10 == 0) {
		var lp = this.LogicalPos.Add(new truffle.Vec3(this.Rnd.RndRange(-1,2),this.Rnd.RndRange(-1,2),0));
		var cube = world1.Get("fungi.Cube",new truffle.Vec2(this.LogicalPos.x,this.LogicalPos.y));
		if(cube != null) {
			lp.z = cube.LogicalPos.z + 2;
		}
		if(lp.x < 0) lp.x = 0;
		if(lp.y < 0) lp.y = 0;
		if(lp.x > 14) lp.x = 14;
		if(lp.y > 14) lp.y = 14;
		this.SetLogicalPos(world1,lp);
	}
	truffle.SpriteEntity.prototype.Update.call(this,frame,world1);
}
fungi.Bug.prototype.__class__ = fungi.Bug;
fungi.Critters = function(world,numcritters) { if( world === $_ ) return; {
	this.CritterList = new List();
	this.ButterflyList = new List();
	this.Rnd = new truffle.RndGen();
	this.ButterflyList.push(new fungi.Butterfly(world,new truffle.Vec3(this.Rnd.RndInt() % 15,this.Rnd.RndInt() % 15,4),12));
	this.ButterflyList.push(new fungi.Butterfly(world,new truffle.Vec3(this.Rnd.RndInt() % 15,this.Rnd.RndInt() % 15,4),1));
}}
fungi.Critters.__name__ = ["fungi","Critters"];
fungi.Critters.prototype.CritterList = null;
fungi.Critters.prototype.ButterflyList = null;
fungi.Critters.prototype.Rnd = null;
fungi.Critters.prototype.UpdateMouse = function(x,y) {
	{ var $it0 = this.ButterflyList.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		c.UpdateMouse(x,y);
	}
	}}
}
fungi.Critters.prototype.CheckPlants = function(world) {
	{ var $it0 = this.ButterflyList.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		c.CheckPlants(world);
	}
	}}
}
fungi.Critters.prototype.Update = function() {
	{ var $it0 = this.ButterflyList.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		if(c.Hidden) {
			c.Hide(false);
		}
	}
	}}
}
fungi.Critters.prototype.__class__ = fungi.Critters;
truffle.Edge = function(f,t,w) { if( f === $_ ) return; {
	this.From = f;
	this.To = t;
	this.Weight = w;
}}
truffle.Edge.__name__ = ["truffle","Edge"];
truffle.Edge.prototype.From = null;
truffle.Edge.prototype.To = null;
truffle.Edge.prototype.Weight = null;
truffle.Edge.prototype.Eq = function(other) {
	return this.From == other.From && this.To == other.To || this.From == other.To && this.To == other.From;
}
truffle.Edge.prototype.__class__ = truffle.Edge;
truffle.Graph = function(edges) { if( edges === $_ ) return; {
	this.Edges = edges;
	this.UpdateVertices();
	this.Root = 999;
}}
truffle.Graph.__name__ = ["truffle","Graph"];
truffle.Graph.prototype.Edges = null;
truffle.Graph.prototype.Vertices = null;
truffle.Graph.prototype.Root = null;
truffle.Graph.prototype.Print = function() {
	{ var $it0 = this.Edges.iterator();
	while( $it0.hasNext() ) { var e = $it0.next();
	{
		haxe.Log.trace(Std.string(e.From) + " <- " + Std.string(e.Weight) + " -> " + Std.string(e.To),{ fileName : "Graph.hx", lineNumber : 59, className : "truffle.Graph", methodName : "Print"});
	}
	}}
	haxe.Log.trace("root is " + Std.string(this.Root),{ fileName : "Graph.hx", lineNumber : 61, className : "truffle.Graph", methodName : "Print"});
}
truffle.Graph.prototype.AddVertex = function(id) {
	{ var $it0 = this.Vertices.iterator();
	while( $it0.hasNext() ) { var v = $it0.next();
	{
		if(v == id) return;
	}
	}}
	this.Vertices.add(id);
}
truffle.Graph.prototype.AddEdge = function(edge) {
	if(this.Root == 999) this.Root = edge.From;
	this.Edges.add(edge);
	this.AddVertex(edge.From);
	this.AddVertex(edge.To);
}
truffle.Graph.prototype.RemoveEdge = function(edge) {
	if(!this.Edges.remove(edge)) {
		this.Edges.remove(new truffle.Edge(edge.From,edge.To,edge.Weight));
	}
}
truffle.Graph.prototype.ContainsVertex = function(vertex) {
	{ var $it0 = this.Vertices.iterator();
	while( $it0.hasNext() ) { var v = $it0.next();
	{
		if(v == vertex) return true;
	}
	}}
	return false;
}
truffle.Graph.prototype.UpdateVertices = function() {
	this.Vertices = new List();
	{ var $it0 = this.Edges.iterator();
	while( $it0.hasNext() ) { var edge = $it0.next();
	{
		this.AddVertex(edge.From);
		this.AddVertex(edge.To);
	}
	}}
}
truffle.Graph.prototype.NumVertices = function() {
	return this.Vertices.length;
}
truffle.Graph.prototype.ContainsEdge = function(edge) {
	{ var $it0 = this.Edges.iterator();
	while( $it0.hasNext() ) { var e = $it0.next();
	{
		if(e.Eq(edge)) return true;
	}
	}}
	return false;
}
truffle.Graph.prototype.GetEdges = function(vertex) {
	var ret = new List();
	{ var $it0 = this.Edges.iterator();
	while( $it0.hasNext() ) { var edge = $it0.next();
	{
		if(edge.From == vertex) ret.add(edge);
	}
	}}
	return ret;
}
truffle.Graph.prototype.GetCheapestEdge = function() {
	var lowest_cost = 9999.0;
	var cheapest_edge = new truffle.Edge(-1,-1,9999.0);
	{ var $it0 = this.Edges.iterator();
	while( $it0.hasNext() ) { var edge = $it0.next();
	{
		if(edge.Weight < lowest_cost) {
			lowest_cost = edge.Weight;
			cheapest_edge = edge;
		}
	}
	}}
	return cheapest_edge;
}
truffle.Graph.prototype.MST = function(vertex) {
	var candidate_edges = new truffle.Graph(new List());
	var mst = new truffle.Graph(new List());
	mst.AddVertex(vertex);
	while(mst.NumVertices() < this.NumVertices()) {
		{ var $it0 = this.GetEdges(vertex).iterator();
		while( $it0.hasNext() ) { var edge = $it0.next();
		{
			if(!(mst.ContainsVertex(edge.From) && mst.ContainsVertex(edge.To))) {
				candidate_edges.AddEdge(edge);
			}
		}
		}}
		var cheapest = candidate_edges.GetCheapestEdge();
		if(cheapest.From == -1 || cheapest.To == -1) {
			haxe.Log.trace("MST error",{ fileName : "Graph.hx", lineNumber : 185, className : "truffle.Graph", methodName : "MST"});
			return new truffle.Graph(new List());
		}
		candidate_edges.RemoveEdge(cheapest);
		if(!(mst.ContainsVertex(cheapest.From) && mst.ContainsVertex(cheapest.To))) {
			if(mst.ContainsVertex(cheapest.From)) vertex = cheapest.To;
			else vertex = cheapest.From;
			mst.AddEdge(cheapest);
		}
	}
	return mst;
}
truffle.Graph.prototype.__class__ = truffle.Graph;
fungi.Spirit = function(world,name,pos) { if( world === $_ ) return; {
	truffle.ClusterEntity.call(this,world,pos);
	this.Name = name;
	this.HighestEmotion = "Not calculated yet";
	this.Speed = 0.02;
	this.UpdateFreq = 2;
	this.LastData = [];
	this.Rnd = new truffle.RndGen();
	this.TotalEmotion = 0;
	this.EmotionColour = 0;
	this.HighestScore = 0;
	this.MessageTime = -1;
	this.LastMsgTxt = "";
	this.Mood = 0;
	this.Message = new truffle.Frame("",0,0,128,64);
	this.Message.SetTextSize(10);
	this.Message.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
	this.Message.R = 1;
	this.Message.G = 1;
	this.Message.B = 0.8;
	world.AddSprite(this.Message);
	this.Message.Hide(true);
	this.EmotionalColours = { JOY : [this.ToCol(255,224,1),this.ToCol(255,224,1),this.ToCol(255,126,2),this.ToCol(0,155,2)], FEAR : [this.ToCol(128,128,128),this.ToCol(128,64,2),this.ToCol(97,0,98),this.ToCol(220,2,1)], LOVE : [this.ToCol(225,224,1),this.ToCol(220,3,0),this.ToCol(225,117,225),this.ToCol(0,115,2)], HATE : [this.ToCol(128,128,128),this.ToCol(128,64,2),this.ToCol(97,0,98),this.ToCol(220,2,1)], PRIDE : [this.ToCol(29,201,33)]};
	this.DesiredPos = new truffle.Vec2(this.LogicalPos.x,this.LogicalPos.y);
	fungi.Spirit.EmotionIndices = { LOVE : 0, HATE : 1, HOPE : 2, FEAR : 3, SATISFACTION : 4, RELIEF : 5, FEARS_CONFIRMED : 6, DISAPOINTMENT : 7, JOY : 8, DISTRESS : 9, HAPPY_FOR : 10, PITTY : 11, RESENTMENT : 12, GLOATING : 13, PRIDE : 14, SHAME : 15, GRATIFICATION : 16, REMORSE : 17, ADMIRATION : 18, REPROACH : 19, GRATITUDE : 20, ANGER : 21};
	this.RawEmotions = { LOVE : 0, HATE : 0, HOPE : 0, FEAR : 0, SATISFACTION : 0, RELIEF : 0, FEARS_CONFIRMED : 0, DISAPOINTMENT : 0, JOY : 0, DISTRESS : 0, HAPPY_FOR : 0, PITTY : 0, RESENTMENT : 0, GLOATING : 0, PRIDE : 0, SHAME : 0, GRATIFICATION : 0, REMORSE : 0, ADMIRATION : 0, REPROACH : 0, GRATITUDE : 0, ANGER : 0};
	this.Emotions = { LOVE : 0, HATE : 0, HOPE : 0, FEAR : 0, SATISFACTION : 0, RELIEF : 0, FEARS_CONFIRMED : 0, DISAPOINTMENT : 0, JOY : 0, DISTRESS : 0, HAPPY_FOR : 0, PITTY : 0, RESENTMENT : 0, GLOATING : 0, PRIDE : 0, SHAME : 0, GRATIFICATION : 0, REMORSE : 0, ADMIRATION : 0, REPROACH : 0, GRATITUDE : 0, ANGER : 0};
}}
fungi.Spirit.__name__ = ["fungi","Spirit"];
fungi.Spirit.__super__ = truffle.ClusterEntity;
for(var k in truffle.ClusterEntity.prototype ) fungi.Spirit.prototype[k] = truffle.ClusterEntity.prototype[k];
fungi.Spirit.EmotionIndices = null;
fungi.Spirit.GetEmotionColour = function(Emotion) {
	return new truffle.Vec3(0,0,0);
}
fungi.Spirit.IntToColourTriple = function(col) {
	return new truffle.Vec3((col >> 16 & 255) / 255.0,(col >> 8 & 255) / 255.0,(col & 255) / 255.0);
}
fungi.Spirit.prototype.Name = null;
fungi.Spirit.prototype.Debug = null;
fungi.Spirit.prototype.RawEmotions = null;
fungi.Spirit.prototype.Emotions = null;
fungi.Spirit.prototype.DesiredPos = null;
fungi.Spirit.prototype.LastData = null;
fungi.Spirit.prototype.Message = null;
fungi.Spirit.prototype.Emitter = null;
fungi.Spirit.prototype.EmotionalColours = null;
fungi.Spirit.prototype.Rnd = null;
fungi.Spirit.prototype.HighestEmotion = null;
fungi.Spirit.prototype.TotalEmotion = null;
fungi.Spirit.prototype.EmotionColour = null;
fungi.Spirit.prototype.HighestScore = null;
fungi.Spirit.prototype.MessageTime = null;
fungi.Spirit.prototype.LastMsgTxt = null;
fungi.Spirit.prototype.Mood = null;
fungi.Spirit.prototype.ToCol = function(r,g,b) {
	return new truffle.Vec3(r / 255.0,g / 255.0,b / 255.0);
}
fungi.Spirit.prototype.UpdateEmitter = function() {
	var Colours = Reflect.field(this.EmotionalColours,this.HighestEmotion);
	if(this.HighestEmotion != "" && Colours != null) {
		{
			var _g1 = 0, _g = this.Emitter.Colours.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.Emitter.Colours[i] = Colours[this.Rnd.RndInt() % Colours.length];
			}
		}
		this.Emitter.RecycleRate = 80;
	}
	else {
		this.Emitter.RecycleRate = 0;
	}
}
fungi.Spirit.prototype.BuildDebug = function(c) {
	this.Debug = new truffle.Frame("nowt yet.",this.Pos.x - 200,this.Pos.y - 25,140,150);
	this.Debug.Hide(true);
	c.AddSprite(this.Debug);
}
fungi.Spirit.prototype.AddMsg = function(msg,text) {
	this.Message.UpdateText(text);
	this.Message.Hide(false);
	var Col = fungi.Spirit.GetEmotionColour(msg.emotion);
	this.Message.R = Col.x;
	this.Message.G = Col.y;
	this.Message.B = Col.z;
	this.MessageTime = Date.now().getSeconds() + 30;
}
fungi.Spirit.prototype.OnSortScene = function(world,order) {
	var order1 = truffle.ClusterEntity.prototype.OnSortScene.call(this,world,order);
	this.Message.SetDepth(order1++);
	return order1;
}
fungi.Spirit.prototype.UpdateDebug = function(e) {
	var ee = e.fatemotions.content;
	if(ee == null) return;
	this.Mood = Std.parseFloat(ee[0].content[0]);
	var text = this.Name + "\nMood:" + ee[0].content[0] + "\n";
	text += "Highest Emotion:" + this.HighestEmotion + "=" + this.HighestScore + "\n";
	text += "Total Emotions:" + this.TotalEmotion + "\n";
	text += "Causes:\n";
	{
		var _g1 = 1, _g = ee.length;
		while(_g1 < _g) {
			var i = _g1++;
			text += ee[i].attrs.type + " " + ee[i].attrs.direction + "\n";
		}
	}
	text += "Messages:\n";
	var acs = (function($this) {
		var $r;
		var $t = e.fatactions;
		if(Std["is"]($t,Array)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	{
		var _g1 = 0, _g = acs.length;
		while(_g1 < _g) {
			var i = _g1++;
			text += acs[i].msg + "\n";
		}
	}
	this.Debug.UpdateText(text);
	this.Debug.UpdatePosition(Std["int"](this.Pos.x - 200),Std["int"](this.Pos.y - 25));
}
fungi.Spirit.prototype.UpdateEmotions = function(e,world) {
	var TilePos = new truffle.Vec2(e.tile.x,e.tile.y);
	var LocalPos = new truffle.Vec2(2,2);
	var msg = Reflect.field(e,"last-message");
	if(msg.code != null) {
		TilePos = new truffle.Vec2(e.emotionalloc.tile.x,e.emotionalloc.tile.y);
		LocalPos = new truffle.Vec2(e.emotionalloc.pos.x,e.emotionalloc.pos.y);
	}
	this.SetTilePos(TilePos);
	var dst = new truffle.Vec2((TilePos.x - world.WorldPos.x + 1) * 5,(TilePos.y - world.WorldPos.y + 1) * 5);
	dst = new truffle.Vec2(dst.x + LocalPos.x,dst.y + LocalPos.y);
	if(dst.x != this.DesiredPos.x || dst.y != this.DesiredPos.y) {
		if(world.GetOther(this,"fungi.Spirit",dst)) {
			dst = dst.Add(new truffle.Vec2(world.MyRndGen.Choose([-1,0,1]),world.MyRndGen.Choose([-1,0,1])));
		}
		this.SetLogicalPos(world,new truffle.Vec3(dst.x,dst.y,3));
	}
	this.RawEmotions = e.emotions;
	this.Emotions = this.RawEmotions;
	this.TotalEmotion = 0;
	{
		var _g = 0, _g1 = Reflect.fields(this.RawEmotions);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.TotalEmotion += Reflect.field(this.RawEmotions,f);
		}
	}
	this.HighestEmotion = "";
	this.HighestScore = 0;
	{
		var _g = 0, _g1 = Reflect.fields(this.Emotions);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			var Score = Reflect.field(this.Emotions,f);
			if(Score > this.HighestScore) {
				this.HighestScore = Score;
				this.HighestEmotion = f;
			}
		}
	}
	if(!this.Debug.IsHidden()) this.UpdateDebug(e);
	var msg1 = Reflect.field(e,"last-message");
	if(msg1.code != null) {
		var txt = world.GameGUI.StrMkr.MsgToString(msg1);
		if(txt != this.LastMsgTxt) {
			this.AddMsg(msg1,txt);
			this.LastMsgTxt = txt;
		}
	}
}
fungi.Spirit.prototype.Hide = function(s) {
	truffle.ClusterEntity.prototype.Hide.call(this,s);
	if(s) {
		this.Debug.Hide(s);
		this.Message.Hide(s);
	}
}
fungi.Spirit.prototype.Update = function(frame,world) {
	var world1 = (function($this) {
		var $r;
		var $t = world;
		if(Std["is"]($t,fungi.FungiWorld)) $t;
		else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	truffle.ClusterEntity.prototype.Update.call(this,frame,world1);
	if(!this.Message.IsHidden()) {
		this.Rnd.Seed(0);
		var x = Math.floor(this.Root.Pos.x - 192);
		if(this.Root.Pos.x < 320) x = Math.floor(this.Root.Pos.x + 64);
		this.Message.UpdatePosition(x,Math.floor(this.Root.Pos.y - 20));
		this.Message.InitTextures(fungi.GUIFrameTextures.Get(),this.Rnd);
		if(Date.now().getSeconds() > this.MessageTime) this.Message.Hide(true);
	}
	var EmotionIndex = Reflect.field(fungi.Spirit.EmotionIndices,this.HighestEmotion);
	this.EmotionColour += this.HighestScore / 100;
	var c = this;
	var excitement = this.Emotions.LOVE + this.Emotions.ADMIRATION;
	if(excitement > 10) excitement = 10;
	var irritation = this.Emotions.HATE + this.Emotions.DISTRESS;
	if(irritation > 5) irritation = 5;
}
fungi.Spirit.prototype.__class__ = fungi.Spirit;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					try {
						return new ActiveXObject("Microsoft.XMLHTTP");
					}
					catch( $e1 ) {
						{
							var e1 = $e1;
							{
								throw "Unable to create XMLHttpRequest object.";
							}
						}
					}
				}
			}
		}
	}:(function($this) {
		var $r;
		throw "Unable to create XMLHttpRequest object.";
		return $r;
	}(this));
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	}
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	}
	d.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	}
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
fungi.StringMaker.Reasons = { clover : "nutrients", dandelion : "nutrients", aronia : "erosion control", apple : "protection", cherry : "protection", boletus : "increased nutrients", chanterelle : "increased nutrients", flyagaric : "increased magic"};
fungi.Plant.CentrePositions = { clover : new truffle.Vec2(0,-50), dandelion : new truffle.Vec2(0,-200), aronia : new truffle.Vec2(0,-120), apple : new truffle.Vec2(0,-140), cherry : new truffle.Vec2(0,-210), boletus : new truffle.Vec2(0,-50), chanterelle : new truffle.Vec2(0,-50), flyagaric : new truffle.Vec2(0,-50)};
haxe.Timer.arr = new Array();
js.Lib.onerror = null;
Main.main()