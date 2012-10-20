// t r u f f l e Copyright (C) 2012 FoAM vzw   \_\ __     /\
//                                          /\    /_/    / /  
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

function canvas_init()
{
}

///////////////////////////////////////////

function Vec2(x,y) 
{
    this.x=x;
    this.y=y;
}

Vec2.prototype.Add=function(other)
{
	return new Vec2(x+other.x,y+other.y);
}

Vec2.prototype.Sub=function(other)
{
	return new Vec2(x-other.x,y-other.y);
}

Vec2.prototype.Div=function(v)
{
	return new Vec2(x/v,y/v);
}

Vec2.prototype.Mul=function(v)
{
	return new Vec2(x*v,y*v);
}

Vec2.prototype.Mag=function()
{
	return Math.sqrt(x*x+y*y);
}
	
Vec2.prototype.Lerp=function(other,t)
{
	return new Vec2(x*(1-t) + other.x*t,
					y*(1-t) + other.y*t);
}

Vec2.prototype.Eq=function(other)
{
	return x==other.x && y==other.y;
}

Vec2.prototype.AsStr=function()
{
    return str(x)+", "+str(y);
}

/////////////////////////////////////////////

function Matrix() {
    this.identity();
}

Matrix.prototype.identity = function() {
    this.m = [1,0,0,1,0,0];
};

Matrix.prototype.clone = function() {
    ret=new Matrix();
    ret.m = [this.m[0],this.m[1],
             this.m[2],this.m[3],
             this.m[4],this.m[5]];
    return ret;
};

Matrix.prototype.concat = function(matrix) {
    var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
    var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
    
    var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
    var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
    
    var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
    var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
    
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    this.m[4] = dx;
    this.m[5] = dy;
};

Matrix.prototype.invert = function() {
    var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
    var m0 = this.m[3] * d;
    var m1 = -this.m[1] * d;
    var m2 = -this.m[2] * d;
    var m3 = this.m[0] * d;
    var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
    var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    this.m[0] = m0;
    this.m[1] = m1;
    this.m[2] = m2;
    this.m[3] = m3;
    this.m[4] = m4;
    this.m[5] = m5;
};

Matrix.prototype.rotate = function(rad) {
    var c = Math.cos(rad);
    var s = Math.sin(rad);
    var m11 = this.m[0] * c + this.m[2] * s;
    var m12 = this.m[1] * c + this.m[3] * s;
    var m21 = this.m[0] * -s + this.m[2] * c;
    var m22 = this.m[1] * -s + this.m[3] * c;
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
};

Matrix.prototype.translate = function(x, y) {
    this.m[4] += this.m[0] * x + this.m[2] * y;
    this.m[5] += this.m[1] * x + this.m[3] * y;
};

Matrix.prototype.scale = function(sx, sy) {
    this.m[0] *= sx;
    this.m[1] *= sx;
    this.m[2] *= sy;
    this.m[3] *= sy;
};

Matrix.prototype.transformPoint = function(v) {
    var x = v.x;
    var y = v.y;
    px = x * this.m[0] + y * this.m[2] + this.m[4];
    py = x * this.m[1] + y * this.m[3] + this.m[5];
    return new Vec2(px, py);
};

///////////////////////////////////////////////////

truffle = {} 
truffle.canvas = {}

///////////////////////////////////////////////////

truffle.canvas.CanvasSprite=function(pos, tex, midbot, viz) 
{	
    if (midbot==null) midbot=false;
    if (viz==null) viz=true;

    this.ID=null;
    this.Hidden=false;
    this.Pos=pos;
    this.Angle=0;
    this.Depth=-1;
    this.MyScale = new Vec2(1,1);
    this.DrawMe=true;
    this.PreTransform = new Matrix();
    this.Transform = new Matrix();
    this.PostTransform = new Matrix();
    this.Width=64;
    this.Height=112;
    this.Centre=new Vec2(0,0);
    this.DoCentreMiddleBottom=midbot;
    this.Image=null;
    this.DrawImage=null;
    this.ReadyToDraw=false;
    this.Colour=null;
    this.OffsetColour=null;

    this.ChangeBitmap(tex);
    this.EnableMouse(false);

    this.IsMouseOver=false;
    this.MouseDownFunc=null;
    this.MouseDownContext=null;
    this.MouseUpFunc=null;
    this.MouseUpContext=null;
    this.MouseOverFunc=null;
    this.MouseOverContext=null;
    this.MouseOutFunc=null;
    this.MouseOutContext=null;
    
    this.ParentTransform=null;
    this.LastPos=new Vec2(this.Pos.x,this.Pos.y);
    this.DoTransform=false;
}

