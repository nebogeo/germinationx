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
import truffle.RndGen;
import truffle.Vec2;
import truffle.Vec3;

class InfoBox
{
    var Rnd:RndGen;
    var X:Int;
    var Y:Int;
    var W:Int;
    var H:Int;
    var TopFrame:Frame;
    var AdditionalSprite:Sprite;
    var Button:Frame;
    var OtherButton:Frame;

    // todo, take options for more buttons
    public function new(world:World,HTMLText:String,x,y,w,h,OnClose,AddSprite)
    {
        X=x; Y=y; W=w; H=h;
        AdditionalSprite=AddSprite;

        if (AdditionalSprite!=null)
        {
            //AdditionalSprite.Colour=new Vec3(0.55,0.85,0.95);
            AdditionalSprite.Update(0,null);
            world.AddSprite(AdditionalSprite);
        }

        Rnd = new RndGen();
        TopFrame=new Frame("",x,y,w,h);
        TopFrame.SetTextSize(10);
        TopFrame.UpdateHTMLText(HTMLText);
        world.AddSprite(TopFrame);
        
        TopFrame.InitTextures(GUIFrameTextures.Get(),Rnd);

        Button=new Frame("Ok",x+w/2,y+h-35,50,20);
#if flash
        Button.TextField.border = true;
#end
        Button.SetTextSize(12);
        Button.UpdateText("Ok");
       // b.InitTextures(GUIFrameTextures.Get(),Rnd);
        world.AddSprite(Button);

        // todo - deal with the options and call server
        Button.MouseDown(this,function(c) {
            OnClose();
            world.RemoveSprite(c.TopFrame);
            world.RemoveSprite(c.Button);
            if (c.OtherButton!=null) 
            {
                world.RemoveSprite(c.OtherButton);
            }
            if (c.AdditionalSprite!=null)
            {
                world.RemoveSprite(c.AdditionalSprite);
            }
        });
    }

    public function AddButton(world:World,Name,OnClick)
    {
        OtherButton=new Frame("",X+W/2+60,Y+H-35,50,20);
#if flash
        OtherButton.TextField.border = true;
#end
        OtherButton.SetTextSize(12);
        OtherButton.UpdateText(Name);
       // b.InitTextures(GUIFrameTextures.Get(),Rnd);
        world.AddSprite(OtherButton);

        // todo - deal with the options and call server
        OtherButton.MouseDown(this,function(c) {
            world.RemoveSprite(c.Button);
            world.RemoveSprite(c.TopFrame);
            world.RemoveSprite(c.OtherButton);
            if (c.AdditionalSprite!=null)
            {
                world.RemoveSprite(c.AdditionalSprite);
            }
            OnClick();
        });
    }
}
