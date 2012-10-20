// t r u f f l e Copyright (C) 2010 FoAM vzw   \_\ __     /\
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

package truffle.interfaces;

import truffle.Vec2;
import truffle.interfaces.TextureDesc;

class Sprite extends Drawable
{
    public var Pos:Vec2;
    public var Width:Int;
    public var Height:Int;
    public var Angle:Float;
    public var MyScale:Vec2;
    public var Centre:Vec2;
    var DoCentreMiddleBottom:Bool;

    public function new() { super(); }

	public function MouseDown(c:Dynamic, f:Dynamic -> Void=null) : Void {}
	public function MouseUp(c:Dynamic, f:Dynamic -> Void=null) : Void {}
	public function MouseOver(c:Dynamic, f:Dynamic -> Void=null) : Void {}	
	public function MouseOut(c:Dynamic, f:Dynamic -> Void=null) : Void {}
    public function EnableMouse(s:Bool): Void {}
    public function ChangeBitmap(t:TextureDesc) : Void {}

    public function SetPos(s:Vec2) { Pos=s; DrawMe=true; }
	public function SetScale(s:Vec2) { MyScale=s; DrawMe=true; }
	public function SetRotate(angle:Float) { Angle=angle; DrawMe=true; }
    public function GetTx() : Dynamic { return null; }
    public function TransformedPos() : Vec2 { return null; }

    public function SetColour(c:Vec3) {}
    public function GetColour() { return null; }
    public function SetOffsetColour(c:Vec3) {}
    public function GetOffsetColour() { return null; }

    public function CentreMiddleBottom(s:Bool) : Void
    {
        DoCentreMiddleBottom=s;
    }

    public function Hide(s:Bool) : Void;

	public function Update(frame:Int, tx:Dynamic) : Void {}

    public function LoadFromURL(url:String) : Void {}
}

