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

package truffle.js;

import truffle.Vec2;
import truffle.Vec3;
import truffle.interfaces.Sprite;
import truffle.interfaces.World;
import truffle.interfaces.TextureDesc;

class Matrix
{}

extern class JSSprite extends Sprite
{	
    public var Transform:Matrix;
	public function new(pos:Vec2, t:TextureDesc, midbot:Bool=false, viz:Bool=true) : Void;

    override function Hide(s:Bool) : Void;
}
