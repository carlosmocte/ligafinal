<?php
 require_once 'LIGA3/LIGA.php';
 BD('localhost', 'root', '', 'base');
 $tabla = 'usuarios';
 $liga  = LIGA($tabla);
 $cual   = !empty($_POST['cual']) ? $_POST['cual'] : '';
 $select = HTML::selector($liga, 1, array('select'=>array('name'=>'cual', 'id'=>'algocual'),
               'option'=>array('value'=>'@[0]'),
               "option@si('$cual'=='@[0]')"=>array('selected'=>'selected')), array('depende'=>$liga),
                false
 );
 echo $select;