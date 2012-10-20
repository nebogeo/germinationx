package jeash.display;

import flash.display.DisplayObject;
import flash.geom.Matrix;


class Transform
{
   public var matrix(GetMatrix,SetMatrix):Matrix;

   var mObj:DisplayObject;

   public function new(inParent:DisplayObject)
   {
      mObj = inParent;
   }

   public function GetMatrix() : Matrix { return mObj.GetMatrix(); }
   public function SetMatrix(inMatrix:Matrix) : Matrix
       { return mObj.SetMatrix(inMatrix); }

}



