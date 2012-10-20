// GerminationX Copyright (C) 2010 FoAM vzw    \_\ __     /\
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
import truffle.Vec2;
import truffle.Vec3;
import truffle.SpriteEntity;
import truffle.RndGen;

#if flash
import flash.filters.GlowFilter;
#end

class Plant extends SpriteEntity 
{
    public var Id:Int;
	public var Owner:Int;
	var PlantScale:Float;
	public var Age:Int;
    var Scale:Float;
    var PlantType:String;
    public var State:String;
    var Fruits:Array<Fruit>;
    var Layer:String;
    var Star:Sprite;
    var OwnerName:String;
    var Rnd:RndGen;
    var ServerPos:Vec2;
    var ServerTile:Vec2;
    var GlowColour:Int;
    public var GotSelect:Bool;
    var LeavesSpr:Sprite;

    static var CentrePositions = {
        { 
            clover: new Vec2(0,-50),
            dandelion: new Vec2(0,-200),
            aronia: new Vec2(0,-120),
            apple: new Vec2(0,-140),
            cherry: new Vec2(0,-210),
            boletus: new Vec2(0,-50),
            chanterelle: new Vec2(0,-50),
            flyagaric: new Vec2(0,-50)
        }};

    // because not all states are represented by graphics
    function FixState(state:String): String
    {
        if (state=="planted") return "grow-a";
        if (state=="fruit-a") return "grown";
        if (state=="fruit-b") return "grown";
        if (state=="fruit-c") return "grown";
        return state;
    }

	public function new(world:FungiWorld, plant, pos, servertile)
	{
        State=FixState(plant.state);
        PlantType=plant.type;
		super(world,pos,Resources.Get(PlantType+"-"+State),false);
        Id=Std.parseInt(plant.id);
		Owner=Std.parseInt(Reflect.field(plant,"owner-id"));
        OwnerName=plant.owner;
        PlantScale=0;
        //NeedsUpdate=true;
        Fruits=[];
        Layer=plant.layer;
        GlowColour=0x000000;
        Spr.Hide(false);
        Rnd=new RndGen();
        Rnd.Seed(Id);
        ServerTile=new Vec2(servertile.x,servertile.y);
        ServerPos=new Vec2(plant.pos.x,plant.pos.y);
        GotSelect=false;

        if (PlantType=="oak")
        {
            LeavesSpr = new Sprite(new Vec2(0,0),Resources.Get(PlantType+"-leaves-"+State),true);
            world.AddSprite(LeavesSpr);
            LeavesSpr.Update(0,null);

            var cols=[new Vec3(1,0,0),
                      new Vec3(0,1,0),
                      new Vec3(0,0,1),
                      new Vec3(1,1,0),
                      new Vec3(1,0,1),
                      new Vec3(0,1,1),
                      new Vec3(0.5,0,1),
                      new Vec3(1,0.5,0),
                      new Vec3(0,1,0.5),
                      new Vec3(0.5,0.5,0),
                      new Vec3(0.5,0,0.5),
                      new Vec3(0,0.5,0.5)];
            
            // make a "unique" colour based on the random "size"
            Spr.SetColour(cols[plant.size%cols.length]);
            Spr.Update(0,null);
        }

        for (i in 0...plant.fruit) 
        {
            Fruit(world);
        }

        OwnerUpdate(world);
	}

    // allow the butterflies to find us on mouse over
    public function EnableSelection()
    {
        Spr.MouseUp(this,function(c) {
            c.GotSelect=true;
        });
    }

    public function OwnerUpdate(world:FungiWorld)
    {
        // glow plants owned by the player
        if (Owner==world.MyID)
        {            
            var CurrentCol=0x99ff99;
            
            // different colours look confusing
            // summer colour
/*            var CurrentCol=0x77ff77;
            if (world.Season=="winter" ||
                world.Season=="autumn")
            {
                CurrentCol=0xffffff;
            }
*/
            if (GlowColour!=CurrentCol)
            {
                GlowColour=CurrentCol;
#if flash
                Spr.MC.filters=[new GlowFilter(GlowColour,0.75,20,20,5,1,false,false)];
#end
                Spr.SetOffsetColour(new Vec3(32,32,32));
                Spr.Update(0,null);
            }
        }
    }
    
