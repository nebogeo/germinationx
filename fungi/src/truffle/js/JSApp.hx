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

import truffle.interfaces.App;
import truffle.interfaces.World;

class JSApp extends App
{
    var InnerOnUpdate:Void->Void;
    var InnerOnKeyDown:Int->Void;

    public function new(w:World)
    {
        super(w);
        UpdateCB();
    }

    public function UpdateCB()
    {
        Update();
        haxe.Timer.delay(UpdateCB, 20);
    }
}
