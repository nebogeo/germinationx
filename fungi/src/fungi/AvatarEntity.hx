// GerminationX Copyright (C) 2011 FoAM vzw    \_\ __     /\
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

package fungi;

import truffle.Truffle;
import truffle.SpriteEntity;
import truffle.Vec2;
import truffle.Vec3;
import truffle.RndGen;
import truffle.Bone;

class AvatarEntity extends SpriteEntity 
{
    public var Name:String;
    public var NameTag:Frame;
    public var ID:Int;
    public var Variation:String;
    public var FrameNum:Int;
    public var Hat:Sprite;
    var Layer:Int;
    var Flowered:Int;

    public function new(world:World, name:String, id, pos, layer, flowered)
    {
        FrameNum=(id%5)+1;
        Variation=Std.string((id%3)+1);
        super(world,pos,Resources.Get("mand-"+Variation+"-0"));
        Speed=0.1;
        UpdateFreq=5;
        NeedsUpdate=true;
        ID=id;
        Layer=layer;
        Flowered=flowered;

        DepthOffset=1;

        Name=name;
        if (Name==null) { Name="no name"; }
        NameTag=new Frame(Name,
                          Std.int(pos.x),
                          Std.int(pos.y),120,20,true);
        world.AddSprite(NameTag);
        
        var f=Std.string(flowered);

        Hat=new Sprite(new Vec2(0,0),Resources.Get("mand-tree-"+f),true);
        if (Layer==0) Hat=new Sprite(new Vec2(0,0),Resources.Get("mand-cover-"+f),true);
        if (Layer==1) Hat=new Sprite(new Vec2(0,0),Resources.Get("mand-shrub-"+f),true);
        
        world.AddSprite(Hat);
        
        // do the colours
        var HatColour=new Vec3(0.4,0.6,0.4);
        var BodyColour=new Vec3(0.7,0.5,0.4);

        // Vary with id
        var v1=((id*30)%100)/500;
        var v2=((id*100)%100)/500;
        var v3=((id*340)%100)/500;

        HatColour.x+=v1;
        HatColour.y-=v1;
        HatColour.y+=v2;
        HatColour.z-=v2;

        BodyColour.x+=v3;
        BodyColour.y-=v3;
        BodyColour.y+=v1;
        BodyColour.z-=v1;

        Hat.SetColour(HatColour);
        Spr.SetColour(BodyColour);
    }

    public function ChangeLayer(layer:Int,flowered:Int)
    {
        if (layer!=Layer ||
            flowered!=Flowered)
        {
            Layer=layer;
            Flowered=flowered;
            var f=Std.string(Flowered);
            if (Layer==0) Hat.ChangeBitmap(Resources.Get("mand-cover-"+f));
            if (Layer==1) Hat.ChangeBitmap(Resources.Get("mand-shrub-"+f));
            if (Layer>1) Hat.ChangeBitmap(Resources.Get("mand-tree-"+f));
        }
    }

    override function Update(time,world)
    {
        super.Update(time,world);

        NameTag.UpdatePosition(Std.int(Spr.Pos.x-NameTag.Width/2),
                               Std.int(Spr.Pos.y-120));

        FrameNum++;
        var Anim=0;
        if (FrameNum>5) FrameNum=1;
        if (FrameNum<3) Anim=FrameNum; 
        else Anim=3-(FrameNum-3);

        Spr.ChangeBitmap(Resources.Get("mand-"+Variation+"-"+Std.string(Anim)));
        Hat.SetPos(new Vec2(0,Anim/2-3));
        Hat.Update(0,Spr.GetTx());
    }

    override function Destroy(world)
    {
        super.Destroy(world);
        var world=cast(world,World);
        world.RemoveSprite(NameTag);
        world.RemoveSprite(Hat);
    }

    override function OnSortScene(world:Dynamic, order:Int) : Int
    {
//        var order=super.OnSortScene(world,order);
        Hat.SetDepth(order++);
        NameTag.SetDepth(order++);
        Spr.SetDepth(order++);
        return order;
    }

}