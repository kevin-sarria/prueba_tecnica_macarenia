<?php

namespace Model;

class Inventario extends ActiveRecord {

    protected static $tabla = 'tipo_documento';

    protected static $columnasDB = [ 'id', 'type_document' ];

    public function __construct( $args = [] ) {
        $this->id = $args['id'] ?? null;
        $this->type_document = $args['type_document'] ?? '';
    }

}

?>