    public function StateUpdate(world:FungiWorld,plant)
    {
        var s=FixState(plant.state);
        // if the state has changed
        if (State!=plant.state)
        {
            State=s;

            if (State!="decayed")
            {
                Spr.ChangeBitmap(Resources.Get(PlantType+"-"+State));
            }

            if (plant.state=="fruit-a" ||
                plant.state=="fruit-b" ||
                plant.state=="fruit-c")
            {
                for (f in Fruits)
                {
                    f.ChangeState(plant.state);
                }
            };
            OwnerUpdate(world);
        }

        // see if any fruit have been picked or arrived
        var FruitDiff = plant.fruit-Fruits.length;
        if (FruitDiff!=0)
        {
            if (FruitDiff>0)
            {
                for (i in 0...FruitDiff) Fruit(world);
            }
            else
            {
                for (i in 0...-FruitDiff) Unfruit(world);
            }
        }
    }

    override function Destroy(world)
    {
        var world=cast(world,FungiWorld);

        super.Destroy(world);
        for (fruit in Fruits)
        {
            world.RemoveSprite(fruit.Spr);
        }
        if (PlantType=="oak")
        {
            world.RemoveSprite(LeavesSpr);
        }
    }
	
	public override function Update(frame:Int, world)
	{
		super.Update(frame,world);
        for (fruit in Fruits)
        {
            fruit.Spr.Update(frame,Spr.Transform);
        }
        if (PlantType=="oak")
        {
            LeavesSpr.Update(frame,Spr.Transform);
        }
   	}

    override function OnSortScene(world:Dynamic, order:Int) : Int
    {
        Spr.SetDepth(order++);
        for (fruit in Fruits)
        {
            world.SetChildIndex(fruit.Spr,order++);
        }        
        if (PlantType=="oak")
        {
            world.SetChildIndex(LeavesSpr,order++);
        }
        return order;
    }

    public function Fruit(world:FungiWorld)
    {
        var Pos:Vec2=Reflect.field(CentrePositions,PlantType)
            .Add(Rnd.RndCircleVec2().Mul(32));
        var NewFruit=new Fruit(Pos,PlantType,0);
        world.AddSprite(NewFruit.Spr);
        Fruits.push(NewFruit);
        Update(0,world);
        NewFruit.Spr.MouseDown(this,function(p:Plant) 
        {            
            if (world.MyName!="" && world.CanPick() /*&& Fruit.State=="fruit-c"*/)
            {
                world.MovePlayer(p,function() {
                    // arsing around with the sprites to get
                    // better feedback for the player
                    p.Fruits.remove(NewFruit);
                    // correct from local to screen coords
                    NewFruit.Spr.Pos=NewFruit.Spr.Pos.Add(
                        new Vec2(p.Pos.x,p.Pos.y));
                    // pass it to the fruit store
                    world.GameGUI.Store.Pick(world,NewFruit);

                    // get the server tile
                    var ServerTileWidth:Int=5;
                    var TilePosX:Int = cast(world.WorldPos.x,Int)+
                        Math.floor(p.LogicalPos.x/ServerTileWidth)-1;
                    var TilePosY:Int = cast(world.WorldPos.y,Int)+
                        Math.floor(p.LogicalPos.y/ServerTileWidth)-1;
                    
                    world.Server.Request(
                        "pick/"+
                            Std.string(TilePosX)+"/"+
                            Std.string(TilePosY)+"/"+
                            Std.string(p.Id)+"/"+
                            Std.string(world.MyID),
                        world,
                        function (c,d) 
                        {
                            if (d.ok==true)
                            {
                                /*// make a brand new one
                                  var ns = new Seed(Fruit.Spr.Pos,Fruit.Type);
                                  ns.ChangeState("fruit-c");
                                  c.Seeds.Add(cast(c,World),ns);
                                  c.AddSprite(ns.Spr);
                                  c.SortScene();*/
                            }
                        });
                },false);
            }
        });
    }

    function Unfruit(world:FungiWorld)
    {
        if (Fruits.length>0)
        {
            var f:Fruit=Rnd.Choose(Fruits);
            world.RemoveSprite(f.Spr);
            Fruits.remove(f);        
        }
    }
}