truffle.canvas.CanvasSprite.prototype.GetID=function()
{
    return this.ID;
}

truffle.canvas.CanvasSprite.prototype.SetID=function(s)
{
    this.ID=s;
}

truffle.canvas.CanvasSprite.prototype.Hide=function(s)
{
    this.DrawMe=true;
    this.Hidden=s;
}

truffle.canvas.CanvasSprite.prototype.MouseDown=function(c, f)
{
    this.EnableMouse(true);
    this.MouseDownFunc=f;
    this.MouseDownContext=c;
}

truffle.canvas.CanvasSprite.prototype.MouseUp=function(c, f)
{
    this.EnableMouse(true);
    this.MouseUpFunc=f;
    this.MouseUpContext=c;
}

truffle.canvas.CanvasSprite.prototype.MouseOver=function(c, f)
{
    this.EnableMouse(true);
    this.MouseOverFunc=f;
    this.MouseOverContext=c
}

truffle.canvas.CanvasSprite.prototype.MouseOut=function(c, f)
{
    this.EnableMouse(true);
    this.MouseOutFunc=f;
    this.MouseOutContext=c;
}

truffle.canvas.CanvasSprite.prototype.SetDepth=function(s)
{
//    parent.setChildIndex(this,s);
    this.Depth=s;
}
    
truffle.canvas.CanvasSprite.prototype.GetDepth=function() 
{
    return this.Depth;
}

truffle.canvas.CanvasSprite.prototype.CentreMiddleBottom=function(s)
{
    this.DoCentreMiddleBottom=s;
}

truffle.canvas.CanvasSprite.prototype.SetSize=function(x,y)
{
    this.Width=x;
    this.Height=y;
    if (this.DoCentreMiddleBottom)
    {
        this.Centre.x=this.Width/2;
        this.Centre.y=this.Height;            
    }
    else
    {
        this.Centre.x=this.Width/2;
        this.Centre.y=this.Height/2;
    }
}

truffle.canvas.CanvasSprite.prototype.EnableMouse=function(s)
{
    this.MouseEnabled=s;
}

truffle.canvas.CanvasSprite.prototype.IsMouseEnabled=function()
{
    return this;
}

truffle.canvas.CanvasSprite.prototype.ChangeBitmap=function(t)
{
    if (this.Image==null || 
        t.Name!=this.Image.src)
    {
        this.LoadFromURL(t.Name);
    }
}

truffle.canvas.CanvasSprite.prototype.LoadFromURL=function(url)
{
    var c=this;
    this.Image=new Image();
    this.Image.onload = function(){
        c.ReadyToDraw=true;
        c.SetSize(c.Image.width,c.Image.height);
        if (c.OffsetColour!=null)
        {
            c.AddTint(c.OffsetColour);
        }
        c.DrawImage = c.Image;
        c.DrawMe=true;
    };
    this.Image.src = url;  
}

truffle.canvas.CanvasSprite.prototype.SetPos=function(s) { this.Pos=s; this.DrawMe=true; }
truffle.canvas.CanvasSprite.prototype.SetScale=function(s) { this.MyScale=s; this.DoTransform=true; this.DrawMe=true; }
truffle.canvas.CanvasSprite.prototype.SetRotate=function(angle) { this.Angle=angle; this.DoTransform=true; this.DrawMe=true; }
truffle.canvas.CanvasSprite.prototype.GetTx=function() { return this.Transform; }

