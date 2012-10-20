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

package truffle.canvas;

import truffle.interfaces.Sprite;

extern class CanvasState
{	
    public var MouseChanged:Bool;
    public var MouseDown:Bool;
    public var MouseX:Int;
    public var MouseY:Int;
    
	public function new() : Void;
    public function Update() : Void;
    public function BeginScene() : Void;
    public function EndScene() : Void;
    public function SetClip(BBoxes:Array<Dynamic>) : Void;
    public function ClearRects(BBoxes:Array<Dynamic>) : Void;
    public function UnClip() : Void;
    public function Stats(num:Float) : Void;
}