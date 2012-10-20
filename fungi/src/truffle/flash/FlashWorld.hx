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

package truffle.flash;

import flash.display.MovieClip;
import flash.display.DisplayObject;
import flash.events.MouseEvent;
import truffle.interfaces.World;
import truffle.interfaces.Sprite;
import truffle.Entity;
import truffle.Truffle;
import truffle.Vec2;
import truffle.Vec3;

class FlashWorld extends truffle.interfaces.World
{
    var MouseDownFunc:Dynamic -> Void;
    var MouseDownContext:Dynamic;
    var MouseUpFunc:Dynamic -> Void;
    var MouseUpContext:Dynamic;
    var MouseMoveFunc:Dynamic -> Void;
    var MouseMoveContext:Dynamic;
    var MC:MovieClip;

    function new()
    {
        MC=new MovieClip();
        super();
    }

    public function GetMC()
    {
        return MC;
    }

    override function AddSprite(s:Dynamic)
    {
        MC.addChild(s.MC);
    }

    override function RemoveSprite(s:Dynamic)
    {
        MC.removeChild(s.MC);
    }

    override function SetChildIndex(sprite:Dynamic,depth:Int) : Void 
    {
        MC.setChildIndex(sprite.MC,depth);
    }

	override function MouseDown(c:Dynamic, f:Dynamic -> Void=null)
	{
        MouseDownFunc=f;
        MouseDownContext=c;
		MC.addEventListener(MouseEvent.MOUSE_DOWN, MouseDownCB);
	}

    public function MouseDownCB(e)
    {
        MouseDownFunc(e);
    }

	override function MouseUp(c:Dynamic, f:Dynamic -> Void=null)
	{
        MouseUpFunc=f;
        MouseUpContext=c;
		MC.addEventListener(MouseEvent.MOUSE_UP, MouseUpCB);
	}

    public function MouseUpCB(e)
    {
        MouseUpFunc(MouseUpContext);
    }

	override function MouseMove(c:Dynamic, f:Dynamic -> Void=null)
	{
        MouseMoveFunc=f;
        MouseMoveContext=c;
		MC.addEventListener(MouseEvent.MOUSE_MOVE, MouseMoveCB);
	}

    public function MouseMoveCB(e)
    {
        MouseMoveFunc(e);
    }

    override function Update(time)
    {
        for (e in Scene)
        {
            if (e.TilePos!=null)
            {
                // the current tile pos is surrounded by 8 other
                // visible ones, so see if we are in one of those
                var diff=e.TilePos.Sub(CurrentTilePos);
                e.Hide(Math.abs(diff.x)>1 || Math.abs(diff.y)>1);
            }

            if (e.NeedsUpdate && !e.Hidden &&
                (e.UpdateFreq==0 ||
                (time % e.UpdateFreq)==0))
            {
                e.Update(time,cast(this,truffle.World));
            }
        }
    }

    override function Handle(event)
    {        
    }
    
}