truffle.canvas.CanvasSprite.prototype.SetColour=function(s) 
{
    this.Colour=s;
}

truffle.canvas.CanvasSprite.prototype.SetOffsetColour=function(s) 
{
    this.OffsetColour=s;
    if (this.ReadyToDraw)
    {
        this.AddTint(s);
    }
}

truffle.canvas.CanvasSprite.prototype.GetColour=function() 
{
    return this.Colour;
}

truffle.canvas.CanvasSprite.prototype.GetOffsetColour=function() 
{
    return this.OffsetColour;
}

truffle.canvas.CanvasSprite.prototype.TransformedPos=function()
{
    var p = new Point(0,0);
    p=this.Transform.transformPoint(0,0);
    return p;
}

// tint the image pixel by pixel
truffle.canvas.CanvasSprite.prototype.AddTint=function(col)
{
    return;
    if (!this.ReadyToDraw) return;

    var w = this.Image.width;
    var h = this.Image.height;
    var canvas = document.createElement("canvas");
    canvas.width  = w;
    canvas.height = h;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(this.Image,0,0);
    var pixels = ctx.getImageData(0,0,w,h).data;

    var canvas = document.createElement("canvas");
    canvas.width  = w;
    canvas.height = h;
    
    var ctx = canvas.getContext('2d');
    ctx.drawImage( this.Image, 0, 0 );
    var to = ctx.getImageData( 0, 0, w, h );
    var toData = to.data;
    
    for (var i=0, len=pixels.length; i<len; i+=4) 
    {
        toData[i  ] = pixels[i  ]+col.x;
        toData[i+1] = pixels[i+1]+col.y;
        toData[i+2] = pixels[i+2]+col.z;
        toData[i+3] = pixels[i+3];
    }
    
    ctx.putImageData( to, 0, 0 );
    
    // image is _slightly_ faster then canvas for this, so convert
    this.DrawImage = new Image();
    this.DrawImage.src = canvas.toDataURL();
}

truffle.canvas.CanvasSprite.prototype.GetLastBBox=function()
{
    var l=this.LastPos.x-this.Centre.x;
    var t=this.LastPos.y-this.Centre.y;
    if (this.DoCentreMiddleBottom) t=this.LastPos.y-this.Height;
    if (this.DoTransform) // cater for rotate
    {
        var m=Math.max(this.Width,this.Height);
        var h=m/2;
        return [l-h,t-h,l+m+h,t+m+h]; 
    }
    else
    {
        return [l,t,l+this.Width,t+this.Height]; 
    }
}

truffle.canvas.CanvasSprite.prototype.GetBBox=function()
{
    var l=this.Pos.x-this.Centre.x;
    var t=this.Pos.y-this.Centre.y;
    if (this.DoCentreMiddleBottom) t=this.Pos.y-this.Height;
    if (this.DoTransform) // cater for rotate
    {
        var m=Math.max(this.Width,this.Height);
        var h=m/2;
        return [l-h,t-h,l+m+h,t+m+h]; 
    }
    else
    {
        return [l,t,l+this.Width,t+this.Height]; 
    }
}

truffle.canvas.CanvasSprite.prototype.Intersect=function(ob)
{
    var tb=this.GetBBox();
    return !(ob[0] > tb[2] || ob[2] < tb[0] ||
             ob[1] > tb[3] || ob[3] < tb[1]);
}

truffle.canvas.CanvasSprite.prototype.UpdateMouse=function(CanvasState)
{
    // assume check for mouseenabled is done already
    var x=CanvasState.MouseX+this.Centre.x;
    var y=CanvasState.MouseY+this.Centre.y;

    // todo - correct for transform
    if (x>this.Pos.x && x<this.Pos.x+this.Width &&
        y>this.Pos.y && y<this.Pos.y+this.Height)
    {

        if (!this.IsMouseOver)
        {
            if (this.MouseOverFunc!=null) this.MouseOverFunc(this.MouseOverContext);
            this.IsMouseOver=true;
            return true;
        }

        if (CanvasState.MouseChanged)
        {
            if (CanvasState.MouseDown)
            {
                if (this.MouseDownFunc!=null) this.MouseDownFunc(this.MouseDownContext);
                return true;
            }
            else
            {
                if (this.MouseUpFunc!=null) this.MouseUpFunc(this.MouseUpContext);
                return true;
            }
        }
    }
    else
    {
        if (this.IsMouseOver)
        {
            if (this.MouseOutFunc!=null) this.MouseOutFunc(this.MouseOutContext);
            this.IsMouseOver=false;
            return true;
        }
    }

    return false;
}

