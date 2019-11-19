<?php
 require_once 'LIGA3/LIGA.php';
 BD('localhost', 'root', '', 'base');
 $tabla = 'usuarios';
 $liga  = LIGA($tabla);
 $cols = array('*', '-contraseña', 'acción'=>'<a href="?borrar=@[0]">Borrar</a>');
 $join = array('depende'=>$liga);
 $pie  = '<th colspan="@[numCols]">Total de instancias: <span id="num_reg">@[numReg]</span></th>';
 HTML::tabla($liga, 'Instancias de '.$tabla, $cols, true, $join, $pie);