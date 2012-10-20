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

package truffle.canvas;

import hxjson2.JSON;

import truffle.interfaces.ServerConnection;
import truffle.interfaces.ServerRequest;
import truffle.RndGen;

class CanvasServerConnection extends ServerConnection
{
    var LoadedCallback:Dynamic -> Dynamic -> Void;
    var LoadedContext:Dynamic;
    var Rnd:RndGen;
    
    public function new() 
	{
        super();
        Rnd = new RndGen();
/*        Loader = new URLLoader();
        Loader.dataFormat = URLLoaderDataFormat.TEXT;
        Loader.addEventListener(Event.COMPLETE, CompleteHandler);
        Loader.addEventListener(Event.OPEN, OpenHandler);
        Loader.addEventListener(ProgressEvent.PROGRESS, ProgressHandler);
        Loader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, SecurityErrorHandler);
        Loader.addEventListener(HTTPStatusEvent.HTTP_STATUS, HTTPStatusHandler);
        Loader.addEventListener(IOErrorEvent.IO_ERROR, IOErrorHandler);
*/
	}
	
    override function InnerRequest(r:ServerRequest) : Void
    {        
        r.URL+="/"+Std.string(Rnd.RndInt());
        //trace(r.URL);
        var req = new haxe.Http(r.URL);
        req.onError = js.Lib.alert;
        req.onData = function(data) 
        { 
//            trace(data);
            r.Callback(r.Context,JSON.decode(data));
        }
        req.request(false);

/*        Ready=false;
        LoadedCallback = r.Callback;
        LoadedContext = r.Context;
        r.URL+="/"+Std.string(Rnd.RndInt());
        //trace(r.URL);
        var request:URLRequest = new URLRequest(r.URL);
        request.method = URLRequestMethod.POST;
        Loader.load(request);*/
    }
    
    
}