truffle.canvas.CanvasSprite.prototype.Update=function(frame, tx)
{
    this.DrawMe=true;
    this.ParentTransform=tx;
/*
    if (this.PreTransformDirty==true)
    {
        this.PreTransform.identity();        
		this.PreTransform.rotate(this.Angle*(Math.PI/180));
        this.PreTransform.scale(this.MyScale.x,this.MyScale.y);
        this.PreTransform.translate(this.Pos.x,this.Pos.y);
        this.PreTransformDirty=false;
    }
    
    this.Transform=this.PreTransform.clone();
    if (tx!=null)
	{
        this.Transform.concat(tx);
    }
    
    this.PostTransform.identity();
    // we don't want to pass on the centering offset to the hierachy
    this.PostTransform.translate(-this.Centre.x, -this.Centre.y);
    this.PostTransform.concat(this.Transform);
*/
}

truffle.canvas.CanvasSprite.prototype.Draw=function()
{
    if (!this.ReadyToDraw || this.Hidden) return;
    this.DrawMe=false;

    var ctx=document.getElementById('canvas').getContext('2d');

    if (this.ParentTransform!=null ||
        this.DoTransform)
    {
        ctx.save();
    }

    if (this.ParentTransform!=null)
    {
        ctx.transform(this.ParentTransform[0],
                      this.ParentTransform[1],
                      this.ParentTransform[2],
                      this.ParentTransform[3],
                      this.ParentTransform[4],
                      this.ParentTransform[5]);
    }

    if (this.DoTransform)
    {
        ctx.translate(this.Pos.x,this.Pos.y);
        ctx.rotate(this.Angle);
        ctx.scale(this.MyScale.x,this.MyScale.y);
        ctx.translate(-this.Centre.x,-this.Centre.y);
        ctx.drawImage(this.DrawImage,0,0);
    }
    else
    {
        var x=this.Pos.x-this.Centre.x;
        var y=this.Pos.y-this.Centre.y;        
        ctx.drawImage(this.DrawImage,~~(0.5+x),~~(0.5+y));
    }

    if (this.ParentTransform!=null ||
        this.DoTransform)
    {
        ctx.restore();
    }

    this.LastPos.x=this.Pos.x;
    this.LastPos.y=this.Pos.y;
}

//////////////////////////////////////



truffle.canvas.CanvasVector=function(pos, nv, viz) 
{	
    if (viz==null) viz=true;

    this.ID=null;
    this.Hidden=false;
    this.Pos=pos;
    this.Angle=0;
    this.Depth=-1;
    this.MyScale = new Vec2(1,1);
    this.DrawMe=true;
    this.PreTransform = new Matrix();
    this.Transform = new Matrix();
    this.PostTransform = new Matrix();
    this.Width=64;
    this.Height=112;
    this.Centre=new Vec2(0,0);
    this.DoCentreMiddleBottom=midbot;
    this.Colour=null;
    this.OffsetColour=null;

    this.EnableMouse(false);

    this.IsMouseOver=false;
    this.MouseDownFunc=null;
    this.MouseDownContext=null;
    this.MouseUpFunc=null;
    this.MouseUpContext=null;
    this.MouseOverFunc=null;
    this.MouseOverContext=null;
    this.MouseOutFunc=null;
    this.MouseOutContext=null;
    
    this.ParentTransform=null;
    this.LastPos=new Vec2(this.Pos.x,this.Pos.y);
    this.DoTransform=false;

    this.Vertices=[];
    this.Colours=[];

    for (var i=0; i<nv; i++)
    {
        this.Vertices.push(new Vec2(0,0));
        this.Colours.push(new Vec3(1,1,1));
    }
}

