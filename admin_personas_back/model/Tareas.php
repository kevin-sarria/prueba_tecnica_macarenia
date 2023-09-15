<?php

namespace  Model;

class Tareas extends ActiveRecord {

    protected static $tabla = 'tareas';
    protected static $columnasDB = ['id', 'title', 'description', 'limit_date', 'id_person' ];

    public function __construct($args = []) {
        $this->id = $args['id'] ?? null;
        $this->title = $args['title'] ?? '';
        $this->description = $args['description'] ?? '';
        $this->limit_date = $args['limit_date'] ?? '';
        $this->id_person = $args['last_name'] ?? '';
    }

    public function validarTarea() {
        
        if( !$this->title ) {
            self::$alertas['error'][] = 'El Titulo es obligatorio';
        }

        if( !$this->description ) {
            self::$alertas['error'][] = 'La descripcion es obligatoria';
        }

        if( !$this->limit_date ) {
            self::$alertas['error'][] = 'La Fecha Limite Nombre es obligatoria';
        }

        if( !$this->id_person ) {
            self::$alertas['error'][] = 'Selecciona a una persona para asignarle la tarea';
        }

    }

}

?>