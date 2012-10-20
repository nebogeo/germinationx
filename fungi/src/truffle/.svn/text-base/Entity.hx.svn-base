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

package truffle;
import truffle.Truffle;

class Entity
{
    public var TilePos:Vec2;     // position in the world in tiles 
    public var LogicalPos:Vec3;  // position in it's tile
    public var Pos:Vec3;         // screen position
    public var Depth:Float;      // depth from camera
    public var NeedsUpdate:Bool; 
    public var Hidden:Bool;
    public var Speed:Float;
    public var UpdateFreq:Int;
    public var MoveTime:Float;
    public var LastPos:Vec3;
    public var DestPos:Vec3;
    public var OverridePos:Bool;
    public var OnReachedDest:Void -> Void;
    public var DepthOffset:Float;
	
	public function new(w,pos:Vec3) 
	{
        LogicalPos = pos;
        Pos = w.ScreenTransform(LogicalPos);
        LastPos = w.ScreenTransform(LogicalPos);
        DestPos = w.ScreenTransform(LogicalPos);
        TilePos = null;
        Depth = Pos.z;
        DepthOffset = 0;
        Speed = 0;
        MoveTime = 0;
        UpdateFreq=0;
        NeedsUpdate=false;
        OverridePos=false;
        w.Add(this);
        OnReachedDest=null;
	}

    // called by world before destruction (cnance to remove sprites)
    public function Destroy(world)
    {
    }

    public function SetTilePos(s:Vec2) : Void
    {
        TilePos=s;
    }

    public function SetLogicalPos(world, p:Vec3) : Void
    {
        LastPos = Pos;
        MoveTime = 0;
        LogicalPos = p;
        DestPos = world.ScreenTransform(LogicalPos);
    }

	public function Update(frame:Int, world)
	{
        if (!OverridePos)
        {
            if (Speed==0)
            {
                Pos = world.ScreenTransform(LogicalPos);
                Depth = Pos.z;
            }
            else
            {
                if (MoveTime<1.0)
                {
                    Pos = LastPos.Lerp(DestPos,MoveTime);
                    MoveTime += Speed;
                    if (OnReachedDest!=null && MoveTime>=1.0)
                    {
                        OnReachedDest();
                        OnReachedDest=null;
                    }
                }

                if (Pos.z<DestPos.z) Depth=DestPos.z;
                else Depth = Pos.z;
            }
        }
	}

    public function GetDepth() : Float
    {
        return Depth+DepthOffset;
    }

    public function GetRoot() : Dynamic
    {
        return null;
    }

    public function UpdateMouse(x,y)
    {
    }

    public function OnSortScene(world:Dynamic, order:Int) : Int
    {
        GetRoot().SetDepth(order++);
        return order;
    }

    public function Hide(s:Bool) : Void
    {
        Hidden=s;
        if (GetRoot()) GetRoot().Hide(s);
    }
}