truffle.canvas.CanvasVector.prototype.SetVertex(n,v)
{
    this.Vertices[n]=v;
}

truffle.canvas.CanvasVector.prototype.MapVertex(f)
{
    for (var n=0; n<this.Vertices.length; n++)
    {
        this.Vertices[n]=f(this.Vertices[n]);
    }
}

truffle.canvas.CanvasVector.prototype.IndexMapVertex(f)
{
    for (var n=0; n<this.Vertices.length; n++)
    {
        this.Vertices[n]=f(n,this.Vertices[n]);
    }
}

truffle.canvas.CanvasVector.prototype.GetID=function()
{
    return this.ID;
}

truffle.canvas.CanvasVector.prototype.SetID=function(s)
{
    this.ID=s;
}

truffle.canvas.CanvasVector.prototype.Hide=function(s)
{
    this.DrawMe=true;
    this.Hidden=s;
}

truffle.canvas.CanvasVector.prototype.MouseDown=function(c, f)
{
    this.EnableMouse(true);
    this.MouseDownFunc=f;
    this.MouseDownContext=c;
}

truffle.canvas.CanvasVector.prototype.MouseUp=function(c, f)
{
    this.EnableMouse(true);
    this.MouseUpFunc=f;
    this.MouseUpContext=c;
}

truffle.canvas.CanvasVector.prototype.MouseOver=function(c, f)
{
    this.EnableMouse(true);
    this.MouseOverFunc=f;
    this.MouseOverContext=c
}

truffle.canvas.CanvasVector.prototype.MouseOut=function(c, f)
{
    this.EnableMouse(true);
    this.MouseOutFunc=f;
    this.MouseOutContext=c;
}

truffle.canvas.CanvasVector.prototype.SetDepth=function(s)
{
//    parent.setChildIndex(this,s);
    this.Depth=s;
}
    
truffle.canvas.CanvasVector.prototype.GetDepth=function() 
{
    return this.Depth;
}

truffle.canvas.CanvasVector.prototype.SetSize=function(x,y)
{
    this.Width=x;
    this.Height=y;
    if (this.DoCentreMiddleBottom)
    {
        this.Centre.x=this.Width/2;
        this.Centre.y=this.Height;            
    }
    else
    {
        this.Centre.x=this.Width/2;
        this.Centre.y=this.Height/2;
    }
}

truffle.canvas.CanvasVector.prototype.EnableMouse=function(s)
{
    this.MouseEnabled=s;
}

truffle.canvas.CanvasVector.prototype.IsMouseEnabled=function()
{
    return this;
}

truffle.canvas.CanvasVector.prototype.SetPos=function(s) { this.Pos=s; this.DrawMe=true; }
truffle.canvas.CanvasVector.prototype.SetScale=function(s) { this.MyScale=s; this.DoTransform=true; this.DrawMe=true; }
truffle.canvas.CanvasVector.prototype.SetRotate=function(angle) { this.Angle=angle; this.DoTransform=true; this.DrawMe=true; }
truffle.canvas.CanvasVector.prototype.GetTx=function() { return this.Transform; }

truffle.canvas.CanvasVector.prototype.SetColour=function(s) 
{
    this.Colour=s;
}

truffle.canvas.CanvasVector.prototype.SetOffsetColour=function(s) 
{
    this.OffsetColour=s;
    if (this.ReadyToDraw)
    {

    }
}

truffle.canvas.CanvasVector.prototype.GetColour=function() 
{
    return this.Colour;
}

truffle.canvas.CanvasVector.prototype.GetOffsetColour=function() 
{
    return this.OffsetColour;
}

truffle.canvas.CanvasVector.prototype.TransformedPos=function()
{
    var p = new Point(0,0);
    p=this.Transform.transformPoint(0,0);
    return p;
}

