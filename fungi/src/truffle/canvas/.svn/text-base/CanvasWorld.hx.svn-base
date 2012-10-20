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

import truffle.interfaces.World;
import truffle.interfaces.Sprite;
import truffle.interfaces.Drawable;
import truffle.Entity;
import truffle.Truffle;
import truffle.Vec2;
import truffle.Vec3;

class CanvasWorld extends truffle.interfaces.World
{
    var Sprites:Array<Dynamic>;
    var CurrentDepth:Int; 
    var CanvasState:CanvasState;
    var CurrentID:Int;

    function new()
    {
        super();
        Sprites=[];
        CurrentDepth=1000;
        CurrentID=0;
        CanvasState=new CanvasState();
    }

    override function AddSprite(s:Dynamic)
    {
//        var ss=cast(s,Drawable);
//        trace(ss);
        s.SetDepth(CurrentDepth++); // hack to emulate flash draw order
        s.SetID(CurrentID++);
        Sprites.push(s);
    }

    override function RemoveSprite(s:Dynamic)
    {
        var NewSprites=[];
        for (Sprite in Sprites)
        {
            if (s!=Sprite) NewSprites.push(Sprite);
        }
        Sprites=NewSprites;
    }

    override function SetChildIndex(sprite:Dynamic,depth:Int) : Void 
    {
        sprite.SetDepth(depth);
    }

	override function MouseDown(c:Dynamic, f:Dynamic -> Void=null)
	{
	}

	override function MouseUp(c:Dynamic, f:Dynamic -> Void=null)
	{
	}

	override function MouseMove(c:Dynamic, f:Dynamic -> Void=null)
	{
	}

    function AddToDrawList(Spr:Sprite,BBox:Dynamic,DrawList:Array<Dynamic>)
    {
        for (d in DrawList)
        {
            if (Spr.GetID()==d.Spr.GetID())
            {
                d.BBox.push(BBox);
                return;
            }
        }

        DrawList.push({Spr:Spr,BBox:[BBox]});
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

        // draw the sprites
        Sprites.sort(function(a:Sprite, b:Sprite)
                     {                       
                         if (a.Depth<b.Depth) return -1;
                         else return 1;
                     });

        var DrawList=[];

        // do check for overlapping sprites
        for (Sprite in Sprites)
        {
            // if this sprite needs redrawing
            if (!Sprite.Hidden &&
                Sprite.ReadyToDraw &&
                Sprite.DrawMe)
            {
                var BBox=Sprite.GetLastBBox();

                // look through the other sprites
                for (Other in Sprites)
                {
                    // if the other is visible
                    // and we intersect it
                    if (!Other.Hidden &&
                        Other.ReadyToDraw &&
                        Other!=Sprite &&
                        Other.Intersect(BBox))
                    {
                        // redraw other
                        AddToDrawList(Other,BBox,DrawList);
                    }

                    // add other now - attempt to maintain the order
                    if (Other==Sprite)
                    {
                        AddToDrawList(Other,BBox,DrawList);
                    }
                }

            }
        }
        
        CanvasState.BeginScene();

        for (d in DrawList)
        {
            CanvasState.ClearRects(d.BBox);
        }

        // force the order to be the same
        for (s in Sprites)
        {
            for (d in DrawList)
            {
                if (s.GetID()==d.Spr.GetID())
                {
                    CanvasState.SetClip(d.BBox);
                    d.Spr.Draw();
                    CanvasState.UnClip();
                }
            }
        }

        CanvasState.Stats(DrawList.length/Sprites.length);
        CanvasState.EndScene();

        UpdateInput();

    }

    override function Handle(event)
    {        
    }
    
    function UpdateInput()
    {
        // update input (runs sprite closures)
        var FoundSprite=false;
        // reverse order so topmost are checked first
        for (n in 0...Sprites.length)
        {
            var i=Sprites.length-n;
            i--;
            if (!FoundSprite && Sprites[i].IsMouseEnabled())
            {
                FoundSprite=Sprites[i].UpdateMouse(CanvasState);
            }
        }

        CanvasState.Update();
    }
}
