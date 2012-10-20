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

#if flash

import truffle.flash.FlashSprite;
import truffle.flash.FlashSoundPlayer;
import truffle.flash.FlashTextureDesc;
import truffle.flash.FlashApp;
import truffle.flash.FlashWorld;
import truffle.flash.FlashServerConnection;
import truffle.flash.FlashTextEntry;
import truffle.flash.FlashParticles;
import truffle.flash.FlashFrame;

class SoundPlayer extends FlashSoundPlayer {}
class TextureDesc extends FlashTextureDesc {}
class App extends FlashApp {}
class Sprite extends FlashSprite {}
class World extends FlashWorld {}
class ServerConnection extends FlashServerConnection {}
class TextEntry extends FlashTextEntry{}
class Particles extends FlashParticles {}
class Frame extends FlashFrame {}

import truffle.interfaces.Key;
import flash.ui.Keyboard;

class Keyboard 
{
    public static function toInt( k : Key ) : Int
    {
        return switch(k)
        {
        case left: flash.ui.Keyboard.LEFT;
        case right: flash.ui.Keyboard.RIGHT;
        case up: flash.ui.Keyboard.UP;
        case down: flash.ui.Keyboard.DOWN;
        case space: 32;
        }
    }
}

#else // javascript!

import truffle.canvas.CanvasSprite;
import truffle.canvas.CanvasSoundPlayer;
import truffle.canvas.CanvasTextureDesc;
import truffle.canvas.CanvasApp;
import truffle.canvas.CanvasWorld;
import truffle.canvas.CanvasServerConnection;
import truffle.canvas.CanvasTextEntry;
import truffle.canvas.CanvasParticles;
import truffle.canvas.CanvasFrame;
import truffle.canvas.CanvasState;

class SoundPlayer extends CanvasSoundPlayer {}
class TextureDesc extends CanvasTextureDesc {}
class App extends CanvasApp {}
class Sprite extends CanvasSprite {}
class World extends CanvasWorld {}
class ServerConnection extends CanvasServerConnection {}
class TextEntry extends CanvasTextEntry{}
class Particles extends CanvasParticles {}
class Frame extends CanvasFrame {}

import truffle.interfaces.Key;

class Keyboard 
{
    public static function toInt( k : Key ) : Int
    {
        return 0;
/*
        return switch(k)
        {
        case left: js.ui.Keyboard.LEFT;
        case right: js.ui.Keyboard.RIGHT;
        case up: js.ui.Keyboard.UP;
        case down: js.ui.Keyboard.DOWN;
        case space: 32;
        }*/
    }
}


#end