truffle.canvas.CanvasVector.prototype.GetLastBBox=function()
{
    var l=this.LastPos.x-this.Centre.x;
    var t=this.LastPos.y-this.Centre.y;

    if (this.DoTransform) // cater for rotate
    {
        var m=Math.max(this.Width,this.Height);
        var h=m/2;
        return [l-h,t-h,l+m+h,t+m+h]; 
    }
    else
    {
        return [l,t,l+this.Width,t+this.Height]; 
    }
}

truffle.canvas.CanvasVector.prototype.GetBBox=function()
{
    var l=this.Pos.x-this.Centre.x;
    var t=this.Pos.y-this.Centre.y;
    if (this.DoCentreMiddleBottom) t=this.Pos.y-this.Height;
    if (this.DoTransform) // cater for rotate
    {
        var m=Math.max(this.Width,this.Height);
        var h=m/2;
        return [l-h,t-h,l+m+h,t+m+h]; 
    }
    else
    {
        return [l,t,l+this.Width,t+this.Height]; 
    }
}

truffle.canvas.CanvasVector.prototype.Intersect=function(ob)
{
    var tb=this.GetBBox();
    return !(ob[0] > tb[2] || ob[2] < tb[0] ||
             ob[1] > tb[3] || ob[3] < tb[1]);
}

truffle.canvas.CanvasVector.prototype.UpdateMouse=function(CanvasState)
{
    // assume check for mouseenabled is done already
    var x=CanvasState.MouseX+this.Centre.x;
    var y=CanvasState.MouseY+this.Centre.y;

    // todo - correct for transform
    if (x>this.Pos.x && x<this.Pos.x+this.Width &&
        y>this.Pos.y && y<this.Pos.y+this.Height)
    {

        if (!this.IsMouseOver)
        {
            if (this.MouseOverFunc!=null) this.MouseOverFunc(this.MouseOverContext);
            this.IsMouseOver=true;
            return true;
        }

        if (CanvasState.MouseChanged)
        {
            if (CanvasState.MouseDown)
            {
                if (this.MouseDownFunc!=null) this.MouseDownFunc(this.MouseDownContext);
                return true;
            }
            else
            {
                if (this.MouseUpFunc!=null) this.MouseUpFunc(this.MouseUpContext);
                return true;
            }
        }
    }
    else
    {
        if (this.IsMouseOver)
        {
            if (this.MouseOutFunc!=null) this.MouseOutFunc(this.MouseOutContext);
            this.IsMouseOver=false;
            return true;
        }
    }

    return false;
}

truffle.canvas.CanvasVector.prototype.Update=function(frame, tx)
{
    this.DrawMe=true;
    this.ParentTransform=tx;
/*
    if (this.PreTransformDirty==true)
    {
        this.PreTransform.identity();        
		this.PreTransform.rotate(this.Angle*(Math.PI/180));
        this.PreTransform.scale(this.MyScale.x,this.MyScale.y);
        this.PreTransform.translate(this.Pos.x,this.Pos.y);
        this.PreTransformDirty=false;
    }
    
    this.Transform=this.PreTransform.clone();
    if (tx!=null)
	{
        this.Transform.concat(tx);
    }
    
    this.PostTransform.identity();
    // we don't want to pass on the centering offset to the hierachy
    this.PostTransform.translate(-this.Centre.x, -this.Centre.y);
    this.PostTransform.concat(this.Transform);
*/
}

truffle.canvas.CanvasVector.prototype.Draw=function()
{
    if (!this.ReadyToDraw || this.Hidden) return;
    this.DrawMe=false;

    var ctx=document.getElementById('canvas').getContext('2d');

    if (this.ParentTransform!=null ||
        this.DoTransform)
    {
        ctx.save();
    }

    if (this.ParentTransform!=null)
    {
        ctx.transform(this.ParentTransform[0],
                      this.ParentTransform[1],
                      this.ParentTransform[2],
                      this.ParentTransform[3],
                      this.ParentTransform[4],
                      this.ParentTransform[5]);
    }

    if (this.DoTransform)
    {
        ctx.translate(this.Pos.x,this.Pos.y);
        ctx.rotate(this.Angle);
        ctx.scale(this.MyScale.x,this.MyScale.y);
        ctx.translate(-this.Centre.x,-this.Centre.y);
        ctx.drawImage(this.DrawImage,0,0);
    }
    else
    {
        var x=this.Pos.x-this.Centre.x;
        var y=this.Pos.y-this.Centre.y;        
        ctx.drawImage(this.DrawImage,~~(0.5+x),~~(0.5+y));
    }

    if (this.ParentTransform!=null ||
        this.DoTransform)
    {
        ctx.restore();
    }

    this.LastPos.x=this.Pos.x;
    this.LastPos.y=this.Pos.y;
}


//////////////////////////////////////

truffle.canvas.CanvasState=function() 
{
    this.MouseChanged=false;
    this.MouseDown=false;
    this.MouseX=0;
    this.MouseY=0;
    this.Canvas=document.getElementById('canvas');
    this.Ctx = this.Canvas.getContext('2d');         

    var _this=this;

    this.Canvas.addEventListener('mousedown', function(e) {
        _this.MouseChanged=true;
        _this.MouseDown=true;
    });

    this.Canvas.addEventListener('mousemove', function(e) {
        _this.UpdateMouse(e);
    });

    this.Canvas.addEventListener('mouseup', function(e) {
        _this.MouseChanged=true;
        _this.MouseDown=false;
    });
}

truffle.canvas.CanvasState.prototype.BeginScene=function()
{
    //this.Ctx.clearRect(0,0,720,576);
    this.Ctx.save();
    this.Ctx.fillStyle = "#000000";
    this.Ctx.strokeStyle = "#000000";  
}

truffle.canvas.CanvasState.prototype.EndScene=function()
{
    this.Ctx.restore();
}

truffle.canvas.CanvasState.prototype.ClearRects=function(BBoxes)
{
    this.Ctx.fillStyle = "#ffffff";

    for (i in BBoxes)
    {
        this.Ctx.fillRect(~~(BBoxes[i][0]+0.5),~~(BBoxes[i][1]+0.5),
                          ~~(0.5+(BBoxes[i][2]-BBoxes[i][0])),
                          ~~(0.5+(BBoxes[i][3]-BBoxes[i][1])));
    }
}

truffle.canvas.CanvasState.prototype.SetClip=function(BBoxes)
{
    this.Ctx.save();

    // Set the clipping area
    this.Ctx.beginPath();
    for (i in BBoxes)
    {
        this.Ctx.rect(~~(BBoxes[i][0]+0.5),~~(BBoxes[i][1]+0.5),
                      ~~(0.5+(BBoxes[i][2]-BBoxes[i][0])),
                      ~~(0.5+(BBoxes[i][3]-BBoxes[i][1])));
    }
    this.Ctx.clip();
}

truffle.canvas.CanvasState.prototype.UnClip=function()
{
    this.Ctx.restore();
}

truffle.canvas.CanvasState.prototype.Update=function()
{
    this.MouseChanged=false;
}

// Creates an object with x and y defined,
// set to the mouse position relative to the state's canvas
// If you wanna be super-correct this can be tricky,
// we have to worry about padding and borders
truffle.canvas.CanvasState.prototype.UpdateMouse = function(e) 
{
    var element = this.Canvas, offsetX = 0, offsetY = 0, mx, my;
 
    // Compute the total offset
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }
    
    // Add padding and border style widths to offset
    // Also add the <html> offsets in case there's a position:fixed bar
    //offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    //offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;
    
    this.MouseX = e.pageX - offsetX;
    this.MouseY = e.pageY - offsetY;
}

truffle.canvas.CanvasState.prototype.Stats=function(num)
{
    this.Ctx.fillStyle="#000000";
    this.Ctx.fillRect(10,10,100,10);

    this.Ctx.fillStyle="#ff0000";
    var s=num*100;
    this.Ctx.fillRect(11,11,s,8);
}

////////////////////////////////////////////

